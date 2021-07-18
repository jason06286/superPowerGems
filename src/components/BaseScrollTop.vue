<script>
import { onMounted, ref } from 'vue';

export default {
  setup() {
    const showScrollTop = ref(false);

    function scrollTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }

    onMounted(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > window.screenY) {
          showScrollTop.value = true;
        } else {
          showScrollTop.value = false;
        }
      });
    });

    return {
      showScrollTop,
      scrollTop,
    };
  },
};
</script>

<template>
  <button
    type="button"
    class="scroll-btn"
    :class="{ active: showScrollTop }"
    @click="scrollTop"
  >
    ↑
  </button>
</template>

<style lang="scss" scoped>
.scroll-btn {
  width: 50px;
  height: 50px;
  margin-bottom: 0.5rem;
  border: none;
  outline: none;
  display: block;
  border-radius: 50%;
  background: #58422f;
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  z-index: 999;
  opacity: 0;
}
.scroll-btn:hover {
  background: #b2734d;
}
.active {
  opacity: 1;
}
</style>
