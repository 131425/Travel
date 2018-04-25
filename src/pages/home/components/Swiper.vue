<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" />
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div>asdf</div>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperList: [{
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/15/9250dbc86a456302.jpg_640x200_4c7220d4.jpg'
        }, {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/b6/f9d9eac3d25e8d02.jpg_640x200_f10641be.jpg'
        }]
      }
    },
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