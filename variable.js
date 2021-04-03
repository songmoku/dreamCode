'use strict';

// 2.Variable - rw
// let (added in ES6)
let globalName = 'GName';
{
    let yourName = 'Raphael';
    console.log(yourName);
    yourName = 'hello';

}

//console.log(yourName);
console.log(globalName);

// var hoisting - no block scope , move declaration from bottom to the top
console.log(age);
var age;

// Constants read-only 
// favor immutable data type always for a few reasons;
// - Security
// - thread safety
// - reduce human mistakes
const dayInWeek = 7;
const manNumver = 5;

// 4. Variable types
// primative, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// Symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// Dynamic typing
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / 2;
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));

// const object
const raphael = { name: 'Raphael', age: '20'};


