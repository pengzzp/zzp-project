//鼠标进入selector时,为selector1加上蒙版
;+function(factory){
if(typeof define === "function" && define.amd){
   define(["jquery"],factory)
    }else{
        factory(jQuery);
    }
}(function($){
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
	return mask;
})
	




