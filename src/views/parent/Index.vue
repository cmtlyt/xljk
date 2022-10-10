<template>
  <div class="tab">
    <router-view></router-view>
    <cmtlyt-tabbar></cmtlyt-tabbar>
  </div>
</template>

<script>
import CmtlytTabbar from "@/components/Tabbar.vue";
export default {
  components: { CmtlytTabbar },
  props: [],
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  flex-direction: column;
  height: 100vh;
  div:nth-child(1) {
    flex: 1;
  }
}
</style>
