<template>
    <div class="inputArea">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addItem">
        <button v-on:click="addItem">
            <span class="material-icons">
                add
            </span>
        </button>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            listItems:[],
            newTodoItem:'',
        }
    },
    methods:{
        addItem:function(){
            localStorage.setItem(this.newTodoItem, this.newTodoItem);
        }
    }
}
</script>

<style>
.inputArea{display: flex;}
.inputArea input[type="text"]{flex:1; padding:10px;}
.inputArea button{
    color: black;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 49%, rgba(241,203,247,1) 76%, rgba(0,212,255,1) 100%);
    }
</style>