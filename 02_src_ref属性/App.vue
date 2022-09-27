<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDOM">点我输出上方的DOM元素</button>
        <School ref="sch"></School>
    </div>
</template>

<script>
import School from "./components/School.vue"
export default {
    name: 'App',
    data() {
        return {
            msg: 'hello world'
        }
    },
    methods: {
        showDOM() {
            console.log(this.$refs.title);
            console.log(this.$refs.sch);
        }
    },
    components: { School: School }
}
</script>

<style>

</style>