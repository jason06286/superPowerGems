<script>
import BaseNavbar from '@/components/BaseNavbar.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import BaseScrollTop from '@/components/BaseScrollTop.vue';
import HomeHeader from '@/components/HomeHeader.vue';
import ToastMessages from '@/components/ToastMessages.vue';
import HomeSwiper from '@/components/HomeSwiper.vue';

import axios from 'axios';

import emitter from '@/methods/emitter';
import pushMessageState from '@/methods/pushMessageState';

import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    BaseNavbar,
    BaseFooter,
    BaseScrollTop,
    HomeHeader,
    ToastMessages,
    HomeSwiper,
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
    const subscribeEmail = ref('');
    const subscribeSuccss = ref(false);

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
          }
          pushMessageState(res, '購物車新增');
        })
        .catch((err) => {
          pushMessageState(err, '購物車新增');
        });
    }
    function forwardingProduct(id) {
      router.push(`/frontDesk/product/${id}`);
    }
    function onSubmit() {
      subscribeSuccss.value = true;
    }

    onMounted(() => {
      getAllProducts();
    });

    return {
      products,
      swiperBreakpoints,
      isLoading,
      subscribeEmail,
      subscribeSuccss,

      addCart,
      forwardingProduct,
      onSubmit,
    };
  },
};
</script>

