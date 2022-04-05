<template>
    <div>
        <ul>
            <li v-for="youtubeData in this.youtubeData" v-bind:key="youtubeData.id">
                <h2>{{ youtubeData.snippet.title}}</h2>
                <img v-bind:src="youtubeData.snippet.thumbnails.medium.url" alt="video thumbnail">
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data :function() {
    return {
            requestOptions : {
                method: 'GET',
                redirect: 'follow'
            },
            youtubeData : []
        };
    },
    created(){
        /* const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }; */
        console.log(axios);
         fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDYt_M1ZCPgn78zXl23y6ZLnP-5LdWyAhM", this.requestOptions)
            // fetch(test, requestOptions)
            .then(response => {
                // console.log(response);
                return response.json();
            })
            .then(result => {
                console.log(result.items);
                this.youtubeData = result.items;
                this.test();
            })
            .catch(error => console.log('error', error))

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