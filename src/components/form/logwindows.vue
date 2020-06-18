<template>
	<el-dialog title="用户登陆" :visible.sync="logFormVisible">
	  <el-form :model="form" :rules="rules" ref="form">
	    <el-form-item label="用户名" prop="userName" :label-width="formLabelWidth">
	      <el-input v-model="form.userName" ></el-input>
	    </el-form-item>
	    <el-form-item label="密码"  prop="password" :label-width="formLabelWidth">
	      <el-input v-model="form.password" type="password"></el-input>
	    </el-form-item>
	  </el-form>
	  <div slot="footer" class="dialog-footer">
	    <el-button @click="off">取 消</el-button>
	    <el-button type="primary" @click="log">确 定</el-button>
	  </div>
	</el-dialog>
</template>

<script>
	import {check_account,check_password,check_email} from '../../utils/validate.js'
	
	export default {
		name:'logform',
		props:{
			logFormVisible: false
		},
		data(){
			return{
			form:{
			userName:'',
			password:'',
			},
			rules:{
				userName:[{validator:check_account,trigger:'blur'}],
				password:[{validator:check_password,trigger:'blur'}],
			},
			formLabelWidth:"120"
		}
	},
		methods:{
			log(){
				this.$api.log(this.form).then((res)=>{
					this.$store.state.userName = res.userName;
					this.$store.state.token = res.token;
					this.$store.state.type = res.type;
					localStorage.setItem("token",res.token);
					localStorage.setItem("userName",res.userName);
					this.$emit('disshow');
					this.form.userName = '';
					this.form.password = '';
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
