<template>
  <div class="home">
   <!--header-->
   <home-header></home-header>
   
   <!--swiper-->
   <home-swiper></home-swiper>
   
   
   
  </div>
</template>

<script>
import HomeHeader from '../components/Header'
import HomeSwiper from '../components/Swiper'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components:{
  	HomeHeader,
  	HomeSwiper
  }
}
</script>

<style scoped>

</style>
