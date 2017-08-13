<template>
  <div id="head">
    <x-header :left-options="{showBack: false}">
      <tab :line-width="2" active-color="#ff3531" custom-bar-width="80px">
        <tab-item selected>自动推送</tab-item>
        <tab-item>手动推送</tab-item>
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
  #head .vux-tab .vux-tab-item{
    background: none;
  }
</style>
