import axios from 'axios'
import store from '../store/index.js'
import QS from 'qs';
import {dealerror} from '../utils/dealerror.js'

axios.defaults.timeout = 10000;
// axios.defaults.baseURL = '/baseurl/';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

axios.interceptors.request.use(
	config=>{
		const token = localStorage.getItem("token");
		token&&(config.headers.Authorizatoin = token);
		return config;
	},
	error=>{
		return Promise.error(error);
	}
)


axios.interceptors.response.use(
	response=>{
		if(response.status==200){
			if(response.data.code==200){
				return Promise.resolve(response);	
			}else{
				dealerror(response.data);
				return Promise.reject(response);
			}
		}else{
			return Promise.reject(response);
		}
	},
	error=>{
		if(error.response.status){
			alert("错误编号:"+error.response.status);
		}
		return Promise.reject(error.response);
	}
)

export function get(url,params){
	return new Promise((resolve,reject)=>{
		axios.get(url,{
			params:params,
		}).then(res=>{
			resolve(res.data.obj);
		}).catch(err=>{
			reject(err);
		})
	});
}

export function post(url,params){
	return new Promise((resolve,reject)=>{
		axios.post(url,params)
		.then(res=>{
			resolve(res.data.obj);
		}).catch(err=>{
			reject(err);
		})
	});
}
