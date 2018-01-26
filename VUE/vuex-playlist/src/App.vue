<template>
  <div id="app">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne'
import ProductListTwo from './components/ProductListTwo'

export default {
  name: 'app',
  components:{
    "product-list-one":ProductListOne,
    "product-list-two":ProductListTwo
  },
  data () {
    return {
      products: [
        {name:"马什么梅",price:200},
        {name:"什么冬梅",price:140},
        {name:"马冬什么",price:100},
        {name:"马冬梅",price:60}
      ]
    }
  }
}
</script>

<style>
  body{
    font-family: Ubuntu;
    color: #555;
  }
</style>
