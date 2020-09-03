<template>
    <ul>
        <li v-for="(todoItems,index) in propsdata" v-bind:key="todoItems">
            <button class="material-icons doneIcon">done</button>
            {{ todoItems }}
            <button class="material-icons deleteIcon" v-on:click="removeItem(todoItems,index)">delete_forever</button>
        </li>
    </ul>
</template>

<script>
export default {
    props:['propsdata'],
    methods :{
        removeItem:function(todoItems, index){
            this.todoItems.splice(index,1);
            localStorage.removeItem(todoItems);
        }
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
</style>