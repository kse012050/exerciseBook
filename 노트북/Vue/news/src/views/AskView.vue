<template>
    <div>
        <div v-for="ask in ask" v-bind:key="ask.id">{{ ask.title }}</div>
    </div>
</template>

<script>
import { fetchAskList } from '../api/index'
export default {
    data(){
        return {
            ask : []
        }
    },
    created(){
        const vm = this;
        fetchAskList()
            .then((respone)=>{
                console.log(respone);
                vm.ask = respone.data
            })
            .catch(function(error){
                console.log(error)
            })
    }
}
</script>

<style>

</style>