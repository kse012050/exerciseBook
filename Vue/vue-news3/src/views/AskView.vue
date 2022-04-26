<template>
    <div>
        <div v-for="ask in ask" v-bind:key="ask.id">{{ ask.title }}</div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            ask : []
        }
    },
    created(){
        const vm = this;
        axios.get('https://api.hnpwa.com/v0/ask/1.json')
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