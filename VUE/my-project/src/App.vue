<template>
  <div id="app">
    <h1>{{title}}</h1>
    <users></users>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      title: "这是我的第一个脚手架项目"
    }
  }
}
</script>

<style>
</style>
