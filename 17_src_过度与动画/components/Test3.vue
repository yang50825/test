<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- 集成第三方动画 -->
        <transition-group 
            name="animate__animated animate__bounce" 
            :appear="true"
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp"
        >
            <h1 v-show="!isShow" key="1">hello</h1>
            <h1 v-show="isShow" key="2">world</h1>
        </transition-group>
    </div>
</template>

<script>

import 'animate.css'

export default {
    name: "Test",
    data() {
        return {
            isShow: true
        }
    }
}
</script>

<style scoped>
h1 {
    background-color: orange;
}

</style>