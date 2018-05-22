+function(factory){
	define(["jquery"],factory)
}(function($){
//	$.fn.banner=function(lbt,animation){
//		new lunbo(lbt,animation);
//	}
	function lunbo(lbt,animation){
			this.animation=animation;
			this.lbt=$(lbt);
			this.u1=$(lbt).find("ul").eq(0);
			this.u2=$(lbt).find("ul").eq(1)?$(lbt).find("ul").eq(1):"";
			this.oimg=this.u1.children();
			this.oli=this.u2.find("li");
			this.next=$(lbt+" .next");
			this.prev=$(lbt+" .prev");
			this.show;
			this.hidden;
			this.now=0;
			this.timer=null;
			this.init();
		}
		lunbo.prototype={
			constructor:lunbo,
			init(){
				var _this=this;
				$(this.next).click(function(){
					_this.nextbtn();
					_this.forshow();
				});
				$(this.prev).click(function(){
					_this.prevbtn();
					_this.forshow();
				});
				$.each(this.oli,function(index,item){
					$(item).mouseenter(function(){
						_this.hidden=_this.now;
						_this.now=index;
						_this.show=_this.now;
						_this.forshow();
					})
				});
				
//				this.timer=setInterval(function(){
//					_this.nextbtn();
//					_this.forshow();
//				},3000);
			},
			nextbtn(){
				this.hidden=this.now;
				if(this.now==this.oimg.length-1){
					this.now=0;
					this.show=this.now;
					}
				else{
					this.now++
					this.show=this.now;
				}
			},
			prevbtn(){
				this.hidden=this.now;
				if(this.now==0){
					this.now=this.oimg.length-1;
					this.show=this.now;
					}
				else{
					this.now--
					this.show=this.now;
				}
			},
			forshow(){
//				console.log($(this.oimg[this.show]).outerWidth());
//下标效果-------------------------------
				$.each(this.oli,function(index,item){
					$(item).css({
						"border":"none",
						"color":"darkgray"
						});
				});
				$(this.oli[this.show]).css({
					"border-top":"1px solid black",
					"color":"black"
				})
//图片效果可变---------------
				var animationlist={
					"fade":function(){
										animationlist.init();
					                    $(this.oimg[this.show])
					                    .css("opacity",0)
					                    .stop()
					                    .fadeTo(1000,"1");
										
										$(this.oimg[this.hidden])
										.css("opacity",1)
					                    .stop()
					                    .fadeTo(1000,"0");
					}.bind(this),
					"scorll":function(){
										animationlist.init();
										$(this.oimg[this.show]).css({
											"left":2526,
											opacity:1
										})
										$(this.oimg[this.show])
										.stop()
										.animate({
											left:0
										});
										$(this.oimg[this.hidden]).css({
											"left":0,
											opacity:1
										})
										$(this.oimg[this.hidden])
										.stop()
										.animate({
											left:-2526
										});
					}.bind(this),
					"init":function(){
							for(var i=0;i<this.oimg.length;i++){
								this.oimg[i].style.zIndex=1;
								this.oimg[i].style.opacity=0;
							}
					}.bind(this)
				}
				animationlist[this.animation]();
				//下标
			}
		}
//	$.banner = lunbo;
    return lunbo;
})



