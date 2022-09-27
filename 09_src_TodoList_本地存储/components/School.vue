<template>
    <div class="demo">
        <h2>学校名称：{{name | mySlice}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="test">点我测试hello</button>
    </div>
</template>

<script>

    export default {
        name: 'Student',
        data() {
            return {
                name: '五道口职业技术学院',
                address: '北京'
            }
        },
        methods: {
            test() {
                this.hello();
            }
        },
    }
</script>

<style scoped>
    .demo{
        background-color: orange;
    }
</style>>