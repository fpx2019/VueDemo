<template>
  <div>
    <mt-header fixed :title="title">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right" @click="clickHandler"></mt-button>
    </mt-header>
  </div>
</template>

<script>
import { Header } from "mint-ui";
export default {
  data() {
    return {
      title: "mint-Header"
    };
  },
  components: {
    Header
  },
  methods: {
    clickHandler() {
      alert(666);
    }
  }
};
</script>

<style scoped>
</style>