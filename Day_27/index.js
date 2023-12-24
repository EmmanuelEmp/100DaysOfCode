// Map is an object tah takes key value pair as 
/*
For-in loop in JavaScript is used to iterate over the properties of an object. It can be a great debugging tool if we want to show the contents of an object. The for-in loop iterates only over those keys of an object which have their enumerable property set to “true”. The key values in an object have four attributes 
(value, writable, enumerable, and configurable). Enumerable when set to “true” means that we can iterate over that property


The for…of loop iterates over the iterable objects (like Array, Map, Set, arguments object, …,etc), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
*/

let objectMap = {
    "John": 1,
    "James": 1,
    "Jane": 3
    
}

console.log("Display key-Value pair: ")
for (const entry in objectMap) {
    console.log(entry);
}
console.log("Display Value only: ")
for (const value in objectMap) {
    console.log(objectMap[value]);
}