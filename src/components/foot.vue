<template>
  <div id="foot">
    <tabbar>
      <tabbar-item selected to="/">
      	<i slot="icon" class="home"></i>
        <span slot="label">
          <router-link to="/">重点监测</router-link>
        </span>
      </tabbar-item>
      <tabbar-item>
      	<i slot="icon" class="analysis"></i>
        <span slot="label">
          <router-link to="/analysis">舆情分析</router-link>
        </span>
      </tabbar-item>
      <tabbar-item>
      	<i slot="icon" class="search"></i>
        <span slot="label">
          <router-link to="/search">高级搜索</router-link>
        </span>
      </tabbar-item>
      <tabbar-item>
      	<i slot="icon" class="personal"></i>
        <span slot="label">
          <router-link to="/personal">个人中心</router-link>
        </span>
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
  #foot a{
  	color:#7a7a7a;
  }
  #foot .weui-bar__item_on a{
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
