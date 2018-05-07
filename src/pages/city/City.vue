<template>
	<div>
		<city-header></city-header>
		
		<city-search></city-search>
		
		<!--城市列表-->
		<city-list
			:cities = "cities"
			:hot = "hotCities"
			:letter = "letter"
		></city-list>
		
		<!--字母表-->
		<city-alphabet 
			:cities = "cities"
			@changeCity="handleChangeCity"
		></city-alphabet>
	</div>
</template>

<script>
	import CityHeader from './components/Header'
	import CitySearch from './components/Search'
	import CityList from './components/CityList'
	import CityAlphabet from './components/Alphabet'
	import axios  from 'axios'
	export default{
		name:'City',
		components:{
			CityHeader,
			CitySearch,
			CityList,
			CityAlphabet
		},
		data(){
			return{
				cities: {},
				hotCities: [],
				letter:''
			}
		},
		mounted(){
			this.getCityInfo();
		},
		methods:{
			getCityInfo(){
				axios.get('/api/city.json')
				.then(this.handleCityInfoSucc)
			},
			handleCityInfoSucc(res){
				res = res.data
				if(res.ret && res.data){
					const data = res.data
					this.cities = data.cities;
					this.hotCities = data.hotCities
				}
			},
			handleChangeCity(letter){
				this.letter = letter;
			},
		}
	}
</script>

<style lang="stylus" scoped>
	
</style>