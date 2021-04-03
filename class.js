'use strict';
// JavaScript classes

// 1. Class declarations
class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`${this.name}: Hello!`);
    }
}

const raphael = new person('Raphael');

raphael.speak();

class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        
        this._age = value < 0 ? 0 : value;

    }
}

const coder1 = new User('Steve', 'Jobs', -1);
console.log(coder1.age);

// 4. Static Constructor 

// 5. Inheritance
// a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    getArea(){
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();

// 6. Class checking: instance of
console.log(rectangle instanceof Rectangle);
