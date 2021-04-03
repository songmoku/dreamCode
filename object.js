// Object 
// one of the JavaScirpt's data types
// a collection of related data and/or fuctionality.
// nearly all objects in JavaScript are instance of object
// ojbect = { key : value};

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax;

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4};
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

//delete ellie.hasJob;

// 2. Computed properties - for run time
console.log(ellie.name);
console.log(ellie['name']);
console.log(ellie.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(ellie, 'name');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};

// 4. Construnctor Function
function Person(name, age){
    this.name = name;
    this.age = age;
}

const person3 = new Person('Raphael', 30);

// 5. in operator: property existence check (key on obj)
console.log('name' in ellie);
console.log('habit' in ellie);

// 6. for in vs for of
console.clear();
for (key in ellie){
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(value of array){
    console.log(value);
}

// old way
const user = {name: 'ellie', age: '20'};

const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);
