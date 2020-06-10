<template>
  <div>
    <base-input label="username"></base-input>
    <base-button label="username"></base-button>
    <p>{{$store.state.count}}</p>
    <button @click="add">+1</button>
    <button @click="addAsync">addAsync</button>
    <p>getters:{{$store.state.count}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log("vuex", this.$store.state.count);
  },
  methods: {
    add() {
      this.$store.commit("change", {
        num1: 111,
        num2: 555
      });
    },
    addAsync() {
      this.$store.dispatch("increment");
    }
  }
};
</script>

<style scoped>
</style>
