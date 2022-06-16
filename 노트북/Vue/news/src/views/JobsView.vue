<template>
    <div>
        <page-list></page-list>
        <!-- <ul v-for="user in fetchedJobs" v-bind:key="user.id">
            <li>
                <mark>{{ user.points || 0}}</mark>
                <div>
                    <strong><a v-bind:href="user.url">{{ user.title }}</a></strong>
                    <router-link v-bind:to="`/User/${ user.user }`">{{ user.user || user.domain }}</router-link>
                </div>
            </li>
        </ul> -->
    </div>
</template>

<script>
import PageList from '../components/PageList.vue'
/* import { mapGetters } from 'vuex'; */
export default {
    components : {
        PageList
    },
   /*  computed : {
        ...mapGetters({
            fetchedJobs : 'fetchedJobs' 
        })
    },
    created(){
        this.$store.dispatch('FETCH_JOBS');
    } */
}
</script>

<style scoped>
    ul li{display: flex; align-items: center;}
    ul li mark{width: 80px; line-height: 50px; text-align: center;}
    ul li div strong{font-weight: 700; display: block; margin-bottom: 5px;}
    ul li div a:hover{color: #42b883;}
</style>