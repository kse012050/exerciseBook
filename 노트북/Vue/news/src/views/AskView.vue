<template>
    <div>
        <div v-for="ask in fetchedAsk" v-bind:key="ask.id">{{ ask.title }}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed : {
        ...mapGetters({
            fetchedAska : 'fetchedAsk'
        })
    },
    created(){
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>