"use strict";


(function Hello() {
	console.log('Hello! Call the function:')
})();


function triangle() {
	var str="";
	for (var i=1; i<=7; i++) {
		for (var a=1; a<=i; a++) {
			str+="#";
		}
		console.log(str);
		str="";
	}
}

function FizzBuzz() {
	for (var i=1; i<=100; i++) {
		if ((i%3==0) && (i%5==0)) {console.log('FizzBuzz');}
			 else if (i%3==0) {console.log('Fizz');}
					else if (i%5==0) {console.log('Buzz');}
						else console.log(i);
	}
}

function checkmate() {
	var str="";
	for (var i=1; i<=8; i++) {
		for (var a=1; a<=8; a++) {
			if (((i%2==1)&&(a%2==1))||((i%2==0)&&(a%2==0))) {str+="#";}
				else {str+=" ";}
		}
		str+="\n";
	}
	console.log(str);
}

function min(a,b) {
	if (a<=b) {return a;} else {return b;}
}