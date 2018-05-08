<template>
	<div>
		<div class="banner" @click="handlerBannerClick">
			<img 
				:src="bannerImg" 
				class="banner-img"
			/>
			<div class="banner-info">
				<div class="banner-title">{{sightName}}</div>
				<div class="banner-number">
					<span class="iconfont">&#xe632;</span>
					<span>55</span>
				</div>
			</div>
		</div>
		
		<common-gallary 
			:gallaryImgs="gallaryImgs"
			v-if="showGallary"
			@close="closeGallary"
		></common-gallary>
	</div>
</template>

<script>
	import CommonGallary from '@/common/gallary/Gallary'
	export default{
		name: 'DetailBanner',
		props:{
			sightName: String,
			bannerImg: String
		},
		components:{
			CommonGallary
		},
		data(){
			return {
				showGallary:false,
				gallaryImgs: ["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg", 
				"http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"],
			}
		},
		methods:{
			handlerBannerClick(){
				this.showGallary = true
			},
			closeGallary(){
				this.showGallary = false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.banner
		overflow:hidden
		height:0
		padding-bottom:55%
		position:relative
		.banner-img
			width:100%
		.banner-info
			width:100%
			display:flex
			align-items:center
			justify-content: space-around
			position:absolute
			bottom:0
			z-index: 1;
		    line-height: .8rem
		    color: #fff
		    font-size: .28rem
		.banner-title
			flex:1
			margin-left:.5rem
			font-size: .36rem
		.banner-number
			padding: 0 .4rem
			height:.4rem
			line-height:.4rem
			background:rgba(0,0,0,.8)
			border-radius:.2rem
			margin-right:.5rem
</style>