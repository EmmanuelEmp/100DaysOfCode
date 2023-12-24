// The Date Object
// The Date object is an inbuilt datatype of JavaScript language. 
// It is used to work with dates and times. The Date object is created by using new keyword, i.e. new Date()
// creating a date object with no arguments
 //The Date() constructor creates a Date object which sets the current date 
//and time depend on the browser’s time zone



let todayDate = new Date();
//let date = todayDate.toLocalString();

document.write(todayDate);

// We can create a Date object with a specific date and time, by passing the string

let dateString = new Date('November 8, 2023')

document.write(dateString);

//Extract several components of the date and time using its properties and methods

document.write(dateString.getFullYear())
document.write(dateString.getMonth())
document.write(dateString.getDate())
document.write(dateString.getDay())
document.write(dateString.getHours())


