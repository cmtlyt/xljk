<template>
  <div class="review-subject">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <div class="content">
      <main>
        <div class="title">
          {{ current }}、{{ subjectList[current - 1].title }}
        </div>
        <div class="value">
          <van-radio-group v-model="answer">
            <van-radio :name="true" @click="pushAnswer">是</van-radio>
            <van-radio :name="false" @click="pushAnswer">否</van-radio>
          </van-radio-group>
        </div>
        <div class="btns">
          <van-button v-if="current != 1" round type="info" @click="prev"
            >上一题</van-button
          >
          <van-button v-if="current == total" round type="info" @click="submit"
            >提交</van-button
          >
        </div>
      </main>
      <footer>{{ current }}/{{ total }}</footer>
    </div>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
import { RadioGroup, Radio, Button } from "vant";
export default {
  components: {
    CmtlytNavbar,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Button.name]: Button,
  },
  props: [],
  data() {
    return {
      navbarRole: { title: "疲劳测试" },
      current: 1,
      total: 2,
      subjectList: [
        { title: "你现在感觉很疲劳吗?" },
        { title: "你现在感觉很疲劳吗?" },
      ],
      answerList: [],
      answer: null,
    };
  },
  methods: {
    pushAnswer() {
      this.answerList[this.current - 1] = this.answer;
      if (this.current == this.total) return;
      this.answer = this.answerList[this.current];
      this.current++;
    },
    prev() {
      this.current--;
      this.answer = this.answerList[this.current - 1];
    },
    submit() {
      console.log(this.answerList);
      this.$goto("reviewAnswer");
    },
  },
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.review-subject {
  .content {
    padding: $main-padding;
  }
  main {
    padding: 2rem 3rem;
    text-align: left;
    background-color: #fff;
    border-radius: 5px;
    .title {
      margin-bottom: 4rem;
      font-size: $title-font-size;
    }
    .van-radio-group {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      font-size: $text-font-size;
    }
    .btns {
      margin-top: 20rem;
      display: flex;
      justify-content: space-between;
      .van-button {
        width: 40%;
        height: 3em;
      }
    }
  }
  footer {
    margin-top: 5rem;
  }
}
</style>
