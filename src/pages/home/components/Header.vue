<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont">&#xe624;</span>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
			<span>输入城市/景点/游玩主题</span>
		</div>
		<div class="header-right">
			<span>城市</span>
			<span class="iconfont">&#xe600;</span>
		</div>
	</div>
</template>

<script>
export default{
  name: 'Header'
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
			width:1.24rem
			text-align:center
</style>