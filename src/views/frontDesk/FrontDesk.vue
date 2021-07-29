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
  <Router-View />
  <BaseFooter />
  <BaseCartModal />
</template>

<style lang="scss" scoped>
</style>
