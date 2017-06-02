/*
 * ysh
 * ---------------------
 * author 严蕊
 * ---------------------
 */

 (function (){

 	// 公司介绍-tab切换
 	var introduceTab=function(){
 		var getId=$("#J-intro a");
 		var tabId=$(".ysh-introduce-item");
 		$(getId).on("click",function(){
 			console.log(111);
 			var index=$(this).index();
 			$(this).addClass("active").siblings().removeClass("active");
 			$(".ysh-introduce-item:eq("+index+")").show().siblings(".ysh-introduce-item").hide();
 		});
 	}
 	introduceTab();

 	// 时间轴 
 	var mTop=0,timeTop,scrollBall;
 	var eleHeight=$(".time-wrap").height();
 	var wrapHeight=$(".time-height").height();
 	  $(document).scroll(function(){
 	    timeTop=$(".timeline").offset().top;
 	    scrollBall=$(document).scrollTop();
 	    if((scrollBall+300)>timeTop){
 	        timeScroll=setInterval(nowScroll,30);
 	        $(document).unbind("scroll");
 	    }
 	  })
 	  function nowScroll(){
 	    mTop++;
 	    $(".time-wrap").css("margin-Top",-mTop);
 	    if(mTop>=(eleHeight-wrapHeight)){
 	      clearInterval(timeScroll);
 	      $(".time-ret").show();
 	    }
 	  }
 	  $(".time-ret").click(function(){
 	    mTop=0;
 	    $(".time-ret").hide();
 	    $(".time-wrap").animate({marginTop:mTop},1000,function(){
 	      timeScroll=setInterval(nowScroll,30);
 	    });
 	  });	
 	  
 	// 侧边栏显示
 	$(".ysh-menu-mobile").on("click",function(){
 		if($(this).find("i").hasClass("close")){
 			$(this).find("i").removeClass("close").addClass("open");
 			$(".ysh-menu").animate({left:"100%"})
 		}else{
 			$(this).find("i").removeClass("open").addClass("close");
 			$(".ysh-menu").animate({left:"50%"})
 		}
 	})
 }());