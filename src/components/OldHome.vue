<script>
// componets
import BaseNavbar from '@/components/BaseNavbar.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import HomeHeader from '@/components/HomeHeader.vue';
import BaseCartModal from '@/components/BaseCartModal.vue';
import ToastMessages from '@/components/ToastMessages.vue';

// kit
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';
import '../assets/scss/helpers/swiper.scss';
import axios from 'axios';
// methods
import emitter from '@/methods/emitter';
import pushMessageState from '@/methods/pushMessageState';
// vue
import { onMounted, reactive, ref } from 'vue';
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
    ToastMessages,
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
    const isLoading = ref('');

    function getAllProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      axios
        .get(url)
        .then((res) => {
          if (res.data.success) {
            products.arr = res.data.products;
          } else {
            console.error(res.data.message);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
    function addCart(item) {
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
          } else {
            console.error(res.data.message);
          }
          pushMessageState(res, '購物車新增');
        })
        .catch((err) => {
          console.error(err);
        });
    }
    function forwardingProduct(id) {
      router.push(`/frontDesk/product/${id}`);
    }

    onMounted(() => {
      getAllProducts();
    });

    return {
      // variable
      products,
      swiperBreakpoints,
      isLoading,
      // methods
      addCart,
      forwardingProduct,
    };
  },
};
</script>

