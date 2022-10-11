<template>
  <div class="comment-item">
    <header>
      <div class="user">
        <van-image
          round
          fit="cover"
          :src="role.src || 'https://img01.yzcdn.cn/vant/cat.jpeg'"
        />
        {{ role.name }}
      </div>
      <div class="info">
        <div class="date">{{ role.date }}</div>
        <div class="rate">
          <van-rate
            :value="role.rate"
            :size="12"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
          />
        </div>
      </div>
    </header>
    <main>{{ role.content }}</main>
  </div>
</template>

<script>
import { Rate, Image } from "vant";
export default {
  components: {
    [Rate.name]: Rate,
    [Image.name]: Image,
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
.comment-item {
  padding: 1.5rem;
  border-radius: $main-radius;
  box-shadow: 0 0 10px -7px #000;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user {
      display: flex;
      align-items: center;
      gap: $main-gap;
      .van-image {
        width: 3.5rem;
        height: 3.5rem;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: $small-font-size;
      align-items: flex-end;
      .date{
        color: #9a9a9d;
      }
    }
  }
  main {
    font-size: $small-font-size;
    text-align: left;
  }
}
</style>
