;+function($){
	$.fn.buttonhover=function(selector){
		new hover(selector);
	}
	function hover(selector){
		this.init(selector);
	}
	hover.prototype={
		constructor:hover,
		init(selector){
			this.ele=$(selector);
			this.ele.hover(function(){
				$(this).css({
					background:"white",
					color:"black",
					border:"1px solid black"
				})
				
				$(this).find("i")
				.stop()
				.animate({
					"background-position-x":-25
				},function(){
					$(this).css("background-position-x",-30)
				})
				.stop()
				.animate({
					"background-position-x":-40
				})
				
				
			},
			function(){
				$(this).css({
					background:"black",
					color:"white",
					border:""
				})
				$(this).find("i").css("background-position-x",-7)
			}
			)
		}
	}
}(jQuery);
