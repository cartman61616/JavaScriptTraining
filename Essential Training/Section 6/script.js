
function simpleMessage() {
	alert ("This is just an alert box");
}
//setTimeout in milliseconds
//setTimeout(simpleMessage, 5000);

function prepareEventHandlers() {

var myImage = document.getElementById("mainImage");

var imageArray = ["_images/overlook.jpg","_images/winery_sign.jpg","_images/lunch.jpg",
				  "_images/bigSur.jpg","_images/flag_photo.jpg","_images/mission_look.jpg"];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}


var intervalHandle = setInterval(changeImage, 5000);

myImage.onclick = function() {
	clearInterval(intervalHandle);
};

/*
myImage.onclick = function() {
	alert("You clicked the image");
};	
*/
}
/*
var emailField = document.getElementById("email");

emailField.onfocus = function() {
	if (emailField.value == "your email") {
		emailField.value = "";
	}
};

emailField.onblur = function() {
	if (emailField.value == "") {
		emailField.value = "your email";
	}
};
*/
window.onload = function () {
	//prep anything we need to do
	prepareEventHandlers();
};
