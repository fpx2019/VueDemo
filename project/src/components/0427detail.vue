<template>
  <div>
    <div v-if="joke" class="content">
      <img width="800px" v-if="joke.type=='image' || joke.type=='gif'" :src="joke.images" />
      <video v-if="joke.type=='video'" class="video" :src="joke.video" controls autoplay></video>
    </div>
    <div v-if="!joke" class="loading">Loading...</div>
  </div>
</template>

<script>
import vHeader from "./header";
import axios from "axios";
import { getSingleJoke } from "../serve";
export default {
  data() {
    return {
      joke: {}
    };
  },
  components: {
    vHeader
  },
  watch: {
    $route(to, from) {
      this.getJoke();
    }
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
.loading {
  margin-top: 50px;
}
</style>