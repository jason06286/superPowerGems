<script>
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';

export default {
  components: {
  },
  setup() {
    const user = reactive({});
    const isLoading = ref(true);
    const getProduct = (page = 1) => {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      axios
        .get(url)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    onMounted(() => {
      console.log(axios);
      getProduct();
    });

    return {
      user,
      isLoading,
    };
  },
};
</script>
<template>
  <div class="bg-black">
    <img src="../assets/svg.svg" alt="" class="" />
  </div>
  <img src="../assets/favicon/favicon-32x32.png" alt="" />
  <div class="flex flex-wrap">
    <div class="block">
      <img src="../assets/img/rock1.png" alt="" />
    </div>
    <div class="block">
      <img src="../assets/img/rock2.png" alt="" />
    </div>
    <div class="block">
      <img src="../assets/img/rock3.png" alt="" />
    </div>
    <div class="block">
      <img src="../assets/img/rock4.png" alt="" />
    </div>
    <div class="block">
      <img src="../assets/img/rock5.png" alt="" />
    </div>
    <div class="block">
      <img src="../assets/img/rock6.png" alt="" />
    </div>
    <div class="block">
      <img src="../assets/img/rock7.png" alt="" />
    </div>
    <div class="block">
      <img src="../assets/img/rock8.png" alt="" />
    </div>
    <div class="block">
      <img src="../assets/img/rock9.png" alt="" />
    </div>
    <div class="block">
      <img src="../assets/img/rock10.png" alt="" />
    </div>
    <div class="block">
      <img src="../assets/img/rock11.png" alt="" />
    </div>
  </div>
  <Form v-slot="{ errors }">
    <div class="mb-3 form-group">
      <label for="name" class="mb-2">Name *</label>
      <Field
        id="name"
        name="name"
        type="text"
        class="form-control"
        :class="{ 'bg-red-500': errors['name'] }"
        placeholder="請輸入 name"
        rules="required"
        v-model="user.name"
      ></Field>
      <ErrorMessage name="name" class="invalid-feedback"></ErrorMessage>
    </div>
    <div class="mb-3 form-group">
      <label for="email" class="mb-2">Email *</label>
      <Field
        id="email"
        name="email"
        type="email"
        class="form-control"
        :class="{ 'bg-red-500': errors['email'] }"
        placeholder="請輸入 Email"
        rules="email|required"
        v-model="user.email"
      ></Field>
      <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
    </div>
    <div class="mb-3 form-group">
      <label for="tel" class="mb-2">Phone *</label>
      <Field
        id="tel"
        name="tel"
        type="tel"
        class="form-control"
        :class="{ 'bg-red-500': errors['tel'] }"
        placeholder="請輸入 tel"
        v-model="user.tel"
      ></Field>
      <ErrorMessage name="tel" class="invalid-feedback"></ErrorMessage>
    </div>
    <div class="mb-3 form-group">
      <label for="address" class="mb-2">Address *</label>
      <Field
        id="address"
        name="address"
        type="text"
        class="form-control"
        :class="{ 'bg-red-500': errors['address'] }"
        placeholder="請輸入 address"
        rules="required"
        v-model="user.address"
      ></Field>
      <ErrorMessage name="address" class="invalid-feedback"></ErrorMessage>
    </div>
    <button class="btn btn-primary" type="submit">
      <span
        class="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      Submit
    </button>
  </Form>
</template>
