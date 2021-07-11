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

<template >
  <ToastMessages />
  <BaseNavbar />
  <router-view></router-view>
  <BaseFooter />
  <BaseCartModal />
</template>
<style lang="">
</style>
