// 1. if statement 

/*
if(condition){
    code runs if condition is true
    
}




*

let age = 18;
if (age > 17){
    age++
    console.log(`Since you are ${age}, you are an adult`);
    
}else{
console.log(`Still a Minor plesase`);
}


// 2.  if...else if...else Chain

if (condition1) {
  // runs if condition1 is true
} else if (condition2) {
  // runs if condition2 is true
} else {
  // runs if none are true
}


let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// 3. Nested if Statements

You can place an if inside another if.

let age = 20;
let hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("You may enter.");
  } else {
    console.log("Please show ID.");
  }
} else {
  console.log("You are too young.");
}

remember to use strict equality === not the ==

// 4. Ternary Operator (Short Form of if/else)

When you just need a quick one-line decision:

let age = 18;
let message = (age >= 18) ? "Adult" : "Minor";
console.log(message); // "Adult"


// 5. Logical operator

AND - &&
OR  -  || 
Not - !

AND

let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("You may enter.");
}

let isLoggedIn = true;
isLoggedIn && console.log("Welcome back!");




- Using || (Logical OR)

|| means “or” — the condition is true if at least one side is true.
let hasTicket = false;
let isVIP = true;

if (hasTicket || isVIP) {
  console.log("You can enter the event.");
}

|| can also be used to set default values:
let username = "";
let displayName = username || "Guest";
console.log(displayName); // "Guest"

If username is falsy ('', null, undefined), it defaults to "Guest".



- Using ! (Logical NOT)

Flips the truth value.

let isRaining = false;

if (!isRaining) {
  console.log("Go outside!");
}




-  Combining Logical Operators

You can combine && and || for more complex conditions.

Example:
let age = 25;
let hasLicense = true;
let isDrunk = false;

if (age >= 18 && hasLicense && !isDrunk) {
  console.log("You can drive.");
} else {
  console.log("You cannot drive.");
}


✅ Runs "You can drive." because all && conditions are true.





- Short-Circuit Evaluation (Advanced Tip)

&& stops when it finds a false value

|| stops when it finds a true value

Example:

console.log(false && "Won't run"); // false
console.log(true || "Won't run");  // true


This behavior helps make default or fallback logic concise:

let name = null;
let finalName = name || "Anonymous";
console.log(finalName); // "Anonymous"

SUMMARY
What Is the Ternary Operator?

The ternary operator is a short way to write an if...else statement.

condition ? expressionIfTrue : expressionIfFalse;


✅ It’s called “ternary” because it takes three parts:

The condition

The result if it’s true

The result if it’s false

eg
let age = 18;
let message = (age >= 18) ? "Adult" : "Minor";
console.log(message); // "Adult"

let age = 25;
let hasID = true;

let canEnter = (age >= 18 && hasID) ? "Access Granted" : "Access Denied";
console.log(canEnter); // "Access Granted"


let isOnline = false;
let status = (!isOnline) ? "Offline" : "Online";
console.log(status); // "Offline"



- Nested Ternaries (Chaining)

You can chain ternaries, but use carefully — it gets hard to read.

let score = 85;
let grade = (score >= 90) ? "A"
          : (score >= 80) ? "B"
          : (score >= 70) ? "C"
          : "F";

console.log(grade); // "B"

///////////////////////////Best Practice Tips ////////////////////////////////////

✅ Use ternary for simple, quick decisions

🚫 Avoid deeply nested ternaries (use if...else instead)

🧩 Combine with && / || for clean, one-line checks












SWITCH STATEMENT 

What Is a switch Statement?

A switch statement is used to compare one value against many possible cases.
It’s like a cleaner version of multiple if...else if statements.

🧩 Basic Syntax
switch (expression) {
  case value1:
    // code if expression === value1
    break;

  case value2:
    // code if expression === value2
    break;

  default:
    // code if no case matches
}

Explanation

JavaScript evaluates the expression inside switch().

It compares the result to each case value (using strict equality ===).

When a match is found → the code in that case runs.

The break keyword stops execution; otherwise, the code falls through to the next case.

The default case runs when no match is found.


Example 1: Simple Switch
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
}

console.log(dayName); // "Wednesday"


Example 2: Without break → Fall Through

If you forget break, execution continues into the next case.

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apples are red.");
  case "banana":
    console.log("Bananas are yellow.");
  default:
    console.log("Unknown fruit.");
}

pples are red.
Bananas are yellow.
Unknown fruit.
🧠 This happens because no break stops the flow.


Grouping Multiple Cases

You can stack cases that share the same logic:

let color = "blue";

switch (color) {
  case "red":
  case "pink":
    console.log("Warm color");
    break;
  case "blue":
  case "green":
    console.log("Cool color");
    break;
  default:
    console.log("Unknown color");
}

switch with Expressions

The switch expression can also be non-number or non-string — it can be anything that evaluates to a value.

let grade = "B";

switch (true) {
  case grade === "A":
    console.log("Excellent");
    break;
  case grade === "B":
    console.log("Good job");
    break;
  case grade === "C":
    console.log("You passed");
    break;
  default:
    console.log("Try again");
}

// Ask user for input
let userInput = prompt("Enter a day number (1-7):"); 
let dayNumber = Number(userInput);

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
  case 7:
    console.log("Weekend!");
    break;
  default:
    console.log("Invalid day number");
}


challenge 

let dolphin1 = 96
let dolphin2 = 108
let dolphin3 = 89

let koalas1 = 88 
let koalas2 = 91 
let koalas3 = 110 

let scoreDolphins = (dolphin1 + dolphin2 + dolphin3)/3
let scoreKoalas = (koalas1 + koalas2 + koalas3)/3

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy")
    
} else if(scoreKoalas > scoreDolphins) {
    
    console.log("Koalas win the trophy")
} else {
        console.log("Both win the trophy")

}


*/

const bill = 275

let tip = (bill >= 50 && bill <= 300  )? bill * 0.15
        : bill * 0.20;


console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`)