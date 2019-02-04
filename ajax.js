function loadDoc(){
let xhttp =  new XMLHttpRequest()
xhttp.onreadyStatechange = function(){
	if (this.readystate == 4 && this.status == 200){
		document.getElementById("json").innerHTML = this.responseText
	}
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhttp.onreload = function(){
	let jsonData = JSON.parse(xhttp.responseText);
	console.log(jsonData[0].UserId);
};
xhttp.send();
