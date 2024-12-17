<template>
	<view class="uni-container">
		<template v-if="showSetTabBarPage">
		    <set-tab-bar @unmount="leaveSetTabBarPage"></set-tab-bar>
		</template>
		<template v-else>
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
		</template>
	</view>
</template>

<script>
	//import setTabBar from '@/components/api-set-tabbar.vue';
	export default {
		components: {
		   // setTabBar
		},
		data() {
			return {
				list:[
					{
						id: 'log',
						name: '基础API',
						open: false,
						pages: [
							'log',
							'timer',
							'ArrayToBase64'
						]
					},
					{
					    id: 'network',
					    name: '网络',
					    open: false,
					    pages: [
							'request',
							'uploadFile',
							'downloadFile',
							'websocket'
					    ]
					},
					{
					    id: 'location',
					    name: '位置',
					    open: false,
					    pages: [
							'get-location',
							'choose-location',
							'open-location',
							'mapContext'
					    ]
					},
					{
					    id: 'navigate',
					    name: '路由与页面跳转',
					    open: false,
					    pages: [
							'navigateTo',
							'redirectTo',
							'reLaunch',
							'switchTab',
							'navigateBack'
					    ]
					},
					{
					    id: 'media',
					    name: '媒体',
					    open: false,
					    pages: [
							'image',
							'file',
							'audio',
							'video'
					    ]
					},
					{
					    id: 'device',
					    name: '设备',
					    open: false,
						pages: [
							'getSystemInfo',
							'makePhoneCall',
							'scanCode',
							'openBluetoothAdapter'
						]
					},
					{
					    id: 'boundar',
					    name: '界面',
					    open: false,
						pages: [
							'show',
							'tabbar',
							'animation',
							'pullDownRefresh'
						]
					},
					{
					    id: 'services',
					    name: '服务',
					    open: false,
						pages: [
							'provider',
							'login',
							'share'
						]
					}
				],
				showSetTabBarPage: false
			}
		},
		onShow() {
		    this.navigateFlag = false;
		    this.leaveSetTabBarPage();
		},
		onHide() {
		    this.leaveSetTabBarPage();
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
				if (e === 'tabbar') {
					this.showSetTabBarPage = true;
					return;
				}
				if (typeof e === 'string') {
					const url = '/pages/API/' + e + '/' + e
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
			},
		    leaveSetTabBarPage() {
		        this.showSetTabBarPage = false;
		    }
		}
	}
</script>

<style>

</style>
