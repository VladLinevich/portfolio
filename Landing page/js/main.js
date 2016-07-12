$(document).ready(function(){

	$(".arrow-lbl").click(function(){
		$(".nav-menu").slideToggle("slow");
		$(".arrow").css("transform","rotate(90deg)");
	});

	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 480 && $(".nav-menu").is(':hidden')){
			$(".nav-menu").removeAttr('style');
		}
	})

});

$(window).scroll(function(){

		var st = $(this).scrollTop();

		$ (".pararlax-head").css({
			"transform" : "translate(0%, " + st - 200 + "%)"
		});

		console.log(st);
});