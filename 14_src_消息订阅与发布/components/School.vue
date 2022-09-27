<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>

    import pubsub from "pubsub-js";

    // 组件交互相关的代码(数据、方法等等)
    export default {
        name:'School',
        data() {
            return {
                schoolName: "test",
                address: '北京'
            }
        },
        mounted() {
            // console.log(this);
            // this.$bus.$on('hello', (data) => {
            //     console.log('我是School组件，收到了数据', data);
            // });
            this.pubId = pubsub.subscribe('hello', (msgName, data)=> {
                console.log('有人发布了hello，hello消息的回调执行了 ' + data);
            });
        },
        beforeDestroy() {
            // this.$bus.$off('hello');
            pubsub.unsubscribe(this.pubId);
        }
    };
</script>

<style scoped>
    /* 组件的样式 */
    .demo {
        background-color: skyblue;
        padding: 5px;
    }
</style>