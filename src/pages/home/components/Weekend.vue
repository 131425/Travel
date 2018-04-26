<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
    return{
    	list: [
		{
			id:'001',
			imgUrl:'http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
			title:'“最忆是杭州”- G20峰会特别版《印象西湖》',
			desc:'这里最近很火哦，好多人都在点评它呢！'
		},
		{
			id:'002',
			imgUrl:'http://img1.qunarzz.com/sight/source/1505/9f/7d45cc38259e0.jpg_r_640x214_156f4299.jpg',
			title:'宋城千古情',
			desc:'这里最近很火哦，好多人都在点评它呢111111！'
		}]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .25rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      white-space:nowrap
	  overflow:hidden
	  text-overflow:ellipsis
    .item-desc
      margin-top:.2rem
      line-height: .4rem
      color: #ccc
      white-space:nowrap
	  overflow:hidden
	  text-overflow:ellipsis
</style>
