<template lang="">
<div
    class="modal fade"
    ref="cartModal"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
   <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">購物車</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <table class="table text-center">
            <thead>
              <tr class="table-dark">
                <th scope="col"></th>
                <th scope="col">商品名稱</th>
                <th scope="col">數量</th>
                <th scope="col">小計</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in carts.arr.carts" :key="item.id">
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="delProduct(item)"
                  >
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">{{ item.qty }}</td>
                <td class="align-middle">NT $ {{ currency(item.total) }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">總金額</td>
                <td class="text-center">
                  NT $ {{ currency(carts.arr.final_total) }}
                </td>
              </tr>
            </tfoot>
          </table>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="請輸入優惠券代碼"
              aria-label="請輸入優惠券代碼"
              aria-describedby="button-addon2"
              v-model="coupon"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              :class="{ disabled: coupon === '' }"
              @click="useCoupon"
            >
              套用優惠券
            </button>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            在逛逛
          </button>
          <button type="button" class="btn btn-orange" @click="modal.hide()">
            結帳去
          </button>
        </div>
      </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="">
</style>
