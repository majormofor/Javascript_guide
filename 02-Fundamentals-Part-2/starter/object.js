// JavaScript Objects

/*
🧠 What Is an Object?

An object is a collection of key–value pairs (also called properties).
Each property has a name (key) and a value — and the value can be anything: a string, number, array, function, or even another object.

Basic Syntax:
let objectName = {
  key1: value1,
  key2: value2,
  key3: value3
};

🧩 Example 1: Simple Object
let person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

console.log(person);


✅ Output:

{ name: 'Alice', age: 25, city: 'New York' }

🎯 Accessing Object Properties

You can access properties in two ways:

1️⃣ Dot Notation:
console.log(person.name); // Alice
console.log(person.age);  // 25

2️⃣ Bracket Notation:
console.log(person["city"]); // New York


💡 Bracket notation is useful when:

The key is stored in a variable

The key has spaces or special characters

let key = "name";
console.log(person[key]); // Alice

✏️ Modifying Object Properties
person.age = 26;               // Update value
person.country = "USA";        // Add new property
delete person.city;            // Remove property

console.log(person);


✅ Output:

{ name: 'Alice', age: 26, country: 'USA' }

🧮 Object Methods (Functions Inside Objects)

Objects can also have methods — functions stored as properties.

let user = {
  name: "John",
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

user.greet(); // Hello, John!


💡 this refers to the current object.

🧩 Example: Shorthand Syntax (ES6)

In modern JS, you can use shorter syntax:

let name = "Emma";
let age = 22;

let person = {
  name,
  age,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

person.greet(); // Hi, I'm Emma

//  Built-in Object Methods

| Method                          | Description                       | Example                        |
| ------------------------------- | --------------------------------- | ------------------------------ |
| `Object.keys(obj)`              | Returns an array of keys          | `Object.keys(person)`          |
| `Object.values(obj)`            | Returns an array of values        | `Object.values(person)`        |
| `Object.entries(obj)`           | Returns key-value pairs as arrays | `Object.entries(person)`       |
| `Object.assign(target, source)` | Copies properties                 | `Object.assign({}, person)`    |
| `hasOwnProperty()`              | Checks if key exists              | `person.hasOwnProperty('age')` |


Example:
let person = { name: "Alice", age: 25 };

console.log(Object.keys(person));   // ["name", "age"]
console.log(Object.values(person)); // ["Alice", 25]
console.log(Object.entries(person)); // [["name", "Alice"], ["age", 25]]

🧩 Nested Objects

Objects can contain other objects (and arrays too).

let student = {
  name: "Liam",
  marks: {
    math: 90,
    science: 85
  }
};

console.log(student.marks.math); // 90

🧩 Objects in Arrays (Common Pattern)

You’ll often have arrays of objects — especially in real-world apps.

let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 }
];

console.log(users[1].name); // Bob


Looping example:

for (let user of users) {
  console.log(`${user.name} is ${user.age} years old`);
}


Accessing Object Properties — Dot vs. Bracket Notation
🧠 1. Dot Notation

You access properties using a dot (.) directly followed by the key name.

✅ Example:
let person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

console.log(person.name); // "Alice"
console.log(person.age);  // 25
console.log(person.city); // "New York"


🧠 Dot notation is simple and clean, but it only works when:

The property name is a valid JavaScript identifier (letters, numbers, $, _)

The property name doesn’t have spaces or special characters

You know the key name at coding time (not stored in a variable)

🧩 2. Bracket Notation

You access properties using square brackets ([]), and put the property name inside quotes — like a string.

✅ Example:
let person = {
  name: "Alice",
  age: 25,
  "home town": "New York"
};

console.log(person["name"]);       // "Alice"
console.log(person["home town"]);  // "New York"


🧠 Bracket notation is useful when:

The property name has spaces or special characters

You want to access a property dynamically (from a variable)

🧩 3. Using Variables as Keys (Dynamic Access)

With bracket notation, you can use a variable to choose which property to access.

let person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

let key = "city";
console.log(person[key]); // "New York"


❌ Dot notation wouldn’t work here:

console.log(person.key); // undefined

🧮 4. Adding Properties
Using Dot Notation:
person.country = "USA";
console.log(person.country); // "USA"

Using Bracket Notation:
person["email"] = "alice@example.com";
console.log(person["email"]); // "alice@example.com"

⚡ 5. Example: When Property Name Has Special Characters or Starts with a Number
✅ Works with Bracket Notation:
let car = {
  "model name": "Corolla",
  "1stOwner": "John Doe"
};

console.log(car["model name"]); // "Corolla"
console.log(car["1stOwner"]);   // "John Doe"


❌ Does not work with Dot Notation:

console.log(car.model name); // ❌ Error
console.log(car.1stOwner);   // ❌ Error



Nested Objects

You can chain dot or bracket notation to access deep properties.

let student = {
  name: "Liam",
  marks: {
    math: 90,
    science: 85
  }
};

// Dot notation
console.log(student.marks.math); // 90

// Bracket notation
console.log(student["marks"]["science"]); // 85


You can also mix them:

console.log(student["marks"].math); // 90


Computed Property Names (Dynamic Keys)

Sometimes you want to create properties dynamically when building an object:

let keyName = "favoriteColor";

let user = {
  name: "Emma",
  [keyName]: "blue"  // computed property name
};

console.log(user.favoriteColor); // "blue"
console.log(user[keyName]);      // "blue"


💡 The square brackets [] around keyName tell JS to use the value of the variable as the key name.

🧩 8. Looping Example — Access All Keys Dynamically
let person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}


✅ Output:

name: Alice
age: 25
city: New York


🧠 Inside a loop, you must use bracket notation — person[key] — because key is a variable.

const Jonas = {
    firstName : "Jonas",
    LastName : "Umej",
    age : 2037-2024,
    job : teacher,
    friends: ["Mitchell", "Peter"]
}

console.log(Jonas.LastName)
console.log(Jonas.friends)
console.log(Jonas['firstName'])


// Bracket and Dot notation

const namekey = 'Name';
  console.log(Jonas['first' + namekey]);


