$(".on .play").on("click", function(){
 $(".popup").show();
 $(".on").find(".imgbox").addClass("active");
 $(".on").find(".imgbox").removeClass("stop");
});

$(".on .pause").on("click", function(){
 
 $(".on").find(".imgbox").addClass("stop");
});

$(".on .reload").on("click", function(){
 
 $(".on").find(".imgbox").removeClass("active");
 $(".on").find(".imgbox").removeClass("stop");
});

let num=0;
let eq=0;

$(".btn_next").on("click", function(){
 num++ //num 1씩 증가 즉 num=num+1; (초기값이 0이라 1부터 시작)
 $(".contents").css({"transform":"rotate(" + (-45 * num) + "deg)"})
 //transform : rotate(-45deg)
 eq=eq==7?0:eq+1
 $(".box").eq(eq).addClass("on");
 $(".box").eq(eq).siblings().removeClass("on")
});

$(".btn_prev").on("click", function(){
 num--
 $(".contents").css({"transform":"rotate(" + (-45 * num) + "deg)"});
 eq=eq==0?7:eq-1
 $(".box").eq(eq).addClass("on");
 $(".box").eq(eq).siblings().removeClass("on");
});


$(".popup").hide();
$(".close").on("click", function(){
 $(".popup").hide();
});