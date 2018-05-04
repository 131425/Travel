<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
				<div class="item-list">
					<div class="item border-bottom">西藏</div>
					<div class="item border-bottom">西藏</div>
					<div class="item border-bottom">西藏</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
				<div class="item-list">
					<div class="item border-bottom">西藏</div>
					<div class="item border-bottom">西藏</div>
					<div class="item border-bottom">西藏</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
				<div class="item-list">
					<div class="item border-bottom">西藏</div>
					<div class="item border-bottom">西藏</div>
					<div class="item border-bottom">西藏</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
				<div class="item-list">
					<div class="item border-bottom">西藏</div>
					<div class="item border-bottom">西藏</div>
					<div class="item border-bottom">西藏</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
				<div class="item-list">
					<div class="item border-bottom">西藏</div>
					<div class="item border-bottom">西藏</div>
					<div class="item border-bottom">西藏</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
				<div class="item-list">
					<div class="item border-bottom">西藏</div>
					<div class="item border-bottom">西藏</div>
					<div class="item border-bottom">西藏</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		name:'CityList',
		data(){
			return {
				
			}
		},
		mounted(){
			this.scroll = new BScroll(this.$refs.wrapper);
		}
	}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
	.border-topbottom
		&:before
		 border-color:#ccc
		&:after
		 border-color:#ccc
	.border-bottom
		&:before
		 border-color:#ccc
	.list
		position: absolute
		top:1.58rem
		left:0
		right:0
		bottom:0
		background:#fff
		overflow:hidden
		.title
			line-height:.6rem
			background:#eee
			color:#666
			padding-left:.2rem
		.button-list
			padding:.1rem .6rem .1rem .1rem
			overflow:hidden
			.button-wrapper
				float:left
				width:33.33%
				.button
					text-align:center
					margin:.1rem
					padding: .1rem 0
					border:.02rem solid #ccc
					border-radius:0.06rem
		.item-list
			.item
				line-height:.66rem
				color:#666
				padding-left:.2rem			
</style>
