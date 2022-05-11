import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js';


export const store = new Vuex.Store({
    state : {
        news : [],
    },
    mutations : {
        SET_NEWS(state, news){
            state.news = news;
        }
    },
    actions : {
        FETCH_NEWS(context){
            fetchNewsList()
                .then((response)=>{context.commit('SET_NEWS',response.data)})
                .catch((error)=>console.log(error))
        }
    }
})