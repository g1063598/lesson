<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5>简单 / 易用 / 便捷</h5>
    <translateForm v-on:formSubmit="translateText"></translateForm>
    <translateOutput v-bind:text="text"></translateOutput>
  </div>
</template>

<script>
import TranslateForm from './components/translateForm'
import TranslateOutput from './components/translateOutput'

export default {
  name: 'App',
  data() {
    return {
      text:""
    }
  },
  methods: {
    translateText(text,language){
      this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180126T052552Z.bbe22644769379e1.9e8ea027e212d9594301d413b1210d4bd190fe6b&lang="+language+"&text="+text)
      .then((response) => {
        // console.log(response.body.text[0]);
        this.text = response.body.text[0];
      })
    }
  },
  components: {
    TranslateForm,
    TranslateOutput
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
</style>
