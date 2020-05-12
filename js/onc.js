window.onload=function () {

	/*服务按钮*/
	$("#serviceBtn").click(function(){
		$("#service").css("height","950px");
		$(".service-no").show();
		$(".pack").show();
		$(this).hide();
	})
	/*收取按钮*/
	$(".pack").click(function(){
		$("#service").css("height","250px");
		$(".service-no").hide();
		$("#serviceBtn").show();
		$(this).hide();
	})
	/**定义弹窗和登陆选项的打开与关闭**/
	function pop(){
		$(".log-box").show();
		$(".log-bg").show();
	}
	function pop_close(){
		$(".log-box").hide();
		$(".log-bg").hide();
	}
	/**点击登陆**/
	$("#denglu").click(function() {
		pop_close();
	})

	/**点击登陆/注册*/
	$("#log").click(function() {
		pop();
	})

	/**点击登陆关闭**/
	$(".inco-box").click(function() {
		pop_close();
	})

	/**点击安全登陆**/
	$("#account_login").click(function() {
	$(".log-top-left").addClass("log-solid");
		$(".log-top-right").removeClass("log-solid");
		$(".log-bottom").show();
		$(".log-erwei").hide();	
	})
	$("#Land_safely").click(function() {	
		$(".log-top-left").removeClass("log-solid");
		$(".log-top-right").addClass("log-solid");
		$(".log-bottom").hide();
		$(".log-erwei").show();
	})
	/****/
	$(document).ready(function(){
	    $("#myNav").affix({
	        offset: { 
	            top: 125 
	      }
	    });
	});

	/**轮播图初始化**/
    $("#myCarousel").carousel('cycle');


    


}
