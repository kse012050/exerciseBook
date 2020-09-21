<template>
    <transition-group name="list" tag="ul">
        <li v-for="(todoItem,index) in this.$store.state.todoItems" v-bind:key="todoItem.item">
            <button class="material-icons doneIcon" v-bind:class="{checkBtnComplated: todoItem.complated}" v-on:click="toggleComplate(todoItem,index)">done</button>
            <span v-bind:class="{textCompleted: todoItem.complated}">{{ todoItem.item }}</span>
            <button class="material-icons deleteIcon" v-on:click="removeItem(index)">delete_forever</button>
        </li>
    </transition-group>
</template>

<script>
export default {
    methods :{
        removeItem:function(index){
            this.$emit('removeTodoItem',index);
        },
        toggleComplate:function(todoItem, index){
            this.$emit('toggleComplate',todoItem,index);
            console.log(this.$store.state.todoItemsa[0]);
        }
    },
    created:function(){
        // console.log(this.$store.state.todoItemsa)
    }
}
</script>

<style scoped>
    ul{margin-bottom: 10px;}
    ul li{display: flex; justify-content: space-between; padding: 10px 20px; list-style: none; background: #B9A0F5;}
    ul li:not(:last-of-type){margin-bottom: 5px;}
    button{background: transparent; border: none;}
    .doneIcon{color: #3D65F2;}
    .deleteIcon{color: #F50043;}
    .checkBtnComplated{color: white;}
    .textCompleted{color: white;}
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }
</style>