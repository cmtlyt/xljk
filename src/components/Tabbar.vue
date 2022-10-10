<template>
  <div class="tabbar">
    <van-tabbar
      v-model="activeTabbat"
      z-index="100"
      route
      placeholder
      active-color="#0283fe"
    >
      <van-tabbar-item
        v-for="(item, idx) in tabbarRole"
        :key="idx"
        :to="item.to"
        :name="item.name"
        :icon="item.icon"
        >{{ item.label }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  props: [],
  data() {
    return {
      activeTabbat: "",
      tabbarRole: [
        { name: "index", icon: "home-o", label: "首页", to: "" },
        { name: "book", icon: "newspaper-o", label: "深度好文", to: "" },
        { name: "class", icon: "video-o", label: "在线课程", to: "" },
        { name: "mine", icon: "contact", label: "我的", to: "" },
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
</style>
