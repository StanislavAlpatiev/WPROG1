$("#next").click(function(){
	$("#slider").append($("#slider img:first-of-type"));
});

$("#prev").click(function(){
	$("#slider").prepend($("#slider img:last-of-type"));
});

$(document).ready(function(){
	let maxLength = 300;
	$(".show-read-more").each(function(){
		let myStr = $(this).text();
		if($.trim(myStr).length > maxLength){
			let newStr = myStr.substring(0, maxLength);
			let removedStr = myStr.substring(maxLength, $.trim(myStr).length);
			$(this).empty().html(newStr);
			$(this).append(' <a href="javascript:void(0);" class="read-more" style="color: white;">read more...</a>');
			$(this).append('<span class="more-text">' + removedStr + '</span>');
		}
	});
	$(".read-more").click(function(){
		$(this).siblings(".more-text").contents().unwrap();
		$(this).remove();
	});
});