<script>
import BasePagination from '@/components/BasePagination.vue';
import BaseFrontendLoading from '@/components/BaseLoading.vue';

import axios from 'axios';

import { currency } from '@/methods/filter';
import emitter from '@/methods/emitter';
import pushMessageState from '@/methods/pushMessageState';

import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    BasePagination,
    BaseFrontendLoading,
  },
  setup() {
    const router = useRouter();
    const Allproducts = reactive({ arr: [] });
    const products = reactive({ arr: [] });
    const pagination = reactive({ obj: {} });
    const filterProducts = reactive({ obj: {} });
    const showAllProducts = ref(true);
    const isLoading = ref('');
    const showLoadinng = ref(false);

    function productDetail() {
      const getAllProducts = () => {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
        axios
          .get(url)
          .then((res) => {
            if (res.data.success) {
              Allproducts.arr = res.data.products;
            } else {
              pushMessageState(res, '取得所有商品資料');
            }
          })
          .catch((err) => {
            pushMessageState(err, '取得所有商品資料');
          });
      };
      const getProducts = (page = 1) => {
        showLoadinng.value = true;
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
        axios
          .get(url)
          .then((res) => {
            if (res.data.success) {
              products.arr = res.data.products;
              pagination.obj = res.data.pagination;
              showLoadinng.value = false;
            } else {
              pushMessageState(res, '取得商品資料');
            }
          })
          .catch((err) => {
            pushMessageState(err, '取得商品資料');
          });
      };
      const addCart = (item) => {
        isLoading.value = item.id;
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
        axios
          .post(url, {
            data: {
              product_id: item.id,
              qty: 1,
            },
          })
          .then((res) => {
            if (res.data.success) {
              emitter.emit('update-cart');
              isLoading.value = '';
            }
            pushMessageState(res, '購物車新增');
          })
          .catch((err) => {
            pushMessageState(err, '購物車新增');
          });
      };
      const forwardingProduct = (id) => {
        router.push(`/frontDesk/product/${id}`);
      };

      onMounted(() => {
        getProducts();
        getAllProducts();
      });

      return {
        getAllProducts,
        getProducts,
        addCart,
        forwardingProduct,
      };
    }
    function filterDetail() {
      const tempCategory = ref('全部');

      const filterProduct = (condition = '') => {
        showAllProducts.value = false;
        tempCategory.value = condition;
        filterProducts.obj = Allproducts.arr.filter((item) => item.category.match(condition));
      };

      const showAll = () => {
        tempCategory.value = '全部';
        showAllProducts.value = true;
      };

      return {
        tempCategory,
        filterProduct,
        showAll,
      };
    }

    return {
      products,
      pagination,
      filterProducts,
      isLoading,
      showLoadinng,
      showAllProducts,

      currency,

      ...productDetail(),
      ...filterDetail(),
    };
  },
};
</script>

