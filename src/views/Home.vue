<script>
// componets
import BaseNavbar from '@/components/BaseNavbar.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import HomeHeader from '@/components/HomeHeader.vue';
import BaseCartModal from '@/components/BaseCartModal.vue';
// kit
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';
import '../assets/helpers/swiper.css';
import axios from 'axios';
// methods
import emitter from '@/methods/emitter';
// vue
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';

SwiperCore.use([Pagination, Autoplay]);

export default {
  components: {
    BaseNavbar,
    BaseFooter,
    HomeHeader,
    BaseCartModal,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const router = useRouter();
    const products = reactive({ arr: [] });
    const swiperBreakpoints = reactive({
      breakpoints: {
        575: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1190: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });

    function getAllProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      axios
        .get(url)
        .then((res) => {
          console.log('produts', res);
          if (res.data.success) {
            products.arr = res.data.products;
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
    function forwardingProduct(id) {
      router.push(`/frontDesk/product/${id}`);
    }
    onMounted(() => {
      getAllProducts();
    });

    return {
      products,
      swiperBreakpoints,
      addCart,
      forwardingProduct,
    };
  },
};
</script>

<template >
  <div>
    <BaseNavbar />
    <HomeHeader />
    <BaseCartModal />
    <section>
      <div class="container">
        <div
          class="py-5 d-flex align-items-center justify-content-center flex-column"
        >
          <h2 class="pb-3 mb-3 fw-bold border-bottom border-3 border-orange">
            ABOUT US
          </h2>
          <p class="text-center">
            由各國頂尖科學家集結研發，透過能量轉換原則， <br />
            使能量透過能量石轉移到人體，以利人人擁有能量抵禦外敵。<br />
            能量石分成三大類，精礦、精鋼與精石， <br />
            各自蘊含其能力，又以精石最為稀有。
          </p>
          <router-link to="/frontDesk/products" class="text-orange h5"
            >進入商城</router-link
          >
        </div>
      </div>
    </section>
    <section class="my-5">
      <div class="products">
        <div class="container">
          <swiper :autoplay="true" :breakpoints="swiperBreakpoints.breakpoints">
            <!-- :pagination="{ clickable: true }" -->
            <swiper-slide v-for="item in products.arr" :key="item.id">
              <div class="img-card">
                <img :src="item.imageUrl" alt="" class="image" />
                <div class="content">
                  <h3 class="text-center text-white">{{ item.title }}</h3>
                  <div
                    class=" d-flex justify-content-center align-items-center w-100"
                  >
                    <button type="button" class="btn btn-secondary me-3"
                     @click="forwardingProduct(item.id)">
                      查看更多
                    </button>
                    <button type="button" class="btn btn-orange"
                     @click="addCart(item)">
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="bg-wave">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1625923944671.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lR8K4LmkXfyKHLEaWMTDaWRrm%2BudqL67S4Xzz72aRR6FeX5RhWEoBOkI8OwxpStQWaHfUzPrZI0OU0MTmM34K9WgF%2BPwHcmcw74I1uOhUmpw3ooOxgTTc8f0uLYpdTUMMR1G07otsz07nepddnP88rcQlQJtfl9MpCaGnAqYIraKVjszGpE%2BwomH8xUlxie3mMNwYjL8WWwXgkbH6ldDWiH3%2BIOR2IahyDskkiSIIbt2kO%2FbTXSwn%2B1YiOX6lltPYPRkLMkOWMiN%2F3MWtLOyX5QePFB4G7MaHgtCOKrV5W77o6OpvXCAR6fJl1QAsWivcJ2MnMuPFB7QF6S430Qgiw%3D%3D" alt="" />
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div
          class="py-5 d-flex align-items-center justify-content-center flex-column"
        >
          <div>
            <img
              class="w-100 h-100 d-block"
              src="../assets/img/undraw_Faq_re_31cw.svg"
              alt=""
            />
          </div>
          <div class="my-3 typewriter">
            <p>還不知道適合什麼能量石嗎?</p>
          </div>
          <router-link
            to="/frontDesk/quiz"
            class="text-white btn btn-orange btn-lg"
            >進行測驗</router-link
          >
        </div>
      </div>
    </section>
    <BaseFooter />
  </div>
</template>

<style lang="scss" scoped>
.products {
  position: relative;
}
.bg-wave {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.img-card {
  position: relative;
  width: 100%;
  border: 2px solid gray;
  border-radius: 1rem;
  overflow: hidden;
}
.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
}

.content {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}
.img-card:hover {
  border: 2px solid #f59157;
}
.img-card:hover .image {
  opacity: 0.5;
  filter: blur(2px);
}

.img-card:hover .content {
  opacity: 1;
}
.typewriter p {
  color: black;
  font-size: 1rem;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 5s steps(30, start) infinite,
    blink-caret 0.5s step-end infinite;
    @media (min-width: 576px) { font-size: 1.5rem; }
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
</style>
