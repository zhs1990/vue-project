<template>
  <div>
  	<scroller lock-x scrollbar-y use-pullup :pullup-config="pullupConfig2" height="-99" ref="demo2" @on-pullup-loading="load2">
      <div class="box2">
        <div class="weui-panel">
		    <div class="weui-panel__bd">
		        <div class="weui-media-box weui-media-box_text">
		            <h4 class="weui-media-box__title">从站起来到强起来:中国共产党引领伟大复兴</h4>
		            <ul class="weui-media-box__info">
		                <li class="weui-media-box__info__meta">来源：自动推送</li>
		                <li class="weui-media-box__info__meta">2017-8-1 15:30</li>
		                <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">类型：新闻</li>
		            </ul>
		        </div>
		        <div class="weui-media-box weui-media-box_text">
		            <h4 class="weui-media-box__title">媒体称中印边防人员互掷石块 外交部回应</h4>
		            <ul class="weui-media-box__info">
		                <li class="weui-media-box__info__meta">来源：中国网</li>
		                <li class="weui-media-box__info__meta">2017-8-1 15:30</li>
		                <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">类型：新闻</li>
		            </ul>
		        </div>
		        <div class="weui-media-box weui-media-box_text">
		            <h4 class="weui-media-box__title">媒体称中印边防人员互掷石块 外交部回应</h4>
		            <ul class="weui-media-box__info">
		                <li class="weui-media-box__info__meta">来源：中国网</li>
		                <li class="weui-media-box__info__meta">2017-8-1 15:30</li>
		                <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">类型：新闻</li>
		            </ul>
		        </div>
		        <div class="weui-media-box weui-media-box_text">
		            <h4 class="weui-media-box__title">媒体称中印边防人员互掷石块 外交部回应</h4>
		            <ul class="weui-media-box__info">
		                <li class="weui-media-box__info__meta">来源：中国网</li>
		                <li class="weui-media-box__info__meta">2017-8-1 15:30</li>
		                <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">类型：新闻</li>
		            </ul>
		        </div>
		        <div class="weui-media-box weui-media-box_text">
		            <h4 class="weui-media-box__title">媒体称中印边防人员互掷石块 外交部回应</h4>
		            <ul class="weui-media-box__info">
		                <li class="weui-media-box__info__meta">来源：中国网</li>
		                <li class="weui-media-box__info__meta">2017-8-1 15:30</li>
		                <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">类型：新闻</li>
		            </ul>
		        </div>
		        <div class="weui-media-box weui-media-box_text">
		            <h4 class="weui-media-box__title">媒体称中印边防人员互掷石块 外交部回应</h4>
		            <ul class="weui-media-box__info">
		                <li class="weui-media-box__info__meta">来源：中国网</li>
		                <li class="weui-media-box__info__meta">2017-8-1 15:30</li>
		                <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">类型：新闻</li>
		            </ul>
		        </div>
		        <div class="weui-media-box weui-media-box_text">
		            <h4 class="weui-media-box__title">媒体称中印边防人员互掷石块 外交部回应</h4>
		            <ul class="weui-media-box__info">
		                <li class="weui-media-box__info__meta">来源：中国网</li>
		                <li class="weui-media-box__info__meta">2017-8-1 15:30</li>
		                <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">类型：新闻</li>
		            </ul>
		        </div>
		        <div class="weui-media-box weui-media-box_text">
		            <h4 class="weui-media-box__title">媒体称中印边防人员互掷石块 外交部回应</h4>
		            <ul class="weui-media-box__info">
		                <li class="weui-media-box__info__meta">来源：中国网</li>
		                <li class="weui-media-box__info__meta">2017-8-1 15:30</li>
		                <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">类型：新闻</li>
		            </ul>
		        </div>
		    </div>
		</div>
      </div>
    </scroller>
  </div>
</template>

<script>
import { Scroller, Divider, Spinner } from 'vux'
export default {
  components: {
    Scroller,
    Divider,
    Spinner
  },
  methods: {
    load2 () {
      setTimeout(() => {
        this.n2 += 10
        setTimeout(() => {
          this.$refs.demo2.donePullup()
        }, 100)
        if (this.n2 === 30) {
          setTimeout(() => {
            this.$refs.demo2.disablePullup()
          }, 100)
        }
      }, 2000)
    }
  },
  data () {
    return {
      n1: 10,
      n2: 10,
      n3: 10,
      n4: 10,
      pullupConfig2: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...'
      }
    }
  }
}
</script>

<style>
</style>
