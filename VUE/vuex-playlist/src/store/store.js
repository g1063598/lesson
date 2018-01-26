import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    products: [
      {name:"马什么梅",price:200},
      {name:"什么冬梅",price:140},
      {name:"马冬什么",price:100},
      {name:"马冬梅",price:60}
    ]
  }
})