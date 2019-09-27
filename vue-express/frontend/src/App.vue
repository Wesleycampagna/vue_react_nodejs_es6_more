<template>
  <div id="app">
    <img alt="Vue logo"  src="./assets/godott.svg">
    <PostComponent msg="Hi" test="Wesley"/>
  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue'

export default {
  name: 'app',
  components: {
    PostComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app img {
  width: 200px;
  height: 200px;
  margin: 10px;
}

</style>
