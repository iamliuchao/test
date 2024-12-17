<template>
	<view>
		<form @submit="formSubmit" @reset="formReset">
			<view>姓名</view>
			<input name="nickname" placeholder="请输入用户名"/>
			
			<view>
				<view>性别</view>
				<radio-group name="gender">
					<lable>
						<radio value="男">男</radio>
					</lable>
					<lable>
						<radio value="女">女</radio>
					</lable>
				</radio-group>
			</view>
			
			<view>
				<view>爱好</view>
				<checkbox-group name="loves">
					<lable>
						<checkbox value="读书">读书</checkbox>
					</lable>
					<lable>
						<checkbox value="写字">写字</checkbox>
					</lable>
				</checkbox-group>
			</view>
			
			<view>
				<view>年龄</view>
				<slider value="20" name="age" show-value></slider>
			</view>
			
			<view>保留选项</view>
			<switch name="switch"></switch>
			
			<button type="primary" form-type="submit">提交</button>
			<button type="primary" form-type="reset">重置</button>
			
		</form>
	</view>
</template>

<script>
	import graceChecker from '../../../common/graceChecker.js'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
				formSubmit: function(e) {
					console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
	                //定义表单规则
	                var rule = [
	                    {name:"nickname", checkType : "string", checkRule:"1,3",  errorMsg:"姓名应为1-3个字符"},
	                    {name:"gender", checkType : "in", checkRule:"男,女",  errorMsg:"请选择性别"},
	                    {name:"loves", checkType : "notnull", checkRule:"",  errorMsg:"请选择爱好"}
	                ];
	                //进行表单检查
	                var formData = e.detail.value;
	                var checkRes = graceChecker.check(formData, rule);
	                if(checkRes){
	                    uni.showToast({title:"验证通过!", icon:"none"});
	                }else{
	                    uni.showToast({ title: graceChecker.error, icon: "none" });
	                }
				},
				formReset: function(e) {
					console.log('清空数据')
				}
			}
	}
</script>

<style>

</style>
