$("#next").click(function(){
	$("#slider").append($("#slider img:first-of-type"));
});

$("#prev").click(function(){
	$("#slider").prepend($("#slider img:last-of-type"));
});