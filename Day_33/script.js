// JavaScript strings are the sequence of characters. 
//In JavaScript, strings automatically convert the string to objects so that we can use string methods 
//and properties also for primitive

// slice() method
// JavaScript strings are the sequence of characters. In JavaScript, strings automatically convert the string to objects so that we can use string methods and properties also for primitive
let lang = 'javascript and python';
langPf = lang.slice(0, 10);

console.log(langPf)

// replace() method
// This method replaces a part of the given string with another string or a regular expression. The original string will remain unchanged.

let str = "Array, Set, Tree";

let part = str.replace("Set", "stack");
console.log(part)

// UpperCase() method
//This method converts all the characters present in the String to upper case and returns a new String with all characters in upper case

let langs = 'javascript and python';

console.log(langs.toUpperCase())

// toLowerCase()
//This method converts all the characters present in the so lowercase and returns a new string with all the characters in lowercase.
let lan = 'Javascript and Python';
console.log(lan.toLowerCase())

// concat()
// This method combines the text of two strings and returns a new combined or joined string
let thirdLang = 'Java, ';


console.log(thirdLang.concat(lan));

// trim() method
//This method is used to remove either white spaces from the given string. This method returns a new string with removed white spaces.
let len = 'Javascript    '
let newLen = len.trim();
//Original length
console.log(len.length)

// new length with removed white spaces
console.log(newLen.length)

// charAt()
//This method returns the character at the specified index. String in JavaScript has zero-based indexing.
console.log(len.charAt(0))

// split()
// This method splits the string into an array of sub-strings. This method returns an array
let lanSplit = 'javascript-and-python';
console.log(lanSplit.split('-'))
