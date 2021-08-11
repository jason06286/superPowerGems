<script>
import axios from 'axios';

import { currency } from '@/methods/filter';
import pushMessageState from '@/methods/pushMessageState';

import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const order = reactive({ arr: [] });
    const isLoading = ref('');
    const isConfirm = ref(false);

    function getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${route.params.id}`;
      axios
        .get(url)
        .then((res) => {
          if (res.data.success) {
            order.arr = res.data.order;
          } else {
            pushMessageState(res, '取得訂單');
          }
        })
        .catch((err) => {
          pushMessageState(err, '取得訂單');
        });
    }
    function confirmPay() {
      isLoading.value = 'pay';
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${route.params.id}`;
      axios
        .post(url)
        .then((res) => {
          if (res.data.success) {
            getOrder();
            isConfirm.value = true;
          } else {
            pushMessageState(res, '付款');
          }
          isLoading.value = '';
        })
        .catch((err) => {
          pushMessageState(err, '付款');
        });
    }

    onMounted(() => {
      getOrder();
    });

    return {
      order,
      isLoading,
      currency,
      confirmPay,
      isConfirm,
    };
  },
};
</script>

<template>
  <div class="bg-dark" style="height: 68px"></div>
  <div class="paySuccess" v-if="order.arr.is_paid">
    <p class="fw-bold text-title fs-4">已完成付款，感謝您的訂購!!</p>
    <p class="text-title">訂單編號: {{ order.arr.id }}</p>
    <div class="d-flex">
      <router-link to="/" class="btn btn-outline-title btn-lg me-3"
        >前往首頁</router-link
      >
      <router-link to="/frontDesk/products" class="btn btn-lightred btn-lg"
        >前往商店</router-link
      >
    </div>
  </div>
  <div
    class="container"
    style="min-height: calc(100vh - 212px)"
    v-if="!order.arr.is_paid"
  >
    <div class="py-5">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="mb-4 col-md-2 col-12">
          <div
            class=" d-flex align-items-center justify-content-center justify-content-lg-start h-100"
          >
            <h4
              class="pb-2 mb-0 border-2 border-bottom border-darkred text-title"
            >
              確認付款
            </h4>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div
            class="mb-4 d-flex justify-content-center justify-content-md-end"
          >
            <div class="step">
              <p class="mb-0">1</p>
              <p class="mb-0">購物車</p>
            </div>
            <div class="step">
              <p class="mb-0">2</p>
              <p class="mb-0">確認訂單</p>
            </div>
            <div class="step" :class="{ 'bg-darkred': !isConfirm }">
              <p class="mb-0">3</p>
              <p class="mb-0">確認付款</p>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="p-3 bg-black col-md-8 col-12 p-lg-5">
          <table
            class="table mb-0 text-center  table-responsive-lg text-content border-bottom-0"
          >
            <thead class="border-top">
              <tr>
                <th scope="col" width="60"></th>
                <th scope="col" width="120">商品名稱</th>
                <th scope="col" width="60">數量</th>
                <th scope="col" class="text-end" width="120">小計</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in order.arr.products" :key="item.id">
                <td class="align-middle">
                  <img
                    :src="item.product.imageUrl"
                    :alt="item.product.description"
                    class="img-fluid"
                    style="heigt: 3rem"
                  />
                </td>
                <td class="align-middle">
                  {{ item.product.title }}
                </td>
                <td class="align-middle">
                  {{ item.qty }}
                </td>
                <td class="align-middle text-end">
                  $ {{ currency(item.final_total) }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="text-darkred text-end">
                <td class="border-bottom-0"></td>
                <td class="pt-3 border-bottom-0 fs-5" colspan="3">
                  總金額: $ {{ currency(order.arr.total) }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="p-3 bg-black col-md-8 col-12 p-lg-5">
          <table class="table text-content" v-if="order.arr.user">
            <tbody class="border-top">
              <tr>
                <th scope="col" class="font-weight-normal" width="200">
                  Email
                </th>
                <td>{{ order.arr.user.email }}</td>
              </tr>
              <tr>
                <th scope="col" class="font-weight-normal" width="200">
                  收件人名稱
                </th>
                <td>{{ order.arr.user.name }}</td>
              </tr>
              <tr>
                <th scope="col" class="font-weight-normal" width="200">
                  收件人電話
                </th>
                <td>{{ order.arr.user.tel }}</td>
              </tr>
              <tr>
                <th scope="col" class="font-weight-normal" width="200">
                  收件人地址
                </th>
                <td>{{ order.arr.user.address }}</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-end">
            <router-link
              type="button"
              class="btn btn-outline-title me-3"
              to="/frontDesk/products"
              >繼續購物</router-link
            >
            <button
              class="btn btn-lightred"
              type="button"
              :class="{ disabled: isLoading === 'pay' }"
              @click="confirmPay"
            >
              <div
                class="spinner-border spinner-border-sm"
                role="status"
                v-if="isLoading === 'pay'"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
              確認付款
            </button>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  border-bottom: 3px solid #fd7e14;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  display: inline-block;
}
.paySuccess {
  min-height: calc(100vh - 212px);
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23111111' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%23222222' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%23333333' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%23454545' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%23565656' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%23676767' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%23787878' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
.step {
  background: rgba($color: #000, $alpha: 0.5);
  color: rgba($color: #fff, $alpha: 0.8);
  padding: 0.5rem 1rem;
  text-align: center;
  pointer-events: none;
}
</style>
