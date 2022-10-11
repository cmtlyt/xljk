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
      username: "张老师",
      messageTotal: "",
      gridList: [
        { text: "咨询预约设置", icon: "chat-o", to: "evanuateSetting" },
        { text: "预约记录", icon: "todo-list-o", to: "bookingHistory" },
        { text: "心理答疑", icon: "question-o", to: "answerList" },
        { text: "我的答疑", icon: "comment-o", to: "answerMy" },
        { text: "我的咨询评价", icon: "passed", to: "evanuateList" },
        { text: "个人信息设置", icon: "user-circle-o", to: "infoSetting" },
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
  min-height: 100vh;
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
