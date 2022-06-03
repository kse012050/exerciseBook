<template>
    <div>
        <ul v-for="user in fetchedNews" v-bind:key="user.id">
            <li>
                <strong>{{ user.title }}</strong>
                <router-link v-bind:to="`/User/${ user.user }`">{{ user.user }}</router-link>
            </li>
        </ul>
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
    strong{font-weight: 700;}
</style>