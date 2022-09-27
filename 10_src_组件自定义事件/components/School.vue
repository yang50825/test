<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="sendSchoolName">把学校名给App</button>
    </div>
</template>

<script>
    // 组件交互相关的代码(数据、方法等等)
    export default {
        name:'School',
        data() {
            return {
                schoolName: "test",
                address: '北京'
            }
        },
        props: ['getSchoolName'],
        methods: {
            sendSchoolName() {
                this.getSchoolName(this.schoolName);
            }
        }
    };
</script>

<style scoped>
    /* 组件的样式 */
    .demo {
        background-color: skyblue;
        padding: 5px;
        margin: 10px;
    }
</style>