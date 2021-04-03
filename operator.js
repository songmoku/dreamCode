// 1. String Concatenation
console.log('my'+' cat');

// 3.pre increment
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assign operators
let x = 3;
let y = 4;
x += y;

// 6.Logical Operators : 
// || (or), finds the first truthy value
// && (and), finds the first false value

// == loose equality, with type conversion
const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equlality by reference
const ellie1 = { name : 'ellie'};

// true , false, true, false, true, false