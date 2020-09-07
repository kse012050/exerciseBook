<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem='addOneItem'></TodoInput>
    <TodoList v-bind:propsdata="todoItems" 
              v-on:removeTodoItem="removeOneItem"
              v-on:toggleComplate="toggleOneItem">
    </TodoList>
    <TodoFooter v-on:removeAll="removeAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data : function(){
    return{
      todoItems : []
    }
  },
  methods:{
    addOneItem:function(todoItem){
      console.log(todoItem.complated);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      this.todoItems.push(todoItem);
    },
    removeOneItem:function(todoItems,index){
      localStorage.removeItem(this.todoItems[index].item);
      this.todoItems.splice(index,1);
    },
    toggleOneItem:function(index){
      console.log(index);
    },
    removeAll:function(){
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created : function(){
    // if(localStorage.length > 0){
      for(var i = 0; i < localStorage.length;i++){
          if(localStorage.key(i) !=='loglevel:webpack-dev-server'){
            this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            console.log(localStorage.key(i));
          }
      }
    // }
  },
  components: {
    'TodoHeader':TodoHeader,
    'TodoInput':TodoInput,
    'TodoList':TodoList,
    'TodoFooter':TodoFooter
  }
}
</script>

<style>
  *{margin: 0; padding: 0;}
  #app{
    text-align: center;
  }
</style>
