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
    data() {
      return {
        iconList: [{
            id: '001',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc: '景点门票'
          },
          {
            id: '002',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            desc: '一日游'
          },
          {
            id: '003',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
            desc: '杭州乐园'
          },
          {
            id: '004',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
            desc: '千岛湖'
          },
          {
            id: '005',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
            desc: '西溪湿地'
          },
          {
            id: '006',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc: '景点门票'
          },
          {
            id: '007',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            desc: '一日游'
          },
          {
            id: '008',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
            desc: '杭州乐园'
          },
          {
            id: '009',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
            desc: '千岛湖'
          },
          {
            id: '0010',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
            desc: '西溪湿地'
          }
        ]
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

