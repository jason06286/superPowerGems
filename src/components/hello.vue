<template lang="">
 <div class="my-2">
    <h2 class="fw-bold border-bottom border-3 border-orange pb-3 mb-3">
      訂單列表
    </h2>
    <div class="text-end">
      <button class="btn btn-danger" type="button" @click="delAllOrder">
        刪除全部訂單
      </button>
    </div>
    <div class="table-responsive-lg">
      <table class="table mt-4 table-hover">
        <thead>
          <tr>
            <th scope="col">訂單時間</th>
            <th scope="col">訂單編號</th>
            <th scope="col">金額</th>
            <th scope="col">是否付款</th>
            <th scope="col">編輯</th>
            <th scope="col">刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orders.arr" :key="item.id">
            <td>{{ date(item.create_at)  }}</td>
            <td>{{ item.id }}</td>
            <td>{{currency(item.total) }}</td>
            <td>
              <div class="form-check form-switch" v-if="item.is_paid">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  checked
                />已付款
              </div>
              <div class="form-check form-switch" v-else>
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                />未付款
              </div>
            </td>
            <td>
              <button type="button" class="btn btn-orange btn-sm">
                編輯
                <i class="bi bi-pen-fill"></i>
              </button>
            </td>
            <td>
              <BaseDelteButton :btnSmall="true" @click="delOrder(item.id)" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    <div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion-item"  v-for="(item) in orders.arr" :key="item.id">
      <h2 class="accordion-header" :id="`${item.id}6`">
        <button
          class="accordion-button collapsed "
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#${item.id}`"
          aria-expanded="false"
          :aria-controls="item.id"
          @click="tempOrder.obj=JSON.parse(JSON.stringify(item))"
        >
          訂單編號:{{item.id}}
        </button>
      </h2>
      <div
       :id="`${item.id}`"
        class="accordion-collapse collapse"
        :aria-labelledby="`${item.id}6`"
      >
        <div class="accordion-body">
          <h2>{{tempOrder.obj.id}}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="">

</style>
