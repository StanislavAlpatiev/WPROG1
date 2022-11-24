


function sendRequest() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
	let URL = `https://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.3/example.php?number1=${firstNumber}&number2=${secondNumber}`;
	console.log(URL);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
			document.getElementById("result").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", URL, true);
    xhttp.send();
}

//Prevents default behavior of form when submit button is pressed.
//Stops event from reloading page. 
//used so that DOM can change after submiting form without is disapearing due to reload.

var form = document.getElementById("mathForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

//Creating event listeners.
//onsubmit event used to trigger isEmailRegisterd function when form is submitted.
document.getElementById("calculateButton").onclick = sendRequest;































