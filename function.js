// Function
// - fundamental building block
function printLog(message){
    console.log(message);
}

printLog('Hello');

const leader = { name: 'ellie' };

function changeName(obj){
    obj.name = 'Raphael';
}

changeName(leader);
console.log(leader.name);

let globalMessage = 'global';

function printMessage(){
    console.log(globalMessage);
}

printMessage();

// 7.Early return, early exit

// 1.Function expression


// Arrow Function
// always anonymous 
// const simplePrint = function(){
//     console.log('simplePirnt!');
// }

const simplePrint = () => console.log('simplePrint!');
const simpleMultiply = (a, b) => a + b;

// IIFE: Immediately Invoked Function Expression
(function hello(){
 console.log('IIFE');
})();