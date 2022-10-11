<template>
  <div class="review">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <main>
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="(item, idx) in sideList"
          :key="idx"
          :title="item"
          color=""
        />
      </van-sidebar>
      <div class="content">
        <ul>
          <li v-for="(item, idx) in itemList" :key="idx" @click="goDesc">
            <div class="info">
              <div class="title">{{ item.title }}</div>
              <div class="total">{{ item.total }}人已测</div>
            </div>
            <van-image
              fit="cover"
              :src="item.src || 'https://img01.yzcdn.cn/vant/cat.jpeg'"
            />
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
import { Sidebar, SidebarItem, Image } from "vant";
export default {
  components: {
    CmtlytNavbar,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [Image.name]: Image,
  },
  props: [],
  data() {
    return {
      navbarRole: { title: "心理测评" },
      activeKey: 0,
      sideList: ["全部", "情感", "人际", "性格", "健康", "亲子", "能力"],
      itemList: [
        { title: "疲劳测试", total: 121 },
        { title: "性格测试", total: 121 },
        { title: "心理测试", total: 121 },
        { title: "心理测试", total: 121 },
        { title: "心理测试", total: 121 },
        { title: "心理测试", total: 121 },
      ],
    };
  },
  methods: {
    goDesc() {
      this.$goto("reviewDesc");
    },
  },
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.review {
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    display: flex;
    .van-sidebar {
      height: 100%;
      width: unset;
      .van-sidebar-item {
        padding: 15px 20px;
        background-color: transparent;
      }
      ::v-deep(.van-sidebar-item--select) {
        background-color: #fff;
        &::before {
          height: 100%;
        }
      }
      ::v-deep(.van-sidebar-item--select::before) {
        background-color: #0283fe;
      }
    }
    .content {
      flex: 1;
      background-color: #fff;
      ul {
        padding: 0;
        li {
          padding: 10px 0;
          margin: 0 20px;
          display: flex;
          gap: $main-gap;
          .info {
            flex: 6;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: left;
            .title {
              font-size: $title-font-size;
            }
            .total {
              font-size: $desc-font-size;
              color: #7f7f7f;
            }
          }
          .van-image {
            flex: 4;
          }
        }
        li + li {
          border-top: #00000030 solid 1px;
        }
      }
    }
  }
}
</style>
