<template>
	<view>
		<button size="mini" :disabled="bd"  @click="goto('../../index/index')">
{{buttonText}}
</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				"buttonText":"按钮", //组件内容值
				"bd":false          //组件属性值
			}
		},
		methods: {
			goto(url){
				uni.showToast({   //弹窗
					title:"触发了按钮点击事件，跳转到"+url,
					icon:"success",
					duration:2000
				});
				setTimeout(function(){    //定时
					uni.redirectTo({  //页面重定向
						url:url
					})
				},2000);
			}
		}
	}
</script>