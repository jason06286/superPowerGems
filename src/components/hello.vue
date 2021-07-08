<template lang="">
 <swiper
:autoplay='true'
:pagination='{clickable:true}'
:breakpoints=" swiperBreakpoints.breakpoints">
  <swiper-slide  v-for="item in products.arr" :key="item.id">
    <div class="img-card">
      <img :src="item.imageUrl" alt="" class="image">
      <div class="content">
        <h3 class="text-center text-white">{{item.title}}</h3>
        <div class="d-flex justify-content-center align-items-center w-100">
          <button type="button" class="btn btn-secondary me-3">查看更多</button>
          <button type="button" class="btn btn-orange">加入購物車</button>
        </div>
      </div>
    </div>
  </swiper-slide>
  </swiper>
</template>
<script>
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';
import '../assets/helpers/swiper.css';
import { reactive } from 'vue';

SwiperCore.use([Pagination, Autoplay]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
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
    function onSwiper(swiper) {
      console.log(swiper);
    }
    function onSlideChange() {
      console.log('slide change');
    }
    return {
      onSwiper,
      onSlideChange,
      swiperBreakpoints,
    };
  },
};
</script>
<style lang="">
</style>
