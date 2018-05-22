;+function(factory){
if(typeof define === "function" && define.amd){
   define(["jquery"],factory)
    }else{
        factory(jQuery);
    }
}(function($){
	$("#login").on("click",function(){
		var username=$(".login_interface #user").val();
		var pwd=$(".login_interface #pwd").val();
//		console.log(username,pwd);
		var opt = {
                url:"http://localhost/converse/php/user.php",
                type:"POST",
                data:{username:username,password:pwd,type:"login"}
            }
		
		$.ajax(opt)
		.then(function(res){
			console.log(res);
		})
})
})
	


