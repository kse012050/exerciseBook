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
        todoItems: storage.fetch()
    },
    mutations : {
        addOneItem(todoItem){
            const obj = {completed : false, item : todoItem}
            localStorage.setItem(todoItem , JSON.stringify(obj));
            this.todoItems.push(obj);
        },
    }
});