<template>
  <div id="app">
	  <el-container>
	    <el-header>
			<T></T>
		</el-header>
	    <el-container>
	      <router-view></router-view>
	    </el-container>
	  </el-container>
  </div>
</template>

<script>
import T from './components/navigation.vue'
import {mapState,mapActions} from 'vuex'

export default {
  name: 'app',
  components:{
	  T,
  },
  methods:{
	  ...mapActions("Menu",{
		  getMenu:'menu'
	  })
  },
  mounted() {
	    this.getMenu();
		var token = localStorage.getItem('token');
		if(token){
			this.$api.getUserByToken(token).then((rep)=>{
				this.$store.state.userName = rep.userName;
				this.$store.state.type = rep.type;
			}).catch((err)=>{
				alert(err);
			})
		};
  }
}
</script>

<style>

</style>
