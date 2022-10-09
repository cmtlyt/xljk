<template>
  <div class="message-desc">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <main></main>
    <footer>
      <input type="text" v-model="message" @keypress.enter="sendMessage" />
      <button @click="sendMessage">发送</button>
    </footer>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
export default {
  components: {
    CmtlytNavbar,
  },
  props: [],
  data() {
    return {
      navbarRole: { title: "{{用户名}}", leftArrow: true },
      message: "",
    };
  },
  methods: {
    sendMessage() {
      console.log(this.message);
      this.message = "";
    },
  },
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.message-desc {
  display: flex;
  flex-direction: column;
  height: 100vh;
  main {
    flex: 1;
    background-color: #fff;
  }
  footer {
    padding: $main-padding 2rem;
    display: flex;
    gap: $main-gap;
    input {
      flex: 1;
      outline: none;
      border-radius: $main-radius;
      border: none;
      height: 2em;
      background-color: #fff;
    }
    button {
      background-color: #fff;
      border: #00000044 solid 1px;
      height: 100%;
      border-radius: 5px;
      width: 4em;
    }
  }
}
</style>
