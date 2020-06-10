<template>
  <div class="content">
    <h2 class="text">{{joke.text}}</h2>
    <p class="passtime">{{joke.passtime}}</p>
    <img width="800px" v-if="joke.type=='image' || joke.type=='gif'" :src="joke.images" />
    <video v-if="joke.type=='video'" class="video" :src="joke.video" controls autoplay></video>
  </div>
</template>

<script>
import axios from "axios";
import { getSingleJoke } from "../serve";
export default {
  data() {
    return {
      joke: {}
    };
  },
  created() {
    this.getJoke();
  },
  methods: {
    getJoke() {
      let _this = this;
      axios

        .get(getSingleJoke, {
          params: {
            sid: this.$route.params.sid
          }
        })

        .then(function(response) {
          // handle success
          console.log(response);
          _this.joke = response.data.result;
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
.content {
  width: 800px;
  margin: 0 auto;
  border-left: 1px solid #999;
  border-right: 1px solid #999;
  min-height: 100vh;
}
.passtime {
  font-size: 12px;
  margin-top: 10px;
  color: #666;
}
.video {
  width: 100%;
  height: 600px;
}
</style>