<template>
  <div>
    <h1>待办事项</h1>
    <input type="text" v-model="thing" @keyup.enter="save" autofocus="autofocus" />
    <button @click="save">保存</button>
    <div class="content">
      <ul>
        <li v-for="(item, index) in todoList" :key="index" class="todo-li">
          <span class="todo-span">{{index+1}}.{{item.name}}</span>
          <button class="finish-btn" @click="finish(item.id)">完成</button>
        </li>
      </ul>
      <hr />
      <ul class="finish">
        <li v-for="(item, index) in doneList" :key="index" class="done-li">
          <span>{{index+1}}.{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thing: "",
      // 保存所有事项
      thingsList: [
        {
          name: "吃饭",
          type: 1,
          id: 1
        },
        {
          name: "睡觉",
          type: 1,
          id: 2
        },
        {
          name: "学习",
          type: 1,
          id: 3
        }
      ]
    };
  },
  computed: {
    // 待办事项的数据来源
    todoList: function() {
      return this.thingsList.filter(item => {
        return item.type == 1;
      });
    },
    // 已办事项的数据来源
    doneList: function() {
      return this.thingsList.filter(item => {
        return item.type == 2;
      });
    }
  },
  methods: {
    // 未完成的事项
    save() {
      if (this.thing) {
        this.thingsList.push({
          name: this.thing,
          // 1:未完成，2：已完成
          type: 1,
          // 新增一个id属性，作为事件的标识符，与事件一一对应，效果比index好
          // id值的来源：数组的长度，这个数组只会增加，不会减少，所以id唯一
          // index的劣势:如果先取出index，后来数组长度发生变化，那么通过index获取的数据可能有误
          id: this.thingsList.length + 1
        });
        this.thing = "";
      }
    },
    // 已完成
    finish(id) {
      this.thingsList.forEach(item => {
        if (item.id == id) {
          item.type = 2;
        }
      });
    }
  }
};
</script>

<style scoped>
.content {
  width: 400px;
  margin: 0 auto;
  text-align: left;
}
.todo-li,
.done-li {
  padding: 5px 0;
}
.todo-li::after {
  content: "";
  display: block;
  clear: both;
}
.finish-btn {
  float: right;
}
ul {
  list-style: none;
}
.finish {
  color: grey;
  text-decoration: line-through;
}
</style>
