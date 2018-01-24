<template>
  <div id="app">
    <app-header></app-header>
    <users></users>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Users from './components/Users'
import Footer from './components/Footer'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    "users": Users,
    "app-header": Header,
    "app-footer": Footer
  },
  data() {
    return {
      title: "这是我的第一个脚手架项目"
    }
  }
}
</script>

<style scoped>
  h1 {
    color: purple;
  }
</style>
