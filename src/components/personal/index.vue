<template>
  <div class="personal-page">
  	<div class="personal-msg">
  		<a href="javascript:;" class="user-img">
  			<img src="../../assets/img.jpg" alt="">
  		</a>
  		<h3>张红爽</h3>
  		<p>18043112082</p>
  		<p>过期时间：2017-08-20 12:00:00</p>
  	</div>
  	<div class="weui-panel personal-func">
	    <div class="weui-panel__bd">
	        <div class="weui-media-box weui-media-box_small-appmsg">
	            <div class="weui-cells">
	                <a class="weui-cell weui-cell_access" href="javascript:;">
	                    <div class="weui-cell__hd personal_icons"></div>
	                    <div class="weui-cell__bd weui-cell_primary">
	                        <p>主题管理</p>
	                    </div>
	                    <span class="weui-cell__ft"></span>
	                </a>
	                <a class="weui-cell weui-cell_access" href="javascript:;">
	                    <div class="weui-cell__hd personal_icons personal_icons_setting"></div>
	                    <div class="weui-cell__bd weui-cell_primary">
	                        <p>推送设置</p>
	                    </div>
	                    <span class="weui-cell__ft"></span>
	                </a>
	                <a class="weui-cell weui-cell_access" href="javascript:;">
	                    <div class="weui-cell__hd personal_icons personal_icons_msg"></div>
	                    <div class="weui-cell__bd weui-cell_primary">
	                        <p>推送消息</p>
	                    </div>
	                    <span class="weui-cell__ft"></span>
	                </a>
	                <a class="weui-cell weui-cell_access" href="javascript:;">
	                    <div class="weui-cell__hd personal_icons personal_icons_fav"></div>
	                    <div class="weui-cell__bd weui-cell_primary">
	                        <p>收藏夹</p>
	                    </div>
	                    <span class="weui-cell__ft"></span>
	                </a>
	                <a class="weui-cell weui-cell_access" href="javascript:;">
	                    <div class="weui-cell__hd personal_icons personal_icons_update"></div>
	                    <div class="weui-cell__bd weui-cell_primary">
	                        <p>检查更新</p>
	                    </div>
	                    <span class="weui-cell__ft"></span>
	                </a>
	                <a class="weui-cell weui-cell_access" href="javascript:;">
	                    <div class="weui-cell__hd personal_icons personal_icons_about"></div>
	                    <div class="weui-cell__bd weui-cell_primary">
	                        <p>关于</p>
	                    </div>
	                    <span class="weui-cell__ft"></span>
	                </a>
	                <a class="weui-cell weui-cell_access" href="javascript:;">
	                    <div class="weui-cell__hd personal_icons personal_icons_pwd"></div>
	                    <div class="weui-cell__bd weui-cell_primary">
	                        <p>修改密码</p>
	                    </div>
	                    <span class="weui-cell__ft"></span>
	                </a>
	            </div>
	        </div>
	    </div>
	</div>
	<button class="weui-cell weui-cell_access login-out">退出登录</button>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.personal-page{
	background: #efefef;
	padding-bottom: 0.75rem;
}
.personal-func{
	margin:0.75rem 0;
}
.personal-msg{
	width: 100%;
	height: 11.1rem;
	background: url(../../assets/personal_bg.jpg) no-repeat;
	background-size: 100% 100%;
	padding-top:2.5rem;
	box-sizing: border-box;
}
.user-img{
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	overflow: hidden;
	display: block;
	margin:0 auto;
}
.user-img img{
	width: 100%;
	height: 100%;
}
.personal-msg p,.personal-msg h3{
	text-align: center;
	color:#fff;
	font-weight: normal;
}
.personal-msg h3{
	font-size:0.7rem;
	margin:0.4rem 0;
}
.personal-msg p{
	font-size: 0.6rem;
}
.personal_icons{
	width: 1rem;
	height:1rem;
	background: url(../../assets/personal_icon.png) no-repeat left 5px;
	overflow: hidden;
	background-size:100%;
	margin-right:0.75rem;
}
.personal_icons_setting{
	background-position: left -34px;
}
.personal_icons_msg{
	background-position: left -73px;
}
.personal_icons_fav{
	background-position: left -112px;
}
.personal_icons_update{
	background-position: left -150px;
}
.personal_icons_about{
	background-position: left -188px;
}
.personal_icons_pwd{
	background-position: left bottom;
}
.login-out{
	width: 100%;
	display: block;
	border:none;
	background: #fff;
	font-size:17px;
}
</style>
