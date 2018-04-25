<template>
  <div class="home">
   <!--header-->
   <home-header></home-header>
   
   <!--swiper-->
   <home-swiper></home-swiper>
   
   <!--icons-->
	 <home-icons></home-icons>

  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components:{
  	HomeHeader,
  	HomeSwiper,
  	HomeIcons
  }
}
</script>

<style scoped>

</style>
