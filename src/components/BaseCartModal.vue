<script>
import BaseScrollTop from '@/components/BaseScrollTop.vue';

import Modal from 'bootstrap/js/dist/modal';

import {
  apiUserGetCarts,
  apiUserDelProduct,
  apiUserUseCoupon,
} from '@/api/api';
import { currency } from '@/methods/filter';
import emitter from '@/methods/emitter';
import pushMessageState from '@/methods/pushMessageState';

import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    BaseScrollTop,
  },
  setup() {
    function modalDetail() {
      const router = useRouter();
      const cartModal = ref(null);
      let modal = null;

      const showModal = () => {
        modal.show();
      };
      const hideModal = () => {
        modal.hide();
      };
      const payment = () => {
        hideModal();
        router.push('/frontDesk/carts');
      };

      onMounted(() => {
        modal = new Modal(cartModal.value);
      });

      return {
        cartModal,
        showModal,
        hideModal,
        payment,
      };
    }
    function cartDetail() {
      const carts = reactive({ arr: [] });
      const coupon = ref('');
      const isLoading = ref('');

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
        emitter.on('update-cart', () => {
          getCarts();
        });
      });

      return {
        carts,
        coupon,
        isLoading,
        delProduct,
        useCoupon,
      };
    }

    return {
      ...modalDetail(),
      ...cartDetail(),
      currency,
    };
  },
};
</script>

<template>
  <div class="cart-btn-position">
    <BaseScrollTop />
    <button type="button" class="cart-btn" @click="showModal">
      <i class="bi bi-cart-plus-fill"></i>
      <span v-show="carts.arr?.carts?.length">{{
        carts.arr?.carts?.length
      }}</span>
    </button>
  </div>
  <div class="modal" tabindex="-1" ref="cartModal">
    <div class="modal-dialog">
      <div class="modal-content bg-dark border-title">
        <div class="modal-header">
          <h5 class="modal-title text-title">購物車</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="cart-content" v-if="carts.arr?.carts?.length === 0">
            <p class="mb-0 fs-5">購物車內無東西</p>
            <router-link
              to="/frontDesk/products"
              class="d-block text-lightred fs-4"
              @click="hideModal"
              >請選購商品</router-link
            >
          </div>
          <table class="table text-center table-responsive-lg" v-else>
            <thead>
              <tr class="text-title">
                <th scope="col" width="80"></th>
                <th scope="col" width="200">商品名稱</th>
                <th scope="col" width="120">數量</th>
                <th scope="col" class="text-end" width="120">小計</th>
                <th scope="col" width="30"></th>
              </tr>
            </thead>
            <tbody class="text-content">
              <tr v-for="item in carts.arr.carts" :key="item.id">
                <td class="align-middle">
                  <img
                    :src="item.product.imageUrl"
                    :alt="item.product.description"
                    class="img-fluid"
                    style="heigt: 3rem"
                  />
                </td>
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">{{ item.qty }}</td>
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
                    v-else
                    type="button"
                    class="btn btn-sm btn-trash"
                    @click="delProduct(item)"
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
              <tr class="text-content">
                <td colspan="4" class="text-end">總金額</td>
                <td class="text-end" width="120">
                  $ {{ currency(carts.arr.final_total) }}
                </td>
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
              class="btn btn-outline-content"
              type="button"
              id="button-addon2"
              :class="{ disabled: coupon === '' }"
              @click="useCoupon"
            >
              套用優惠券
            </button>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-title"
            data-bs-dismiss="modal"
          >
            再逛逛
          </button>
          <button
            type="button"
            class="btn btn-lightred"
            :class="{ disabled: carts.arr?.carts?.length === 0 }"
            @click="payment"
          >
            結帳去
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.line-through {
  text-decoration: line-through;
}
.cart-btn-position {
  position: fixed;
  bottom: 6%;
  right: 3%;
  z-index: 66;
  display: none;
  @media (min-width: 992px) {
    display: block;
  }
}
.cart-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  background: #dd5c33;
  border: none;
  position: relative;
  span {
    background: red;
    color: #fff;
    border-radius: 50%;
    height: 25px;
    width: 25px;
    position: absolute;
    top: -5px;
    right: -5px;
  }
}
.cart-btn {
  &:hover {
    background: #ce5814;
  }
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
</style>
