<template>
  <div class="answer">
    <cmtlyt-navbar :role="navbarRole" @submit="submit"></cmtlyt-navbar>
    <main>
      <header>{{ title }}</header>
      <main>
        <textarea v-model="answer" placeholder="写回答"></textarea>
      </main>
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
      navbarRole: { title: "我来回答", rightText: "发布", rightProp: "submit" },
      answer: "",
      title: "总是莫名其妙不开心,有抑郁情绪怎么办?",
    };
  },
  methods: {
    submit() {
      console.log(this.answer);
      this.$goto("/answerList");
    },
  },
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.answer {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
  ::v-deep(.van-nav-bar__text) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5em;
    height: 1.5em;
    background-color: $main-color;
    color: #fff;
    border-radius: 5px;
  }
  main {
    box-sizing: border-box;
    padding: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    header {
      padding-bottom: 2rem;
      font-size: $big-title-font-size;
      text-align: left;
      border-bottom: #e4e4e4 solid 1.5px;
    }
    main {
      flex: 1;
      padding: 2rem 0;
      display: flex;
      flex-direction: column;
      height: 100%;
      textarea {
        margin: 0;
        padding: 0;
        flex: 1;
        text-align: left;
        width: 100%;
        height: 10rem;
        border: none;
        outline: none;
      }
    }
  }
}
</style>
