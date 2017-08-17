<template>
  <div id="app">
    <router-view></router-view>
    <foot></foot>  
  </div>
</template>

<script>
import foot from './components/foot.vue'
export default {
  components: {
    foot
  }
}
</script>

<style>
  *{
    margin:0;
    padding: 0;
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  html,body{
    font-size:20px;
  }
</style>
