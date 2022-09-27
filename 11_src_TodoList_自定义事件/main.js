import Vue from 'vue';
import App from './App.vue';
// import plugins from './plugins';

// 使用插件
// Vue.use(plugins);

const vm = new Vue({
    el: '#app',
    render: h => h(App)
});