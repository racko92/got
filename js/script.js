$(window).scroll(function(){
	var offset = $("header").offset();
	console.log(offset.top);
	$("#logo").css({"height": "50px", "margin-left": "90px"});
	$("header").addClass("header-scroll");

	if(offset.top == 0){
		$("#logo").css({"height": "70px", "margin-left": "20px"});
		$("header").removeClass("header-scroll");
	}
});
