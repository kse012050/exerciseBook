<template>
  <div>
    <video-list></video-list>
  </div>
</template>

<script>
import VideoList from './components/VideoList.vue';
export default {
  components: {
    VideoList
  },
  beforeCreate (){
    console.log(1);
  }
}
</script>

<style>

</style>
