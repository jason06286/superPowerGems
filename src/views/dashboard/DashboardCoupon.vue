<script>
import BaseDelteButton from '@/components/BaseDelteButton.vue';
import BasePagination from '@/components/BasePagination.vue';
import BaseCouponModal from '@/components/BaseCouponModal.vue';
import BaseDeleteCouponModal from '@/components/BaseDeleteModal.vue';
import BaseLoading from '@/components/BaseLoading.vue';
import axios from 'axios';
import { formatDate } from '@/methods/filter';
import useVueSweetAlert2 from '@/methods/useSwal';
import { onMounted, reactive, ref } from 'vue';

export default {
  components: {
    BaseDelteButton,
    BasePagination,
    BaseCouponModal,
    BaseDeleteCouponModal,
    BaseLoading,
  },
  setup() {
    const couponDeleteModal = ref(null);
    const $swal = useVueSweetAlert2();
    const coupons = reactive({ arr: [] });
    const swalSuccess = (title, text) => {
      $swal.fire({
        icon: 'success',
        title,
        text,
      });
    };
    const swalError = (title, text) => {
      $swal.fire({
        icon: 'error',
        title,
        text,
      });
    };

    function couponDetail() {
      const pagination = reactive({ obj: {} });
      const isLoading = ref(false);

      const getCoupons = (page = 1) => {
        isLoading.value = true;
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
        axios
          .get(url)
          .then((res) => {
            if (res.data.success) {
              coupons.arr = res.data.coupons;
              pagination.obj = res.data.pagination;
              isLoading.value = false;
            } else {
              console.error = () => {
                throw new Error(res.data.message);
              };
            }
          })
          .catch((err) => {
            console.error = () => {
              throw new Error(err);
            };
          });
      };
      const delCoupon = (id) => {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`;
        axios
          .delete(url)
          .then((res) => {
            if (res.data.success) {
              getCoupons();
              swalSuccess('刪除優惠券', '刪除優惠券成功!');
            } else {
              swalError('Oops...', res.data.message);
            }
            couponDeleteModal.value.hideDelModal();
          })
          .catch((err) => {
            console.error = () => {
              throw new Error(err);
            };
          });
      };

      onMounted(() => {
        getCoupons();
      });

      return {
        pagination,
        isLoading,
        getCoupons,
        delCoupon,
      };
    }
    function modalDetail() {
      const couponModal = ref(null);
      const tempCoupon = reactive({ obj: {} });
      const newCoupon = ref(false);
      const { getCoupons } = couponDetail();

      const openDeleteModal = (item) => {
        tempCoupon.obj = JSON.parse(JSON.stringify(item));
        couponDeleteModal.value.showDelModal();
      };
      const openCouponModal = (item, isNew) => {
        tempCoupon.obj = JSON.parse(JSON.stringify(item));
        newCoupon.value = isNew;
        couponModal.value.showCouponModal();
      };
      const couponStatus = (item) => {
        tempCoupon.obj = {
          ...item,
          due_date: new Date(item.due_date).getTime() / 1000,
          is_enabled: item.is_enabled ?? 0,
        };
        let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
        let method = 'post';
        if (!newCoupon.value) {
          url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
          method = 'put';
        }
        axios[method](url, { data: tempCoupon.obj })
          .then((res) => {
            if (res.data.success) {
              getCoupons();
              swalSuccess(
                newCoupon.value ? '新增' : '修改',
                newCoupon.value ? '新增優惠券成功!' : '修改優惠券成功!',
              );
            } else {
              swalError('Oops...', res.data.message);
            }
            couponModal.value.hideCouponModal();
          })
          .catch((err) => {
            console.error(err);
          });
      };

      return {
        couponModal,
        tempCoupon,
        newCoupon,
        openDeleteModal,
        openCouponModal,
        couponStatus,
      };
    }

    return {
      ...modalDetail(),
      ...couponDetail(),
      formatDate,
      couponDeleteModal,
      coupons,
    };
  },
};
</script>

<template>
  <BaseLoading :isLoading="isLoading" />
  <div class="my-2">
    <h2 class="pb-3 mb-3 fw-bold border-bottom border-3 border-orange">
      優惠券
    </h2>
    <div class="text-end">
      <button
        class="text-white btn btn-orange"
        type="button"
        @click="openCouponModal({}, true)"
      >
        新增優惠券
      </button>
    </div>
    <div class="table-responsive-lg">
      <table class="table mt-4 table-hover">
        <thead>
          <tr>
            <th>優惠券名稱</th>
            <th>優惠</th>
            <th>到期時間</th>
            <th>折扣碼</th>
            <th>是否啟用</th>
            <th>編輯</th>
            <th>刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coupons.arr" :key="item.id">
            <td>{{ item.title }}</td>
            <td class="text-center">{{ item.percent }}%</td>
            <td class="text-center">{{ formatDate(item.due_date) }}</td>
            <td class="text-center">{{ item.code }}</td>
            <td class="text-center">
              <span class="text-success" v-if="item.is_enabled">啟用</span>
              <span v-else class="text-secondary">未啟用</span>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-orange btn-sm"
                @click="openCouponModal(item, false)"
              >
                編輯
                <i class="bi bi-pen-fill"></i>
              </button>
            </td>
            <td>
              <BaseDelteButton
                :btnSmall="true"
                @click="openDeleteModal(item)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="mt-5 d-flex justify-content-center">
    <BasePagination :pagination="pagination" @get-nowpage="getCoupons" />
  </div>
  <BaseCouponModal
    ref="couponModal"
    :coupon="tempCoupon"
    :newCoupon="newCoupon"
    @coupon-status="couponStatus"
  />
  <BaseDeleteCouponModal
    ref="couponDeleteModal"
    :deleteItem="tempCoupon.obj"
    @delete-item="delCoupon"
  >
    優惠券
  </BaseDeleteCouponModal>
</template>

<style lang="">
</style>
