<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <School/>
        <Student></Student>
    </div>
</template>
<script>
    // 引入组件
    import School from './components/School'
    import Student from './components/Student.vue'

    export default {
        name:'App',
        data() {
            return {
                msg: 'hello',
                studentName: ''
            }
        },
        components: {
            School,
            Student,
        },
    }
</script>

<style scoped>
    .app {
        background-color: gray;
        padding: 5px;
    }

</style>