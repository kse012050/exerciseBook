<template>
    <div>
        {{ str }}
        <app-header 
            v-bind:propsdata="str"
            v-on:renew="renewStr">
        </app-header>
        <app-area></app-area>
    </div>
</template>

<script>
    import AppHeader from './components/AppHeader.vue'
    import AppArea from './components/AppArea.vue'

    export default {
        data : function(){
            return {
                str : 'Header'
            }
        },
        components : {
           'app-header' : AppHeader,
           'app-area' : AppArea
        },
        methods : {
            renewStr : function(){
                this.str = 'hi';
            }
        }
    };
</script>

<style>
    
</style>