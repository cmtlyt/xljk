<template>
  <div class="booking">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <main>
      <list-item
        v-for="(item, idx) in teacherList"
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
        type: "search",
        leftArrow: true,
        placeholder: "搜索心理老师名字",
      },
      teacherList: [
        {
          name: "张某某",
          total: "154",
          authentication: "国家二级心理咨询师",
          fast: "今天15:00",
          type: "面/视/电咨询",
          tags: ["情绪管理", "个人成长", "人际关系"],
        },
        {
          name: "张某某",
          total: "154",
          authentication: "国家二级心理咨询师",
          fast: "今天15:00",
          type: "面/视咨询",
          tags: ["情绪管理", "个人成长", "人际关系"],
        },
        {
          name: "张某某",
          total: "154",
          authentication: "国家二级心理咨询师",
          fast: "今天15:00",
          type: "面对面咨询",
          tags: ["情绪管理", "个人成长", "人际关系"],
        },
        {
          name: "张某某",
          total: "154",
          authentication: "国家二级心理咨询师",
          fast: "今天15:00",
          type: "面/视/电咨询",
          tags: ["情绪管理", "个人成长", "人际关系"],
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
.booking {
  main {
    padding: $main-padding;
    display: flex;
    flex-direction: column;
    gap: $main-gap;
  }
}
</style>
