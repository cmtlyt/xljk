<template>
  <div class="list-item" @click="goDesc">
    <van-image
      fit="cover"
      round
      :src="role.src || 'https://img01.yzcdn.cn/vant/cat.jpeg'"
    />
    <div class="info">
      <div class="name">
        {{ role.name }}
        <div class="total">{{ role.total }}人次咨询</div>
      </div>
      <div class="authentication">{{ role.authentication }}</div>
      <div class="fast">
        最快可约{{ role.fast }}
        <div class="type">{{ role.type }}</div>
      </div>
      <div class="tags">
        <div class="tag" v-for="(item, idx) in role.tags" :key="idx">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Image } from "vant";
export default {
  components: {
    [Image.name]: Image,
  },
  props: ["role"],
  data() {
    return {};
  },
  methods: {
    goDesc() {
      this.$goto("teacherDesc");
    },
  },
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
.list-item {
  padding: 15px;
  background-color: #fff;
  border-radius: $main-radius;
  box-shadow: 0 0 10px -8px #000;
  display: flex;
  gap: $main-gap;
  .van-image {
    width: 8rem;
    height: 8rem;
  }
  .info {
    flex: 8;
    text-align: left;
    font-size: $desc-font-size;
    display: flex;
    flex-direction: column;
    gap: $main-gap;
    .name {
      display: flex;
      gap: $main-gap;
      font-size: $title-font-size;
      .total {
        font-size: $desc-font-size;
        color: #7a7c7a;
      }
    }
    .authentication {
      color: #7a7c7a;
    }
    .fast {
      display: flex;
      gap: $main-gap;
      color: $main-color;
      .type {
        color: #9a9a9a;
      }
    }
    .tags {
      display: flex;
      gap: 5px;
      .tag {
        padding: 2px 3px;
        background-color: #f6f6f6;
        color: #4f4f4f;
      }
    }
  }
}
</style>
