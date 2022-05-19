<template>
    <div>
        <div v-for="user in fetchedNews" v-bind:key="user.id">{{ user.title }}</div>
    </div>
</template>

<script>
// import axios from 'axios';
// import { fetchNewsList } from '../api/index'
import { mapGetters } from 'vuex';
export default {
// https://api.hnpwa.com/v0/news/1.json
    data(){
        // return {
        //     users : []
        // }
    },
    computed : {
        ...mapGetters({
            fetchedNews : 'fetchedNews'
        })
    },
    created(){
        // let vm = this;
        // fetchNewsList()
        //     .then(function(response){
        //         console.log(response);
        //         vm.users = response.data
        //     })
        //     .catch(function(error){
        //         console.log(error)
        //     })
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style>

</style>