import * as TYPE from '../actionType/signType.js'

const state={

}

const getters={
	
}

const mutations={
	[TYPE.SHOW_ERROR](state,error){
		state.error = error;
		alert(state.error);
	},
	[TYPE.SIGN_REQUEST](state){
		
	},
	[TYPE.SIGN_SUCCESS](state,response){
		
	},
	[TYPE.SIGN_FAILED](state,response){
		
	}
}

const actions={
	submit({commit,state}){
		
	}
}

export default{
	namespace:true,
	state,
	getters,
	mutations,
	actions
}