<script>
// kit
import axios from 'axios';
// methods
import emitter from '@/methods/emitter';
import pushMessageState from '@/methods/pushMessageState';
// vue
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const filterProducts = reactive({ obj: {} });

    function productDetail() {
      const products = reactive({ arr: [] });
      const isLoading = ref('');

      const getAllProducts = () => {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
        axios
          .get(url)
          .then((res) => {
            if (res.data.success) {
              products.arr = res.data.products;
            } else {
              console.error(res.data.message);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      };
      const filterProduct = (condition = '') => {
        filterProducts.obj = products.arr.filter((item) => item.category.match(condition));
      };
      const addCart = (item) => {
        isLoading.value = item.id;
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
        axios
          .post(url, {
            data: {
              product_id: item.id,
              qty: 1,
            },
          })
          .then((res) => {
            if (res.data.success) {
              emitter.emit('update-cart');
              isLoading.value = '';
            } else {
              console.error(res.data.message);
            }
            pushMessageState(res, '購物車新增');
          })
          .catch((err) => {
            console.error(err);
          });
      };
      const forwardingProduct = (id) => {
        router.push(`/frontDesk/product/${id}`);
      };

      onMounted(() => {
        getAllProducts();
      });

      return {
        isLoading,
        filterProduct,
        addCart,
        forwardingProduct,
      };
    }
    function quizDetail() {
      const questions = reactive({
        questions: [
          {
            question: '今天出門竟然被滴到鳥屎，你第一個想法是什麼?',
            answers: [
              { answer: '怎麼那麼倒霉', score: 3 },
              { answer: '回家換衣服', score: 2 },
              { answer: '趕快去買樂透', score: 4 },
              { answer: '假裝沒事不管了', score: 1 },
            ],
          },
          {
            question:
              '今天上班完很累，回家想擦個精油放鬆，以下四罐精油會選擇哪一罐?',
            answers: [
              { answer: '紫色/透明色的精油', score: 1 },
              { answer: '靛藍色/檸檬色的精油', score: 2 },
              { answer: '黃色/金色的精油', score: 4 },
              { answer: '紫色/粉色的精油', score: 3 },
            ],
          },
          {
            question:
              '假如你到商場裡買衣服，以下三種顏色的衣服，哪一種是你最不喜歡的？',
            answers: [
              { answer: '黑色洋裝', score: 1 },
              { answer: '藍色外套', score: 3 },
              { answer: '紅色風衣', score: 4 },
              { answer: '黃色襯衫', score: 2 },
            ],
          },
        ],
      });
      const selectAnswer = ref('');
      const totalScore = ref(0);
      const index = ref(0);
      const quizResult = ref('');
      const { filterProduct } = productDetail();

      const answerd = (e) => {
        selectAnswer.value = e.target.value;
        totalScore.value += Number(e.target.value);
      };
      const nextQuestion = () => {
        index.value += 1;
        selectAnswer.value = '';
      };
      const showResults = () => {
        index.value += 1;
        if (totalScore.value < 4) {
          filterProduct('精鋼');
          quizResult.value = '你是非常樂觀和開朗的人，當你人生遇到任何困難或問題，你不會想太多而樂觀面段，使得人生沒有什麼阻礙。';
          return;
        }
        if (totalScore.value <= 6) {
          filterProduct('精礦');
          quizResult.value = '你很為家人著想，為了家人賺錢，為了要付出給家人更好的生活，為了家人勞心勞力，家人永遠是你的第一順位。';
          return;
        }
        if (totalScore.value <= 9) {
          filterProduct('精石');
          quizResult.value = '你是重感情的人，只要有人可以依賴依靠，你就會有生命力和鬥志，為了愛情可以付出所有。';
          return;
        }
        if (totalScore.value <= 12) {
          filterProduct('精石');
          quizResult.value = '你是很看重錢財的人，有的人是覺得賺不夠多，有的人是花錢大手大腳，要小心為了錢財，想賺更多可能會失去更多或被人詐騙。';
        }
      };

      return {
        filterProducts,
        questions,
        answerd,
        index,
        quizResult,
        selectAnswer,
        nextQuestion,
        showResults,
      };
    }

    return {
      filterProducts,
      ...productDetail(),
      ...quizDetail(),
    };
  },
};
</script>

<template>
  <div
    class="container py-5 text-white position-relative"
    style="min-height: calc(100vh - 56px)"
  >
    <div class="py-5">
      <div
        class=" d-flex w-100 h-100 justify-content-center align-items-center flex-column"
      >
        <h2 class="pb-2 border-orange border-bottom border-3">能量石測驗</h2>
        <p class="text-white fs-5">幫你找出適合的能量石</p>
        <img
          src="../../assets/img/undraw_Taken_re_yn20.svg"
          class="img-quiz"
          alt="有飛碟要把外星人帶走"
          v-if="index < questions.questions.length"
        />
        <ul class="list" v-if="index < questions.questions.length">
          <li>
            <h3>
              <i class="bi bi-emoji-smile"></i>
            </h3>
            請誠實回答
          </li>
          <li>
            <h3>
              <i class="bi bi-hand-index"></i>
            </h3>
            請根據第一直覺選擇答案
          </li>
        </ul>
        <div
          class="question"
          :class="{ active: selectAnswer === '' }"
          v-if="index < questions.questions.length"
        >
          <h4 class="p-4 mb-3 text-white rounded-2 bg-secondary">
            {{ questions.questions[index].question }}
          </h4>
          <label
            :for="item.answer"
            class="p-2 mb-3 text-center border rounded w-100"
            :class="{ 'bg-selected': selectAnswer == item.score }"
            v-for="item in questions.questions[index].answers"
            :key="item"
          >
            <input
              type="radio"
              class="d-none"
              :id="item.answer"
              :value="item.score"
              :disabled="selectAnswer !== ''"
              @change="answerd"
            />
            {{ item.answer }}
          </label>
          <button
            type="button"
            class="btn btn-secondary"
            v-show="
              selectAnswer != '' && index < questions.questions.length - 1
            "
            @click="nextQuestion"
          >
            下一題
          </button>
          <button
            type="button"
            class="btn btn-orange"
            v-show="
              selectAnswer != '' && index == questions.questions.length - 1
            "
            @click="showResults"
          >
            完成測驗
          </button>
        </div>
        <div v-else>
          <div class="container">
            <p>{{ quizResult }}</p>
            <h3 class="mb-3 text-orange">推薦商品:</h3>
            <div class="row">
              <div
                class="mb-3 col-12 col-md-6 col-lg-4"
                v-for="item in filterProducts.obj"
                :key="item.id"
              >
                <div class="img-card">
                  <img
                    :src="item.imageUrl"
                    :alt="item.description"
                    class="image"
                  />
                  <div class="content">
                    <h3 class="text-center text-white">{{ item.title }}</h3>
                    <div
                      class=" d-flex justify-content-center align-items-center w-100"
                    >
                      <button
                        type="button"
                        class="btn btn-secondary me-3"
                        @click="forwardingProduct(item.id)"
                      >
                        查看更多
                      </button>
                      <button
                        type="button"
                        class="btn btn-orange"
                        :class="{ disabled: isLoading === item.id }"
                        @click="addCart(item)"
                      >
                        <div
                          class="spinner-border spinner-border-sm"
                          role="status"
                          v-if="isLoading === item.id"
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.question {
  min-width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 1rem;
  border: 4px double #aaa;
  padding: 2rem;
  box-shadow: 5px 5px 10px rgba($color: #000000, $alpha: 0.5);
  background-color: #fff;
  color: #000;
}
.active label {
  cursor: pointer;
}
.active label:hover {
  background: #ccc;
}
.bg-selected {
  background: #a6e9d5;
}
.img-card {
  position: relative;
  width: 100%;
  border: 2px solid gray;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
}
.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
}
.content {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}
.img-card:hover {
  border: 2px solid #f59157;
}
.img-card:hover .image {
  opacity: 0.5;
  filter: blur(2px);
}
.img-card:hover .content {
  opacity: 1;
}
.list {
  display: block;
  list-style-type: none;
  width: 100%;
  padding-left: 0;
  @media (min-width: 576px) {
    display: flex;
    justify-content: center;
  }
  li {
    text-align: center;
    padding: 1rem;
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    background: #ece9db;
    color: #000;
    @media (min-width: 576px) {
      width: 25%;
      margin-right: 1rem;
    }
  }
  li:last-child {
    background: #ddedee;
  }
}
.img-quiz {
  display: none;
  object-fit: contain;
  @media (min-width: 576px) {
    display: block;
    position: absolute;
    top: 8%;
    right: 0;
    height: 200px;
  }
}
</style>
