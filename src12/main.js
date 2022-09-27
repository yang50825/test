import Vue from 'vue'
import App from './App.vue'
// 引入插件
import vueResource from 'vue-resource'
// import plugins from './plugins';

// 使用插件
// Vue.use(plugins);
Vue.use(vueResource)

const vm = new Vue({
  el: '#app',
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
})
