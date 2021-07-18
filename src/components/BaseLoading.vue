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
  <Loading :active="attrs.isLoading">
    <div class="loadingio-spinner-blocks-hghzlg9l8i">
      <div class="ldio-cmlvaqhdbw">
        <div style="left: 21px; top: 21px; animation-delay: 0s"></div>
        <div style="left: 75px; top: 21px; animation-delay: 0.125s"></div>
        <div style="left: 129px; top: 21px; animation-delay: 0.25s"></div>
        <div style="left: 21px; top: 75px; animation-delay: 0.875s"></div>
        <div style="left: 129px; top: 75px; animation-delay: 0.375s"></div>
        <div style="left: 21px; top: 129px; animation-delay: 0.75s"></div>
        <div style="left: 75px; top: 129px; animation-delay: 0.625s"></div>
        <div style="left: 129px; top: 129px; animation-delay: 0.5s"></div>
      </div>
    </div>
  </Loading>
</template>

<style scoped>
@keyframes ldio-cmlvaqhdbw {
  0% {
    background: #5699d2;
  }
  12.5% {
    background: #5699d2;
  }
  12.625% {
    background: #1d3f72;
  }
  100% {
    background: #1d3f72;
  }
}
.ldio-cmlvaqhdbw div {
  position: absolute;
  width: 50px;
  height: 50px;
  background: #1d3f72;
  animation: ldio-cmlvaqhdbw 1s linear infinite;
}
.loadingio-spinner-blocks-hghzlg9l8i {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.ldio-cmlvaqhdbw {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-cmlvaqhdbw div {
  box-sizing: content-box;
}
</style>
