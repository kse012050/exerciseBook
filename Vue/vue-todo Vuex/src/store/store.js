import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// use 는 Vue의 플러그인
// 설정을 해줘야 this.$store 로 접근가능

const storage = {
    fetch(){
        const arr = [];
        if(localStorage.length > 0){
            for(var i = 0; i < localStorage.length;i++){
                if(localStorage.key(i) !=='loglevel:webpack-dev-server'){
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },

}

export const store = new Vuex.Store({
    state:{
        todoItems: storage.fetch(),
    },
    mutations:{
        addOneItem(state, todoItem){
            var obj = {complated:false, item:todoItem};
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem:function(state,index){
            localStorage.removeItem(state.todoItems[index].item);
            state.todoItems.splice(index,1);
        },
        toggleOneItem:function(state,payload){
            state.todoItems[payload.index].complated = !(state.todoItems[payload.index].complated);
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        removeAll:function(state){
            console.log('111');
            localStorage.clear();
            state.todoItems = [];
        }
    }
    // mutations:{
    //     created : function(){
    //     if(localStorage.length > 0){
    //         for(var i = 0; i < localStorage.length;i++){
    //             if(localStorage.key(i) !=='loglevel:webpack-dev-server'){
    //             this.todoItemsa.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    //             console.log(this.todoItemsa[i]);
    //             }
    //         }
    //     }
    //     },
    // }

});