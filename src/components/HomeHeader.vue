<script>
import { onMounted, ref } from 'vue';

export default {
  setup() {
    const peopleDom = ref(null);
    const typingContentDom = ref(null);
    const typingContentShow = ref(false);
    const typingDone = ref(false);
    let i = 0;
    const txt = '宇宙能源匱乏，外星人肆意掠奪，地球生存危在旦息...';
    const speed = 200;
    function typeWriter() {
      if (i < txt.length) {
        typingContentDom.value.children[0].innerHTML += txt.charAt(i);
        i += 1;
        setTimeout(typeWriter, speed);
        return;
      }
      typingDone.value = true;
    }
    function stopShine() {
      typingContentShow.value = true;
      peopleDom.value.classList.add('active');
      typeWriter();
    }

    onMounted(() => {
      console.dir(peopleDom);
      console.log(peopleDom.value.children[0].children);
      console.dir(typingContentDom);
    });
    return {
      peopleDom,
      stopShine,
      typingContentDom,
      typeWriter,
      typingContentShow,
      typingDone,
    };
  },
};
</script>
<template lang="">
    <div class="star">
        <div class="stars"></div>
        <div class="twinkling"></div>
        <div class="container pepole" ref="peopleDom">
          <div class="row">
              <div class="mb-3 col-lg-7 col-12" v-show="typingContentShow">
              <div class="typingContent" ref="typingContentDom">
                <p>
                </p>
                <div class="text-end" v-show="typingDone">
                  <a  class="btn btn-outline-secondary btn-sm typingBtn" href = "#shop">Click</a>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-12">
              <button
            v-if="!typingContentShow"
            class="mb-3  btn btn-orange d-inline-block "
            type="button"
            @click.prevent="stopShine"
            >Click</button>
            <img src="../assets/img/pepole.svg" alt="">
            </div>
          </div>
        </div>
        <div class="bg-wave"></div>
    </div>
</template>
<style lang="scss" scoped>
.star {
  position: relative;
  height: calc(100vh - 40px);
  overflow: hidden;
}

.stars {
  background: black url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1625924061162.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=QUQ3j12Xf773TV%2FlRxJldJjI%2BlIuBnj1XkpciscKx7no2yRTqN3eJztesYPU3FIf5Nm038Zsy%2B0emcUdw%2BDQHsuiEDYOpSyffzlSuxnLglBYp5sSNegxXe5Mec1PM%2FUWANSfwFT1nIh%2FjeIEfbkVZiJPlIH5Jdp%2F3oIWtFE%2FkcMFysJP%2FDaCnfOpnufSZbKfRQL66ioIYWqjE0NSMfzOSxqjR7T3JMERfsl9BMWtnPyj84IaFTkT%2BMDgZbsYMVRTZn9TjXJ0V%2F0oZQkU3w4jy4ecytYO1%2BYrFiX8MM2akXEYYV06c85RD12ZoFkRt51oWldugY6bXwy0yO8BYqKu6A%3D%3D') repeat;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  z-index: -2;
}

.twinkling {
  width: 10000px;
  height: 100%;
  background: transparent url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1625924089645.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=kjs7DyqvRPpF1Lz9dQSwncjaXAmXQcR6zmvWdYNSxi17qtYTevW6OOcJfdfMw7NnBMyNkV6ZnWkh2WYGDvoh5xjsN540qi0hmfLLRWDGXhgCWPW%2BcS5Kah3eQcZ0T0LWU13Jxhyu%2FkmydrtmnBMQsskatfJKPBTygQJ4n8GZ4GyIqW2wLY8HAB1Kl5mnQ8yfp19I30okVJRygK3sE8sE3yF31o7RW6OdnQvmJ1M%2F1qTq2K%2Fob9reXHk%2FwkJcGSu8cXIVNvkmyedShzWlZlt2q4%2FRc%2BiuA2Xfg8WDugv2z8fvgayPW95OnmBZFB4HMvqx3GKhHtyFSGvYOguhoSKn6A%3D%3D') repeat;
  background-size: 1000px 1000px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;

  animation: move-background 70s linear infinite;
}
@keyframes move-background {
  from {
    transform: translate3d(0px, 0px, 0px);
  }
  to {
    transform: translate3d(1000px, 0px, 0px);
  }
}
.pepole {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pepole img {
  display: block;
  animation: people-shine 3s linear infinite;
  transition: all 0.5s;
  height: 400px;
  z-index: 2;
  @media (min-width: 576px) {
    height: 100%;
  }
}
@keyframes people-shine {
  0% {
    filter: drop-shadow(10px 0px 30px rgba(0, 0, 0, 0.7));
  }
  10% {
    filter: drop-shadow(10px 0px 30px rgba(255, 255, 255, 0.7));
  }
  50% {
    filter: drop-shadow(10px 0px 30px rgba(255, 255, 255, 0.7));
  }
  100% {
    filter: drop-shadow(10px 0px 30px rgba(0, 0, 0, 0.7));
  }
}
.active img {
  animation: people-shine 3s linear infinite;
  animation-play-state: paused;
  animation-fill-mode: none;
  filter: drop-shadow(10px 0px 30px rgba(0, 0, 0, 0.7)) !important;
}
.typingContent {
  background-image: url('../assets/img/typing-background.svg');
  background-size: cover;
  background-position: center center;
  padding: 1rem;
  width: 280px;
  @media (min-width: 576px) {
    width: 400px;
    padding: 2rem;
  }
  p {
    letter-spacing: 0.1rem;
  }
}
.typingBtn {
  animation: typingBtn 1s linear infinite;
}
@keyframes typingBtn {
  0%,
  100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-10%);
    opacity: 0.5;
  }
}
.bg-wave {
  background-image: url('../assets/img/wave-orange.svg');
  background-size: cover;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  z-index: -1;
}
</style>
