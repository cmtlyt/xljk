<template>
  <div class="info-setting">
    <cmtlyt-navbar :role="navbarRole"></cmtlyt-navbar>
    <section class="base-info">
      <header>基础信息</header>
      <main>
        <ul>
          <li>
            <van-uploader>
              <van-cell title="头像" is-link />
            </van-uploader>
          </li>
          <li>
            <van-field
              is-link
              readonly
              label="从业年限"
              :placeholder="baseInfo.year ?? '请选择'"
              @click="cascaderShow.year = true"
            />
            <van-popup v-model="cascaderShow.year" round position="bottom">
              <van-cascader
                v-model="baseInfo.year"
                title="请选择从业年限"
                active-color="#0283fe"
                :options="cascaderOptions.year"
                @close="cascaderShow.year = false"
                @finish="onFinish"
              />
            </van-popup>
          </li>
          <li>
            <van-field
              is-link
              readonly
              label="持有证书"
              :placeholder="baseInfo.cert ?? '请选择'"
              @click="cascaderShow.cert = true"
            />
            <van-popup v-model="cascaderShow.cert" round position="bottom">
              <van-cascader
                v-model="baseInfo.cert"
                title="请选择持有证书"
                active-color="#0283fe"
                :options="cascaderOptions.cert"
                @close="cascaderShow.cert = false"
                @finish="onFinish"
              />
            </van-popup>
          </li>
          <li>
            <van-field
              is-link
              readonly
              label="擅长领域"
              :placeholder="baseInfo.domain ?? '请选择'"
              @click="cascaderShow.domain = true"
            />
            <van-popup v-model="cascaderShow.domain" round position="bottom">
              <van-cascader
                v-model="baseInfo.domain"
                title="请选择擅长领域"
                active-color="#0283fe"
                :options="cascaderOptions.domain"
                @close="cascaderShow.domain = false"
                @finish="onFinish"
              />
            </van-popup>
          </li>
        </ul>
      </main>
    </section>
    <section class="evanuate-info">
      <header>咨询须知信息</header>
      <main>
        <ul>
          <li>
            <div class="label">回应时长</div>
            <div class="value">
              <input
                type="text"
                v-model="evanuateInfo.respondLength"
                placeholder="请输入"
              />
            </div>
          </li>
          <li>
            <div class="label">变更预约说明</div>
            <div class="value">
              <input
                type="text"
                v-model="evanuateInfo.changeOption"
                placeholder="请输入"
              />
            </div>
          </li>
          <li>
            <div class="label">爽约/迟到说明</div>
            <div class="value">
              <input
                type="text"
                v-model="evanuateInfo.cancelOption"
                placeholder="请输入"
              />
            </div>
          </li>
        </ul>
      </main>
    </section>
    <footer>
      <van-button round type="info" @click="submit">确定</van-button>
    </footer>
  </div>
</template>

<script>
import CmtlytNavbar from "@/components/Navbar.vue";
import { Cascader, Field, Popup, Cell, Uploader, Button } from "vant";
export default {
  components: {
    CmtlytNavbar,
    [Cascader.name]: Cascader,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Cell.name]: Cell,
    [Uploader.name]: Uploader,
    [Button.name]: Button,
  },
  props: [],
  data() {
    return {
      navbarRole: { title: "个人信息设置" },
      baseInfo: {},
      cascaderOptions: {
        year: [{ text: "1", value: "1" }],
        cert: [{ text: "计算机一级", value: "计算机一级" }],
        domain: [{ text: "计算机", value: "计算机" }],
      },
      cascaderShow: { year: false, cert: false, domain: false },
      evanuateInfo: {},
    };
  },
  methods: {
    onFinish() {
      Object.keys(this.cascaderShow).forEach(
        (key) => (this.cascaderShow[key] = false)
      );
    },
    submit() {
      console.log(this.baseInfo, this.evanuateInfo);
      this.$goto("/teacher");
    },
  },
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.info-setting {
  display: flex;
  flex-direction: column;
  gap: $main-gap;
  & > section {
    padding: $main-padding;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    header {
      font-size: $title-font-size;
      text-align: left;
    }
    main {
      padding-top: 2rem;
    }
    &.base-info {
      li {
        height: 3.5em;
        display: flex;
        align-items: center;
      }
      li + li {
        border-top: #00000020 solid 0.5px;
      }
    }
    &.evanuate-info {
      padding-bottom: 6rem;
      text-align: left;
      ul {
        padding-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        li {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          font-size: $text-font-size;
          input {
            box-sizing: border-box;
            width: 100%;
            height: 2.5em;
            font-size: $text-font-size;
            border-radius: 0;
            border: #e1e1e1 solid 1px;
          }
        }
      }
    }
    .van-cell {
      padding-left: 0;
      ::v-deep(.van-cell__title) {
        color: #000;
      }
    }
    .van-uploader {
      width: 100%;
      ::v-deep(.van-uploader__input-wrapper) {
        width: 100%;
        .van-cell {
          justify-content: space-between;
          .van-cell__title {
            flex: unset;
          }
        }
      }
    }
  }
  footer {
    padding: 6rem 0;
    .van-button {
      width: 80vw;
    }
  }
}
</style>
