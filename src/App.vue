<template>
  <div id="app">
    <akash-board />
  </div>
</template>

<script>
import AkashBoard from './components/AkashBoard.vue'

export default {
  name: 'App',
  components: {
    AkashBoard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
