<template>
	<div>
		<div>
			<el-row>
				<div v-for="obj in goodsList" style="display: block; float: left;">
					<div @click="goDetail(obj.shopID)">
						<img :src="obj.url" width="250px" height="300px" style="margin: 20px;">
						<p style="text-align: center;"> {{obj.shopName}}</p>
					</div>
				</div>
			</el-row>
			<el-row>
				<el-pagination
				  layout="prev, pager, next"
				  :total="count"
				  :page-size="4"
				  :current-page="tempPage"
				  @current-change="handleCurrentChange">
				</el-pagination>
			</el-row>
		</div>
	</div>
</template>

<script>
	import {mapState,mapActions} from 'vuex'
	export default{
		computed:{
			...mapState('Menu',{
				goodsList:'goodsList',
				menuList:'menuList',
				tempMenu:'tempMenu',
				count:'count',
				tempPage:'tempPage'
			})
		},
		methods:{
			f(){
				alert(this.menuList[0].category)
				alert(this.goodsList)
				alert(this.tempMenu)
			},
			goDetail(shopID){
				this.$router.push({name:'shopDetail',params:{shopID:shopID}})
			},
			...mapActions("Menu",{
				get_index:"get_index",
				page_change:"page_change"
			}),
			handleCurrentChange(val){
				this.page_change(val);
			}
		},
		watch:{
			goodsList(val){
				// this.goodsList.forEach(obj=>{
				// 	obj.url = require("../assets/imgs/"+obj.url);
				// 	// alert(obj.url)
				// })
			}
		},
		
	}
</script>

<style>
</style>
