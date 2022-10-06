const obj = {
    install(Vue) {
        console.log('@@install');
        // 全局过滤器
        Vue.filter('mySlice', function(val) {
            return val.slice(0, 4);
        });


        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        });

        // 在原型上定义方法
        Vue.prototype.hello = ()=>{alert('hello');}
    }
}

export default obj;