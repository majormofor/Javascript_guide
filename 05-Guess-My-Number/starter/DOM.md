🌐 The DOM and Events — The Real Power of JavaScript
🧠 1. What Is the DOM?

DOM = Document Object Model

It’s basically how JavaScript sees your HTML page.

When your web page loads, the browser turns the HTML into a tree-like structure (called the DOM).
Every HTML element (like <h1>, <p>, <button>) becomes a node or an object that JavaScript can access and change.

🧩 Example HTML:

<!DOCTYPE html>
<html>
  <body>
    <h1 id="title">Hello World</h1>
    <button id="btn">Click Me</button>

    <script src="script.js"></script>

  </body>
</html>

When this loads, JavaScript sees a DOM tree like this:

document
└── html
├── body
│ ├── h1#title
│ └── button#btn

🧰 2. Accessing the DOM with JavaScript

To change or read things on the page, we need to select elements.

There are several ways — here are the main ones:

| Method | Description | Example |

| `document.getElementById()` | Selects one element by its ID |`document.getElementById("title"` |

| `document.querySelector()` | Selects the _first_ element that matches a CSSselector |`document                                  querySelector("#title")` or `document.querySelector(".className")` |

| `document.querySelectorAll()` | Selects _all_ elements that match (returns a NodeList) | `document.querySelectorAll("p")` |

| `getElementsByClassName()` | Returns all elements with a given class (old method) | `document.getElementsByClassName("name")` |

| `getElementsByTagName()` | Returns all elements with a given tag | `document.getElementsByTagName("p")` |



✅ Recommended modern way → always use querySelector and querySelectorAll.

🧩 Example:
let heading = document.querySelector("#title");
console.log(heading.textContent); // "Hello World"

🪄 3. Changing Content and Styles

Once you select an element, you can change its content, text, or CSS.

🧩 Changing Text or HTML
let heading = document.querySelector("#title");

// Change text only
heading.textContent = "Welcome!";

// Change HTML (can add tags)
heading.innerHTML = "<em>Welcome!</em>";

Property	Description
.textContent	Changes only text
.innerHTML	Inserts HTML (more powerful, but riskier if used with user data)
🧩 Changing Style
heading.style.color = "red";
heading.style.fontSize = "30px";


You can also add/remove CSS classes:

heading.classList.add("highlight");
heading.classList.remove("hidden");
heading.classList.toggle("dark-mode");


🧠 The classList API is cleaner than editing styles directly — because it keeps design in CSS, not JS.

💡 4. Creating, Appending, and Removing Elements

You can build new HTML elements from JavaScript!

🧩 Example:
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was created with JS!";
document.body.appendChild(newPara);

🧩 Removing an element:
let button = document.querySelector("#btn");
button.remove();

⚡ 5. Events — Making Pages Interactive

Events are actions that happen in the browser:
clicking a button, typing in a box, moving the mouse, etc.

JavaScript can listen for events and run code when they happen.

🧩 Example HTML:
<button id="btn">Click Me</button>

🧩 Example JavaScript:
let btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
  alert("Button was clicked!");
});


✅ addEventListener() is the modern way to handle events.

6. Common Event Types

| Event       | When It Happens                |
| ----------- | ------------------------------ |
| `click`     | User clicks on an element      |
| `dblclick`  | Double-click                   |
| `mouseover` | Mouse hovers over an element   |
| `mouseout`  | Mouse leaves an element        |
| `keydown`   | Key pressed down               |
| `keyup`     | Key released                   |
| `submit`    | Form submitted                 |
| `input`     | When typing into a text box    |
| `change`    | When an input value changes    |
| `scroll`    | When user scrolls the page     |
| `load`      | When the page finishes loading |




🧩 Example — Change Color on Click
let btn = document.querySelector("#btn");
let title = document.querySelector("#title");

btn.addEventListener("click", () => {
  title.style.color = "blue";
});


Every time you click, the title color changes.

🧩 Example — Responding to User Input
<input id="nameInput" placeholder="Enter your name">
<p id="greeting"></p>

let input = document.querySelector("#nameInput");
let greeting = document.querySelector("#greeting");

input.addEventListener("input", () => {
  greeting.textContent = "Hello, " + input.value;
});


✅ As you type, the paragraph updates live.

🧠 7. The event Object

Every time an event happens, JS creates an event object — it contains details about what happened.

Example:

btn.addEventListener("click", function(event) {
  console.log(event.type); // "click"
  console.log(event.target); // <button id="btn">
});

🚫 8. Preventing Default Behavior

Some elements have default actions (like forms refreshing the page when submitted).
You can stop that using event.preventDefault().

🧩 Example:
<form id="myForm">
  <input type="text" placeholder="Your name">
  <button type="submit">Send</button>
</form>

let form = document.querySelector("#myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stops page reload
  alert("Form submitted!");
});

🧩 9. Event Bubbling (Advanced but Important)

When you click an element inside another element, the event "bubbles" up through its parents.

Example:

<div id="parent">
  <button id="child">Click Me</button>
</div>

document.querySelector("#parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.querySelector("#child").addEventListener("click", () => {
  console.log("Child clicked");
});


✅ Output if you click the button:

Child clicked
Parent clicked


Because the event bubbles up.

If you don’t want that:

event.stopPropagation();

🧾 10. DOM + Events Summary


| Concept           | Description                         | Example                             |
| ----------------- | ----------------------------------- | ----------------------------------- |
| Select elements   | `querySelector`, `querySelectorAll` | `document.querySelector("#btn")`    |
| Change content    | `.textContent`, `.innerHTML`        | `title.textContent = "Hi"`          |
| Change style      | `.style` or `.classList`            | `title.style.color = "red"`         |
| Create elements   | `document.createElement()`          | `document.body.appendChild(el)`     |
| Listen for events | `.addEventListener()`               | `btn.addEventListener("click", fn)` |
| Access event info | `event.target`, `event.type`        | `console.log(event.target)`         |
| Stop default      | `event.preventDefault()`            | Inside form submit event            |
| Stop bubbling     | `event.stopPropagation()`           | Inside nested element events        |
