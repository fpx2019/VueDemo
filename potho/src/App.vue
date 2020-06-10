<template>
  <div id="app">
    <base-header></base-header>
    <router-view />
    <base-footer></base-footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
