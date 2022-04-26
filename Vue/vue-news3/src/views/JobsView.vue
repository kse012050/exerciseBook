<template>
    <div>
        <div v-for="job in jobs" v-bind:key="job.id">{{ job.title }}</div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            jobs : []
        }
    },
    created(){
        const vm = this;
        axios.get('https://api.hnpwa.com/v0/jobs/1.json')
            .then((respone)=>{
                console.log(respone);
                vm.jobs = respone.data;
            })
            .catch(function(error){
                console.log(error);
            })
    }
}
</script>

<style>

</style>