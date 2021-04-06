<template>
  <div>
      <strong v-on:click="resultClick">{{ this.receive }}</strong>
  </div>
</template>

<script>
export default {
  data:function(){
    return{
      receive : "결과값"
    }
  },
  watch:{
    receive:function(){
      console.log('정말');
    }
  },
  props:['propsdata'],
  methods:{
    resultClick: function(){
      console.log("데이터 전달 완료 = " + this.propsdata);
      this.receive = this.propsdata;
    }
  },
 
}
</script>

<style>

</style>