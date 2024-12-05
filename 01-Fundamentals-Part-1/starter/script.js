/* values and variables
let firstName = "Hemanth";
console.log(firstName);*/

/* data types
//1. boolean
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

//2. typeof
console.log(typeof javaScriptIsFun);
console.log(typeof "Hemanth");
console.log(typeof 23.3);

//3. dynamic typing
javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

//4. undefined
let year;
console.log(year);
console.log(typeof year);

//5. null
year = null;
console.log(year);
console.log(typeof year); */

/* let, const and var
let age = 37;
age = 38;

const year = 1986;
// not possible
year = 1987;

// avoid using var
var day = 19; */

/* Basic Operators
//1. Math operators
const now = 2037;
const ageHemanth = now - 1986;
const ageSteve = now - 1985;

console.log(ageHemanth, ageSteve);

console.log(ageHemanth * 2, ageSteve / 10, 2**3);

const firstName = 'Hemanth';
const lastName = 'Boddepalli';
console.log(firstName + ' ' + lastName);

//2.  Assignment operators
let x = 15;
x += 10;
x *= 2;
x -= 10;
x++;
x--;
console.log(x);

//3. comparison operators
console.log(ageHemanth > ageSteve);
const isFullAge = ageSteve >= 18;
console.log(isFullAge);*/

/* Operator Precedence
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark ** 2);
let BMIJohn = massJohn / (heightJohn ** 2);
let markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark);
console.log(BMIJohn);
console.log(heightMark * heightMark);
console.log(heightMark ** 2);*/

/* String and template literals
const firstName = 'Hemanth';
const job = 'Software Engineer';
const birthYear = 1986;
const year = 2037;

// 1. strings
const hemanth = "I'm " + firstName + ', a '+ (year - birthYear) + ' years old ' + job + '!';
console.log(hemanth)

// 2. template literals
const hemanthNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(hemanthNew);

//3. template strings
console.log('String\n\
with\n\
multiple lines');

console.log(`String
with
multiple lines`);*/

/* Decisions

let age = 15;

if (age >= 18) {
    console.log('Sarah can apply for driving licence 🚗')
} else {
    console.log('Sarah cannot apply for driving licence 😒');
} */

/* Type conversion
const input = "1986";
console.log(Number(input), input);
console.log(Number(input) + 18);

console.log(Number('Hemanth'));
console.log(typeof NaN);
console.log(23, String(23));*/

/* Type coercion
console.log('I am '+ 37 + ' years old');
console.log('38' - '13');
console.log('38' * '2'); */

/* Trythy and Falsy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Hemanth'));
console.log(Boolean(1));
console.log(Boolean(NaN));
console.log(Boolean({}));
console.log(Boolean(null));

const money = 100;
if (money) {
    console.log('Dont spend it all');
} else {
    console.log('You should get a job');
}

let height;
if (height) {
    console.log('Yay!! height is defined');
} else {
    console.log('Height is undefined');
} */

/* Equality Operators
let age = 18;
if (age == 18) {
    console.log('You just became an adult');
}

const favNumber = Number(prompt('enter your favourite number!'));
console.log(favNumber);
console.log(typeof favNumber);

if (favNumber === 37) {
    console.log('You entered favourite number!');
}

if (favNumber !== 37) {
    console.log('why not 37?')
}*/

/* Logical operators
const hasDirvingLicense = true;
const hasGoodVision = false;

console.log(hasDirvingLicense && hasGoodVision);
console.log(hasDirvingLicense || hasGoodVision);
*/

/* Switch Statement
const day = 'tuesday';

switch(day) {
    case 'monday':
        console.log('Monday');
        break;
    default:
        console.log('Other days');
} */

/*Statements and expression

3 + 4; //statement
let sum = 3 + 4; // expression */

/* Ternary operator

const age = 16;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💦');
*/
