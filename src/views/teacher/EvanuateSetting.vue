<template>
  <div class="evanuate-setting">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <main>
      <section>
        <div class="title">设置咨询方式</div>
        <div class="content">
          <van-checkbox-group v-model="type" direction="horizontal">
            <van-checkbox shape="square" name="面对面咨询"
              >面对面咨询</van-checkbox
            >
            <van-checkbox shape="square" name="视频咨询">视频咨询</van-checkbox>
            <van-checkbox shape="square" name="电话咨询">电话咨询</van-checkbox>
          </van-checkbox-group>
        </div>
      </section>
      <section>
        <div class="title">
          设置可预约时间<span>已选择{{ timeTotal }}个时段</span>
        </div>
        <div class="content">
          <ul>
            <li v-for="(item, idx) in dates" :key="idx">
              <div class="label" v-html="item"></div>
              <div class="value">
                <van-checkbox-group
                  v-model="timeArea[idx]"
                  direction="horizontal"
                  @change="changeTimeArea"
                >
                  <van-checkbox
                    v-for="(time, tidx) in times"
                    :key="tidx"
                    :name="tidx"
                    :class="timeArea[idx].includes(tidx) ? 'select-action' : ''"
                    v-html="time"
                  ></van-checkbox>
                </van-checkbox-group>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
    <footer>
      <van-button round type="info" @click="submit">确定</van-button>
    </footer>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
import { Checkbox, CheckboxGroup, Button } from "vant";
export default {
  components: {
    CmtlytNavbar,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Button.name]: Button,
  },
  props: [],
  data() {
    return {
      navbarRole: { title: "咨询预约设置" },
      timeTotal: 0,
      type: [],
      timeList: [],
      timeArea: [],
      dates: [],
      times: [
        "9:00<span>-</span>9:50",
        "10:00<span>-</span>10:50",
        "11:00<span>-</span>11:50",
        "13:00<span>-</span>13:40",
        "14:00<span>-</span>14:50",
        "15:00<span>-</span>15:50",
        "16:00<span>-</span>16:50",
      ],
    };
  },
  methods: {
    submit() {
      console.log(this.timeArea, this.type);
      this.$goto("/teacher");
    },
    changeTimeArea() {
      this.timeTotal = 0;
      this.timeArea.forEach((item) => (this.timeTotal += item.length));
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
    for (let i = 0; i < 11; i++) {
      const date = this.getDate("", i).split("-").splice(1).join("-");
      const week = i ? weekList[new Date(date).getDay()] : "今天";
      const res = `${week}<br>${date}`;
      this.dates.push(res);
      this.timeArea.push([]);
    }
  },
};
</script>

<style lang="scss" scoped>
.evanuate-setting {
  display: flex;
  flex-direction: column;
  gap: $main-gap;
  main {
    background-color: #fff;
    padding: 3rem 2rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    font-size: $desc-font-size;
    .van-checkbox-group {
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      width: 100%;
      .van-checkbox {
        margin: 0;
        &.select-action {
          background-color: $main-color;
          color: #fff;
        }
      }
    }
    .title {
      padding-bottom: 2rem;
      font-size: $title-font-size;
      span {
        padding-left: $main-gap;
        font-size: $desc-font-size;
        color: #9a9a9a;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: $main-gap;
      li {
        display: flex;
        gap: $main-gap;
        .label {
          flex-basis: 3em;
          text-align: center;
        }
        .value {
          flex: 1;
        }
        .van-checkbox {
          flex-direction: column;
          border: #00000030 solid 1px;
          border-radius: 5px;
          width: 2.5em;
          ::v-deep(span) {
            line-height: 0.3em;
            height: 0.3em;
          }
        }
      }
    }
  }
  footer {
    padding: 3rem 0 10rem;
    .van-button {
      width: 70vw;
    }
  }
}
</style>
