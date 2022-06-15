<template>
  <div>
    <test />
    <ul>
      <li>
        문자열 : {{ str }}
      </li>
        숫자 : {{ num }}
      <li>
        배열 : {{ array[0] }}
      </li>
      <li>
        오브젝트 : {{ obj.a }}
      </li>
      <li>
        computed : {{ test }}
      </li>
      <li>
        methods : {{ test01 }}
      </li>
    </ul>
    <button v-on:click="test01(2)">click</button>
  </div>
</template>

<script>
import Basic from './view/Basic.vue'
export default {
  data(){
    return {
      str : '문자열',
      num : 1,
      array : [1,2,3],
      obj : {
        a : 'A',
        b : 1,
      }
    }
  },
  components: {
    test : Basic
  },
  computed : {
    test(){
      return this.num * 2;
    }
  },
  methods : {
    test01(a){
      console.log('methods');
      this.num = this.num + a;
    }
  },
  watch : {
    num(){
      console.log('whtch');
    }
  },
  created() {
    console.log('created');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
