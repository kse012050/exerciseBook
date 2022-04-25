<template>
    <header>
        <router-link to="News">news</router-link> |
        <router-link to="Jobs">jobs</router-link> |
        <router-link to="Ask">ask</router-link>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header{color: white; background-color: #42b883; display: flex; padding: 8px;}
header .router-link-exact-active{color: #35495e;}
header a{color: white;}
</style>