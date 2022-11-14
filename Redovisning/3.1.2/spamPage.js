//this variable stores window for access
let myWindow = window.open('', '_self', '');;
const newWindowTimeout = createNewWindow();



//Opens Window
function openWin() {
  myWindow = window.open("spamPage.html", "_blank", "width=500, height=500");
}

//Closes window
function closeWin() {
  self.close();
}

//OnClick event for buttons 
document.getElementById("stopButton").onclick = stopNewWindowTimeout;
document.getElementById("panicButton").onclick = closeWin;


function createNewWindow() {
	return setTimeout(openWin, 5000);
}

function stopNewWindowTimeout() {
	clearTimeout(newWindowTimeout);
	document.getElementById("messageField").innerHTML = "You are now Safe!";
	document.getElementById("messageField").style.color = "green";
	document.body.style.backgroundImage = "url('https://media.giphy.com/media/9Y6n9TR7U07ew/giphy.gif')";
}

function flickerSuccessFieldVisibility() {
	return setInterval(function() { document.getElementById('messageField').style.visibility = (document.getElementById('messageField').style.visibility == 'hidden' ? '' : 'hidden');}, 500);
}

function infoAlert() {
	alert("Click the stop duplication button to stop window from duplicating every 5 seconds.");
}

flickerSuccessFieldVisibility();

document.getElementById("infoButton").onclick = infoAlert;