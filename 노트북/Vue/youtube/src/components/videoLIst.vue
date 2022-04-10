<template>
    <ul>
        <!-- {{ youtubeData[0].snippet.title }} -->
        <li v-for="data in this.youtubeData" v-bind:key="data.id.videoId">
            <img v-bind:src="`${data.snippet.thumbnails.medium.url}`" alt="video">
            <p>{{ data.snippet.title }}</p>
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
    ul{display: flex; flex-wrap: wrap; gap: 20px;}
    ul li{width: calc((100% - 20px) / 2); box-sizing: border-box;}
    ul li img{width: 100%;}
</style>