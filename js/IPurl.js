//接口地址
var IPurl = "https://admin.zhucaiguanjia.com/api/";
var IPurl1 = "https://admin.zhucaiguanjia.com/";
var storage_fuc = window.localStorage;
var web_siteset=""					//公共信息
var logintoken 
var userMsg
function getimg(img){
	if(!img){
		return
	}
	return IPurl1+img
}
var cj_list=[
	{
		title:'空调通风',
		img:'img/index_cjcg_18.jpg'
	},
	{
		title:'土建',
		img:'img/index_cjcg_20.jpg'
	},
	{
		title:'消防',
		img:'img/index_cjcg_22.jpg'
	},
	{
		title:'市政园林',
		img:'img/index_cjcg_24.jpg'
	},
	{
		title:'装饰装修',
		img:'img/index_cjcg_26.jpg'
	},
	{
		title:'水电',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'消防',
		img:'img/index_cjcg_22.jpg'
	},
	{
		title:'市政园林',
		img:'img/index_cjcg_24.jpg'
	},
	{
		title:'装饰装修',
		img:'img/index_cjcg_26.jpg'
	},
	{
		title:'水电',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'消防',
		img:'img/index_cjcg_22.jpg'
	},
	{
		title:'市政园林',
		img:'img/index_cjcg_24.jpg'
	},
	{
		title:'装饰装修',
		img:'img/index_cjcg_26.jpg'
	},
	{
		title:'水电',
		img:'img/index_cjcg_28.jpg'
	},
]
var pp_list= [
	{
		title:'奥美斯',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'艾尼',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'敖翔',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'市政园林',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'装饰装修',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'水电',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'装饰',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'敖翔',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'市政园林',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'装饰装修',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'水电',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'装饰',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'敖翔',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'市政园林',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'装饰装修',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'水电',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'装饰',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'敖翔',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'市政园林',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'装饰装修',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'水电',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'装饰',
		img:'img/index_cjcg_28.jpg'
	},
]
var xm_list=[
	
		{
			title:'瓷砖',
			img:'img/index_cjcg_28.jpg'
		},
		{
			title:'卫浴',
			img:'img/index_cjcg_28.jpg'
		},
		{
			title:'灯具',
			img:'img/index_cjcg_28.jpg'
		},
		{
			title:'门锁',
			img:'img/index_cjcg_28.jpg'
		},
		{
			title:'开关',
			img:'img/index_cjcg_28.jpg'
		},
		{
			title:'背景墙',
			img:'img/index_cjcg_28.jpg'
		},
		{
			title:'水电',
			img:'img/index_cjcg_28.jpg'
		},
		{
			title:'油漆涂料',
			img:'img/index_cjcg_28.jpg'
		},
		{
			title:'土建材料',
			img:'img/index_cjcg_28.jpg'
		},
		{
			title:'墙纸地毯',
			img:'img/index_cjcg_28.jpg'
		},
	
]
var jg_list=[
	{
		title:'0',
		title1:'5000',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'5001',
		title1:'10000',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'10001',
		title1:'15000',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'15001',
		title1:'20000',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'20001',
		title1:'',
		img:'img/index_cjcg_28.jpg'
	},
]
$(function () {
	  webxx()
})
var token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org"



/**
 * @description   获取参数
 * @example   
 * getNowCanshu().aa 
 * @author: wenxin  
 * @createTime: 2021-4-20 10:36:15  
 */
function getNowCanshu() {
  var aa= window.location.href;//返回当前页面的url
  var urlinfo =aa.replace("#"," ");
  var canshu = function () {
    var ind = urlinfo.indexOf('?');//返回某个指定的字符串值在字符串中首次出现的位置
    var cs = urlinfo.substr(ind + 1);
    var tempobj = new Object();
    var csarr = cs.split("&");
    jQuery.each(csarr, function (i, v) {
      var temparr = v.split("=");
      var objname = temparr[0];
      tempobj[objname] = temparr[1];
    });
    return tempobj;
  }();
  // console.log(canshu);
  return canshu;
}
/**
 * @description   获取参数
 * @example   
 * getUrlParam()  
 * @author: wenxin  
 * @createTime: 2021-4-20 10:35:42  
 */
