<template>
    <div>
        <!-- <div v-for="ask in fetchedAsk" v-bind:key="ask.id">{{ ask.title }}</div> -->

        <p v-for="ask in this.$store.state.ask" v-bind:key="ask.id">
            <!-- <a v-bind:href="ask.url">{{ ask.title }}</a> -->
            <router-link v-bind:to="`/item/${ask.id}`">{{ ask.title }}</router-link>
            <!-- `/item/${ask.url}` -->
            <small>{{ ask.time_ago }}{{ ask.user }}</small>
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed : {
        ...mapGetters({
            fetchedAsk : 'fetchedAsk'
        })
        /* ...mapState({
            ask : state => state.ask
        }) */
    },
    created(){
        this.$store.dispatch('FETCH_ASK')
        console.log(this.$store.state.ask);
    }
}
</script>

<style>

</style>