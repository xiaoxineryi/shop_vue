<template>
	<div>
		<el-row class="tac">
		  <el-col >
		    <el-menu
		      default-active="2"
		      class="el-menu-vertical-demo"
			  background-color="#ffffff" 
			  v-for="(category,index) in menuList"
			  :key = "index">
			  
		      <el-submenu :index=index.toString()>
		        <template slot="title">
		          <i class="el-icon-location"></i>
		          <span>{{category.type}}</span>
		        </template>		
		        <el-menu-item-group>
		          <template slot="title">分组一</template>
		          <el-menu-item v-for="(item,subidx) in category.subList" :key="item.type" @click="choose(item.type)" >{{item.type}}</el-menu-item>
		        </el-menu-item-group>
		      </el-submenu>
		    </el-menu>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	import {mapState,mapActions} from 'vuex'
	
	export default{
		name:'search',
		computed:{
			...mapState("Menu",{
				menuList:"menuList",
				}
			)
		},
		methods:{
			...mapActions("Menu",{
				getlist:"menu_change"
			}),
			choose(item){
				this.getlist({"category":item,"page":1});
				this.$router.push({name:'shopView',params:{shop:item}})
			}
		},
		mounted() {
			
		}
	}
</script>

<style>
</style>
