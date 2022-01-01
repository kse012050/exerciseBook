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

}