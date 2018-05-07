<template>
	<ul class="alphabet">
		<li 
			v-for="item of letters"
			:key="item"
			:ref="item"
			@click="handleLetterClick"
			@touchstart="hanleTouchStart"
			@touchmove="hanleTouchMove"
			@touchend="hanleTouchEnd"
		>{{item}}</li>
	</ul>
</template>

<script>
	export default{
		name:'CityAlphabet',
		props:{
			cities: Object
		},
		computed:{
			letters(){
				const letters = [];
				for(let i in this.cities){
					letters.push(i);
				}
				return letters
			}
		},
		data(){
			return{
				touchStatus: false,
				scrollY:0,
				timer: null
			}
		},
		update(){
			this.scollY = this.$refs['A'][0].offsetTop;
		},
		methods:{
			handleLetterClick(e){
				this.$emit('changeCity',e.target.innerText);
			},
			hanleTouchStart(){
				this.touchStatus = true;
			},
			hanleTouchMove(e){
//				const scollY = this.$refs['A'][0].offsetTop;
				if(this.timer){
					clearTimeout();
				}
				this.timer = setTimeout(() => {
					const touchY = e.touches[0].clientY - 180;
					const index = Math.floor((touchY-this.scrollY) / 20);
					if(index >= 0 && index < this.letters.length){
						this.$emit('changeCity',this.letters[index]);
					}
				})
			},
			hanleTouchEnd(){
				this.touchStatus = false;
			},
		}
	}
</script>

<style lang="stylus" scoped>
 .alphabet 
 	position:absolute
 	right:0
 	top:1.58rem
 	bottom:0
 	width:.5rem
 	display:flex
 	flex-direction: column
 	justify-content: center
 	text-align: center
 	color:#00bcd4
 	line-height:.45rem
</style>