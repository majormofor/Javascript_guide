// ARRAYS
/*
What Is an Array?

An array is a special type of object that can store multiple values in a single variable.
Each value in the array is called an element, and each element has an index (position number).

Basic Syntax:
let arrayName = [item1, item2, item3, ...];

✅ Example: Creating an Array
let fruits = ["apple", "banana", "orange"];
console.log(fruits);

const years = new Array(1991, 1992, 1993, 1994);


✅ Output:

["apple", "banana", "orange"]

// Accessing Array Elements

let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // apple
console.log(fruits[2]); // orange

✏️ Changing Array Elements
fruits[1] = "mango";
console.log(fruits); // ["apple", "mango", "orange"]

📏 Array Length
console.log(fruits.length); // 3


// Adding and Removing Elements

| Method      | Description       | Example                  |
| ----------- | ----------------- | ------------------------ |
| `push()`    | Add to end        | `fruits.push("grape")`   |
| `pop()`     | Remove from end   | `fruits.pop()`           |
| `unshift()` | Add to start      | `fruits.unshift("kiwi")` |
| `shift()`   | Remove from start | `fruits.shift()`         |


let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"]

fruits.pop();
console.log(fruits); // ["apple", "banana"]




// Arrays METHOD 
| Method       | Description                     | Example                        | Result                          |
| ------------ | ------------------------------- | ------------------------------ | ------------------------------- |
| `indexOf()`  | Finds position of element       | `fruits.indexOf("apple")`      | `0`                             |
| `includes()` | Checks if value exists          | `fruits.includes("banana")`    | `true`                          |
| `concat()`   | Combines arrays                 | `arr1.concat(arr2)`            | New array                       |
| `join()`     | Converts to string              | `fruits.join(", ")`            | `"apple, banana, orange"`       |
| `reverse()`  | Reverses array                  | `fruits.reverse()`             | `["orange", "banana", "apple"]` |
| `sort()`     | Sorts alphabetically            | `fruits.sort()`                | `["apple", "banana", "orange"]` |
| `slice()`    | Returns a copy of part of array | `fruits.slice(1, 3)`           | New array                       |
| `splice()`   | Add/remove elements             | `fruits.splice(1, 1, "grape")` | Modifies original               |



Using slice() and splice()
let colors = ["red", "green", "blue", "yellow"];

// slice (does not change original)
let newColors = colors.slice(1, 3);
console.log(newColors); // ["green", "blue"]

// splice (changes original)
colors.splice(2, 1, "purple");
console.log(colors); // ["red", "green", "purple", "yellow"]


| Method               | Description            | Example                               |
| -------------------- | ---------------------- | ------------------------------------- |
| `forEach()`          | Loop through array     | `fruits.forEach(f => console.log(f))` |
| `map()`              | Create new array       | `nums.map(n => n * 2)`                |
| `filter()`           | Filter elements        | `nums.filter(n => n > 10)`            |
| `reduce()`           | Reduce to single value | `nums.reduce((a, b) => a + b)`        |
| `find()`             | Finds first match      | `nums.find(n => n > 10)`              |
| `some()` / `every()` | Tests elements         | `nums.some(n => n > 5)`               |


let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

let evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]


Looping Through Arrays
Using for loop
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

Using for...of
for (let fruit of fruits) {
  console.log(fruit);
}

*/

function calcTip(bill){
    if (bill >= 50 && bill <= 300){
        return bill * 0.15
    } else {
        return bill * 0.20
    }
}

let bills = [125, 555, 44]

let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2] )];

console.log(tips)

let totals = [(tips[0] + bills[0]), (tips[1] + bills[1]), (tips[2] + bills[2])]

console.log(totals)