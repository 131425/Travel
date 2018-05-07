<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont">&#xe624;</span>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
			<span>输入城市/景点/游玩主题</span>
		</div>
		<router-link to="/city" tag="div">
			<div class="header-right">
				<span>{{this.handleCities}}</span>
				<span class="iconfont">&#xe600;</span>
			</div>
		</router-link>
	</div>
</template>

<script>
	import { mapState, mapGetters } from 'vuex';
	export default {
		name: 'Header',
		computed:{
			...mapState(['city']),
			...mapGetters(['handleCities'])
//			...mapState({  
//				city1: 'city'
//			})
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../../assets/styles/varibles.styl'
	.header
		height:0.86rem
		display:flex
		align-items:center
		justify-content:space-between
		background:$bgcolor
		color:#fff
		.header-left
			width:0.64rem
			text-align:center
		.header-input
			flex:1
			background:#fff
			height:0.64rem
			border-radius:0.1rem
			color:#ccc
			line-height:0.64rem
			padding:0 0.2rem
		.header-right
			min-width:1.24rem
			padding:0 .1rem
			text-align:center
</style>