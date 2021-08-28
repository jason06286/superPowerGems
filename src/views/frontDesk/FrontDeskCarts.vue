<script>
import BaseSwiper from '@/components/BaseSwiper.vue';

import { currency } from '@/methods/filter';
import {
  apiUserAllProducts,
  apiUserGetCarts,
  apiUserDelProduct,
  apiUserEditCart,
  apiUserUseCoupon,
  apiUserSubmitOrder,
} from '@/api/api';
import emitter from '@/methods/emitter';
import pushMessageState from '@/methods/pushMessageState';

import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    BaseSwiper,
  },
  setup() {
    const router = useRouter();
    const carts = reactive({ arr: [] });
    const isLoading = ref('');
    const isChangeQty = ref(false);
    const isGoPay = ref(false);

    const products = reactive({ arr: [] });

    async function getAllProducts() {
      try {
        const res = await apiUserAllProducts();
        if (res.data.success) {
          products.arr = res.data.products;
        } else {
          pushMessageState(res, '取得所有商品資料');
        }
      } catch (error) {
        pushMessageState(error, '取得所有商品資料');
      }
    }

    onMounted(() => {
      getAllProducts();
    });

    function cartDetail() {
      const coupon = ref('');

      async function getCarts() {
        try {
          const res = await apiUserGetCarts();
          if (res.data.success) {
            carts.arr = res.data.data;
          } else {
            pushMessageState(res, '取得購物車');
          }
        } catch (error) {
          pushMessageState(error, '取得購物車');
        }
      }

      async function delProduct(item) {
        isLoading.value = item.id;
        try {
          const res = await apiUserDelProduct(item.id);
          if (res.data.success) {
            emitter.emit('update-cart');
            getCarts();
            isLoading.value = '';
          }
          pushMessageState(res, '刪除商品');
        } catch (error) {
          pushMessageState(error, '刪除商品');
        }
      }
      async function editCart(qty, id) {
        isChangeQty.value = true;
        const data = {
          data: {
            product_id: id,
            qty,
          },
        };
        try {
          const res = await apiUserEditCart(id, data);
          if (res.data.success) {
            isChangeQty.value = false;
            emitter.emit('update-cart');
            getCarts();
          }
          pushMessageState(res, '修改商品');
        } catch (error) {
          pushMessageState(error, '修改商品');
        }
      }
      async function useCoupon() {
        const data = { data: { code: coupon.value } };
        try {
          const res = await apiUserUseCoupon(data);
          if (res.data.success) {
            emitter.emit('update-cart');
            getCarts();
          }
          pushMessageState(res, '套用優惠券');
        } catch (error) {
          pushMessageState(error, '套用優惠券');
        }
      }

      onMounted(() => {
        getCarts();
      });

      return {
        products,
        coupon,
        getCarts,
        delProduct,
        editCart,
        useCoupon,
        isGoPay,
      };
    }
    function qtyDetail() {
      const { editCart } = cartDetail();

      const addQty = (item) => {
        const qty = item.qty + 1;
        editCart(qty, item.id);
      };
      const minusQty = (item) => {
        const qty = item.qty - 1;
        editCart(qty, item.id);
      };

      return {
        addQty,
        minusQty,
      };
    }
    function formDetail() {
      const user = reactive({ user: {} });
      const message = ref('');

      const isPhone = (value) => {
        const phoneNumber = /^(09)[0-9]{8}$/;
        return phoneNumber.test(value) ? true : '需要正確的電話號碼';
      };
      async function onSubmit() {
        isLoading.value = 'submit';
        const data = {
          data: {
            user: user.user,
            message: message.value,
          },
        };
        try {
          const res = await apiUserSubmitOrder(data);
          isLoading.value = '';
          if (res.data.success) {
            router.push(`/frontDesk/pay/${res.data.orderId}`);
            emitter.emit('update-cart');
          }
          pushMessageState(res, '送出訂單');
        } catch (error) {
          pushMessageState(error, '送出訂單');
        }
      }

      return {
        user,
        message,
        isPhone,
        onSubmit,
      };
    }

    return {
      carts,
      isChangeQty,
      isLoading,
      currency,
      ...cartDetail(),
      ...qtyDetail(),
      ...formDetail(),
    };
  },
};
</script>

