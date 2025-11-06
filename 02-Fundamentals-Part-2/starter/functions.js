'use strict';
// use strict mode
/*
Strict mode is a way to opt in to a restricted version of JavaScript that:

Catches common coding mistakes

Prevents unsafe actions

Makes your code run faster (in some cases, because engines can optimize it better)

You activate it by writing:

"use strict";


at the top of your script or at the top of a function.



*/
// FUNCTION
/*What Is a Function?

A function is a block of code designed to perform a specific task.
It runs only when called (invoked).

Basic Syntax:
function functionName(parameters) {
  // code to be executed
}
  
To call (execute) the function:

functionName(arguments);

// Function with Parameters


function greetUser(name) {
  console.log(`Hello, ${name}!`);
}

greetUser("Alice"); // Hello, Alice!
greetUser("Bob");   // Hello, Bob!


💡 Parameters are placeholders in the function definition.
Arguments are actual values you pass when calling the function.




Function with Return Value
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log(sum); // 8


🧠 The return statement sends a value back to the caller.


Default Parameters (ES6)

You can give parameters default values:

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet();         // Hello, Guest!
greet("Alice");  // Hello, Alice!



Function Expressions

You can store a function in a variable — this is called a function expression.

const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // 20

*/

function logger(){

console.log("mY NAME IS UZO");

}

//calling / running / invokinh the function

logger();

function fruitCutter( apples, oranges){
    console.log(apples, oranges);
    const juice = `WE are good with ${apples} apples and ${oranges} oranges`
    return juice
    
}

const  applejuice = fruitCutter(4, 6)





/// ARROW FUNCTION
const calage = birthyear => 2026 - birthyear;
console.log(calage(1994))


const YearsUntilRetirement =  birthyear => {
    const age = 2037 - birthyear
    const retirementAge =  60 - age 
    return retirementAge
}
YearsUntilRetirement(1991)
console.log(YearsUntilRetirement(1990));


/* 


Arrow Functions (ES6)

Arrow functions are a shorter way to write functions.

const add = (a, b) => a + b;
console.log(add(2, 3)); // 5


✅ If there’s only one parameter, you can skip parentheses:

const square = x => x * x;
console.log(square(4)); // 16


✅ If the function body has multiple lines, use {} and return:

const greet = (name) => {
  console.log("Hello");
  return `${name}, welcome!`;
};

console.log(greet("Alice"));



*/

// Functions Calling Other Functions
/*
function add(a, b) {
  return a + b;
}

function doubleSum(x, y) {
  return add(x, y) * 2;
}

console.log(doubleSum(3, 4)); // 14






// NOTE

Function Hoisting

Function declarations are hoisted — you can call them before they are defined.

sayHi(); // Works fine!

function sayHi() {
  console.log("Hi!");
}


❌ But function expressions and arrow functions are not hoisted:

sayHi(); // ❌ Error

const sayHi = function() {
  console.log("Hi!");
};


////////////Code Challange ///////////
/* Write your code below. Good luck! 🙂 */

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3)/3
}

const scoreDolphins = calcAverage(64,23, 87);
const scoreKoalas = calcAverage(55,66,77);

console.log(scoreDolphins)
console.log(scoreKoalas)


function checkWinner(avgDolphins, avgKoalas){
    if ((avgDolphins/2) > avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)

    } else if ((avgKoalas/2 > avgDolphins)){
        
        console.log(` Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    
    } else {
    console.log(`No team wins...`)
}
}

let winner =  checkWinner(scoreDolphins, scoreKoalas)
console.log(winner)