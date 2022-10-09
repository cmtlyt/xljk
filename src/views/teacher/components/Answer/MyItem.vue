<template>
  <div class="my-item">
    <header>
      <div class="title">{{ role.title }}</div>
      <div class="status">{{ role.status | status }}</div>
    </header>
    <main>
      <ul>
        <li>
          <span class="label">提问人</span
          ><span class="value">{{ role.query }}</span>
        </li>
        <li>
          <span class="label">选择答疑人</span
          ><span class="value">{{ role.answer }}</span>
        </li>
        <li>
          <span class="label">权限</span
          ><span class="value">{{ role.limit }}</span>
        </li>
        <li>
          <span class="label">时间</span
          ><span class="value">{{ role.date }}</span>
        </li>
        <li>
          <span class="label">回答数</span
          ><span class="value">{{ role.answerTotal }}</span>
        </li>
      </ul>
    </main>
    <footer>
      <van-button type="info" @click="goAnswer">{{
        role.status ? "查看" : "去回答"
      }}</van-button>
    </footer>
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  components: {
    [Button.name]: Button,
  },
  props: ["role"],
  data() {
    return {};
  },
  methods: {
    goAnswer() {
      this.$goto("/answerDesc");
    },
  },
  computed: {},
  filters: {
    status(val) {
      if (val) return "已回答";
      else return "待回答";
    },
  },
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.my-item {
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px -8px #000;
  border-radius: $main-radius;
  header {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    .title {
      font-size: $title-font-size;
      text-align: left;
    }
    .status {
      font-size: $desc-font-size;
      color: $main-color;
      flex-basis: 5em;
    }
  }
  main {
    ul {
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
      li {
        display: flex;
        text-align: left;
        font-size: $desc-font-size;
        .label {
          flex: 3;
          color: #9a9a9a;
        }
        .value {
          flex: 7;
        }
      }
    }
  }
  footer {
    display: flex;
    justify-content: flex-end;
    .van-button {
      width: 7em;
      height: 2.5em;
      border-radius: 1rem;
    }
  }
}
</style>
