<template>
    <div class="student">
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    import {mixin, mixin2} from "../mixin.js"

    export default {
        name: 'Student',
        data() {
            return {
                name: '清华',
                address: '北京'
            }
        },
        methods: {

        },
        mixins: [mixin, mixin2]
    }
</script>

<style>

</style>