<template>
    <ul>
        <li v-for="(todoItems,index) in todoItems" v-bind:key="todoItems">
            <button class="material-icons doneIcon">done</button>
            {{ todoItems }}
            <button class="material-icons deleteIcon" v-on:click="removeItem(todoItems,index)">delete_forever</button>
        </li>
    </ul>
</template>

<script>
export default {
    data:function(){
        return{
            todoItems:[]
        }
    },
    created : function(){
        // this.todoItems.push()
        // console.log(localStorage.getItem());
        // console.log(localStorage.length);
        for(var i = 0; i < localStorage.length;i++){
            // console.log(typeof localStorage.key(i));
            if(localStorage.key(i) !=='loglevel:webpack-dev-server'){
                this.todoItems.push(localStorage.key(i))
            }
        }
    },
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