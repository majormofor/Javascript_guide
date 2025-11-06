// JavaScript Iteration (Loops)
/*
What Is Iteration?

Iteration means repeating a block of code multiple times until a certain condition is met.

Loops help us:

Avoid writing repetitive code

Work with arrays or collections of data

Run tasks automatically (e.g., counting, searching, or updating values)

1️⃣ The for Loop
🔹 Basic Syntax:
for (initialization; condition; increment) {
  // code to be executed each time
}

🧩 Example:
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}


✅ Output:

Count: 1
Count: 2
Count: 3
Count: 4
Count: 5

🧠 How It Works:
Part	Description
let i = 1	Starts counter (initialization)
i <= 5	Checks condition before each loop
i++	Increments counter after each loop
console.log(...)	Code block runs if condition is true
2️⃣ Looping Through Arrays

Arrays are lists of values — loops help process each element.

Example 1: Using a for Loop
let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


✅ Output:

apple
banana
cherry

Example 2: Using for...of (Simpler ES6 Syntax)
for (let fruit of fruits) {
  console.log(fruit);
}


✅ Output:

apple
banana
cherry


🧠 for...of automatically goes through each element in an array — no need for index numbers.

3️⃣ Breaking and Continuing

Sometimes, you need to control how the loop runs:

break → stops the loop entirely

continue → skips the current iteration and moves to the next one

🧩 Example 1: Using break
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Stopped at", i);
    break; // exits the loop
  }
  console.log("i =", i);
}


✅ Output:

i = 1
i = 2
i = 3
i = 4
Stopped at 5

🧩 Example 2: Using continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // skips 3
  }
  console.log(i);
}


✅ Output:

1
2
4
5


🧠 continue skips the code inside the loop only for that iteration.

4️⃣ Looping Backward

You can also loop in reverse by starting from the end.

🧩 Example:
let nums = [10, 20, 30, 40, 50];

for (let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i]);
}


✅ Output:

50
40
30
20
10


🧠 Start from nums.length - 1 (last index) and decrement (i--) each time.

5️⃣ Nested Loops (Loops Inside Loops)

You can place one loop inside another to handle complex data — like 2D arrays (arrays of arrays).

🧩 Example:
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}


✅ Output:

1
2
3
4
5
6
7
8
9


🧠 The outer loop runs for each row,
and the inner loop runs through each value in that row.

6️⃣ The while Loop

The while loop repeats a block of code as long as a condition is true.

🔹 Syntax:
while (condition) {
  // code to execute
}

🧩 Example:
let count = 1;

while (count <= 5) {
  console.log("Count is:", count);
  count++;
}


✅ Output:

Count is: 1
Count is: 2
Count is: 3
Count is: 4
Count is: 5


🧠 The condition is checked before every iteration.
If it’s false initially, the loop won’t run at all.

⚠️ Infinite Loop Example (Be Careful!)

If you forget to update the variable inside a while loop, it never stops.

let num = 1;

while (num <= 3) {
  console.log(num);
  // ❌ missing num++ — infinite loop
}

7️⃣ The do...while Loop

This loop runs at least once, even if the condition is false — because the condition is checked after the loop body.

🧩 Example:
let i = 1;

do {
  console.log("Number:", i);
  i++;
} while (i <= 3);


✅ Output:

Number: 1
Number: 2
Number: 3

🧩 Example: Condition False Initially
let x = 10;

do {
  console.log("Runs at least once!");
} while (x < 5);


✅ Output:

Runs at least once!


🧠 Even though x < 5 is false, the code runs once before checking.

Example: Putting It All Together
let students = ["Alice", "Bob", "Charlie"];

for (let i = 0; i < students.length; i++) {
  if (students[i] === "Bob") {
    continue; // Skip Bob
  }
  console.log(students[i]);
}

let num = 3;

while (num > 0) {
  console.log("Countdown:", num);
  num--;
}

do {
  console.log("Loop runs at least once!");
} while (false);


✅ Output:

Alice
Charlie
Countdown: 3
Countdown: 2
Countdown: 1
Loop runs at least once! 
*/

let x = 10;
console.log(``);
 function  (){}