<template>
  <div>
    <ToastMessages />
    <BaseNavbar />
    <HomeHeader />
    <BaseCartModal />
    <section>
      <div class="container">
        <div
          class="py-5 d-flex align-items-center justify-content-center flex-column"
        >
          <h2 class="pb-3 mb-3 fw-bold border-bottom border-3 border-orange">
            關於我們
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
            <swiper-slide v-for="item in products.arr" :key="item.id">
              <div class="img-card">
                <img
                  :src="item.imageUrl"
                  :alt="item.description"
                  class="image"
                />
                <div class="content">
                  <h3 class="text-center text-white">{{ item.title }}</h3>
                  <div
                    class=" d-flex justify-content-center align-items-center w-100"
                  >
                    <button
                      type="button"
                      class="btn btn-secondary me-3"
                      @click="forwardingProduct(item.id)"
                    >
                      查看更多
                    </button>
                    <button
                      type="button"
                      class="btn btn-orange"
                      :class="{ disabled: isLoading === item.id }"
                      @click="addCart(item)"
                    >
                      <div
                        class="spinner-border spinner-border-sm"
                        role="status"
                        v-if="isLoading === item.id"
                      >
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="bg-wave">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1625923944671.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lR8K4LmkXfyKHLEaWMTDaWRrm%2BudqL67S4Xzz72aRR6FeX5RhWEoBOkI8OwxpStQWaHfUzPrZI0OU0MTmM34K9WgF%2BPwHcmcw74I1uOhUmpw3ooOxgTTc8f0uLYpdTUMMR1G07otsz07nepddnP88rcQlQJtfl9MpCaGnAqYIraKVjszGpE%2BwomH8xUlxie3mMNwYjL8WWwXgkbH6ldDWiH3%2BIOR2IahyDskkiSIIbt2kO%2FbTXSwn%2B1YiOX6lltPYPRkLMkOWMiN%2F3MWtLOyX5QePFB4G7MaHgtCOKrV5W77o6OpvXCAR6fJl1QAsWivcJ2MnMuPFB7QF6S430Qgiw%3D%3D"
            alt="黑色波浪的背景圖片"
          />
        </div>
      </div>
    </section>
    <section class="mt-5">
      <div class="mb-3 d-flex justify-content-center w-100">
        <h2
          class="pb-3 fw-bold border-bottom border-3 border-orange d-inline-block"
        >
          使用方法
        </h2>
      </div>
      <div class="row g-0">
        <div class="col-12 col-lg-6">
          <div class="bg-steup bg-steup1">
            <div class="bg-content">
              <p>拿到貨物時，內容物會有能量石和一組密碼</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="bg-steup bg-steup2">
            <div class="bg-content">
              <p>手握能量石，心中默想著密碼</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="bg-steup bg-steup3">
            <div class="bg-content">
              <p>
                此時會感到能量湧進身體，通常為 10 ~ 15 分鐘吸收完成，因人而異
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="bg-steup bg-steup4">
            <div class="bg-content">
              <p>
                吸收完能量石會消失，轉換為能量充斥身體，<br />
                可以心中默想能量石名稱、形狀，腦中就會浮現該能量石能力
              </p>
            </div>
          </div>
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
              alt="兩個外星人頭上充滿著問號"
            />
          </div>
          <div class="my-3 typewriter">
            <p>還不知道適合哪種能量石?</p>
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
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 5s steps(30, start) infinite,
    blink-caret 0.5s step-end infinite;
  @media (min-width: 576px) {
    font-size: 1.5rem;
  }
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
.bg-steup {
  background-size: cover;
  height: 300px;
  width: 100%;
  border: 2px solid #fff;
  position: relative;
  @media (min-width: 576px) {
    height: 500px;
  }
}
.bg-steup1 {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1626006793382.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=a2H9NwR9%2FmUCW48tv85rvPZY5%2BSZ4pSHFtip02H6ULGzwuFbGc4TBKnLV7YF5M3JcKWIPVgayW2cjfnVqDLcmpnjzOmjaugufbJq%2BdiWb6Lzb7eus3slkhhdVx1xQpuhWVdBKkjPj%2FbwTHJXxhNH0IWVEaBOEYN%2B1nYFQQbJumoQ3bRquesSFQqcKrkISECpDTtUb2XwSUNZgsLphnBSmfoBkMAl7CPeytj%2BalIJI4M9WxpVa%2BPprDkR%2B1WbPiT0luqjsV4Gm6P1tnfbhSUN97Ko68ybMWY1KAzLd53iv6lpy1Cb1oiHErBnVLKVS3wrRPAYYXz%2BpkVGQHDfq%2F%2FGIw%3D%3D');
}
.bg-steup2 {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1626006821239.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PAvFXFNYIm3%2FRVrA0nQ6tXlqkRiweULMFgo1HobADmDHQnm45hV9zcLR%2Fb3T0Hkq33FmjaJVnc7RVAJX4bgo9vBznu9pKORGB4m65zU0BjRslOtZ%2BB0ZfQVc8QJYBTH6lRY56W%2FOBN2dL6As7s1FjHNh6mz5Ua5icZ%2Feu83%2BSWJzLbqjC3bxCgzqpXYvMUvZIOXihTtJOBUV2bdYP7uj59bScTo6s3uiFdA8ZWMPKg7BZZZoyybhlEZ0tZnhY65FR7wBRzZvuQrHCS%2F8gFW6vROoi9QavjMlPF0NWPH8ufO3wZ0Ijnol7bBRIKIrY3MRQ97WEfjkWTLfFvc3co6JWw%3D%3D');
}
.bg-steup3 {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1626006845301.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=oImrBaBJctJbzu7hPhEl%2B53INTrFt6LIkiSNSjeiKSKMyKfeTbCl1RtxHmPt%2Bx4e3zFWEkYL2Srz37tt%2B4ioUaUMU6jIaw0syt9jxRgGCf3NwHe%2B5Ou6SUkO0NBB5RbYv%2BIp%2BRqGwBNfVA4wLmG7fN4qYL4WbTIrxScfU5psQavP10OZdm2Yihyo76BJl5zarW3jisMxqxjcIM05jr2MncacONZYACrhPWya3w5vGJ5Mam7gZPyH3eRQWAogu5yF64KUThUCIdLHK%2BCbfPTW8gVNqc6pzWMS6JTTMVZnnA9K4%2BQkolUjOia7L93FdDxAMNhtgOxsZxypJLoKwipZaw%3D%3D');
}
.bg-steup4 {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1626006870474.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ofVZI%2Ffz8%2BxxmTi2QJTuuLhxsIkJL94l0Vc%2FgOYxeSJs4vYGkJrsTH%2F6%2FvfuJkAw6I%2BdlXdv88edDZqYWW3Qr6lftdzqLNsq36xI45UacARYDprKJKUiLC9%2Bhn1uatMykmjzpR6SkdW1kHmfDFGZqcXVK%2B62mvrrgJV3Lkat1o6lBEpX9MWyGspQ4PfbIOw6c7MbEtvdO2vWN1qIYarQLD3ZfVrYhhFJkzn6fL45ayvydVmObgrwMzw92dp0PDcRogzF42jXM8dHDyQ%2FsUGtip633hSbFml5sffITfX5LcondiEQ36oNw%2F0Irlkse89mUfemZed2S8HqELJgqebkxg%3D%3D');
}
.bg-steup .bg-content {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  p {
    margin-bottom: 0;
    font-size: 1rem;
    @media (min-width: 576px) {
      font-size: 1.5rem;
    }
  }
}
.bg-steup:hover .bg-content {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
