<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: 'About',
  beforeDestroy() {
    console.log('Home组件即将被销毁了')
  },
  mounted() {
    console.log('Home组件挂载完毕了')
  },
}
</script>

<style></style>
