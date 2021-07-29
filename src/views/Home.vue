<script>
import BaseNavbar from '@/components/BaseNavbar.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import HomeHeader from '@/components/HomeHeader.vue';
import BaseCartModal from '@/components/BaseCartModal.vue';
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
    HomeHeader,
    BaseCartModal,
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
            console.error = () => {
              throw new Error(res.data.message);
            };
          }
          pushMessageState(res, '購物車新增');
        })
        .catch((err) => {
          console.error = () => {
            throw new Error(err);
          };
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
      addCart,
      forwardingProduct,
      subscribeEmail,
      onSubmit,
      subscribeSuccss,
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
        <div class="row">
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
              <p class="pb-3 border-bottom">
                由各國頂尖科學家集結研發，透過能量轉換原則， <br />
                使能量透過能量石轉移到人體， 以利人人擁有能量抵禦外敵。 <br />
                能量石分成三大類，精礦、精鋼與精石，<br />
                各自蘊含其能力，又以精石最為稀有。
              </p>
              <h4>
                <span data-aos="text-anim" data-aos-delay="400">參</span>
                <span data-aos="text-anim" data-aos-delay="600">與</span>
                <span data-aos="text-anim" data-aos-delay="800">科</span>
                <span data-aos="text-anim" data-aos-delay="1000">學</span>
                <span data-aos="text-anim" data-aos-delay="1200">家</span>
              </h4>
              <p>愛因斯坦、牛頓、霍金、特斯拉、伽利略等共同研發製作。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="bg-gray">
      <HomeSwiper :products="products.arr" />
      <section>
        <div class="container">
          <div class="d-flex justify-content-center">
            <h2 class="pb-3 mb-3 d-inline-block">
              <span data-aos="text-anim" data-aos-delay="400">使</span>
              <span data-aos="text-anim" data-aos-delay="600">用</span>
              <span data-aos="text-anim" data-aos-delay="800">者</span>
              <span data-aos="text-anim" data-aos-delay="1000">推</span>
              <span data-aos="text-anim" data-aos-delay="1200">薦</span>
            </h2>
          </div>
          <div class="row">
            <div class="col-lg-4 col-12">
              <div
                class=" d-flex justify-content-center align-items-center flex-column"
              >
                <img
                  class="user-image"
                  src="https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1627370873181.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=aAJOaBj8gvPzrxn6uEf4B8qCZ%2BljKXzObYzhqeb5wnRa8G1zDer8yx%2BYNT0AfxAV1Piusm4ou5TP3a3BB9nm6fIoxdE7pnFXh0llfN%2FpOPcfxcrC1TSXupdnoyCEFlmVvGbd50boCHYiqA8WFb9LDL%2FUSM2LhoNPTK9K1gWcaX1Ib5ncuEMZb3UxylesRpRpFZrOsKBHqOQMQizsJ27dexibwmdq1AFwWq8tb32K8VrjlVEeaX5GmKQ5sIQBzFJvMpsUW3Xk2YHfARnC7Gur219Mi3fiYJYTcjOntgSaWw%2FP3f%2F%2FPwL2ZAlY3SgVQqYZVV73zWo6yKVSFvtvmYSuqQ%3D%3D"
                  alt="people"
                  data-aos="vis-anim"
                  data-aos-delay="400"
                />
                <h4 class="text-center" data-aos="zoom-in" data-aos-delay="400">
                  實況主黃小姐
                </h4>
                <p class="text-center" data-aos="zoom-in" data-aos-delay="400">
                  在還沒發現能量石之前，半夜都會有外星人來我家敲門。<br />
                  多虧了能量石，使我獲取超能力，可以一覺到天亮， <br />
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
                  src="https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1627370844857.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hU%2BsmkfPkRdXDEIsPkIIK4mn3TYjVc2LhLBJeXDsXFRCmWoKJaThkDJq%2Fcpic6EFUqTXSq%2FQKF6PCtHCLyiopI7r8XpFqcjWNmXHMGDkBxHAq4ml3Eq%2FzuzOWpvhFe4QiMs4ArZAxYvcwa92W09vQwnQdPYm2I4sTkzAgarhCM%2Bsx1O3mINeP0DFxS7f%2BO9SJwmHF9UiBvnnext3OVdAoPsZrV%2FL8SvALdSXjJTVzy28fqGlyRtUNEKB0ZZ9Yacaka7mOzxbK9Zm7ctqEmyYmJkLhRwiDRMclHSobc0iqmrtuM%2BRtUYeE1F0Yda4q%2BGabBY8wCASqyg9Q58ht0tF6A%3D%3D"
                  alt="people"
                  data-aos="vis-anim"
                  data-aos-delay="600"
                />
                <h4 class="text-center" data-aos="zoom-in" data-aos-delay="600">
                  上班族陳先生
                </h4>
                <p class="text-center" data-aos="zoom-in" data-aos-delay="600">
                  以前在上班的路上都要蜷縮著身子，深怕撞到外星人，<br />
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
                  src="https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1627370888998.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iKWp3FQu9R5Cm8nM3b%2FGQ6lcgfuG%2FmEgfriNDr3inTbKCr6oS09APilL772oOLu0pBf%2BXaBhF2LxJfUQ3a9gYV742udVIGWyb46skopMWYsRd9hb%2BT2oxS20G%2FjsllQQcBSUBkPHytwXc%2BRRhOHlf2o7%2FHXkMpXlHsyLTox150J9TVMiPztUhPVoOR3y0Vn44ui5uQ9e6gNS9ZXh%2BRAlMwnBiBkfCwBs%2Bz7GG94EudZSALx4CdFDewIgM6JKVQm%2FzUhECsJ12vdaGKXmAuxFt59GZsI0sFAUyVIBPMggQy3M47E%2FI%2BsNeJYo1OQmdBg5RFkjp%2Bu%2F5LTZgi%2F1q3pDCg%3D%3D"
                  alt="people"
                  data-aos="vis-anim"
                  data-aos-delay="800"
                />
                <h4 class="text-center" data-aos="zoom-in" data-aos-delay="800">
                  大學生朱小姐
                </h4>
                <p class="text-center" data-aos="zoom-in" data-aos-delay="800">
                  以前坐在教室上課，要眼觀四方，<br />
                  時不時警戒著外星人來襲，有了能量石獲得超能力， <br />
                  使我有安全感能安心得上課。
                </p>
              </div>
            </div>
          </div>
          <div class="row no-gutters justify-content-center">
            <div class="text-center col-10">
              <router-link to="/frontDesk/products" class="btn-product"
                >查看所有商品</router-link
              >
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="my-5">
      <div class="container-fluid">
        <div class="d-flex justify-content-center">
          <h2 class="pb-3 mb-3 d-inline-block">
            <span data-aos="text-anim" data-aos-delay="400">如</span>
            <span data-aos="text-anim" data-aos-delay="600">何</span>
            <span data-aos="text-anim" data-aos-delay="800">使</span>
            <span data-aos="text-anim" data-aos-delay="1000">用</span>
            <span data-aos="text-anim" data-aos-delay="1200">?</span>
          </h2>
        </div>
        <div class="row">
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
                    class="btn btn-secondary"
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
    <BaseCartModal />
    <BaseFooter />
  </div>
</template>

<style lang="scss" scoped>
.star {
  background: #181818
    url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1625924061162.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=QUQ3j12Xf773TV%2FlRxJldJjI%2BlIuBnj1XkpciscKx7no2yRTqN3eJztesYPU3FIf5Nm038Zsy%2B0emcUdw%2BDQHsuiEDYOpSyffzlSuxnLglBYp5sSNegxXe5Mec1PM%2FUWANSfwFT1nIh%2FjeIEfbkVZiJPlIH5Jdp%2F3oIWtFE%2FkcMFysJP%2FDaCnfOpnufSZbKfRQL66ioIYWqjE0NSMfzOSxqjR7T3JMERfsl9BMWtnPyj84IaFTkT%2BMDgZbsYMVRTZn9TjXJ0V%2F0oZQkU3w4jy4ecytYO1%2BYrFiX8MM2akXEYYV06c85RD12ZoFkRt51oWldugY6bXwy0yO8BYqKu6A%3D%3D')
    repeat;
}
.bg-science {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1627359462076.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LmT4GpvBEdCQ5gY88pxglD%2Fqcx92Q67j7hvyfss4sdr8VGctWKLBJtw7u%2FGsovPyPUBMk01Md27IeGQYzL1c5opwhTWv7mUG0G62ENMWJob8FvkkLDaHZIjndJZgpceuhwJ9jRiqqhIxrsB4o1FIzrDKJLLwJzzDfJcF7ubSrYnHJmNWPw3TBc%2BJCXM4WSjnpKMfEVrEoejUQCZd1dAu1ahP2CuJ%2Fu0JjPB4ljmcJFoKATBjIsrsMy71nhNqbIbk%2FUrRDQ4mpmEclALf5AjIgaQ7x8FwQ9xD2RsVu%2BFTsKNbc6mpdOWiAgXmvWbjapYwbwbw5LNPqW0fSXub5wJ5Ww%3D%3D');
  background-size: cover;
  background-position: center center;
  height: 500px;
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
  color: gray;
}
.science-content::before {
  content: '';
  background-color: rgba($color: #392f3c, $alpha: 0.2);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  border-radius: 30% 70% 33% 67% / 48% 30% 70% 52%;
}
.bg-gray {
  background: #ededed;
  padding-top: 2rem;
  margin-bottom: 4rem;
}
.user-image {
  display: block;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}
.btn-product {
  display: inline-block;
  width: 100%;
  padding: 1rem 1rem;
  color: #fff;
  font-weight: 600;
  background: #dd5c33;
  text-decoration: none;
  transform: translateY(50%);
  transition: all 0.3s;
  @media (min-width: 576px) {
    width: 300px;
  }
}
.btn-product:hover {
  background: #63210d;
}
.bg-subscribe {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1626525384383.png?Expires=1742169600&GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Signature=N1rUFn07i3d3R3UaKsSy3ThoMJOKWzWwgtokpj9Yg36cx%2BcpAYxVep3NEcmITPnuZ8%2Bz1mZDHFMGkooaSXL1QAU4YNZT5JlyaG%2Bb%2FRlIOUB6GWNHAvHarIuvKG2uPgqU4K8K2f3EhXvmLi8R4NMlh0O5%2FTkOyizOpG8AKfREvWAJFvU%2F%2ByfHTz%2BELafg%2Bj9vdXoh7q56y7nz%2BSoYJHWTmD3vmGdO2uyMfwLkOPsAWgoJeiUbheAIWTt7RkUzDlAmREGmLA7Fi80ygEjDQoFiQ2EOh20IiFV3APSZ4m3FnbdbRGXrPKMGMuVv6O8hX6tc%2BBr%2FTjm6FcoAzEMwQspCWA%3D%3D');
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
      font-size: 1.5rem;
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
.setup .cover {
  background-size: cover;

  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(14, 174, 87, 1) 0%,
    rgba(12, 116, 117, 1) 90%
  );
  transform: rotateY(0deg);
}
.setup:hover .cover {
  transform: rotateY(180deg);
}
.setup .back {
  transform: rotateY(-180deg);
}
.setup:hover .back {
  transform: rotateY(0deg);
}
.setup .back::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.setup .bg-steup1 {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1626006793382.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=a2H9NwR9%2FmUCW48tv85rvPZY5%2BSZ4pSHFtip02H6ULGzwuFbGc4TBKnLV7YF5M3JcKWIPVgayW2cjfnVqDLcmpnjzOmjaugufbJq%2BdiWb6Lzb7eus3slkhhdVx1xQpuhWVdBKkjPj%2FbwTHJXxhNH0IWVEaBOEYN%2B1nYFQQbJumoQ3bRquesSFQqcKrkISECpDTtUb2XwSUNZgsLphnBSmfoBkMAl7CPeytj%2BalIJI4M9WxpVa%2BPprDkR%2B1WbPiT0luqjsV4Gm6P1tnfbhSUN97Ko68ybMWY1KAzLd53iv6lpy1Cb1oiHErBnVLKVS3wrRPAYYXz%2BpkVGQHDfq%2F%2FGIw%3D%3D');
}
.setup .bg-steup2 {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1626006821239.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PAvFXFNYIm3%2FRVrA0nQ6tXlqkRiweULMFgo1HobADmDHQnm45hV9zcLR%2Fb3T0Hkq33FmjaJVnc7RVAJX4bgo9vBznu9pKORGB4m65zU0BjRslOtZ%2BB0ZfQVc8QJYBTH6lRY56W%2FOBN2dL6As7s1FjHNh6mz5Ua5icZ%2Feu83%2BSWJzLbqjC3bxCgzqpXYvMUvZIOXihTtJOBUV2bdYP7uj59bScTo6s3uiFdA8ZWMPKg7BZZZoyybhlEZ0tZnhY65FR7wBRzZvuQrHCS%2F8gFW6vROoi9QavjMlPF0NWPH8ufO3wZ0Ijnol7bBRIKIrY3MRQ97WEfjkWTLfFvc3co6JWw%3D%3D');
}
.setup .bg-steup3 {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1626006845301.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=oImrBaBJctJbzu7hPhEl%2B53INTrFt6LIkiSNSjeiKSKMyKfeTbCl1RtxHmPt%2Bx4e3zFWEkYL2Srz37tt%2B4ioUaUMU6jIaw0syt9jxRgGCf3NwHe%2B5Ou6SUkO0NBB5RbYv%2BIp%2BRqGwBNfVA4wLmG7fN4qYL4WbTIrxScfU5psQavP10OZdm2Yihyo76BJl5zarW3jisMxqxjcIM05jr2MncacONZYACrhPWya3w5vGJ5Mam7gZPyH3eRQWAogu5yF64KUThUCIdLHK%2BCbfPTW8gVNqc6pzWMS6JTTMVZnnA9K4%2BQkolUjOia7L93FdDxAMNhtgOxsZxypJLoKwipZaw%3D%3D');
}
.setup .bg-steup4 {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1626006870474.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ofVZI%2Ffz8%2BxxmTi2QJTuuLhxsIkJL94l0Vc%2FgOYxeSJs4vYGkJrsTH%2F6%2FvfuJkAw6I%2BdlXdv88edDZqYWW3Qr6lftdzqLNsq36xI45UacARYDprKJKUiLC9%2Bhn1uatMykmjzpR6SkdW1kHmfDFGZqcXVK%2B62mvrrgJV3Lkat1o6lBEpX9MWyGspQ4PfbIOw6c7MbEtvdO2vWN1qIYarQLD3ZfVrYhhFJkzn6fL45ayvydVmObgrwMzw92dp0PDcRogzF42jXM8dHDyQ%2FsUGtip633hSbFml5sffITfX5LcondiEQ36oNw%2F0Irlkse89mUfemZed2S8HqELJgqebkxg%3D%3D');
}
</style>
