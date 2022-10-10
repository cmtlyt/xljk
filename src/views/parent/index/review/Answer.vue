<template>
  <div class="review-answer">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <div class="content">
      <header>
        <div class="date">{{ date }}</div>
        <div class="title">{{ title }}</div>
      </header>
      <main>{{ content }}</main>
    </div>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
export default {
  components: {
    CmtlytNavbar,
  },
  props: [],
  data() {
    return {
      navbarRole: { title: "测评报告" },
      date: "2022-09-22 15:25",
      title: "疲劳测试",
      content:
        "测评结果说明测评结果说明测评结果说明测评结果说明测评结果说明测评结果说明测评结果说明测评结果说明测评结果说明测评结果说明测评结果说明测评结果说明测评结果说明测评结果说明测评结果说明测评结果说明测评结果说明测评结果说明测评结果说明测评结果说明",
    };
  },
  methods: {},
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.review-answer {
  text-align: left;
  .content {
    padding: $main-padding;
    display: flex;
    flex-direction: column;
    gap: $main-gap;
    header {
      display: flex;
      flex-direction: column;
      gap: $main-gap;
      .date {
        font-size: $desc-font-size;
        color: #9a9ab1;
      }
      .title {
        font-size: $big-title-font-size;
      }
    }
    main {
      padding: 2rem $main-padding 7rem;
      line-height: 2em;
      background-color: #fff;
      border-radius: 5px;
    }
  }
}
</style>
