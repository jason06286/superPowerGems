<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';

import SwiperCore, { Pagination, Autoplay } from 'swiper/core';

SwiperCore.use([Pagination, Autoplay]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<template>
  <swiper :pagination="true" :autoplay="true" style="height: 400px">
    <swiper-slide class="bg-slide1">命運掌握在自己手裡</swiper-slide>
    <swiper-slide class="bg-slide2">你是否幻想過有超能力?</swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  @media (min-width: 576px) {
    font-size: 3rem;
  }
}
.bg-slide1 {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1626525384383.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=N1rUFn07i3d3R3UaKsSy3ThoMJOKWzWwgtokpj9Yg36cx%2BcpAYxVep3NEcmITPnuZ8%2Bz1mZDHFMGkooaSXL1QAU4YNZT5JlyaG%2Bb%2FRlIOUB6GWNHAvHarIuvKG2uPgqU4K8K2f3EhXvmLi8R4NMlh0O5%2FTkOyizOpG8AKfREvWAJFvU%2F%2ByfHTz%2BELafg%2Bj9vdXoh7q56y7nz%2BSoYJHWTmD3vmGdO2uyMfwLkOPsAWgoJeiUbheAIWTt7RkUzDlAmREGmLA7Fi80ygEjDQoFiQ2EOh20IiFV3APSZ4m3FnbdbRGXrPKMGMuVv6O8hX6tc%2BBr%2FTjm6FcoAzEMwQspCWA%3D%3D');
  background-size: cover;
  background-position: center center;
}
.bg-slide2 {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1626524928876.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hfs6MbGoWZr3xndSE6Ykv36AamS%2BDO9fZIm1y9AeYKsb4lypG7J%2Fym2R38C0GVBDJMav167kLgfAPYv%2FDuVZwSuMYFUcMc61t6jbcghfG4vZ%2FKxxgXVfD8CW%2FcfuwGiB9oKb51VTxzaf8USJXDrOVbQAOebiARwcDqFukP7wmjYv%2FkhqVBrzRn6KBfmV0tuSqx1wpdua4I2FK%2Br9Rud9BicKWu%2FuaoWfGY3mb6MRClnT3hQL2d86qa5mMcZMHXNGrQFiEErgGc6HZKgz1yuyQ6J00MeUoZ7yRAPbhi5u3MIzOy1SUUi6zrSxjIdimgWcbJa0l6FPVL0m8N6M4ELuUA%3D%3D');
  background-size: cover;
  background-position: center center;
}
</style>
