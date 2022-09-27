<template>
  <div class="category">
    <h3>{{title}}分类</h3>

    <!-- 定义一个挖槽(挖个坑, 等着组件的使用者进行填充) -->
    <slot name="center"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {

    }
  },
  props: ['listData', 'title']
}
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: orange;
}

img {
  width: 100%;
}
</style>