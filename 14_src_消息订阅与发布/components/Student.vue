<template>
    <!-- 组件的结构 -->
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentName">把学生名给School组件</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js';

    // 组件交互相关的代码(数据、方法等等)
    export default {
        name:'Student',
        data() {
            return {
                name: '张三',
                age: 18,
            }
        },
        mounted() {
            // console.log(this.x);
        },
        methods: {
            sendStudentName() {
                // this.$bus.$emit('hello', this.name);
                pubsub.publish('hello', this.name);
            }
        }
    };
</script>

<style>
    /* 组件的样式 */
    .student {
        background-color: blueviolet;
        padding: 5px;
        margin-top: 10px;
    }
</style>