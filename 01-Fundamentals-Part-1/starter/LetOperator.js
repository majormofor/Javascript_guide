var c = 50 // this is the old way of declaring varable

//Let
/*
let is perfect for variables that need to change value within their scope, without leaking outside.

let age = 30
age = 31

let y = 10;
if (true) {
  let y = 20;  // new variable (block scope)
  console.log(y); // 20
}
console.log(y);   // 10
*/

// CONST
/*

const protects the binding, not necessarily the value. 
You can modify the contents of arrays/objects, but not reassign the variable itself.

const z = 30;
z = 40; // ❌ TypeError: Assignment to constant variable

const user = { name: 'Alice' };
user.name = 'Bob'; // ✅ allowed (object properties can change)
console.log(user.name); // "Bob"



const birthYear = 1991; // you can not change the variable

*/

// Operators
/*
1. Arithmetic Operators

Used for mathematical calculations.

Operator	Description 	    Example	    Result
+	        Addition	            5 + 2	7
-	        Subtraction             5 - 2	3
*	        Multiplication	        5 * 2	10
/	        Division	            5 / 2	2.5
%	        Modulus (remainder)	    5 % 2	1
**	        Exponentiation	        2 ** 3	8
++	        Increment	            let a=1; a++	2
--	        Decrement	            let a=1; a--	0

Note:
++a increases before using the value;
a++ increases after using the value.

🧩 2. Assignment Operators

Used to assign values to variables.

Operator	Example	            Equivalent To
=	        x = 5	            —
+=	        x += 2	            x = x + 2
-=	        x -= 2	            x = x - 2
*=	        x *= 2	            x = x * 2
/=	        x /= 2	            x = x / 2
%=	        x %= 2	            x = x % 2

🧠 3. Comparison Operators

Used to compare values (often in if statements).

Operator	            Description	                Example         	Result
==	                    Equal to (value only)	    5 == '5'	        true
===	                    Equal to (value + type)	    5 === '5'	        false
!=	                    Not equal (value only)	    5 != '5'	        false
!==	                    Not equal (value + type)	5 !== '5'	        true
>	                    Greater than	            6 > 3	            true
<	                    Less than	                2 < 5	            true
>=	                    Greater than or equal       3 >= 3	            true
<=	                    Less than or equal	        2 <= 1	            false


🧩 4. Logical Operators

Used for combining or inverting conditions.

Operator	            Description	        Example	             Result
&&	                    Logical AND	        true && false	     false
`		                `	Logical OR
!	                Logical NOT	            !true	             false

💡 Example:

let age = 20;
if (age > 18 && age < 30) {
  console.log('Young adult');
}

🧮 5. String Operators
Operator	            Description	            Example	                        Result
+	                    Concatenation	        'Hello' + ' World'	            'Hello World'
+=	                    Append and assign	     let msg='Hi'; msg += ' there';	'Hi there'

💡 Template literals (using backticks) are often better:

let name = 'Alice';
console.log(`Hello, ${name}!`); // "Hello, Alice!"

🧱 6. Ternary Operator (Conditional)

Shorthand for if...else:

let age = 18;
let result = (age >= 18) ? 'Adult' : 'Minor';
console.log(result); // "Adult"

🧰 7. Type Operators
Operator	        Description	                Example	            Result
typeof	            Returns the type	        typeof 'Hi'	        "string"
instanceof	            Checks object type  arr instanceof Array	 



*/

// JAVASCRIPT OPERATOR PRECEDENCE 
/*
| **Precedence** | **Operator Type**                               | **Operators / Examples**                                         | **Associativity** |              |              |
| -------------- | ----------------------------------------------- | ---------------------------------------------------------------- | ----------------- | ------------ | ------------ |
| 20        | Parentheses                                 | `(a + b)`                                                        | —                 |              |              |
| 19        | Member access, function call**                | `obj.prop`, `func()`                                             | Left → Right      |              |              |
| 18        | New (with arguments)**                        | `new MyClass()`                                                  | —                 |              |              |
| 17        | Postfix increment/decrement**                 | `a++`, `a--`                                                     | Left → Right      |              |              |
| 16        | Prefix increment/decrement, unary operators** | `++a`, `--a`, `+a`, `-a`, `!a`, `~a`, `typeof`, `delete`, `void` | Right → Left      |              |              |
| 15        | Exponentiation**                              | `a ** b`                                                         | Right → Left      |              |              |
| 14        | Multiplication, Division, Modulus**           | `*`, `/`, `%`                                                    | Left → Right      |              |              |
| 13        | Addition, Subtraction**                       | `+`, `-`                                                         | Left → Right      |              |              |
| 12        | Bitwise Shift**                               | `<<`, `>>`, `>>>`                                                | Left → Right      |              |              |
| 11        | Relational / Comparison**                     | `<`, `<=`, `>`, `>=`, `in`, `instanceof`                         | Left → Right      |              |              |
| 10        | Equality**                                    | `==`, `!=`, `===`, `!==`                                         | Left → Right      |              |              |
| 9*        | Bitwise AND**                                 | `&`                                                              | Left → Right      |              |              |
| 8*        | Bitwise XOR**                                 | `^`                                                              | Left → Right      |              |              |
| 7*        | Bitwise OR**                                  | `                                                                | `                 | Left → Right |              |
| 6*        | Logical AND**                                 | `&&`                                                             | Left → Right      |              |              |
| 5*        | Logical OR**                                  | `                                                                |                   | `            | Left → Right |
| 4*        | Nullish Coalescing**                          | `??`                                                             | Left → Right      |              |              |
| 3*        | Conditional (Ternary)**                       | `condition ? expr1 : expr2`                                      | Right → Left      |              |              |
| 2*        | Assignment**                                  | `=`, `+=`, `-=`, `*=`, `/=`, `%=`                                | Right → Left      |              |              |
| 1*        | Comma**                                       | `a = 1, b = 2`                                                   | Left → Right      |              |              |


for example
let result = 3 + 5 * 2 > 10 && true;
5 * 2 → 10

3 + 10 → 13

13 > 10 → true

true && true → true

final reuslt = true;


*/

// Code Challange

let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

let BMIJohn = massJohn/ (heightJohn * heightJohn);
let BMIMark = massMark/ (heightMark * heightMark);

console.log(BMIMark)
console.log(BMIJohn)

let markHigherBMI 
if (BMIMark > BMIJohn){
    markHigherBMI = true
}