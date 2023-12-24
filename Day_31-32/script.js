//I will be looking at filter(), map(), find(), sort() and forEach


// map()
// It is used to modify each element of the array according to the callback function

const stacks = [ 'node.js', 'express', 'react', 'mongodb', 'django', 'mysql']

const capitalizeStacks = stacks.map( (stack) => 
    stack.toUpperCase() 
)
console.log(capitalizeStacks)

// filter()
//It is used to get a new array that has only those array elements 
//which pass the test implemented by the callback function
 
const filterStudent = (studentScore) => {
    return studentScore.filter((passScore) => {
        return passScore.score >= 80; // pass mark = 80
    });

};

studentScore =[ { 'score': 90 }, {'score': 86}, 
{'score': 60}, {'score': 75}, {'score': 80}
];

console.log(filterStudent(studentScore));

// forEach
// The forEach() function is method executes a callback
//function on each of its elements

//stacks.forEach((stack) =>  console.log(stack))

// capitalize the first letter of each word
const titleCaseNames = [];
stacks.forEach((stack) => {
  const titleCaseName = stack[0].toUpperCase() + stack.slice(1)
  titleCaseNames.push(titleCaseName)
})

// console.log(titleCaseNames) 

// sort()
// The sort() method is used to sort the elements of an array. The
//sort() method modifies the original array and returns the sorted
//array. the sort in default sort element in ascending order


const sortNumbers = [3, 4, 5, 6, 9,7, 8]
sortNumbers.sort()

console.log(sortNumbers)

// find() method
// The find() method returns the first element in an array that meets
// a condition

const quantities = [7, 3, 9, 13, 5, 11]

const firstQuantityGreaterThan10 = quantities.find(
    (quantity) => quantity > 10
)
console.log(firstQuantityGreaterThan10)