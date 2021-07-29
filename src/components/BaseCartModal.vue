<script>
import BaseScrollTop from '@/components/BaseScrollTop.vue';
import Modal from 'bootstrap/js/dist/modal';
import axios from 'axios';
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

      const getCarts = () => {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
        axios
          .get(url)
          .then((res) => {
            if (res.data.success) {
              carts.arr = res.data.data;
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
      const delProduct = (item) => {
        isLoading.value = item.id;
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
        axios
          .delete(url)
          .then((res) => {
            if (res.data.success) {
              getCarts();
            } else {
              console.error = () => {
                throw new Error(res.data.message);
              };
            }
            isLoading.value = '';
            pushMessageState(res, '刪除商品');
          })
          .catch((err) => {
            console.error = () => {
              throw new Error(err);
            };
          });
      };
      const useCoupon = () => {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
        axios
          .post(url, { data: { code: coupon.value } })
          .then((res) => {
            if (res.data.success) {
              getCarts();
            } else {
              console.error = () => {
                throw new Error(res.data.message);
              };
            }
            pushMessageState(res, '套用優惠券');
          })
          .catch((err) => {
            console.error = () => {
              throw new Error(err);
            };
          });
      };

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
      <i class="bi bi-cart-fill"></i>
      <span v-show="carts.arr?.carts?.length">{{
        carts.arr?.carts?.length
      }}</span>
    </button>
  </div>
  <div class="modal" tabindex="-1" ref="cartModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">購物車</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="cart-content" v-if="carts.arr?.carts?.length === 0">
            <p class="mb-0 fs-5">購物車內無東西</p>
            <router-link
              to="/frontDesk/products"
              class="d-block text-orange fs-4"
              @click="hideModal"
              >請選購商品</router-link
            >
          </div>
          <table class="table text-center table-responsive-lg" v-else>
            <thead>
              <tr class="table-dark">
                <th scope="col"></th>
                <th scope="col">商品名稱</th>
                <th scope="col">數量</th>
                <th scope="col" class="text-end">小計</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in carts.arr.carts" :key="item.id">
                <td>
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
                    class="btn btn-outline-danger btn-sm"
                    @click="delProduct(item)"
                  >
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">{{ item.qty }}</td>
                <td class="align-middle text-end">
                  $ {{ currency(item.total) }}
                </td>
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
                <td class="text-end">
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
              class="btn btn-outline-secondary"
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
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            再逛逛
          </button>
          <button
            type="button"
            class="btn btn-primary"
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
.cart-btn:hover {
  background: #ce5814;
}
</style>
