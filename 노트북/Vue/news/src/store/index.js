import Vuex from 'vuex';
import { fetchNewsList ,  fetchJobsList , fetchAskList , fetchUserList , fetchItemList } from '../api/index.js';


export const store = new Vuex.Store({
    state : {
        news : [],
        jobs : [],
        ask : [],
        user : {},
        item : []
    },
    getters : {
        fetchedNews(state) {
            return state.news
        },
        fetchedJobs(state){
            return state.jobs
        },
        fetchedAsk(state){
            return state.ask
        },
        fetchedItem(state){
            return state.item
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
        },
        SET_USER(state , user){
            state.user = user;
        },
        SET_ITEM(state , item){
            state.item = item;
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
        },
        FETCH_USER({ commit } , userName){
            fetchUserList(userName)
                .then(({data}) => {
                    commit('SET_USER', data)
                })
                .catch((error)=> console.log(error));
        },
        FETCH_ITEM({ commit } , itemId){
            fetchItemList(itemId)
                .then(({ data })=> commit('SET_ITEM',data))
                .catch((error)=>console.log(error))
        }
    }
})