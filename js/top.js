;+function(factory){
if(typeof define === "function" && define.amd){
   define(["jquery"],factory)
    }else{
        factory(jQuery);
    }
}(function($){
	//二级菜单----------------------------------------
	function erji(ele1,ele2){
		this.ele1=$(ele1);
		this.ele2=$(ele2);
		if(!this.ele1||!this.ele2) return 0;
		this.init();
	}
	erji.prototype={
		constructor:erji,
		init(){
			var _this=this;
			this.ele1.hover(function(){
//			 _this.ele2.css("height",262);
			 _this.ele2
			  .stop(false,true)
			 .slideDown();
			 new mask("body");
			},function(){
				 _this.ele2
				 .stop(false,true)
				 .fadeOut();
				 $(".mask").remove();
			})
			this.ele2.hover(function(){
				_this.ele2.stop();
				_this.ele2.css("display","block")
				new mask("body");
			},function(){
				_this.ele2.fadeOut();
				$(".mask").remove();
			})
		}
	}
	new erji(".top .list>ul li",".top .list .item");
	//登录----------------------------------------
	$(".login_interface form").submit(function(){
		return false;
	})
	$(".top .denglu .s1").click(function(){
		$(".login_register")
		.siblings()
		.stop()
		.slideUp();
		$(".hidden_interface .login_register")
		.slideToggle(function(){
			$(".hidden_interface .register_interface")
			.stop()
			.fadeOut(function(){
				$(".hidden_interface .login_interface")
				.stop()
				.slideDown()
				.animate({
					opacity:1
				});
				if($(".login_register").css("display")=="block"){
					new mask("body");
				}else{
					$(".mask").remove()
				}
			})
		});
	})
	$(".top .login").click(function(){
		$(".ss_interface").stop().slideUp(); 
		if($(".login_register").css("display")=="none"){
			$(".hidden_interface .login_register").slideDown(function(){
					$(".hidden_interface .register_interface")
					.stop()
					.fadeOut(function(){
						$(".hidden_interface .login_interface")
						.stop()
						.fadeIn()
						.animate({
							opacity:1
						});
					})
			});
			new mask("body");
		}
		else{
			$(".ss_interface").stop().slideUp();
			$(".hidden_interface .register_interface")
				.stop()
				.fadeOut(function(){
					$(".hidden_interface .login_interface")
					.stop()
					.fadeIn()
					.animate({
						opacity:1
					});
				})
			$(".mask").remove()
		}
	})
	$(".hidden_interface").buttonhover(".hidden_interface .login_interface .left .register");
	$(".hidden_interface").buttonhover(".hidden_interface .login_interface .right button");
	//注册----------------------------------------
	$(".top .register").click(function(){
		$(".ss_interface").stop().slideUp();
		if($(".login_register").css("display")=="none"){
			$(".hidden_interface .login_register").slideDown(function(){
					$(".hidden_interface .login_interface")
					.stop()
					.fadeOut(function(){
						$(".hidden_interface .register_interface")
						.stop()
						.fadeIn()
						.animate({
							opacity:1
						});
					})
			});
		}
		else{
			$(".hidden_interface .login_interface")
				.stop()
				.fadeOut(function(){
					$(".hidden_interface .register_interface")
					.stop()
					.fadeIn()
					.animate({
						opacity:1
					});
				})
		}
	})
	$(".hidden_interface").buttonhover(".hidden_interface .register_interface button");
	
	$(".top .year .size").click(function(){
		var value=$(this).val();
		$(this).siblings("span").text(value);
	})
	$(".top .month .size").click(function(){
		var value=$(this).val();
		$(this).siblings("span").text(value);
	})
	$(".top .day .size").click(function(){
		var value=$(this).val();
		$(this).siblings("span").text(value);
	})
	
	
	//搜索----------------------------------------
	$(".header .ss span").click(function(){
		$(".hidden_interface .ss_interface")
		.siblings()
		.slideUp()
		.end()
		.slideToggle(function(){
			if($(".ss_interface").css("display")=="block"){
					new mask("body");
				}else{
					$(".mask").remove()
				}
		});
	})
	//表单验证------------------------------------
	function Validation(selector){
		this.main=$(selector);
		this.phone=this.main.find(".phone");
		this.email=this.main.find(".email");
		this.pwd=this.main.find(".pwd");
		this.pwd2=this.main.find(".pwd2");
		this.init();
	}
	Validation.prototype={
		constructor:Validation,
		init(){
			this.phone.blur(function(){
				this.value=$(this.phone).val();
				this.rule("phone");
				this.style(this.phone);
			}.bind(this));
			this.email.blur(function(){
				this.value=$(this.email).val();
				this.rule("email");
				this.style(this.email);
			}.bind(this));
			this.pwd.blur(function(){
				this.value=$(this.pwd).val();
				this.rule("pwd");
				this.style(this.pwd);
			}.bind(this));
			this.pwd2.blur(function(){
				this.result=($(this.pwd2).val()==$(this.pwd).val());
				this.style(this.pwd2);
			}.bind(this));
		},
		rule(type){
			this.type=type;
			var list={
				"phone":function(){
					var reg=/^1[358][0123456789][12345]\d{7}$/;
					this.result=reg.test(this.value);
				}.bind(this),
				"email":function(){
					var reg=/^\w{6,12}@[a-z0-9]{2,6}\.[a-z]{2,6}$/;
					this.result=reg.test(this.value);
				}.bind(this),
				"pwd":function(){
					var reg=/^\d{6,20}$/;
					this.result=reg.test(this.value);
				}.bind(this)
			}
			list[this.type]();
		},
		style(ele){
			if(!this.result){
				ele.css("border","1px solid red");
				ele.siblings("span").fadeIn();
			}
			else{
				ele.css("border","1px solid #999999");
				ele.siblings("span").fadeOut();
			}
		}
	}
	
	new Validation(".register_interface")
























//-----------
function mask(selector){
		this.init(selector)
	}
	mask.prototype={
		constructor:mask,
		init(selector){
					this.ele=$(selector);
					this.width=$(this.ele).width();
					this.height=$(this.ele).height();
					var div=$("<div class='mask'></div>");
					this.ele.append(div);
					div.css({
						width:this.width+"px",
						height:this.height+"px",
						position:"absolute",
						top:0,
						background:"black",
						"z-index":888,
						opacity:0.5
					})
				}
		}
})
	





