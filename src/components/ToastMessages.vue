<script>
import Toast from '@/components/Toast.vue';
import emitter from '@/methods/emitter';
import { onMounted, reactive } from 'vue';

export default {
  components: {
    Toast,
  },
  setup() {
    const messages = reactive({ arr: [] });

    onMounted(() => {
      emitter.on('push-messages', (message) => {
        const { style = 'success', title, content } = message;
        messages.arr.push({ style, title, content });
      });
    });

    return {
      messages,
    };
  },
};
</script>

<template>
  <div class="toast-container toast-position">
    <Toast v-for="(msg, key) in messages.arr" :key="key" :msg="msg" />
  </div>
</template>

<style lang="scss" scoped>
.toast-position {
  position: fixed;
  top: 5%;
  right: 1%;
  z-index: 9999999;
}
</style>
