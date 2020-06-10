<template>
  <div>
    <div class="top">
      <router-link class="joke" to="/dashboard">段子列表</router-link>
      <router-link class="joke" to="/joke/loading">段子集</router-link>
      <span class="news">郑职新闻</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #000;
  background-image: url("../assets/zhangyumao.jpg");
  background-size: 60px;
  background-repeat: no-repeat;
  background-position: 20px center;
}
.joke,
.news {
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
}
.news {
  font-size: 20px;
  font-style: italic;
  font-weight: 900;
  float: right;
  margin-right: 20px;
}
</style>