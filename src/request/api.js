import * as URL from './url.js';
import {get,post} from './http.js';
import {dealerror} from '../utils/dealerror.js'
const imgUrl = 'http://127.0.0.1:8888/img/'


const sign = function(form){
	return post(URL.signUrl,form).then((res)=>{
		return res;
	})
}

const log = function(form){
	return post(URL.logUrl,form).then((res)=>{
		return res;
	})
}

const getUserByToken = function(token){
	return get(URL.tokenUrl,{"token":token}).then((res)=>{
		return res;
	})
}

const getMenu = function(){
	return get(URL.menuUrl).then((res)=>{
		return res;
	})
}
const getGoodsList=function(obj){
	return get(URL.goodListUrl,obj).then((res)=>{
		return res;
	})
}
const getIndex = function(page){
	return get(URL.goodListIndex,{"page":page}).then((res)=>{
		return res;
	})
}

const getShopDetail = function(ID){
	return get(URL.goodDetail,ID).then((res)=>{
		res.goodDescribeList.forEach(obj=>{
			obj.url = imgUrl + obj.url;
		})
		return res;
	})
}
const buyShop = function(buyerName,shopID,num){
	return post(URL.buyShop,{"buyerName":buyerName,"shopID":shopID,"num":num}).then((res)=>{
		return res;
	})
}

const getBuyRecord = function(buyerName){
	return get(URL.buyRecord,{"userName":buyerName}).then((res)=>{
		res.forEach(obj=>{
			obj.url = imgUrl + obj.url;
		})
		return res;
	})
}


const getsellRecord = function(sellerName){
	return get(URL.sellRecord,{"sellerName":sellerName}).then((res)=>{
		res.forEach(obj=>{
			obj.url = imgUrl + obj.url;
		})
		return res;
	})
}
const getsellshops = function(sellerName){
	return get(URL.sellshops,{"sellerName":sellerName}).then((res)=>{
		res.forEach(obj=>{
			obj.url = imgUrl + obj.url;
		})
		return res;
	})
}

const getshopEditInfo = function(shopID){
	return get(URL.shopEditInfo,{"shopID":shopID}).then((res)=>{
		return res
	})
}
const updateShopInfo = function(form){
	return post(URL.updateShopInfo,form).then((res)=>{
		return res;
	})
}


const charge = function(userName,money){
	return get(URL.charge,{"userName":userName,"chargeMoney":money}).then((res)=>{
		
		return res;
	})
}

const addShop = function(form){
	return post(URL.addShop,form).then((res)=>{
		res.url = imgUrl + res.url;
		return res;
	})
}

const deleteShop = function(shopID){
	return get(URL.deleteShop,{"shopID":shopID}).then((res)=>{
		return res;
	})
}

const getAllShops = function(){
	return get(URL.getAllShops).then((res)=>{
		res.forEach(obj=>{
			obj.url = imgUrl + obj.url;
		})
		return res;
	})
}

export default {
	sign,
	log,
	getUserByToken,
	getMenu,
	getGoodsList,
	getIndex,
	getShopDetail,
	buyShop,
	getBuyRecord,
	charge,
	getsellRecord,
	getsellshops,
	getshopEditInfo,
	updateShopInfo,
	addShop,
	deleteShop,
	getAllShops
}