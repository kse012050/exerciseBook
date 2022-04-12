<template>
    <div id="app">
        <!-- <video-list v-bind:youtubeData="youtubeData"></video-list> -->
        <search-form></search-form>
        <video-list v-bind:youtubeData="youtubeData"></video-list>
    </div>
</template>

<script>
import VideoList from './components/VideoList.vue';
import SearchForm from './components/SearchForm.vue';
export default {
    components : {
        VideoList,
        SearchForm
    },
    data() {
        return{
            requestOptions : {
                method: 'GET',
                redirect: 'follow'
            },
            youtubeData : []
        }
    },
    beforeCreate(){
         fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDYt_M1ZCPgn78zXl23y6ZLnP-5LdWyAhM", this.requestOptions)
            // fetch(test, requestOptions)
            .then(response => {
                // console.log(response);
                return response.json();
            })
            .then(result => {
                // console.log(result.items);
                this.youtubeData = result.items;
                // this.test();
            })
            .catch(error => console.log('error', error))
    }
}
</script>

<style>
    #app{max-width: 1000px; margin: 0 auto;}
</style>