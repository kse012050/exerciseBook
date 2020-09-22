<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList v-bind:propsdata="todoItems" >
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
    removeAll:function(){
      localStorage.clear();
      this.todoItems = [];
    }
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
