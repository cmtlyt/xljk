<template>
  <div class="query-desc">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <main>
      <header>
        <div class="title">
          <van-icon name="question" />
          <span>{{ title }}</span>
        </div>
        <div class="content">{{ content }}</div>
        <div class="tools">
          <div class="preview">{{ previewTotal }}预览</div>
          <div class="answer">{{ answerTotal }}回答</div>
          <div class="time">{{ time }}</div>
        </div>
      </header>
      <main>
        <desc-item
          v-for="(item, idx) in descList"
          :key="idx"
          :role="item"
        ></desc-item>
      </main>
    </main>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
import DescItem from "./components/DescItem.vue";
import { Icon, Button } from "vant";
export default {
  components: {
    [Icon.name]: Icon,
    [Button.name]: Button,
    CmtlytNavbar,
    DescItem,
  },
  props: [],
  data() {
    return {
      navbarRole: { title: "心理答疑" },
      title: "总是莫名其妙不开心,有抑郁情绪怎么办?",
      content:
        "问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述",
      previewTotal: 122,
      answerTotal: 2,
      time: "2小时前",
      descList: [
        {
          name: "赵老师",
          time: "1小时前",
          content:
            "同学你好,问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案",
        },
        {
          name: "李老师",
          time: "1小时前",
          content:
            "同学你好,问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案",
        },
      ],
    };
  },
  methods: {},
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.query-desc {
  main {
    padding: $main-padding 0;
    display: flex;
    flex-direction: column;
    gap: $main-gap;
    header {
      display: flex;
      flex-direction: column;
      padding: $main-padding;
      padding-bottom: 2rem;
      gap: 2rem;
      background-color: #fff;
      .title {
        font-size: $big-title-font-size;
        display: flex;
        text-align: left;
        align-items: center;
        gap: $main-gap;
        .van-icon {
          color: #ff7a45;
          font-size: 3em;
        }
      }
      .content {
        font-size: $desc-font-size;
        text-align: left;
        line-height: 2em;
      }
      .tools {
        color: #9a9aa7;
        font-size: $desc-font-size;
        display: flex;
        justify-content: space-between;
      }
    }
    main {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
  footer {
    position: sticky;
    bottom: 0;
    padding: $main-padding 3rem;
    background-color: #fff;
    .van-button {
      width: 100%;
    }
  }
}
</style>
