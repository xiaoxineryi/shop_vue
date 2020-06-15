<template>
	<div>
		<el-row>
		  <el-col :span="8" v-for="(obj, index) in list" :key="index" >
		    <el-card :body-style="{ padding: '30px', height:'360px'}" shadow="hover" style="width: 260px;height: 400px;" >
		      <img :src="obj.url" class="image">
		      <div style="padding: 14px;">
		        <p>商品名称为:{{obj.shopName}}</p>
		        <p>商品单价为:{{obj.price}}</p>
				<p>商品个数为:{{obj.number}}</p>
				<p>商品总价为:{{obj.price * obj.number}}</p>
		      </div>
		    </el-card>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
		computed:{
			userName(){
				return this.$route.params["userName"]
			}
		},
		mounted(){
			this.$api.getBuyRecord(this.$store.state.userName).then((res)=>{
				this.list = res;
				
			})
		}
	}
</script>

<style>

	  
	  .bottom {
	    margin-top: 13px;
	    line-height: 12px;
	  }
	
	  .button {
	    padding: 0;
	    float: right;
	  }
	
	  .image {
		height: 200px;
	    display: block;
	  }
	
	  /* .clearfix:before,
	  .clearfix:after {
	      display: table;
	      content: "";
	  }
	  
	  .clearfix:after {
	      clear: both
	  } */
</style>
