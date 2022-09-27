// 该文件用于创建Vuex中最为核心的store

// 引入vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 准备actions——用于响应组件中动作
const actions = {
  //   jia(context, value) {
  //     context.commit('JIA', value)
  //   },
  //   jian(context, value) {
  //     context.commit('JIAN', value)
  //   },
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
}
// 准备mutations——用于操作数据（state）
const mutations = {
  JIA(state, value) {
    state.sum += value
  },
  JIAN(state, value) {
    state.sum -= value
  },
}
// 准备state——用于存储数据
const state = {
  sum: 0, // 当前的和
  school: '清华',
  subject: '前端',
}
// 准备getters——用于将state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10
  },
}

Vue.use(Vuex)
// 创建并导出store
export default new Vuex.Store({
  actions: actions,
  mutations,
  state,
  getters,
})
