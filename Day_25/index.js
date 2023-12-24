// javascript conditional statement and loops

/*
Looping in programming languages is a feature that 
facilitates the execution of a set of instructions/functions repeatedly
while some condition evaluates to true.
*/

// for (let i = 0; i < 3; i++) {
// 	console.log("Hello World!");
// }

// let i = 0;
// while(i<3){
//     console.log("Hello world!")
//     i++
// }

// the popular Fizz Buzz
// writ a program that prints the number from 1 to 20
// For multiples of three print "Fizz" instead of the number
// For the multiples of five print "Buzz" instead of the number
// for numbers which are multiples of both three and five print "FizzBuzz"
// For numbers not divisible by 3, or 5, or both, print the number it is.

// Using FOR loop to set the counter to 1 
// And break out when it reaches 20

for(let i = 1; i <= 20; i++) {
    // if mum MOD 15 === 0
    if( i % 15 === 0){
        console.log('FizzBuzz');
    }
    //if num MOD 3 === 0
    else if(i % 3 === 0 ) {
        console.log('Fizz');
    }
    //if num MOD 5 === 0
     else if (i % 5 === 0){
        console.log('Buzz');
    } 
    // else print num
    else {
        console.log(i)
    }

}
