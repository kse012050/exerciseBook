import Vuex from 'vuex';
import { fetchNewsList ,  fetchJobsList} from '../api/index.js';


export const store = new Vuex.Store({
    state : {
        news : [],
        jobs : []
    },
    mutations : {
        SET_NEWS(state, news){
            state.news = news;
        },
        SET_JOBS(state, jobs){
            state.jobs = jobs;
        }
    },
    actions : {
        FETCH_NEWS(context){
            fetchNewsList()
                .then((response)=>{context.commit('SET_NEWS',response.data)})
                .catch((error)=>console.log(error))
        },
        FETCH_JOBS(context){
            fetchJobsList()
                .then((response)=>context.commit('SET_JOBS',response.data))
                .catch((error)=>console.log(error));
        }
    }
})