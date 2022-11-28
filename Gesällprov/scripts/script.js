$("#next").click(function() {
	$("#slider").append($("#slider img:first-of-type"));
});

$("#prev").click(function() {
	$("#slider").prepend($("#slider img:last-of-type"));
});

//This function creates a link inside text that says read more.
//If link is clicked it expands the amount of text to be displayed.
$(document).ready(function() {
	//This is the max length of text to be displayed before read more is displayed.
	let maxLength = 600;
	//Function targeting the paragraph that has read more functionality.
	$(".show-read-more").each(function(){
		//Variable storing the paragraph text.
		let articleText = $(this).text();
		//If amount of charachters excluding whitespaces is greater then maxLength, add read more... link.
		if($.trim(articleText).length > maxLength) {
			//Amount of text to show.
			let newArticleTextToDisplay = articleText.substring(0, maxLength);
			//Var storing text that does not fitt withing maxLength.
			let removedStr = articleText.substring(maxLength, articleText.length);
			//Resets the paragraph content with text that fits maxLength.
			$(this).empty().html(newArticleTextToDisplay);
			//Adds read more... link.
			$(this).append('<a href="javascript:void(0);" class="read-more" style="color: white;">read more...</a>');
			//Adds span containing text that did not fitt maxLength.
			$(this).append('<span class="more-text">' + removedStr + '</span>');
		}
	});
	//Function that unwraps text when read more... link is clicked. 
	//Removes read more... link afterwards.
	$(".read-more").click(function() {
		$(this).siblings(".more-text").contents().unwrap();
		$(this).remove();
	});
});

//Function that makes hamburger menu toggle content on click.
$(document).ready(function() {
	//Stor DOMElements in variables.
	let hamburger = document.getElementById("hamburger");
	let navlist = document.getElementById("nav-ul");
	
	//Removes show class from navlist when screen width is greater then 1024px.
	//This makes it so that is hamburger menu was open and you make window larger so that it disapears.
	//That is you again make window smaller that the hamburger menu is closed.
	$(window).resize(function() {
		if (window.innerWidth > 1024) {
			$(navlist).removeClass("show");
		}
	});
	
	//Toggle hamburger menu on click.
	hamburger.addEventListener("click", function() {
		navlist.classList.toggle("show");
	});
});

















