<template>
  <div id="app">
    <header2></header2>
    <div>
      <input type="text" placeholder="你要查谁的手机号？" v-model="name" />
      <button @click="getPhone">查询</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      // 你要查谁的手机号
      name: "马超"
    };
  },
  created() {},
  methods: {
    pageHandler(v) {
      this.currentPage = v;
    },
    // 查询对应人物的手机号
    getPhone() {
      axios
        .get(`http://127.0.0.1:3000/userinfo`, {
          params: {
            name: this.name
          }
        })
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
