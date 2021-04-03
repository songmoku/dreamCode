'use strict'
// make a string out of a array
{
const fruits = ['apple', 'banana','orage'];
const result = fruits.join('|');
console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',', 3)
    console.log(result);
}

// 03. make the array look like this
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();

}

// Q4. make a new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result =  (array.slice(2)).toString().split(',');
    console.log(result);
}

class Student{
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    } 
}

const students = [
    new Student('A',29, true, 45),
    new Student('B',28, false, 80),
    new Student('C',30, true, 90),
    new Student('D',40, false, 66),
    new Student('E',18, true, 88)
];

// Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled === true);
    console.log(result);
}

// Q7. make an array containing only the students' scores [45, 80, 90 66, 80]
{
    const result = students.map((student) => student.score); // callback function must be clearity by its own name of obj.
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    //const result = students.map((student) => (student.score < 50) ? student : null); 
    const result = students.some((student) => student.score < 50);
    console.log(result);
}

// Q9. compute students' sore 
{
    const result = students.reduce((prev, curr) => {
        console.log('-------');
        
    });
}

// Q10. make a string containing all the scores
{
    const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
    console.log(result);
}

// Q11. make an aceding order of array of this shit.
{
    const result = students
    .map((students) => students.score)
    .sort((a, b) => a - b)
    .join();
    console.log(result);

}