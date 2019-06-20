window.onload = function(){
	TabControl();
	Slideshow();
}

//选项卡
function TabControl(){
	$("._lef").on("mouseenter",".a",function(){
		var index = $(this).index();
		$("._ol").css("display","none");
		$("._ol").eq(index).css("display","block");
		$("#k li").find("img").css("display","none");
		$("._lef").css("border-right","none");
		$("#k").children("li").css("border-right","1px solid #fe6b1d");
		$("#k").children("li").eq(index).css("border","1px solid #fe6b1d");
		$("#k").children("li").eq(index).css("border-right-color","white");
	}).on("mouseleave",".a",function(){
			$(this).css("border","none");
			$("._lef .a").css("border-bottom","1px dashed #f2f0f1");

		$("._lef").on("mouseenter","._ol",function(){
			var index = $(this).index();
			$("#k").children("li").eq(index-1).css("border","1px solid #fe6b1d")
			$("#k").children("li").eq(index-1).css("border-right-color","white")
		}).on("mouseleave","._ol",function(){
			$("#k").children("li").css("border","none");
		})
	})
	$(document).on("mouseleave","._lef",function(){
		$("._ol").css("display","none");
		$("#k li").find("img").css("display","block");
		$("._lef .a").css("border-right","none");
		$("._lef").css("border-right","1px solid #f2f0f1");
	})
	
}

//轮播图
function Slideshow(){
	var timer = null;
	var index = null;
	timer = window.setInterval(play,3000);
	function play(){
		index++;
		if(index == 3){
			index = 0
		}
		$("._top ul").find("li").eq(index).addClass("active").siblings().removeClass("active");
		$("._top ol").find("li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
	}
	$("._top ul").find("li").hover(function(){
		window.clearInterval(timer);
		index = $(this).index()-1;
		play();
	})
	$("._top").hover(function(){
		$(".ab").css("display","block");
		$(".b").css("display","block");
		window.clearInterval(timer);
		
	},function(){
		$(".ab").css("display","none");
		$(".b").css("display","none");
		timer = window.setInterval(play,3000);
	})
	$("._top .ab").on("click",function(){
		index--;
		if(index == -1){
			index = 2
		}
		$("._top ul").find("li").eq(index).addClass("active").siblings().removeClass("active");
		$("._top ol").find("li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
	})
	$("._top .b").on("click",function(){
		play();
	})
}










// function TabControl(){
// 	$("#k").children("li").on("mouseenter",function(){
// 		var index = $(this).index();
// 		$("._ol").css("display","none");
// 		$("._ol").eq(index).css("display","block");
// 		$("#k li").find("img").css("display","none")
// 		$("._lef").css("border-right","none");
// 		$("#k").children("li").css("border-right","1px solid #fe6b1d")
// 		$("#k").children("li").eq(index).css("border","1px solid #fe6b1d")
// 		$("#k").children("li").eq(index).css("border-right-color","white")
// 		
// 	}).on("mouseleave",function(){
// 		$("._ol").css("display","none");
// 		$("#k li").find("img").css("display","block");
// 		$("._lef").css("border-right","1px solid #f2f0f1");
// 		$("#k").children("li").css("border","none")
// 	})
// }
