<template>
  <div class="class">
    <cmtlyt-navbar :role="navbarRole">
      <template #right>
        <van-icon
          name="chat"
          :badge="messageTotal ?? ''"
          @click="$goto('/messageList')"
        />
      </template>
    </cmtlyt-navbar>
    <header>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, idx) in images" :key="idx">
          <img :src="item" />
        </van-swipe-item>
      </van-swipe>
    </header>
    <div class="content">
      <van-tabs v-model="activeTab" color="#0283fe">
        <van-tab
          v-for="(item, idx) in tabList"
          :key="idx"
          :name="item.name"
          :title="item.label || item.name"
        >
          <class-item
            v-for="(role, idx) in item.list"
            :key="idx"
            :role="role"
          ></class-item>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
import ClassItem from "./components/Item.vue";
import { Icon, Tabs, Tab, Swipe, SwipeItem } from "vant";
export default {
  components: {
    CmtlytNavbar,
    [Icon.name]: Icon,
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    ClassItem,
  },
  props: [],
  data() {
    return {
      navbarRole: { type: "search" },
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
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
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
.class {
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .van-swipe {
      border-radius: $main-radius;
      .van-swipe-item {
        img {
          width: 100%;
          height: 20rem;
        }
      }
    }
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    .van-tabs {
      flex: 1;
      ::v-deep(.van-tabs__nav) {
        background-color: transparent;
      }
      ::v-deep(.van-tab--active) {
        color: $main-color;
      }
      ::v-deep(.van-tabs__line) {
        bottom: 20px;
      }
      ::v-deep(.van-tabs__content) {
        padding: $main-padding;
        .van-tab__pane {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: $main-gap;
          .class-item {
            width: 50%;
          }
        }
      }
    }
  }
}
</style>
