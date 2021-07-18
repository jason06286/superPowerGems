<script>
import AOS from 'aos';
import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      AOS.init();
    });

    return {};
  },
};
</script>

<template>
  <router-view />
</template>

<style lang="scss">
@import '~sweetalert2/dist/sweetalert2.min.css';
@import './assets/scss/all';
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
body {
  font-family: 'Noto Sans TC', sans-serif;
}
</style>
