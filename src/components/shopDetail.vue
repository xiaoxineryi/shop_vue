<template>
	<el-row class="tac">
		<el-col :off="6">
			<el-container>
			  <el-aside width="500px">
				  <div class="block">
				      <el-carousel height="600px">
				        <el-carousel-item v-for="img,index in imgs" :key="index">
				          <img :src="img.url" />
				        </el-carousel-item>
				      </el-carousel>
				    </div>
			  </el-aside>
			  <el-main>
				  <el-form ref="form" :model="form" label-width="80px">
				    <el-form-item label="商品名称">
				      <el-input v-model="form.shopName" :disabled="true"></el-input>
				    </el-form-item>
				    <el-form-item label="商家名称">
				      <el-input v-model="form.sellerName" :disabled="true"></el-input>
				    </el-form-item>
				    <el-form-item label="产品库存">
				      <el-input v-model="form.left" :disabled="true"></el-input>
				    </el-form-item>
					<el-form-item label="产品单价">
					  <el-input v-model="form.price" :disabled="true"></el-input>
					</el-form-item>
					<el-form-item label="购物数量">
					  <el-input-number v-model="form.num" :min="1" ></el-input-number>
					</el-form-item>
					<el-form-item label="产品总价">
						<el-input v-model="totalMoney" :disabled="true"></el-input>
					</el-form-item>
				    <el-form-item label="即时配送">
				      <el-switch v-model="delivery"></el-switch>
				    </el-form-item>
					<el-button type="primary" @click='submitOrder' > 提交订单	</el-button>
				  </el-form>
			  </el-main>
			</el-container>
		</el-col>
	</el-row>
</template>

<script>
	export default {
	    data() {
	      return {
	        form: {
			  shopID:0,
	          shopName: '',
	          sellerName:'',
	          left:0,
	          price:0,
	          num:0,
	        },
			delivery:true,
			imgs:{
				
			}
	      }
	    },
		computed:{
			totalMoney:function(){
				return this.form.num * this.form.price;
			}
		},
	    methods: {
	      submitOrder() {
	        this.$api.buyShop(this.$store.state.userName,this.form.shopID,this.form.num).then((res)=>{
				alert("购买成功");
			})
	      }
	    },
		mounted() {
			
			var ID = this.$route.params["shopID"]
			this.$api.getShopDetail({shopID:ID}).then((res)=>{
				this.imgs = res.goodDescribeList;
				this.form.shopName = res.shopName;
				this.form.sellerName = res.sellerName;
				this.form.left = res.left;
				this.form.price = res.price;
				this.form.shopID = res.shopID;
			})
		}
	  }
</script>

<style>
	.el-carousel__item h3 {
	    color: #475669;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 150px;
	    margin: 0;
	  }
	
	  .el-carousel__item:nth-child(2n) {
	     background-color: #99a9bf;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	     background-color: #d3dce6;
	  }
</style>
