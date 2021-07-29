<script>
import axios from 'axios';
import Modal from 'bootstrap/js/dist/modal';
import {
  onMounted, reactive, ref, watch,
} from 'vue';

export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
    newProduct: {
      type: Boolean,
      default: () => true,
    },
  },
  emits: ['productStatus'],
  setup(props, { emit }) {
    function modalDetail() {
      const productModal = ref(null);
      let modal = null;

      const showProductModal = () => {
        modal.show();
      };
      const hideProductModal = () => {
        modal.hide();
      };

      onMounted(() => {
        modal = new Modal(productModal.value);
      });

      return {
        productModal,
        showProductModal,
        hideProductModal,
      };
    }
    function imageDetail() {
      const fileInput = ref(null);
      const tempProduct = reactive({ obj: {} });

      watch(
        () => props.product.obj,
        () => {
          tempProduct.obj = props.product.obj;
        },
      );

      const newPicture = () => {
        tempProduct.obj.imagesUrl = [];
        tempProduct.obj.imagesUrl.push(tempProduct.obj.imageUrl);
        tempProduct.obj.imageUrl = '';
      };
      const addPicture = () => {
        tempProduct.obj.imagesUrl.push(tempProduct.obj.imageUrl);
        tempProduct.obj.imageUrl = '';
      };
      const delPicture = () => {
        tempProduct.obj.imagesUrl.pop();
      };
      const uploadFile = () => {
        const uploaderFile = fileInput.value.files[0];
        const formData = new FormData();
        formData.append('file-to-upload', uploaderFile);
        const url = `   ${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
        axios
          .post(url, formData)
          .then((res) => {
            if (res.data.success) {
              tempProduct.obj.imageUrl = res.data.imageUrl;
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

      return {
        tempProduct,
        fileInput,
        newPicture,
        addPicture,
        delPicture,
        uploadFile,
      };
    }

    return {
      emit,
      ...modalDetail(),
      ...imageDetail(),
    };
  },
};
</script>

<template>
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="border-0 modal-content">
        <div class="text-white bg-orange-600 modal-header">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="newProduct">新增產品</span>
            <span v-else>修改產品</span>
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
            <div class="col-sm-4">
              <div class="mb-1">
                <div class="my-2 form-group">
                  <label for="imageUrl">輸入圖片網址</label>
                  <input
                    type="text"
                    id="imageUrl"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.obj.imageUrl"
                  />
                </div>
                <div class="my-2 form-group">
                  <label for="fileInput">或上傳圖片</label>
                  <input
                    type="file"
                    id="fileInput"
                    class="form-control"
                    ref="fileInput"
                    @change="uploadFile"
                  />
                </div>
                <img
                  class="img-fluid"
                  :src="tempProduct.obj.imageUrl"
                  alt="上傳的圖片"
                />
              </div>
              <div v-if="Array.isArray(tempProduct.obj.imagesUrl)">
                <button
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="addPicture"
                >
                  新增圖片
                </button>
              </div>
              <div v-else>
                <button
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="newPicture"
                >
                  新增圖片
                </button>
              </div>
              <div>
                <button
                  class="btn btn-outline-danger btn-sm d-block w-100"
                  @click="delPicture"
                >
                  刪除圖片
                </button>
              </div>
              <div v-if="Array.isArray(tempProduct.obj.imagesUrl)">
                <img
                  class="my-2 img-fluid"
                  v-for="item in tempProduct.obj.imagesUrl"
                  :key="item"
                  :src="item"
                  alt="商品的圖片"
                />
              </div>
            </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title"
                  >標題<span class="text-danger">*</span></label
                >
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="tempProduct.obj.title"
                />
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="category"
                    >分類<span class="text-danger">*</span></label
                  >
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="tempProduct.obj.category"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="unit"
                    >單位<span class="text-danger">*</span></label
                  >
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="tempProduct.obj.unit"
                  />
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="origin_price"
                    >原價<span class="text-danger">*</span></label
                  >
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model.number="tempProduct.obj.origin_price"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price"
                    >售價<span class="text-danger">*</span></label
                  >
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model.number="tempProduct.obj.price"
                  />
                </div>
              </div>
              <hr />

              <div class="form-group">
                <label for="description">產品描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  v-model="tempProduct.obj.description"
                >
                </textarea>
              </div>
              <div class="form-group">
                <label for="content">說明內容</label>
                <textarea
                  id="content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model="tempProduct.obj.content"
                >
                </textarea>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model.number="tempProduct.obj.is_enabled"
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
            @click="emit('productStatus', tempProduct.obj)"
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
