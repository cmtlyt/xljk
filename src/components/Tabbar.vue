<template>
  <div class="tabbar">
    <van-tabbar v-model="activeTabbat" z-index="100" placeholder>
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
      activeTabbat: "index",
      tabbarRole: [
        { name: "index", icon: "home-o", label: "首页", to: "index" },
        { name: "book", icon: "newspaper-o", label: "深度好文", to: "book" },
        { name: "class", icon: "video-o", label: "在线课程", to: "class" },
        { name: "mine", icon: "contact", label: "我的", to: "mine" },
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
