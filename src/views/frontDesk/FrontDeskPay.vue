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
  <div class="container" style="min-height: calc(100vh - 212px)">
    <div class="py-5">
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8 col-12">
          <div class="mb-3 d-flex justify-content-end">
            <div class="step">
              <p class="mb-0">1</p>
              <p class="mb-0">填寫資訊</p>
            </div>
            <div class="step" :class="{ 'bg-darkred': !isConfirm }">
              <p class="mb-0">2</p>
              <p class="mb-0">確認訂單</p>
            </div>
            <div class="step" :class="{ 'bg-darkred': isConfirm }">
              <p class="mb-0">3</p>
              <p class="mb-0">完成購物</p>
            </div>
          </div>
          <div class="paySuccess" v-if="order.arr.is_paid">
            <p class="fw-bold text-lightred fs-4">已完成付款，感謝您的訂購!!</p>
            <div class="d-flex">
              <router-link to="/" class="btn btn-outline-title me-3"
                >前往首頁</router-link
              >
              <router-link to="/frontDesk/products" class="btn btn-lightred"
                >前往商店</router-link
              >
            </div>
          </div>
          <h4 class="pb-2 mb-3 border-2 border-bottom border-darkred">
            訂單明細
          </h4>
          <table class="table text-center table-responsive-lg text-content">
            <thead>
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
              <tr>
                <td colspan="3" class="text-end">總金額</td>
                <td class="text-end">$ {{ currency(order.arr.total) }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="col-lg-2"></div>
      </div>
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8 col-12">
          <h4 class="pb-2 mb-3 border-2 border-bottom border-darkred">
            訂單資訊
          </h4>
          <table class="table text-content" v-if="order.arr.user">
            <tbody>
              <tr>
                <th scope="row" class="font-weight-normal">Email</th>
                <td>{{ order.arr.user.email }}</td>
              </tr>
              <tr>
                <th scope="row" class="font-weight-normal">收件人名稱</th>
                <td>{{ order.arr.user.name }}</td>
              </tr>
              <tr>
                <th scope="row" class="font-weight-normal">收件人電話</th>
                <td>{{ order.arr.user.tel }}</td>
              </tr>
              <tr>
                <th scope="row" class="font-weight-normal">收件人地址</th>
                <td>{{ order.arr.user.address }}</td>
              </tr>
              <tr>
                <th scope="row" class="font-weight-normal">訂單編號</th>
                <td>{{ order.arr.id }}</td>
              </tr>
              <tr>
                <th scope="row" class="font-weight-normal">付款狀態</th>
                <td class="text-success" v-if="order.arr.is_paid">已付款</td>
                <td class="text-danger" v-else>未付款</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-end" v-if="!order.arr.is_paid">
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
        <div class="col-lg-2"></div>
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
  background: url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1628487788446.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=VZljZPEtDOu5CTO3rA2ClOCvUb3WlrwYLqBI06TCZzThNZsoEAu1n43jKUlycs4Qr5URhPn%2FIP2w7A79NhYBTkV4fvOQkVK94aa7rnGatWrSctb1UL2XCe4RjXcvwxEB7VI%2FExQwR9lHvWDEC4E4vtKZmltOrV2PDtK1iVsLpka7yFI%2Fq41Pk7qVoz%2FN7iTiKrWDRkkhN0UfCyKcDfRUUqXfMzM5Uoi5hwH61l5bSlm%2BOr2Z4nIlrtbotdccsHRgwiH31XZMTzcwcgb4L7XGR7WsT1B7A0STW%2Bi9AfihzRFrDhhiQifoPrlCeAxyEbAp2MMOHy9pL1xxgMNIA5xsUg%3D%3D');
  background-size: cover;
  background-position: center bottom;
  height: 300px;
  margin-bottom: 1rem;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.step {
  background: rgba($color: #000, $alpha: 0.5);
  color: rgba($color: #fff, $alpha: 0.8);
  padding: 0.5rem 1rem;
  text-align: center;
  pointer-events: none;
}
</style>
