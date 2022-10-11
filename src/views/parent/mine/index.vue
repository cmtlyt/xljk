<template>
  <div class="index">
    <header>
      <div class="userinfo">
        <van-image
          round
          fit="cover"
          width="50"
          height="50"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <span>HI, {{ username }}</span>
      </div>
      <div class="messages">
        <van-icon
          name="chat"
          :badge="messageTotal"
          @click="$goto('/messageList')"
        />
      </div>
    </header>
    <main>
      <van-grid :border="false">
        <van-grid-item
          v-for="(item, idx) in gridList"
          :key="idx"
          :text="item.text"
          :icon="item.icon"
          :to="item.to"
        ></van-grid-item>
      </van-grid>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Button, Image, Icon, Grid, GridItem } from "vant";
export default {
  components: {
    [Button.name]: Button,
    [Image.name]: Image,
    [Icon.name]: Icon,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
  },
  props: [],
  data() {
    return {
      username: "15858340088",
      messageTotal: "",
      gridList: [
        { text: "预约记录", icon: "todo-list-o", to: "../bookingHistory" },
        { text: "问答记录", icon: "question-o", to: "../queryHistory" },
        { text: "测评记录", icon: "records", to: "../reviewHistory" },
        { text: "阅读记录", icon: "newspaper-o", to: "../readHistory" },
        { text: "观看记录", icon: "video-o", to: "../watchHistory" },
        { text: "个人信息", icon: "user-circle-o", to: "" },
      ],
    };
  },
  methods: {
    handleClick() {
      this.$store.dispatch("user/getInfo");
    },
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  flex-direction: column;
  background-color: $main-color;
  header {
    padding: 6rem 4rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .userinfo {
      display: flex;
      align-items: center;
      gap: $main-gap;
      span {
        font-size: $text-font-size;
        font-weight: 700;
      }
    }
    .messages {
      position: absolute;
      top: 1.5rem;
      right: 2rem;
      font-size: 2.5rem;
    }
  }
  main {
    padding: 3rem 0;
    box-sizing: border-box;
    background-color: #fff;
    flex: 1;
    border-radius: 3rem 3rem 0 0;
    ::v-deep(.van-icon) {
      color: $main-color;
      font-size: 4rem;
    }
  }
}
</style>