<template>
  <div>
    <ToastMessages />
    <BaseNavbar />
    <HomeHeader />
    <section class="py-5" style="overflow: hidden">
      <div class="container">
        <div class="segmentation"></div>
        <div class="py-5 row">
          <div
            class="mb-3 col-12 col-md-6 mb-md-0"
            data-aos="vis-anim"
            data-aos-anchor-placement="center-bottom"
          >
            <div class="bg-science"></div>
          </div>
          <div
            class="col-12 col-md-6"
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="300"
          >
            <div class="science-content">
              <h3>
                <span data-aos="text-anim" data-aos-delay="400">參</span>
                <span data-aos="text-anim" data-aos-delay="600">與</span>
                <span data-aos="text-anim" data-aos-delay="800">科</span>
                <span data-aos="text-anim" data-aos-delay="1000">學</span>
                <span data-aos="text-anim" data-aos-delay="1200">家</span>
              </h3>
              <p class="mt-3">
                達文西、柏拉圖、霍金、特斯拉、伽利略等共同研發製作。
              </p>
              <p>
                由各國頂尖科學家集結研發，透過能量轉換原則， <br />
                使能量透過能量石轉移到人體， 以利人人擁有能量抵禦外敵。 <br />
                能量石分成三大類，精礦、精鋼與精石，<br />
                各自蘊含其能力，又以精石最為稀有。
              </p>
            </div>
          </div>
        </div>
        <div class="segmentation"></div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="d-flex justify-content-center">
          <h3 class="pb-3 mb-3 d-inline-block">
            <span data-aos="text-anim" data-aos-delay="400">使</span>
            <span data-aos="text-anim" data-aos-delay="600">用</span>
            <span data-aos="text-anim" data-aos-delay="800">者</span>
            <span data-aos="text-anim" data-aos-delay="1000">推</span>
            <span data-aos="text-anim" data-aos-delay="1200">薦</span>
          </h3>
        </div>
        <div class="mb-5 row">
          <div class="col-lg-4 col-12">
            <div
              class=" d-flex justify-content-center align-items-center flex-column"
            >
              <img
                class="user-image"
                src="https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1628501331104.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=FMf1PWLy84Zq80nClXUgOXSprtKXhh3j0SVkxsem0JlFhXUEYHgIgdn3%2BoAMBO4n5h7BYi1MWd44ByV%2BUxjESG8UJ4bZschkL6G0aW7dQ9Gke0ixF9cvwAS4QHi6meD7cBVniYXXLB%2FMenPPPxv6%2FVwp2cm9udinG4DHcpGHbS6JskQJrmDcH7Xt0ndqfsSlPfrvyecMi5cvsMnQZTgOsAopmwS9QazgSOT93%2BzpYoHcc%2FykxOGiF30%2BXtO2p2dhPov0wTrFlfTZ4%2FXZP24URNl9tZfmVwTi0MK%2FCVqvkT1xseo6ljOAnRPloXApfGOzWAsE9zcjwPgWnt4xiVqw2g%3D%3D"
                alt="people"
                data-aos="vis-anim"
                data-aos-delay="400"
              />
              <h4 class="text-center" data-aos="zoom-in" data-aos-delay="400">
                實況主 <br />
                <span class="fs-5">黃小姐</span>
              </h4>
              <p
                class="px-2 user-content"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                在還沒發現能量石之前，半夜都會有外星人來我家敲門。
                多虧了能量石，使我獲取超能力，可以一覺到天亮，
                也讓我從平凡的上班族有了新特色，開啟實況主之路。
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-12">
            <div
              class=" d-flex justify-content-center align-items-center flex-column"
            >
              <img
                class="user-image"
                src="https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1628500403813.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bOIogmSzq64uKAcPNfXqFnHL2OUITuD5yyoQ1G28FZGklSlBDwIK2i4oGub4FRWgU9msE1EsJGhKxlR3DGWoq9rgGXRVQTt9iHKu%2B3QmCG1xrPEkk3CA3pFwMHqD5k7PmvAzLOTy3xCN10qeWsqPrgtwUGLMlesmHw59dVGY923JvjHSG3SnUuBc6dc3IYPJVKDmD1037x2eNcK%2F4HsOX0iZsCbgUSN5CwAkrZBCMn3NeDv4wK80b9E8Ure62nSDXRAU6owLEcku4gdr514LvSTYfWUqlp7cdh9rtXit84EtUTgjdg0g6OIPVrpagCrjrOFAYopugWBqA7GtnssYwQ%3D%3D"
                alt="people"
                data-aos="vis-anim"
                data-aos-delay="600"
              />
              <h4 class="text-center" data-aos="zoom-in" data-aos-delay="600">
                上班族 <br />
                <span class="fs-5">達先生</span>
              </h4>
              <p
                class="px-2 user-content"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                以前在上班的路上都要蜷縮著身子，深怕撞到外星人，
                有了能量石獲得超能力，上班的路上，終於能抬頭昂首的大步向前走。
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-12">
            <div
              class=" d-flex justify-content-center align-items-center flex-column"
            >
              <img
                class="user-image"
                src="https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1628500945287.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JWZAvLd2u2bivuKEboruG93IF6qAg0XxnAPyXQsIT0Rqqj37iLtgsWwhwoZ2pUR4Q2ajAnDt6uEwtuXd6kJ%2FXxUYXhmQnmqi%2BUIbaNJgHwpUMG4ukntlJ4e%2BC2HpDSOESTAkFzG62btiQoHloa3ZQ4%2BAZIpStGN3dytB7QIEPtwlOHVjTh7%2BcCPtVnyO5i4d59tMVrpRX2speFHFieB%2BYdn6JLP%2Bv8%2Fc5XIME4SsHGlt4%2F0Oj4V%2BTL%2B%2F3gE7KLCnbFcA57PiRDT6IC7o0ILbD6wWLz8ftHREOIbY%2F02xxWYCRF2piw2XJIn5PPDidwiqbnTx9pfSoc%2F3tlac0%2BTaKQ%3D%3D"
                alt="people"
                data-aos="vis-anim"
                data-aos-delay="800"
              />
              <h4 class="text-center" data-aos="zoom-in" data-aos-delay="800">
                大學生<br />
                <span class="fs-5">朱小姐</span>
              </h4>
              <p
                class="px-2 user-content"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                以前坐在教室上課，要眼觀四方，時不時警戒著外星人來襲，
                有了能量石獲得超能力，使我有安全感能安心得上課。
              </p>
            </div>
          </div>
        </div>
        <div class="segmentation"></div>
      </div>
    </section>
    <section class="my-5">
      <div class="container">
        <div class="d-flex justify-content-center">
          <h3 class="pb-3 mb-3 d-inline-block">
            <span data-aos="text-anim" data-aos-delay="400">如</span>
            <span data-aos="text-anim" data-aos-delay="600">何</span>
            <span data-aos="text-anim" data-aos-delay="800">使</span>
            <span data-aos="text-anim" data-aos-delay="1000">用</span>
            <span data-aos="text-anim" data-aos-delay="1200">?</span>
          </h3>
        </div>
        <div class="mb-5 row">
          <div
            class="mb-3 col-lg-3 col-12"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="setup">
              <div class="cover">
                <h3>步驟一</h3>
              </div>
              <div class="back bg-steup1">
                <p>拿到貨物時，內容物會有能量石和一組密碼</p>
              </div>
            </div>
          </div>
          <div
            class="mb-3 col-lg-3 col-12"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div class="setup">
              <div class="cover">
                <h3>步驟二</h3>
              </div>
              <div class="back bg-steup2">
                <p>手握能量石，心中默想著密碼</p>
              </div>
            </div>
          </div>
          <div
            class="mb-3 col-lg-3 col-12"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div class="setup">
              <div class="cover">
                <h3>步驟三</h3>
              </div>
              <div class="back bg-steup3">
                <p>
                  此時會感到能量湧進身體，通常為 10 ~ 15 分鐘吸收完成，因人而異
                </p>
              </div>
            </div>
          </div>
          <div
            class="mb-3 col-lg-3 col-12"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            <div class="setup">
              <div class="cover">
                <h3>步驟四</h3>
              </div>
              <div class="back bg-steup4">
                <p>
                  吸收完能量石會消失，轉換為能量充斥身體，可以心中默想能量石名稱、
                  形狀，腦中就會浮現該能量石能力
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="segmentation"></div>
      </div>
    </section>
    <section class="mb-3">
      <HomeSwiper :products="products.arr" />
      <div class="d-flex justify-content-center">
        <router-link
          class="my-3 btn btn-lg btn-lightred text-title fs-5 btn-allProduct"
          to="/frontDesk/products"
        >
          查看所有商品
        </router-link>
      </div>
    </section>
    <section>
      <div class="bg-subscribe">
        <div class="container h-100">
          <div class="d-flex flex-column h-100 justify-content-center">
            <h2 data-aos="fade-down" data-aos-delay="600">訂閱電子報</h2>
            <p class="fs-5" data-aos="fade-down" data-aos-delay="400">
              獲取最新能量石通知!
            </p>
            <div class="row no-gutters" v-if="!subscribeSuccss">
              <div
                class="col-lg-4 col-md-6 col-12"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                <Form
                  class="mb-3 input-group"
                  v-slot="{ errors }"
                  @submit="onSubmit()"
                >
                  <Field
                    id="email"
                    name="信箱"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': errors['信箱'] }"
                    placeholder="請輸入信箱"
                    rules="email|required"
                    v-model="subscribeEmail"
                  ></Field>

                  <button
                    class="btn btn-outline-title"
                    type="submit"
                    :class="{ 'not-allowed': subscribeEmail === '' }"
                  >
                    訂閱
                  </button>
                  <ErrorMessage
                    name="信箱"
                    class="invalid-feedback"
                  ></ErrorMessage>
                </Form>
              </div>
            </div>
            <p class="mb-0" style="color: wheat" v-else>
              {{ subscribeEmail }} 已訂閱電子報
              <i class="bi bi-check-circle-fill"></i>
            </p>
          </div>
        </div>
      </div>
    </section>
    <BaseScrollTop class="scroll-top" />
    <BaseFooter />
  </div>
