<script>
// components
import BasePagination from '@/components/BasePagination.vue';
import BaseLoading from '@/components/BaseLoading.vue';
// kit
import axios from 'axios';
import useVueSweetAlert2 from '@/methods/useSwal';
// methods
import { currency, formatDate } from '@/methods/filter';
// vue
import { onMounted, reactive, ref } from 'vue';

export default {
  components: {
    BasePagination,
    BaseLoading,
  },
  setup() {
    const orders = reactive({ arr: [] });
    const pagination = reactive({ obj: {} });
    const tempOrder = reactive({ obj: {} });
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
    function getOrders(page = 1) {
      isLoading.value = true;
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      axios.defaults.headers.common.Authorization = `${token}`;
      axios
        .get(url)
        .then((res) => {
          console.log('produts', res);
          if (res.data.success) {
            orders.arr = res.data.orders;
            pagination.obj = res.data.pagination;
            isLoading.value = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    function delAllOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/all`;
      axios
        .delete(url)
        .then((res) => {
          if (res.data.success) {
            getOrders();
            swalSuccess('刪除所有訂單', '刪除所有訂單成功!');
          } else {
            swalError('Oops...', res.data.message);
          }
          console.log('delete', res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    function delOrder(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${id}`;
      axios
        .delete(url)
        .then((res) => {
          if (res.data.success) {
            getOrders();
            swalSuccess('刪除訂單', '刪除訂單成功!');
          } else {
            swalError('Oops...', res.data.message);
          }
          console.log('delete', res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    function editOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${tempOrder.obj.id}`;
      axios
        .put(url, {
          data: {
            ...tempOrder.obj,
          },
        })
        .then((res) => {
          if (res.data.success) {
            console.log('edit :>> ', res);
            getOrders();
            swalSuccess('修改訂單', '修改訂單成功!');
          } else {
            swalError('Oops...', res.data.message);
          }
          console.log('edit', res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    function isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    }

    onMounted(() => [getOrders()]);

    return {
      // variable
      orders,
      pagination,
      tempOrder,
      isLoading,
      // methods
      getOrders,
      delOrder,
      delAllOrder,
      currency,
      formatDate,
      isPhone,
      editOrder,
    };
  },
};
</script>

<template >
<BaseLoading :isLoading="isLoading" />
  <div class="my-2">
    <h2 class="fw-bold border-bottom border-3 border-orange pb-3 mb-3">
      訂單列表
    </h2>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item" v-for="item in orders.arr" :key="item.id">
        <h2 class="accordion-header" :id="`${item.id}6`">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#${item.id}`"
            aria-expanded="false"
            :aria-controls="item.id"
            @click="tempOrder.obj = JSON.parse(JSON.stringify(item))"
          >
            訂單編號:{{ item.id }}
          </button>
        </h2>
        <div
          :id="item.id"
          class="accordion-collapse collapse"
          :aria-labelledby="`${item.id}6`"
          data-bs-parent="#accordionExample"
        >
          <div
            class="accordion-body"
            v-if="
              Object.keys(tempOrder.obj).length != 0 &&
              tempOrder.obj.id === item.id
            "
          >
            <div class="d-flex justify-content-between">
              <h4 class="fw-bold">
                訂單時間:
                <span class="mx-1">
                  {{ formatDate(tempOrder.obj.create_at) }}</span
                >
              </h4>
              <h4 class="text-success" v-if="tempOrder.obj.is_paid">已付款</h4>
              <h4 class="text-secondary" v-else>未付款</h4>
            </div>
            <div class="row">
              <div class="col-lg-6 col-12">
                <div class="p-4">
                  <h5 class="border-bottom border-2 border-orange pb-2 ">
                    訂單內容
                  </h5>
                  <p
                    class="mb-2  border-bottom border-gray pb-2 "
                    v-for="(product) in tempOrder.obj.products"
                    :key="product.id"
                  >
                    {{ product.product.title }}/{{ product.qty
                    }}{{ product.product.unit }}
                  </p>
                  <h5 class=" text-end">
                    總金額:<span class="m-2">{{
                      currency(tempOrder.obj.total)
                    }}</span
                    >元
                  </h5>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <Form v-slot="{ errors }">
                  <div class="form-group mb-3">
                    <label for="name" class="mb-2">Name *</label>
                    <Field
                      id="name"
                      name="name"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors['name'] }"
                      placeholder="請輸入 name"
                      rules="required"
                      v-model="tempOrder.obj.user.name"
                    ></Field>
                    <ErrorMessage
                      name="name"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                  <div class="form-group mb-3">
                    <label for="email" class="mb-2">Email *</label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      class="form-control"
                      :class="{ 'is-invalid': errors['email'] }"
                      placeholder="請輸入 Email"
                      rules="email|required"
                      v-model="tempOrder.obj.user.email"
                    ></Field>
                    <ErrorMessage
                      name="email"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                  <div class="form-group mb-3">
                    <label for="tel" class="mb-2">Phone *</label>
                    <Field
                      id="tel"
                      name="tel"
                      type="tel"
                      class="form-control"
                      :class="{ 'is-invalid': errors['tel'] }"
                      placeholder="請輸入 tel"
                      :rules="isPhone"
                      v-model="tempOrder.obj.user.tel"
                    ></Field>
                    <ErrorMessage
                      name="tel"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                  <div class="form-group mb-3">
                    <label for="address" class="mb-2">Address *</label>
                    <Field
                      id="address"
                      name="address"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors['address'] }"
                      placeholder="請輸入 address"
                      rules="required"
                      v-model="tempOrder.obj.user.address"
                    ></Field>
                    <ErrorMessage
                      name="address"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                  <div class="d-flex justify-content-end w-100">
                    <button
                      class="btn btn-primary me-3"
                      type="button"
                      @click="editOrder"
                    >
                      修改客戶資料
                    </button>
                    <button
                      class="btn btn-danger"
                      type="button"
                      @click="delOrder(item.id)"
                    >
                      刪除訂單
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-5">
      <BasePagination :pagination="pagination" @get-nowpage="getOrders" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
