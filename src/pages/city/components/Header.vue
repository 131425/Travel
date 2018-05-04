<template>
	<div class="header">
		城市选择
		<span class="iconfont header-back">&#xe624;</span>
	</div>
</template>

<script>
	export default{
		name:'City'
	}
</script>

<style lang="stylus" scoped>
 @import '../../../assets/styles/varibles.styl';
	.header
		height:.86rem
		line-height:.86rem
		overflow:hidden
		text-align:center
		color:#fff
		background:$bgcolor
		position:relative
		.header-back
			width:.64rem
			text-align:center
			font-size:.4rem
			position:absolute
			top:0
			left:0
</style>