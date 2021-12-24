<template>
    <div>
        <todo-header></todo-header>
        <todo-input v-on:addTodoItem="addOneItem"
            v-bind:propsdata="todoItems" 
        ></todo-input>
        <todo-list 
            v-bind:propsdata="todoItems" 
            v-on:removeItem="removeOneItem" 
            v-on:toggleItem="toggleOneComplete">
        </todo-list>
        <todo-footer v-on:clearItem="clearAllItem"></todo-footer>
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
    data(){
        return {
            todoItems : []
        }
    },
    methods : {
        addOneItem(todoItem){
            const obj = {completed : false, item : todoItem}
            localStorage.setItem(todoItem , JSON.stringify(obj));
            this.todoItems.push(obj);
        },
        removeOneItem(todoItem , index){
            localStorage.removeItem(todoItem.item);
            this.todoItems.splice(index,1);
        },
        toggleOneComplete(todoItem,index){
            // todoItem.completed = !todoItem.completed;
            this.todoItems[index].completed = !this.todoItems[index].completed;
            localStorage.removeItem(localStorage.key(index));
            localStorage.setItem(todoItem.item , JSON.stringify(todoItem))
        },
        clearAllItem(){
            localStorage.clear();
            this.todoItems = [];
            // this.todoItems.splice(0,this.todoItems.length);
        }
    },
    components : {
        'todo-header' : TodoHeader,
        'todo-input' : TodoInput,
        'todo-list' : TodoList,
        'todo-footer' : TodoFooter,
    } 
   
}
</script>

<style>
    body{
        text-align: center;
        background-color: #f6f6f6;
    }
    input{
        border-style: groove;
        width: 200px;
    }
    button{
        border-style: groove;
    }
    .shadow{
        box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
    }
</style>
