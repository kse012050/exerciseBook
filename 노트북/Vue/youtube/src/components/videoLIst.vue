<template>
    <ul>
        <!-- {{ youtubeData[0].snippet.title }} -->
        <li v-for="data in this.youtubeData" v-bind:key="data.id">
            {{ data.snippet.title }}
        </li>
    </ul>
</template>

<script>
export default {
    props: ['youtubeData'],
    created:function(){
        console.log(this.youtubeData);
    }
}
</script>

<style scoped>
    ul{margin: 0; padding: 0; list-style: none;}
</style>