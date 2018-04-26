<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item in recommend" key="item.id">
				<img :src="item.imgUrl" class="item-img"/>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'HomeRecommend',
		data(){
			return{
				recommend:[
				{
					id:'001',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1709/28/288fbeccc335f774a3.img.jpg_200x200_4a81bde9.jpg',
					title:'“最忆是杭州”- G20峰会特别版《印象西湖》',
					desc:'这里最近很火哦，好多人都在点评它呢！'
				},
				{
					id:'002',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1412/be/c788f0f3767d2ea037b9b66d2010bfa4.water.jpg_200x200_ead93bcd.jpg',
					title:'宋城千古情',
					desc:'这里最近很火哦，好多人都在点评它呢111111！'
				}]
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