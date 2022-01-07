$(document).ready(function(){

    var b = $("#header").offset().top;  //헤더 처음위치 
    $(window).scroll(function(){
        var c =$("#history").offset().top;
        if (a <= c) {
			$("#history img").css("opacity","0");
		} else {
            $("#history img").css("opacity","1");
        };

    }); 
});