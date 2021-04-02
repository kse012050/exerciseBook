<template>
    <div>
        <input type="text" v-model="result">
        <button v-on:click="resultClick">눌러봐</button>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            result : ""
        }
    },
    methods: {
        resultClick(){
            console.log("데이터 보내기 전 = " + this.result);
            this.$emit('resultSend',this.result);
            this.result = ""
        }
    }
}
</script>

<style>

</style>