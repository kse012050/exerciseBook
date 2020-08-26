<template>
    <ul>
        <li v-for="todoItems in todoItems" v-bind:key="todoItems">
            {{ todoItems }}
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
    }
}
</script>

<style>

    ul li{list-style: none; background: linear-gradient(180deg, rgba(224,250,210,1) 0%, rgba(0,255,171,1) 100%);}
</style>