<template>
  <div class="query">
    <cmtlyt-navbar :role="navbarRole" @query="query"></cmtlyt-navbar>
    <main>
      <list-item
        v-for="(item, idx) in queryList"
        :key="idx"
        :role="item"
      ></list-item>
    </main>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
import ListItem from "./components/ListItem.vue";
export default {
  components: {
    CmtlytNavbar,
    ListItem,
  },
  props: [],
  data() {
    return {
      navbarRole: {
        title: "心理答疑",
        rightText: "我要提问",
        rightProp: "query",
      },
      queryList: [
        {
          title: "总是莫名其妙不开心,有抑郁情绪怎么办?",
          content:
            "同学你好,问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案",
          name: "赵老师",
          src: "",
        },
        {
          title: "总是莫名其妙不开心,有抑郁情绪怎么办?",
          content:
            "同学你好,问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案",
          name: "李老师",
          src: "",
        },
        {
          title: "总是莫名其妙不开心,有抑郁情绪怎么办?",
          content:
            "同学你好,问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案",
          name: "张老师",
          src: "",
        },
        {
          title: "总是莫名其妙不开心,有抑郁情绪怎么办?",
          content:
            "同学你好,问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案",
          name: "王老师",
          src: "",
        },
      ],
    };
  },
  methods: {
    query() {
      this.$goto("query");
    },
  },
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.query {
  display: flex;
  flex-direction: column;
  main {
    padding: $main-padding 0;
    display: flex;
    flex-direction: column;
    gap: $main-gap;
  }
}
</style>
