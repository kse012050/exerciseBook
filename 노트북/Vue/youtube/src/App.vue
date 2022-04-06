<template>
  <div id="app">
    <video-list v-bind:youtubeData="youtubeData"></video-list>
  </div>
</template>

<script>
// import axios from 'axios';
import videoList from './components/videoLIst.vue'
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
      videoList
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
            this.test();
        })
        .catch(error => console.log('error', error))
    },
    created(){
   
    },
    methods : {
        test : function(){
            console.log('데이터');
            console.log(this.youtubeData);
        }
    }
}
</script>

<style>

</style>
