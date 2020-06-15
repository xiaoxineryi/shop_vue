<template>
	<el-dialog title="用户注册" :visible.sync="signFormVisible">
	  <el-form :model="form" :rules="rules" ref="form">
	    <el-form-item label="用户名" prop="userName" :label-width="formLabelWidth">
	      <el-input v-model="form.userName" ></el-input>
	    </el-form-item>
	    <el-form-item label="密码" prop="password" type="password" :label-width="formLabelWidth">
	      <el-input v-model="form.password" type="password"></el-input>
	    </el-form-item>
		<el-form-item label="邮箱" prop="email" :label-width="formLabelWidth">
		  <el-input v-model="form.email"></el-input>
		</el-form-item>
		<el-form-item>
			<el-radio v-model="form.type" label="customer">顾客</el-radio>
			<el-radio v-model="form.type" label="seller">卖家</el-radio>
		</el-form-item>
	  </el-form>
	  <div slot="footer" class="dialog-footer">
	    <el-button @click="off">取 消</el-button>
	    <el-button type="primary" @click="sign">确 定</el-button>
	  </div>
	</el-dialog>
</template>

<script>
	import {check_account,check_password,check_email} from '../../utils/validate.js'
	
	export default {
		name:'signform',
		props:{
			signFormVisible: false
		},
		data(){
			return{
			form:{
			userName:'',
			password:'',
			email:'',
			type:''
			},
			rules:{
				userName:[{validator:check_account,trigger:'blur'}],
				password:[{validator:check_password,trigger:'blur'}],
				email:[{validator:check_email,trigger:'blur'}]
			},
			formLabelWidth:"120"
		}
	},
		methods:{
			sign(){
				this.$api.sign(this.form).then((res)=>{
					this.$store.state.userName = res.userName;
					this.$store.state.token = res.token;
					this.$store.state.type = res.type
					localStorage.setItem("token",res.token);
					this.$emit('disshow');
					this.form.userName = '';
					this.form.password = '';
					this.form.email = '';
				})
			},
			off(){
				this.$emit('disshow');
			}
		}
	}
</script>

<style>
</style>
