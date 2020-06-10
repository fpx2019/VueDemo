<template>
  <div>
    <v-header></v-header>
    <p class="solution">
      思路：
      1.打开页面，获取段子列表，显示在左侧侧边栏；
      2.获取第一个段子的sid，显示在中间；
      2.点击段子，切换内容
    </p>
    <div class="content">
      <div class="left-side">
        <div class="news-item" v-for="(item, index) in jokeList" :key="index">
          <router-link :to="`./${item.sid}`" tag="div">
            <p class="title">{{item.text}}</p>
          </router-link>
        </div>
      </div>
      <div class="right-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from "./header";
import axios from "axios";
import { getJoke } from "../serve";
export default {
  data() {
    return {
      jokeList: []
    };
  },
  components: {
    vHeader
  },
  created() {
    this.getJoke();
  },
  methods: {
    getJoke() {
      let _this = this;
      axios
        .post(getJoke, {
          type: "all",
          page: 0,
          count: 10
        })
        .then(function(response) {
          // handle success
          console.log(response);
          _this.jokeList = response.data.result;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.solution {
  padding: 5px;
  color: #fff;
  background-color: #56a5f1;
}
.left-side {
  position: absolute;
  top: 90px;
  left: 0;
  border-right: 1px solid #666;
  width: 150px;
}
.content {
  margin-left: 200px;
}
.title {
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 10px 5px;
  border-bottom: 1px solid #666;
  cursor: pointer;
}
</style>