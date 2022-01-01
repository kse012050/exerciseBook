const addOneItem = (state, todoItem) =>{
    console.log(state.newTodoItem);
    const obj = {completed : false, item : todoItem};
    localStorage.setItem(todoItem , JSON.stringify(obj));
    state.todoItems.push(obj);
}
const removeOneItem = (state , payload) => {
    console.log(1);
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index,1);
}
const toggleOneComplete = (state,payload) => {
    // todoItem.completed = !todoItem.completed;
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(localStorage.key(payload.index));
    localStorage.setItem(payload.todoItem.item , JSON.stringify(payload.todoItem))
}
const clearAllItem = (state) => {
    localStorage.clear();
    state.todoItems = [];
    // this.todoItems.splice(0,this.todoItems.length);
}

export { addOneItem , removeOneItem , toggleOneComplete , clearAllItem } 