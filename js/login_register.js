;+function(factory){
if(typeof define === "function" && define.amd){
   define(["jquery"],factory)
    }else{
        factory(jQuery);
    }
}(function($){
	//登录-------------------------------
	$("#login").on("click",function(){
		var username=$(".login_interface #user").val();
		var pwd=$(".login_interface #pwd").val();
		var opt = {
                url:"http://localhost/converse/php/user.php",
                type:"POST",
                data:{username:username,password:pwd,type:"login"}
           }
		$.ajax(opt)
		.then(function(res){
			console.log(res);
			if(res=="登录成功"){
				$(".header .denglu_success").fadeIn();
				$(".header .denglu").fadeOut();
				$(".login_register").slideUp();
			}
		})
	})
//	注册	-------------------------------------
	$("#register").click(function(){
		var username=$(".register_interface .phone").val();
		var email=$(".register_interface .email").val();
		var sex=$("input[name='sex']:checked").val();
		var pwd=$(".register_interface .pwd").val();
		
//		console.log(username,email,sex,pwd)
		if(username==""||email==""||sex==""||pwd=="")return 0;
		var opt={
			url:"http://localhost/converse/php/user.php",
			type:"POST",
			data:{
				username:username,
				password:pwd,
				email:email,
				sex:sex,
				type:"register"
			}
		}
		$.ajax(opt)
		.then(function(res){
			console.log(res);
		})
	})
	
})
	


