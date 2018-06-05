//var, let, const

var name='John Doe';
console.log(name);
name= 'Steve Smith';
console.log(name);

//init var
var greeting;
greeting = 'hello';
console.log(greeting);

// letters, numbers, _, $
// can not start with number

// Mutli word vars
var firstName = 'John'; //Camel Case
var first_name = 'Sara'; //Underscore
var FirstName = 'tom'; // Pascal case -- Used for OOP and Classes
var firstname = 'bob'; 

//LET
let name='John Doe';
console.log(name);
name= 'Steve Smith';
console.log(name);

//CONST
const name = 'John';
console.log(name);
//Can not reassign
//name = 'sara';
//Have to assign a value
// const greeting;

const person = {
  name: 'John',
  age: 30
}

person.name = 'Sara';
person.age = 32;

// console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);