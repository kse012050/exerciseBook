<template>
    <div>
        <div v-for="ask in fetchedAska" v-bind:key="ask.id">
            <router-link v-bind:to="`/item/${ask.id}`">
                {{ ask.title }}
            </router-link>
            <small>{{ ask.time_ago }} by {{ ask.user }}</small>
        </div>
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