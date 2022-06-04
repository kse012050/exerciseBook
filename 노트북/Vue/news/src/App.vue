<template>
  <div>
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  name: 'App',
  components: {
    ToolBar
  }
}
</script>

<style>
 @import 'css/reset.css';
body{margin: 0;}
</style>
