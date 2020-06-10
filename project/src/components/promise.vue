<template>
  <div>
    <!-- 回调地狱 -->
    <h2>promise中的三种状态：pending、resolve（fulfilled）、 reject</h2>
    <pre>
    const promise = new Promise(function(resolve, reject) {
      // ... some code

      if (/* 异步操作成功 */){
        resolve(value);
      } else {
        reject(error);
      }
    });
    </pre>
    <h2>Promise中常用的四个方法：then()方法，表示成功的回调；catch()方法，表示错误的回调;all();race()</h2>
    <p>promise.all(): 接受多个promise作为参数，当所有的promise都成功时，外层的promise才会成功；否则执行失败的回调。</p>
    <p>promise.race(): 接受多个promise作为参数，当任一promise成功时，外层的promise就会执行成功的回调；如果指定时间内没有获得结果，就将 Promise 的状态变为reject。</p>
    <hr />
    <h2>ES7中新增了async/await</h2>
    async function test() {
    await fn1(url1)
    await fn2(url2)
    await fn3(url3)
    }
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
</style>