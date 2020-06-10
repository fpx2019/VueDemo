<template>
  <div>
    <h1>通过axios后端交互</h1>
    <button @click="getInfo">get info</button>
    <p>歌手名字:{{nickname}}</p>
  </div>
</template>

<script>
import axios from "axios";
import { cloudmusic } from "../serve";
export default {
  data() {
    return {
      nickname: ""
    };
  },
  methods: {
    getInfo() {
      let _this = this;

      axios
        .get(cloudmusic, {
          params: {
            type: "lyric",
            id: "28012031"
          }
        })
        .then(function(response) {
          // handle success
          console.log(response);
          _this.nickname = response.data.transUser.nickname;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    }
  }
};
</script>

<style scoped>
</style>