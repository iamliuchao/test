<template>
	<view class="uni-container">
		<view class="uni-panel" v-for="(item, index) in list" :key="item.id">
			<view class="uni-panel-h" @click="triggerCollapse(index, item.id)">
				<text class="uni-panel-text">{{item.name}}</text>
			</view>
			<view v-if="item.open">
				<view class="uni-navigate-item" v-for="(item2,key) in item.pages" :key="key" @click="goDetailPage(item.id, item2)">
					<text class="uni-navigate-text">{{item2.name ? item2.name : item2}}</text>
				</view>
			</view>
		</view>
		

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						id: 'view',
						name: '视图容器',
						open: false,
						pages: [
							'view',
							'scroll-view',
							'swiper',
							'match-media'
						]
					},
					{
						id: 'content',
						name: '基础内容',
						open: false,
						pages: ['icon','text', 'rich-text', 'progress']
					},
					{
						id: 'form',
						name: '表单组件',
						open: false,
						pages: ['button', 'checkbox', 'input', 'label', 'picker', 'picker-view', 'radio',
							'slider','switch', 'textarea','form',
							// #ifdef APP-PLUS || MP-WEIXIN || H5
							''
							// #endif
						]
					},
					{
						id: 'nav',
						name: '导航',
						open: false,
						pages: ['navigator']
					},
					{
						id: 'media',
						name: '媒体组件',
						open: false,
						pages: [
							'image',
							'camera',
							'audio',
							'video'
						]
					},
					// #ifndef MP-TOUTIAO || MP-KUAISHOU
					{
						id:'map',
						name:'地图',
						open:false,
						pages:['map']
					},
					//#endif
					// #ifndef QUICKAPP-WEBVIEW-UNION
					{
						id: 'canvas',
						name: '画布',
						open: false,
						pages: ['canvas']
					},
					// #endif
					// #ifdef APP-PLUS || H5
					{
						id: 'web-view',
						name: '网页',
						open: false,
						pages: [{
							name: '网络网页',
							url: '/pages/component/web-view/web-view'
						}, {
							name: '本地网页',
							url: '/pages/component/web-view-local/web-view-local'
						}]
					}
					//#endif
				]
			}
		},
		methods: {
			triggerCollapse(e, id) {
				if (!this.list[e].pages) {
					this.goDetailPage('', this.list[e].url);
					return;
				}
				for (var i = 0; i < this.list.length; ++i) {
					if (e === i) {
						this.list[i].open = !this.list[i].open;
					} else {
						this.list[i].open = false;
					}
				}
			},
			goDetailPage(panel, e) {
				console.log(panel)
				console.log(e)
				if (typeof e === 'string') {
					const url = '/pages/component/' + e + '/' + e
					console.log(url)
					if (this.hasLeftWin) {
						uni.reLaunch({
							url: url
						})
					} else {
						uni.navigateTo({
							url: url
						})
					}
				} else {
					if (this.hasLeftWin) {
						uni.reLaunch({
							url: e.url
						})
					} else {
						uni.navigateTo({
							url: e.url
						})
					}
				}
			}
		},
	}
</script>

<style>

</style>
