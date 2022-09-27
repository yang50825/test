<template>
    <div class="app">
        <h1>{{msg}}, 学生姓名{{studentName}}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"/>

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法, 使用@或者v-on) -->
        <!-- <Student @aite="getStudentName" @demo="m1"></Student> -->

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法, 使用ref) -->
        <Student ref="student" @click.native="show"/>
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
        methods: {
            getSchoolName(name) {
                console.log('App收到学校名：' + name);
            },
            getStudentName(name, ...params) {
                console.log('App收到学生名：' + name, params);
                this.studentName = name;
            },
           
            m1() {
                console.log('demo事件被触发了');
            },
            show() {
                console.log('hello')
            }
        },
        mounted() {
            // setTimeout(() => {
                const x = this.$refs.student.$on('aite', this.getStudentName); // 绑定自定义事件
                console.log(x);
                this.$refs.student.$on('demo', this.m1);
                // this.studentName = x.name
                // this.$refs.student.$once('aite', this.getStudentName); // 绑定自定义事件（一次）
            // }, 3000);
        }
    }
</script>

<style scoped>
    .app {
        background-color: gray;
    }

</style>