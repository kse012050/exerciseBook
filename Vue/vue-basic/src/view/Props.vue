<template>
    <div>
        데이터 전달
        {{test}}
        <button v-on:click="testEvent">증가</button>
    </div>
</template>

<script>

export default {
    props : ['test'],
    methods : {
        testEvent : function(){
            console.log(1);
            this.$emit('test02',20)
        }
    }
}
</script>

<style>

</style>