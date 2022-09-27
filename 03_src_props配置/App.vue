<template>
    <div>
        <Student ref="stu" name='张三' :age='18' sex='女'/>
    </div>
</template>

<script>
import Student from "./components/Student.vue";
export default {
    name: 'App',
    data() {
        return {
            msg: 'hello world'
        }
    },
    methods: {
        
    },
    components: { Student }
}
</script>

<style>

</style>