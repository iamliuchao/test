<template>
	<view>
		<view class="uniUi-page-head">
			<view class="uniUi-page-head-title">icon</view>
		</view>
		<view v-for="(value,index) in iconType" :key="index">
			<icon :type="value" size="26"/>
			<text>{{value}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconType:['success','success_no_circle','info','warn','waiting','cancel','download','search','clear']
			}
		},
		onLoad() {
			//#ifdef MP-ALIPAY
			   this.iconType=['info','warn','waiting','cancel','download','search','clear','success_no_circle','loading']
			// #endif
			//#ifdef MP-WEIXIN||APP-PLUS
			   this.iconType=['success','success_no_circle','info','warn','waiting','cancel','download','search','clear']
			//#endif
			//#ifdef MP-BAIDU
			   this.iconType=['success','info','warn','waiting','success_no_circle','clear','search','personal','setting',
			   'top','close','cancel','download','checkboxSelected','radioSelected','radioUnselect']			
			// #endif
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
