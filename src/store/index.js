// 该文件用于创建Vuex中最为核心的store

// 引入vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

// 求和相关的设置
const countOptions = {
  actions: {
    jiaOdd(context, value) {
      if (context.state.sum % 2) {
        context.commit('JIA', value)
      }
    },
    jiaWait(context, value) {
      setTimeout(() => {
        context.commit('JIA', value)
      }, 1000)
    },
  },
  mutations: {
    JIA(state, value) {
      state.sum += value
    },
    JIAN(state, value) {
      state.sum -= value
    },
  },
  state: {
    sum: 0, // 当前的和
    school: '清华',
    subject: '前端',
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    },
  },
}
// 人员管理相关的设置
const personOptions = {
  actions: {},
  mutations: {
    ADD_PERSON(state, personObj) {
      state.personList.unshift(personObj)
    },
  },
  state: {
    personList: [{ id: '001', name: '张三' }],
  },
  getters: {},
}

Vue.use(Vuex)
// 创建并导出store
export default new Vuex.Store({
  modules: {
    a: countOptions,
    b: personOptions,
  },
})
