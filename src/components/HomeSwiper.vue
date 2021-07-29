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
  <section class="my-5">
    <div class="container">
      <div class="d-flex justify-content-center">
        <h2 class="pb-3 mb-3 d-inline-block">
          <span data-aos="text-anim" data-aos-delay="400">精</span>
          <span data-aos="text-anim" data-aos-delay="600">選</span>
          <span data-aos="text-anim" data-aos-delay="800">商</span>
          <span data-aos="text-anim" data-aos-delay="1000">品</span>
        </h2>
      </div>
      <swiper
        :autoplay="true"
        :breakpoints="swiperBreakpoints.breakpoints"
        class="mb-3"
      >
        <swiper-slide v-for="item in props.products" :key="item.id">
          <div class="product-card" @click="forwardingProduct(item.id)">
            <div class="img-bx">
              <img :src="item.imageUrl" :alt="item.description" />
            </div>
            <div class="content">
              <h3 class="text-white">{{ item.title }}</h3>
              <h4 class="text-white">
                <small class="line-through text-danger"
                  >${{ currency(item.origin_price) }}</small
                >
                ${{ currency(item.price) }}
              </h4>
              <a
                href="javascript:;"
                class="text-white"
                @click.stop="addCart(item)"
              >
                <div
                  class="spinner-border spinner-border-sm"
                  role="status"
                  v-if="isLoading === item.id"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                加入購物車</a
              >
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  transform: translate3d(0, 0, 0);
  overflow: hidden;
}
.swiper-slide {
  transform: translate3d(0, 0, 0);
}
.line-through {
  text-decoration: line-through;
}
.product-card {
  position: relative;
  width: 100%;
  height: 420px;
  background: rgba($color: #272827, $alpha: 0.7);
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
}
.product-card::before {
  content: '';
  position: absolute;
  top: -50%;
  width: 100%;
  height: 100%;
  background: #272827;
  transform: skewY(345deg);
  transition: 0.5s;
}
.product-card:hover::before {
  top: -70%;
  transform: skewY(390deg);
}
.img-bx {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  img {
    max-width: 100%;
    transition: 0.5s;
  }
}
.product-card:hover .img-bx img {
  max-width: 90%;
}
.content {
  position: relative;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  top: 0;
  @media (min-width: 424px) {
    top: -30px;
  }
  @media (min-width: 767px) {
    top: 0;
  }
  h3 {
    color: rgba($color: #fff, $alpha: 0.6);
    letter-spacing: 1px;
  }
  a {
    position: relative;
    padding: 10px 30px;
    text-decoration: none;
    margin-top: 1rem;
    color: #fff;
    border-radius: 2rem;
    background-color: #dd5c33;
  }
  a:hover {
    background-color: #7e290f;
  }
}
</style>
