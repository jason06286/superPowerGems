<script>
import BaseNavbar from '@/components/BaseNavbar.vue';
import BaseFooter from '@/components/BaseFooter.vue';

export default {
  components: {
    BaseNavbar,
    BaseFooter,
  },
};
</script>
<template >
  <div>
    <BaseNavbar />
    <div class="py-5">
      <router-view></router-view>
    </div>
    <BaseFooter />
  </div>
</template>
<style lang="">
</style>
