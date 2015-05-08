var mainTitle = document.getElementById("mainTitle");

console.log("This is an element of type: ", mainTitle.nodeType);
console.log("The Inner HTML is: ", mainTitle.innerHTML);
console.log("Child Nodes: ", mainTitle.childNodes.length);

var myLinks = document.getElementsByTagName("a");
console.log("Links: ", myLinks.length);

var mainContent = document.getElementById("mainContent");
mainContent.setAttribute("align", "right");

mainTitle = document.getElementById("mainTitle");
console.log(mainTitle.innerHTML);

var sidebar = document.getElementById("sidebar");
console.log(sidebar.innerHTML);


var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");

//adding content using inner html
//newHeading.innerHTML = "Did you know"
//newParagraph.innerHTML = "California produces over 17 million gallons of wine each year!";

//adding content by creating child nodes
var h1Text = document.createTextNode("Did you know");
var paraText = document.createTextNode("California produces over 17 million gallons of wine each year!");
newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);

document.getElementById("trivia").appendChild(newHeading);
document.getElementById("trivia").appendChild(newParagraph);