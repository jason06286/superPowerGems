<script>
import { apiCheckStatus, apiSignOut } from '@/api/api';
import useVueSweetAlert2 from '@/methods/useSwal';

import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const isLogin = ref(false);

    const $swal = useVueSweetAlert2();

    function swalError(title, text) {
      $swal.fire({
        icon: 'error',
        title,
        text,
        background: '#262833',
        confirmButtonColor: '#98142b',
      });
    }

    async function signOut() {
      try {
        const res = await apiSignOut();
        if (res.data.success) {
          document.cookie = 'hexToken=; expires=; path=/superPowerGems/dist';
          router.push('/login');
        } else {
          swalError('Oops...', '登出失敗');
        }
      } catch (error) {
        swalError('Oops...', '登出失敗');
      }
    }
    async function checkStatus() {
      try {
        const res = await apiCheckStatus();
        if (!res.data.success) {
          isLogin.value = false;
          router.push('/login');
        } else {
          isLogin.value = true;
        }
      } catch (error) {
        swalError('Oops...', '登入失敗');
      }
    }
    onMounted(() => {
      checkStatus();
    });
    return {
      signOut,
      route,
      isLogin,
    };
  },
};
</script>

<template>
  <div class="container py-5">
    <div class="row w-100">
      <div class="col-12 col-lg-4">
        <div
          class="flex-shrink-0 p-3 mb-3 text-white border rounded border-title d-flex flex-column"
        >
          <a href="/" class="link mb-md-0 me-md-auto">
            <span class="fs-4 font-Tourney"> Superpower Gems</span>
          </a>
          <hr />
          <ul class="mb-auto nav nav-pills flex-column">
            <li class="nav-item">
              <router-link
                class="text-content nav-link"
                to="/"
                :class="{ active: route.fullPath === '/' }"
              >
                <i class="bi bi-house-fill me-2"></i>
                首頁
              </router-link>
            </li>
            <li>
              <router-link
                class="text-content nav-link"
                to="/dashboard/products"
                :class="{ active: route.fullPath === '/dashboard/products' }"
              >
                <i class="bi bi-grid-fill me-2"></i>
                商品
              </router-link>
            </li>
            <li>
              <router-link
                class="text-content nav-link"
                to="/dashboard/orders"
                :class="{ active: route.fullPath === '/dashboard/orders' }"
              >
                <i class="bi bi-table me-2"></i>
                訂單
              </router-link>
            </li>
            <li>
              <router-link
                class="text-content nav-link"
                to="/dashboard/coupon"
                :class="{ active: route.fullPath === '/dashboard/coupon' }"
              >
                <svg class="bg-content text-content me-2" id="Capa_1"  enable-background="new 0 0 475.293 475.293" height="16" viewBox="0 0 475.293 475.293" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m430.734 415.882h-386.175c-24.571 0-44.559-19.988-44.559-44.559v-74.265c0-8.21 6.643-14.853 14.853-14.853 24.571 0 44.559-19.988 44.559-44.559s-19.988-44.559-44.559-44.559c-8.21.001-14.853-6.642-14.853-14.852v-74.265c0-24.571 19.988-44.559 44.559-44.559h386.176c24.571 0 44.559 19.988 44.559 44.559v74.265c0 8.21-6.643 14.853-14.853 14.853-24.571 0-44.559 19.988-44.559 44.559s19.988 44.559 44.559 44.559c8.21 0 14.853 6.643 14.853 14.853v74.265c-.001 24.57-19.988 44.558-44.56 44.558zm-401.028-105.465v60.906c0 8.195 6.658 14.853 14.853 14.853h386.176c8.195 0 14.853-6.658 14.853-14.853v-60.906c-33.854-6.904-59.412-36.9-59.412-72.771s25.557-65.866 59.412-72.771v-60.905c0-8.195-6.658-14.853-14.853-14.853h-386.176c-8.195 0-14.853 6.658-14.853 14.853v60.906c33.854 6.904 59.412 36.9 59.412 72.771s-25.558 65.866-59.412 72.77z"/><path d="m-253.192 288.847h253.806v29.716h-253.806z" transform="matrix(.351 -.936 .936 .351 -2.301 12.678)"/><path id="path-1_20_" d="m163.382 237.647c-24.571 0-44.559-19.988-44.559-44.559s19.988-44.559 44.559-44.559 44.559 19.988 44.559 44.559-19.988 44.559-44.559 44.559zm0-59.412c-8.195 0-14.853 6.658-14.853 14.853s6.658 14.853 14.853 14.853 14.853-6.658 14.853-14.853-6.658-14.853-14.853-14.853z" transform="translate(4 5)"/><path id="path-1_19_" d="m311.911 326.764c-24.571 0-44.559-19.988-44.559-44.559s19.988-44.559 44.559-44.559 44.559 19.988 44.559 44.559-19.988 44.559-44.559 44.559zm0-59.412c-8.195 0-14.853 6.658-14.853 14.853s6.658 14.853 14.853 14.853 14.853-6.658 14.853-14.853-6.658-14.853-14.853-14.853z" transform="translate(9 8)"/></svg>
                優惠券
              </router-link>
            </li>
          </ul>
          <hr />
          <button
            class=" btn btn-darkred fw-bold"
            type="button"
            @click="signOut"
          >
            登出
          </button>
        </div>
      </div>
      <div class="col-12 col-lg-8">
        <router-view v-if="isLogin"></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Tourney:ital,wght@1,500&display=swap');
body{
  background: #212529;
}
.font-Tourney {
  font-family: 'Tourney', cursive;
}
.active {
  background-color: darken($color: #98142b, $amount: 10)!important;
}
.bg-gray-900 {
  background-color: rgba(31, 41, 55, 1);
}
li a {
  &:hover{
    background-color: #98142b;
  }
}
.link {
  text-decoration: none;
  margin-bottom: 0.75rem;
  color: rgba($color: #fff, $alpha: 0.6);
  display: flex;
  align-items: center;
}
</style>
