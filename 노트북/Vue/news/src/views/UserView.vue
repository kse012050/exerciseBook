<template>
    <div>
        <pro-file v-bind:userInfo="userInfo"></pro-file>
    </div>
</template>

<script>
import ProFile from '../components/ProFile.vue'
export default {
    components : {
        ProFile
    },
    computed : {
        userInfo(){
            console.log(this.$store);
            return this.$store.state.user
        }
    },
    created() {
        console.log(this.$route.params.id);
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER',userName)
    }
}
</script>

<style>

</style>