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
				list:[
					{
						id: 'load-more',
						name: 'uni-ui组件',
						open: false,
						pages: [
							'uni-combox',
							'uni-data-checkbox',
							'uni-data-select',
							'uni-forms',
							'uni-grid',
							'uni-goods-nav'
							]
					}
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
					const url = '/pages/extUI/' + e + '/' + e
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
		}
	}
</script>

<style>

</style>
