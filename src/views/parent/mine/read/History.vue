<template>
  <div class="query-history">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <main>
      <my-item
        v-for="(item, idx) in MyReadList"
        :key="idx"
        :role="item"
      ></my-item>
    </main>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
import MyItem from "./components/HistoryItem.vue";
export default {
  components: {
    CmtlytNavbar,
    MyItem,
  },
  props: [],
  data() {
    return {
      navbarRole: { title: "阅读记录" },
      MyReadList: [
        {
          title: "到底是什么样的关系,才算是健康的人际关系?",
          date: "2022-09-23 10:26",
          src: "",
        },
        {
          title: "到底是什么样的关系,才算是健康的人际关系?",
          date: "2022-09-23 10:26",
          src: "",
        },
        {
          title: "到底是什么样的关系,才算是健康的人际关系?",
          date: "2022-09-23 10:26",
          src: "",
        },
        {
          title: "到底是什么样的关系,才算是健康的人际关系?",
          date: "2022-09-23 10:26",
          src: "",
        },
        {
          title: "到底是什么样的关系,才算是健康的人际关系?",
          date: "2022-09-23 10:26",
          src: "",
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
.query-history {
  height: 100%;
  main {
    padding: $main-padding;
    display: flex;
    flex-direction: column;
    gap: $main-gap;
  }
}
</style>
