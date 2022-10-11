<template>
  <div class="booking-booking">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <div class="content">
      <main>
        <section class="date">
          <div class="title">选择日期</div>
          <van-radio-group v-model="date">
            <ul>
              <li v-for="(item, idx) in freeTime" :key="idx">
                <span>{{ item.month }}</span>
                <van-radio :name="idx">
                  <span class="day">{{ item.day }}</span>
                  <span class="week">{{ item.week }}</span>
                </van-radio>
              </li>
            </ul>
          </van-radio-group>
        </section>
        <section class="type">
          <div class="title">选择咨询方式</div>
          <van-radio-group v-model="type">
            <van-radio v-for="(item, idx) in typeList" :key="idx" :name="idx">
              {{ item }}
            </van-radio>
          </van-radio-group>
        </section>
        <section class="time-area">
          <div class="title">选择时间段</div>
          <van-radio-group v-model="timeArea">
            <van-radio
              v-for="(item, idx) in timeAreaList"
              :key="idx"
              :name="idx"
            >
              {{ item }}
            </van-radio>
          </van-radio-group>
        </section>
      </main>
      <footer>
        <van-button round type="info" @click="submit">确认预约</van-button>
      </footer>
    </div>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
import { RadioGroup, Radio, Button } from "vant";
export default {
  components: {
    CmtlytNavbar,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Button.name]: Button,
  },
  props: [],
  data() {
    return {
      navbarRole: { title: "预约" },
      freeTime: [],
      date: null,
      type: null,
      timeArea: null,
      timeAreaList: [
        "9:00~9:50",
        "10:00~10:50",
        "11:00~11:50",
        "13:00~13:40",
        "14:00~14:50",
        "15:00~15:50",
        "16:00~16:50",
      ],
      typeList: ["面对面咨询", "视频咨询", "电话咨询"],
    };
  },
  methods: {
    submit() {
      console.log(this.date, this.type, this.timeArea);
      this.$goto("bookingHistory");
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
      this.freeTime.push({
        month: `${date[0]}月`,
        day: date[1],
        week,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.booking-booking {
  .content {
    padding: $main-padding;
    main {
      padding: 2rem 1rem;
      border-radius: $main-radius;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      background-color: #fff;
      section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        .title {
          font-size: $title-font-size;
          text-align: left;
        }
        .van-radio-group {
          display: flex;
          justify-content: space-between;
          gap: 1.5rem;
          ul {
            padding: 0;
            display: flex;
            justify-content: space-between;
            width: 100%;
            li {
              display: flex;
              flex-direction: column;
              text-align: center;
              justify-content: center;
              gap: $main-gap;
              color: #9a9a9a;
              span {
                font-size: $desc-font-size;
              }
            }
          }
          ::v-deep(.van-radio__label) {
            padding: 3px;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 5px;
            border-radius: 5px;
            .day {
              font-size: $big-title-font-size;
              color: #000;
            }
            .week {
              color: #9a9a9a;
              font-size: $desc-font-size;
            }
          }
          ::v-deep(.van-radio__icon--checked + .van-radio__label) {
            background-color: $main-color;
            color: #fff;
            .day {
              color: #fff;
            }
            .week {
              color: #fff;
            }
          }
        }
        &.type {
          .van-radio {
            flex: 1;
          }
          ::v-deep(.van-radio__label) {
            padding: 5px 0;
            flex: 1;
            background-color: #cecece;
            color: #fff;
          }
        }
        &.time-area {
          .van-radio-group {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            ::v-deep(.van-radio__label) {
              padding: 5px;
            }
          }
        }
      }
    }
    footer {
      padding-top: 6rem;
      .van-button {
        width: 80vw;
      }
    }
  }
  ::v-deep(.van-radio__icon) {
    display: none;
  }
}
</style>
