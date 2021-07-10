<script>
import BaseNavbar from '@/components/BaseNavbar.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import BaseCartModal from '@/components/BaseCartModal.vue';

export default {
  components: {
    BaseNavbar,
    BaseFooter,
    BaseCartModal,
  },
};
</script>
<template >
  <BaseNavbar />
  <router-view></router-view>
  <BaseFooter />
  <BaseCartModal />
</template>
<style lang="">
</style>
