<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<router-link 
				tag="li" 
				class="item border-bottom" 
				v-for="(item,index) in recommendList" 
				:key="item.id"
				to="/detail"
			>
				<img :src="item.imgUrl" class="item-img"/>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'HomeRecommend',
		props:{
			recommendList: Array
		},
		data(){
			return{
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.title
		line-height:.8rem
		background:#eee
		margin-top:.2rem
		text-indent:.2rem
	.item
		display:flex
		height:2.3rem
		.item-img
			width:1.7rem
			height:1.7rem
			padding:.3rem
		.item-info
			flex:1
			padding:.3rem
			min-width:0
			.item-title
				line-height:.54rem
				font-size:.32rem
				white-space:nowrap
				overflow:hidden
				text-overflow:ellipsis
			.item-desc
				line-height:.4rem
				color:#ccc
				white-space:nowrap
				overflow:hidden
				text-overflow:ellipsis
			.item-button
				background:#ff9300
				padding: 0 .2rem
				border-radius:.06rem
				margin-top:.2rem
				color:#fff
				line-height:.45rem
				
</style>