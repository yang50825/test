<template>
    <!-- 组件的结构 -->
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <h2>num的值为{{num}}</h2>
        <button @click="add">点我num++</button>
        <button @click="sendStudentName">把学生名给App</button>
        <button @click="unbind">解绑aite事件</button>
        <button @click="death">销毁当前Student组件的实例</button>
    </div>
</template>

<script>
    // 组件交互相关的代码(数据、方法等等)
    export default {
        name:'Student',
        data() {
            return {
                name: '张三',
                age: 18,
                num: 0
            }
        },
        methods: {
            add() {
                console.log('add回调函数被调用了');
                this.num++;
            },
            sendStudentName() {
                // 触发Student组件实例身上的自定义事件
                this.$emit('aite', this.name, 666, 888, 999);
                // this.$emit('demo');
                this.$emit('click');
            },
            unbind() {
                this.$off('aite'); // 解绑一个自定义事件
                // this.$off(['aite', 'demo']); // 解绑需要解绑的事件
                // this.$off(); // 解绑所有的自定义事件
            },
            death() {
                this.$destroy() // 销毁当前了当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效了
            }
        }
    };
</script>

<style>
    /* 组件的样式 */
    .student {
        background-color: blueviolet;
        padding: 5px;
    }
</style>