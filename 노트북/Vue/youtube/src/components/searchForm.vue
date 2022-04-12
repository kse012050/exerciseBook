<template>
    <div>
        <input type="text" v-model="searchText" v-on:keyup.enter="searchClick">
        <button v-on:click="searchClick">
            <span class="material-icons-outlined">
                search
            </span>
        </button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            searchText : ''
        }
    },
    methods: {
        searchClick() {
            // console.log(this.searchText);
            if(this.searchText !== ''){
                this.$emit('searchFun', this.searchText);
                this.searchText = '';
            }
        }
    },


}
</script>

<style scoped>
    div{display: flex; justify-content: center; margin-bottom: 20px;}
    div input{width: 50%; height: 30px; border: 1px solid black;}
    div button{width: 30px; height: 30px; font-size: 30px;}
</style>