<script>
export default {
  setup(props, { attrs }) {
    return {
      attrs,
    };
  },
};
</script>

<template>
  <Loading :active="attrs.isLoading" :background-color="'black'">
    <section>
      <div class="loader"></div>
    </section>
  </Loading>
</template>

<style lang="scss" scoped>
section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
  animation: changeBg 5s linear infinite;
  opacity: 0.5;
}
@keyframes changeBg {
  to {
    filter: hue-rotate(360deg);
  }
}
.loader {
  position: absolute;
  width: 150px;
  height: 150px;
  background: linear-gradient(to top, #000 40%, #51eeee);
  border-radius: 50%;
  animation: rotate 1s linear infinite;
  &::before {
    content: '';
    position: absolute;
    background: #000;
    inset: 20px 20px 0 0;
    border-radius: 50%;
    opacity: 1;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50px;
    right: -8px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #51eeee;
    box-shadow: 0 0 5px #51eeee, 0 0 25px #51eeee, 0 0 50px #51eeee,
      0 0 75px #51eeee;
  }
}
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
