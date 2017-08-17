<template>
  <div id="head">
    <x-header :left-options="{showBack: false}">
      <tab :line-width="2" active-color="#ff3531" custom-bar-width="80px">
        <tab-item selected>
          <router-link to="/home/autoload">自动推送</router-link>
        </tab-item>
        <tab-item>
          <router-link to="/home/handle">手动推送</router-link>
        </tab-item>
      </tab>
    </x-header>
  </div>
</template>

<script>
import { XHeader, Tab, TabItem } from 'vux'
export default {
  components: {
    XHeader,
    Tab,
    TabItem
  }
}
</script>

<style scoped>
  #head .vux-header{
    background: #1c2632;
  }
  #head .vux-tab{
    background: none;
    height: 40px;
  }
  #head .vux-tab a{
    color:#666;
  }
  #head .vux-tab .vux-tab-selected a{
    color:rgb(255, 53, 49);
  }
  #head .vux-tab .vux-tab-item{
    background: none;
  }
</style>
