<template>
    <div>
        test
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
        }
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
                console.log(response);
                return response.json();
            })
            .then(result => {
                console.log(result);
            })
            .catch(error => console.log('error', error))
    },
    methods : {
        test : function(){
            console.log(1);
        }
    }   
}
</script>

<style>

</style>