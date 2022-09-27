<template>
  <div class="todo-header">
    <p>查询商品信息</p>
    <input
      type="text"
      placeholder="请输入要查询的商品"
      @keyup.enter="findFn"
      v-model="title"
    />
    <button @click="findFn">查询</button>
    <hr />
    <!-- <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/> -->
    <p>添加商品信息</p>
    <div>
      <input type="text" placeholder="商品名称" v-model="goodsObj.goodsName" />
    </div>
    <div>
      <input type="text" placeholder="商品价格" v-model="goodsObj.goodsPrice" />
    </div>
    <div>
      <input type="text" placeholder="商品数量" v-model="goodsObj.goodsCount" />
    </div>
    <button @click="sendFn">发布</button>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import axios from 'axios'
export default {
  name: 'MyHeader',
  data() {
    return {
      //收集用户输入的title
      title: '',
      goodsObj: {
        goodsName: '',
        goodsPrice: '',
        goodsCount: '',
      },
    }
  },
  methods: {
    add() {
      //校验数据
      if (!this.title.trim()) return alert('输入不能为空')
      //将用户的输入包装成一个todo对象
      const todoObj = { id: nanoid(), title: this.title, done: false }
      //通知App组件去添加一个todo对象
      this.$emit('addTodo', todoObj, 1, 2, 3)
      //清空输入
      this.title = ''
    },
    sendFn() {
      console.log(this.goodsObj)
      axios({
        url: 'http://localhost:3001/api/consumer/goods/addGoods',
        method: 'POST',
        data: this.goodsObj,
      }).then((res) => {})
    },
    findFn() {
      this.$emit('findListByName', this.title)
    },
  },
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
