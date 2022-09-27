<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大10倍为：{{ bigSum }}</h1>
    <h3>我在{{ school }}, 学习{{ subject }}</h3>
    <h3 style="color: red">Person组件的总人数是：{{ personList.length }}</h3>
    <select v-model="n">
      <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1, // 用户选择的数字
      //   sum: 0, // 当前的和
    }
  },
  methods: {
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
    ...mapMutations({ increment: 'JIA', decrement: 'JIAN' }),
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
    // ...mapMutations(['JIA', 'JIAN']),

    // 借助mapActions生成对应的方法
    ...mapActions({ incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' }),
  },
  computed: {
    // 借助mapGetter生成计算属性，从getters中读取数据(数组写法)
    ...mapGetters(['bigSum']),
    // 借助mapState生成计算属性， 从state中读取数据（对象写法）
    // ...mapState({ sum: 'sum', subject: 'subject', school: 'school' }),

    // 借助mapState生成计算属性， 从state中读取数据（数组写法）
    ...mapState(['sum', 'subject', 'school', 'personList']),
  },
  mounted() {
    const x = mapState({
      sum: 'sum',
      subject: 'subject',
      school: 'school',
    })
    // console.log(x)
  },
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>
