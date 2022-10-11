<template>
  <div class="index">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <div class="content">
      <header>
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(item, idx) in images" :key="idx">
            <img :src="item" />
          </van-swipe-item>
        </van-swipe>
        <div class="btns" @click="goto">
          <div class="btn big">
            <van-icon name="chat-o" />
            <div class="label">咨询预约</div>
          </div>
          <div class="btn">
            <van-icon name="question-o" />
            <div class="label">心理答疑</div>
          </div>
          <div class="btn">
            <van-icon name="records" />
            <div class="label">心理测评</div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div class="title">
            放松解压
            <div class="more" @click="$goto('../relax')">更多</div>
          </div>
          <div class="btns" @click="goto">
            <div class="btn">
              <van-icon name="question-o" />
              <div class="label">正念冥想</div>
            </div>
            <div class="btn">
              <van-icon name="question-o" />
              <div class="label">睡眠调整</div>
            </div>
            <div class="btn">
              <van-icon name="question-o" />
              <div class="label">呼吸训练</div>
            </div>
            <div class="btn">
              <van-icon name="question-o" />
              <div class="label">减压音频</div>
            </div>
          </div>
        </section>
        <section>
          <div class="title">
            热门测评
            <div class="more">更多</div>
          </div>
          <div class="content">
            <ul>
              <li
                v-for="(item, idx) in hotReviewList"
                :key="idx"
                @click="goHot(item.to)"
              >
                <div class="info">
                  <div class="title">{{ item.title }}</div>
                  <div class="person-total">{{ item.total }}人已测</div>
                </div>
                <van-image
                  fit="cover"
                  :src="item.src || 'https://img01.yzcdn.cn/vant/cat.jpeg'"
                />
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
import { Swipe, SwipeItem, Icon, Image } from "vant";
export default {
  components: {
    CmtlytNavbar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Icon.name]: Icon,
    [Image.name]: Image,
  },
  props: [],
  data() {
    return {
      navbarRole: { type: "search", messageTotal: 3 },
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ],
      hotReviewList: [
        { title: "疲劳测试", total: "121", to: "", src: "" },
        { title: "性格测试", total: "121", to: "", src: "" },
        { title: "心理测试", total: "121", to: "", src: "" },
      ],
    };
  },
  methods: {
    goto(e) {
      let target;
      if ([...(e.target.classList || "")].includes("btn")) {
        target = e.target.innerText.trim();
      } else if ([...(e.target.parentNode.classList || "")].includes("btn")) {
        target = e.target.parentNode.innerText.trim();
      }
      const pathDict = {
        心理答疑: "../queryList",
        放松解压: "../relax",
      };
      this.$goto(pathDict[target]);
    },
    goHot(path) {
      console.log(path);
      if (!path) return;
      this.$goto(path);
    },
  },
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.index {
  & > .content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: $main-padding;
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
      .btns {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
          "big ."
          "big .";
        gap: $main-gap;
        .btn {
          gap: 20px;
          font-size: $title-font-size;
        }
        .btn.big {
          flex-direction: column-reverse;
          grid-area: big;
          height: 10em;
          .van-icon {
            font-size: 5em;
          }
        }
      }
    }
    main {
      display: flex;
      flex-direction: column;
      gap: 30px;
      section {
        display: flex;
        flex-direction: column;
        gap: $main-gap;
        .title {
          display: flex;
          justify-content: space-between;
          font-size: $title-font-size;
          align-items: center;
          .more {
            color: #4f4f4f;
            font-size: $desc-font-size;
          }
        }
        .btns {
          display: flex;
          justify-content: space-between;
          gap: $main-gap;
          .btn {
            padding: 20px 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
        }
        ul {
          background-color: #fff;
          border-radius: $main-radius;
          box-shadow: 0 0 10px -8px #000;
          li {
            display: flex;
            padding: 20px 0;
            margin: 0 10px;
            text-align: left;
            gap: 20px;
            .info {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              gap: 30px;
              flex: 6;
              .person-total {
                font-size: $desc-font-size;
                color: #7f7f7f;
              }
            }
            .van-image {
              flex: 4;
              height: 8rem;
            }
            + li {
              border-top: #00000030 solid 1px;
            }
          }
        }
      }
    }
    .btn {
      display: flex;
      background-color: #fff;
      box-shadow: 0 0 10px -8px #000;
      border-radius: $main-radius;
      align-items: center;
      justify-content: center;
      .van-icon {
        font-size: 2.5em;
        color: $main-color;
      }
    }
  }
}
</style>
