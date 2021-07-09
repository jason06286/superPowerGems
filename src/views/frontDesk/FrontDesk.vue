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
  <div>
    <BaseNavbar />
    <router-view></router-view>
    <BaseFooter />
    <BaseCartModal />
  </div>
</template>
<style lang="">
</style>
