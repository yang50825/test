// 该文件用于创建Vuex中最为核心的store

// 引入vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'
// 求和相关的设置

// 人员管理相关的设置
Vue.use(Vuex)
// 创建并导出store
export default new Vuex.Store({
  modules: {
    countOptions,
    personOptions,
  },
})
