$(document).ready(function() {
	
	//These are settings for how the form is validated with jquery.validate.
	$("#commentForm").validate({
		rules : {
			otherTopic : {
				required: function(element) {
					return $("#select-native-2 :selected").val() == "other";
				},
				minlength: 4,
			},
			
			name: {
				required: true,
				minlength: 2,
			},
			
			email: {
				required: true,
				email: true,
			},
			
			url: {
				url: true,
			},
			
			comment: {
				required: true,
				minlength: 10,
			},
		},
		
		messages : {
			url: {
				url: "Please enter a valid url.",
			}
		},
	}); 
	
	//This sets otherTopic to be hiden when page is loaded.
	$("#otherTopic").hide();
	
	$("#select-native-2").focus();
	
	//Function that toggles the otherTopic input feald between hide and show when select element is clicked and other option is selected.
	$("#select-native-2").click(function () {
	
		//save value of selected option.
		let selectedTopic = $("#select-native-2 :selected").val();
		
		//Toggle is option with value other is selected.
		if(selectedTopic == "other") {
			$("#otherTopic").show();
			console.log("other");
		} else {
			$("#otherTopic").hide();
			$("#otherTopic").val("");
		}
	});
	
	$("#commentForm").submit(function() {
		let validator = $("#commentForm").validate();
		if(validator.form()) {
			alert("SUCCESS!");
		}
	});
});

