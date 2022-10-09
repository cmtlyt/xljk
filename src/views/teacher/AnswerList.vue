<template>
  <div class="answer-list">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <main>
      <answer-item
        v-for="(item, idx) in answerList"
        :key="idx"
        :role="item"
      ></answer-item>
    </main>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
import AnswerItem from "./components/Answer/ListItem.vue";
export default {
  components: { CmtlytNavbar, AnswerItem },
  props: [],
  data() {
    return {
      navbarRole: { title: "心理答疑" },
      answerList: [
        {
          title: "总是莫名其妙不开心,有抑郁情绪怎么办",
          name: "赵老师",
          content:
            "同学你好,问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案",
        },
        {
          title: "总是莫名其妙不开心,有抑郁情绪怎么办",
          name: "赵老师",
          content:
            "同学你好,问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案",
        },
        {
          title: "总是莫名其妙不开心,有抑郁情绪怎么办",
          name: "赵老师",
          content:
            "同学你好,问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案",
        },
        {
          title: "总是莫名其妙不开心,有抑郁情绪怎么办",
          name: "赵老师",
          content:
            "同学你好,问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案问题答案",
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
main {
  padding: $main-padding 0;
  display: flex;
  flex-direction: column;
  gap: $main-gap;
}
</style>
