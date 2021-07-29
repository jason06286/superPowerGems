<script>
import axios from 'axios';
import { currency } from '@/methods/filter';
import emitter from '@/methods/emitter';
import pushMessageState from '@/methods/pushMessageState';
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const carts = reactive({ arr: [] });
    const isLoading = ref('');
    const isChangeQty = ref(false);

    function cartDetail() {
      const coupon = ref('');

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
              emitter.emit('update-cart');
              getCarts();
              isLoading.value = '';
            } else {
              console.error = () => {
                throw new Error(res.data.message);
              };
            }
            pushMessageState(res, '刪除商品');
          })
          .catch((err) => {
            console.error = () => {
              throw new Error(err);
            };
          });
      };
      const editCart = (qty, id) => {
        isChangeQty.value = true;
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
        axios
          .put(url, {
            data: {
              product_id: id,
              qty,
            },
          })
          .then((res) => {
            if (res.data.success) {
              isChangeQty.value = false;
              emitter.emit('update-cart');
              getCarts();
            } else {
              console.error = () => {
                throw new Error(res.data.message);
              };
            }
            pushMessageState(res, '修改商品');
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
              emitter.emit('update-cart');
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
      });

      return {
        coupon,
        getCarts,
        delProduct,
        editCart,
        useCoupon,
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
      const onSubmit = () => {
        isLoading.value = 'submit';
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
        axios
          .post(url, {
            data: {
              user: user.user,
              message: message.value,
            },
          })
          .then((res) => {
            isLoading.value = '';
            if (res.data.success) {
              router.push(`/frontDesk/pay/${res.data.orderId}`);
              emitter.emit('update-cart');
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
  <div class="bg-dark" style="height: 68px"></div>
  <div class="bg-white container-lg" style="min-height: calc(100vh - 212px)">
    <div class="py-5 p-lg-5">
      <div class="cart-content" v-if="carts.arr?.carts?.length === 0">
        <p class="mb-0 fs-4">購物車內無東西</p>
        <router-link to="/frontDesk/products" class="d-block text-orange fs-4"
          >請選購商品</router-link
        >
      </div>
      <div class="row">
        <div class="col-md-6 col-12" v-if="carts.arr?.carts?.length !== 0">
          <h2 class="pb-2 mb-3 border-3 border-bottom border-orange">
            購物車內容
          </h2>
          <table class="table text-center table-responsive-lg">
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
                    class="btn btn-outline-danger btn-sm"
                    @click="delProduct(item)"
                    v-else
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
                      :class="{ disabled: isChangeQty }"
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
                      :class="{ disabled: item.qty <= 1 || isChangeQty }"
                      type="button"
                      @click="minusQty(item)"
                    >
                      -
                    </button>
                  </div>
                </td>
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
        <div class="col-md-6 col-12">
          <div v-if="carts.arr?.carts?.length != 0">
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
                <ErrorMessage
                  name="聯絡人"
                  class="invalid-feedback"
                ></ErrorMessage>
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
                <ErrorMessage
                  name="信箱"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="mb-3 form-group">
                <label for="tel" class="mb-2">電話</label>
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
                <ErrorMessage
                  name="地址"
                  class="invalid-feedback"
                ></ErrorMessage>
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
                <button
                  class="btn btn-primary"
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
            </Form>
          </div>
        </div>
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
  border-radius: 1rem;
  background: #ededed;
  margin-bottom: 1rem;
  height: 300px;
  @media (min-width: 576px) {
    height: 500px;
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
</style>
