/*
 A for-in loop is used to loop through the properties of an object.
A for-of loop is used to loop through the values of an iterable object (such as an array
A forEach loop is a method on arrays that executes a function for each element in the array
A map loop is a method on arrays that 
creates a new array by executing a function on each element in the array
*/


//example of the for in loop


 // the for of loop

//  let names = ['Jane', 'John', 'James']

//  for(let name of names) {
//     console.log(name)
//  }

// let names = ['Jane', 'John', 'James']

//  for (let index in names) {
//  console.log(names[index])
//  }

 let person = {
    name: 'John',
     age: 20,
     city: 'Abuja',
     }
    
     for (let key in person) {
     console.log(`${key}: ${person[key]}`)
     }