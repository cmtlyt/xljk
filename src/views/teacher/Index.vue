<template>
  <div class="index">
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Button } from "vant";

export default {
  components: {
    [Button.name]: Button,
  },
  props: [],
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$store.dispatch("user/getInfo");
    },
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  mounted() {},
  created() {},
};
</script>

<style lang="scss" scoped>
</style>
