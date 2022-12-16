//Array containing dummy value for emails that are "registered" inside "database"
const emailsRegistered = ["test@gmail.com", "bob@gmail.com", "email@email.com"];

//List with backgroudColors 
const backgroudColorList = ["#F4F6F7", "#D98880", "#F1948A", "#C39BD3", "#BB8FCE", "#7FB3D5", "#5DADE2", "#76D7C4", "#73C6B6", "#52BE80", "#52BE80", "#F7DC6F", "#F8C471", "#F0B27A", "#E59866"];
//Index for currentBackgroundColor.
let currentBackgroundColorIndex = 0;

//this is an interval for flickering visibility.
const flickerSignUpMessageInterval = flickerSuccessFieldVisibility();


//This function checks if the value of the name filed inside the form follows a regex pattern.
//If the value does not matches the pattern a message is printed.
//Else the message is removed if it was previously showing.
function isValidName() {
	const validRegex =  /^[a-zA-Z ]+$/;
	let nameValue = document.getElementById("name").value;
    
	if(nameValue.match(validRegex)){
		document.getElementById("nameP").innerHTML = "";
		return true;
    } else {
		document.getElementById("nameP").innerHTML = "Please enter a valid name only containing letters.";
        return false;
	}
}



//Function that checkes if email given in form has match in "database" or array with registered email.
//If it has a match, change DOM.
//if error occures regarding wheather the input can be submitted the Boolean isFormSubmittable is toggled.
function isEmailRegisterd() {
	//flag to check if email is registered.
	let isRegistered = false;
	//variable storing value of email input field.
	let emailValue = document.getElementById("email").value;
	console.log(emailValue);

	//for-foop checking if emailValue has match is array(emailsRegistered) with registerd email.
	//if email emailValue has match inside emailsRegistered array change Boolean flag to true.
	for(var i = 0; i < emailsRegistered.length; i++) {
		if(emailValue == emailsRegistered[i]) {
			isRegistered = true;
			break;
		}
	}
	
	//If email is registed return True else False.
	if(isRegistered) {
		return true;
	} else {
		return false;
	}
}

//Function for checking if email follows regex pattern.
//If email follows pattern return True.
//Else return False.
function emailIsValidRegex() {
	const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	let emailValue = document.getElementById("email").value;
    if(emailValue.match(validRegex)){
		return true;
    } else {
        return false;
	}
}

function emailCheck() {
	//runs isEmailRegisterd function and saves Boolean response.
	let emailIsRegisterd = isEmailRegisterd();
	//runs emailIsValidRegex function and saves Boolean response.
	let isValidRegex = emailIsValidRegex();
	//Create Boolean flag
	let validEmail = false;
	
	//First check if email follows Regex Pattern.
	//If it does follow Regex test if it is already registered. 
	if(isValidRegex) {
		if(emailIsRegisterd) {
			document.getElementById("emailP").innerHTML = "This email is already registered!";
		} else {
			//If email is not registered and follows the regex pattern toggle Boolean flag.
			document.getElementById("emailP").innerHTML = "";
			validEmail = true;
		}
	} else {
		document.getElementById("emailP").innerHTML = "Please enter a valid Email.";
	}
	
	//return if email was valid or not as a Boolean.
	return validEmail;
}

function isValidAge() {
	//flag to check if age has a valid value.
	let isValid = true;
	//variable storing value of age input field.
	let ageValue = document.getElementById("age").value;

	
	if(Math.sign(ageValue) == -1 || Math.sign(ageValue) == 0) {
		isValid = false;
	}
	
	//changes DOM elements innerHTML depending on if isRegistered is true or false.
	if(!isValid) {
		document.getElementById("ageP").innerHTML = "This age equals 0 or has a negative value, Please try again!";
		return false;
	} else {
		document.getElementById("ageP").innerHTML = "";
		return true;
	}
}

function isValidPassword() {
	//Regex for password.
	const validRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
	//variable storing value of age input field.
	let passwordValue = document.getElementById("password").value;
	
	//changes DOM elements innerHTML depending on if isRegistered is true or false.
	if(passwordValue.match(validRegex)) {
		document.getElementById("passwordP").innerHTML = "";
		return true;
	} else {
		document.getElementById("passwordP").innerHTML = "Please enter a password containing at least one number and special character.";
		return false;
	}
}

//Checks if fields are empty.
//If fields are empty. Populate coresponding <p> tag with message telling the user to fill it in.
function isFiledsEmpty() {
	let fields = ["name", "age", "email", "password"];
	let isFieldEmpty = false;
	for(var i = 0; i < fields.length; i++) {
		let fieldElement = document.getElementById(fields[i]).value.isFieldEmpty;
		if(fieldElement) {
			document.getElementById(fields[i] + "P").innerHTML = "Please fill in this field.";
			true;
		}
	}
	return isFieldEmpty;
}

//Runs all methods related to the form when the submit button is clicked.
function submitForm() {
	//let emailIsValid = isEmailRegisterd();
	//let emailValidRegex = emailRegexCheck();
	
	let nameIsValid = isValidName();
	let ageIsValid = isValidAge();
	let emailIsValid = emailCheck();
	let passwordIsValid = isValidPassword();
	let isFieldEmpty = isFiledsEmpty();
		
	if (!isFieldEmpty && nameIsValid && ageIsValid && emailIsValid && passwordIsValid /*&& emailValidRegex*/) {
		if(confirmFormValues()) {
			let promptValue = notARobotPrompt();
			if(promptValue != null && promptValue.toLowerCase() == "harry potter") {
				resetForm();
				//stopFlickerSignUpMessage();
				setTimeout(stopSuccessFieldFlicker, 1000);
				setTimeout(successfulRegistrationMessage, 1000);
				setTimeout(removeSuccessfulRegistrationMessage, 7000);
				console.log(true);
			}
		}
	} else {
		console.log(false);
	}
}

