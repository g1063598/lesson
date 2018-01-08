<template>
  <div id="app">
    <comment />
  </div>
</template>

<script>
import Comment from './components/Comment.vue'

export default {
  name: 'app',
  components: {
    Comment
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
