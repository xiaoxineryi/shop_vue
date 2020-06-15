<template>
	<el-dialog title="用户充值" :visible.sync="chargeVisible">
	  <el-form :model="form" :rules="rules" ref="form">
	    <el-form-item label="充值金额" prop="chargeMoney" :label-width="formLabelWidth">
	      <el-input v-model="form.chargeMoney" ></el-input>
	    </el-form-item>
	  </el-form>
	  <div slot="footer" class="dialog-footer">
	    <el-button @click="off">取 消</el-button>
	    <el-button type="primary" @click="charge">确 定</el-button>
	  </div>
	</el-dialog>
</template>

<script>
	import {check_charge} from '../../utils/validate.js'
	
	export default {
		name:'logform',
		props:{
			chargeVisible: false
		},
		data(){
			return{
			form:{
			chargeMoney:0
			},
			rules:{
				chargeMoney:[{validator:check_charge,trigger:'blur'}]
			},
			formLabelWidth:"120"
		}
	},
		methods:{
			charge(){
				this.$api.charge(this.$store.state.userName,this.form.chargeMoney).then((res)=>{
					alert("充值成功");
					this.$emit('disshow');
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
