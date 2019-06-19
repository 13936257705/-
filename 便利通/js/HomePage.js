window.onload = function(){
	TabControl();
}
function TabControl(){
	$("#k").children("li").on("mouseenter",function(){
		var index = $(this).index();
		$("._ol").css("display","none");
		$("._ol").eq(index).css("display","block");
		$("#k li").find("img").css("display","none")
		$("._lef").css("border-right","none");
		$("#k").children("li").eq(index).css("border","1px solid #fe6b1d")
		
	}).on("mouseleave",function(){
		$("._ol").css("display","none");
		$("#k li").find("img").css("display","block");
		$("._lef").css("border-right","1px solid #f2f0f1");
		$("#k").children("li").css("border","none")
	})
}