function getUrlParam() { //获取参数
    var url = decodeURIComponent(location.search);
    var theParam = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theParam[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theParam;
}

/**
 * @description 设置cookie  
 * @example   
 * setCookie(cname, cvalue, exdays)
 * @param {String} cname = ''  名称 
 * @param {String} cvalue = ''  值
 * @param {String} exdays = ''  时间
 * @author: wenxin  
 * @createTime: 2021-4-20 10:36:56  
 */
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
/**
 * @description  获取cookie   
 * @example   
 * getCookie(cname) 
 * @param {String} cname = '' 名称   
 * @author: wenxin  
 * @createTime: 2021-4-20 10:38:13  
 */
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

function getpri(price) {
  var pri = price * 0.01;
  pri = pri.toFixed(2);
  return pri;
}
function telReg(tel) {
  if (tel) {
    var tel0 = "" + tel;
    var reg = /(\d{3})\d{4}(\d{4})/;
    var tel1 = tel0.replace(reg, "$1****$2");
    // console.log(tel1);
    return tel1;
  }
}
/**
 * @description   
 * @example   
 * example  
 * @url URL地址  
 * @param {String} url = ''  接口请求地址  
 * @param {String} method = [get|post] 可选值域包括get和post，get是直接请求，post是提交数据  
 * @author: wenxin  
 * @createTime: 2021-4-20 10:24:15  
 */
function _ajax(ajaxUrl,method,datas,success,error) {
	if(!error){
		error=function (err){
			layer.msg('请求失败')
			console.log(err)
		}
	}
	$.ajax({
		type: method,
		url: IPurl+ajaxUrl,
		data: datas,
		headers:{
			"Authorization":storage_fuc.getItem("token")||'',
		},
	
		success: function(res){
			
			if(res.status == 101){
				parent.location.href="login.html?type=1"
				return
			}
			if(res.status != 200){
				if(res.msg){
					layer.msg(res.msg)
				}else{
					layer.msg('操作失败')
				}
			}else{
				
				success(res)
			}
		},
		error: error
	})
}
function _post(ajaxUrl,datas,success,error){
	_ajax(ajaxUrl,'POST',datas,success,error)
}
function _get(ajaxUrl,datas,success,error){
	_ajax(ajaxUrl,'GET',datas,success,error)
}

//公众信息
function webxx(that,xc_key){
	
	
	// return
	var jkurl='/Base/getConfig'
	var datas={
		
	}
	var success=function(res){
		if (res.status == 200) {
			ConfigLink()
			// layer.msg('登录成功')
			// var storage_fuc = window.localStorage;
			storage_fuc.setItem("BaseConfig",JSON.stringify(res.data))
			$(document).attr("title",res.data.core.site_title);  
			$("meta[name='keywords']").attr('content', res.data.core.keyword);
			$("meta[name='Description']").attr('content', res.data.core.description);
			
		} else {
			if(res.msg){
				layer.msg(res.msg)
			}else{
				layer.msg('获取配置信息失败')
			}
		}
	}
	var error=function(res){
		console.log(res)
	}
	_get(jkurl,datas,success,error)

	
}
//友情链接数据列表
function ConfigLink(){
	
	
	// return
	var jkurl='/Config.Link/index'
	var datas={
		limit:1000,
		page:1
	}
	var success=function(res){
		if (res.status == 200) {
			// layer.msg('登录成功')
			// var storage_fuc = window.localStorage;
			storage_fuc.setItem("ConfigLink",JSON.stringify(res.data.list))
			
		} else {
			if(res.msg){
				layer.msg(res.msg)
			}else{
				layer.msg('获取友情链接数据失败')
			}
		}
	}
	var error=function(res){
		console.log(res)
	}
	_get(jkurl,datas,success,error)

	
}
//静默denglu
function login_m(callback){
	var jkurl='/Member.Member/login'
	if(!storage_fuc.getItem('psd')){
		return
	}
	var loginCodes=JSON.parse(storage_fuc.getItem('psd'))
	var datas={
		password:loginCodes.psd,	//string	 新密码(必填)
		mobile:loginCodes.phone,	//string	 短信验证手机号
	}
	console.log(storage_fuc.getItem('psd'))
	$.ajax({
		type: "post",
		url: IPurl+jkurl,
		data:datas,
		success: function(res) {
			// console.log(res);
			if(typeof(res)=='string'){
				res=JSON.parse(res)
			}
			if (res.status == 200) {
				// layer.msg('登录成功')
				// var storage_fuc = window.localStorage;
				storage_fuc.setItem("user",JSON.stringify(res.data))
				storage_fuc.setItem("token",res.token)
				
				callback(res)
			} else {
				if(res.msg){
					layer.msg(res.msg)
				}else{
					layer.msg('操作失败')
				}
			}
	
		},
		error: function(err) {
			layer.msg('请求失败')
			console.log(err)
		}
	})	
}
//刷新用户信息
function get_usermsg(callback){
	
	
	// return
	var jkurl='/Member.Member/view'
	var datas={
		
	}
	var success=function(res){
		if (res.status == 200) {
			console.log(res)
			// return
			storage_fuc.setItem("user",JSON.stringify(res.data))
			if(!callback){
				window.location.replace('')
			}else{
				callback(res)
			}
			
			// storage_fuc.setItem("token",res.token)
		} else {
			if(res.msg){
				layer.msg(res.msg)
			}else{
				layer.msg('获取配置信息失败')
			}
		}
	}
	var error=function(res){
		console.log(res)
	}
	_get(jkurl,datas,success,error)

	
}

function gettime(time_str,seperator1) {
	if(!time_str){
		return
	}
	console.log(time_str)
		if(!seperator1){
			seperator1 = "/";
		}
		var value = new Date(time_str*1000)
		console.log(value)
		var year = value.getFullYear();
		console.log(year)
		var month = value.getMonth() + 1;
		var strDate = value.getDate();
		if (month >= 1 && month <= 9) {
				month = "0" + month;
		}
		if (strDate >= 0 && strDate <= 9) {
				strDate = "0" + strDate;
		}
		var currentdate = year + seperator1 + month + seperator1 + strDate;
		return currentdate
}
//获取img
function getgimg(pic) {
  if (!pic) {
    return;
  }
  var arr = [];
  arr = pic.split(",");
  var arr1 = [];
  arr1 = arr[0].split("|");

  return imgurl + arr1[1];
  // vm.tclist[index].picbox
}
function getgimg1(pic) {
  if (!pic) {
    return;
  }
  var arr = [];
  // console.log(pic)
  arr = pic.split("^");
  var arr1 = [];
  return imgurl + arr[0];
}
function getTime(time) {
  if (!time) {
    return;
  }
  var arr = [];
  // console.log(pic)
  arr = time.split(" ");
  var arr1 = arr[0].split("-");
	if(arr1.length==3){
		return arr1[0] + "年" + arr1[1] + "月" + arr1[2] + "日";
	}else{
		return time
	}
		
  
}

function jump(url) {
  window.location.href = url;
}


function json_p(str){
	if(!str){
		return
	}
	// console.log(JSON.parse(str))
	return JSON.parse(str)
}