<script>
import BaseFrontendLoading from '@/components/BaseLoading.vue';
import BaseSwiper from '@/components/BaseSwiper.vue';

import axios from 'axios';

import { currency } from '@/methods/filter';
import emitter from '@/methods/emitter';
import pushMessageState from '@/methods/pushMessageState';

import {
  onMounted, reactive, ref, computed, watch,
} from 'vue';
import { useRoute } from 'vue-router';

export default {
  components: {
    BaseFrontendLoading,
    BaseSwiper,
  },
  setup() {
    const route = useRoute();
    const products = reactive({ arr: [] });
    const product = reactive({ arr: [] });
    const productNum = ref(1);
    const total = computed(() => product.arr.price * productNum.value);
    const isLoading = ref(false);
    const isCartLoading = ref(false);
    const showQuestion = ref(false);
    const showMethod = ref(false);

    function getProduct() {
      isLoading.value = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${route.params.id}`;
      axios
        .get(url)
        .then((res) => {
          if (res.data.success) {
            product.arr = res.data.product;
            isLoading.value = false;
          } else {
            pushMessageState(res, '取得商品資料');
          }
        })
        .catch((err) => {
          pushMessageState(err, '取得商品資料');
        });
    }
    function addCart() {
      isCartLoading.value = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      axios
        .post(url, {
          data: {
            product_id: product.arr.id,
            qty: productNum.value,
          },
        })
        .then((res) => {
          if (res.data.success) {
            emitter.emit('update-cart');
            isCartLoading.value = false;
          }
          pushMessageState(res, '購物車新增');
        })
        .catch((err) => {
          pushMessageState(err, '購物車新增');
        });
    }
    function getAllProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      axios
        .get(url)
        .then((res) => {
          if (res.data.success) {
            products.arr = res.data.products;
          } else {
            pushMessageState(res, '取得所有商品資料');
          }
        })
        .catch((err) => {
          pushMessageState(err, '取得所有商品資料');
        });
    }
    const suggestProduct = computed(() => products.arr.filter((item) => {
      const { id } = route.params;
      return item.id !== id;
    }));
    watch(
      () => route.params.id,
      () => {
        getProduct();
      },
    );

    onMounted(() => {
      getProduct();
      getAllProducts();
    });

    return {
      product,
      productNum,
      total,
      isLoading,
      products,
      suggestProduct,
      showMethod,
      showQuestion,
      isCartLoading,

      addCart,
      currency,
    };
  },
};
</script>

<template>
  <BaseFrontendLoading :isLoading="isLoading" />
  <section class="py-5">
    <div
      class="pt-3 text-content container-fluid"
      style="min-height: calc(100vh - 212px)"
    >
      <ul class="side-bar">
        <li
          @click="showQuestion = true"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          常見問題
        </li>
        <li @click="showMethod = true" data-aos="zoom-in" data-aos-delay="400">
          使用方法
        </li>
      </ul>
      <div class="content">
        <img :src="product.arr.imageUrl" :alt="product.arr.description" />
        <h3 class="text-title">{{ product.arr.title }}</h3>
        <p>{{ product.arr.description }}</p>
        <div class="mb-2 d-flex align-items-center w-100 justify-content-end">
          <p class="mb-0 line-through text-darkred me-2">
            原價 $ {{ currency(product.arr.origin_price) }} 元
          </p>
          <p class="mb-0 fs-5">特價 $ {{ currency(product.arr.price) }} 元</p>
        </div>
        <div class="d-flex align-items-end w-100 justify-content-end">
          <select class="form-select form-select-sm" v-model="productNum">
            <option selected value="0">請選擇數量</option>
            <option v-for="item in 10" :key="item" :value="item">
              {{ item }}{{ product.arr.unit }}
            </option>
          </select>
          <p class="flex-shrink-0 mb-0 ms-3 text-end">
            小計 $ {{ currency(total) }} 元
          </p>
        </div>
        <div
          class="mt-3 d-flex justify-content-between w-100 align-items-center"
        >
          <router-link to="/frontDesk/products" class="btn btn-outline-title"
            >繼續選購</router-link
          >
          <a
            href="#"
            class="btn btn-lightred"
            :class="{ disabled: productNum <= 0 }"
            @click.prevent="addCart"
          >
            <div
              class="spinner-border spinner-border-sm"
              role="status"
              v-if="isCartLoading"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
            <i class="me-1 bi bi-cart-plus" v-else></i>
            加入購物車
          </a>
        </div>
      </div>
      <div class="container product-swiper">
        <BaseSwiper :products="suggestProduct">你可能會喜歡</BaseSwiper>
      </div>

      <div class="question" :class="{ active: showQuestion }">
        <div class="d-flex justify-content-end">
          <button
            type="button"
            class="mt-3 me-3 btn-close btn-close-white"
            @click="showQuestion = !showQuestion"
          ></button>
        </div>
        <div class="p-5 pt-3">
          <h4 class="mb-3 text-title">常見問題</h4>
          <p class="mb-3 fs-5">Q: 如何知道能量石是否有吸收?</p>
          <p>
            A: 可以心中默想能量石名稱、形狀，<br />
            腦中就會浮現該能量石能力
          </p>
          <p class="mb-3 fs-5">Q: 請問能量石使用有限制嗎?有使用時間嗎?</p>
          <p>
            A: 能量石是個媒介，開啟人體的新能量，<br />
            如果有持續鍛鍊使用，能量會持續保有
          </p>
          <p class="mb-3 fs-5">
            Q: 請問人體吸收有上限嗎?可以一次使用多顆能量石嗎?
          </p>
          <p>
            A: 目前經實驗研究，人體吸收上限為 3 顆能量石，<br />
            建議一次使用一顆， 以避免能量混亂，造成能量大爆炸
          </p>
        </div>
      </div>
      <div class="method" :class="{ active: showMethod }">
        <div class="d-flex justify-content-end">
          <button
            type="button"
            class="mt-3 me-3 btn-close btn-close-white"
            @click="showMethod = !showMethod"
          ></button>
        </div>
        <div class="p-5 pt-3">
          <h4 class="mb-3">使用方法</h4>
          <p class="mb-3">
            <span class="me-1 text-title">1. </span>
            拿到貨物時，內容物會有能量石和一組密碼
          </p>
          <p class="mb-3">
            <span class="me-1 text-title">2. </span>
            手握能量石，心中默想著密碼
          </p>
          <p class="mb-3">
            <span class="me-1 text-title">3. </span>
            此時會感到能量湧進身體，通常為 10 ~ 15 分鐘吸收完成，因人而異
          </p>
          <p class="mb-3">
            <span class="me-1 text-title">4. </span>
            吸收完能量石會消失，轉換為能量充斥身體，<br />
            可以心中默想能量石名稱、 形狀，腦中就會浮現該能量石能力
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.line-through {
  text-decoration: line-through;
}
section {
  background: linear-gradient(to right, #212529 50%, #392f3c 50%);
  position: relative;
}
.side-bar {
  list-style: none;
  font-size: 1.25rem;
  height: calc(100% - 68px);
  margin-top: 1rem;
  margin-bottom: 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  border-bottom: 1px solid rgba($color: #fff, $alpha: 0.6);
  background: none;
  z-index: 66;
  @media (min-width: 992px) {
    position: absolute;
    font-size: 1.5rem;
    margin-top: 0;
    background: #212529;
    padding-right: 2rem;
    border-right: 1px solid rgba($color: #fff, $alpha: 0.6);
    border-bottom: none;
    justify-content: center;
    flex-direction: column;
  }
  li {
    margin-bottom: 1rem;
    margin-right: 2rem;
    cursor: pointer;
    @media (min-width: 992px) {
      margin-bottom: 2rem;
      margin-right: 0;
      writing-mode: vertical-lr;
    }
  }
}
.wrap {
  width: 100%;
}
.content {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  @media (min-width: 321px) {
    padding: 1rem;
  }
  @media (min-width: 768px) {
    width: 500px;
    padding: 0;
  }
  img {
    display: block;
    max-width: 100%;
    height: 300px;
    object-fit: contain;
    animation: fly 4s ease-in-out infinite;
  }
  .cart {
    text-decoration: none;
    color: #98142b;
    &:hover {
      color: darken($color: #98142b, $amount: 10);
      transform: scale(0.9);
    }
  }
}
@keyframes fly {
  0% {
    transform: translateY(4%);
  }
  50% {
    transform: translateY(-4%);
  }
  100% {
    transform: translateY(4%);
  }
}
.question,
.method {
  width: 100%;
  height: calc(100% - 64px);
  background: lighten($color: #212529, $amount: 10);
  position: absolute;
  left: -100%;
  top: 64px;
  transition: all 0.8s;
  z-index: 99;
  @media (min-width: 768px) {
    width: 400px;
  }
  p {
    color: rgba($color: #fff, $alpha: 0.6);
  }
}
.question.active,
.method.active {
  left: 0;
}
</style>
