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
          <van-icon name="clock-o" />
          <div class="time">{{ role.time }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { Image, Icon } from "vant";
export default {
  components: {
    [Image.name]: Image,
    [Icon.name]: Icon,
  },
  props: ["role"],
  data() {
    return {};
  },
  methods: {
    goDesc() {
      this.$goto("relaxDesc");
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
  main {
    display: flex;
    flex-direction: column;
    .van-image {
      flex: 3;
    }
    .content {
      padding: $main-padding 0;
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
        font-size: $desc-font-size;
        text-align: left;
      }
      .info {
        display: flex;
        align-items: center;
        font-size: $desc-font-size;
        gap: $main-gap;
        color: #7f7f7f;
        .van-icon {
          font-size: $text-font-size;
          color: #000;
        }
      }
    }
  }
}
</style>
