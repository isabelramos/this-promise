$(document).ready(function () {

	$("#button").click(function(e) {
		console.log("event", e);
		console.log("event.target", e.target);
		console.log("this", $(this));
	});

});


// // EXAMPLE #1:

// var fubar = "42";

// function baz () {
// 	console.log("baz");
// 	bar();
// }

// function bar () {
// 	console.log("bar");
// 	foo();
// }

// function foo () {
// 	console.log("baz");
// 	var fubar = "13";
// 	console.log("this", this); // window
// 	console.log("fubar", this.fubar); // 42
// }

// baz();



// // EXAMPLE #2:

// var a = 3;
// function foo () {
// 	console.log("this", this); // obj
// 	console.log("fubar", this.a); // 2
// }

// var obj = {
// 	a: 2,
// 	monkey: foo
// };

// obj.monkey(); // obj

// foo(); // window



// // EXAMPLE #3:

// function foo () {
// 	console.log("this", this); // obj2
// 	console.log("this.a", this.a); // 32
// }

// var obj2 = {
// 	a: 32,
// 	foo: foo
// };

// var obj1 = {
// 	a: 2,
// 	obj2: obj2
// };

// obj1.obj2.foo(); 


// // EXAMPLE #4:

// function foo () {
// 	console.log("this", this); // 
// 	console.log("this.a", this.a); // 
// }

// var obj = {
// 	a: 2,
// 	foo: foo
// };

// var bar = obj.foo;

// var a = "global warning";

// obj.foo(); // obj, 2

// bar(); // window, "global warming"


// EXAMPLE #5:

function foo () {
	console.log("this", this); // 
	console.log("this.a", this.a); // 
}

function doFoo (fn) {
	return fn();
}

var obj = {
	a: 2,
	foo: foo
};

var a = "global";

doFoo(obj.foo);

















