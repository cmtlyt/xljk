<template>
  <div class="book-desc">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <div class="content">
      <header>
        <div class="title">{{ title }}</div>
        <div class="info">
          <div class="author">作者: {{ author }}</div>
          <div class="date">{{ date }}</div>
        </div>
      </header>
      <main>{{ content }}</main>
      <footer>
        <div class="tools">
          <div class="share" @click="share"><van-icon name="share-o" /></div>
          <div class="star" @click="star">
            <van-icon name="star-o" />{{ starTotal }}
          </div>
          <div class="like" @click="like">
            <van-icon name="like-o" />{{ likeTotal }}
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
import { Icon } from "vant";
export default {
  components: {
    CmtlytNavbar,
    [Icon.name]: Icon,
  },
  props: [],
  data() {
    return {
      navbarRole: { title: "文章详情" },
      title: "到底什么样的关系,才算是健康的人际关系?",
      author: "张三",
      date: "2022-09-26",
      starTotal: 200,
      likeTotal: 121,
      content:
        "文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容",
    };
  },
  methods: {
    share() {
      console.log("share");
    },
    star() {
      console.log("star");
    },
    like() {
      console.log("like");
    },
  },
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.book-desc {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  .content {
    padding: $main-padding;
  }
  header {
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 5px;
    .title {
      font-size: $title-font-size;
    }
    .info {
      display: flex;
      gap: 3rem;
      color: #9a9a9a;
      font-size: $desc-font-size;
    }
  }
  main {
    text-align: left;
    line-height: 2.5em;
    font-size: $text-font-size;
  }
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 4rem;
    .tools {
      display: flex;
      justify-content: space-around;
      height: 100%;
      font-size: $desc-font-size;
      border-top: #00000030 solid 1px;
      & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        flex: 1;
      }
      .van-icon {
        font-size: 1.5em;
      }
    }
  }
}
</style>
