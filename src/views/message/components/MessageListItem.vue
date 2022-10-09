<template>
  <div class="message-list-item" @click="handelClick">
    <div class="avatar">
      <van-image
        width="40"
        height="40"
        fit="cover"
        :src="role.src || 'https://img01.yzcdn.cn/vant/cat.jpeg'"
      />
    </div>
    <div class="content">
      <div class="name-box">
        <div class="name">{{ role.name }}</div>
        <div class="date">{{ role.date }}</div>
      </div>
      <div class="desc">{{ role.desc }}</div>
    </div>
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
    handelClick() {
      this.$goto("/messageDesc");
    },
  },
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.message-list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.3rem 1rem;
  background-color: #fff;
  gap: $main-gap;
  .avatar {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .van-image {
    border: #f4f4f4 solid 1px;
    border-radius: 10px;
    overflow: hidden;
  }
  .content {
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #a0a2a0;
    .name-box {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .name {
        color: #000;
      }
      .date {
        font-size: $small-font-size;
      }
    }
    .desc {
      font-size: $desc-font-size;
    }
  }
}
</style>
