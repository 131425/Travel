<template>
  <div class="home">
  	
   <home-header></home-header>
   
   <home-swiper :swiperlist="listSwiper"></home-swiper>
   
	 <home-icons :iconList="listIcons"></home-icons>
	 
	 <home-recommend :recommendList="listRecommend"></home-recommend>
	 
	 <home-weekend :weekendList="listWeekend"></home-weekend>

  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import { mapState } from 'vuex'

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
    	lastCity: '',
    	listSwiper:[],
    	listIcons:[],
    	listRecommend:[],
    	listWeekend:[]
    }
  },
  computed:{
  	...mapState(['city'])
  },
  methods:{
  	//获取首页数据
  	getHomeInfo(){
  		axios.get('/api/index.json?city=' + this.city)
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
  	},
	 
  },
  mounted(){
  	this.lastCity = this.city;
  	this.getHomeInfo()
	},	
  //keep-alive组件停用时 调用
	activated(){
		if(this.lastCity !== this.city){
			this.getHomeInfo()
		}
	}
}
</script>

<style scoped>

</style>
