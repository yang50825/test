import axios from 'axios'
import { nanoid } from 'nanoid'
export default {
  namespaced: true,
  actions: {
    addPersonWang(context, value) {
      if (value.name.startsWith('王')) {
        context.commit('ADD_PERSON', value)
      } else {
        alert('添加的人必须姓王')
      }
    },
    addPersonServer(context) {
      axios({
        method: 'GET',
        url: 'https://api.uixsj.cn/hitokoto/get?type=social',
      })
        .then((response) => {
          context.commit('ADD_PERSON', { id: nanoid(), name: response.data })
        })
        .catch((error) => {
          console.log(error.message)
        })
    },
  },
  mutations: {
    ADD_PERSON(state, personObj) {
      state.personList.unshift(personObj)
    },
  },
  state: {
    personList: [{ id: '001', name: '张三' }],
  },
  getters: {
    firstPersonName(state) {
      return state.personList[0].name
    },
  },
}
