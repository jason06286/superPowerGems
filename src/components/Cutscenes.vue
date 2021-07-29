<script>
import {
  onMounted, onUnmounted, ref,
} from 'vue';
import emitter from '@/methods/emitter';

export default {
  props: {
    isShow: {
      Boolean,
      default: false,
    },
  },
  setup() {
    let time = null;
    const isShowCut = ref(false);

    function showCut() {
      isShowCut.value = true;
      time = setTimeout(() => {
        isShowCut.value = false;
      }, 2000);
    }

    onMounted(() => {
      emitter.on('showCut', () => {
        showCut();
      });
    });
    onUnmounted(() => {
      clearTimeout(time);
    });
    return {
      isShowCut,
    };
  },
};
</script>

<template>
  <div class="cutscenes" v-show="isShowCut">
    <div class="cutscenes-item">
      <div class="cutscenes-content"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cutscenes {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 666;
  background: transparent;
}
.cutscenes-item {
  position: absolute;
  top: 0;
  width: 300%;
  height: 100vh;
}
.cutscenes-content {
  position: absolute;
  top: 0;
  width: 500vw;
  height: 100vh;
  background: #dd5c33;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  transform: translate(100%);
  animation: toleft 1.5s ease-in-out;
}
@keyframes toleft {
  0% {
    transform: translate(100%);
  }
  100% {
    transform: translate(-100%);
  }
}
</style>
