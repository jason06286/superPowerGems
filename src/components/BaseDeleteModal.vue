<script>
import Modal from 'bootstrap/js/dist/modal';
import { onMounted, ref } from 'vue';

export default {
  props: {
    deleteItem: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const delModal = ref(null);
    let modal = [];

    function showDelModal() {
      modal.show();
    }
    function hideDelModal() {
      modal.hide();
    }

    onMounted(() => {
      modal = new Modal(delModal.value);
    });
    return {
      props,
      emit,
      delModal,
      showDelModal,
      hideDelModal,
    };
  },
};
</script>

<template lang="">
  <div
    id="delModal"
    ref="delModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="border-0 modal-content">
        <div class="text-white modal-header bg-danger">
          <h5 id="delModalLabel" class="modal-title">
            <span >刪除<slot></slot></span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ props.deleteItem.title }}</strong>
          商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="emit('deleteItem', props.deleteItem.id)"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
