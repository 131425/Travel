<template>
	<div>
		<router-link tag="div" to="/" class="header-abs" v-if="showAbs">
			<span class="iconfont">&#xe624;</span>
		</router-link>
		
		<div 
			class="header-fixed" 
			v-if="!showAbs"
			:style="showStyle"
		>
				城市选择
			<router-link tag="div" to="/" class="header-back">
				<span class="iconfont">&#xe624;</span>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'DetailHeader',
		data () {
			return  {
				showAbs:true,
				showStyle:{
					opacity: 0
				}
			}
		},
		methods:{
			handleScorll(){
				const top = document.documentElement.scrollTop;
				if (top > 60) {
					let opacity = top / 120;
					opacity = opacity > 1 ? 1 : opacity
					this.showStyle = { opacity }
					this.showAbs = false
				} else {
					this.showAbs = true
				}
			}
		},
		activated(){
			window.addEventListener('scroll',this.handleScorll);
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../../assets/styles/varibles.styl';
	.header-abs
		position:absolute
		top:.2rem
		left:.2rem
		width:.6rem
		height:.6rem
		line-height:.6rem
		background:rgba(0,0,0,.8)
		border-radius:.4rem
		color:#fff
		text-align:center
	.header-fixed
		position:fixed
		top:0
		left:0
		right:0
		height:.86rem
		line-height:.86rem
		overflow:hidden
		text-align:center
		color:#fff
		background:$bgcolor
		z-index:999
		.header-back
			width:.64rem
			text-align:center
			font-size:.4rem
			position:absolute
			top:0
			left:0
</style>