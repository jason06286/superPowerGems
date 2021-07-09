<script>
// componets
import BasePagination from '@/components/BasePagination.vue';
// kit
import axios from 'axios';
// methods
import { currency } from '@/methods/filter';
import emitter from '@/methods/emitter';
// vue
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    BasePagination,
  },
  setup() {
    const router = useRouter();
    const Allproducts = reactive({ arr: [] });
    const products = reactive({ arr: [] });
    const pagination = reactive({ obj: {} });
    const filterProducts = reactive({ obj: {} });
    const showAllProducts = ref(true);
    const tempCategory = ref('全部');

    function filterProduct(condition = '') {
      showAllProducts.value = false;
      tempCategory.value = condition;
      filterProducts.obj = Allproducts.arr.filter((item) => item.category.match(condition));
      console.log(filterProducts.obj);
    }
    function getAllProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      axios
        .get(url)
        .then((res) => {
          console.log('produts', res);
          if (res.data.success) {
            Allproducts.arr = res.data.products;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    function getProducts(page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      axios
        .get(url)
        .then((res) => {
          console.log('produts', res);
          if (res.data.success) {
            products.arr = res.data.products;
            pagination.obj = res.data.pagination;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    function showAll() {
      tempCategory.value = '全部';
      showAllProducts.value = true;
    }
    function forwardingProduct(id) {
      router.push(`/frontDesk/product/${id}`);
    }
    function addCart(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      axios
        .post(url, {
          data: {
            product_id: item.id,
            qty: 1,
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
      getProducts();
      getAllProducts();
    });

    return {
      // variable
      products,
      pagination,
      filterProducts,
      tempCategory,
      // methods
      filterProduct,
      currency,
      showAllProducts,
      getProducts,
      showAll,
      forwardingProduct,
      addCart,
    };
  },
};
</script>

<template >
  <header>
    <div class="bg-universe">
      <p class="fs-3">想要更多優惠嗎?</p>
      <p class="fs-1">
        玩遊戲領取
        <router-link to="/frontDesk/coupon" class="text-orange"
          >優惠券</router-link
        >
      </p>
    </div>
  </header>
  <section>
    <div class="py-5">
      <div class="container">
        <h4 class="pb-2 mb-3 border-bottom border-orange">能量石分類</h4>
        <div class="row">
          <div class="mb-5 col-lg-3 col-12">
            <div class="row">
              <div
                class="
                  py-2
                  text-center
                  border
                  mb-lg-3
                  col-lg-12 col-6
                  fw-bold
                  list
                "
                :class="{ active: tempCategory === '全部' }"
                @click="showAll"
              >
                全部
              </div>
              <div
                class="
                  py-2
                  text-center
                  border
                  mb-lg-3
                  col-lg-12 col-6
                  fw-bold
                  list
                "
                :class="{ active: tempCategory === '精礦' }"
                @click="filterProduct('精礦')"
              >
                精礦
              </div>
              <div
                class="
                  py-2
                  text-center
                  border
                  mb-lg-3
                  col-lg-12 col-6
                  fw-bold
                  list
                "
                :class="{ active: tempCategory === '精鋼' }"
                @click="filterProduct('精鋼')"
              >
                精鋼
              </div>
              <div
                class="
                  py-2
                  text-center
                  border
                  mb-lg-3
                  col-lg-12 col-6
                  fw-bold
                  list
                "
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
                class="mb-3 col-12 col-md-6 col-lg-4"
                v-for="item in products.arr"
                :key="item.id"
              >
                <div class="border-2 card w-100">
                  <img :src="item.imageUrl" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="text-center card-title">{{ item.title }}</h5>
                    <p class="card-text">
                      {{ item.description }}
                    </p>
                    <div
                      class="
                        mb-3
                        d-flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <span class="line-through text-secondary me-3"
                        >${{ currency(item.origin_price) }}</span
                      >
                      <span class="text-danger fs-4"
                        >${{ currency(item.price) }}</span
                      >
                    </div>
                    <div class="d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-outline-secondary me-3"
                        @click="forwardingProduct(item.id)"
                      >
                        查看更多
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-orange"
                        @click="addCart(item)"
                      >
                        加入購物車
                      </button>
                    </div>
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
                class="mb-3 col-12 col-md-6 col-lg-4"
                v-for="item in filterProducts.obj"
                :key="item.id"
              >
                <div class="border-2 card w-100">
                  <img :src="item.imageUrl" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="text-center card-title">{{ item.title }}</h5>
                    <p class="card-text">
                      {{ item.description }}
                    </p>
                    <div
                      class="
                        mb-3
                        d-flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <span class="line-through text-secondary me-3"
                        >${{ currency(item.origin_price) }}</span
                      >
                      <span class="text-danger fs-4"
                        >${{ currency(item.price) }}</span
                      >
                    </div>
                    <div class="d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-outline-secondary me-3"
                        @click="forwardingProduct(item.id)"
                      >
                        查看更多
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-orange"
                        @click="addCart(item)"
                      >
                        加入購物車
                      </button>
                    </div>
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
.bg-universe {
  background-image: url('../../assets/img/universe2.jpg');
  background-size: cover;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
}
.line-through {
  text-decoration: line-through;
}
.card:hover {
  box-shadow: 3px 3px 6px rgba($color: #000000, $alpha: 0.5);
}
.list:hover {
  border: 2px solid #f59157 !important;
  box-shadow: 3px 3px 6px rgba($color: #000000, $alpha: 0.5);
}
.active {
  border: 2px solid #f59157 !important;
  box-shadow: 3px 3px 6px rgba($color: #000000, $alpha: 0.5);
}
</style>
