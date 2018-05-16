window.onscroll=function(){
		var scrolltop=document.documentElement.scrollTop;
		if(scrolltop>200){
			$(".top").css({
				"height":80,
//				"display":"none"
			});
			$(".header .denglu").css("line-height","50px");
			$(".header .gwc").css("line-height","50px");
			$(".top .list ul li a").css({
				"font-size":"15px",
				"line-height":"30px"
				});
			$(".top .list ul li a i").hide();
			
//			$(".top").slideDown("fast");
			
		}
		else{
			$(".top").css({
				"height":130,
				"display":"block"
			});
			$(".header .denglu").css("line-height","80px");
			$(".header .gwc").css("line-height","80px");
			$(".top .list ul li a").css({
				"font-size":"18px",
				"line-height":"40px"
				});
			$(".top .list ul li a i").show();
		}
		
		$(".liaoliaoba")
		.stop(true)
		.animate({
			"top":scrolltop+200+"px"
		},1000)
}