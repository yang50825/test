<template>
  <div>
    <Count></Count>
    <hr />
    <Person></Person>
  </div>
</template>

<script>
import Person from './components/Person'
import Count from './components/Count'
export default {
  name: 'App',
  components: {
    Count,
    Person,
  },
}
</script>

<style></style>
