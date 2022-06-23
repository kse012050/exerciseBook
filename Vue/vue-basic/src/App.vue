<template>
  <div>
    <h2>현재 컴포넌트에서 데이터 실험</h2>
    {{ num }}
    <button v-on:click="test01(10)">click</button>
    <h2>하우시 컴포넌트와 데이터 전달 실험</h2>
    <props v-bind:test="num" v-on:test02="test01"></props>
  </div>
</template>

<script>
import Props from './view/Props.vue'
export default {
  data(){
    return {
      num : 1,
    }
  },
  components: {
    Props
  },
  methods : {
    test01(a){
      console.log('methods');
      this.num = this.num + a;
    }
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
