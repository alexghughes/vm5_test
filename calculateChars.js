var button1 = document.getElementById("button1");

//get the value (=text) from the input field
var txt = document.getElementById("inputText").value;

button1.onclick = function() {
	
	//this is a way to create new lines / paragraphs in your output
	txt += "<br/>";
	
	txt += "second Line";
	
	txt += "<p>new paragraph</p>";
	
	//put the content of the variable 'txt' in the 'div' with the ID 'result'
	document.getElementById("result").innerHTML = txt;
	
};
