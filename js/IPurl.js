//接口地址
var IPurl = "https://www.jinguantour.com/api.aspx/";
var IPurl1 = "https://www.jinguantour.com/";
var web_siteset=""					//公共信息
var logintoken 
var userMsg

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
		title:'0-5000',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'5001-10000',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'10001-15000',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'15001-20000',
		img:'img/index_cjcg_28.jpg'
	},
	{
		title:'20001以上',
		img:'img/index_cjcg_28.jpg'
	},
]
$(function () {
	  webxx()
})


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
			layer.msg('获取数据失败')
			console.log(err)
		}
	}
	$.ajax({
		type: "GET",
		url: IPurl+ajaxUrl,
		data: datas,
		success: success,
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
	$("meta[name='keywords']").attr('content', 'xc_key+'-'+web_siteset[0].seostr+'-'+web_siteset[0].Keywords');
	$("meta[name='Description']").attr('content', 'web_siteset[0].Description');
	var header_top_main ='<div class="w1200 header_top_main dis_flex aic ju_b">'
					+'<div>筑采管家AHUCAIGU.COM</div>'
					+'<div class="dis_flex aic">'
					+'	<div>你好，<a class="login_header" href="login.html?type=1">请登录</a></div>'
					+'	<span class="sg_header"></span>'
					+'	<a class="a_header" href="login.html?type=-1">免费注册</a>'
					+'	<span class="sg_header"></span>'
					+'	<a class="a_header" href="">我的筑采</a>'
					+'	<span class="sg_header"></span>'
					+'	<a class="a_header dis_flex aic" href=""><img src="img/header_tel.png" alt="">400-0650-2828</a>'
					+'	<span class="sg_header"></span>'
					+'	<a class="a_header" href="">关于我们</a>'
					+'	<span class="sg_header"></span>'
					+'	<a class="a_header" href="">手机筑采</a>'
					+'	<span class="sg_header"></span>'
					+'	<a class="a_header" href="">官方微信</a>'
					+'</div>'
				+'</div>'
		if($('.header_top')){
			// $('.header_top').html(header_top_main)
			// $('.header_top').load('./common/header.html');
		}
	return
	var datas={
		
	}
	var success=function(res){
		if(typeof(res)=='string'){
			res=JSON.parse(res)
		}
		
		// return
		if (res.error == 0) {
			var resultd = res.web_siteset
			// if(that){
			// 	that.web_siteset = resultd
			// }
			var web_siteset = res.web_siteset
			
			if(xc_key){
				$("meta[name='keywords']").attr('content', xc_key+'-'+web_siteset[0].seostr+'-'+web_siteset[0].Keywords);
			}else{
				$("meta[name='keywords']").attr('content', web_siteset[0].seostr+'-'+web_siteset[0].Keywords);	
			}
			$("meta[name='Description']").attr('content', web_siteset[0].Description);
			$("title").text( web_siteset[0].Title);
			if(web_siteset[0].Phone!=''){
				
				$(".dh_int input").attr('placeholder','客服热线：'+web_siteset[0].Phone)
			}
			var html0='<div class="dm_r1">'+
                '<div class="dm_r1_p1">联系我们</div>'+
                '<div class="dm_r1_p2"><img src="images/lx_tel.png" alt="" /><b class="fz14 fwb">'+web_siteset[0].Phone+'</b></div>'+
                '<div class="dm_r1_p2"><img src="images/lx_email.png" alt="" /><span class="fz14 fwb" >'+web_siteset[0].Email+'</span></div>'+
                '<a href="dingzhi.html" class="dm_btn">定制我的行程</a>'+
              '</div>'+
              '<div class="dm_r2">'+
              '  <div class="dmr2_tit">关注我们</div>'+
               ' <img class="dm2_ewm wxewm_pc" src="'+'images/index057.png'+'" alt="" />'+
               ' <div class="dmr2_tip">获取最新活动旅游咨询</div>'+
              '</div>'
			if($('.destmain_r')){
				$('.destmain_r').html(html0)
			}
			
			
			
			var html1='<div class="w1200 clearfix">'+
					'<img class="f_logo" src="images/f_logo.png" alt="">'+
					'<div v-if="web_siteset" class="footer_msg">'+
					'	<p >客服专线：'+web_siteset[0].Phone+'</p>'+
					'	<p>地址：'+web_siteset[0].Address+'</p>'+
					'	<p><span>'+web_siteset[0].Copyright+'</span>　<span>'+web_siteset[0].Companyname+'</span>　版权所有</p>'+
					'	<p><a target="_blank" href="http://beian.miit.gov.cn">京ICP备19039016号-1</a></p>'+
					'</div>'+
					'<div class="footer_ewm wxewm_pc">'+
					'	<img src="'+'images/index057.png'+'" alt="">'+
					'	<p>'+web_siteset[0].Phone+'</p>'+
					'</div>'+
				'</div>'
				$('.footer_box').html(html1)
				var html2='<div class="suspension-box">'+
				'	<a href="javascript:;" class="a a-service-phone ">'+
				'		<i class="i"></i>'+
				'	</a>'+
				'	<a href="javascript:;" class="a a-qrcode"><i class="i"></i>'+
				'	</a>'+
				'	<a href="javascript:;" class="a a-top"><i class="i"></i></a>'+
				'	<div class="d d-service" style="display: none;">'+
				'		<i class="arrow"></i>'+
				'		<div class="inner-box">'+
				'			<div class="d-service-item clearfix">'+
				'				<a href="tencent://message/?uin=551181668&amp;Site=www.luoxiao123.cn&amp;Menu=yes" class="clearfix"><span class="circle"><i class="i-qq"></i></span>'+
				'					<h3>咨询在线客服</h3></a>'+
				'			</div>'+
				'		</div>'+
				'	</div>'+
				'	<div class="d d-service-phone" style="display: none;">'+
				'		<i class="arrow"></i>'+
				'		<div class="inner-box">'+
				'			<div class="d-service-item clearfix">'+
				'				<span class="circle"><i class="i-tel"></i></span>'+
				'				<div class="text"><p>服务热线</p><p class="red number">'+web_siteset[0].Phone+'</p></div>'+
				'			</div>'+
				'		</div>'+
				'	</div>'+
				'	<div class="d d-qrcode" style="display: none;">'+
				'		<i class="arrow"></i>'+
				'		<div class="inner-box">'+
				'			<div class="qrcode-img"><img class="wxewm_pc" src="'+'./images/index057.png'+'" alt=""></div>'+
				'			<p>微信</p>'+
				'		</div>'+
				'	</div>'+
				'</div>'
				$('.suspension').html(html2)
				getewm_pc()
			// console.log(resultd)
			// return resultd
		} else {
			layer.msg('获取数据失败')
		}
	}
	var error=function(res){
		console.log(res)
	}
	_ajax(IPurl,datas,success,error)

	
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