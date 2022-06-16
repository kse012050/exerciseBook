<template>
    <div>
        <ul v-for="user in listData" v-bind:key="user.id">
            <li>
                <mark>{{ user.points || 0}}</mark>
                <div>
                    <strong><a v-bind:href="user.url">{{ user.title }}</a></strong>
                    <router-link v-bind:to="`/User/${ user.user }`">{{ user.user || user.domain }}</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return {
            data : this.$route.name,
            stateData:undefined,
        }
    },
    computed : {
        listData(){
            this.dataChange();
            return this.stateData;
        }
    },
    methods :{
        dataChange(){
            console.log(this.data);
            if(this.data == 'jobs'){
                this.stateData = this.$store.state.jobs;
            }else if(this.data == 'news'){
                this.stateData = this.$store.state.news;
            }else if(this.data == 'ask'){
                this.stateData = this.$store.state.ask;
            }
        }
    },
    created(){
        console.log(this.stateData);
        this.$store.dispatch('FETCH_' + this.data.toUpperCase());
    }
}
</script>

<style scoped>
    ul li{display: flex; align-items: center;}
    ul li mark{width: 80px; line-height: 50px; text-align: center;}
    ul li div strong{font-weight: 700; display: block; margin-bottom: 5px;}
    ul li div a:hover{color: #42b883;}
</style>