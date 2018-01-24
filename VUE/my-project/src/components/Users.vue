<template>
  <div class="users">
    <ul>
      <li v-for="user in users">
        {{user}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    name: 'users',
    data() {
      return {
        users:["nnn","zzz","hhh"]
      }
    }
  }
</script>
<style></style>