//Resets all fields and <p> tags used for error messages inside the form.
function resetForm() {
	document.getElementById("registerForm").reset();
	document.getElementById("nameP").innerHTML = "";
	document.getElementById("ageP").innerHTML = "";
	document.getElementById("emailP").innerHTML = "";
	document.getElementById("passwordP").innerHTML = "";
}

//This function returns an interval where the visibility state of element is toggles every second.
function flickerSuccessFieldVisibility() {
	return setInterval(function() { document.getElementById('successField').style.visibility = (document.getElementById('successField').style.visibility == 'hidden' ? '' : 'hidden');}, 1000);
}

//This function stops flickerSignUpMessageInterval and then turns visibility to true incase the interval was stoppen when visibility was false.
function stopSuccessFieldFlicker() {
	clearInterval(flickerSignUpMessageInterval);
	document.getElementById('successField').style.visibility = "";
}

//Displays Message used for succesfull registrations.
function successfulRegistrationMessage() {
	document.getElementById("successField").innerHTML = 'Your form has successfully been registered'
	document.getElementById("timeField").innerHTML = 'The time was, ' + Date() + ' when this occured';
}

//Removing Message used for succesfull registrations.
function removeSuccessfulRegistrationMessage() {
	document.getElementById("successField").innerHTML = 'Sign Up Now!'
	document.getElementById("timeField").innerHTML = '';
}

//Confirm method used to see that the input values in form are intentional
function confirmFormValues() {
	return confirm("Are these values correct? press OK to confirm");
}

//prompt to see that user is not a robot
function notARobotPrompt() {
	return prompt("Enter 'Harry Potter' to confirm you are not a Robot to continue.");
}

//Prevents default behavior of form when submit button is pressed.
//Stops event from reloading page. 
//used so that DOM can change after submiting form without is disapearing due to reload.
var form = document.getElementById("registerForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


let myWindow;

function openWin() {
	myWindow = window.open("spamPage.html", "_blank", "width=500, height=500");
}

//This function updates innerHTML for moouseXYWindow
function mouseMoveDisplayXY(event) {
	//Saving the event attributes pageX and pageY into variables for future use.
	let x = event.pageX;
	let y = event.pageY;
	//create a string variable with values of x and y added into it.
	let coor = "Mouse Coordinates: (" + "X=" + x + ", " + "Y=" + y + ")";
	//Change the innerHTML of moouseXYWindow to value of coor.
	document.getElementById("mouseXYWindow").innerHTML = coor;
}

//This function changes the fontsize of riskyButton to 1.5rem.
//Used when onmouseover event is triggered for riskyButton.
function riskyButtonHoverIn() {
	document.getElementById("riskyButton").style.fontSize = "1.5rem";
}

//This function changes the fontsize of riskyButton to 1rem.
//Used when onmouseout event is triggered for riskyButton.
function riskyButtonHoverOut() {
	document.getElementById("riskyButton").style.fontSize = "1rem";
}

//Function iterates over backgroudColorList forward and changes the body backgroundColor to the value of currentBackgroundColorIndex.
//This function is called from checkKeyPressValue when the down arrow key is pressed.
function onKeyDownChangeBackgroundColorForward() {
	//If currentBackgroundColorIndex is at edge, loop it from other edge.
	//Else increment index value
	currentBackgroundColorIndex = (currentBackgroundColorIndex < backgroudColorList.length - 1) ? currentBackgroundColorIndex + 1 : 0;
	
	//Change document body backgroudColor.
	document.body.style.backgroundColor = backgroudColorList[currentBackgroundColorIndex];  
}

//Function iterates over backgroudColorList backwards and changes the body backgroundColor to the value of currentBackgroundColorIndex.
//This function is called from checkKeyPressValue when the up arrow key is pressed.
function onKeyDownChangeBackgroundColorBackwards() {
	//If currentBackgroundColorIndex is at edge, loop it from other edge.
	//Else deincrement index value.
	currentBackgroundColorIndex = (currentBackgroundColorIndex < 1) ? backgroudColorList.length - 1 : currentBackgroundColorIndex - 1;
	//Change document body backgroudColor.
	document.body.style.backgroundColor = backgroudColorList[currentBackgroundColorIndex];  
}

//Function used to trigger functions based on pressed key.
function checkKeyPressValue(e) {
	// up arrow.
	if (e.keyCode == '38') {
		onKeyDownChangeBackgroundColorBackwards();
    }
	
	// down arrow.
    if (e.keyCode == '40') {
		onKeyDownChangeBackgroundColorForward();
    }
	
	// Esc key
    if (e.keyCode == '27') {
		//Remove eventlister for keydown to change background.
		document.removeEventListener("keydown", checkKeyPressValue);
	}
}

//Shows user some usefull information about the page functionality when loading
function onLoadFunction() {
	alert("Press Up and Down Arrow Keys to Change Background Color!\nPress Esc to STOP this feature.");
}


//Creating event listeners.

//onsubmit event used to trigger isEmailRegisterd function when form is submitted.
document.getElementById("registerForm").onsubmit = submitForm;
document.getElementById("riskyButton").onclick = openWin;
document.documentElement.onmousemove = mouseMoveDisplayXY;
document.getElementById("riskyButton").onmouseover = riskyButtonHoverIn;
document.getElementById("riskyButton").onmouseout = riskyButtonHoverOut;
document.addEventListener("keydown", checkKeyPressValue);
document.body.onload = onLoadFunction;





























