window.onload = function(){
	const app = new Vue({
	  el: '#app',
	  data: {
		// 登录时的 手机号+密码/验证码
		loginCodes: {
			phoneNum: '',
			passwordNum: '',
			verificationNum: ''
		},
		// 注册与修改时的 手机号+验证码+密码+再次输入密码
		registerCodes: {
			phoneNum: '',
			verificationNum: '',
			passwordNum: '',
			passwordNum2: ''
		},
		// 1显示登录 2显示注册/忘记密码
		showLoginPortion: 1,
		// 区分  注册 与 忘记密码
		registerOrForge: ''
	  },
	  created() {
	  	// 如果本地有账号密码
	  	if(localStorage.psd){
			// 获取
	  		let psd = JSON.parse(localStorage.getItem('psd'))
			// 赋值
			this.loginCodes.phoneNum = psd.phone
			this.loginCodes.passwordNum = psd.psd
			// 添加记住密码的状态
			this.$nextTick(function(){
				rememberPsd.checked = true
			})
	  	}
	  },
	  methods: {
		  // 点击去注册
		  goRegister:function(){
			  this.showLoginPortion = 2
			  this.registerOrForge = 'register'
		  },
		  // 点击去登录
		  goLogin:function(){
			  this.showLoginPortion = 1
		  },
		  // 点击忘记密码
		  forget:function(){
			  this.showLoginPortion = 2
			  this.registerOrForge = 'forge'
		  },
		  // 点击注册/或完成按钮
		  okk:function(btn){
			  if(!checkMobile(this.registerCodes.phoneNum)){
				return alert("请输入正确手机号")
			  }else if(this.registerCodes.verificationNum==''){
				  return alert('请输入验证码')
			  }else if(!checkPassword(this.registerCodes.passwordNum)){
				  return alert('请输入8-16个字符,不包含空格,必须包含数字,字母或字符至少两种格式的密码')
			  }else if(this.registerCodes.passwordNum2==''){
				  return alert('请输再次输入8-16个字符,不包含空格,必须包含数字,字母或字符至少两种格式的密码')
			  }else if(this.registerCodes.passwordNum != this.registerCodes.passwordNum2){
				  return alert('请保持密码一致')
			  }
		  },
		  // 筑采管家服务协议  按钮
		  agreement:function(){
			  if(this.$refs.agreement.checked){
				this.$refs.btnnn.disabled = false
				this.$refs.btnnn.style.background = '#ff5000'
			  }else{
				this.$refs.btnnn.disabled = true
				this.$refs.btnnn.style.background = '#ccc'
			  }
		  }
	  }
	})
}



// loginNum 登录方式参数
var loginNum = 1;
// 切换登录方式  密码/验证码
function loginWay(way){
	let login1 = document.getElementById('login1')
	let login2 = document.getElementById('login2')
	let show1 = document.getElementById('show1')
	let show2 = document.getElementById('show2')
	if(way == 1){
		login1.style.color = "#ff5000"
		login2.style.color = "#666666"
		show1.style.display = 'block'
		show2.style.display = 'none'
		loginNum = 1
	}else if(way == 2){
		login1.style.color = "#666666"
		login2.style.color = "#ff5000"
		show1.style.display = 'none'
		show2.style.display = 'block'
		loginNum = 2
	}
}


// 登录
function login(){
	let phoneNum = document.getElementById('phoneNum')
	let passwordNum = document.getElementById('passwordNum')
	let verificationNum = document.getElementById('verificationNum')
	// 获取是否记住密码状态
	var rememberPsd = document.getElementById('rememberPsd')
	if(loginNum == 1){
		if(!checkMobile(phoneNum.value)){
			return alert("请输入正确手机号")
		}else if(!checkPassword(passwordNum.value)){
			return alert('请输入8-16个字符,不包含空格,必须包含数字,字母或字符至少两种格式的密码')
		}
		alert('success')
		if(rememberPsd.checked){
			let newPsd = {phone: phoneNum.value,psd: passwordNum.value}
			localStorage.setItem('psd',JSON.stringify(newPsd))
		}
	}else if(loginNum ==2){
		if(!checkMobile(phoneNum.value)){
			return alert("请输入正确手机号")
		}else if(verificationNum.value == ''){
			return alert('请输入验证码')
		}
	}
	
}

// 最新手机号验证规则
function checkMobile(str) {
    let re = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
    if (!re.test(str)) {return false}else{return true}
}
function checkPassword(str){
	let re = /(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,16}$/
	if (!re.test(str)) {return false}else{return true}
}

// 验证码登录获取验证码倒计时
function getCode(btn){
	let phoneNum = document.getElementById('phoneNum')
	if(!checkMobile(phoneNum.value)){
		return alert("请输入正确手机号")
	}else{
		countDown(btn)
	}
}

// 注册/忘记密码获取验证码
function getCode2(btn){
	let phoneNum = document.getElementById('phoneNum2')
	if(!checkMobile(phoneNum2.value)){
		return alert("请输入正确手机号")
	}else{
		countDown(btn)
	}
}


// 封装验证码倒计时
function countDown(btn){
	let getCodeSpan = document.getElementsByClassName('getCodeSpan')
	let times = 60
	let timer = null
	btn.disabled = true
	timer = setInterval(function () {
		times--;
		if (times <= 0) {
			btn.innerHTML = '获取验证码';
			clearInterval(timer);
			btn.disabled = false;
		} else {
			getCodeSpan[0].style.color = '#999999'
			btn.innerHTML = times + '秒后重试'
			btn.disabled = true;
		}
	}, 1000);
}