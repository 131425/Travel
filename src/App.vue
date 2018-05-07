<template>
  <div id="app">
  	<!--会缓存不活动的组件实例-->
    <keep-alive>
    	<router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
