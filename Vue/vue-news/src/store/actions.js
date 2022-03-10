import { fetchNewsList , fetchJobsList , fetchAskList , fetchUserInfo , fetchItemInfo} from '../api/index.js'

export default{
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
    },
    FETCH_ASK(context){
        fetchAskList()
            .then(function(response){
                context.commit('SET_ASK', response.data)
            })
            .catch(function(error){
                console.log(error);
            })
    },
    FETCH_USER(context , name){
        fetchUserInfo(name)
            .then(function(response){
                context.commit('SET_USER',response.data);
            })
            .catch(function(error){
                console.log(error);
            })
    },
    FETCH_ITEM({ commit } , id){
        fetchItemInfo(id)
            .then(({ data }) => {
                commit('SET_ITEM', data)
            })
            .catch(error => {
                console.log(error);
            });
    }
}