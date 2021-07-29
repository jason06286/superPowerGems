<script>
import { reactive, ref, watch } from 'vue';

export default {
  setup() {
    const waitPuzzle = reactive({
      puzzle: [
        {
          imageUrl:
            'https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1625923355374.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=YULS0TR5zFjKRnCwcsCZ%2BLRnIFVwVEugqLqVBkhz%2BBY5uNSHyxQihsflv%2BmA2%2B7n3S7SkeVJ2RJqguLU5WLd6kHbB0NA2CW9eECOpnaithfNeJ1dnq6B%2BLbjoms1NLUfUadfSoxU7ZU%2BpahN3wrjURAWMjlo3SKoIG%2Bev2jeXzrgLWTWtBLi1aYI6r%2B4sqU1OhphJkywCWbCFE6Lgj25Nyr5U7Zq7OUy9cx%2F5hN7lCLorGXDcaPwVCgsIiUkPHKVfpgaj8pNo0tOS7ewsRGieIR7VU8xFODRGclUavRfnCYND5%2BtzLIQK7ZG3hzcUK%2BatWX8MmcBiZqHbJBFBGF8pQ%3D%3D',
          index: 0,
        },
        {
          imageUrl:
            'https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1625923411417.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hhpYxI%2BGHBEzgUuZb29ePDL2Y9Cvjo%2FxdtqF6O3TCOhCheI%2FBGbE%2F%2FTQNWXQR2x22mUPP9xm3R2cnbO%2BR0v5ceufrdV8e9jO3MNObSZihjInwC%2FKZTr1Ehk4blxM%2BFjGWUdM8i4ZTO09ROloNxtgZHPTZbBJLwdF8Uwk2sx81KxStS1wsI3aI0MxUpKnUI%2B9B%2FrrVMqfXhAunMbx85tz%2FQKxpbLvHA8LEU%2BrseoW46IL7%2BF4ET5mNQ3Ylpk%2BvZuDLXzwfqqLzNISdLAKOflrmC5OPeXSc%2BmGv6QSqPouuq%2B06lEUeFwcNc9AwSxIOuJ1e3aq1ucv317bVc1cao9LgQ%3D%3D',
          index: 2,
        },
        {
          imageUrl:
            'https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1625923484688.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jnwE0hPl3VesPSqWz%2FehnFQ4vikGzdWBC1BdnRcs1QD3LxOtKzbG%2FCtvX4radh0xV%2B2nQ8Ko5ueeuvoKEpG%2FzGy%2FPpcGKyMKG83T52UOm6UzEf55y16flW635%2FWoTuecKIYfjygB7UNR7FROfkUH1tATPZ4RfjwVS%2FukxaocL6PQqh%2BFAJxsZD8ORG%2BSohUMtkG1zI0VfOBEP765XTfxI590xXdxBDC2MdqLU%2FBAXPEvn4J%2BoY3wUSMUsFIc7sU5pOaDeZ7JgT4beNdtlLUP4P4gEYRVbWFOc%2BO8j8kTmzrZz7igVTjiMhRUrb2ewiYJVqX4hS3NloagL46kGoV5eQ%3D%3D',
          index: 5,
        },
        {
          imageUrl:
            'https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1625923388529.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MJV2q5kT16JIxj%2BFenqMGjcNXXx8PCeo7%2BbiygagCROtSoh%2Fo4agjkJeppzOmbq2qVp6ww%2BNQLKbrRD7jwu%2BV5PqJ78sQ1cqa%2BSZ7tpCDkncOXQaKGJ7wDbQze8pBRbIdfXZognrKOKnm8tIU0dptl9phlr8dFV6xYP0bxejBSCux9TKjsPhT5updMEXyDu5coD%2BnGxgI9s2WqB%2F06FtJZQSIkdkF5A2fd3Jaql9U%2BMHotNc3%2BP3f6D1YVyeWEiBhA7QrwcfT%2BlJRo28JYuDojmZ%2Fxc%2F0EXHLMCb3VhdVdwjZbm1JQvrDwUbK5VT3H54Wnj1DLoOJev4sqHFd%2FIpbg%3D%3D',
          index: 1,
        },
        {
          imageUrl:
            'https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1625923513783.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qIjtAMzYCHW%2Bskl4f4zFs34FktZ0HPjbXyLptbR4skoZCp4n5LaQe5WLtCRS8iMRvYAI1NezHgBWgrqoqeS0d12GWp1AKryP2E1Fk5gdFWoXTigct2yHPc9o%2Fr17kH9ElsVm0Z3sduV%2Bx0gjbYxWM0%2By2e2MTP02E4SGFlPN7jPxOUOJUkscJCV0%2FYkH%2BRYnunG5rLAIAv4Ush9Om1R3Kcl%2BjHo0YpPuiz0LoPSQLtDoZlRROGJSade5KgNM1bCqZtljg2ZnOUa%2BX9JYZMUuQvid6CzwzSv4FSMJrTalHNC1H8K8RZBXQ80sH1hNT5XCBy893DjpkpwmyhE6GV6EUA%3D%3D',
          index: 6,
        },
        {
          imageUrl:
            'https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1625923533734.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=j%2Fdbn%2BX6QUPb1FVkyDHg0Kb6958AVBiB4wJZjQFM1xSLy4SzyZt%2BYG0VTkL83iQivDUp0M0SrG6YS93LPPn3IWRP7QWTluEFb3i9d5m%2FYu%2BJ3kkf38HEvTnTz4tfvceKSLSPBdsqVgs9o6u5q26K92Iijy5pYp%2FuI6A1eKdnovswpZ%2BP2R3NyVUWvq5BvRRSLh4mL224Ln4srGHcjZYJ2IX6Ikxl77EtA0RRAKXANN98O7rGeh1M4VhOa7xpTLvuSkOqSHJ502%2BBIy89N0ki3%2BRch2r%2F77YteB9%2B1QP6ciCcqvKcjf1hec1px2piba29DYzNUwTadXytEQf4XkIWFA%3D%3D',
          index: 7,
        },
        {
          imageUrl:
            'https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1625923440011.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=dnC8%2FGRKWD%2BrRcCf8HskWjIp0%2BZ%2FWAI4NBdMBm1W5h6MmuVrR20Fq4%2FdPWmCpRSoZ%2FqElFaM%2FL2o%2FIl%2Fs0o5UQs5hdNVUJ47UdVMcDiYNYSsdhvsZru4fsqlIuGIOtpNDp0%2B%2Fxcbc3fV61O2N7OHaNQUQp04AhrFG8FGVb223wnvEe%2Ft4rz9tM1yRm9CyumQ33bIvpKN8AWheeeB5KDlx7bkLUuEVff6qhfxb2EiujxKBG9nzVyYDJ9XdeuuRYmbiW0RVBWnwZe31lbSeGEYDk%2B7JEO5IbXrKV8onPoCH9ss5n0cYvn%2BKBgbVJz99amg7f8knKbpoS%2BlpjwpV2fn0A%3D%3D',
          index: 3,
        },
        {
          imageUrl:
            'https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1625923461855.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=m3ZABeqKapb0wfndVYdTke1Lh5PNvDV3bCHLYiYCitx781zqvQm5idyyAywCfLYfiLoIM0K39noOcyTmZSkIIVDjRA30E8Taz5%2FfYHc3SWuSVltswH7sv1EmPjZkcE3rfye1jGLnEDHVg0JoRfYCkbBSQIJzB8lQzJDzGLfhtG59Ch2bJpacSHuDEQmSuD4E%2FQeH2tv3TE9XAZRr69%2BEq2AqQ4Bba7a6WZOOXp91i%2FzXNXKyVIN9pxk7whynkzLo6FSE7hDBevJslFHhxgXu%2F5ozwB1DMXXIMY7jtWKyF3uXyAkaFKCK9KD8OcKmWCRugmVxfvuOS9veLbz9p4iaIQ%3D%3D',
          index: 4,
        },
        {
          imageUrl:
            'https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1625923565490.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=P%2FXP4ExYXZixq%2FSyHuklkJj2ghxWrEClrGretiPtBzYiHEkb%2FmsYJOcutXUZ2NoI0vFRo%2BTO1uEBc6MHlTWnPfUycDqrn%2Bp9nNw34Z%2F7ip0AehgJ3S6SsDFaX9IYum80ykyRzk6H0nqcXrgKt%2FQ5Ukj2vPPmBYmwXKFTHKrbZtZouzF2q3MFTlMf631Evmpt83mM1mhyMCmQTZ1YEvebFLXbjEpzFHs2THVtoeV%2Bq6kwdNqkY1eFKuDV%2BlXmFRM4pyFafTy4VrK4zHDD2uV8QpO1StzCEDUjzXssc34Ne4NinN5mf1awdsAAGh5F7IlIrTJ4EYLxdAkptbYlcKyjxw%3D%3D',
          index: 8,
        },
      ],
    });
    const donePuzzle = reactive({ puzzle: [] });
    const winIdx = ref(0);
    const isWin = ref(false);
    const coupon = ref('superPower');

    watch(
      () => donePuzzle.puzzle,
      (imgItem) => {
        winIdx.value = 0;
        imgItem.forEach((item, index) => {
          if (item.index === index) {
            winIdx.value += 1;
          }
        });
      },
      { deep: true },
    );
    watch(winIdx, (i) => {
      if (i === 9) {
        isWin.value = true;
      }
    });

    function goDone(item, index) {
      donePuzzle.puzzle.push(item);
      waitPuzzle.puzzle.splice(index, 1);
    }
    function goWait(item, index) {
      waitPuzzle.puzzle.push(item);
      donePuzzle.puzzle.splice(index, 1);
      winIdx.value -= 1;
      if (winIdx.value <= 0) {
        winIdx.value = 0;
      }
    }

    return {
      waitPuzzle,
      donePuzzle,
      isWin,
      coupon,
      goDone,
      goWait,
    };
  },
};
</script>

