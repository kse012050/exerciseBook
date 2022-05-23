<template>
    <div>
        <div v-for="job in fetchedJobs" v-bind:key="job.id">{{ job.title }}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed : {
        ...mapGetters({
            fetchedJobs : 'fetchedJobs' 
        })
    },
    created(){
        this.$store.dispatch('FETCH_JOBS');
    }
}
</script>

<style>

</style>