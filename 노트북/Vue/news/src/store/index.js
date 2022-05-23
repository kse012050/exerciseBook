import Vuex from 'vuex';
import { fetchNewsList ,  fetchJobsList , fetchAskList} from '../api/index.js';


export const store = new Vuex.Store({
    state : {
        news : [],
        jobs : [],
        ask : []
    },
    getters : {
        fetchedNews(state) {
            return state.news
        },
        fetchedJobs(state){
            return state.jobs
        },
        fetchedAskb(state){
            return state.ask
        }
    },
    mutations : {
        SET_NEWS(state, news){
            state.news = news;
        },
        SET_JOBS(state, jobs){
            state.jobs = jobs;
        },
        SET_ASK(state, ask){
            state.ask = ask;
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
        },
        FETCH_ASK(context){
            fetchAskList()
                .then(({ data }) => context.commit('SET_ASK', data))
                .catch((error)=>console.log(error))
        }
    }
})