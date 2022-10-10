<template>
  <div class="history-item">
    <main>
      <van-image
        fit="cover"
        :src="role.src || 'https://img01.yzcdn.cn/vant/cat.jpeg'"
      />
      <div class="info">
        <div class="title">{{ role.title }}</div>
        <div class="date">
          {{ role.date }} {{ role.status ? "完成测评" : "进入测评" }}
        </div>
      </div>
    </main>
    <footer>
      <van-button type="info" @click="goReview">{{
        role.status ? "查看测评结果" : "立即测评"
      }}</van-button>
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
    goReview() {
      if (this.role.status) this.$goto("reviewAnswer");
      else this.$goto("reviewDesc");
    },
  },
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.history-item {
  background-color: #fff;
  border-radius: $main-radius;
  box-shadow: 0 0 10px -8px #000;
  padding: $main-padding;
  text-align: right;
  main {
    display: flex;
    gap: $main-gap;
    .van-image {
      flex: 4;
    }
    .info {
      display: flex;
      flex-direction: column;
      flex: 6;
      justify-content: space-between;
      gap: 30px;
      .title {
        text-align: left;
      }
      .date {
        font-size: $desc-font-size;
        color: #6c6c6c;
      }
    }
  }
  footer {
    padding: 20px 10px 10px;
    .van-button {
      width: 8.5em;
      height: 2.5em;
      border-radius: 5px;
    }
  }
}
</style>
