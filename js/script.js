$(document).ready(function(){

    var b = $("#header").offset().top;  //헤더 처음위치
    $(window).scroll(function(){
        //헤더 스크롤 효과
		var a = $(this).scrollTop();  //스크롤 위치
		if (b < a) {
			$("#header").addClass("on");
		} else {
            $("#header").removeClass("on");
        };

        //#history 스크롤 효과
        var c =$("#history").offset().top;
        if (a <= c) {
			$("#history img").css("opacity","0");
		} else {
            $("#history img").css("opacity","1");
        };
    
    });

});