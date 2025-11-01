//String Creation
/*
// Strings can be created using single quotes, double quotes, or backticks:

let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello World`;


// String Properties and Methods

//  Length
let text = "JavaScript";
console.log(text.length); // 10


// Accessing Characters

let word = "Hi";
console.log(word[0]); // H
console.log(word.charAt(1)); // i


// Common string method 
| Method                   | Description                       | Example                          | Output          |
| ------------------------ | --------------------------------- | -------------------------------- | --------------- |
| `toUpperCase()`          | Converts to uppercase             | `'hi'.toUpperCase()`             | `"HI"`          |
| `toLowerCase()`          | Converts to lowercase             | `'HI'.toLowerCase()`             | `"hi"`          |
| `trim()`                 | Removes whitespace                | `' hi '.trim()`                  | `"hi"`          |
| `slice(start, end)`      | Extracts part of a string         | `'Hello'.slice(0, 3)`            | `"Hel"`         |
| `substring(start, end)`  | Similar to `slice` (no negatives) | `'Hello'.substring(1, 4)`        | `"ell"`         |
| `replace(find, replace)` | Replaces text                     | `'Hi Bob'.replace('Bob', 'Tom')` | `"Hi Tom"`      |
| `includes(substring)`    | Checks for substring              | `'JavaScript'.includes('Java')`  | `true`          |
| `indexOf(substring)`     | Finds position                    | `'Hello'.indexOf('e')`           | `1`             |
| `split(separator)`       | Splits into an array              | `'a,b,c'.split(',')`             | `['a','b','c']` |
| `concat()`               | Joins strings                     | `'Hi'.concat(' there')`          | `"Hi there"`    |


Template Literals (ES6+)

Introduced in ES6, template literals use backticks (`) and provide:

- String interpolation (embed variables/expressions)

- Multiline strings

- Expression evaluation

let name = 'Alice';
let age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);
// Output: "My name is Alice and I am 25 years old."

let a = 10, b = 5;
console.log(`Sum: ${a + b}`); // "Sum: 15"


Multiline Strings

With template literals, you can write multi-line strings easily:

let poem = `
Roses are red,
Violets are blue,
JavaScript is fun,
And so are you!
`;

console.log(poem);


✅ Output keeps the line breaks exactly as written.

⚙️ 3. Tagged Templates (Advanced)

You can also use a function before a template literal — called a tagged template.

function greet(strings, name) {
  return `${strings[0]}${name.toUpperCase()}!`;
}

let result = greet`Hello ${'alice'}`;
console.log(result); // "Hello ALICE!"

greet`Hello ${'alice'}`
actually becomes something like:

js
Copy code
greet(["Hello "], "alice");

"Call the function greet, but pass it both the static strings and the dynamic values separately."

So internally, JS builds:

an array of the literal text parts → ["Hello "]

a list of the values from ${...} → ["alice"]
*/

