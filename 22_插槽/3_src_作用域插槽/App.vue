<template>
  <div class="container">
    <!-- 
        作用域插槽
        数据在组件, 但根据数据生产的结构需要组件的使用者来决定
     -->
    <Category title="游戏">
      <template scope="{games}">
        <ul>
          <li v-for="(item, index) in games" :key="index" slot="center">
            {{ item }}
          </li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="list">
        <ol>
          <li v-for="(item, index) in list.games" :key="index" slot="center">
            {{ item }}
          </li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="list">
        <h4 v-for="(item, index) in list.games" :key="index" slot="center">
          {{ item }}
        </h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'
export default {
  name: 'App',
  components: {
    Category,
  },
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}

video {
  width: 100%;
}

.foot {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>
