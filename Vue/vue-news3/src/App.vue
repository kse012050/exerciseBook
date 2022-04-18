<template>
  <div>
    <router-link to="/NewsView">news</router-link>
    <router-link to="/JobsView">jobs</router-link>
    <router-link to="/AskView">ask</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
</style>
