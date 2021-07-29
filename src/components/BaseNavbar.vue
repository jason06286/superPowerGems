<script>
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const link = reactive([
      {
        linkName: '首頁',
        linkTo: '/',
      },
      {
        linkName: '所有商品',
        linkTo: '/frontDesk/products',
      },
      {
        linkName: '優惠券',
        linkTo: '/frontDesk/coupon',
      },
      {
        linkName: '購物車',
        linkTo: '/frontDesk/carts',
      },
      {
        linkName: '進入後台',
        linkTo: '/dashboard/products',
      },
    ]);
    const isActive = ref(false);
    const showScroll = ref(false);

    onMounted(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > window.screenY) {
          showScroll.value = true;
        } else {
          showScroll.value = false;
        }
      });
    });

    return {
      route,
      link,
      isActive,
      showScroll,
    };
  },
};
</script>

<template>
  <div>
    <nav class="text-title" :class="{ 'bg-dark': showScroll }">
      <div class="container-fluid position-relative">
        <div class="d-lg-flex align-items-center">
          <router-link class="nav-brand" to="/">Superpower Gems</router-link>
          <div class="hamburger-btn-position">
            <div
              class="hamburger-btn d-flex d-lg-none"
              :class="{ active: isActive }"
              @click="isActive = !isActive"
            >
              <div class="hamburger-icon"></div>
            </div>
          </div>
          <ul class="nav-list" :class="{ active: isActive }">
            <li
              v-for="item in link"
              :key="item.linkName"
              :class="{ active: route.fullPath === item.linkTo }"
            >
              <router-link :to="item.linkTo" @click="isActive = false">{{
                item.linkName
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Tourney:ital,wght@1,500&display=swap');
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.hamburger-btn-position {
  position: absolute;
  top: 16px;
  left: 16px;
  @media (min-width: 376px) {
    left: 32px;
  }
}
.hamburger-btn {
  position: relative;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  z-index: 8;
}
.hamburger-icon {
  width: 25px;
  height: 3px;
  background: #dd5c33;
  border-radius: 1px;
  transition: all 0.5s ease-in-out;
}
.hamburger-icon::before,
.hamburger-icon::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 3px;
  background: #dd5c33;
  border-radius: 1px;
  transition: all 0.5s ease-in-out;
}
.hamburger-icon::before {
  transform: translateY(-8px);
}
.hamburger-icon::after {
  transform: translateY(8px);
}
.hamburger-btn.active .hamburger-icon {
  transform: translateX(-32px);
}
.hamburger-btn.active .hamburger-icon::before {
  background: #fff;
  transform: rotate(45deg) translate(20px, -20px);
}
.hamburger-btn.active .hamburger-icon::after {
  background: #fff;
  transform: rotate(-45deg) translate(20px, 20px);
}
.nav-brand {
  font-size: 1.5rem;
  display: block;
  text-decoration: none;
  color: #fff;
  font-family: 'Tourney', cursive;
  text-align: right;
  padding: 1rem;
  @media (min-width: 321px) {
    text-align: center;
  }
  @media (min-width: 992px) {
    text-align: left;
    width: 100%;
    margin-right: auto;
  }
}
.nav-list {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #392f3c;
  border-radius: 0 500px 500px 0;
  transform: translateX(-100%);
  transition: all 0.5s ease-in-out;
  @media (min-width: 992px) {
    position: static;
    margin: 0 1rem;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: row;
    background: transparent;
    height: 100%;
    transform: translateX(0);
  }
  a {
    display: block;
    text-decoration: none;
    color: whitesmoke;
    padding: 0.5rem;
  }
  li {
    width: 100%;
    text-align: center;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    transition: all 0.3s;
    position: relative;
    @media (min-width: 992px) {
      width: 100px;
      margin-right: 0.5rem;
      margin-bottom: 0;
    }
  }
  li::before {
    content: '';
    position: absolute;
    bottom: 0;
    display: block;
    width: 0;
    height: 40%;
    background-color: rgba($color: #dd5c33, $alpha: 0.6);
    transform: translateY(-20%);
    z-index: -1;
    transition: all 0.3s;
  }
  li:hover::before {
    width: 100%;
  }
  .active {
    background: #dd5c33;
    @media (min-width: 992px) {
      background: none;
    }
  }
}
.nav-list .active::before {
  content: '';
  width: 100%;
}

.nav-list.active {
  transform: translateX(0);
  border-radius: 0 0 0 0;
}
</style>
