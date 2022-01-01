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
        arr.sort();
        return arr;
    }
}

const state = {
    headerText : 'TODO it!',
    todoItems: storage.fetch(),
}
const getters = {
    storedTodoItems(state){
        return state.todoItems;
    }
}
const mutations = {
    addOneItem(state, todoItem){
        console.log(state.newTodoItem);
        const obj = {completed : false, item : todoItem};
        localStorage.setItem(todoItem , JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeOneItem(state , payload) {
        console.log(1);
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index,1);
    },
    toggleOneComplete(state,payload) {
        // todoItem.completed = !todoItem.completed;
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
        localStorage.removeItem(localStorage.key(payload.index));
        localStorage.setItem(payload.todoItem.item , JSON.stringify(payload.todoItem))
    },
    clearAllItem(state) {
        localStorage.clear();
        state.todoItems = [];
        // this.todoItems.splice(0,this.todoItems.length);
    }
}

export default {
    state,
    getters,
    mutations
}