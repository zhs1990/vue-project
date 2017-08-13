<template>
  <div id="app">
    <home></home> 
    <foot></foot>  
  </div>
</template>

<script>
import foot from './components/foot.vue'
import home from './components/home/home.vue'
export default {
  components: {
    foot,
    home
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
  
</style>
