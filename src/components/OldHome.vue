<script>
// componets
import BaseNavbar from '@/components/BaseNavbar.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import HomeHeader from '@/components/HomeHeader.vue';
import BaseSwiper from '@/components/BaseSwiper.vue';
import BaseCartModal from '@/components/BaseCartModal.vue';
import ToastMessages from '@/components/ToastMessages.vue';

// kit
import axios from 'axios';
// methods
import emitter from '@/methods/emitter';
import pushMessageState from '@/methods/pushMessageState';
// vue
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    BaseNavbar,
    BaseFooter,
    HomeHeader,
    BaseSwiper,
    BaseCartModal,
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
      products,
      swiperBreakpoints,
      isLoading,
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
    <div class="bg-star">
      <section>
        <div class="container">
          <div
            class="py-5  d-flex align-items-center justify-content-center flex-column"
          >
            <h2 class="pb-3 mb-3 border-bottom border-3 border-orange">
              關於我們
            </h2>
            <p class="text-center about">
              宇宙能源匱乏，外星人肆意掠奪，地球生存危在旦夕… <br />
              由各國頂尖科學家集結研發，透過能量轉換原則， <br />
              使能量透過能量石轉移到人體，以利人人擁有能量抵禦外敵。<br />
              能量石分成三大類，精礦、精鋼與精石， <br />
              各自蘊含其能力，又以精石最為稀有。
            </p>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="d-flex justify-content-center">
            <h2
              class="pb-3 mb-3  border-bottom border-3 border-orange d-inline-block"
            >
              商品分類
            </h2>
          </div>
          <div class="mb-3 row">
            <router-link
              class="py-3 text-center border  mb-lg-3 col-lg-3 col-6 fw-bold list"
              to="/frontDesk/products"
            >
              全部商品
            </router-link>
            <router-link
              class="py-3 text-center border  mb-lg-3 col-lg-3 col-6 fw-bold list"
              to="/frontDesk/products"
            >
              精礦
            </router-link>
            <router-link
              class="py-3 text-center border  mb-lg-3 col-lg-3 col-6 fw-bold list"
              to="/frontDesk/products"
            >
              精鋼
            </router-link>
            <router-link
              class="py-3 text-center border  mb-lg-3 col-lg-3 col-6 fw-bold list"
              to="/frontDesk/products"
            >
              精石
            </router-link>
          </div>
          <div class="row bg-coupon">
            <div class="mb-3 mb-lg-0 col-12 col-lg-8">
              <p class="mb-0 text-center fs-5">
                想要更多優惠嗎?玩小遊戲領取優惠
              </p>
            </div>
            <div class="col-12 col-lg-4 d-grid">
              <router-link class="btn btn-primary" to="/frontDesk/coupon"
                >領取優惠
              </router-link>
            </div>
          </div>
        </div>
      </section>
      <BaseSwiper :products="products.arr">最新上架</BaseSwiper>
      <section class="mt-5">
        <div class="mb-3 d-flex justify-content-center w-100">
          <h2 class="pb-3 border-bottom border-3 border-orange d-inline-block">
            使用方法
          </h2>
        </div>
        <div class="row g-0">
          <div class="col-12 col-lg-6">
            <div class="bg-steup bg-steup1">
              <div class="bg-content">
                <div>
                  <h3>步驟一</h3>
                  <p>拿到貨物時，內容物會有能量石和一組密碼</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="bg-steup bg-steup2">
              <div class="bg-content">
                <div>
                  <h3>步驟二</h3>
                  <p>手握能量石，心中默想著密碼</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="bg-steup bg-steup3">
              <div class="bg-content">
                <div>
                  <h3>步驟三</h3>
                  <p>
                    此時會感到能量湧進身體，通常為 10 ~ 15
                    分鐘吸收完成，因人而異
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="bg-steup bg-steup4">
              <div class="bg-content">
                <div>
                  <h3>步驟四</h3>
                  <p>
                    吸收完能量石會消失，轉換為能量充斥身體，<br />
                    可以心中默想能量石名稱、形狀，腦中就會浮現該能量石能力
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div
            class="py-5  d-flex align-items-center justify-content-center flex-column"
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
            <router-link to="/frontDesk/quiz" class="btn btn-primary btn-lg"
              >進行測驗</router-link
            >
          </div>
        </div>
      </section>
    </div>
    <BaseFooter />
  </div>
</template>

<style lang="scss" scoped>
.typewriter p {
  color: white;
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
  h3 {
    color: wheat;
  }
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
.list {
  text-decoration: none;
  color: #000;
  cursor: pointer;
  background-color: #392f3c;
  color: white;
}
.list:hover {
  background-color: #dd5c33;
  color: #fff;
}
.bg-coupon {
  color: #fff;
  padding: 0.75rem 0;
  background-color: silver;
  p {
    letter-spacing: 0.25rem;
  }
}
.bg-star {
  background: black
    url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1625924061162.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=QUQ3j12Xf773TV%2FlRxJldJjI%2BlIuBnj1XkpciscKx7no2yRTqN3eJztesYPU3FIf5Nm038Zsy%2B0emcUdw%2BDQHsuiEDYOpSyffzlSuxnLglBYp5sSNegxXe5Mec1PM%2FUWANSfwFT1nIh%2FjeIEfbkVZiJPlIH5Jdp%2F3oIWtFE%2FkcMFysJP%2FDaCnfOpnufSZbKfRQL66ioIYWqjE0NSMfzOSxqjR7T3JMERfsl9BMWtnPyj84IaFTkT%2BMDgZbsYMVRTZn9TjXJ0V%2F0oZQkU3w4jy4ecytYO1%2BYrFiX8MM2akXEYYV06c85RD12ZoFkRt51oWldugY6bXwy0yO8BYqKu6A%3D%3D')
    repeat;
  color: white;
}
.about {
  background-color: #392f3c;
  padding: 1rem;
  border-radius: 0.25rem;
  color: wheat;
}
</style>
