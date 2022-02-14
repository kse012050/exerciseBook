<template>
    <div>
        <div v-for="ask in ask" v-bind:key="ask.id">{{ ask.title }}</div>
    </div>
</template>

<script>
import { fetchAskList } from "../api/index.js";
export default {
    data(){
        return {
            ask : []
        }
    },
    created(){
        let vm = this;
        fetchAskList()
            .then(function(responsive){
                vm.ask = responsive.data
            })
            .catch(function(error){
                console.log(error);
            })
    }
}
</script>

<style>

</style>