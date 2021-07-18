<script>
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand font-Tourney" to="/"
        >Superpower Gems</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="py-3 collapse navbar-collapse py-lg-0" id="navbarNav">
        <ul
          class="text-center text-white  ms-lg-5 navbar-nav justify-content-lg-around w-lg-100"
        >
          <li class="mx-md-3 nav-item w-lg-100">
            <router-link
              class="nav-link"
              :class="{ active: route.fullPath === '/' }"
              to="/"
            >
              首頁
            </router-link>
          </li>
          <li class="mx-md-3 nav-item w-lg-100">
            <router-link
              class="nav-link"
              :class="{ active: route.fullPath === '/frontDesk/products' }"
              to="/frontDesk/products"
            >
              所有商品
            </router-link>
          </li>
          <li class="mx-md-3 nav-item w-lg-100">
            <router-link
              class="nav-link"
              :class="{ active: route.fullPath === '/frontDesk/quiz' }"
              to="/frontDesk/quiz"
            >
              測驗
            </router-link>
          </li>
          <li class="mx-md-3 nav-item w-lg-100">
            <router-link
              class="nav-link"
              :class="{ active: route.fullPath === '/frontDesk/coupon' }"
              to="/frontDesk/coupon"
            >
              優惠券
            </router-link>
          </li>
          <li class="mx-md-3 nav-item w-lg-100">
            <router-link
              class="nav-link"
              :class="{ active: route.fullPath === '/frontDesk/carts' }"
              to="/frontDesk/carts"
            >
              購物車
            </router-link>
          </li>
          <li class="mx-md-3 nav-item w-lg-100">
            <router-link
              class="nav-link"
              :class="{ active: route.fullPath === '/dashboard/products' }"
              to="/dashboard/products"
            >
              進入後台
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Tourney:ital,wght@1,500&display=swap');

.font-Tourney {
  font-family: 'Tourney', cursive;
}
.w-lg-100 {
  width: auto;
  @media (min-width: 992px) {
    width: 100%;
  }
}
.nav-item .active {
  background: #dd5c33;
  border-radius: 0.25rem;
}
.nav-item:hover a {
  color: white !important;
  background: #dd5c33;
  border-radius: 0.25rem;
  transform: scale(1.2);
}
</style>
