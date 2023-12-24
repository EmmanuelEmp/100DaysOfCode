// if the operands are equal, the equal to operator == returns true

console.log(15 == 15) //true
console.log(15 == 11) //false

//The Boolean() constructor in JavaScript is a built-in function that can be used to create a new Boolean object. The Boolean() constructor takes a single argument and returns a Boolean object with a value of true or false 
//depending on the type and value of the argument passed in

function func() {
	let value1 = Boolean("Hello");
	let value2 = Boolean("0");
	let value3 = Boolean(0);
	let value4 = Boolean(new Date());
	console.log(value1);
	console.log(value2);
	console.log(value3);
	console.log(value4);
}
func();
//JavaScript Boolean Methods: Methods are actions that can be performed on objects.
//Instance Method: If the method is called on an instance of a boolean then it is called an instance method

//boolean.valueOf() and boolean.toString()

// let us create a  boolean object
let booObject = new Boolean(30);

console.log(obj.valueOf());
console.log(obj.toString());
let objectBoo = new Boolean(javascript);
console.log(objectBoo.valueOf())
console.log(objectBoo.toString())

