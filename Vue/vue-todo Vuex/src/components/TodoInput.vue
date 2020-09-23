<template>
    <div class="inputArea">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addItem">
        <button v-on:click="addItem">
            <span class="material-icons">
                add
            </span>
        </button>

        <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">팝업 제목 부분</h3>
            <div slot="body">팝업 내용 부분</div>
            <footer slot="footer">
                팝업 푸터 부분
                <button v-on:click="popupBtn">확인</button>
            </footer>
        </Modal>

    </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    data:function(){
        return{
            newTodoItem:'',
            showModal:false,
        }
    },
    methods:{
        addItem:function(){
            if(this.newTodoItem != ''){
                this.$store.commit('addOneItem',this.newTodoItem);
                this.newTodoItem = '';
            }else{
                this.showModal = !this.showModal;
            }
        },
        popupBtn:function(){
            this.showModal = !this.showModal;
        }
    },
    components:{
        Modal:Modal
    }
}
</script>

<style scoped>
.inputArea{display: flex; margin-bottom: 10px;}
.inputArea input[type="text"]{flex:1; padding:10px;}
.inputArea button{
    color: black;
    width: 50px;
    height: 50px;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 49%, rgba(241,203,247,1) 76%, rgba(0,212,255,1) 100%);
    }
</style>