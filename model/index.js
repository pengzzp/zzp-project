define(["jquery","scroll","lunbo","buttonhover","mask","login_register","top"],function(jq,scroll,lunbo,buttonhover,mask,login_register,top){
//顶部----------------------------------------------------------------------------------------------------
//$(".top").load("top.html")
//轮播图------------------------------------------------
$(".lbt").banner(".lbt","fade");
//热卖单品----------------------------------------------
$.each($(".hot_top li"),function(index,item){
				$(item).mouseenter(function(){
					$(".hot_top .sanjiao")
					.stop()
					.animate({
						left:((index+1)*240-120-20)+"px"
					})
					$(".hot .list ul").hide();
					$(".hot .list ul").eq(index).fadeIn(1000);
					switch(index){
						case 0:$(".hot .list .btn span").text("查看所有男的踩得所有商品");break;
						case 1:$(".hot .list .btn span").text("查看所有女的踩得所有商品");break;
						case 2:$(".hot .list .btn span").text("查看所有穿得所有商品");break;
						case 3:$(".hot .list .btn span").text("查看所有戴得所有商品");break;
					}
				})
			})
			$(".hot").buttonhover(".hot .list .btn");
//街头先型----------------------------------------------
			$(".street .left .a1").hover(function(){
				new mask(".street .left .a1")
			},function(){
				$(".mask").remove();
			})
			
			$(".street .right .a1").hover(function(){
				new mask(".street .right .a1")
			},function(){
				$(".mask").remove();
			})
			$(".street").buttonhover(".street .left .btn");
			$(".street").buttonhover(".street .right .btn");
//至酷精选 玩转潮流--------------------------------------
			$.each($(".follow ul li a"),function(index,item){
				$(item).hover(function(){
					$(this).css("background-position-x",0)
				},function(){
					$(this).css("background-position-x",-75)
				})
			});
			$(".fashion .box .a1").hover(function(){
				new mask(this);
			},function(){
				$(".mask").remove();
			})
//底部----------------------------------------------------------------------------------------------------
			$(".footer").load("footer.html");
	
}) 