<script>
import BaseDelteButton from '@/components/BaseDelteButton.vue';
import BasePagination from '@/components/BasePagination.vue';
import BaseProductModal from '@/components/BaseProductModal.vue';
import BaseDeleteModal from '@/components/BaseDeleteModal.vue';
import BaseLoading from '@/components/BaseLoading.vue';
import axios from 'axios';
import useVueSweetAlert2 from '@/methods/useSwal';
import { currency } from '@/methods/filter';
import { onMounted, reactive, ref } from 'vue';

export default {
  components: {
    BaseDelteButton,
    BasePagination,
    BaseProductModal,
    BaseDeleteModal,
    BaseLoading,
  },
  setup() {
    const products = reactive({ arr: [] });
    const pagination = reactive({ obj: {} });
    const productDeleteModal = ref(null);

    const $swal = useVueSweetAlert2();

    function swalSuccess(title, text) {
      $swal.fire({
        icon: 'success',
        title,
        text,
      });
    }
    function swalError(title, text) {
      $swal.fire({
        icon: 'error',
        title,
        text,
      });
    }
    function productDetail() {
      const isLoading = ref(false);

      const getProducts = (page = 1) => {
        isLoading.value = true;
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
        axios
          .get(url)
          .then((res) => {
            if (res.data.success) {
              products.arr = res.data.products;
              pagination.obj = res.data.pagination;
              isLoading.value = false;
            } else {
              console.error = () => {
                throw new Error(res.data.message);
              };
            }
          })
          .catch((err) => {
            console.error = () => {
              throw new Error(err);
            };
          });
      };
      const delProduct = (id) => {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${id}`;
        axios
          .delete(url)
          .then((res) => {
            if (res.data.success) {
              getProducts();
              swalSuccess('刪除', '刪除商品成功!');
            } else {
              console.error = () => {
                throw new Error(res.data.message);
              };
            }
          })
          .catch((err) => {
            console.error = () => {
              throw new Error(err);
            };
          });
        productDeleteModal.value.hideDelModal();
      };

      onMounted(() => {
        getProducts();
      });

      return {
        isLoading,
        getProducts,
        delProduct,
      };
    }
    function modalDetail() {
      const productModal = ref(null);
      const newProduct = ref(false);
      const tempProduct = reactive({ obj: { imagesUrl: [] } });
      const { getProducts } = productDetail();

      const openProductModal = (item, isNew) => {
        tempProduct.obj = JSON.parse(JSON.stringify(item));
        newProduct.value = isNew;
        productModal.value.showProductModal();
      };
      const openDeleteModal = (item) => {
        tempProduct.obj = JSON.parse(JSON.stringify(item));
        productDeleteModal.value.showDelModal();
      };
      const productStatus = (item) => {
        tempProduct.obj = item;
        let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
        let method = 'post';
        if (!newProduct.value) {
          url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
          method = 'put';
        }
        axios[method](url, { data: tempProduct.obj })
          .then((res) => {
            if (res.data.success) {
              getProducts();
              swalSuccess(
                newProduct.value ? '新增' : '修改',
                newProduct.value ? '新增商品成功!' : '修改商品成功!',
              );
            } else {
              swalError('Oops...', res.data.message);
            }
            productModal.value.hideProductModal();
          })
          .catch((err) => {
            console.error(err);
          });
      };

      return {
        productModal,
        newProduct,
        tempProduct,
        openProductModal,
        openDeleteModal,
        productStatus,
      };
    }

    return {
      products,
      pagination,
      productDeleteModal,
      currency,
      ...productDetail(),
      ...modalDetail(),
    };
  },
};
</script>

<template>
  <BaseLoading :isLoading="isLoading" />
  <div class="my-2">
    <h2 class="pb-3 mb-3 fw-bold border-bottom border-3 border-orange">
      產品列表
    </h2>
    <div class="text-end">
      <button
        class="text-white btn btn-orange"
        type="button"
        @click="openProductModal({}, true)"
      >
        新增商品
      </button>
    </div>
    <div class="table-responsive-lg">
      <table class="table mt-4 table-hover">
        <thead>
          <tr>
            <th width="120">分類</th>
            <th>產品名稱</th>
            <th width="100">原價</th>
            <th width="100">售價</th>
            <th width="100">是否啟用</th>
            <th width="120">編輯</th>
            <th width="120">刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products.arr" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-center">{{ currency(item.origin_price) }}</td>
            <td class="text-center">{{ currency(item.price) }}</td>
            <td class="text-center">
              <span class="text-success" v-if="item.is_enabled">啟用</span>
              <span v-else class="text-secondary">未啟用</span>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-orange btn-sm"
                @click="openProductModal(item, false)"
              >
                編輯
                <i class="bi bi-pen-fill"></i>
              </button>
            </td>
            <td>
              <BaseDelteButton
                :btnSmall="true"
                @click="openDeleteModal(item)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="mt-5 d-flex justify-content-center">
    <BasePagination :pagination="pagination" @get-nowpage="getProducts" />
  </div>
  <BaseProductModal
    ref="productModal"
    :product="tempProduct"
    :newProduct="newProduct"
    @product-status="productStatus"
  />
  <BaseDeleteModal
    ref="productDeleteModal"
    :deleteItem="tempProduct.obj"
    @delete-item="delProduct"
  >
    產品
  </BaseDeleteModal>
</template>

<style lang="scss" scoped>
</style>