<template>
  <BaseFrontendLoading :isLoading="showLoadinng" />
  <header>
    <div class="bg-universe">
      <p class="fs-3">想要更多優惠嗎?</p>
      <p class="fs-1">
        玩小遊戲領取
        <router-link
          to="/frontDesk/coupon"
          class="text-lightred d-inline-block animate-bounce"
          >優惠券</router-link
        >
      </p>
    </div>
  </header>
  <section>
    <div class="py-5">
      <div class="container" style="min-height: calc(100vh - 412px)">
        <h3 class="pb-2 mb-3 border-bottom border-darkred">能量石分類</h3>
        <div class="row">
          <div class="mb-5 col-lg-3 col-12">
            <div class="row">
              <div
                class="py-2 text-center border mb-lg-3 col-lg-12 col-6 fw-bold list"
                :class="{ active: tempCategory === '全部' }"
                @click="showAll"
              >
                全部
              </div>
              <div
                class="py-2 text-center border mb-lg-3 col-lg-12 col-6 fw-bold list"
                :class="{ active: tempCategory === '精礦' }"
                @click="filterProduct('精礦')"
              >
                精礦
              </div>
              <div
                class="py-2 text-center border mb-lg-3 col-lg-12 col-6 fw-bold list"
                :class="{ active: tempCategory === '精鋼' }"
                @click="filterProduct('精鋼')"
              >
                精鋼
              </div>
              <div
                class="py-2 text-center border mb-lg-3 col-lg-12 col-6 fw-bold list"
                :class="{ active: tempCategory === '精石' }"
                @click="filterProduct('精石')"
              >
                精石
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-12" v-if="showAllProducts">
            <div class="row">
              <div
                class="mb-4-5 col-12 col-md-6 col-xxl-4"
                v-for="item in products.arr"
                :key="item.id"
              >
                <div class="product-card" @click="forwardingProduct(item.id)">
                  <div class="product-inner">
                    <img :src="item.imageUrl" :alt="item.description" />
                    <div class="product-content">
                      <h4 class="text-title">{{ item.title }}</h4>
                      <p>
                        {{ item.description }}
                      </p>
                    </div>
                    <div class="product-footer">
                      <div class="d-flex">
                        <p class="mb-0 line-through text-lightred me-3">
                          $ {{ currency(item.origin_price) }} 元
                        </p>
                        <p class="mb-0">$ {{ currency(item.price) }} 元</p>
                      </div>
                      <a
                        href="javascript:;"
                        class="text-lightred fs-3"
                        @click.stop="addCart(item)"
                      >
                        <div
                          class="spinner-border"
                          role="status"
                          v-if="isLoading === item.id"
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <i class="bi bi-cart-plus" v-else></i>
                      </a>
                    </div>
                  </div>
                  <div class="magic-circle">
                    <img src="../../assets/img/magic-circle.svg" alt="魔法陣" />
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <BasePagination
                  :pagination="pagination"
                  @get-nowpage="getProducts"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-12" v-if="!showAllProducts">
            <div class="row">
              <div
                class="mb-4-5 col-12 col-md-6 col-lg-4"
                v-for="item in filterProducts.obj"
                :key="item.id"
              >
                <div class="product-card" @click="forwardingProduct(item.id)">
                  <div class="product-inner">
                    <img :src="item.imageUrl" :alt="item.description" />
                    <div class="product-content">
                      <h4 class="text-title">{{ item.title }}</h4>
                      <p>
                        {{ item.description }}
                      </p>
                    </div>
                    <div class="product-footer">
                      <div class="d-flex">
                        <p class="mb-0 line-through text-darkred me-3">
                          $ {{ currency(item.origin_price) }} 元
                        </p>
                        <p class="mb-0">$ {{ currency(item.price) }} 元</p>
                      </div>
                      <a
                        href="javascript:;"
                        class="text-lightred fs-3"
                        @click.stop="addCart(item)"
                      >
                        <div
                          class="spinner-border"
                          role="status"
                          v-if="isLoading === item.id"
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <i class="bi bi-cart-plus" v-else></i>
                      </a>
                    </div>
                  </div>
                  <div class="magic-circle">
                    <img src="../../assets/img/magic-circle.svg" alt="魔法陣" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.mb-4-5 {
  margin-bottom: 2rem;
}
.bg-universe {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1626503091865.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=B9ZlBe%2BEcAh3pqtgb3Ud6i%2Fpa0YCS%2BpznWGHqCz2R2EM5whzsxTMOGCjsvESELy7mYJoXOH5Z10mQayTVn1FFd72d61Veg%2Bky26U0zEzcoeyroGHuYH0G6B%2BA0eC8JnFm1I2V1%2B02nq%2BwYBJTZ8gTUW0ooI4fo88yjJYymp4OBcbdf190Fl4XwSUQ9vRiEUUss8WdHsvGv3TJeR8jYGalCbZqgzhBobnmd2aScYjrrCMiseInXU8cnli%2FZBguT94KFwwVfVDccEnV44aLSVT70S3Su1VN%2BpZOTwCHKev38jnGxx1cqpM64aDtdToxq0W7LboWCgimyRojzRtYm9SPQ%3D%3D');
  background-size: cover;
  background-position-x: right;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: rgba($color: #fff, $alpha: 0.8);
  position: relative;
  p {
    z-index: 1;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: #000, $alpha: 0.2);
  }
}
.line-through {
  text-decoration: line-through;
}
@mixin circle {
  display: block;
  width: 20px;
  height: 20px;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(215, 223, 252, 1) 0%,
    rgba(255, 255, 255, 1) 0%,
    rgba(215, 223, 252, 1) 84%
  );
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, 0);
}
@mixin diamond {
  display: block;
  width: 20px;
  height: 40px;
  background-image: linear-gradient(
    109.6deg,
    rgba(15, 2, 2, 1) 11.2%,
    rgba(36, 163, 190, 1) 91.1%
  );
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  position: absolute;
}
.product-card {
  width: 100%;
  height: 400px;
  padding: 20px;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px solid rgba($color: #fff, $alpha: 0.6);
  background: url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1627962847726.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ea%2FjDGHdOZk7kveNiz61uFsNvmmZSIa5k5s%2F4DCY9XD46vTPe2Tu0JuZsyux6rrYxSOWyDQlNAB9mEzJs%2Fn7M47pZwGvDh%2FRKqTTddYIYiWX%2BAUVkdHapGc%2B7FwhfKlYTc4BdbnqBRgr3PTFcUVFulLK9lAOb0a%2F042HrWGyCAjjE5l7nMsR0CRTrVo92z8ns%2FM3zxaYwcEHAUGycUmJJQ4r%2BNzuprjgIvNYgBQU169z3J959IctIzRzqY8bS2%2FyGSN2dqLkWlScdgXAE0WuT81DPD8hTAFQ33uaeYNOdEuNQyhfg%2FxZvctof3mqqcR3F3s%2Fhbofg6AvcpspdSmiew%3D%3D');
  position: relative;
  perspective-origin: 50% 87.5%;
  perspective: 1000px;
  transition: all 1s;
  &:hover {
    box-shadow: 0px 0px 30px #3871a6;
  }
  &:hover .product-inner img {
    max-width: 100%;
  }
  &:hover .magic-circle {
    @media (min-width: 992px) {
      display: block;
    }
  }
  .magic-circle {
    position: absolute;
    @media (min-width: 1279px) {
      bottom: -52%;
    }
    @media (min-width: 1300px) {
      bottom: -42%;
    }
    bottom: -42%;
    left: 0;
    display: none;
    perspective-origin: 50% 50%;
    transform: rotateX(90deg);
    animation: rotate 8s linear infinite;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .product-inner {
    background: rgba($color: #000, $alpha: 0.6);
    border: 1px dashed #fff;
    display: flex;
    padding: 2rem 1rem;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    height: 100%;
    position: relative;
    img {
      display: block;
      min-height: 160px;
      max-width: 80%;
      margin: 0 auto;
      object-fit: contain;
    }
    &::before {
      content: '';
      top: -20px;
      left: 50%;
      @include circle;
    }
    &::after {
      content: '';
      display: block;
      bottom: -20px;
      left: 50%;
      @include circle;
    }
    h4 {
      &::before {
        content: '';
        top: -24px;
        left: -14px;
        transform: rotate(-45deg);
        @include diamond;
      }
      &::after {
        content: '';
        top: -24px;
        right: -14px;
        transform: rotate(45deg);
        @include diamond;
      }
    }
    .product-content {
      min-height: 100px;
      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal;
      }
    }
    .product-footer {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      &::before {
        content: '';
        bottom: -24px;
        left: -14px;
        transform: rotate(45deg);
        @include diamond;
      }
      &::after {
        content: '';
        bottom: -24px;
        right: -14px;
        transform: rotate(-45deg);
        @include diamond;
      }
      a {
        &:hover {
          color: darken($color: #98142b, $amount: 10) !important;
        }
      }
    }
  }
}
@keyframes rotate {
  0% {
    transform: rotateY(0deg) rotateX(90deg) scale(1);
  }

  100% {
    transform: rotateY(360deg) rotateX(90deg) scale(1);
  }
}
.list {
  color: rgba($color: #fff, $alpha: 0.8);
  &:hover {
    border: 2px solid #98142b !important;
    box-shadow: 3px 3px 6px rgba($color: gray, $alpha: 1);
  }
}
.active {
  border: 2px solid #98142b !important;
  box-shadow: 3px 3px 6px rgba($color: gray, $alpha: 1);
}
.animate-bounce {
  animation: bounce 1s infinite;
}
@keyframes bounce {
  0%,
  100% {
    transform: translateY(-15%);
    animationtimingfunction: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animationtimingfunction: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
