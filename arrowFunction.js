let sum = (a, b) => a+b;
alert(sum(2,3));

let double = b => b*2;
alert(double(3));

let sayHi = () => alert("hello");
sayHi();

let welcome = (age) => {
	if(age < 10) {
		return () => alert("under 10");
	} else {
		return () => alert("over 10");
	}
};

let test = welcome(1);

test();