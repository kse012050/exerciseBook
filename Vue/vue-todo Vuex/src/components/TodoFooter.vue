<template>
    <button v-on:click="removeAll">전체삭제</button>
</template>

<script>
export default {
    methods :{
        removeAll:function(){
            this.$store.commit('removeAll')
        }
    }
}
</script>

<style scoped>
    button{width: 100px; height: 50px; background-color: white; border-radius: 10px;  border-color: blueviolet;}
</style>