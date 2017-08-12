<template>
  <div>
    <tabbar>
      <tabbar-item>
        <img slot="icon" src="../assets/icon_nav_button.png">
        <span slot="label">重点监测</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../assets/icon_nav_msg.png">
        <span slot="label">舆情分析</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <img slot="icon" src="../assets/icon_nav_article.png">
        <span slot="label">高级搜索</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../assets/icon_nav_cell.png">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style>

</style>
