<script>
import axios from 'axios';
import { currency } from '@/methods/filter';
import {
  onMounted, onUnmounted, reactive, ref,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const order = reactive({ arr: [] });
    const isLoading = ref('');
    let time = null;

    function getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${route.params.id}`;
      axios
        .get(url)
        .then((res) => {
          if (res.data.success) {
            order.arr = res.data.order;
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
    }
    function confirmPay() {
      isLoading.value = 'pay';
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${route.params.id}`;
      axios
        .post(url)
        .then((res) => {
          if (res.data.success) {
            getOrder();
            time = setTimeout(() => {
              router.push('/frontDesk/products');
            }, 3000);
          } else {
            console.error = () => {
              throw new Error(res.data.message);
            };
          }
          isLoading.value = '';
        })
        .catch((err) => {
          console.error = () => {
            throw new Error(err);
          };
        });
    }

    onMounted(() => {
      getOrder();
    });

    onUnmounted(() => {
      clearTimeout(time);
    });

    return {
      order,
      isLoading,
      currency,
      confirmPay,
    };
  },
};
</script>

<template>
  <div class="bg-dark" style="height: 68px"></div>
  <div class="container bg-white" style="min-height: calc(100vh - 212px)">
    <div class="py-5">
      <div class="paySuccess" v-if="order.arr.is_paid">
        <p>已完成付款，感謝您的訂購!!</p>
      </div>
      <h2 class="pb-2 mb-3 border-3 border-bottom border-orange">訂單明細</h2>
      <table class="table text-center table-responsive-lg">
        <thead>
          <tr class="table-dark">
            <th scope="col">商品名稱</th>
            <th scope="col" width="120">數量</th>
            <th scope="col" class="text-end">小計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in order.arr.products" :key="item.id">
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
            <td colspan="2" class="text-end">總金額</td>
            <td class="text-end">$ {{ currency(order.arr.total) }}</td>
          </tr>
        </tfoot>
      </table>
      <h2 class="pb-2 mb-3 border-3 border-bottom border-orange">訂單資訊</h2>
      <table class="table" v-if="order.arr.user">
        <tbody class="text-secondary">
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
          class="btn btn-secondary me-3"
          to="/frontDesk/products"
          >繼續購物</router-link
        >
        <button
          class="btn btn-primary"
          type="button"
          :class="{ disabled: isLoading === 'pay' }"
          @click="confirmPay"
        >
          <div
            class="spinner-grow text-dark spinner-grow-sm"
            role="status"
            v-if="isLoading === 'pay'"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          確認付款
        </button>
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
  background: url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1625923805243.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=QCe%2FqgI2d5XTZHjvkN%2Fhd1peg5KJIGtivFy0NFNrVnIyBx5pEK4zkNFreR%2BKDa3%2FTaXKVNj3xmgQ1QVwkbQsS%2FszXmw7Uq6JkeEl902mGmdUg9cbk%2BA%2FeJMRhs3HeFCSIC7PGawnsjDOAUjKk4pzQy8%2FFK5GyHfY603hZmDlgaeWl7a8ViJGCfw6mN2X1gccrH3aXKTR6QvsfbONrDg7RqOS8y1hhqw4HRrEjT704wOIh5RXsZLo86Ik8gtOnJM8lHr8D2OyNpQU9sU%2FxExHgxQkwK9%2B6BwK1ok9FT9oDVUpzB4yEo%2FbIrWmTTFNneEGn%2BaRAyPYqyBzknbIhjotPw%3D%3D');
  background-size: cover;
  background-position: center bottom;
  height: 300px;
  margin-bottom: 1rem;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  p {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 0;
    color: #fd7e14;
    font-size: 1.2rem;
    background: rgba(0, 0, 0, 0.5);
    @media (min-width: 576px) {
      font-size: 1.5rem;
    }
  }
}
</style>
