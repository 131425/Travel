<template>
  <div class="home">
   <!--header-->
   <home-header></home-header>
   
   <!--swiper-->
   <home-swiper></home-swiper>
   
   <!--icons-->
	 <home-icons></home-icons>
	 
	 <!--recommend-->
	 <home-recommend></home-recommend>
	 
	 <!--weekend-->
	 <home-weekend></home-weekend>

  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components:{
  	HomeHeader,
  	HomeSwiper,
  	HomeIcons,
  	HomeRecommend,
  	HomeWeekend
  }
}
</script>

<style scoped>

</style>
