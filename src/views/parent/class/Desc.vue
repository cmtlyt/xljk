<template>
  <div class="class-desc">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <header>
      <div class="video"></div>
    </header>
    <main>
      <div class="title">{{ title }}</div>
      <div class="content">{{ content }}</div>
    </main>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
export default {
  components: { CmtlytNavbar },
  props: [],
  data() {
    return {
      navbarRole: { title: "课程详情" },
      title: "如何缓解情绪焦虑",
      content:
        "课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍课程详细介绍",
    };
  },
  methods: {},
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.class-desc {
  background-color: #fff;
  text-align: left;
  header {
    .video {
      height: 24rem;
      background-color: pink;
    }
  }
  main {
    padding: 20px;
    .title {
      padding: 10px 0 30px;
      font-size: $title-font-size;
    }
    .content {
      font-size: $desc-font-size;
      color: #6c6c6c;
      line-height: 2em;
    }
  }
}
</style>
