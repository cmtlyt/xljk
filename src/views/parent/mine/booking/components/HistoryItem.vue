<template>
  <div class="booking-history-item">
    <header>
      <div class="userinfo">
        <van-image
          round
          fit="cover"
          width="5.5rem"
          height="5.5rem"
          :src="role.src || 'https://img01.yzcdn.cn/vant/cat.jpeg'"
        /><span>{{ role.name }}</span>
      </div>
      <div class="info">
        <div class="status">{{ role.status }}</div>
        <div class="date">{{ role.date }}</div>
      </div>
    </header>
    <main>
      <div class="infolist">
        <ul>
          <li v-for="(item, idx) in role.info" :key="idx">
            <span class="label">{{ item.label }}</span>
            <span class="value">{{ item.value }}</span>
          </li>
        </ul>
      </div>
    </main>
    <footer>
      <div class="btns">
        <van-button type="info" @click="cancel">取消预约</van-button>
        <van-button type="info" @click="finish">评价</van-button>
      </div>
    </footer>
  </div>
</template>

<script>
import { Image, Button } from "vant";
export default {
  components: {
    [Image.name]: Image,
    [Button.name]: Button,
  },
  props: ["role"],
  data() {
    return {};
  },
  methods: {
    cancel() {
      console.log("取消");
    },
    finish() {
      console.log("评价");
    },
  },
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.booking-history-item {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  border-radius: $main-radius;
  box-shadow: 0 0 10px -6px #000;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .userinfo {
      display: flex;
      align-items: center;
      gap: $main-gap;
      font-size: $title-font-size;
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: $main-gap;
      font-size: $desc-font-size;
      align-items: flex-end;
      .status {
        color: $main-color;
      }
    }
  }
  main {
    ul {
      padding-top: $main-padding;
      width: 100%;
      li {
        width: 100%;
        padding: $main-padding 0;
        display: flex;
        align-items: center;
        text-align: left;
        font-size: $desc-font-size;
        .label {
          flex: 3;
          color: #a0a09d;
        }
        .value {
          flex: 7;
        }
      }
    }
  }
  footer .btns {
    padding-top: $main-padding;
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    .van-button {
      border-radius: $main-radius;
      width: 7em;
      height: 2.5em;
    }
  }
}
</style>
