<template>
  <div class="answer-my">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <main>
      <my-item
        v-for="(item, idx) in MyAnswerList"
        :key="idx"
        :role="item"
      ></my-item>
    </main>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
import MyItem from "./components/Answer/MyItem.vue";
export default {
  components: {
    CmtlytNavbar,
    MyItem,
  },
  props: [],
  data() {
    return {
      navbarRole: { title: "我的答疑" },
      MyAnswerList: [
        {
          title: "请问张老师,感觉到有焦虑情绪时怎么缓解?",
          status: false,
          query: "张三",
          answer: "张老师",
          limit: "不公开",
          date: "2022-09-23 09:08",
          answerTotal: 1,
        },
        {
          title: "请问张老师,感觉到有焦虑情绪时怎么缓解?",
          status: true,
          query: "张三",
          answer: "张老师",
          limit: "公开",
          date: "2022-09-23 09:08",
          answerTotal: 5,
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
.answer-my {
  main {
    padding: $main-padding;
    display: flex;
    flex-direction: column;
    gap: $main-gap;
  }
}
</style>
