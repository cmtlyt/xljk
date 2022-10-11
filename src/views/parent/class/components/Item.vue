<template>
  <div class="history-item" @click="goDesc">
    <main>
      <van-image
        fit="cover"
        :src="role.src || 'https://img01.yzcdn.cn/vant/cat.jpeg'"
      />
      <div class="content">
        <div class="title">{{ role.title }}</div>
        <div class="info">
          <div class="author">{{ role.author }}</div>
          <div class="readTotal">{{ role.readTotal }}人阅读</div>
        </div>
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
      this.$goto("../classDesc");
    },
  },
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.history-item {
  border-radius: $main-radius;
  overflow: hidden;
  background-color: #fff;
  main {
    display: flex;
    flex-direction: column;
    .van-image {
      flex: 3;
    }
    .content {
      padding: $main-padding;
      flex: 7;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: $main-gap;
      .title {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        overflow: hidden;
        height: 1.5em;
        font-size: $text-font-size;
        text-align: left;
      }
      .info {
        display: flex;
        justify-content: space-between;
        font-size: $desc-font-size;
        color: #7f7f7f;
      }
    }
  }
}
</style>
