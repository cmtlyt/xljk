<template>
  <div class="history-item" @click="goDesc">
    <main>
      <van-image
        fit="cover"
        :src="role.src || 'https://img01.yzcdn.cn/vant/cat.jpeg'"
      />
      <div class="content">
        <div class="title">{{ role.title }}</div>
        <div class="author">{{ role.author }}</div>
        <div class="date">阅读时间: {{ role.date }}</div>
      </div>
    </main>
  </div>
</template>

<script>
import { Image } from "vant";
export default {
  components: {
    [Image.name]: Image,
  },
  props: ["role"],
  data() {
    return {};
  },
  methods: {
    goDesc() {
      this.$goto("classDesc");
    },
  },
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.history-item {
  padding: $main-padding;
  background-color: #fff;
  border-radius: $main-radius;
  main {
    display: flex;
    gap: $main-gap;
    .van-image {
      flex: 3;
    }
    .content {
      flex: 7;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;
      text-align: left;
      .title {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        overflow: hidden;
        height: 1.5em;
        font-size: $title-font-size;
      }
      .author,
      .date {
        font-size: $desc-font-size;
        color: #7f7f7f;
      }
    }
  }
}
</style>
