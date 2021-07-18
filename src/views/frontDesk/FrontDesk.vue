<script>
import BaseNavbar from '@/components/BaseNavbar.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import BaseCartModal from '@/components/BaseCartModal.vue';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  components: {
    BaseNavbar,
    BaseFooter,
    BaseCartModal,
    ToastMessages,
  },
};
</script>

<template>
  <ToastMessages />
  <BaseNavbar />
  <div class="star">
    <router-view></router-view>
  </div>
  <BaseFooter />
  <BaseCartModal />
</template>

<style lang="scss" scoped>
.star {
  background: black
    url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1625924061162.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=QUQ3j12Xf773TV%2FlRxJldJjI%2BlIuBnj1XkpciscKx7no2yRTqN3eJztesYPU3FIf5Nm038Zsy%2B0emcUdw%2BDQHsuiEDYOpSyffzlSuxnLglBYp5sSNegxXe5Mec1PM%2FUWANSfwFT1nIh%2FjeIEfbkVZiJPlIH5Jdp%2F3oIWtFE%2FkcMFysJP%2FDaCnfOpnufSZbKfRQL66ioIYWqjE0NSMfzOSxqjR7T3JMERfsl9BMWtnPyj84IaFTkT%2BMDgZbsYMVRTZn9TjXJ0V%2F0oZQkU3w4jy4ecytYO1%2BYrFiX8MM2akXEYYV06c85RD12ZoFkRt51oWldugY6bXwy0yO8BYqKu6A%3D%3D')
    repeat;
}
</style>
