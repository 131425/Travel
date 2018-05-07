let defaultCity = '北京'
try{ //有些浏览器开启无痕浏览 或者隐身模式
	if(localStorage.city){
		defaultCity = localStorage.city
	}
}catch(e){}

export default{
	city: defaultCity
}
