<template>
  <div id="app">
    <global></global>
    <router-view></router-view>
  </div>
</template>

<script>
import global from './components/global.vue'

export default{
  components:{
    global
  },

}
</script>

<style lang="scss">


</style>
