<template>
  <div id="app">
    <search-form v-on:test="test"></search-form>
    <video-list v-bind:youtubeData="youtubeData"></video-list>
  </div>
</template>

<script>
// import axios from 'axios';
import videoList from './components/videoLIst.vue';
import searchForm from './components/searchForm.vue';
export default {
 
  data :function() {
    return {
            requestOptions : {
                method: 'GET',
                redirect: 'follow'
            },
            youtubeData : [],
            youtubeData1 : '1'
        };
    },
    components : {
      videoList,
      searchForm
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
    },
    created(){
   
    },
    methods : {
        test : function(test){
            console.log(test);
            // console.log(this.youtubeData);
            fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${test}&type=video&key=AIzaSyDYt_M1ZCPgn78zXl23y6ZLnP-5LdWyAhM`, this.requestOptions)
            .then(response => response.json())
            .then(result => {
              this.youtubeData = result.items
              console.log(this.youtubeData);
            })
            .catch(error => console.log('error', error));
        },
    }
}
</script>

<style>
  #app{max-width: 1000px; margin: 0 auto;}
</style>
