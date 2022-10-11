<template>
  <div class="query-query">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <div class="content">
      <main>
        <section>
          <div class="label">问题标题</div>
          <div class="value"><input type="text" v-model="title" /></div>
        </section>
        <section>
          <div class="label">问题详情描述</div>
          <div class="value"><textarea v-model="desc"></textarea></div>
        </section>
        <section>
          <div class="label">选择答疑老师</div>
          <div class="value">
            <van-cell
              :title="teacherGetName"
              value=""
              size="large"
              is-link
              @click="teacherShow = true"
            />
            <van-popup v-model="teacherShow" round position="bottom">
              <van-cascader
                v-model="teacher"
                title="请选择老师"
                :options="teacherOptions"
                @close="teacherShow = false"
                @finish="teacherShow = false"
              />
            </van-popup>
          </div>
        </section>
        <section>
          <div class="label">问题公开权限</div>
          <div class="value">
            <van-radio-group v-model="limit">
              <van-radio name="public">公开</van-radio>
              <van-radio name="self">仅老师可见</van-radio>
              <van-radio name="private">不公开</van-radio>
            </van-radio-group>
          </div>
        </section>
      </main>
      <footer>
        <van-button type="info" round @click="submit">提交</van-button>
      </footer>
    </div>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
import { Button, Radio, RadioGroup, Popup, Cascader, Cell } from "vant";
export default {
  components: {
    CmtlytNavbar,
    [Button.name]: Button,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [Popup.name]: Popup,
    [Cascader.name]: Cascader,
    [Cell.name]: Cell,
  },
  props: [],
  data() {
    return {
      navbarRole: { title: "我要提问" },
      teacherShow: false,
      teacherOptions: [
        { text: "张老师", value: "0" },
        { text: "王老师", value: "1" },
        { text: "李老师", value: "2" },
        { text: "赵老师", value: "3" },
      ],
      teacher: "",
      limit: "",
      title: "",
      desc: "",
    };
  },
  methods: {
    submit() {
      console.log(this.title, this.desc, this.teacher, this.limit);
      this.$goto("queryHistory");
    },
  },
  computed: {
    teacherGetName() {
      return (
        this.teacher &&
        this.teacherOptions.find((item) => item.value == this.teacher).text
      );
    },
  },
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.query-query {
  .content {
    padding: $main-padding;
    main {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: $main-padding;
      background-color: #fff;
      section {
        display: flex;
        flex-direction: column;
        gap: $main-padding;
        text-align: left;
        input,
        textarea {
          padding: 5px;
          box-sizing: border-box;
          outline: none;
          border-radius: 5px;
          border: #00000020 solid 1px;
          width: 100%;
          height: 2.5em;
        }
        textarea {
          height: 15em;
        }
        .van-radio-group {
          padding-top: 10px;
          display: flex;
          gap: 30px;
        }
        .van-cell {
          border: #00000020 solid 1px;
          border-radius: 5px;
        }
      }
    }
    footer {
      padding-top: 10rem;
      .van-button {
        width: 80vw;
      }
    }
  }
}
</style>
