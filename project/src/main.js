// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI, { Form } from 'element-ui';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import Vuex from 'vuex';
import '@/components/global'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(MintUI)
Vue.use(Vuex)
Vue.prototype.$http = axios
const store = new Vuex.Store({
  state: {
    count: 0,
    allList: [

    ]
  },
  getters: {
    newCount(state) {
      console.log(getters)
      return store.state.count + 1
    },
    todoList(state) {
      return store.state.allList.filter(item => {
        return item.type == 1;
      });
    },
    doneList(state) {
      return store.state.allList.filter(item => {
        return item.type == 1;
      });
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    change(state, payload) {
      state.count = payload.num1 + payload.num2
    },
    addTodo(state, payload) {
      state.allList.push(payload)
      localStorage.setItem('allList', JSON.stringify(state.allList))
    },
    moveTodo(state, payload) {
      state.allList.forEach(item => {
        if (item.id == payload) {
          item.type = 2;
        }
      });
      localStorage.setItem('allList', JSON.stringify(state.allList))
    },
    // 恢复历史记录
    resetHistory(state, payload) {
      state.allList = payload
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  }
})

router.beforeEach((to, from, next) => {
  console.log('我是全局守卫');
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
