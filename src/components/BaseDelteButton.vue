<script>
export default {
  props: {
    btnSmall: {
      Boolean,
      default: false,
    },
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>

<template>
  <div class="d-flex align-items-center">
    <div class="overflow-hidden">
      <div
        class="position-relative btn-container "
      >
        <button
          type="button"
          class="btn btn-outline-danger"
          :class="{ 'btn-sm': props.btnSmall }"
        >
          刪除
          <i class="bi bi-trash-fill"></i>
        </button>
        <button
          type="button"
          class="position-absolute btn btn-danger"
          :class="{ 'btn-sm': props.btnSmall }"
        >
          確定
          <i class="bi bi-question-circle-fill"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-container {
  transform: translateX(0);
  transition: all 0.5s;
}
.btn-container:hover {
  transform: translateX(-100%);
}
</style>
