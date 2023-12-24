let newArray = ["HTML", "CSS", "Javascript", "NodeJS", "React"]
console.log(newArray[2])

//using the array constructors with the new Keyword

let newArray2 = new Array('HTML', 'CSS', 'Javascript', 'NodeJS', 'React')

// Unlike Array index, the length of an array is not zero-based. So,
// when counting the number of elements in an array, we start from
// 1
console.log(newArray2.length)

newArray.push('MongoDB') // The push() method adds one or more elements to the end of an array and returns the new length of the array
newArray.unshift('MySQL') // The unshift() method adds one or more elements to the front of an array and returns its new length
console.log(newArray)

// The reverse() method reverses the order of the elements in an array
newArray.reverse()
console.log(newArray)

// We can loop through the elements of an array
for(let i = 0; i < newArray.length; i++) {
    console.log(newArray[i])
}

