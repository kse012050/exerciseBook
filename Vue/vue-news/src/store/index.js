import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList , fetchJobsList } from '../api/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        news : [],
        jobs : []
    },
    mutations : {
        SET_NEWS(state , news){
            state.news = news;
        },
        SET_JOBS(state , jobs){
            state.jobs = jobs
        }
    },
    actions : {
        FETCH_NEWS(context){
            // context : mutations에 접근 가능하게 만든다

            // let vm = this;
            // axios.get('https://api.hnpwa.com/v0/news/1.json')
            fetchNewsList()
                .then(function(response){
                    console.log(response);
                    context.commit('SET_NEWS' , response.data);
                    // vm.users = response.data;
                })
                .catch(function(error){
                    console.log(error);
                })
        },
        FETCH_JOBS(context){
            fetchJobsList()
            .then(response =>{
                console.log(response);
                context.commit('SET_JOBS' , response.data)
            })
            .catch(function(error){
                console.log(error);
            });
        }
    }
})