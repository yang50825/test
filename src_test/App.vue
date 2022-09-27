<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" @findListByName="findListByName" />
        <MyList :todos="todos" />
        <!-- <MyFooter
          :todos="todos"
          @checkAllTodo="checkAllTodo"
          @clearAllTodo="clearAllTodo"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import axios from 'axios'

import MyHeader from './components/MyHeader'
import MyList from './components/MyList'
import MyFooter from './components/MyFooter'

export default {
  name: 'App',
  components: { MyHeader, MyList, MyFooter },
  created() {
    axios({
      url: 'http://localhost:3001/api/consumer/goods/getGoodsList',
      method: 'GET',
    }).then((res) => {
      //   console.log(res)
      this.todos = res.data.data
      //   console.log(this.todos)
    })
  },
  data() {
    return {
      //由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
      todos: [], //JSON.parse(localStorage.getItem('todos')) || [],
    }
  },
  methods: {
    //添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    //勾选or取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    },
    //更新一个todo
    updateTodo(id, title) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.title = title
      })
    },
    //删除一个todo
    deleteTodo(goodsId) {
      console.log(goodsId)

      //   this.todos = this.todos.filter((todo) => todo.id !== id)
      axios({
        url: 'http://localhost:3001/api/consumer/goods/deleteGoodsById',
        method: 'GET',
        params: {
          id: goodsId,
        },
      }).then((res) => {
        this.todos = this.todos.filter((todo) => todo.goodsId !== goodsId)
      })
    },
    //全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done
      })
    },
    //清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done
      })
    },

    // 根据标题查询信息
    findListByName(title) {
      console.log(title)
      axios({
        url: 'http://localhost:3001/api/consumer/goods/getGoodsList',
        method: 'GET',
        params: {
          goodsName: title,
        },
      }).then((res) => {
        // console.log(res)
        this.todos = res.data.data
      })
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      },
    },
  },
  mounted() {
    this.$bus.$on('checkTodo', this.checkTodo)
    this.$bus.$on('updateTodo', this.updateTodo)
    this.pubId = this.$bus.$on('deleteTodo', this.deleteTodo)
  },
  beforeDestroy() {
    this.$bus.$off('checkTodo')
    this.$bus.$off('updateTodo')
    pubsub.unsubscribe(this.pubId)
  },
}
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(103, 159, 180);
  margin-right: 5px;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

input {
  margin-bottom: 5px;
}
</style>
