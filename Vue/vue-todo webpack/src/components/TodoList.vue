<template>
    <ul>
        <li v-for="(todoItem,index) in propsdata" v-bind:key="todoItem.item">
            <button class="material-icons doneIcon" v-bind:class="{checkBtnComplated: todoItem.complated}" v-on:click="toggleComplate(todoItem,index)">done</button>
            <span v-bind:class="{textCompleted: todoItem.complated}">{{ todoItem.item }}</span>
            <button class="material-icons deleteIcon" v-on:click="removeItem(index)">delete_forever</button>
        </li>
    </ul>
</template>

<script>
export default {
    props:['propsdata'],
    methods :{
        removeItem:function(index){
            this.$emit('removeTodoItem',index);
        },
        toggleComplate:function(todoItem, index){
            this.$emit('toggleComplate',todoItem,index);
        }
    },
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
</style>