</template>

<style lang="scss" scoped>
.bg-science {
  background: url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1627895683918.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=FeqYWZOeQKEBEf71PssyaKccvNhdELtiSt48r5X33BTRuALvFjcPXSwXipv0SYE7LYQznE4ejLQcYd6mq1xj2VEkblVwTvN5PxFMI15zlIqSZzXK1wmA3glGE3EjKB2ByTVmVEpwDDMgO%2FdW5jwBr24sVVYEDQKlWgmyAnJ3v6OeiQ8U2jvQ2lelsML1D%2FidnfDx2m5RSyhGYQm3ZNZ08Zy%2BZr60WfOgDoXlfD9vf4m6DTtpX8uVfAf31%2Bt%2BXSMqzV6hDRfcD79gScwiP%2BvBtTkLwicaQ2%2BwH%2F7hWWCzVu6WwJly8yKQBuXqt7cfQHlV4c%2Bd%2Fnzd9G8nMqkV3An5Dw%3D%3D');
  background-size: cover;
  background-position: center center;
  height: 400px;
  border-radius: 0.5rem;
}
.science-content {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  position: relative;
}
.segmentation {
  position: relative;
  width: 100%;
  height: 2px;
  background: #d9be93;
  margin: 8px 0;
  box-shadow: #f5f4f3 0px 0px 20px;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 25%;
    height: 4px;
    border-radius: 20%;
    transform: translate(-50%, -50%);
    background: #e2c89f;
    box-shadow: #f5f4f3 0px 0px 20px;
  }
}
.user-image {
  display: block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}
