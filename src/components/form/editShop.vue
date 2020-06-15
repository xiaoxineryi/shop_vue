<template>
	<el-dialog title="商品修改" :visible.sync="editVisible">
	  <el-form :model="form" ref = "form">
		  <el-form-item label="商品编号" prop="shopID" :label-width="formLabelWidth">
		    <el-input v-model="shopID" :disabled="true"></el-input>
		  </el-form-item>
		  <el-form-item label="商品名称" prop="shopName" :label-width="formLabelWidth">
		    <el-input v-model="form.shopName" ></el-input>
		  </el-form-item>
		  <el-form-item label="商品库存" prop="left" :label-width="formLabelWidth">
		    <el-input v-model="form.left" ></el-input>
		  </el-form-item>
		  <el-form-item label="商品价格" prop="price" :label-width="formLabelWidth">
		    <el-input v-model="form.price" ></el-input>
		  </el-form-item>
	  </el-form>
	  <div slot="footer" class="dialog-footer">
	    <el-button @click="off">取 消</el-button>
	    <el-button type="primary" @click="submit">确定</el-button>
	  </div>
	</el-dialog>
</template>

<script>
	import {check_account,check_password,check_email} from '../../utils/validate.js'
	
	export default {
		name:'editForm',
		props:{
			editVisible: false,
			shopID:0
		},
		data(){
			return {
				form:{
					
				},
				formLabelWidth:"120"	
			}
		},
		methods:{
			submit(){
				this.$api.updateShopInfo(this.form).then(res=>{
					this.$emit('updateInfo',res);
					this.$emit('disshow');
				})
			},
			off(){
				this.$emit('disshow');
			}
		},
		watch:{
			shopID:function(newValue,oldValue){
				this.$api.getshopEditInfo(this.shopID).then((res)=>{
					this.form = res;
					
				})
			}
		}
	}
</script>

<style>
</style>
