import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
    fetch(){
        const arr = [];
        if(localStorage.length > 0){
            for(let i = 0; i < localStorage.length; i++){
                // console.log(localStorage.key(i));
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
                }
            }
        }
        return arr;
    }
}

export const store = new Vuex.Store({
    state : {
        headerText : 'TODO it!',
        todoItems: storage.fetch(),
    },
    mutations : {
        addOneItem(state, todoItem){
            console.log(state.newTodoItem);
            const obj = {completed : false, item : todoItem};
            localStorage.setItem(todoItem , JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state , item){
            localStorage.removeItem(item.todoItem.item);
            state.todoItems.splice(this.index,1);
        },
    }
});