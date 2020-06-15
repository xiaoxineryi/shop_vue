import * as TYPE from '../actionType/menuType.js'
import A from '../../request/api.js'
const imgUrl = 'http://127.0.0.1:8888/img/'

const state = {
	menuList:[],
	tempMenu:'',
	goodsList:[],
	count:0,
	tempPage:1
}
const getters = {
	
}
const mutations ={
	[TYPE.MENU_SUCCESS](state,menuList){
		state.menuList = menuList.menu;
		
	},
	[TYPE.MENU_FAILED](state){
		
	},
	[TYPE.GOOD_SUCCESS](state,list){
		state.goodsList = list;
		state.goodsList.forEach(obj=>{
			obj.url = imgUrl + obj.url;
			// alert(obj.url)
		})
	},
	[TYPE.GOOD_FAILED](state){
		
	}
}

const actions = {
	menu({commit,state,rootState}){
		A.getMenu().then((res)=>{
			commit(TYPE.MENU_SUCCESS,res);
		}).catch((res)=>{
			commit(TYPE.MENU_FAILED);
		})
	},
	menu_change({commit,state,rootState},obj){
		A.getGoodsList(obj).then((res)=>{
			state.tempMenu = obj.category;
			state.count = res.count;
			state.tempPage = obj.page;
			commit(TYPE.GOOD_SUCCESS,res.goods);
		}).catch((res)=>{
			commit(TYPE.GOOD_FAILED);
		})
	},
	get_index({commit,state,rootState},page){
		A.getIndex(page).then((res)=>{
			state.tempMenu = '';
			state.count = res.count;
			state.tempPage = page;
			commit(TYPE.GOOD_SUCCESS,res.goods);
		}).catch((res)=>{
			commit(TYPE.GOOD_FAILED)
		})
	},
	page_change({commit,state,rootState},page){
		if(state.tempMenu == ''){
			A.getIndex(page).then((res)=>{
				commit(TYPE.GOOD_SUCCESS,res.goods);
			})
		}else{
			A.getGoodsList({"category":state.tempMenu,"page":page}).then((res)=>{
				commit(TYPE.GOOD_SUCCESS,res.goods);
			})
		}
		state.tempPage = page;
	}
}

export default{
	namespaced:true,
	state,
	getters,
	mutations,
	actions
}