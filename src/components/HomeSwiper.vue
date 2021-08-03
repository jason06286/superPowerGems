<script>
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';
import axios from 'axios';
import { currency } from '@/methods/filter';
import emitter from '@/methods/emitter';
import pushMessageState from '@/methods/pushMessageState';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

SwiperCore.use([Pagination, Autoplay]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    products: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const router = useRouter();
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
          spaceBetween: 20,
        },
        1190: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
    const isLoading = ref('');

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

    return {
      props,
      swiperBreakpoints,
      forwardingProduct,
      addCart,
      currency,
      isLoading,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <h3 class="pb-3 mb-3 d-inline-block">
        <span data-aos="text-anim" data-aos-delay="400">精</span>
        <span data-aos="text-anim" data-aos-delay="600">選</span>
        <span data-aos="text-anim" data-aos-delay="800">商</span>
        <span data-aos="text-anim" data-aos-delay="1000">品</span>
      </h3>
    </div>
    <swiper
      :autoplay="true"
      :breakpoints="swiperBreakpoints.breakpoints"
      class="mb-3"
    >
      <swiper-slide v-for="item in props.products" :key="item.id">
        <div class="product-card" @click="forwardingProduct(item.id)">
          <div class="product-inner">
            <img :src="item.imageUrl" :alt="item.description" />
            <h4 class="text-title">{{ item.title }}</h4>
            <p>
              {{ item.description }}
            </p>
            <div class="product-footer">
              <div class="d-flex">
                <p class="mb-0 line-through text-darkred me-3">
                  $ {{ currency(item.origin_price) }} 元
                </p>
                <p class="mb-0">$ {{ currency(item.price) }} 元</p>
              </div>
              <a
                href="javascript:;"
                class="text-darkred fs-3"
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
            <img src="../assets/img/magic-circle.svg" alt="魔法陣" />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 420px;
  transform: translate3d(0, 0, 0);
  overflow: hidden;
}
.swiper-slide {
  transform: translate3d(0, 0, 0);
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
      height: 200px;
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
</style>
