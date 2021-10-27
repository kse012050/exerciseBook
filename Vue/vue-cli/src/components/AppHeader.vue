<template>
    <header>
        <h1>{{ propsdata }}</h1>
        <button v-on:click="sendEvent">send</button>
        <button v-on:click="test">test</button>
    </header>
</template>

<script>
export default {
    props : ['propsdata'],
    methods : {
        sendEvent : function(){
            this.$emit('renew');
        },
        test : function(){
            console.log(this.propsdata);
            this.propsdata = 'test'
        }
    }
}
</script>

<style>

</style>