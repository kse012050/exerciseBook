<template>
    <div>
        <ul v-for="item in listData" v-bind:key="item.id">
            <li>
                <mark>{{ item.points || 0}}</mark>
                <div>
                    <strong>
                        <template v-if="item.url">
                            <a v-bind:href="item.url">
                                {{ item.title }}
                            </a>
                        </template>
                        <template v-else>
                            <router-link v-bind:to="`/User/${item.user}`">
                                {{ item.title }}
                            </router-link>
                        </template>
                    </strong>
                    <router-link v-bind:to="`/User/${ item.user }`">{{ item.user || item.domain }}</router-link>
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