<template>
  <div style="height: 68px"></div>
  <div class="container-lg" style="min-height: calc(100vh - 212px)">
    <div class="py-5 p-lg-5">
      <div class="cart-content" v-if="carts.arr?.carts?.length === 0">
        <div class="empty-cart"></div>
        <p class="mb-0 fs-4">購物車內無東西</p>
        <router-link to="/frontDesk/products" class="d-block text-lightred fs-4"
          >請選購商品</router-link
        >
      </div>
      <BaseSwiper
        :products="products.arr"
        v-if="carts.arr?.carts?.length === 0"
      >
        你可能會喜歡
      </BaseSwiper>
      <div class="row" v-if="carts.arr?.carts?.length !== 0">
        <div class="col-md-1"></div>
        <div class="mb-4 col-md-2 col-12">
          <div
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-lg-start
              h-100
            "
          >
            <h4
              class="pb-2 mb-0 border-2 border-bottom border-darkred text-title"
              v-if="!isGoPay"
            >
              購物車
            </h4>
            <h4
              class="pb-2 mb-0 border-2 border-bottom border-darkred text-title"
              v-else
            >
              確認訂單
            </h4>
          </div>
        </div>
        <div class="mb-4 col-md-8">
          <div class="d-flex justify-content-center justify-content-md-end">
            <div class="step" :class="{ 'bg-darkred': !isGoPay }">
              <p class="mb-0">1</p>
              <p class="mb-0">購物車</p>
            </div>
            <div class="step" :class="{ 'bg-darkred': isGoPay }">
              <p class="mb-0">2</p>
              <p class="mb-0">確認訂單</p>
            </div>
            <div class="step">
              <p class="mb-0">3</p>
              <p class="mb-0">確認付款</p>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
      <div class="row" v-if="!isGoPay">
        <div class="col-md-1"></div>
        <div
          class="p-3 bg-black p-lg-5 col-md-10 col-12"
          v-if="carts.arr?.carts?.length !== 0"
        >
          <table class="table text-center text-content">
            <thead>
              <tr>
                <th scope="col" width="80"></th>
                <th scope="col" width="200">商品名稱</th>
                <th scope="col" width="120">數量</th>
                <th scope="col" class="text-end" width="120">小計</th>
                <th scope="col" width="30"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in carts.arr.carts" :key="item.id">
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
                  <div class="input-group input-group-sm">
                    <button
                      class="btn btn-outline-content"
                      :class="{ disabled: item.qty <= 1 || isChangeQty }"
                      type="button"
                      @click="minusQty(item)"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      class="text-center form-control"
                      min="1"
                      disabled
                      v-model.number="item.qty"
                    />
                    <button
                      class="btn btn-outline-content"
                      :class="{ disabled: isChangeQty }"
                      type="button"
                      @click="addQty(item)"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td class="align-middle text-end">
                  $ {{ currency(item.total) }}
                </td>
                <td class="align-middle text-end">
                  <button
                    class="btn btn-outline-danger btn-sm"
                    type="button"
                    disabled
                    v-if="isLoading === item.id"
                  >
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Loading...</span>
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-trash"
                    @click="delProduct(item)"
                    v-else
                  >
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr
                v-show="carts.arr.total > carts.arr.final_total"
                class="text-darkred"
              >
                <td colspan="4" class="text-end">折扣優惠</td>
                <td class="line-through text-end">
                  $ {{ currency(carts.arr.total - carts.arr.final_total) }}
                </td>
              </tr>
              <tr>
                <td colspan="4" class="text-end">總金額</td>
                <td class="text-end" width="120">
                  $ {{ currency(carts.arr.final_total) }}
                </td>
              </tr>
            </tfoot>
          </table>
          <div class="d-flex justify-content-end">
            <div
              class="input-group coupon"
              v-if="carts.arr?.carts?.length != 0"
            >
              <input
                type="text"
                class="form-control"
                placeholder="請輸入優惠券代碼"
                aria-label="請輸入優惠券代碼"
                aria-describedby="button-addon2"
                v-model="coupon"
              />
              <button
                class="btn btn-outline-title"
                type="button"
                id="button-addon2"
                :class="{ disabled: coupon === '' }"
                @click="useCoupon"
              >
                套用優惠券
              </button>
            </div>
          </div>
          <div class="mt-5 d-flex justify-content-between">
            <router-link
              type="button"
              class="btn btn-outline-content me-3"
              to="/frontDesk/products"
              >繼續購物</router-link
            >
            <button
              class="btn btn-lightred"
              type="submit"
              @click.prevent="isGoPay = true"
            >
              前往結帳
            </button>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
      <div class="row" v-else>
        <div class="col-md-1"></div>
        <div class="p-3 bg-black col-md-10 col-12 p-lg-5">
          <Form class="row" v-slot="{ errors }" @submit="onSubmit">
            <div class="col-md-6 col-12">
              <div class="mb-3 form-group">
                <label for="name" class="mb-2">
                  <span class="text-darkred">*</span>
                  聯絡人
                </label>
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
                <ErrorMessage
                  name="聯絡人"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="mb-3 form-group">
                <label for="email" class="mb-2">
                  <span class="text-darkred">*</span>
                  信箱
                </label>
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
                <ErrorMessage
                  name="信箱"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="mb-3 form-group">
                <label for="tel" class="mb-2">
                  <span class="text-darkred">*</span>
                  電話
                </label>
                <Field
                  id="tel"
                  name="電話"
                  type="tel"
                  class="form-control"
                  :class="{ 'is-invalid': errors['電話'] }"
                  placeholder="請輸入電話"
                  :rules="isPhone"
                  v-model="user.user.tel"
                ></Field>
                <ErrorMessage
                  name="電話"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="mb-3 form-group">
                <label for="address" class="mb-2">
                  <span class="text-darkred">*</span>
                  地址
                </label>
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
                <ErrorMessage
                  name="地址"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="mb-3 form-group">
                <label for="message" class="mb-2">留言</label>
                <textarea
                  class="form-control"
                  id="message"
                  placeholder="有什麼話想對我們說呢?"
                  rows="3"
                  v-model="message"
                ></textarea>
              </div>
            </div>
            <div class="p-3 col-md-6 col-12 p-lg-5">
              <h4 class="pb-3 mb-3 border-bottom">總金額</h4>
              <div class="mb-3 d-flex justify-content-between">
                <p class="mb-0">小計</p>
                <p class="mb-0">$ {{ currency(carts.arr.total) }}</p>
              </div>
              <div class="mb-3 d-flex justify-content-between">
                <p class="mb-0">折扣優惠</p>
                <p class="mb-0 line-through">
                  $ {{ currency(carts.arr.total - carts.arr.final_total) }}
                </p>
              </div>
              <h4 class="mb-5 text-end">
                $ {{ currency(carts.arr.final_total) }}
              </h4>
              <div class="d-grid">
                <button
                  class="btn btn-lightred"
                  :class="{ 'not-allowed': Object.keys(user.user).length < 4 }"
                  type="submit"
                >
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                    v-if="isLoading === 'submit'"
                  ></span>
                  送出訂單
                </button>
              </div>
            </div>
          </Form>
        </div>

        <div class="col-md-1"></div>
      </div>
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
  margin-bottom: 1rem;
  height: 100%;
  @media (min-width: 576px) {
    height: 500px;
  }
  .empty-cart {
    background-image: url('../../assets/img/cart3.svg');
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    height: 300px;
    margin-bottom: 1rem;
    @media (min-width: 576px) {
      height: 500px;
    }
  }
}
table {
  @media (max-width: 320px) {
    font-size: 12px;
  }
}
.not-allowed {
  cursor: not-allowed;
}
.btn-trash {
  color: rgba($color: #fff, $alpha: 0.4);
  &:hover {
    color: #98142b;
  }
}
.input-group {
  flex-wrap: nowrap;
}
.step {
  background: rgba($color: #000, $alpha: 0.5);
  color: rgba($color: #fff, $alpha: 0.8);
  padding: 0.5rem 1rem;
  text-align: center;
  pointer-events: none;
}
.coupon {
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
}
</style>
