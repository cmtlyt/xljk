<template>
  <div class="navbar">
    <div v-if="role.type == 'search'" class="search-navbar">
      <van-icon v-if="role.leftArrow" name="arrow-left" />
      <van-search v-model="searchValue" placeholder="请输入搜索关键词" />
      <van-icon
        v-if="role.rightArrow ?? true"
        name="chat"
        :badge="role.messageTotal ?? ''"
        @click="$goto('/messageList')"
      />
    </div>
    <van-nav-bar
      v-else
      :title="role.title"
      :left-text="role.leftText || ''"
      :right-text="role.rightText || ''"
      :left-arrow="role.leftArrow ?? true"
      @click-left="onClickLeft"
      @click-right="onClickRight(role.rightProp)"
    >
      <template #right><slot name="right"></slot></template>
    </van-nav-bar>
  </div>
</template>

<script>
import { NavBar, Search, Icon } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Search.name]: Search,
    [Icon.name]: Icon,
  },
  props: ["role"],
  data() {
    return {
      searchValue: "",
    };
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
  ::v-deep(.van-nav-bar__title) {
    font-size: $title-font-size;
  }
  ::v-deep(.van-nav-bar__right):has(.van-icon) {
    font-size: 1.5em;
  }
  .search-navbar {
    display: flex;
    align-items: center;
    gap: $main-gap;
    padding: 0 10px;
    .van-search {
      margin: 0;
      padding: 10px 0;
      flex: 1;
    }
    .van-icon {
      font-size: 1.5em;
    }
  }
}
</style>
