<script>
// components
import BaseNavbar from '@/components/BaseNavbar.vue';
// kit
import axios from 'axios';
import useVueSweetAlert2 from '@/methods/useSwal';
// vue
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    BaseNavbar,
  },
  setup() {
    const gridBackground = ref(null);
    const user = reactive({});
    const router = useRouter();
    const $swal = useVueSweetAlert2();

    function swalError(title, text) {
      $swal.fire({
        icon: 'error',
        title,
        text,
      });
    }
    function getRandomInt(min, max) {
      const minNum = Math.ceil(min);
      const maxNum = Math.floor(max);
      return Math.floor(Math.random() * (maxNum - minNum + 1)) + min;
    }
    function renderBackground() {
      const gridItems = gridBackground.value.childNodes;
      gridItems.forEach((item, index) => {
        const delay = getRandomInt(0, 5);

        const duration = getRandomInt(3, 6);

        gridItems[index].style.animationDelay = `${delay}s`;
        gridItems[index].style.animationDuration = `${duration}s`;
      });
    }
    function signIn() {
      const url = `${process.env.VUE_APP_API}admin/signin`;
      axios
        .post(url, user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
            router.push('/dashboard/products');
          } else {
            swalError('Oops...', res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    onMounted(() => {
      renderBackground();
    });
    return {
      // variable
      gridBackground,
      user,
      // methods
      signIn,
    };
  },
};
</script>

<template >
  <BaseNavbar />
  <div
    class="grid overflow-hidden  position-relative d-flex justify-content-center align-items-center"
  >
    <div class="position-absolute grid-container" ref="gridBackground">
      <div class="col-span-2 grid-item animate-pulse"></div>
      <div class="col-span-5 grid-item animate-pulse"></div>
      <div class="col-span-1 grid-item animate-pulse"></div>
      <div class="col-span-4 grid-item animate-pulse"></div>

      <div class="col-span-5 grid-item animate-pulse"></div>
      <div class="col-span-3 grid-item animate-pulse"></div>
      <div class="col-span-2 grid-item animate-pulse"></div>
      <div class="col-span-2 grid-item animate-pulse"></div>

      <div class="col-span-4 grid-item animate-pulse"></div>
      <div class="col-span-7 grid-item animate-pulse"></div>
      <div class="col-span-1 grid-item animate-pulse"></div>

      <div class="col-span-2 grid-item animate-pulse"></div>
      <div class="col-span-4 grid-item animate-pulse"></div>
      <div class="col-span-6 grid-item animate-pulse"></div>

      <div class="col-span-5 grid-item animate-pulse"></div>
      <div class="col-span-5 grid-item animate-pulse"></div>
      <div class="col-span-2 grid-item animate-pulse"></div>

      <div class="col-span-4 grid-item animate-pulse"></div>
      <div class="col-span-7 grid-item animate-pulse"></div>
      <div class="col-span-1 grid-item animate-pulse"></div>

      <div class="col-span-4 grid-item animate-pulse"></div>
      <div class="col-span-7 grid-item animate-pulse"></div>
      <div class="col-span-1 grid-item animate-pulse"></div>
    </div>
    <div class="mx-3 position-relative login">
      <h2 class="title font-Tourney">Login</h2>
      <Form v-slot="{ errors }" @submit="signIn">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 信箱"
            rules="email|required"
            v-model="user.username"
          ></Field>

          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-4">
          <label for="password" class="form-label">Password</label>
          <Field
            id="password"
            name="password"
            type="password"
            class="form-control"
            :class="{ 'is-invalid': errors['password'] }"
            placeholder="請輸入 密碼"
            rules="required"
            v-model="user.password"
          ></Field>

          <ErrorMessage name="password" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="d-flex justify-content-end">
          <button type="submit" class="text-white btn btn-lg btn-orange">
            登入
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Tourney:ital,wght@1,500&display=swap');
.grid {
  min-height: 100vh;
  background-color: rgba(17, 24, 39, 1);
  // background-color: #3d352e;
}
.grid-container {
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 0.5rem;
  transform: skewY(-12deg) scale(1.25);
}
.grid-item {
  background-color: rgba(31, 41, 55, 1);
  // background-color: #b2734d;
  border-radius: 0.25rem;
}
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
.animate-pulse {
  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.login {
  width: 500px;
  background-color: rgba(0, 0, 0, 0.3);
  border-top: 4px solid orange;
  padding: 3rem;
  border-radius: 1rem;
  color: #fff;
}
.title {
  padding-bottom: 1rem;
  border-bottom: 4px solid #fff;
  font-family: 'Tourney', cursive;
}
</style>
