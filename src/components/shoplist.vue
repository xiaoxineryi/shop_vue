<template>
	<div>
		<el-container>
			<el-aside width="200px">
				<search></search>
			</el-aside>
			<el-container>
			  <el-main>
					<el-row class="tac">
						<el-col :off="6">
							<el-breadcrumb separator-class="el-icon-arrow-right">
							  <el-breadcrumb-item >首页</el-breadcrumb-item>
							  <el-breadcrumb-item v-text="this.$route.params.shop" ></el-breadcrumb-item>
							</el-breadcrumb>
							<router-view></router-view>
						</el-col>
					</el-row>
		<!-- 			<el-pagination
					  layout="prev, pager, next"
					  :total="count"
					  :page-size="4"
					  :current-page="tempPage"
					  @current-change="handleCurrentChange">
					</el-pagination> -->
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import {mapState,mapActions} from 'vuex'
	import search from './menu.vue'
	
	export default{
		name:'shoplist',
		components:{
			search
		},
		data(){
			return{
				
			}
		},
		computed:{
			...mapState('Menu',{
				tempMenu:'tempMenu',
				count:'count',
				tempPage:'tempPage'
			})
		},
		methods:{
			...mapActions("Menu",{
				get_index:"get_index",
				page_change:"page_change"
			}),
			handleCurrentChange(val){
				this.page_change(val);
			}
		},
		mounted() {
			this.get_index(1);
		}
	}
</script>

<style>
</style>
