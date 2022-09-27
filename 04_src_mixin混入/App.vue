<template>
    <div>
        <Student ref="stu" />
        <hr>
        <School/>
    </div>
</template>

<script>
import Student from "./components/Student.vue";
import SchoolVue from "./components/School.vue";
import School from "./components/School.vue";
export default {
    name: 'App',
    data() {
        return {
            msg: 'hello world'
        }
    },
    methods: {
        
    },
    components: { Student, School }
}
</script>

<style>

</style>