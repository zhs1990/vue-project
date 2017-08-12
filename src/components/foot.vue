<template>
  <div id="foot">
    <tabbar>
      <tabbar-item>
      	<i slot="icon" class="home"></i>
        <!-- <img slot="icon" src="../assets/icon_nav_button.png"> -->
        <span slot="label">重点监测</span>
      </tabbar-item>
      <tabbar-item>
      	<i slot="icon" class="analysis"></i>
        <!-- <img slot="icon" src="../assets/icon_nav_msg.png"> -->
        <span slot="label">舆情分析</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
      	<i slot="icon" class="search"></i>
        <!-- <img slot="icon" src="../assets/icon_nav_article.png"> -->
        <span slot="label">高级搜索</span>
      </tabbar-item>
      <tabbar-item>
      	<i slot="icon" class="personal"></i>
        <!-- <img slot="icon" src="../assets/icon_nav_cell.png"> -->
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

<style scoped>
  #foot i{
  	display: block;
  	width: 100%;
  	height: 100%;
  	background-size:90%;
  	background-repeat: no-repeat;
  	
  }
  #foot span{
  	color:#7a7a7a;
  }
  #foot .weui-bar__item_on span{
  	color:#ff3333;
  }
  i.home{
  	background-image: url(../assets/icon_nav_button.png);
	background-position: center -30px;
  }
  i.analysis{
	background-image: url(../assets/icon_nav_msg.png);
	background-position: center -33px;
  }
  i.search{
	background-image: url(../assets/icon_nav_article.png);
	background-position: center -33px;
  }
  i.personal{
	background-image: url(../assets/icon_nav_cell.png);
	background-position: center -30px;
  }
  #foot .weui-bar__item_on i{
  	background-position: center -2px;
  }
  #foot .weui-bar__item_on i.home,#foot .weui-bar__item_on i.personal{
  	background-position: center -1px;
  }
</style>
