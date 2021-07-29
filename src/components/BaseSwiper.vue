<script>
// kit
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';
// vue
import { reactive } from 'vue';
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
          spaceBetween: 30,
        },
        1190: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
    function forwardingProduct(id) {
      router.push(`/frontDesk/product/${id}`);
    }

    return {
      props,
      swiperBreakpoints,
      forwardingProduct,
    };
  },
};
</script>

<template>
  <section class="my-5">
    <div class="container">
      <div class="d-flex justify-content-center">
        <h2
          class="pb-3 mb-3 border-bottom border-3 border-orange d-inline-block"
        >
          <slot></slot>
        </h2>
      </div>
      <swiper
        :autoplay="true"
        :breakpoints="swiperBreakpoints.breakpoints"
        class="mb-3"
      >
        <swiper-slide v-for="item in props.products" :key="item.id">
          <div class="img-card" @click="forwardingProduct(item.id)">
            <p class="p-1 mb-0 text-white bg-primary position-absolute">
              {{ item.category }}
            </p>
            <img
              :src="item.imagesUrl[0]"
              :alt="item.description"
              class="image"
            />
            <div class="content">
              <h3 class="text-center text-white">{{ item.title }}</h3>
              <div
                class="d-flex justify-content-center align-items-center w-100"
              ></div>
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
}
.swiper-slide {
  transform: translate3d(0, 0, 0);
}
.img-card {
  position: relative;
  width: 100%;
  border: 2px solid gray;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
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
</style>
