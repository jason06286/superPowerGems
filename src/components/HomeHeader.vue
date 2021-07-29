<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, onUnmounted, ref } from 'vue';

gsap.registerPlugin(ScrollTrigger);
export default {
  setup() {
    const universeStart = ref(null);
    const universe = ref(null);
    const plane = ref(null);
    const ufo = ref(null);
    const triggers = ScrollTrigger.getAll();

    function gsapSet() {
      ScrollTrigger.matchMedia({
        '(min-width: 768px)': () => {
          gsap.to(plane.value, {
            scrollTrigger: {
              trigger: universeStart.value,
              scrub: true,
              start: 'top top',
              toggleActions: 'play none none reverse',
              invalidateOnResize: true,
            },
            x: 800,
            y: -800,
            duration: 5,
            ease: 'circ.out',
            scale: 0.5,
          });
          gsap.to(ufo.value, {
            scrollTrigger: {
              scrub: true,
              toggleActions: 'play none none reverse',
              invalidateOnResize: true,
              start: 'top top',
            },
            duration: 1,
            ease: 'power4.out',
            y: 400,
            scale: 1.5,
          });
        },
      });
    }

    onMounted(() => {
      ScrollTrigger.refresh();
      gsapSet();
    });
    onUnmounted(() => {
      triggers.forEach((trigger) => {
        trigger.kill();
      });
      ScrollTrigger.clearMatchMedia();
    });

    return {
      universeStart,
      universe,
      plane,
      ufo,
    };
  },
};
</script>

<template>
  <header ref="universeStart">
    <div class="content">
      <p class="mb-0">宇宙能源匱乏，外星人肆意掠奪，</p>
      <div class="type-writer">
        <p class="mb-0">地球生存危在旦夕…</p>
      </div>
    </div>
    <img
      src="https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1627384359096.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PZLPXWGpsOno%2B%2Bk3OsMqlv%2B1CJfLi0MlX9qp39RDaQ2vRAoNAUT9IpBbU%2F%2FHG0KUIT3%2FJ8BynDAOeMDsss5XdbLiyglbyOSMWNwwTPcN2ajmReADKGCc7hFpZn3lUHKkWw7%2BQ5Elkn7MMRW9BYyejefzaYGfRYhnmAQr%2B83%2FauOaOn3ErrE9sn7SckWPgKzTTduTYtnUWtET4DoziRHSZyHR7Nc9LRJJnCzhn7SoBlgRWNFU983phNjAWt8BgcevhchBrK7BPvsx%2FmHo2Dx6AFzCNI3tVWDRpA5ii7WAPL74zAIFEOLTS%2Bh10V%2Bt3qdCMbS8ePkJtZBLqfZdUp0G7w%3D%3D"
      alt="戰爭背景"
      class="bg-universe"
      ref="universe"
    />
    <img
      src="https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1627384381955.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WyzuiZNrMtQKNA7qPJP2TW%2BXtkFvvZMNDgPax%2F4XCPC9jTAVYWWjoqPD%2BoFAl7BwVJbhhFlo%2FEeYKm4I0OhuETdOQByihbYObcvUWEkAhJ6R%2FRjMlbG2keNcVAVIatEK5w7xS7xxX3uIZ3MSr9dj2Y3RGQN2q%2Bkcad%2FGabmPwmcrTcke7OxdlVL2Xrv%2FcxNo0kcVs7Be%2Fuu1ErRiLMojgpjI1IznU35X6hoagLzZV1nz5VI2PnEAc%2FxXQ2EZu0PVN7xXfOy97ISIie%2FfMSoEWlx2XaaVikzKA5kqyj%2BSImEaNsvz8gOPy9CXlTP1pCtiMaN2iaqTpO%2FEuo4WwygiIg%3D%3D"
      alt="灰色的戰鬥機"
      class="plane"
      ref="plane"
    />
    <img src="../assets/img/ufo1.svg" alt="幽浮" class="ufo" ref="ufo" />
    <div class="scroll">
      <p class="mb-0">SCROLL DOWN</p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg-universe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
.content {
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.25rem;
  padding: 1.5rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  z-index: 3;
  @media (min-width: 576px) {
    font-size: 2rem;
  }
  p {
    pointer-events: none;
    text-align: center;
  }
}
.type-writer p {
  overflow: hidden;
  border-right: 0.15em solid rgba(255, 255, 255, 0.8);
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 5s steps(30, end) infinite,
    blink-caret 0.5s step-end infinite;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 75%;
  }
}
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: rgba(255, 255, 255, 0.8);
  }
}
.plane {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 200px;
  z-index: 2;
  transform: scale(1);
  object-fit: contain;
  @media (min-width: 768px) {
    height: 300px;
  }
  @media (min-width: 992px) {
    height: 500px;
  }
}

.ufo {
  position: absolute;
  right: 30%;
  bottom: 20%;
  z-index: 2;
  height: 200px;
  transform: scale(0);
  object-fit: contain;
  @media (min-width: 768px) {
    height: 300px;
  }
  @media (min-width: 992px) {
    height: 500px;
  }
}
.scroll {
  position: absolute;
  right: 2%;
  bottom: 20%;
  text-align: center;
  font-size: 1rem;

  @media (min-width: 576px) {
    font-size: 1.5rem;
  }
  p {
    color: rgba(255, 255, 255, 0.8);
    pointer-events: none;
    writing-mode: vertical-lr;
    position: relative;
  }
  p::before {
    content: '';
    position: absolute;
    top: 105%;
    bottom: 0;
    right: 50%;
    display: block;
    width: 1px;
    height: 0;
    background: #fff;
    transform: translateX(-50%);
    transition: all 1s;
    animation: scroll-line 1.5s linear infinite;
    @media (min-width: 576px) {
      width: 1.5px;
    }
  }
}
@keyframes scroll-line {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}
</style>
