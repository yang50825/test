import Vue from 'vue'
import App from './App.vue'
// 引入插件
import vueResource from 'vue-resource'
// import plugins from './plugins';
// 引入store
import store from './store'

// 使用插件
// Vue.use(plugins);
Vue.use(vueResource)

const vm = new Vue({
  el: '#app',
  render: (h) => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
})

// console.log(vm)
