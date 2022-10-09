<template>
  <div class="list-item">
    <header>
      <div class="info">
        <van-image
          round
          fit="cover"
          width="50"
          height="50"
          :src="src || 'https://img01.yzcdn.cn/vant/cat.jpeg'"
        />
        <span>{{ role.name }}</span>
      </div>
      <div class="date-grade-box">
        <div class="date">{{ role.date }}</div>
        <div class="grade">
          <van-rate
            v-model="role.grade"
            :size="14"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
          />
        </div>
      </div>
    </header>
    <main>
      <div class="content">{{ role.content }}</div>
      <div v-if="role.answerContent" class="answer-content">
        回复: {{ role.answerContent }}
      </div>
    </main>
    <footer>
      <van-button round type="info" :color="role.answerContent && '#bebebe'">{{
        role.answerContent ? "已回复" : "回复"
      }}</van-button>
    </footer>
  </div>
</template>

<script>
import { Image, Button, Rate } from "vant";
export default {
  components: {
    [Image.name]: Image,
    [Button.name]: Button,
    [Rate.name]: Rate,
  },
  props: ["role"],
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.list-item {
  padding: 1.5rem $main-padding;
  background-color: #fff;
  border-radius: $main-radius;
  box-shadow: 0 0 10px -8px #000;
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .info {
      display: flex;
      align-items: center;
      gap: $main-gap;
    }
    .date-grade-box {
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-items: flex-end;
      font-size: $desc-font-size;
    }
  }
  main {
    padding-top: 2rem;
    font-size: $desc-font-size;
    text-align: left;
    .answer-content{
      margin-top: 2rem;
      padding: 2rem 0;
      border-top: #00000020 solid 1px;
    }
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .van-button {
      width: 7em;
      height: 2.5em;
    }
  }
}
</style>
