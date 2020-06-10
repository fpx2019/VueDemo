<template>
  <div class="content">
    <p>VUEX版 todo List</p>
    <input type="text" v-model="things" placeholder="to do ..." @keyup.enter="save" />
    <button @click="save">保存</button>
    <ul>
      <li v-for="(item, index) in $store.getters.todoList" :key="index">
        <span class="todo-span">{{index+1}}. {{item.name}}</span>
        <button class="finish-btn" @click="finish(item.id)">完成</button>
      </li>
    </ul>
    <hr />
    <ul class="finish-ul">
      <li v-for="(item, index) in $store.getters.doneList" :key="index">
        <span class="todo-span">{{index+1}}. {{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      things: ""
    };
  },
  created() {
    // 从localStorage中获取历史记录
    this.getHistory();
  },
  methods: {
    save() {
      if (this.things) {
        let obj = {
          name: this.things,
          type: 1,
          id: this.$store.state.allList.length + 1
        };
        this.$store.commit("addTodo", obj);
        this.things = "";
      }
    },
    finish(id) {
      this.$store.commit("moveTodo", id);
    },
    // 从localStorage中获取历史记录
    getHistory() {
      if (localStorage.getItem("allList")) {
        this.$store.commit(
          "resetHistory",
          JSON.parse(localStorage.getItem("allList"))
        );
      }
    }
  }
};
</script>

<style scoped>
.content {
  width: 400px;
  margin: 0 auto;
  border: 1px solid #666;
  border-radius: 4px;
}
ul {
  list-style: none;
  text-align: left;
  padding: 15px;
}
li {
  position: relative;
  margin: 10px 0;
}
.finish-btn {
  position: absolute;
  right: 20px;
  padding: 0 8px;
}
.finish-ul {
  color: #999;
  text-decoration: line-through;
}
</style>
