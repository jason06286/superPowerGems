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
  emits: ['deleteItem'],
  setup(props, { emit }) {
    function modalDetail() {
      const delModal = ref(null);
      let modal = null;

      const showDelModal = () => {
        modal.show();
      };
      const hideDelModal = () => {
        modal.hide();
      };

      onMounted(() => {
        modal = new Modal(delModal.value);
      });

      return {
        delModal,
        showDelModal,
        hideDelModal,
      };
    }

    return {
      props,
      emit,
      ...modalDetail(),
    };
  },
};
</script>

<template>
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
        <div class="text-title modal-header bg-darkred">
          <h5 id="delModalLabel" class="modal-title">
            <span>刪除<slot></slot></span>
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body bg-dark">
          是否刪除
          <strong class="text-darkred">{{ props.deleteItem.title }}</strong>
          商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer bg-dark">
          <button
            type="button"
            class="btn btn-outline-title"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-darkred"
            @click="emit('deleteItem', props.deleteItem.id)"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
