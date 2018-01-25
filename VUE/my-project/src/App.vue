<template>
  <div id="app">
    <app-header></app-header>
    <users v-bind:users="users"></users>
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
      users:[
          {name:"nnn",position:"web开发",show:false},
          {name:"zzz",position:"web开发",show:false},
          {name:"hhh",position:"web开发",show:false},
          {name:"iii",position:"web开发",show:false},
          {name:"nnn",position:"web开发",show:false},
          {name:"ggg",position:"web开发",show:false},
          {name:"nnn",position:"web开发",show:false}
        ]
    }
  }
}
</script>

<style scoped>
  h1 {
    color: purple;
  }
</style>
