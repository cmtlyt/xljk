<template>
  <div class="review-desc">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <main>
      <div class="content">
        <div class="title">{{ title }}</div>
        <div class="info">
          <div class="total">共{{ total }}道题</div>
          <div class="finish-total">{{ finishTotal }}人已测</div>
        </div>
        <van-image
          fit="cover"
          round
          :src="src || 'https://img01.yzcdn.cn/vant/cat.jpeg'"
        />
        <div class="desc">{{ desc }}</div>
      </div>
    </main>
    <footer>
      <van-button type="info" @click="goStart">开始测试</van-button>
    </footer>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
import { Image, Button } from "vant";
export default {
  components: {
    [Image.name]: Image,
    [Button.name]: Button,
    CmtlytNavbar,
  },
  props: [],
  data() {
    return {
      navbarRole: { title: "心理测试" },
      title: "疲劳测试",
      total: 24,
      finishTotal: 121,
      desc: "疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的疲劳测试是测试疲劳的",
      src: "",
    };
  },
  methods: {
    goStart() {
      this.$goto("reviewSubject");
    },
  },
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.review-desc {
  display: flex;
  flex-direction: column;
  main {
    padding: $main-padding;
    .content {
      padding: 20px 10px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      background-color: #fff;
      border-radius: $main-radius;
    }
    .title {
      font-size: $title-font-size;
    }
    .info {
      display: flex;
      justify-content: space-between;
      color: #8b8d8b;
      font-size: $desc-font-size;
    }
    .van-image {
      border-radius: 5px;
      height: 15rem;
    }
    .desc {
      text-align: left;
    }
  }
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5em;
    background-color: #fff;
    .van-button {
      width: 70vw;
      height: 2.7em;
      border-radius: 50px;
    }
  }
}
</style>
