<template>
  <div class="list-item">
    <header>
      <div class="title">{{ role.title }}</div>
      <div class="user">
        <van-image
          round
          fit="cover"
          width="3rem"
          height="3rem"
          :src="role.src || 'https://img01.yzcdn.cn/vant/cat.jpeg'"
        /><span>{{ role.name }}</span>
      </div>
    </header>
    <main>
      <div class="content">{{ role.content }}</div>
    </main>
    <footer>
      <van-button round type="info" @click="goReply">我来回答</van-button>
    </footer>
  </div>
</template>

<script>
import { Image, Button } from "vant";
export default {
  components: {
    [Image.name]: Image,
    [Button.name]: Button,
  },
  props: ["role"],
  data() {
    return {};
  },
  methods: {
    goReply() {
      this.$goto("/answerDesc");
    },
  },
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.list-item {
  background-color: #fff;
  padding: $main-padding;
  header {
    display: flex;
    flex-direction: column;
    .title {
      font-size: $title-font-size;
      text-align: left;
    }
    .user {
      display: flex;
      gap: $main-gap;
      padding: 2rem 0 1rem;
      align-items: center;
      justify-content: flex-start;
    }
  }
  main {
    .content {
      display: -webkit-box;
      height: 8em;
      -webkit-line-clamp: 4;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      font-size: $desc-font-size;
      line-height: 2em;
    }
  }
  footer {
    padding: $main-padding 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
