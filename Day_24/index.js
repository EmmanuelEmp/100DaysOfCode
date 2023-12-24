// Operators in depth

// Logical AND operator: && 

// Logical OR operator: || 

// Logical NOT operator: ! 

// The modulus operator: % 

// The equality operator: ==

// The strict equality operator: ===

// The inequality operator: !=

// The strict inequality operator: !==

// The addition assignment operator: += 

// The concatenation assignment operator: += (it's the same as the previous one - more on that later)

//The logical AND operator is, for example, used to confirm if multiple comparisons will return true

var currentTime = 10;
console.log(currentTime > 9 && currentTime < 18)


// The logical OR operator in JavaScript consists of two pipe symbols together: ||.

// It is used when you want to check if at least one of the given comparisons evaluates to true

var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);

// The logical NOT operator: !
// In JavaScript, the logical NOT operator's symbol is the exclamation mark: !.

// You can think of the ! operator as a switch, which flips the evaluated boolean value from true to false and from false to true.

var petHungry = true;

console.log('Feeding the pet');
console.log("Pet is hungry: ", !petHungry);
console.log(petHungry);

