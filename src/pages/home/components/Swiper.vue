<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item in swiperlist" :key="item.id">
        <img :src="item.imgUrl" />
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props:{
    	swiperlist: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    computed:{
    	showSwiper(){
    		return this.swiperlist.length
    	}
    }
  }
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet-active
		background: #fff
	.wrapper
		overflow:hidden
		width:100%
		height:0
		padding-bottom:31.25%
		background:#ccc
		.swiper-slide img
			width:100%
</style>