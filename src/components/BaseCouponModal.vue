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
  setup(props, { emit }) {
    const tempCoupon = reactive({ obj: {} });
    const couponModal = ref(null);
    const today = formatDate(Date.now() / 1000);
    let modal = [];

    watch(
      () => props.coupon.obj,
      () => {
        tempCoupon.obj = {
          ...props.coupon.obj,
          due_date: formatDate(props.coupon.obj.due_date),
        };
      },
    );

    function showCouponModal() {
      modal.show();
    }
    function hideCouponModal() {
      modal.hide();
    }

    onMounted(() => {
      modal = new Modal(couponModal.value);
      console.log(couponModal);
    });

    return {
      // variable
      couponModal,
      tempCoupon,
      today,
      emit,
      props,
      //  methods
      showCouponModal,
      hideCouponModal,
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
    <div class="modal-dialog ">
      <div class="modal-content border-0">
        <div class="modal-header bg-orange-600 text-white">
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
                <label for="title">標題</label>
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
                  <label for="percent ">優惠</label>
                  <input
                    id="percent "
                    type="number"
                    max="100"
                    class="form-control"
                    placeholder="請輸入優惠(0-100)"
                    v-model.number="tempCoupon.obj.percent"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="due_date">到期時間</label>
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
                  <label for="code">折扣碼</label>
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