<template>
  <div class="bg-coupon">
    <div
      class="container d-flex justify-content-center align-items-center "
      style="min-height: calc(100vh - 144px)"
    >
      <div class="py-5">
        <div class="row py-5">
          <div class="mb-3 col-lg-6 col-12">
            <div class="mb-3 bg-unfinish">
              <ul class="mb-0 list-unstyled d-flex">
                <li
                  v-for="(item, index) in waitPuzzle.puzzle"
                  :key="item.imageUrl"
                  @click="goDone(item, index)"
                >
                  <img :src="item.imageUrl" alt="還未拼湊的拼圖" />
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="bg-finish">
              <ul class="mb-0 list-unstyled d-flex">
                <li
                  v-for="(item, index) in donePuzzle.puzzle"
                  :key="item.imageUrl"
                  @click="goWait(item, index)"
                >
                  <img :src="item.imageUrl" alt="已拼湊的拼圖" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="win-page" :class="{ open: isWin }" @click.self="isWin = !isWin">
      <h3 class="p-5 text-white rounded bg-dark">
        恭喜過關!! <br />
        優惠券代碼: {{ coupon }}
      </h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-coupon{
  background-image: linear-gradient( 109.6deg,  rgba(5,84,94,1) 16%, #bbb 91.1% );
}
.bg-unfinish {
  width: 100%;
  height: 293.05px;
  background: #fff;
  @media (min-width: 374px) {
    height: 348px;
  }
  @media (min-width: 424px) {
    height: 397px;
  }
  @media (min-width: 767px) {
    height: 689.02px;
  }
  @media (min-width: 1023px) {
    height: 451.5px;
  }
  @media (min-width: 1439px) {
    height: 629.63px;
  }
}
.bg-finish {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/supergems/1625923589742.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=nS3k402vFFcRtesuDVsoF%2F47SDFDkOYkfJzBP9jrYN89xo%2BycsmxnKmL08KXJv2rQ%2FQNaXYUhudYeOwTTT6uGADbzOnzLAxpCq%2BIlB%2FDX2YG5uXSYTfqCUUXXx1oxCWOO1sg1ObMaUvjXLcK86%2FoWIschQ%2FdEJJmXJ0pyiHNPGeJxMsLBM5Cj9npyK%2B6kqJDfsMJkE0rT87cptKFeSFndu1hUeSFJUVv7zp5sKU9Cn7S%2BDr6tRrluq92iydPzYoSRzZvUUA80HpDStjDQVaoqDp%2Fil5jQVXaRqETbHo21CbxtAHM%2F73tpxly6yCrrCxvQZjrgridnnAVGXbBL%2BapfQ%3D%3D');
  width: 100%;
  height: 293.05px;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: 374px) {
    height: 348px;
  }
  @media (min-width: 424px) {
    height: 397px;
  }
  @media (min-width: 767px) {
    height: 689.02px;
  }
  @media (min-width: 1023px) {
    height: 451.5px;
  }
  @media (min-width: 1439px) {
    height: 629.63px;
  }
}
ul {
  flex-wrap: wrap;
}
li {
  width: 33%;
  border: 1px solid #fff;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
    object-fit: contain;
  }
}
.win-page {
  position: fixed;
  width: 100%;
  height: 100%;
  top: -100%;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: top 0.3s;
}
.open {
  top: 0;
}
</style>
