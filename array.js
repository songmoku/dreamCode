'use strict'

// Array
// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// Index position
const fruits = ['APPLE', 'BANANA'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length -1]);

// 3. Loop 
for(let key in fruits){
    console.log(fruits[key]);
}

// for of
for(let fruit of fruits){
    console.log(fruits);
}

// for each
fruits.forEach((fruit) => console.log(fruits));

// 4. Addition, delettion, copy
fruits.push('Strawaberry', 'Peach');
console.log(fruits);

// pop
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning 
fruits.unshift('Peach');
console.log(fruits);

// shfit: remove an item from the beginning
fruits.shift();
console.log(fruits);
// note : shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.splice(1, 1);
console.log(fruits);

// combine two arrays
const fruits2 = ['Pear', 'Lemon'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
console.log(newFruits.includes('Lemon'));
console.log(newFruits.indexOf('Lemon'));

//lastIndexOf
console.log(newFruits.lastIndexOf('Pear'));
