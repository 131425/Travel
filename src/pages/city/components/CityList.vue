<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.city}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" 
						v-for="(item,index) in hot" 
						:key="index">
						<div class="button" @click="handleChangeCity(item.name)">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div 
				class="area" 
				v-for="(item,key) of cities" 
				:key="key"
				:ref="key"
			>
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div class="item border-bottom" 
						v-for="innerItem of item"
						:key="innerItem.id"
						 @click="handleChangeCity(innerItem.name)"
					>{{innerItem.name}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { mapState, mapMutations } from 'vuex'
	export default{
		name:'CityList',
		props:{
			hot: Array,
			cities: Object,
			letter: String
		},
		computed:{
			...mapState(['city'])
		},
		watch:{
			letter(){
				if(this.letter){
					const elements = this.$refs[this.letter][0]; //必须是document元素  所以后面加[0]
					this.scroll.scrollToElement(elements);
				}
			}
		},
		methods:{
			handleChangeCity(value){
//				this.$store.commit('handleCity',value);
//				this.handleCity(value);
				this.$router.push('/');
			},
			...mapMutations(['handleCity'])
		},
		mounted(){
			this.scroll = new BScroll(this.$refs.wrapper);
		},
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
