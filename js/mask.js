;+function($){
	$.fn.Mask=function(selector){
		new mask(selector);
	}
	
	function mask(selector){
		this.init(selector)
	}
	mask.prototype={
		constructor:mask,
		init(selector){
			this.ele=$(selector);
			this.width=$(this.ele).width();
			this.height=$(this.ele).height();
			
			this.ele.hover(
				function(){
					this.div=$("<div class='mask'></div>");
					this.ele.append(this.div);
					$(".mask").css({
						width:this.width+"px",
						height:this.height+"px",
						position:"absolute",
						top:0,
						background:"black",
						"z-index":999,
						opacity:0.3
					})	
				}.bind(this),
				function(){
					$(".mask").remove();
				}
			)
			
		}
	}
}(jQuery)
