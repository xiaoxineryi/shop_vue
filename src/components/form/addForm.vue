<template>
	<div>
		<el-dialog title="商品添加" :visible.sync="FormVisible">
			<el-form :model="form">
				<el-form-item label="商品名" prop="shopName" :label-width="formLabelWidth">
				    <el-input v-model="form.shopName" ></el-input>
				</el-form-item>
				<el-form-item label="商品价格" prop="price" :label-width="formLabelWidth">
				    <el-input v-model="form.price" ></el-input>
				</el-form-item>
				<el-form-item label="商品库存" prop="left" :label-width="formLabelWidth">
				    <el-input v-model="form.left" ></el-input>
				</el-form-item>
				<el-form-item label="商品类别" prop="type">
					 <el-cascader
					    v-model="form.type"
					    :options="menuList"
						:props="{children:'subList',value:'type',label:'type'}">
						</el-cascader>
				</el-form-item>
			</el-form>
			<span> 商品图片 </span>
			<el-upload
			  ref="upload"
			  action="/baseurl/addShop/"
			  list-type="picture-card"
			  :on-preview="handlePictureCardPreview"
			  :on-remove="handleRemove"
			  :on-change="handleChange"
			  :auto-upload="false"
			  >
			  <i class="el-icon-plus"></i>
			</el-upload>
			<el-dialog :visible.sync="dialogVisible">
			  <img width="100%" :src="dialogImageUrl" alt="">
			</el-dialog>
			<el-button type="primary" round @click="submit">提交</el-button>
			<el-button type="danger" round @click="off">取消</el-button>
		</el-dialog>
	</div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
	props:{
		FormVisible:false
	},
	computed:{
		...mapState('Menu',{
			menuList:'menuList'
		})
	},
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
		fileList:[],
		form:{
			type:'',
			sellerName:this.$store.state.userName,
			shopName:'',
			price:0,
			left:0,
		},
		formLabelWidth:"120"
      };
    },
    methods: {
      handleRemove(file, fileList) {
        // alert(file.name);
      },
	   handleChange(file,fileList){
		  this.fileList = fileList
	  } 
	  ,
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
	  off(){
		  this.$emit('disshow')
	  },
	  submit(){
		  // alert(this.fileList[0].url)
		  var submitForm = new FormData();
		  this.fileList.forEach((val,index)=>{
			  submitForm.append("files",val.raw);
		  })
		  submitForm.append("shopName",this.form.shopName)
		  submitForm.append("sellerName",this.form.sellerName)
		  submitForm.append("price",this.form.price)
		  submitForm.append("left",this.form.left)
		  submitForm.append("type",this.form.type)
		  // alert(this.form.type)
		  this.$api.addShop(submitForm).then((res)=>{
			  this.$emit('addInfo',res);
		  })
	  },
	  
    }
  }
</script>