<template>
    <div>
        <ul v-for="user in fetchedNews" v-bind:key="user.id">
            <li>
                <mark>{{ user.points }}</mark>
                <div>
                    <strong><a v-bind:href="user.url">{{ user.title }}</a></strong>
                    <router-link v-bind:to="`/User/${ user.user }`">{{ user.user }}</router-link>
                </div>
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

<style scoped>
    ul li{display: flex; align-items: center;}
    ul li mark{width: 80px; line-height: 50px; text-align: center;}
    ul li div strong{font-weight: 700; display: block; margin-bottom: 5px;}
    ul li div a:hover{color: #42b883;}
</style>