.user-content {
  width: 100%;
  @media (min-width: 576px) {
    width: 400px;
  }
  @media (min-width: 992px) {
    width: 100%;
  }
}
.bg-subscribe {
  background: url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1628011051062.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GllSPBslNBVy4cujG2gmLyYO84gRGKZfJ4LQE%2FJVNqw0%2B2%2B%2FGzC6Tc1ieHnEmkrgDOT1f84aKNKcJzc%2FmiZ4sDSwl%2FXmK7pbkJ3iO9%2BEXjaKesTkNQBJ%2FA8zH1GVoHHQ%2FVMl11lBZ%2BBk3yzzblyIOnq7akv7v2xnrGyMJII1%2BvT80LlJqLMyM6rQ0PzcawjaaQfbygrXS1Ge5ri6%2Bzu4Z9lJIRKRB3uqYiVT283w8Hz3Bkx93Mfa043GKUvDdFZTDie0Nzaad1D24Uf8FzekS7g%2BWKqbnWXEeM3FWApiRuahKWGIcraf5mO7PCGw%2BHBTrbe%2BnCxhJhAf5G7ELRQILw%3D%3D');
  background-size: cover;
  height: 200px;
  color: rgba($color: #fff, $alpha: 0.8);
  @media (min-width: 576px) {
    height: 250px;
  }
}
.not-allowed {
  cursor: not-allowed;
}
.setup {
  width: 100%;
  height: 400px;
  position: relative;
  cursor: pointer;
  perspective: 1000px;
  margin: 0 auto;
  h3 {
    color: wheat;
  }
  p {
    z-index: 1;
    color: rgba($color: #fff, $alpha: 0.8);
    padding: 1rem;
    margin-bottom: 0;
    font-size: 1rem;
    @media (min-width: 576px) {
      font-size: 1.25rem;
    }
  }
}
.cover,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  transition: all 0.25s ease-in-out;
}
.setup {
  .cover {
    background-color: #ffdc82;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1000 1000'%3E%3Cg fill='%23dfbf73'%3E%3Cpolygon points='1000 -50 0 -50 500 450'/%3E%3Cpolygon points='550 500 1050 1000 1050 0'/%3E%3Cpolygon points='-50 0 -50 1000 450 500'/%3E%3Cpolygon points='0 1050 1000 1050 500 550'/%3E%3C/g%3E%3Cg fill='%23c0a264'%3E%3Cpolygon points='1000 -133.3 0 -133.3 500 366.7'/%3E%3Cpolygon points='633.3 500 1133.3 1000 1133.3 0'/%3E%3Cpolygon points='-133.3 0 -133.3 1000 366.7 500'/%3E%3Cpolygon points='0 1133.3 1000 1133.3 500 633.3'/%3E%3C/g%3E%3Cg fill='%23a08554'%3E%3Cpolygon points='1000 -216.7 0 -216.7 500 283.3'/%3E%3Cpolygon points='716.7 500 1216.7 1000 1216.7 0'/%3E%3Cpolygon points='-216.7 0 -216.7 1000 283.3 500'/%3E%3Cpolygon points='0 1216.7 1000 1216.7 500 716.7'/%3E%3C/g%3E%3Cg fill='%23806845'%3E%3Cpolygon points='1000 -300 0 -300 500 200'/%3E%3Cpolygon points='800 500 1300 1000 1300 0'/%3E%3Cpolygon points='-300 0 -300 1000 200 500'/%3E%3Cpolygon points='0 1300 1000 1300 500 800'/%3E%3C/g%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='%23ffcf8b' points='0 707.1 0 292.9 292.9 0 707.1 0 1000 292.9 1000 707.1 707.1 1000 292.9 1000'/%3E%3Cg fill='%23dfb57a'%3E%3Cpolygon points='464.6 -242.5 -242.5 464.6 464.6 464.6'/%3E%3Cpolygon points='535.4 464.6 1242.5 464.6 535.4 -242.5'/%3E%3Cpolygon points='-242.5 535.4 464.6 1242.5 464.6 535.4'/%3E%3Cpolygon points='535.4 1242.5 1242.5 535.4 535.4 535.4'/%3E%3C/g%3E%3Cg fill='%23c09c68'%3E%3Cpolygon points='405.7 -301.4 -301.4 405.7 405.7 405.7'/%3E%3Cpolygon points='594.3 405.7 1301.4 405.7 594.3 -301.4'/%3E%3Cpolygon points='-301.4 594.3 405.7 1301.4 405.7 594.3'/%3E%3Cpolygon points='594.3 1301.4 1301.4 594.3 594.3 594.3'/%3E%3C/g%3E%3Cg fill='%23a08257'%3E%3Cpolygon points='346.8 -360.3 -360.3 346.8 346.8 346.8'/%3E%3Cpolygon points='653.2 346.8 1360.3 346.8 653.2 -360.3'/%3E%3Cpolygon points='-360.3 653.2 346.8 1360.3 346.8 653.2'/%3E%3Cpolygon points='653.2 1360.3 1360.3 653.2 653.2 653.2'/%3E%3C/g%3E%3Cg fill='%23806845'%3E%3Cpolygon points='287.9 -419.2 -419.2 287.9 287.9 287.9'/%3E%3Cpolygon points='712.1 287.9 1419.2 287.9 712.1 -419.2'/%3E%3Cpolygon points='-419.2 712.1 287.9 1419.2 287.9 712.1'/%3E%3Cpolygon points='712.1 1419.2 1419.2 712.1 712.1 712.1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    transform: rotateY(0deg);
  }
  &:hover .cover {
    transform: rotateY(180deg);
  }
  .back {
    transform: rotateY(-180deg);
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover .back {
    transform: rotateY(0deg);
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
}
.scroll-top {
  position: fixed;
  bottom: 2%;
  right: 2%;
}
.btn-allProduct {
  position: relative;
  display: block;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #682605;
    z-index: -1;
    transform: translate(5%, 20%);
  }
}
</style>
