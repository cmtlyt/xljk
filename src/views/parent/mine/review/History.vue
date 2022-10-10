<template>
  <div class="query-history">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <main>
      <van-tabs
        v-model="activeTab"
        color="#0283fe"
        background="transparent"
        animated
        swipeable
      >
        <van-tab title="测评报告" name="finish">
          <my-item
            v-for="(item, idx) in MyReadList"
            :key="idx"
            :role="{ status: true, ...item }"
          ></my-item>
        </van-tab>
        <van-tab title="未完成测评" name="unfinish">
          <my-item
            v-for="(item, idx) in MyReadList"
            :key="idx"
            :role="item"
          ></my-item>
        </van-tab>
      </van-tabs>
    </main>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
import MyItem from "./components/HistoryItem.vue";
import { Tab, Tabs } from "vant";
export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    CmtlytNavbar,
    MyItem,
  },
  props: [],
  data() {
    return {
      navbarRole: { title: "我的测评" },
      activeTab: "finish",
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
    ::v-deep(.van-tab) {
      flex: unset;
      width: 7em;
      &.van-tab--active {
        color: $main-color;
      }
    }
    ::v-deep(.van-tab__pane) {
      display: flex;
      flex-direction: column;
      gap: $main-gap;
      padding: 10px 0;
    }
  }
}
</style>
