var input = document.getElementById("input");
var equal = document.getElementById("b=");
var plus = document.getElementById("b+");
var minus = document.getElementById("b-");
var times = document.getElementById("b*");
var divi = document.getElementById("b/");
var clear = document.getElementById("ca");

var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var b8 = document.getElementById("b8");
var b9 = document.getElementById("b9");
var bp = document.getElementById("bp");

input.focus();

equal.onclick = function (){
	var valor = eval(input.value);
	console.log(valor)
	input.value = valor	
	input.focus();
};

plus.onclick = function (){
	input.value = (input.value + (" + "));
	input.focus();
};
minus.onclick = function (){
	input.value = (input.value + (" - "));
	input.focus();
};
times.onclick = function (){
	input.value = (input.value + (" * "));
	input.focus();
};
divi.onclick = function (){
	input.value = (input.value + (" / "));
	input.focus();
};

b1.onclick = function (){
	input.value = (input.value + ("1"));
	input.focus();
};
b2.onclick = function (){
	input.value = (input.value + ("2"));
	input.focus();
};
b3.onclick = function (){
	input.value = (input.value + ("3"));
	input.focus();
};
b4.onclick = function (){
	input.value = (input.value + ("4"));
	input.focus();
};
b5.onclick = function (){
	input.value = (input.value + ("5"));
	input.focus();
};
b6.onclick = function (){
	input.value = (input.value + ("6"));
	input.focus();
};
b7.onclick = function (){
	input.value = (input.value + ("7"));
	input.focus();
};
b8.onclick = function (){
	input.value = (input.value + ("8"));
	input.focus();
};
b9.onclick = function (){
	input.value = (input.value + ("9"));
	input.focus();
};

b0.onclick = function (){
	input.value = (input.value + ("0"));
	input.focus();
};
bp.onclick = function (){
	input.value = (input.value + ("."));
	input.focus();
};
clear.onclick = function (){
	input.value = ("");
	input.focus();
}
