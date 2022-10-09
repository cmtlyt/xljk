<template>
  <div class="message-list">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <main>
      <message-list-item
        v-for="(item, idx) in messageList"
        :key="idx"
        :role="item"
      ></message-list-item>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MessageListItem from "./components/MessageListItem.vue";
export default {
  components: {
    CmtlytNavbar: Navbar,
    MessageListItem,
  },
  props: [],
  data() {
    return {
      navbarRole: { title: "消息列表", leftArrow: true },
      messageList: [
        {
          name: "张三",
          date: "9月25日",
          desc: "张老师,你明天下午亮点是在xx心理咨询室吗",
        },
        { name: "李四", date: "9月25日", desc: "好的" },
        { name: "王五", date: "9月25日", desc: "好的" },
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
.message-list {
  main {
    padding: 10px 0;
  }
}
</style>
