<template>
  <header>
      <p>
          {{nzh}}
      </p>
  </header>
</template>

<script>
export default {
  name: 'app-footer',
  data () {
    return {
        nzh: "nzh 2018 Vue.js Demo"
    }
  }
}
</script>

<style scoped>
  header {
    background-color: lightgreen;
    padding: 6px;
  }
  p {
    color: #222;
    text-align: center;
  }
</style>
