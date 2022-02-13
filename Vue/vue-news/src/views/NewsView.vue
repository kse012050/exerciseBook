<template>
    <div>
        <div v-for="user in users" v-bind:key="user.id">{{ user.title }}</div>
    </div>
</template>

<script>
// import axios from 'axios';
import { fetchNewsList } from '../api/index.js'
export default {
    data() {
        return{
            users : []
        }
    },
    created() {
        let vm = this;
        // axios.get('https://api.hnpwa.com/v0/news/1.json')
        fetchNewsList()
            .then(function(response){
                console.log(response);
                vm.users = response.data;
            })
            .catch(function(error){
                console.log(error);
            })
    }
}
</script>

<style>

</style>