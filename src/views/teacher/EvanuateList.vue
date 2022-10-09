<template>
  <div class="evanuate-list">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <main>
      <list-item
        v-for="(item, idx) in evanuateList"
        :key="idx"
        :role="item"
      ></list-item>
    </main>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
import ListItem from "./components/Evanuate/ListItem.vue";
export default {
  components: {
    ListItem,
    CmtlytNavbar,
  },
  props: [],
  data() {
    return {
      navbarRole: { title: "咨询评价" },
      evanuateList: [
        {
          name: "匿名",
          src: "",
          grade: 5,
          date: "2022-09-22",
          content:
            "评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好",
          answerContent: "",
        },{
          name: "匿名",
          src: "",
          grade: 5,
          date: "2022-09-22",
          content:
            "评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好",
          answerContent: "谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢",
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
.evanuate-list {
  main {
    padding: $main-padding;
    display: flex;
    gap: $main-gap;
    flex-direction: column;
  }
}
</style>
