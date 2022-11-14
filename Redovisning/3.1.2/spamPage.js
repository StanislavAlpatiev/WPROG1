//this variable stores window for access.
let myWindow = window.open('', '_self', '');;
const newWindowTimeout = createNewWindow();



//Opens Window.
function openWin() {
  myWindow = window.open("spamPage.html", "_blank", "width=500, height=500");
}

//Closes window.
function closeWin() {
  self.close();
}

//Function that creates new window after 5 seconds.
function createNewWindow() {
	return setTimeout(openWin, 5000);
}

//Function used to stop window duplication after 5 seconds.
function stopNewWindowTimeout() {
	//Clears timeout.
	clearTimeout(newWindowTimeout);
	//Lets user know they are safe.
	document.getElementById("messageField").innerHTML = "You are now Safe!";
	document.getElementById("messageField").style.color = "green";
	//changes background.
	document.body.style.backgroundImage = "url('https://media.giphy.com/media/9Y6n9TR7U07ew/giphy.gif')";
}

//Flickers the visibility of text on screen.
function flickerSuccessFieldVisibility() {
	return setInterval(function() { document.getElementById('messageField').style.visibility = (document.getElementById('messageField').style.visibility == 'hidden' ? '' : 'hidden');}, 500);
}

//Alert that informs user what this window does.
function infoAlert() {
	alert("Click the stop duplication button to stop window from duplicating every 5 seconds.");
}

//Calling the flickerSuccessFieldVisibility function to activate flickering
flickerSuccessFieldVisibility();


//OnClick event for buttons 
document.getElementById("stopButton").onclick = stopNewWindowTimeout;
document.getElementById("panicButton").onclick = closeWin;
document.getElementById("infoButton").onclick = infoAlert;