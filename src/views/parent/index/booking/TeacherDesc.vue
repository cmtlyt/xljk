<template>
  <div class="teacher-desc">
    <header>
      <div class="back-btn">
        <van-icon name="arrow-left" @click="$router.back()" />
      </div>
      <div class="user-box">
        <van-image
          class="big-avatar"
          fit="cover"
          :src="teacherInfo.avatar || 'https://img01.yzcdn.cn/vant/cat.jpeg'"
        />
        <div class="user">
          <van-image
            class="avatar"
            fit="cover"
            round
            :src="teacherInfo.avatar || 'https://img01.yzcdn.cn/vant/cat.jpeg'"
          />
          <div class="info">
            <span>{{ teacherInfo.teacherName }}</span>
            <van-rate
              :value="teacherInfo.teacherRate"
              :size="20"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            />
          </div>
        </div>
      </div>
      <div class="authentication">{{ teacherInfo.authentication }}</div>
      <div class="tags">
        <div class="tag" v-for="(item, idx) in teacherInfo.tags" :key="idx">
          {{ item }}
        </div>
      </div>
      <div class="more-info">
        <div class="total">
          {{ teacherInfo.serveTotal }}人次 <span>咨询人次</span>
        </div>
        <div class="time">
          {{ teacherInfo.serveTimeLong }}小时 <span>服务时长</span>
        </div>
        <div class="date">
          {{ teacherInfo.serveDateLong }} <span>从业年限</span>
        </div>
      </div>
    </header>
    <main>
      <van-tabs v-model="activeTab" scrollspy sticky color="#0283fe">
        <van-tab title="个人介绍" class="desc">
          <div class="title">个人介绍</div>
          <div class="content" :class="{ 'desc-show-all': descShowAll }">
            {{ teacherInfo.desc }}
          </div>
          <div
            class="show-all-btn"
            v-if="!descShowAll"
            @click="descShowAll = true"
          >
            展示详情<van-icon name="arrow-down" />
          </div>
        </van-tab>
        <van-tab title="擅长领域" class="area">
          <div class="title">擅长领域</div>
          <div class="content">
            <section v-for="(item, idx) in teacherInfo.areaList" :key="idx">
              <div class="label">{{ item.label }}</div>
              <div class="area-desc">{{ item.desc }}</div>
            </section>
          </div>
        </van-tab>
        <van-tab title="可约时间" class="time">
          <div class="title">
            可约时间
            <div class="fast">最快可约{{ teacherInfo.fastTime }}</div>
          </div>
          <div class="content">
            <section v-for="(item, idx) in teacherInfo.freeTime" :key="idx">
              <ul>
                <li class="month">{{ item.month }}</li>
                <li class="day">{{ item.day }}</li>
                <li class="week">{{ item.week }}</li>
                <li class="free-total" :class="{ free: item.freeTotal }">
                  {{ item.freeTotal ? `剩余${item.freeTotal}` : "已满" }}
                </li>
              </ul>
            </section>
          </div>
          <div class="option">
            <div class="hr">预约须知</div>
            <div class="option-content">
              <div class="option-title">回应时长</div>
              <div class="option-desc">
                {{ teacherInfo.evanuateInfo.respondLength }}
              </div>
              <div class="option-title">变更预约说明</div>
              <div class="option-desc">
                {{ teacherInfo.evanuateInfo.changeOption }}
              </div>
              <div class="option-title">爽约/迟到说明</div>
              <div class="option-desc">
                {{ teacherInfo.evanuateInfo.cancelOption }}
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab :title="`评价(${teacherInfo.commentTotal})`" class="comment">
          <div class="title">评价({{ teacherInfo.commentTotal }})</div>
          <div class="comment-content">
            <comment-item
              v-for="(item, idx) in commentList"
              :key="idx"
              :role="item"
            ></comment-item>
          </div>
        </van-tab>
      </van-tabs>
    </main>
    <footer>
      <van-goods-action>
        <van-goods-action-icon
          icon="chat-o"
          text="私信"
          @click="$goto('/messageDesc')"
        />
        <van-goods-action-button
          type="danger"
          text="立即预约"
          color="#0283fe"
          @click="booking"
        />
      </van-goods-action>
    </footer>
  </div>
</template>

