<template>
    <div>
        <user-view></user-view>
        <h2>
            {{ fetchedItema.title }}
        </h2>
        <p>id : {{ fetchedItema.id }}</p>
        <ul>
            <li v-for="comment in fetchedItema.comments" v-bind:key="comment.id">
                <div v-html="comment.content"></div>
                <small> BY.{{ comment.time_ago }}</small>
                <router-link v-bind:to="`/user/${comment.user}`">
                    {{ comment.user }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserView from './UserView.vue';
export default {
    components : {
        UserView
    },
    computed : {
        ...mapGetters({
            fetchedItema : 'fetchedItem'
        })
    },
    created(){
        console.log(this.$route.params.id);
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM' , itemId);
    }
}
</script>

<style>

</style>