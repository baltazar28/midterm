let a = document.getElementById('display');

function appendNum(e){
	let n = e.innerHTML;
	a.value += parseInt(n);
}
function optr(e){
	let x1;
	let op = e.innerHTML;

	switch(op){
		case "Add":
			x1= a.value;
			break;
		case "Minus":
			x1=	a.value;
			break;
		case "Multi":
			x1=	a.value;
			break;
		case "Divide":
			x1=	a.value;
			break;
		case "Equals":
			if(op == "+"){
				a.value = x1 +  parseInt(a.value);
			} else if (op == "-"){

			}

	}
}