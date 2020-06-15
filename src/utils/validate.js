export function check_account(rule, value, callback){
	if(value==''||value==undefined||value==null){
	  return callback(new Error('用户名不可为空'));	
	}else{
	return callback();
	}
}

export function check_password(rule,value,callback){
	if(value==''||value==undefined||value==null){
	  callback();
	}
	if(value.length>=6 && value.length <=15){
		callback();
	}else{
	return callback(new Error('密码应该在6-15个字符之内'));	
	}
}

export function check_email(rule, value,callback) {
  const reg =/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
  if(value==''||value==undefined||value==null){
    callback();
  }else{
    if (!reg.test(value)){
      return callback(new Error('请输入正确的邮箱地址'));
    } else {
      callback();
    }
  }
}

export function check_charge(rule, value,callback) {
  const reg =/^[0-9]+.?[0-9]*$/;
  if(value==''||value==undefined||value==null){
    callback();
  }else{
    if (!reg.test(value)){
      return callback(new Error('请输入正确的充值金额'));
    } else {
      callback();
    }
  }
}
