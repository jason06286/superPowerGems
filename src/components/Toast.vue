<script>
// kit
import Toast from 'bootstrap/js/dist/toast';
// vue
import { onMounted, ref } from 'vue';

export default {
  props: {
    msg: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const toastEl = ref(null);
    let toast = [];

    onMounted(() => {
      toast = new Toast(toastEl.value, {
        delay: 6000,
      });
      toast.show();
    });

    return {
      toastEl,
      toast,
      props,
    };
  },
};
</script>

<template>
  <div
    class="toast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    ref="toastEl"
  >
    <div class="toast-header">
      <span
        :class="`bg-${props.msg.style}`"
        class="p-2 rounded me-2 d-inline-block"
      ></span>
      <strong class="me-auto">{{ props.msg.title }}</strong>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
    <div class="toast-body" v-if="props.msg.content">
      {{ props.msg.content }}
    </div>
  </div>
</template>

<style lang="">
</style>
