<template>
  <div class="desc-item">
    <header>
      <div class="user">
        <van-image
          round
          fit="cover"
          width="40"
          height="40"
          :src="role.src || 'https://img01.yzcdn.cn/vant/cat.jpeg'"
        /><span>{{ role.name }}</span>
      </div>
      <div class="time">{{ role.time }}</div>
    </header>
    <main>
      <div class="content" :class="{ 'show-all': showAllFlag }">
        {{ role.content }}
      </div>
      <div v-if="!showAllFlag" class="show-all-btn" @click="showAll">
        查看全部
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
    return {
      showAllFlag: false,
    };
  },
  methods: {
    showAll() {
      this.showAllFlag = true;
    },
  },
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.desc-item {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background-color: #fff;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .user {
      display: flex;
      align-items: center;
      gap: $main-gap;
      font-size: $desc-font-size;
    }
    .time {
      font-size: $desc-font-size;
      color: #9a9aa7;
    }
  }
  main {
    .content {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 8;
      line-height: 2em;
      font-size: $desc-font-size;
      height: 16em;
      text-align: left;
      &.show-all {
        height: unset;
        display: block;
      }
    }
    .show-all-btn {
      font-size: $desc-font-size;
      color: $main-color;
    }
  }
}
</style>
