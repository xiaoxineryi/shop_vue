<template>
	<div id="T">
		<el-menu
		  class="el-menu-demo"
		  mode="horizontal"
		  background-color="#ffffff" 
		  opacity:0.5
		  active-text-color="#ffd04b">
		  <el-menu-item class="items" index="1"  @click="signshow= !signshow" v-if="!userName">
			  <i class="el-icon-user" > 注册</i>
		  </el-menu-item>
		  <el-menu-item class="items" index="2"  @click="logshow= !logshow" v-if="!userName">
		  	    <i class="el-icon-user" > 登陆</i>
		  </el-menu-item>
		  <el-menu-item class="items" index="3"  v-if="userName">
		  			  <i class="el-icon-user" >{{userName}}</i>
		  </el-menu-item>
		  <el-menu-item class="items" index="4" @click="out"  v-if="userName">
		  			  <i class="el-icon-user" >退出登陆</i>
		  </el-menu-item>
		  <el-menu-item class="items" index="5">
		  	  <i class="el-icon-s-home" @click="to_index">
				  主页
			  </i>
		  </el-menu-item>
		  <el-menu-item class="items" index="6" v-if="userName">
		  	  <i class="el-icon-s-goods" >
		  		 <router-link :to="{name: 'buyRecord', params: { userName: this.$store.state.userName}}">
					 已购商品
				 </router-link>
		  	  </i>
		  </el-menu-item>
		  <el-menu-item class="items" index="7" @click="chargeshow= !chargeshow" v-if="userName">
		  		<i class="el-icon-eleme">充值</i>
		  </el-menu-item>
		  <el-menu-item class="items" index="8" v-if="userName && type=='seller'">
				  <i class="el-icon-s-operation" @click="to_sellerIndex"> 商家操作 </i>
		  </el-menu-item>
		  <el-menu-item class="items" index="8" v-if="userName && type=='adminstrator'">
		  				  <i class="el-icon-s-operation" @click="to_delete"> 删除操作 </i>
		  </el-menu-item>
		</el-menu>
		
	<!-- 	<el-form :model="form" :rules="rules">
			<el-form-item label="用户名" prop='account' >
				<el-input v-model="form.account"/>
			</el-form-item>
			<el-button >提交</el-button>
		</el-form> -->

		<signform @disshow='hidewindow' :signFormVisible="signshow" ></signform>
		<logform @disshow='hidelog' :logFormVisible="logshow"></logform>
		<charge @disshow='hidecharge' :chargeVisible="chargeshow"></charge>
	</div>
</template>
<script>
	import {mapState,mapGetters,mapActions} from 'vuex'
	import {check} from '../utils/validate.js'
	import signform from './form/signwindows.vue'
	import logform from  './form/logwindows.vue'
	import charge from './form/charge.vue'
	
	export default{
		name:'T',
		data(){
			return{
				signshow:false,
				logshow:false,
				chargeshow:false
			}
		},
		computed:{
			...mapState([
				'userName',
				'error',
				'requesting',
				'type'
			])
		},
		mounted() {
			// this.$store.state.userName = '小新';
		},
		methods:{
			...mapActions("Menu",{
				get_index:"get_index"
			}),
			hidewindow(){
				this.signshow = false;
			},
			hidelog(){
				this.logshow = false;
			},
			hidecharge(){
				this.chargeshow = false;
			},
			out(){
				localStorage.removeItem("token");
				this.$store.state.userName = '';
				this.$store.state.token = '';
				this.logform = false;
				this.signshow = false;
				
			},
			to_index(){
				this.get_index(1);
				this.$router.push('/')
			},
			to_sellerIndex(){
				this.$router.push({name:'sellRecord',params:{'userName':this.userName}})
			},
			to_delete(){
				this.$router.push({name:'shopDelete'})
			}
		},
		components:{
			signform,
			logform,
			charge
		}
	}
</script>
<style>
.items{
	width: 150px;
}
.search{
	width: 500px;
}
</style>
