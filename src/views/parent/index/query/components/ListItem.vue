<template>
  <div class="desc-item" @click="$goto('./queryDesc')">
    <header>
      <div class="title">{{ role.title }}</div>
      <div class="user">
        <van-image
          round
          fit="cover"
          width="25"
          height="25"
          :src="role.src || 'https://img01.yzcdn.cn/vant/cat.jpeg'"
        /><span>{{ role.name }}</span>
      </div>
    </header>
    <main>
      <div class="content">
        {{ role.content }}
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
  gap: 1rem;
  padding: 2rem;
  background-color: #fff;
  header {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      font-size: $title-font-size;
      height: 1.5em;
    }
    .user {
      display: flex;
      align-items: center;
      gap: $main-gap;
      font-size: $desc-font-size;
    }
  }
  main {
    .content {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      line-height: 2em;
      font-size: $desc-font-size;
      height: 8em;
      text-align: left;
    }
  }
}
</style>
