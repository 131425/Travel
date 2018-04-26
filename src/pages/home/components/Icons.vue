<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <img class="icon-images" :src="item.imgUrl" />
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeIcons',
    props:{
    	iconList: Array
    },
    data() {
      return {
      }
    },
    computed: {
      //计算有几页 swiper-slide
      pages(){
      	const pages = [];
      	this.iconList.forEach((item, index)=>{ //index 下标
      		const page = Math.floor(index / 8);
      		if(!pages[page]){
      			pages[page] = []
      		}
      		pages[page].push(item);
      	});
      	return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
	@import '../../../assets/styles/varibles.styl'
	.icons >>> .swiper-wrapper
		height:0
		padding-bottom:50%
	.icons
		margin-top:.1rem
		.icon
			overflow:hidden
			height: 0
			width:25%
			float: left
			padding-bottom:25%
			text-align:center
			display:flex
			align-items:center
			flex-direction: column 
			.icon-images
				width:1.1rem
				height:1.1rem
				margin:0.25rem auto 0.1rem auto
			.icon-desc
				color:$darkTextColor
				height:.44rem
</style>

