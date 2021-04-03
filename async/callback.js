'use strict';

// JavaScript is synchronous 
// Execute the code block by order after hoisting.
// hoisting: var, function declaration
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// synchronous callback
function printImmediately(print){
    print();
}

printImmediately( () => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}

printWithDelay( () => console.log('async callback'), 2000);

// Bad example
class userStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout( () => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'raphael' && password === 'yes') 
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout( () => {
            if (user === 'raphael'){
                onSuccess({name: 'Raphael', role: 'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const uStorage = new userStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

uStorage.loginUser(
    id, 
    password, 
    user => {
        uStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you hava a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);