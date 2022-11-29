$("#next").click(function() {
	$("#slider").append($("#slider img:first-of-type"));
});

$("#prev").click(function() {
	$("#slider").prepend($("#slider img:last-of-type"));
});

//This function creates a link inside text that says read more.
//If link is clicked it expands the amount of text to be displayed.
$(document).ready(function() {
	//Function that unwraps text when ...read more link is clicked. 
	//Hide read more... link afterwards.
	$(".read-more-less").click(function() {
		let buttonText = $(this).text();
		$(".more-text").toggleClass('more-text-show');
		if(buttonText == "Read more...") {
			$(this).text("Read less.");
		} else {
			$(this).text("Read more...");
		}
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

//This function animates the page title.
$(document).ready(function() {
	//Stor page title in variable.
	let pageTitle = $('#page-title');
	
	//Stor page title letters in array.
	let pageTitleLetters = $('#page-title').text().split("");
	
	//Clear the page title text.
	$('#page-title').text("");
	
	//Iterate over the page title letters in array.
	$.each(pageTitleLetters, function(idx, elem) {
		//Create a span for each letter with opacity 0.
		//This makes the letter invisible at first.
		let pageTitleLetter = $("<span/>").text(elem).css({
			opacity: 0
		});
		//Append span with letter to page title.
		pageTitle.append(pageTitleLetter);
		//Set delay for animation.
		pageTitleLetter.delay(idx * 70);
		//Animate the opacity back to full(1) in 1.1 seconds.
		pageTitleLetter.animate({
			opacity: 1
		}, 1100);
	});
});















