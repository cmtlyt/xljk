<template>
  <div class="class">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
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
      navbarRole: { title: "放松解压" },
      messageTotal: "3",
      activeTab: "",
      tabList: [
        {
          name: "正念冥想",
          label: "",
          list: [
            {
              title: "深睡眠引导",
              time: "20:25",
            },
            {
              title: "焦虑失眠",
              time: "15:36",
            },
            {
              title: "压力失眠",
              time: "20:25",
            },
            {
              title: "助眠冥想",
              time: "15:36",
            },
          ],
        },
        {
          name: "睡眠调整",
          label: "",
          list: [
            {
              title: "深睡眠引导",
              time: "20:25",
            },
            {
              title: "焦虑失眠",
              time: "15:36",
            },
            {
              title: "压力失眠",
              time: "20:25",
            },
            {
              title: "助眠冥想",
              time: "15:36",
            },
          ],
        },
        {
          name: "呼吸训练",
          label: "",
          list: [
            {
              title: "深睡眠引导",
              time: "20:25",
            },
            {
              title: "焦虑失眠",
              time: "15:36",
            },
            {
              title: "压力失眠",
              time: "20:25",
            },
            {
              title: "助眠冥想",
              time: "15:36",
            },
          ],
        },
        {
          name: "减压音频",
          label: "",
          list: [
            {
              title: "深睡眠引导",
              time: "20:25",
            },
            {
              title: "焦虑失眠",
              time: "15:36",
            },
            {
              title: "压力失眠",
              time: "20:25",
            },
            {
              title: "助眠冥想",
              time: "15:36",
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
      background-color: #fff;
      ::v-deep(.van-tabs__nav) {
        background-color: #f4f4f4;
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
