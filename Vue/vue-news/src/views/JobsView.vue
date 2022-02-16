<template>
    <div>
        <div v-for="job in jobs" v-bind:key="job.id">{{ job.title }}</div>
    </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js'
export default {
    data() {
        return{
            jobs : []
        }
    },
    created(){
        // let vm = this;
        fetchJobsList()
            .then(response =>{
                console.log(response);
                this.jobs = response.data;
            })
            .catch(function(error){
                console.log(error);
            });
    }
}
</script>

<style>

</style>