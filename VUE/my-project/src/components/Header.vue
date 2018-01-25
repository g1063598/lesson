<template>
  <header v-on:click="changeTitle">
      <h1>
          {{title1}}{{title}}
      </h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  props: ["title"],
  data () {
    return {
     title1: "Vue.js Demo"
    }
  },
  methods: {
    changeTitle: function(){
      this.title="changed";
    }
  }
}
</script>

<style scoped>
  header {
    background-color: lightgreen;
    padding: 10px;
  }
  h1 {
    color: #222;
    text-align: center;
  }
</style>
