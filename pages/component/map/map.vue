<template>
	<view>
		<map :longitude="longitude" :latitude="latitude" :markers="covers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 latitude: 39.909,
			     longitude: 116.39742,
				
				covers:[{
					latitude: 39.909,
					longitude: 116.39742,
					
					// #ifdef APP-PLUS
					   iconPath:'../../../static/app-plus/location@3x.png'
					// #endif
					// #ifndef APP-PLUS
					   iconPath:'../../../static/location.png'
					// #endif
					
				}]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
     map{
		 width: 100%;
		 height: 600rpx;
	 }
</style>
