<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <!-- <button v-on:click="addTodo">add</button> -->
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>

         <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">
                경고
                <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
            </h3>
            <p slot="body">{{ modalMessage }}</p>
        </Modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
    props: ['propsdata'],
    data(){
        return {
            newTodoItem : "",
            showModal : false,
            modalTest : false,
            modalMessage : '11'
        }
    },
    methods : {
        addTodo(){
            this.modalTest = false;
            if(this.newTodoItem !== ''){
                for(let i = 0; i < this.propsdata.length; i++){
                    console.log(this.propsdata[i].item);
                    if(this.propsdata[i].item == this.newTodoItem){
                        this.modalTest = !this.modalTest;
                    }
                }
                if(this.modalTest){
                    this.modalMessage = '중복된 값입니다';
                    this.showModal = !this.showModal;    
                }else{
                    this.$emit('addTodoItem',this.newTodoItem)
                    this.clearInput();
                }
            }else{
                this.modalMessage = '값을 입력해주세요';
                this.showModal = !this.showModal;
            }
        },
        clearInput(){
            this.newTodoItem = "";
        },
        created : function(){
            
        }
    },
    components: {
        Modal
    }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478fb, #8763fb);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
    .closeModalBtn {
        color: #42b983;
    }
</style> 