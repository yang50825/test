import Vue from 'vue'
import App from './App.vue'
// 完整引入ElementUI
// 引入ElementUI组件库
// import ElementUI from 'element-ui'
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css'
// 应用ElementUI
// Vue.use(ElementUI)

// 按需引入
import { Button, Row, DatePicker } from 'element-ui'
Vue.use(Button)
Vue.use(Row)
Vue.use(DatePicker)

new Vue({
  el: '#app',
  render: (h) => h(App),
})

// console.log(vm)
