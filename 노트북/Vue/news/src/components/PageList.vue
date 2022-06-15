<template>
    <div>
        <ul v-for="user in fetchedNews" v-bind:key="user.id">
            <li>
                <mark>{{ user.points }}</mark>
                <div>
                    <strong><a v-bind:href="user.url">{{ user.title }}</a></strong>
                    <router-link v-bind:to="`/User/${ user.user }`">{{ user.user }}</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>