"use strict"
let a = +prompt('a', '');
switch (a) {
	case 1:
		alert("one");
		break;
	case 2:
	case 3:
		alert("alert two three");
		break;
	default:
		alert("nothing");
		break;

};

alert(a);
