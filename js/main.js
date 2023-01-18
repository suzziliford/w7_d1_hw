console.log('Hello from the main.js file');
console.log('Hello ajain');

// Basics of Javascript
// for multiline commnets

/*
MULTILINE COMMENT
    -- Variable Declaration in JavaScript

    Primitive Data Types: String, Number, Boolean, Undefined, Null
    Object Types: Objects, Array, Function
*/

// Variable Declaration - use camelCase to name variables 

// var myName;

// console.log(myName);

//  String Declaration
var myName = 'Matty';

//  console.log() is equivalent to python's print() function
console.log(myName);
console.log(typeof myName)

// Strings can be created useing '', "". or ``, the tick marks(``) 
// have a special behavior to format the string
//  Tick marks + ${} is equiv to f"{}"
console.log("My name is ${myName}")
console.log('My name is ${myName}')
console.log(`My name is ${myName}`);

//  Integer
var myAge = 99;

console.log(myAge);
console.log(typeof myAge);

// Float 
var pi = 3.14
console.log(pi)
console.log(typeof pi);


//  Boolean
// lowercase
var boolTrue = true;
console.log(boolTrue);
console.log(typeof boolTrue);

// Undefined legit data type. Variable that has been declared without a value
var something;

console.log(something);
console.log(typeof something)

//  Null. Variable assigned with Null
var someNull = null;

console.log(someNull);
console.log(typeof someNull); // A Bug in the code!

//  == allows for type conversion 
//  === does not 

//  Object
// similar to dictionary in Python
//  keys = brackets
var myObject = {
    a: 123,
    test: 'hello world'
};

console.log(myObject);
console.log(typeof myObject);

// Array
var myArr = ['Brian', 'Stanton', 'Chicago'];

console.log(myArr);
console.log(typeof myArr); 

//  Function
function abc(){};

console.log(abc);
console.log(typeof abc);

// Accessing properties from an object
let person = {
    first: 'Brian',
    last: 'Stanton',
    languages: ['Python', 'JavaScript']
}

console.log(person);

//  Bracket Notation
console.log(`My first name is ${person["first"]}`)

// Dot notation
console.log(`My last name is ${person.last}`)

console.log(person.languages);

// When accessing properties in an array (aka the indicies), use bracket notation
console.log(`My favorite language is ${person.languages}[0]`);

//  Arrays have a "length" property
var myNewArr = ['red', 'white', 'blue',];

console.log(myNewArr, myNewArr.length);

//  Clear our console
console.clear();

// var vs let vs const

// let - Allows us to declare a variable similar to var
//  * let is block-scope, var is global-scope *
let myCountry = 'United States'

if (true){
    var myState = 'Illinois';
    let myCity = 'Chicago';
    console.log(myCity, myState, myCountry);
}

// console.log(myCity);  //ReferenceError: myCity is not defined because let is local not global
console.log(myState);

//  const - similar to let (block-scoped)
//  2 differences: Need a value when declared 2. Cannot be reassigned

{
    let myAge = 99;
    const myHeight = 10;
    console.log (myAge);
    console.log(myHeight);
}

//  Be careful when using const with an object!

const cities = ['Chicago', 'New York', 'Boston', 'Denver'];

console.log(cities);

cities[1] = 'San Diego';

console.log(cities);

// cities = ['Kansas City', 'Buffalo', 'Cleveland']

console.log(cities);

const president = {
    first: 'Abe',
    last: 'Lincoln'
}

console.log(president);

president.first = 'Abraham';
console.log(president);

// president = {
//     first: 'George',
//     last: 'Washington',
// };

// clear the console again 
console.clear();

// Basic math operations

// Addition
let sum = 5 + 5;
console.log(sum);
sum+=5;  
// sum = sum + 5
console.log(sum);
sum++; // sum++; // sum += 1  sum = sum + 1
console.log(sum);

// Subtraction
let diff = 20 - 5;
console.log(diff);
diff -=5;
console.log(diff);
diff --;  
// diff -= 1  diff = diff - 1
console.log(diff);

// Multiplication
let prod = 8 * 5;
console.log(prod);
prod *= 5;
console.log(prod);

//  Division
let quotient = 40 / 5;
console.log(quotient);
quotient /= 2;
console.log(quotient);

//  Floor Division - use the .floor method from built in math module
let floor = Math.floor(10/3);
console.log(floor);

//  Exponents
let square = 5 ** 2
console.log(square);
square **= 2; //square = square ** 2;
console.log(square);

//  Modulo
let remainder = 19 % 4;
console.log(remainder);
remainder %= 2; //remainder = remainder % 2
console.log(remainder);

// combining strings and int into string

let myString = 'My age is '
let myNewAge = 547

let addedString = myString + myNewAge;
console.log(addedString)
console.log(typeof addedString);

let addSquare = square + Number('4');
console.log(addSquare);

//  Clear Console
console.clear();

//  Javascript Comparrison

console.log(5 == 5);
console.log(5 == 5.0);
console.log(5 == '5');
console.log(5==='5');

//  check for equalit while allowing for type converison
//  === check for equality but does not allow for type conversion

console.log(1 == true);

console.log('10' > 9);

//  Be careful with the type conversion

console.log('100' > '9') // both values are already strings, n converstion needed - 
// compare alphabetically

//  When JavaScript compares objects, it looks FERENCE ONLY!!
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

console.log(arr1 == arr2);
console.log(arr1 === arr2);

let animals = ['penguin', 'wolf', 'kangaroo']
let newAnimals = animals;

console.log(animals === newAnimals);


// Greater Than (>), Greater Than or Equal (>=), Less Than (<), Less Than or Equal (<=)
// Equal allow type conversion (==), Equal no type conversion (===), 
// Not Equal yes conversion (!=), Not Eqaul no conversion (!==)

console.log(5 != '5');
console.log(5 !== '5')

console.clear();

//  Control flow 

//  If Condition 

//  Syntax: if (condition expression) {code to execute if true }

let randomDigit =  34;

console.log('Begin')
if (randomDigit > 20){
    console.log('the condition was true!');
    console.log('Still in {}');
    console.log('Hey what is goin on?');
};
console.log('End');


//  If, Else If, Else

// let randomInt = 100;

// if (randomInt % 100 === 0){HTMLFormControlsCollection.log('The number is diisible by 100')}
// if (randomInt % 10 === 0)[]

//  Standard for Loop
//  Syntax: for (counter; expresion/condition; in)

console.log('Loop has started');

for (let i = 0; i <= 20; i++){
    console.log(i);
};

console.log('loop has ended');

let colors = ['orange', 'green', 'pink', 'yellow', 'black']

for (let i = 0; i < colors.lenth; i++){
    console.log(i, colors[i])
};

//  for in 

let chiTeams = {
    mlb: 'White sox',
    nba: 'Bulls',
    nfl: 'Bears',
    nh1: 'Blackhawks'
};

//  Syntax: whie (condition){ code to execute while the condition is true }

let startingNumber = 0

while (startingNumber < 500) {
    console.log(startingNumber);
    startingNumber += Math.floor(Math.random() *100)
};
console.log('After:', startingNumber)

//  Do While

let x;

console.log()