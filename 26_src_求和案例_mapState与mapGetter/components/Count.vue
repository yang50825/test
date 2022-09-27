<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大10倍为：{{ bigSum }}</h1>
    <h3>我在{{ school }}, 学习{{ subject }}</h3>
    <select v-model="n">
      <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1, // 用户选择的数字
      //   sum: 0, // 当前的和
    }
  },
  methods: {
    increment() {
      //   this.sum += this.n
      this.$store.commit('JIA', this.n)
    },
    decrement() {
      //   this.sum -= this.n
      this.$store.commit('JIAN', this.n)
    },
    ...mapMutations({ increment: 'JIA', decrement: 'JIAN' }),
    incrementOdd() {
      //   if (this.$store.state.sum % 2) {
      // 求模为1 true， 求模为0 false 1是奇数 2是偶数
      // this.sum += this.n
      this.$store.dispatch('jiaOdd', this.n)
      //   }
    },
    incrementWait() {
      //   setTimeout(() => {
      // this.sum += this.n
      this.$store.dispatch('jiaWait', this.n)
      //   }, 1000)
    },
  },
  computed: {
    // getSchool() {
    //   return this.$store.state.school
    // },
    // 靠程序员自己去写计算属性
    // sum() {
    //   return this.$store.state.sum
    // },
    // subject() {
    //   return this.$store.state.subject
    // },
    // bigSum() {
    //   return this.$store.getters.bigSum
    // },
    // 借助mapState生成计算属性， 从state中读取数据（对象写法）
    // ...mapState({ sum: 'sum', subject: 'subject', school: 'school' }),

    // 借助mapState生成计算属性， 从state中读取数据（数组写法）
    ...mapState(['sum', 'subject', 'school']),
    ...mapGetters(['bigSum']),
  },
  mounted() {
    const x = mapState({
      sum: 'sum',
      subject: 'subject',
      school: 'school',
    })
    console.log(x)
  },
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>