<script>
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Tab,
  Tabs,
  Image,
  Rate,
  Icon,
} from "vant";
import CommentItem from "./components/CommentItem.vue";
export default {
  components: {
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Image.name]: Image,
    [Rate.name]: Rate,
    [Icon.name]: Icon,
    CommentItem,
  },
  props: [],
  data() {
    return {
      teacherInfo: {
        avatar: "",
        teacherRate: 5,
        teacherName: "张某某",
        authentication: "国家二级心理咨询师",
        tags: ["面对面咨询", "视频咨询", "电话咨询"],
        serveTotal: 774,
        serveTimeLong: 210,
        serveDateLong: "2年1个月",
        commentTotal: 133,
        fastTime: "今天15:00",
        freeTime: [],
        areaList: [
          {
            label: "情绪管理",
            desc: "心理疲惫,孤独,抑郁情绪,焦虑情绪,羞耻,嫉妒",
          },
          {
            label: "个人成长",
            desc: "自卑不自信,童年创伤,时间管理,自律,选择困难",
          },
          {
            label: "人际关系",
            desc: "讨好性人格,社会适应难,不会拒绝,缺乏安全感,沟通不畅",
          },
        ],
        desc: "个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍",
        evanuateInfo: {
          respondLength:
            "回应时长回应时长回应时长回应时长回应时长回应时长回应时长回应时长回应时长回应时长回应时长回应时长回应时长回应时长回应时长回应时长回应时长回应时长回应时长回应时长回应时长",
          changeOption:
            "变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明变更预约说明",
          cancelOption:
            "爽约/迟到说明爽约/迟到说明爽约/迟到说明爽约/迟到说明爽约/迟到说明爽约/迟到说明爽约/迟到说明爽约/迟到说明爽约/迟到说明爽约/迟到说明爽约/迟到说明爽约/迟到说明爽约/迟到说明爽约/迟到说明爽约/迟到说明爽约/迟到说明爽约/迟到说明",
        },
      },
      descShowAll: false,
      activeTab: 0,
      commentList: [
        {
          name: "匿名",
          date: "2022-09-22",
          rate: 5,
          content:
            "评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好",
          src: "",
        },
        {
          name: "匿名",
          date: "2022-09-22",
          rate: 5,
          content:
            "评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好",
          src: "",
        },
        {
          name: "匿名",
          date: "2022-09-22",
          rate: 5,
          content:
            "评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好评价很好",
          src: "",
        },
      ],
    };
  },
  methods: {
    booking() {
      this.$goto("checkBooking");
    },
    formatDate(currDate, sep = "") {
      const timestamp = Date.parse(currDate);
      const date = new Date(timestamp);
      const Y = date.getFullYear();
      const M =
        date.getMonth() + 1 < 10
          ? sep + (date.getMonth() + 1)
          : date.getMonth() + 1;
      const D = date.getDate() < 10 ? sep + date.getDate() : date.getDate();
      return Y + "-" + M + "-" + D;
    },
    getDate(sep = "", offset = 0) {
      const currDate = this.formatDate(new Date(), sep);
      if (offset)
        return ((curr) => {
          const currDate = new Date(curr);
          const nextDate = +currDate + offset * 1000 * 60 * 60 * 24;
          return this.formatDate(new Date(nextDate), sep);
        })(currDate);
      return currDate;
    },
  },
  computed: {},
  mounted() {},
  created() {
    const weekList = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    for (let i = 0; i < 7; i++) {
      let date = this.getDate("", i);
      const week = weekList[new Date(date).getDay()];
      date = date.split("-").splice(1);
      this.teacherInfo.freeTime.push({
        month: `${date[0]}月`,
        day: date[1],
        week,
        freeTotal: (() => {
          const rand = Math.floor(Math.random() * 10) - 5;
          if (rand < 0) return 0;
          return rand;
        })(),
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.teacher-desc {
  background-color: #fff;
  header {
    .back-btn {
      position: absolute;
      z-index: 100;
      top: 1.5rem;
      left: 1.5rem;
      .van-icon {
        color: #fff;
        font-size: $title-font-size;
      }
    }
    .user-box {
      .user {
        position: relative;
        display: flex;
        align-items: center;
        padding: 0 15px 0 25px;
        transform: translateY(-50%);
        gap: $main-gap;
        .info {
          position: relative;
          top: 1rem;
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          font-size: $title-font-size;
        }
      }
      .avatar {
        height: 6rem;
        width: 6rem;
      }
    }
    .authentication {
      padding: 0 2rem;
      text-align: left;
      font-size: $desc-font-size;
      color: #6c6c7f;
    }
    .tags {
      padding: 2rem 2rem 0;
      display: flex;
      gap: $main-gap;
      .tag {
        padding: 2px 3px;
        border: #00000030 solid 1px;
        border-radius: 5px;
        color: #4f4f4f;
        font-size: $desc-font-size;
      }
    }
    .more-info {
      margin: 2rem;
      background-color: #f2f2f2;
      border-radius: $main-radius;
      display: flex;
      justify-content: space-between;
      padding: 2rem;
      div {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
        font-size: $title-font-size;
        span {
          color: #9d9b9a;
          font-size: $desc-font-size;
        }
      }
    }
  }
  main {
    .van-tabs {
      text-align: left;
      ::v-deep(.van-tabs__content) {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        .van-tab__pane {
          padding: $main-padding;
          box-shadow: 0 0 10px -7px #000;
          border-radius: $main-radius;
          .title {
            font-size: $title-font-size;
          }
          & > .content {
            margin-top: 2rem;
            font-size: $desc-font-size;
            color: #9a9c9a;
          }
        }
        .van-tab__pane.desc {
          .content {
            position: relative;
            height: 8em;
            overflow: hidden;
            &::before {
              position: absolute;
              top: 0;
              left: 0;
              z-index: 20;
              content: "";
              width: 100%;
              height: 100%;
              box-shadow: inset 0 -9rem 5rem -5rem #fff;
            }
            &.desc-show-all {
              height: unset;
              &::before {
                display: none;
              }
            }
          }
          .show-all-btn {
            text-align: center;
            font-size: $desc-font-size;
            color: #9a9a9a;
          }
        }
        .van-tab__pane.area {
          .content {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            section {
              padding: $main-padding;
              background-color: #f6f6f6;
              border-radius: 5px;
              display: flex;
              flex-direction: column;
              gap: $main-gap;
              .label {
                color: #000;
              }
              .area-desc {
                font-size: $small-font-size;
              }
            }
          }
        }
        .van-tab__pane.time {
          .title {
            display: flex;
            gap: 3rem;
            align-items: flex-end;
            .fast {
              color: $main-color;
              font-size: $desc-font-size;
            }
          }
          .content {
            display: flex;
            gap: $main-gap;
            justify-content: space-between;
            section {
              flex: 1;
              ul {
                padding: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 5px;
                font-size: $small-font-size;
                li {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  text-align: center;
                }
                .day {
                  color: #000;
                  font-size: $title-font-size;
                }
                .free-total {
                  background-color: #efefef;
                  color: #9a9a9a;
                  border-radius: 5px;
                  width: 2.5em;
                  height: 3em;
                  &.free {
                    background-color: $main-color;
                    color: #fff;
                  }
                }
              }
            }
          }
          .option {
            padding-top: 7rem;
            position: relative;
            font-size: $desc-font-size;
            .hr {
              position: absolute;
              top: 3.5rem;
              left: 50%;
              transform: translate(-50%, -50%);
              &::before,
              &::after {
                position: absolute;
                width: 200%;
                height: 2px;
                content: "";
                background-color: #dfdfdf;
                right: -200%;
                top: 50%;
                transform: translate(1rem, -50%);
              }
              &::before {
                left: -200%;
                transform: translate(-1rem, -50%);
              }
            }
            .option-content {
              display: flex;
              flex-direction: column;
              gap: 1.5rem;
              color: #a0a2a0;
              .option-title {
                color: #000;
              }
            }
          }
        }
        .van-tab__pane.comment {
          box-shadow: unset;
          padding: 0;
          .title {
            position: relative;
            &::before,
            &::after {
              position: absolute;
              top: -1rem;
              left: 50%;
              transform: translateX(-50%);
              content: "";
              width: 100vw;
              height: 1px;
              background-color: #e9e9e9;
            }
            &::after {
              top: unset;
              bottom: -1rem;
            }
          }
          .comment-content {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-top: 20px;
          }
        }
      }
    }
  }
  footer {
    height: 5rem;
    .van-goods-action {
      padding: 0 1rem 0 3rem;
      gap: 10px;
      z-index: 100;
    }
  }
}
</style>
