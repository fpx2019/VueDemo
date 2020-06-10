<template>
  <div>
    <h1>Vue-router</h1>
    <p>页面传值:适用于页面之间的参数传递</p>
    <p>?是间隔符,?后面的query,?前面的是params</p>
    <p>?后面的参数{{$route.query.name}}</p>
    <p>?后面的参数{{$route.query.age}}</p>
    <hr />
    <p>?前面的参数{{$route.params.sku}}</p>
    <p>
      动态路由的特点:如果符合当前的路由规则，
      <br />就意味着还要使用这个组件，
      <br />就不会先删除在创建，
      <br />而是四直接复用，所以钩子函数不会再次执行
    </p>
    <p>1.wacth监听，2.路由的钩子函数</p>
    <button @click="toClass2">跳转</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
      console.log("我正在请求${this.route.params.sku}");
    }
  },
  methods: {
    toClass2() {
      this.$router.push("/mint");
    }
  }
};
</script>

<style scoped>
</style>