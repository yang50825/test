<template>
  <div class="student">
    <h1>{{msg}}</h1>
    <h2>姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
    <h2>年龄：{{myAge}}</h2>
    <button @click="updateAge">点我修改年龄</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            msg: 'hello world',
            myAge: this.age
        }
    },
    methods: {
        updateAge() {
            this.myAge++;
        }
    },
    // props:['name', 'age', 'sex'], // 简单声明接收

    // 接收的同时对类型进行限制
    // props: {
    //     name: String,
    //     age: Number,
    //     sex: String
    // }

    // 接收的同时对类型进行限制+默认值的指定+必要性的限制
    props: {
        name: {
            type: String,
            required: true
        },
        age : {
            type: Number,
            default: 99
        },
        sex: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
   
</style>