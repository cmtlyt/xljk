<template>
  <div class="relax-desc">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <main>
      <van-icon name="play-circle" />
    </main>
    <footer>
      <div class="current">{{ current }}</div>
      <van-progress :percentage="percentage" :show-pivot="false" />
      <div class="total">{{ total }}</div>
    </footer>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
import { Icon, Progress } from "vant";
export default {
  components: {
    CmtlytNavbar,
    [Icon.name]: Icon,
    [Progress.name]: Progress,
  },
  props: [],
  data() {
    return {
      navbarRole: { title: "{{ 项目名 }}" },
      current: "02:05",
      total: "20:25",
    };
  },
  methods: {},
  computed: {
    percentage() {
      return 15;
    },
  },
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.relax-desc {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .navbar {
    width: 100%;
  }
  main {
    margin: 10rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: #00000030 solid 1px;
    border-radius: 50%;
    width: 70vw;
    height: 70vw;
    .van-icon {
      font-size: 10rem;
    }
  }
  footer {
    padding: 0 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    color: #756c6c;
    .van-progress {
      flex: 1;
    }
  }
}
</style>
