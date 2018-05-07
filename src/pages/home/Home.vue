<template>
  <div class="home">
   <!--header-->
   <home-header></home-header>
   
   <!--swiper-->
   <home-swiper :swiperlist="listSwiper"></home-swiper>
   
   <!--icons-->
	 <home-icons :iconList="listIcons"></home-icons>
	 
	 <!--recommend-->
	 <home-recommend :recommendList="listRecommend"></home-recommend>
	 
	 <!--weekend-->
	 <home-weekend :weekendList="listWeekend"></home-weekend>

  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

import axios from 'axios'

export default {
  name: 'Home',
  components:{
  	HomeHeader,
  	HomeSwiper,
  	HomeIcons,
  	HomeRecommend,
  	HomeWeekend
  },
  data () {
    return {
    	listSwiper:[],
    	listIcons:[],
    	listRecommend:[],
    	listWeekend:[]
    }
  },
  mounted(){
  	this.getHomeInfo()
  },
  methods:{
  	//获取首页数据
  	getHomeInfo(){
  		axios.get('/api/index.json')
  			.then(this.getSuccess)
  	},
  	getSuccess(res){
  		const data = res.data.data
  		if(data){
  			this.listSwiper = data.swiperList
  			this.listIcons = data.iconList
  			this.listRecommend = data.recommendList
  			this.listWeekend = data.weekendList
  		}
  	}
  }
}
</script>

<style scoped>

</style>
