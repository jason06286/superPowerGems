<script>
import BaseDelteButton from '@/components/BaseDelteButton.vue';
import BasePagination from '@/components/BasePagination.vue';
import BaseProductModal from '@/components/BaseProductModal.vue';
import BaseDeleteModal from '@/components/BaseDeleteModal.vue';
import BaseLoading from '@/components/BaseLoading.vue';

import {
  apiGetProducts,
  apiDelProduct,
  apiCreateProduct,
  apiEditProduct,
} from '@/api/api';
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
        background: '#262833',
        confirmButtonColor: '#98142b',
      });
    }
    function swalError(title, text) {
      $swal.fire({
        icon: 'error',
        title,
        text,
        background: '#262833',
        confirmButtonColor: '#98142b',
      });
    }

    function productDetail() {
      const isLoading = ref(false);

      async function getProducts(page = 1) {
        isLoading.value = true;
        try {
          const res = await apiGetProducts(page);
          if (res.data.success) {
            products.arr = res.data.products;
            pagination.obj = res.data.pagination;
            isLoading.value = false;
          } else {
            swalError('Oops...', res.data.message);
          }
        } catch (error) {
          swalError('Oops...', '取得商品資料錯誤');
        }
      }
      async function delProduct(id) {
        try {
          const res = await apiDelProduct(id);
          if (res.data.success) {
            getProducts();
            swalSuccess('刪除', '刪除商品成功!');
          } else {
            swalError('Oops...', res.data.message);
          }
        } catch (error) {
          swalError('Oops...', '刪除商品錯誤');
        }
        productDeleteModal.value.hideDelModal();
      }

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
      async function productStatus(item) {
        tempProduct.obj = item;
        let res;
        try {
          if (!newProduct.value) {
            res = await apiEditProduct(item.id, { data: tempProduct.obj });
          } else {
            res = await apiCreateProduct({ data: tempProduct.obj });
          }
          if (res.data.success) {
            getProducts();
            swalSuccess(
              newProduct.value ? '新增' : '修改',
              newProduct.value ? '新增商品成功!' : '修改商品成功!',
            );
          } else {
            swalError('Oops...', res.data.message);
          }
        } catch (error) {
          swalError('Oops...', '新增修改錯誤');
        }
        productModal.value.hideProductModal();
      }

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
    <h4 class="pb-3 mb-3 fw-bold border-bottom border-3 border-darkred">
      產品列表
    </h4>
    <div class="text-end">
      <button
        class="btn btn-darkred"
        type="button"
        @click="openProductModal({}, true)"
      >
        新增商品
      </button>
    </div>
    <div class="table-responsive-lg">
      <table class="table mt-4 table-dark table-hover">
        <thead class="text-title">
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
        <tbody class="text-content">
          <tr v-for="item in products.arr" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-center">{{ currency(item.origin_price) }}</td>
            <td class="text-center">{{ currency(item.price) }}</td>
            <td class="text-center">
              <span class="text-success" v-if="item.is_enabled">啟用</span>
              <span v-else class="text-content">未啟用</span>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-outline-title btn-sm"
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
