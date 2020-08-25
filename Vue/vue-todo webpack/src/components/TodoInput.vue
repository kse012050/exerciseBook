<template>
    <div class="inputArea">
        <input type="text">
        <button>등록</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.inputArea{display: flex;}
.inputArea input[type="text"]{flex:1; padding:10px;}
.inputArea button{
    color: #ffa804;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 49%, rgba(241,203,247,1) 76%, rgba(0,212,255,1) 100%);
    }
</style>