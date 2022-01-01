import Vue from 'vue';
import Vuex from 'vuex';
// import todoApp from './modules/todoApp'
import * as getters from './getters.js'
import * as mutations from './mutations.js'

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
        arr.sort();
        return arr;
    }
}

export const store = new Vuex.Store({
   /*  modules : {
        todoApp : todoApp
    } */
    state : {
        headerText : 'TODO it!',
        todoItems: storage.fetch(),
    },
    getters :getters,
    mutations : mutations
});