<script>
// kit
import axios from 'axios';
// methods
import { currency } from '@/methods/filter';
import emitter from '@/methods/emitter';
// vue
import {
  onMounted, reactive, ref, computed,
} from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const product = reactive({ arr: [] });
    const productNum = ref(0);
    const total = computed(() => product.arr.price * productNum.value);

    function getProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${route.params.id}`;
      axios
        .get(url)
        .then((res) => {
          console.log('produt', res);
          if (res.data.success) {
            product.arr = res.data.product;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    function addCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      axios
        .post(url, {
          data: {
            product_id: product.arr.id,
            qty: productNum.value,
          },
        })
        .then((res) => {
          console.log('addcart', res);
          if (res.data.success) {
            emitter.emit('update-cart');
            console.log('addcart sucess');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    onMounted(() => {
      getProduct();
      console.log(route);
      console.log(route.params.id);
    });

    return {
      // variable
      product,
      productNum,
      total,
      // methods
      currency,
      addCart,
    };
  },
};
</script>

<template >
  <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="mb-3 col-lg-6 col-12">
          <div class="product-card">
            <img :src="product.arr.imageUrl" alt="" class="img-base" />
            <h3 class="pt-3 text-orange border-top">【商品介紹】</h3>
            <p class="">{{ product.arr.description }}</p>
            <h3 class="pt-3 text-orange border-top">【使用方法】</h3>
            <ul class="list-unstyled">
              <li>
                <span class="me-1 fs-5 text-orange">1. </span>
                拿到貨物時，內容物會有能量石和一組密碼
              </li>
              <li>
                <span class="me-1 fs-5 text-orange">2. </span>
                手握能量石，心中默想著密碼
              </li>
              <li>
                <span class="me-1 fs-5 text-orange">3. </span>
                此時會感到能量湧進身體，通常為 10 ~ 15 分鐘吸收完成，因人而異
              </li>
              <li>
                <span class="me-1 fs-5 text-orange">4. </span>
                吸收完能量石會消失，轉換為能量充斥身體，<br />
                可以心中默想能量石名稱、 形狀，腦中就會浮現該能量石能力
              </li>
            </ul>
          </div>
        </div>
        <div class="mb-3 col-lg-6 col-12">
          <div class="product-card">
            <div class="pb-2 mb-3 border-bottom position-relative">
              <span class="fs-3">{{ product.arr.title }}</span>
              <span class="top-0 badge bg-orange position-absolute">{{
                product.arr.category
              }}</span>
            </div>
            <p class="mb-0 text-secondary">
              原價 $ {{ currency(product.arr.origin_price) }}
            </p>
            <p class="text-orange fs-4">特價 $ {{ currency(product.arr.price) }}</p>
            <select
              class="mb-3 form-select"
              aria-label="Default select example"
              v-model="productNum"
            >
              <option selected value="0">請選擇數量</option>
              <option v-for="item in 10" :key="item" :value="item">
                {{ item }}{{ product.arr.unit }}
              </option>
            </select>
            <p>小計 $ {{ currency(total) }} 元</p>
            <div class="mb-3 d-grid w-100">
              <button type="button" class="text-white btn btn-orange"
              :class="{'disabled':productNum <= 0}"
              @click="addCart">
                加到購物車
              </button>
            </div>
            <h3 class="pt-3 mb-3 text-orange border-top">【常見問題】</h3>
            <div class="question-card">
              <p class="mb-0 fs-5">Q: 如何知道能量石是否有吸收?</p>
              <p class="text-secondary">
                A: 可以心中默想能量石名稱、形狀，<br />
                腦中就會浮現該能量石能力
              </p>
              <p class="mb-0 fs-5">Q: 請問能量石使用有限制嗎?有使用時間嗎?</p>
              <p class="text-secondary">
                A: 能量石是個媒介，開啟人體的新能量，<br />
                如果有持續鍛鍊使用，能量會持續保有
              </p>
              <p class="mb-0 fs-5">
                Q: 請問人體吸收有上限嗎?可以一次使用多顆能量石嗎?
              </p>
              <p class="text-secondary">
                A: 目前經實驗研究，人體吸收上限為 3 顆能量石，<br />
                建議一次使用一顆， 以避免能量混亂，造成能量大爆炸
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  padding: 1rem;
  border: double 4px #ccc;
  border-radius: 1rem;
  height: 100%;
}
.img-base {
  display: block;
  width: 100%;
  border-radius: 1rem;
  margin-bottom: 1rem;
}
.question-card {
  padding: 1rem;
  border: double 2px #ccc;
  border-radius: 1rem;
}
</style>
