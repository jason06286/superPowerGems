<script>
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';

export default {
  setup() {
    const cutscenes = ref(null);
    onMounted(() => {
      gsap.to(cutscenes.value, {
        duration: 0.8,
        left: '-100%',
      });
    });

    return {
      cutscenes,
    };
  },
};
</script>

<template>
  <section style="overflow: hidden">
    <div class="cutscenes" ref="cutscenes"></div>
  </section>
</template>

<style lang="scss" scoped>
.cutscenes {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: #dd5c33;
}
.cuscenes-item1 {
  background: #dd5c33;
}
.cuscenes-item2 {
  background: #dd5c33;
  left: 33.3%;
}
.cuscenes-item3 {
  background: #dd5c33;
  left: 66.6%;
}
</style>
