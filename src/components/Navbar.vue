<template>
  <div class="navbar">
    <van-nav-bar
      :title="role.title"
      :left-text="role.leftText || ''"
      :right-text="role.rightText || ''"
      :left-arrow="role.leftArrow ?? true"
      @click-left="onClickLeft"
      @click-right="onClickRight(role.rightProp)"
    >
      <slot></slot>
    </van-nav-bar>
  </div>
</template>

<script>
import { NavBar } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
  },
  props: ["role"],
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClickRight(prop) {
      this.$emit(prop);
    },
  },
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fff;
}
</style>
