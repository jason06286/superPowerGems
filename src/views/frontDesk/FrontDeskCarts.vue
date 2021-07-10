<script>
// kit
import axios from 'axios';
// methods
import { currency } from '@/methods/filter';
import emitter from '@/methods/emitter';
// vue
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const carts = reactive({ arr: [] });
    const coupon = ref('');
    const isChageQty = ref(false);
    const user = reactive({ user: {} });
    const message = ref('');
    const isLoading = ref('');

    function getCarts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      axios
        .get(url)
        .then((res) => {
          console.log('carts', res);
          if (res.data.success) {
            carts.arr = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    function delProduct(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      axios
        .delete(url)
        .then((res) => {
          console.log('carts', res);
          if (res.data.success) {
            emitter.emit('update-cart');
            getCarts();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    function editCart(qty, id) {
      isChageQty.value = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      axios
        .put(url, {
          data: {
            product_id: id,
            qty,
          },
        })
        .then((res) => {
          console.log('edit', res);
          if (res.data.success) {
            isChageQty.value = false;
            emitter.emit('update-cart');
            getCarts();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    function addQty(item) {
      const qty = item.qty + 1;
      editCart(qty, item.id);
    }
    function minusQty(item) {
      const qty = item.qty - 1;
      editCart(qty, item.id);
    }
    function useCoupon() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      axios
        .post(url, { data: { code: coupon.value } })
        .then((res) => {
          console.log('coupon', res);
          if (res.data.success) {
            emitter.emit('update-cart');
            getCarts();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    function isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    }
    function onSubmit() {
      isLoading.value = 'submit';
      const url = `   ${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      axios
        .post(url, {
          data: {
            user: user.user,
            message: message.value,
          },
        })
        .then((res) => {
          isLoading.value = '';
          console.log('submit', res);
          if (res.data.success) {
            router.push(`/frontDesk/pay/${res.data.orderId}`);
            emitter.emit('update-cart');
            console.log('訂單成功 :>> ', '訂單成功');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    onMounted(() => {
      getCarts();
    });

    return {
      // variable
      carts,
      coupon,
      isChageQty,
      user,
      message,
      isLoading,
      // methods
      currency,
      delProduct,
      addQty,
      minusQty,
      useCoupon,
      isPhone,
      onSubmit,
    };
  },
};
</script>

<template >
  <div class="container">
    <div class="py-5">
      <h2 class="pb-2 mb-3 border-3 border-bottom border-orange">購屋車內容</h2>
      <div class="cart-content" v-if="carts.arr?.carts?.length === 0">
        <p class="mb-0 fs-5">購物車內無東西</p>
        <router-link to="/frontDesk/products" class="d-block text-orange fs-4"
          >選購商品</router-link
        >
      </div>
      <table class="table text-center table-responsive-lg" v-else>
        <thead>
          <tr class="table-dark">
            <th scope="col"></th>
            <th scope="col">商品名稱</th>
            <th scope="col" width="120">數量</th>
            <th scope="col" class="text-end">小計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in carts.arr.carts" :key="item.id">
            <td>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="delProduct(item)"
              >
                <i class="bi bi-trash-fill"></i>
              </button>
            </td>
            <td class="align-middle">
              {{ item.product.title }}
            </td>
            <td class="align-middle">
              <div class="input-group input-group-sm">
                <button
                  class="btn btn-outline-secondary"
                  :class="{ disabled: isChageQty }"
                  type="button"
                  @click="addQty(item)"
                >
                  +
                </button>
                <input
                  type="number"
                  class="text-center form-control"
                  min="1"
                  disabled
                  v-model.number="item.qty"
                />
                <button
                  class="btn btn-outline-secondary"
                  :class="{ disabled: item.qty <= 1 || isChageQty }"
                  type="button"
                  @click="minusQty(item)"
                >
                  -
                </button>
              </div>
            </td>
            <td class="align-middle text-end">$ {{ currency(item.total) }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr
            v-show="carts.arr.total > carts.arr.final_total"
            class="text-danger"
          >
            <td colspan="3" class="text-end">折扣優惠</td>
            <td class="line-through text-end">
              $ {{ currency(carts.arr.total - carts.arr.final_total) }}
            </td>
          </tr>
          <tr>
            <td colspan="3" class="text-end">總金額</td>
            <td class="text-end">$ {{ currency(carts.arr.final_total) }}</td>
          </tr>
        </tfoot>
      </table>
      <div class="mb-3 input-group" v-if="carts.arr?.carts?.length != 0">
        <input
          type="text"
          class="form-control"
          placeholder="請輸入優惠券代碼"
          aria-label="請輸入優惠券代碼"
          aria-describedby="button-addon2"
          v-model="coupon"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          :class="{ disabled: coupon === '' }"
          @click="useCoupon"
        >
          套用優惠券
        </button>
      </div>
      <h2 class="pb-2 mb-3 border-3 border-bottom border-orange">
        收件人資訊<span class="text-danger fs-4 ms-2">(必填)</span>
      </h2>
      <Form v-slot="{ errors }" @submit="onSubmit">
        <div class="mb-3 form-group">
          <label for="name" class="mb-2">聯絡人</label>
          <Field
            id="name"
            name="聯絡人"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['聯絡人'] }"
            placeholder="請輸入聯絡人"
            rules="required"
            v-model="user.user.name"
          ></Field>
          <ErrorMessage name="聯絡人" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3 form-group">
          <label for="email" class="mb-2">信箱</label>
          <Field
            id="email"
            name="信箱"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['信箱'] }"
            placeholder="請輸入信箱"
            rules="email|required"
            v-model="user.user.email"
          ></Field>
          <ErrorMessage name="信箱" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3 form-group">
          <label for="tel" class="mb-2">電話</label>
          <Field
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入 tel"
            :rules="isPhone"
            v-model="user.user.tel"
          ></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>
        <h2 class="pb-2 mb-3 border-3 border-bottom border-orange">
          配送資訊<span class="text-danger fs-4 ms-2">(必填)</span>
        </h2>
        <div class="mb-3 form-group">
          <label for="address" class="mb-2">地址</label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="user.user.address"
          ></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3 form-group">
          <h4 class="pb-2 mb-3 border-3 border-bottom border-orange">
            留言<span class="text-secondary fs-5 ms-2">(選填)</span>
          </h4>
          <label for="message" class="mb-2">留言</label>
          <textarea
            class="form-control"
            id="message"
            placeholder="有什麼話想對我們說呢?"
            rows="3"
            v-model="message"
          ></textarea>
        </div>
        <div class="d-flex justify-content-end">
          <router-link
            type="button"
            class="btn btn-secondary me-3"
            to="/frontDesk/products"
            >繼續購物</router-link
          >

          <button class="btn btn-orange" type="submit">
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
              v-if="isLoading === 'submit'"
            ></span>
            送出訂單
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.line-through {
  text-decoration: line-through;
}
.cart-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  background: #ededed;
  margin-bottom: 1rem;
}
table{
  @media (max-width:320px) {
    font-size: 12px;
  }
}
</style>
