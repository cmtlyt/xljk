<template>
  <div class="book">
    <cmtlyt-navbar :role="navbarRole">
      <template #right>
        <van-icon
          name="chat"
          :badge="messageTotal ?? ''"
          @click="$goto('/messageList')"
        />
      </template>
    </cmtlyt-navbar>
    <div class="content">
      <van-tabs v-model="activeTab" color="#0283fe" swipeable>
        <van-tab
          v-for="(item, idx) in tabList"
          :key="idx"
          :name="item.name"
          :title="item.label || item.name"
        >
          <book-item
            v-for="(role, idx) in item.list"
            :key="idx"
            :role="role"
          ></book-item>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
import BookItem from "./components/Item.vue";
import { Icon, Tabs, Tab } from "vant";
export default {
  components: {
    CmtlytNavbar,
    [Icon.name]: Icon,
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    BookItem,
  },
  props: [],
  data() {
    return {
      navbarRole: { title: "主题阅读", leftArrow: false },
      messageTotal: "3",
      activeTab: "",
      tabList: [
        {
          name: "人际关系",
          label: "",
          list: [
            {
              title: "到底什么样的关系,才算是健康的人际关系?",
              author: "张三",
              readTotal: "1211",
            },
            {
              title: "到底什么样的关系,才算是健康的人际关系?",
              author: "张三",
              readTotal: "1211",
            },
            {
              title: "到底什么样的关系,才算是健康的人际关系?",
              author: "张三",
              readTotal: "1211",
            },
            {
              title: "到底什么样的关系,才算是健康的人际关系?",
              author: "张三",
              readTotal: "1211",
            },
          ],
        },
        {
          name: "心理解读",
          label: "",
          list: [
            {
              title: "到底什么样的关系,才算是健康的人际关系?",
              author: "张三",
              readTotal: "1211",
            },
            {
              title: "到底什么样的关系,才算是健康的人际关系?",
              author: "张三",
              readTotal: "1211",
            },
            {
              title: "到底什么样的关系,才算是健康的人际关系?",
              author: "张三",
              readTotal: "1211",
            },
            {
              title: "到底什么样的关系,才算是健康的人际关系?",
              author: "张三",
              readTotal: "1211",
            },
          ],
        },
        {
          name: "情绪调解",
          label: "",
          list: [
            {
              title: "到底什么样的关系,才算是健康的人际关系?",
              author: "张三",
              readTotal: "1211",
            },
            {
              title: "到底什么样的关系,才算是健康的人际关系?",
              author: "张三",
              readTotal: "1211",
            },
            {
              title: "到底什么样的关系,才算是健康的人际关系?",
              author: "张三",
              readTotal: "1211",
            },
            {
              title: "到底什么样的关系,才算是健康的人际关系?",
              author: "张三",
              readTotal: "1211",
            },
          ],
        },
        {
          name: "个人成长",
          label: "",
          list: [
            {
              title: "到底什么样的关系,才算是健康的人际关系?",
              author: "张三",
              readTotal: "1211",
            },
            {
              title: "到底什么样的关系,才算是健康的人际关系?",
              author: "张三",
              readTotal: "1211",
            },
            {
              title: "到底什么样的关系,才算是健康的人际关系?",
              author: "张三",
              readTotal: "1211",
            },
            {
              title: "到底什么样的关系,才算是健康的人际关系?",
              author: "张三",
              readTotal: "1211",
            },
          ],
        },
        {
          name: "学业解剖",
          label: "",
          list: [
            {
              title: "到底什么样的关系,才算是健康的人际关系?",
              author: "张三",
              readTotal: "1211",
            },
            {
              title: "到底什么样的关系,才算是健康的人际关系?",
              author: "张三",
              readTotal: "1211",
            },
            {
              title: "到底什么样的关系,才算是健康的人际关系?",
              author: "张三",
              readTotal: "1211",
            },
            {
              title: "到底什么样的关系,才算是健康的人际关系?",
              author: "张三",
              readTotal: "1211",
            },
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
.book {
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    .van-tabs {
      flex: 1;
      background-color: #fff;
      ::v-deep(.van-tabs__nav) {
        background-color: #f4f4f4;
      }
      ::v-deep(.van-tab--active) {
        color: $main-color;
      }
      ::v-deep(.van-tabs__line){
        bottom: 20px;
      }
    }
    .history-item + .history-item {
      border-top: #00000010 solid 1px;
    }
  }
}
</style>
