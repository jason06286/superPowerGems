<script>
import Modal from 'bootstrap/js/dist/modal';
import { formatDate } from '@/methods/filter';
import {
  onMounted, reactive, ref, watch,
} from 'vue';

export default {
  props: {
    coupon: {
      type: Object,
      default: () => ({}),
    },
    newCoupon: {
      type: Boolean,
      default: () => true,
    },
  },
  emits: ['couponStatus'],
  setup(props, { emit }) {
    function modalDetail() {
      const couponModal = ref(null);
      let modal = null;

      const showCouponModal = () => {
        modal.show();
      };
      const hideCouponModal = () => {
        modal.hide();
      };

      onMounted(() => {
        modal = new Modal(couponModal.value);
      });

      return {
        couponModal,
        showCouponModal,
        hideCouponModal,
      };
    }
    const tempCoupon = reactive({ obj: {} });
    const today = formatDate(Date.now() / 1000);

    watch(
      () => props.coupon.obj,
      () => {
        tempCoupon.obj = {
          ...props.coupon.obj,
          due_date: formatDate(props.coupon.obj.due_date),
        };
      },
    );

    return {
      tempCoupon,
      today,
      emit,
      props,
      ...modalDetail(),
    };
  },
};
</script>

<template>
  <div
    id="couponModal"
    ref="couponModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="couponModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="border-0 modal-content">
        <div class="text-white bg-orange-600 modal-header">
          <h5 id="couponModalLabel" class="modal-title">
            <span v-if="newCoupon">新增優惠券</span>
            <span v-else>修改優惠券</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-12">
              <div class="form-group">
                <label for="title"
                  >標題 <span class="text-danger">*</span></label
                >
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入優惠券名稱"
                  v-model="tempCoupon.obj.title"
                />
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="percent"
                    >優惠<span class="text-danger">*</span></label
                  >
                  <input
                    id="percent "
                    type="number"
                    min="0"
                    max="100"
                    class="form-control"
                    placeholder="請輸入優惠(0-100)"
                    v-model.number="tempCoupon.obj.percent"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="due_date"
                    >到期時間<span class="text-danger">*</span></label
                  >
                  <input
                    id="due_date"
                    type="date"
                    class="form-control"
                    :min="today"
                    placeholder="請選擇時間"
                    v-model="tempCoupon.obj.due_date"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group col-12">
                  <label for="code"
                    >折扣碼<span class="text-danger">*</span></label
                  >
                  <input
                    id="code"
                    type="text"
                    class="form-control"
                    placeholder="請輸入折扣碼"
                    v-model="tempCoupon.obj.code"
                  />
                </div>
              </div>
              <hr />
              <div class="form-group">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model.number="tempCoupon.obj.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>
          </div>
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
            class="btn btn-orange"
            @click="emit('couponStatus', tempCoupon.obj)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-orange-600 {
  background-color: #ca6510;
}
</style>
