<template>
  <div id="app">
    <Result></Result>
    <Btn v-on:resultSend="receive"></Btn>
  </div>
</template>

<script>
import Result from './components/result.vue'
import Btn from './components/btn.vue'

export default {
  name: 'App',
  data:function(){
    return{

    }
  },
  methods:{
    receive: function(result){
      console.log("App에서 데이터 받음 = " + result);
    }
  },
  components: {
    Result,
    Btn
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
