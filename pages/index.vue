<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			
		</view>
	</view>
	<view class="">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<image src="https://api-hmugo-web.itheima.net/pyg/banner1.png" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="https://api-hmugo-web.itheima.net/pyg/banner2.png" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="https://api-hmugo-web.itheima.net/pyg/banner3.png" mode=""></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {fly} from '../utils/fly.js'
	//import fly from '@/utils/fly.js'
	export default {
		data() {
			return {
				title: 'HelloWorld!'
			}
		},
		// mounted() {
  //          //第一参数是接口地址
  //           // fly.get('https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata').then(res=>{
  //           //     console.log(res)
  //           // })
		// },
		methods: {
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
