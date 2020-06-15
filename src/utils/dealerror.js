import * as ERRORCODE from './error.js';

export const dealerror = function(res){
	if(res.code!=200){
		alert("错误信息为:"+res.message);
	}
}