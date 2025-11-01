let js = "Amazing"

// js is variable , Amazing is the value

console.log("Jonas") 

// so we have Object and primitive values

/* primitive 
 let firstname =Uzo
 let age = 20
*/

/* Object Value
let me ={
    name:'Jonas'

}

*/

let country = "Nigeria";
let continent = "Africa"
let population = 10

console.log(country);
console.log(continent);
console.log(population);



// DATA TYPES
/*
Primitive Data Types

Primitive types are immutable and stored by value.

Data Type	            Description	                                Example
String  	            Text data, enclosed in quotes (', ", or `)	'Hello', "World", `Hi ${name}`
Number	                Numeric values (integers or floating-point) 	42, 3.14, -10
BigInt(ES2020)	           Large integers beyond Number.MAX_SAFE_INTEGER	123456789012345678901234567890n
Boolean	                Logical values	            true , false
Undefined	            A variable declared but not assigned a value	let x; console.log(x) → undefined
Null	                Represents an intentional absence of value	    let y = null;
Symbol	            Unique and immutable value, often used as object keys


Non-Primitive (Reference) Data Types

These are objects and stored by reference, meaning multiple variables can refer to the same value.

Data Type	Description                                 Example
Object	    A collection of key–value pairs	            { name: 'Alice', age: 25 }
Array	    Ordered list of values	                    [1, 2, 3, 4]
Function	A block of code designed to perform a task	function greet() { console.log('Hi'); }
Date, RegExp, Map, Set, etc.	Built-in object types	new Date(), new Map(), new Set()

*/

// Type Conversion

/*
JavaScript is a dynamically typed language, meaning variables can hold values of any type — and 
types can change automatically (implicit) or manually (explicit).
mplicit Type Conversion (Type Coercion)

JavaScript automatically converts types when needed — for example, in mathematical or logical operations.

Examples
'5' + 2      // "52" → number 2 is converted to a string
'5' - 2      // 3   → string '5' is converted to a number
true + 1     // 2   → true becomes 1
false + 10   // 10  → false becomes 0
'5' * '2'    // 10  → both strings converted to numbers
'hello' * 2  // NaN → "hello" cannot be converted to number

Boolean Conversion Rules

false, 0, '', null, undefined, and NaN → false

Everything else → true

Boolean(0);        // false
Boolean('hello');  // true
Boolean([]);       // true
Boolean(null);     // false

2. Explicit Type Conversion (Type Casting)

You can manually convert data types using built-in functions or constructors.

To Number
Number('42');     // 42
Number(true);     // 1
Number(false);    // 0
Number('');       // 0
Number('abc');    // NaN
parseInt('42px'); // 42
parseFloat('3.14')// 3.14

🔤 To String
String(123);       // "123"
String(true);      // "true"
String(null);      // "null"
(42).toString();   // "42"

✅ To Boolean
Boolean(1);       // true
Boolean(0);       // false
Boolean('hi');    // true
Boolean('');      // false

 3. Special Case: == vs ===

== → compares values only, with type coercion

=== → compares values and types (no coercion)

'5' == 5   // true  → values are equal after coercion
'5' === 5  // false → different types
0 == false // true
0 === false// false

*/