import Vue from 'vue'
import Vuex from 'vuex'
import Sign from './modules/sign.js'
import Menu from './modules/menu.js'

Vue.use(Vuex)

const state = {
	userName:'',
	type:'',
	token:'',
	error:[],
}

const getters = {
	userName: (state)=>state.userName,
	error:(state)=>state.error,
}



export default new Vuex.Store({
	state,
	getters,
	modules:{
		Sign,
		Menu
	}
});
