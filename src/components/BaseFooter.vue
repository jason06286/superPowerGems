<script>
export default {};
</script>

<template>
  <footer>
    <div class="bg-dark">
      <div class="container py-3 text-center text-title">
        <div
          class="d-flex justify-content-center align-items-center flex-column"
        >
          <router-link class="link-home" to="/">Superpower Gems</router-link>
          <small class="mb-2">本網站僅供個人作品使用，不提供商業用途</small>
          <small class="mb-2">Copyright © 2021 jason06286.</small>
          <ul class="mb-0 d-flex list-unstyled">
            <li class="mx-3">
              <a
                href="https://github.com/jason06286"
                target="_blank"
                class="text-title d-block"
              >
                <i class="bi bi-github"></i>
              </a>
            </li>
            <li class="mx-3">
              <a
                href="mailto:dj4871114@gmail.com"
                target="_blank"
                class="text-title d-block"
              >
                <i class="bi bi-envelope-fill"></i>
              </a>
            </li>
            <li class="mx-3">
              <a href="javascript:;" class="text-title d-block">
                <i class="bi bi-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.link-home {
  font-family: 'Tourney', cursive;
  text-decoration: none;
  font-size: 1.25rem;
  color: rgba($color: #fff, $alpha: 0.8);
}
.link-home:hover {
  transform: scale(1.2);
}
li a {
  font-size: 1rem;
}
li:hover a {
  color: rgba($color: #fff, $alpha: 0.8);
  transform: scale(1.5);
}
</style>
