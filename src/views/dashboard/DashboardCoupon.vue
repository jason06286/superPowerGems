<script>
// components
import BaseDelteButton from '@/components/BaseDelteButton.vue';
import BasePagination from '@/components/BasePagination.vue';
import BaseCouponModal from '@/components/BaseCouponModal.vue';
import BaseLoading from '@/components/BaseLoading.vue';
// kit
import axios from 'axios';
import useVueSweetAlert2 from '@/methods/useSwal';
// methods
import { formatDate } from '@/methods/filter';
// vue
import { onMounted, reactive, ref } from 'vue';

export default {
  components: {
    BaseDelteButton,
    BasePagination,
    BaseCouponModal,
    BaseLoading,
  },
  setup() {
    const coupons = reactive({ arr: [] });
    const tempCoupon = reactive({ obj: {} });
    const pagination = reactive({ obj: {} });
    const couponModal = ref(null);
    const newCoupon = ref(false);
    const $swal = useVueSweetAlert2();
    const isLoading = ref(false);

    function swalSuccess(title, text) {
      $swal.fire({
        icon: 'success',
        title,
        text,
      });
    }
    function swalError(title, text) {
      $swal.fire({
        icon: 'error',
        title,
        text,
      });
    }
    function getCoupons(page = 1) {
      isLoading.value = true;
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      axios.defaults.headers.common.Authorization = `${token}`;
      axios
        .get(url)
        .then((res) => {
          console.log('produts', res);
          if (res.data.success) {
            coupons.arr = res.data.coupons;
            pagination.obj = res.data.pagination;
            isLoading.value = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    function delCoupon(id) {
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
          console.log('delete', res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    function openCouponModal(item, isNew) {
      tempCoupon.obj = JSON.parse(JSON.stringify(item));
      newCoupon.value = isNew;
      couponModal.value.showCouponModal();
    }
    function couponStatus(item) {
      tempCoupon.obj = {
        ...item,
        due_date: new Date(item.due_date).getTime() / 1000,
        is_enabled: item.is_enabled ?? 0,
      };
      console.log('item :>> ', item);
      console.log(tempCoupon.obj);
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
          console.log('couponModal.value :>> ', couponModal.value);
          console.log('coupon', res);
          couponModal.value.hideCouponModal();
        })
        .catch((err) => {
          console.log(err);
        });
    }
    onMounted(() => {
      getCoupons();
    });
    return {
    // variable
      coupons,
      pagination,
      couponModal,
      tempCoupon,
      isLoading,
      newCoupon,
      // methods
      getCoupons,
      delCoupon,
      formatDate,
      couponStatus,
      openCouponModal,
    };
  },
};
</script>

<template >
<BaseLoading :isLoading="isLoading" />
  <div class="my-2">
    <h2 class="fw-bold border-bottom border-3 border-orange pb-3 mb-3">
      優惠券
    </h2>
    <div class="text-end">
      <button
        class="btn btn-orange text-white"
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
            <th col="">優惠券名稱</th>
            <th col="">優惠</th>
            <th col="">到期時間</th>
            <th col="">折扣碼</th>
            <th>是否啟用</th>
            <th col="">編輯</th>
            <th col="">刪除</th>
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
              <BaseDelteButton :btnSmall="true" @click="delCoupon(item.id)" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="d-flex justify-content-center mt-5">
    <BasePagination :pagination="pagination" @get-nowpage="getCoupons" />
  </div>
  <BaseCouponModal
    ref="couponModal"
    :coupon="tempCoupon"
    :newCoupon="newCoupon"
    @coupon-status="couponStatus"
  />
</template>

<style lang="">
</style>
