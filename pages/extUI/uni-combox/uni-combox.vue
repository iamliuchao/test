<template>
	<view>
		<uni-card :is-shadow="false" is-full="ture">
			<text>组合框一般用于可以选择也可以输入的表单项</text>
		</uni-card>
		
		<uni-section title="基本用法" type="line">
			<view>
			    <uni-combox :candidates="candidates" placeholder="请选择所在城市" v-model="city"></uni-combox>
			</view>
			<view>
				<text>所选城市为：{{city}}</text>
			</view>
		</uni-section>
		
		<uni-section title="无边框" type="circle">
			<view>
			    <uni-combox :border="false" :candidates="candidates" placeholder="请选择所在城市" v-model="city"></uni-combox>
			</view>
			<view>
				<text>所选城市为：{{city}}</text>
			</view>
		</uni-section>
		
		<uni-section title="设置无匹配选项时的提示信息" type="circle">
			<view>
			    <uni-combox emptyTips="这里什么都没有!"  placeholder="请选择所在城市" v-model="city"></uni-combox>
			</view>
			<view>
				<text>所选城市为：{{city}}</text>
			</view>
		</uni-section>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				candidates: ['北京', '南京', '东京', '武汉', '天津', '上海', '海口'],
				city:''
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
