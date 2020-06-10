<template>
  <div>
    <v-header></v-header>
    <div class="content">
      <div class="news-item" v-for="(item, index) in newsList" :key="index">
        <router-link :to="`/detail/${item.sid}`" tag="div">
          <div class="news-content">
            <p class="title">{{item.text}}</p>
            <p class="time">{{item.passtime}}</p>
          </div>
          <img v-if="item.images" class="joke-img" :src="item.images" />
        </router-link>
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
      newsList: []
    };
  },
  components: {
    vHeader
  },
  created() {
    this.getNews();
  },
  methods: {
    getNews() {
      let _this = this;
      axios
        .post(getJoke, {
          type: "video",
          page: 0,
          count: 10
        })

        .then(function(response) {
          // handle success
          console.log(response);
          _this.newsList = response.data.result;
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
.top-bar {
  width: 100%;
  height: 45px;
  line-height: 45px;
  background-color: #000;
  color: #fff;
}
.content {
  width: 600px;
  margin: 0 auto;
  border: 1px solid #666;
}
.news-item {
  height: 120px;
  border-bottom: 1px solid #999;
  margin-top: 10px;
}
.joke-img {
  float: right;
  width: 140px;
  height: 88px;
  margin-right: 10px;
}
.news-content {
  text-align: left;
  float: left;
  width: 400px;
}
.title {
  margin-bottom: 50px;
  font-size: 16px;
}
.time {
  color: #666;
  font-size: 12px;
}
</style>