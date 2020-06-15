<template>
	<div>
		<el-container>
			<el-aside width="200px">
				<el-row class="tac">
				  <el-col :span="6" style="width: 100%;">
				    <el-menu
				      default-active="1"
				      class="el-menu-vertical-demo">
				      <el-menu-item index="1">
				        <i class="el-icon-document"></i>
				        <span slot="title" @click="to_sellRecord">销售记录</span>
				      </el-menu-item>
					  <el-menu-item index="2">
					    <i class="el-icon-edit"></i>
					    <span slot="title" @click="to_sellEdit">修改产品</span>
					  </el-menu-item>
				    </el-menu>
				  </el-col>
				</el-row>
			</el-aside>
			<el-container>
			  <el-main>
					<el-row class="tac">
						<el-col :off="6">
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
	export default{
		computed:{
			...mapState([
				'userName',
			])
		},
		methods:{
			to_sellRecord(){
				this.$router.push({name:'sellRecord',params:{'userName':this.userName}})
			},
			to_sellEdit(){
				this.$router.push({name:'sellEdit',params:{'userName':this.userName}})
			}
		}
	}
</script>

<style>
</style>
