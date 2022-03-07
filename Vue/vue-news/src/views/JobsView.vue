<template>
    <div>
        <!-- <div v-for="job in this.$store.state.jobs" v-bind:key="job.id">{{ job.title }}</div> -->
        <p v-for="job in this.$store.state.jobs" v-bind:key="job.id">
            <a v-bind:href="job.url">{{ job.title }}</a>
            <small>{{ job.time_ago }}{{ job.user }}</small>
        </p>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('FETCH_JOBS');
    }
}
</script>

<style>

</style>