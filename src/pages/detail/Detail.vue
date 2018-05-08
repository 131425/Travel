<template>
	<div>
		<detail-banner
			:sightName="sightName"
			:bannerImg="bannerImg"
		></detail-banner>
		
		<detail-header
			
		>
		</detail-header>
		
		<div class="content">
			<detail-list :list="categoryList"></detail-list>
		</div>
		
	</div>
</template>

<script>
	import DetailBanner from './components/Banner'
	import DetailHeader from './components/Header'
	import DetailList from './components/List'
	import axios from 'axios'
	export default{
		name: 'Detail',
		components:{
			DetailBanner,
			DetailHeader,
			DetailList
		},
		data () {
			return {
			    sightName:'',
			    bannerImg:'',
			    categoryList: [],
			}
		},
		methods:{
			getDetailInfo(){
				axios.get('/api/detail.json',{
					params:{
					  id: this.$route.params.id
					}
				})
				.then(this.handleDetailSucc)
			},
			handleDetailSucc(res){
				res = res.data
				if(res.ret &&　res.data){
					const data = res.data
					console.log(data);
					this.sightName = data.sightName;
					this.bannerImg = data.bannerImg;
					this.categoryList = data.categoryList
				}
			}
		},
		mounted(){
			this.getDetailInfo()
		}
	}
</script>

<style lang="stylus" scoped>
	.content
		height:13rem
</style>