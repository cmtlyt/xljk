<template>
  <div class="booking-history">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <main>
      <my-item v-for="(item, idx) in hisList" :key="idx" :role="item"></my-item>
    </main>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
import MyItem from "./components/HistoryItem.vue";
export default {
  components: {
    CmtlytNavbar,
    MyItem,
  },
  props: [],
  data() {
    return {
      navbarRole: { title: "预约记录", leftArrow: true },
      hisList: [
        {
          name: "张三",
          status: "待咨询",
          date: "2022-09-23 16:25",
          info: [
            { label: "咨询人", value: "张三" },
            { label: "咨询老师", value: "张某某" },
            { label: "咨询方式", value: "面对面咨询" },
            { label: "咨询地址", value: "xx心理咨询室" },
            { label: "预约日期", value: "2022-09-05" },
            { label: "预约实践", value: "13:00-13:40" },
          ],
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
main {
  padding: $main-padding;
}
</style>
