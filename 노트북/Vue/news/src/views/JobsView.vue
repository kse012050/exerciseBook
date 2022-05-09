<template>
    <div>
        <div v-for="job in jobs" v-bind:key="job.id">{{ job.title }}</div>
    </div>
</template>

<script>
import { fetchJobsList } from '../api/index'
export default {
    data() {
        return {
            jobs : []
        }
    },
    created(){
        const vm = this;
        fetchJobsList()
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