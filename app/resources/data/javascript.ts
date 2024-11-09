export const units = [
    {
        title: "Unit 1: JavaScript Basics",
        youtube: "https://youtu.be/unit1_overview",
        quizlink: "https://quizlink.com/unit1_quiz",
        lessons: [
            { name: "Incorporating JavaScript in HTML", lessonkey: "jsincorporation" },
            { name: "Using Variables and Operators", lessonkey: "variablesoperators" },
            { name: "Control Statements: if...else, switch, break, continue", lessonkey: "controlstatements" },
            { name: "Looping Statements: while, do...while, for", lessonkey: "loopingstatements" },
            { name: "Popup Boxes: Alert, Confirm, and Prompt", lessonkey: "popupboxes" },
            { name: "JavaScript Objects, Properties, and Methods", lessonkey: "jsobjects" }
        ]
    },
    {
        title: "Unit 2: JavaScript Functions, Events, and Validation",
        youtube: "https://youtu.be/unit2_overview",
        quizlink: "https://quizlink.com/unit2_quiz",
        lessons: [
            { name: "Working with Functions", lessonkey: "functions" },
            { name: "JavaScript Events: Form, Keyboard, and Mouse Based", lessonkey: "events" },
            { name: "JavaScript Form Validation", lessonkey: "formvalidation" }
        ]
    },
    {
        title: "Unit 3: JavaScript DOM",
        youtube: "https://youtu.be/unit3_overview",
        quizlink: "https://quizlink.com/unit3_quiz",
        lessons: [
            { name: "Introduction to DOM", lessonkey: "domintro" },
            { name: "DOM Methods", lessonkey: "dommethods" },
            { name: "DOM Document and Elements", lessonkey: "domelements" },
            { name: "DOM HTML and CSS", lessonkey: "domhtmlcss" },
            { name: "DOM Events", lessonkey: "domevents" }
        ]
    },
    {
        title: "Unit 4: Advanced JavaScript (ES6+)",
        youtube: "https://youtu.be/unit4_overview",
        quizlink: "https://quizlink.com/unit4_quiz",
        lessons: [
            { name: "Let, Const, and Block Scope", lessonkey: "letconst" },
            { name: "Arrow Functions", lessonkey: "arrowfunctions" },
            { name: "Template Literals", lessonkey: "templateliterals" },
            { name: "Destructuring Objects and Arrays", lessonkey: "destructuring" },
            { name: "Spread and Rest Operators", lessonkey: "spreadrest" },
            { name: "Modules and Imports/Exports", lessonkey: "modules" }
        ]
    },
    {
        title: "Unit 5: Asynchronous JavaScript",
        youtube: "https://youtu.be/unit5_overview",
        quizlink: "https://quizlink.com/unit5_quiz",
        lessons: [
            { name: "Introduction to Asynchronous Programming", lessonkey: "asyncintro" },
            { name: "Understanding Callbacks", lessonkey: "callbacks" },
            { name: "Promises", lessonkey: "promises" },
            { name: "Async and Await", lessonkey: "asyncawait" },
            { name: "Handling Errors in Asynchronous Code", lessonkey: "errorhandling" },
            { name: "Using Fetch API for HTTP Requests", lessonkey: "fetchapi" }
        ]
    },
    {
        title: "Unit 6: JavaScript Project and Best Practices",
        youtube: "https://youtu.be/unit6_overview",
        quizlink: "https://quizlink.com/unit6_quiz",
        lessons: [
            { name: "JavaScript Debugging and Testing", lessonkey: "debugging" },
            { name: "Best Practices in JavaScript Code", lessonkey: "bestpractices" },
            { name: "JavaScript Project: Build a To-Do List App", lessonkey: "project1" },
            { name: "JavaScript Project: Simple Weather App", lessonkey: "project2" }
        ]
    }
];

export const lessonData = {
    'jsincorporation': {
        title: "Incorporating JavaScript in HTML",
        description: "Learn how to integrate JavaScript into your HTML pages for dynamic content and functionality.",
        sections: [
            {
                title: "Using JavaScript in the HEAD and BODY",
                content: "JavaScript can be added to both the `head` and `body` of an HTML document. Placing scripts in the `head` executes them before the body is rendered, while scripts in the `body` are executed as the page loads.",
                code: `
                <head>
                    <script>
                        console.log("Script in head");
                    </script>
                </head>
                <body>
                    <script>
                        console.log("Script in body");
                    </script>
                </body>
            `
            },
            {
                title: "Using an External JavaScript File",
                content: "For better code organization, JavaScript can be stored in an external file and linked to the HTML document using the `<script src=''>` tag.",
                code: `
                <head>
                    <script src="script.js"></script>
                </head>

                // script.js
                console.log("External JS file");
            `
            },
            {
                title: "Defer and Async",
                content: "Using `defer` and `async` attributes in the `<script>` tag helps control when the script is executed, improving page load performance.",
                points: [
                    "`defer`: Script is executed after the HTML document is fully parsed.",
                    "`async`: Script is executed as soon as it is downloaded, potentially before the document is fully parsed."
                ],
                code: `
                <script src="script.js" defer></script>
                <script src="script.js" async></script>
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Include a JavaScript file in an HTML document and display a message in the console.",
                hint: "Use the `<script>` tag with the `src` attribute."
            },
            {
                question: "Write an inline script that changes the text color of a paragraph using JavaScript in the `body` of an HTML file.",
                hint: "Use `document.getElementById()` to target the paragraph."
            }
        ]
    },
    'variablesoperators': {
        title: "Using Variables and Operators in JavaScript",
        description: "Understand how to declare variables and use operators to manipulate data in JavaScript.",
        sections: [
            {
                title: "Declaring Variables",
                content: "In JavaScript, variables can be declared using `var`, `let`, or `const`. Each serves a different purpose in terms of scope and mutability.",
                points: [
                    "`var`: Function-scoped, can be redeclared and updated.",
                    "`let`: Block-scoped, cannot be redeclared but can be updated.",
                    "`const`: Block-scoped, cannot be updated or redeclared."
                ],
                code: `
                var x = 5;
                let y = 10;
                const z = 15;
            `
            },
            {
                title: "Arithmetic Operators",
                content: "JavaScript supports standard arithmetic operators for mathematical calculations.",
                points: [
                    "`+` (addition)",
                    "`-` (subtraction)",
                    "`*` (multiplication)",
                    "`/` (division)",
                    "`%` (modulus)",
                    "`++` (increment)",
                    "`--` (decrement)"
                ],
                code: `
                let sum = 5 + 3;   // 8
                let product = 4 * 2;  // 8
            `
            },
            {
                title: "Assignment and Comparison Operators",
                content: "Assignment operators are used to assign values to variables, and comparison operators are used to compare values.",
                points: [
                    "`=`: Assigns a value",
                    "`==`: Compares values (loose equality)",
                    "`===`: Compares both value and type (strict equality)",
                    "`!=` and `!==`: Not equal"
                ],
                code: `
                let x = 10;
                let isEqual = (x == 10);  // true
                let isStrictEqual = (x === "10");  // false
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Declare a variable `age` using `let` and assign it a value of 25. Then, reassign it to 30.",
                hint: "Use the `let` keyword and the assignment operator."
            },
            {
                question: "Write an expression that calculates the remainder of 15 divided by 4.",
                hint: "Use the modulus operator `%`."
            },
            {
                question: "Compare two variables `x = 5` and `y = '5'` using both `==` and `===`. Explain the results.",
                hint: "Consider the type coercion in `==` and strict comparison in `===`."
            }
        ]
    },
    'controlstatements': {
        title: "Control Statements: if...else, switch, break, continue",
        description: "Learn to control the flow of your JavaScript code using conditional and loop control statements.",
        sections: [
            {
                title: "if...else Statement",
                content: "The `if` statement executes a block of code if a condition is true. The `else` statement defines what happens if the condition is false.",
                code: `
                let num = 10;
                if (num > 5) {
                    console.log("Greater than 5");
                } else {
                    console.log("Less than or equal to 5");
                }
            `
            },
            {
                title: "switch Statement",
                content: "The `switch` statement tests a variable against a list of values, executing the corresponding code for a match.",
                code: `
                let color = 'red';
                switch(color) {
                    case 'red':
                        console.log("Color is red");
                        break;
                    case 'blue':
                        console.log("Color is blue");
                        break;
                    default:
                        console.log("Unknown color");
                }
            `
            },
            {
                title: "break and continue",
                content: "`break` exits a loop or switch statement. `continue` skips the current iteration of a loop and moves to the next one.",
                code: `
                for (let i = 0; i < 5; i++) {
                    if (i === 3) break;
                    console.log(i);  // Output: 0, 1, 2
                }
                
                for (let i = 0; i < 5; i++) {
                    if (i === 3) continue;
                    console.log(i);  // Output: 0, 1, 2, 4
                }
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Write a program that checks if a number is positive, negative, or zero using `if...else`.",
                hint: "Use `if` to check different conditions for the number."
            },
            {
                question: "Create a program that uses `switch` to print different messages for different weather conditions ('sunny', 'rainy', 'cloudy').",
                hint: "Use the `switch` statement and `break` for each case."
            },
            {
                question: "Write a loop that prints numbers from 1 to 10 but skips the number 5.",
                hint: "Use the `continue` statement to skip an iteration."
            }
        ]
    },
    'loopingstatements': {
        title: "Looping Statements: while, do...while, for",
        description: "Understand how to use loops in JavaScript to repeat actions based on conditions.",
        sections: [
            {
                title: "while Loop",
                content: "The `while` loop repeats as long as the condition evaluates to true.",
                code: `
                let i = 0;
                while (i < 5) {
                    console.log(i);
                    i++;
                }
            `
            },
            {
                title: "do...while Loop",
                content: "The `do...while` loop will execute the block of code at least once before checking the condition.",
                code: `
                let i = 0;
                do {
                    console.log(i);
                    i++;
                } while (i < 5);
            `
            },
            {
                title: "for Loop",
                content: "The `for` loop is commonly used when the number of iterations is known. It consists of an initialization, condition, and update statement.",
                code: `
                for (let i = 0; i < 5; i++) {
                    console.log(i);
                }
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Write a `for` loop that prints numbers from 10 to 1.",
                hint: "Initialize the loop with `i = 10` and decrement the value."
            },
            {
                question: "Write a `while` loop that prints even numbers between 1 and 10.",
                hint: "Check if a number is even using the modulus operator inside the loop."
            }
        ]
    },
    'popupboxes': {
        title: "Popup Boxes: Alert, Confirm, and Prompt",
        description: "Learn how to use JavaScript popup boxes to interact with the user through alerts, confirmations, and prompts.",
        sections: [
            {
                title: "Alert Box",
                content: "The `alert()` method displays a simple message to the user in a popup box.",
                code: `
                alert("This is an alert box!");
            `
            },
            {
                title: "Confirm Box",
                content: "The `confirm()` method displays a popup with two options: OK and Cancel. It returns `true` for OK and `false` for Cancel.",
                code: `
                let userResponse = confirm("Do you agree?");
                if (userResponse) {
                    console.log("User agreed");
                } else {
                    console.log("User disagreed");
                }
            `
            },
            {
                title: "Prompt Box",
                content: "The `prompt()` method asks the user for input and returns the entered value. If Cancel is pressed, it returns `null`.",
                code: `
                let userName = prompt("Enter your name:");
                console.log("User name is", userName);
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Write a program that asks the user to enter their age using `prompt()` and then alerts a message saying 'You are x years old'.",
                hint: "Store the input from `prompt` in a variable and use `alert` to display the message."
            },
            {
                question: "Create a confirm box that asks the user 'Are you sure?' and logs the appropriate response based on the user's choice.",
                hint: "Use `confirm()` and check the returned value."
            }
        ]
    },
    'jsobjects': {
        title: "JavaScript Objects, Properties, and Methods",
        description: "Understand how to create and manipulate objects in JavaScript, and how to access their properties and methods.",
        sections: [
            {
                title: "Creating Objects",
                content: "In JavaScript, objects are collections of key-value pairs. You can create an object using object literal syntax or the `new Object()` constructor.",
                code: `
                let person = {
                    name: "John",
                    age: 30
                };

                let car = new Object();
                car.model = "Toyota";
                car.year = 2020;
            `
            },
            {
                title: "Accessing Object Properties",
                content: "Object properties can be accessed using dot notation or bracket notation.",
                code: `
                console.log(person.name);  // "John"
                console.log(person["age"]);  // 30
            `
            },
            {
                title: "Object Methods",
                content: "Objects can have methods, which are functions associated with the object.",
                code: `
                let person = {
                    name: "John",
                    greet: function() {
                        console.log("Hello, my name is " + this.name);
                    }
                };
                
                person.greet();  // Output: "Hello, my name is John"
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Create an object called `book` with properties `title`, `author`, and `year`. Log the `title` to the console.",
                hint: "Use object literal syntax to define the `book` object."
            },
            {
                question: "Write a method inside the `book` object that returns a string with the book's title and author.",
                hint: "Use the `this` keyword to reference object properties inside the method."
            }
        ]
    },
    'functions': {
        title: "Working with Functions",
        description: "Learn how to create and use functions in JavaScript to organize and reuse code.",
        sections: [
            {
                title: "Defining a Function",
                content: "Functions in JavaScript are reusable blocks of code that are defined using the `function` keyword. Functions can take parameters and return values.",
                code: `
                function greet(name) {
                    return "Hello, " + name;
                }

                let message = greet("Alice");
                console.log(message);  // Output: "Hello, Alice"
            `
            },
            {
                title: "Function Expressions",
                content: "A function expression defines a function as part of an expression. It can be anonymous or named.",
                code: `
                let greet = function(name) {
                    return "Hello, " + name;
                };

                console.log(greet("Bob"));  // Output: "Hello, Bob"
            `
            },
            {
                title: "Arrow Functions",
                content: "Arrow functions are a shorter syntax for writing functions, introduced in ES6.",
                points: [
                    "Arrow functions automatically bind the `this` value based on the enclosing context.",
                    "They are useful for concise function definitions, especially in callbacks."
                ],
                code: `
                const add = (x, y) => x + y;

                console.log(add(5, 10));  // Output: 15
            `
            },
            {
                title: "Returning Values",
                content: "Functions can return values using the `return` statement. If a function doesn't return anything explicitly, it returns `undefined` by default.",
                code: `
                function square(num) {
                    return num * num;
                }

                console.log(square(4));  // Output: 16
            `
            },
            {
                title: "Function Scope",
                content: "Variables declared inside a function are local to that function and can't be accessed outside.",
                code: `
                function demo() {
                    let localVar = "I'm local!";
                    console.log(localVar);
                }

                demo();  // Output: "I'm local!"
                console.log(localVar);  // Error: localVar is not defined
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Write a function `multiply` that takes two numbers as arguments and returns their product.",
                hint: "Define the function using the `function` keyword and use the `return` statement."
            },
            {
                question: "Convert the following function to an arrow function: `function square(x) { return x * x; }`.",
                hint: "Use arrow function syntax: `(params) => expression`."
            },
            {
                question: "Write a function that takes a name as a parameter and logs 'Hello, [name]' to the console.",
                hint: "Use the `console.log()` function inside your custom function."
            }
        ]
    },
    'events': {
        title: "JavaScript Events: Form, Keyboard, and Mouse Based",
        description: "Learn about JavaScript events and how they can be used to trigger actions in response to user interactions.",
        sections: [
            {
                title: "Form Events",
                content: "Form events are triggered when users interact with form elements, such as input fields, buttons, and select boxes.",
                points: [
                    "`onSubmit`: Triggered when a form is submitted.",
                    "`onFocus`: Triggered when an input field gains focus.",
                    "`onChange`: Triggered when the value of a form element changes."
                ],
                code: `
                <form onsubmit="submitForm()">
                    <input type="text" onfocus="focusFunction()" />
                    <select onchange="changeFunction()">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>

                <script>
                    function submitForm() {
                        alert("Form submitted!");
                    }
                    function focusFunction() {
                        console.log("Input field focused!");
                    }
                    function changeFunction() {
                        console.log("Form element changed!");
                    }
                </script>
            `
            },
            {
                title: "Keyboard Events",
                content: "Keyboard events are triggered when a user presses or releases a key on the keyboard.",
                points: [
                    "`onKeyDown`: Triggered when a key is pressed down.",
                    "`onKeyUp`: Triggered when a key is released.",
                    "`onKeyPress`: Triggered when a character key is pressed (deprecated)."
                ],
                code: `
                <input type="text" onkeydown="logKeyDown(event)" />

                <script>
                    function logKeyDown(event) {
                        console.log("Key pressed: " + event.key);
                    }
                </script>
            `
            },
            {
                title: "Mouse Events",
                content: "Mouse events are triggered by mouse interactions, such as clicks, hovering, or dragging.",
                points: [
                    "`onClick`: Triggered when an element is clicked.",
                    "`onMouseOver`: Triggered when the mouse hovers over an element.",
                    "`onMouseOut`: Triggered when the mouse moves away from an element."
                ],
                code: `
                <button onclick="buttonClicked()">Click me</button>

                <div onmouseover="hoverEffect()" onmouseout="removeHoverEffect()">Hover over me!</div>

                <script>
                    function buttonClicked() {
                        console.log("Button was clicked!");
                    }
                    function hoverEffect() {
                        console.log("Mouse over the div!");
                    }
                    function removeHoverEffect() {
                        console.log("Mouse out of the div!");
                    }
                </script>
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Write a script that logs a message to the console when a button is clicked.",
                hint: "Use the `onclick` event to trigger a function."
            },
            {
                question: "Create a form with an input field. Log 'Focused' when the field gains focus, and 'Changed' when the value changes.",
                hint: "Use the `onfocus` and `onchange` events on the input field."
            },
            {
                question: "Write a script that logs the key pressed by the user in an input field using `onkeydown`.",
                hint: "Use the `event.key` property to get the key value."
            }
        ]
    },
    'formvalidation': {
        title: "JavaScript Form Validation",
        description: "Understand how to use JavaScript to validate form inputs and ensure users provide valid information.",
        sections: [
            {
                title: "Client-side Validation",
                content: "Form validation ensures that users submit valid and correctly formatted data before the form is processed. Client-side validation provides immediate feedback.",
                points: [
                    "JavaScript validation is done in the browser, without waiting for the server.",
                    "Validation can include checking for required fields, valid formats, or specific lengths."
                ],
                code: `
                <form onsubmit="return validateForm()">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" />
                    <button type="submit">Submit</button>
                </form>

                <script>
                    function validateForm() {
                        let username = document.getElementById('username').value;
                        if (username === '') {
                            alert('Username is required!');
                            return false;
                        }
                        return true;
                    }
                </script>
            `
            },
            {
                title: "Regular Expressions for Validation",
                content: "Regular expressions (regex) can be used to match patterns in strings. They are useful for validating email addresses, phone numbers, and other formatted data.",
                code: `
                <form onsubmit="return validateEmail()">
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" />
                    <button type="submit">Submit</button>
                </form>

                <script>
                    function validateEmail() {
                        let email = document.getElementById('email').value;
                        let regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
                        if (!regex.test(email)) {
                            alert('Please enter a valid email address!');
                            return false;
                        }
                        return true;
                    }
                </script>
            `
            },
            {
                title: "Built-in HTML5 Validation",
                content: "HTML5 provides built-in validation attributes, such as `required`, `pattern`, `min`, `max`, and more.",
                points: [
                    "`required`: Ensures the field is filled out.",
                    "`pattern`: Validates input against a regex pattern.",
                    "`min` and `max`: Set numerical limits for input."
                ],
                code: `
                <form>
                    <label for="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" pattern="\\d{10}" required />
                    <button type="submit">Submit</button>
                </form>
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Write a validation function to check that a password is at least 8 characters long.",
                hint: "Use `document.getElementById()` to get the password value and check its length."
            },
            {
                question: "Create a form that validates an email using a regex pattern. Log a message if the email is valid.",
                hint: "Use a regex pattern in your validation function and check it with `test()`."
            },
            {
                question: "Implement an HTML5 form with required fields and patterns. Check if they are valid upon submission.",
                hint: "Utilize HTML5 attributes like `required` and `pattern` in your input fields."
            }
        ]
    },
    'domintro': {
        title: "Introduction to DOM",
        description: "Discover the Document Object Model (DOM) and understand how it represents the structure of HTML documents in a way that JavaScript can manipulate.",
        sections: [
            {
                title: "What is the DOM?",
                content: "The Document Object Model (DOM) is a programming interface that allows scripts to update the content, structure, and style of a document. It represents the document as a tree of objects, where each node is an object representing a part of the document.",
                points: [
                    "The DOM is platform- and language-independent.",
                    "It provides a structured representation of the document.",
                    "DOM elements can be accessed and manipulated using JavaScript."
                ]
            },
            {
                title: "DOM Structure",
                content: "The DOM represents the document as a hierarchy of nodes. The main types of nodes include:",
                points: [
                    "Element nodes: Represent HTML elements (e.g., `<div>`, `<p>`).",
                    "Text nodes: Contain the text content within an element.",
                    "Attribute nodes: Represent the attributes of elements."
                ]
            },
            {
                title: "Accessing the DOM",
                content: "JavaScript provides various methods to access and manipulate the DOM. You can select elements using methods such as `getElementById()`, `getElementsByClassName()`, and `querySelector()`.",
                code: `
                // Selecting an element by ID
                let header = document.getElementById('header');

                // Selecting elements by class name
                let items = document.getElementsByClassName('item');

                // Selecting the first element matching a CSS selector
                let firstButton = document.querySelector('button');
            `
            }
        ],
        practiceQuestions: [
            {
                question: "What is the DOM and why is it important for web development?",
                hint: "Consider its role in representing HTML documents and enabling dynamic manipulation."
            },
            {
                question: "Explain the difference between element nodes, text nodes, and attribute nodes.",
                hint: "Provide examples of each type of node."
            },
            {
                question: "Write JavaScript code to select an element with a specific ID from the DOM.",
                hint: "Use the `getElementById()` method."
            }
        ]
    },
    'dommethods': {
        title: "DOM Methods",
        description: "Explore various DOM methods available in JavaScript for selecting, creating, and modifying elements in a web document.",
        sections: [
            {
                title: "Selecting Elements",
                content: "In JavaScript, there are several methods to select DOM elements:",
                points: [
                    "`getElementById()`: Selects a single element by its ID.",
                    "`getElementsByClassName()`: Selects all elements with a specified class name.",
                    "`getElementsByTagName()`: Selects all elements with a specified tag name.",
                    "`querySelector()`: Selects the first element matching a CSS selector.",
                    "`querySelectorAll()`: Selects all elements matching a CSS selector."
                ],
                code: `
                let main = document.getElementById('main');
                let buttons = document.getElementsByClassName('btn');
                let paragraphs = document.getElementsByTagName('p');
                let firstLink = document.querySelector('a');
                let allLinks = document.querySelectorAll('a');
            `
            },
            {
                title: "Creating and Appending Elements",
                content: "You can create new DOM elements using `createElement()` and add them to the document using `appendChild()`.",
                code: `
                let newDiv = document.createElement('div');
                newDiv.textContent = 'This is a new div.';
                document.body.appendChild(newDiv);
            `
            },
            {
                title: "Modifying Element Attributes",
                content: "You can change the attributes of elements using the `setAttribute()` method or by directly accessing the property.",
                code: `
                let link = document.querySelector('a');
                link.setAttribute('href', 'https://example.com');
                link.title = 'Visit Example';  // Direct property access
            `
            },
            {
                title: "Removing Elements",
                content: "To remove an element from the DOM, you can use the `removeChild()` method on its parent node or the `remove()` method on the element itself.",
                code: `
                let elementToRemove = document.getElementById('removeMe');
                elementToRemove.parentNode.removeChild(elementToRemove);
                // or
                elementToRemove.remove();
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Write a script that selects an element by ID and changes its text content.",
                hint: "Use `getElementById()` and modify the `textContent` property."
            },
            {
                question: "Create a new paragraph element and append it to the body.",
                hint: "Use `createElement()` and `appendChild()` methods."
            },
            {
                question: "Change the `src` attribute of an image element in the DOM.",
                hint: "Use `setAttribute()` or direct property access."
            }
        ],
    },
    'domelements': {
        title: "DOM Document and Elements",
        description: "Gain insights into the DOM document object and how to manipulate various elements within it.",
        sections: [
            {
                title: "The Document Object",
                content: "The `document` object represents the whole HTML document. It provides methods to access and manipulate the content and structure of the document.",
                points: [
                    "You can access the document's title, URL, and more through the `document` object.",
                    "The `document` object serves as the root node of the DOM."
                ],
                code: `
                console.log(document.title);  // Logs the title of the document
                console.log(document.URL);    // Logs the current URL
            `
            },
            {
                title: "Accessing Child Elements",
                content: "The `document` object allows you to navigate through the DOM tree to access child elements using methods such as `children`, `firstChild`, and `lastChild`.",
                code: `
                let bodyChildren = document.body.children;
                let firstChild = document.body.firstChild;
                let lastChild = document.body.lastChild;
            `
            },
            {
                title: "Traversing the DOM",
                content: "You can navigate between parent and child nodes using properties like `parentNode`, `nextSibling`, and `previousSibling`.",
                code: `
                let firstListItem = document.querySelector('li');
                let parent = firstListItem.parentNode;  // Accessing the parent node
                let nextSibling = firstListItem.nextSibling;  // Accessing the next sibling
            `
            },
            {
                title: "Element Properties",
                content: "Each element has properties that can be accessed and modified, including `innerHTML`, `style`, and `className`.",
                code: `
                let div = document.getElementById('myDiv');
                div.innerHTML = '<strong>New Content!</strong>';
                div.style.backgroundColor = 'blue';  // Change background color
                div.className = 'newClass';  // Change the class of the element
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Use the `document` object to log the current document title.",
                hint: "Access the `title` property of the `document` object."
            },
            {
                question: "Write a script that accesses the first child of the body and logs it.",
                hint: "Use the `firstChild` property of the `document.body`."
            },
            {
                question: "Change the `className` of an element with a specific ID.",
                hint: "Use the `className` property to modify it."
            }
        ]
    },
    'domhtmlcss': {
        title: "DOM HTML and CSS",
        description: "Learn how to manipulate HTML and CSS styles using JavaScript to create dynamic web pages.",
        sections: [
            {
                title: "Manipulating HTML",
                content: "JavaScript can dynamically change the content of HTML elements using properties like `innerHTML`, `textContent`, and `outerHTML`.",
                code: `
                let element = document.getElementById('content');
                element.innerHTML = '<p>This is new content!</p>';  // Replace inner HTML
            `
            },
            {
                title: "Manipulating CSS Styles",
                content: "You can change the CSS styles of elements using the `style` property. You can access any CSS property and modify its value.",
                code: `
                let box = document.getElementById('box');
                box.style.width = '200px';
                box.style.height = '100px';
                box.style.backgroundColor = 'red';
            `
            },
            {
                title: "Adding and Removing Classes",
                content: "JavaScript provides methods to add and remove CSS classes from elements, enabling dynamic styling.",
                points: [
                    "`classList.add()`: Adds a class to the element.",
                    "`classList.remove()`: Removes a class from the element.",
                    "`classList.toggle()`: Toggles a class on the element."
                ],
                code: `
                let button = document.getElementById('myButton');
                button.classList.add('active');
                button.classList.remove('inactive');
                button.classList.toggle('highlight');
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Use JavaScript to change the content of a div with a specific ID.",
                hint: "Access the `innerHTML` or `textContent` property."
            },
            {
                question: "Modify the CSS style of an element to change its color.",
                hint: "Use the `style` property and modify `color`."
            },
            {
                question: "Add a class to an element and then remove it using JavaScript.",
                hint: "Use `classList.add()` and `classList.remove()`."
            }
        ]
    },
    'domevents': {
        title: "DOM Events",
        description: "Understand how to work with events in JavaScript to make your web applications interactive.",
        sections: [
            {
                title: "What are DOM Events?",
                content: "DOM events are actions or occurrences that happen in the DOM, such as user interactions (clicks, mouse movements, etc.) or changes to the document itself. JavaScript can respond to these events by executing code.",
                points: [
                    "Events can be triggered by user actions like clicks or keyboard input.",
                    "Events can also be triggered programmatically."
                ]
            },
            {
                title: "Adding Event Listeners",
                content: "You can add event listeners to DOM elements using the `addEventListener()` method. This method allows you to specify the type of event to listen for and a callback function to execute when the event occurs.",
                code: `
                let button = document.getElementById('myButton');
                button.addEventListener('click', function() {
                    alert('Button clicked!');
                });
            `
            },
            {
                title: "Event Object",
                content: "When an event occurs, an event object is created. This object contains information about the event, such as the type of event, the target element, and any additional data.",
                code: `
                button.addEventListener('click', function(event) {
                    console.log('Event type: ' + event.type);
                    console.log('Target element: ' + event.target);
                });
            `
            },
            {
                title: "Event Propagation",
                content: "Events in the DOM can propagate in two phases: bubbling and capturing. You can control the propagation behavior by using the `stopPropagation()` method.",
                points: [
                    "Bubbling: The event starts from the target element and bubbles up to the root.",
                    "Capturing: The event starts from the root and goes down to the target element."
                ],
                code: `
                button.addEventListener('click', function(event) {
                    event.stopPropagation();  // Prevents further propagation of the event
                });
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Write a script that listens for a click event on a button and displays an alert.",
                hint: "Use `addEventListener()` with the 'click' event."
            },
            {
                question: "Log the event type and target element when a button is clicked.",
                hint: "Use the event object in your callback function."
            },
            {
                question: "Implement event propagation by adding listeners to nested elements.",
                hint: "Observe how events bubble up from child to parent."
            }
        ]
    },
    'letconst': {
        title: "Let, Const, and Block Scope",
        description: "Understand the differences between `let`, `const`, and `var`, and how block scope works in JavaScript.",
        sections: [
            {
                title: "Understanding `let` and `const`",
                content: "`let` and `const` are block-scoped variable declarations introduced in ES6. They have different behaviors compared to `var`.",
                points: [
                    "`let` allows you to declare variables that can be reassigned.",
                    "`const` is used for declaring constants that cannot be reassigned.",
                    "`var` is function-scoped and can lead to issues in block-level scopes."
                ],
                code: `
                let x = 10;
                x = 20; // Reassignment allowed

                const y = 30;
                // y = 40; // Error: Assignment to constant variable
            `
            },
            {
                title: "Block Scope",
                content: "Block scope refers to the visibility of variables within a specific block of code, such as inside curly braces `{}`.",
                points: [
                    "Variables declared with `let` and `const` are limited to the block in which they are defined.",
                    "This helps avoid variable hoisting issues associated with `var`."
                ],
                code: `
                {
                    let a = 5;
                    const b = 10;
                }
                // console.log(a); // Error: a is not defined
                // console.log(b); // Error: b is not defined
            `
            }
        ],
        practiceQuestions: [
            {
                question: "What is the difference between `let` and `const`?",
                hint: "Consider their reassignability and scope."
            },
            {
                question: "Explain block scope and how it differs from function scope.",
                hint: "Discuss visibility within blocks defined by `{}`."
            },
            {
                question: "Write a code snippet using `let` and `const` in a block scope.",
                hint: "Show variable declaration and visibility."
            }
        ]
    },
    'arrowfunctions': {
        title: "Arrow Functions",
        description: "Learn about arrow functions, a concise way to write function expressions in JavaScript.",
        sections: [
            {
                title: "Introduction to Arrow Functions",
                content: "Arrow functions provide a shorter syntax for writing function expressions. They are particularly useful for writing inline functions.",
                points: [
                    "Arrow functions do not have their own `this` context, which can be beneficial for certain use cases.",
                    "They cannot be used as constructors and do not support the `arguments` object."
                ],
                code: `
                const add = (a, b) => a + b; // Implicit return
                const square = x => x * x;   // Single parameter without parentheses
            `
            },
            {
                title: "Lexical `this`",
                content: "In arrow functions, `this` is lexically bound, meaning it retains the value of `this` from its enclosing scope.",
                code: `
                function Person() {
                    this.age = 0;

                    setInterval(() => {
                        this.age++; // "this" refers to the Person object
                        console.log(this.age);
                    }, 1000);
                }

                const p = new Person(); // Logs incrementing age every second
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Write an arrow function that takes two parameters and returns their sum.",
                hint: "Use implicit return for concise syntax."
            },
            {
                question: "Demonstrate how `this` behaves in an arrow function inside a regular function.",
                hint: "Use `setTimeout()` to observe the `this` context."
            },
            {
                question: "Convert a traditional function expression into an arrow function.",
                hint: "Focus on syntax changes."
            }
        ]
    },
    'templateliterals': {
        title: "Template Literals",
        description: "Explore template literals for creating strings and embedding expressions in JavaScript.",
        sections: [
            {
                title: "Introduction to Template Literals",
                content: "Template literals are enclosed by backticks (``) and allow for multi-line strings and string interpolation.",
                points: [
                    "Use `${expression}` syntax to embed expressions.",
                    "Supports multi-line strings without the need for concatenation."
                ],
                code: `
                const name = 'Alice';
                const greeting = "Hello, ${name}!";
                console.log(greeting); // Logs: Hello, Alice!

                const multiLine = \`This is a string
                that spans multiple lines.\`;
            `
            },
            {
                title: "Using Expressions",
                content: "You can embed any valid JavaScript expression within a template literal.",
                code: `
                const a = 5;
                const b = 10;
                const sum = \'a + b = a + b\'; 
                console.log(sum); // Logs: 5 + 10 = 15
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Create a template literal that includes your name and age.",
                hint: "Use interpolation to insert variables into the string."
            },
            {
                question: "Demonstrate multi-line strings using template literals.",
                hint: "Show a string that contains line breaks."
            },
            {
                question: "Write a template literal that calculates and displays a mathematical operation.",
                hint: "Include variables and expressions."
            }
        ]
    },
    'destructuring': {
        title: "Destructuring Objects and Arrays",
        description: "Learn about destructuring, a convenient way to extract values from arrays and objects in JavaScript.",
        sections: [
            {
                title: "Array Destructuring",
                content: "Array destructuring allows you to unpack values from arrays into distinct variables.",
                code: `
                const colors = ['red', 'green', 'blue'];
                const [firstColor, secondColor] = colors;
                console.log(firstColor); // Logs: red
                console.log(secondColor); // Logs: green
            `
            },
            {
                title: "Object Destructuring",
                content: "Object destructuring allows you to extract properties from objects into variables.",
                code: `
                const person = { name: 'John', age: 30 };
                const { name, age } = person;
                console.log(name); // Logs: John
                console.log(age); // Logs: 30
            `
            },
            {
                title: "Default Values",
                content: "You can assign default values to variables during destructuring if the property or index is undefined.",
                code: `
                const settings = { volume: 50 };
                const { volume, brightness = 100 } = settings;
                console.log(brightness); // Logs: 100
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Use array destructuring to extract values from an array of numbers.",
                hint: "Create an array and destructure it into separate variables."
            },
            {
                question: "Demonstrate object destructuring by extracting properties from an object.",
                hint: "Create an object and destructure its properties."
            },
            {
                question: "Implement default values in destructuring for missing properties.",
                hint: "Show how to provide fallback values."
            }
        ]
    },
    'spreadrest': {
        title: "Spread and Rest Operators",
        description: "Discover the spread and rest operators, powerful tools for working with arrays and function parameters.",
        sections: [
            {
                title: "Spread Operator",
                content: "The spread operator (`...`) allows you to expand an iterable (like an array) into individual elements.",
                code: `
                const numbers = [1, 2, 3];
                const newNumbers = [...numbers, 4, 5];
                console.log(newNumbers); // Logs: [1, 2, 3, 4, 5]

                const person = { name: 'Alice' };
                const updatedPerson = { ...person, age: 25 };
                console.log(updatedPerson); // Logs: { name: 'Alice', age: 25 }
            `
            },
            {
                title: "Rest Operator",
                content: "The rest operator (`...`) allows you to collect multiple elements into an array. It can be used in function parameters to gather arguments.",
                code: `
                function sum(...args) {
                    return args.reduce((acc, cur) => acc + cur, 0);
                }
                console.log(sum(1, 2, 3, 4)); // Logs: 10
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Use the spread operator to combine two arrays into one.",
                hint: "Create two arrays and expand them into a new one."
            },
            {
                question: "Demonstrate the use of the rest operator in a function to sum multiple arguments.",
                hint: "Show how to use `...args` in the function definition."
            },
            {
                question: "Create a new object using the spread operator that adds new properties to an existing object.",
                hint: "Use `...` to merge objects."
            }
        ]
    },
    'modules': {
        title: "Modules and Imports/Exports",
        description: "Learn how to use modules in JavaScript to organize and reuse code effectively.",
        sections: [
            {
                title: "Understanding Modules",
                content: "Modules allow you to break your code into smaller, manageable pieces. Each module can export variables, functions, or classes.",
                points: [
                    "Modules can help improve code maintainability and readability.",
                    "They can prevent naming conflicts in your code."
                ]
            },
            {
                title: "Exporting Modules",
                content: "You can export variables or functions from a module using the `export` keyword.",
                code: `
                // file: math.js
                export const pi = 3.14;
                export function add(a, b) {
                    return a + b;
                }
            `
            },
            {
                title: "Importing Modules",
                content: "You can import exported modules into another file using the `import` statement.",
                code: `
                // file: main.js
                import { pi, add } from './math.js';
                console.log(pi); // Logs: 3.14
                console.log(add(2, 3)); // Logs: 5
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Create a module that exports a variable and a function.",
                hint: "Use `export` for both in your module file."
            },
            {
                question: "Import the variable and function from your module into another file.",
                hint: "Use `import` statement to access them."
            },
            {
                question: "Explain the benefits of using modules in your JavaScript code.",
                hint: "Consider maintainability, reusability, and organization."
            }
        ]
    },
    'asyncintro': {
        title: "Introduction to Asynchronous Programming",
        description: "Explore the fundamentals of asynchronous programming in JavaScript, and understand how it differs from synchronous programming.",
        sections: [
            {
                title: "What is Asynchronous Programming?",
                content: "Asynchronous programming allows operations to run independently of the main program flow. It enables JavaScript to handle tasks such as network requests without blocking the execution of other code.",
                points: [
                    "Synchronous code executes in sequence, while asynchronous code allows multiple tasks to run concurrently.",
                    "Common use cases include network requests, file I/O, and timers."
                ]
            },
            {
                title: "Benefits of Asynchronous Programming",
                content: "Asynchronous programming enhances performance and responsiveness, especially in web applications where UI interactions should remain fluid.",
                points: [
                    "Improves user experience by avoiding freezing or lagging during long operations.",
                    "Allows for better resource utilization in applications."
                ]
            }
        ],
        practiceQuestions: [
            {
                question: "Define asynchronous programming and give an example of its use in JavaScript.",
                hint: "Consider network requests or timers."
            },
            {
                question: "What are the main differences between synchronous and asynchronous programming?",
                hint: "Discuss execution flow and responsiveness."
            }
        ]
    },
    'callbacks': {
        title: "Understanding Callbacks",
        description: "Learn about callbacks, a core concept in asynchronous programming that allows functions to be passed as arguments.",
        sections: [
            {
                title: "What is a Callback?",
                content: "A callback is a function passed into another function as an argument. It is executed after the completion of the asynchronous operation.",
                code: `
                function fetchData(callback) {
                    setTimeout(() => {
                        const data = { name: 'Alice', age: 25 };
                        callback(data);
                    }, 2000);
                }

                fetchData((result) => {
                    console.log(result); // Logs after 2 seconds: { name: 'Alice', age: 25 }
                });
            `
            },
            {
                title: "Callback Hell",
                content: "Using multiple nested callbacks can lead to callback hell, making the code harder to read and maintain.",
                code: `
                fetchData((result) => {
                    processData(result, (processed) => {
                        saveData(processed, (saved) => {
                            console.log(saved);
                        });
                    });
                });
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Create a function that takes a callback and invokes it after a delay.",
                hint: "Use `setTimeout` for the delay."
            },
            {
                question: "Explain callback hell and its implications in code readability.",
                hint: "Discuss nested callbacks."
            }
        ]
    },
    'promises': {
        title: "Promises",
        description: "Explore promises, a modern approach to handling asynchronous operations that allows for cleaner code and better error handling.",
        sections: [
            {
                title: "What is a Promise?",
                content: "A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.",
                points: [
                    "Promises can be in one of three states: pending, fulfilled, or rejected.",
                    "They provide methods like `.then()`, `.catch()`, and `.finally()` for handling asynchronous results."
                ],
                code: `
                const myPromise = new Promise((resolve, reject) => {
                    const success = true;
                    if (success) {
                        resolve('Operation succeeded!');
                    } else {
                        reject('Operation failed!');
                    }
                });

                myPromise
                    .then(result => console.log(result))
                    .catch(error => console.log(error));
            `
            },
            {
                title: "Chaining Promises",
                content: "You can chain multiple promises together using `.then()`, allowing for a more readable and manageable flow of asynchronous operations.",
                code: `
                fetchData()
                    .then(result => processData(result))
                    .then(processed => saveData(processed))
                    .then(saved => console.log(saved))
                    .catch(error => console.log(error));
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Create a promise that resolves or rejects based on a condition.",
                hint: "Use the `resolve` and `reject` methods appropriately."
            },
            {
                question: "Demonstrate promise chaining with three asynchronous operations.",
                hint: "Chain `.then()` calls to process results."
            }
        ]
    },
    'asyncawait': {
        title: "Async and Await",
        description: "Learn how to use async and await to simplify asynchronous code and make it look more like synchronous code.",
        sections: [
            {
                title: "Using Async Functions",
                content: "The `async` keyword is used to declare an asynchronous function. Inside an async function, you can use `await` to pause execution until a promise is resolved.",
                code: `
                async function fetchData() {
                    const response = await fetch('https://api.example.com/data');
                    const data = await response.json();
                    return data;
                }

                fetchData().then(data => console.log(data));
            `
            },
            {
                title: "Error Handling with Async/Await",
                content: "You can use try/catch blocks to handle errors in async functions, providing a cleaner way to deal with exceptions.",
                code: `
                async function fetchData() {
                    try {
                        const response = await fetch('https://api.example.com/data');
                        const data = await response.json();
                        return data;
                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                }
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Write an async function that fetches data from a public API.",
                hint: "Use `await` to handle promises."
            },
            {
                question: "Implement error handling in your async function using try/catch.",
                hint: "Demonstrate how to catch and log errors."
            }
        ]
    },
    'errorhandling': {
        title: "Handling Errors in Asynchronous Code",
        description: "Understand various methods for handling errors in asynchronous programming, including callbacks, promises, and async/await.",
        sections: [
            {
                title: "Error Handling in Callbacks",
                content: "In callback-based code, errors can be handled by passing an error as the first argument to the callback function.",
                code: `
                function fetchData(callback) {
                    // Simulating an error
                    const error = true;
                    if (error) {
                        callback('Error fetching data', null);
                    } else {
                        callback(null, { name: 'Alice' });
                    }
                }

                fetchData((error, result) => {
                    if (error) {
                        console.error(error);
                    } else {
                        console.log(result);
                    }
                });
            `
            },
            {
                title: "Error Handling with Promises",
                content: "In promises, you can use the `.catch()` method to handle errors that occur during the asynchronous operation.",
                code: `
                const fetchData = () => {
                    return new Promise((resolve, reject) => {
                        const error = true;
                        if (error) {
                            reject('Error fetching data');
                        } else {
                            resolve({ name: 'Alice' });
                        }
                    });
                };

                fetchData()
                    .then(result => console.log(result))
                    .catch(error => console.error(error));
            `
            },
            {
                title: "Error Handling with Async/Await",
                content: "Using async/await, you can easily manage errors with try/catch blocks, leading to cleaner and more understandable code.",
                code: `
                async function fetchData() {
                    try {
                        const response = await fetch('https://api.example.com/data');
                        if (!response.ok) throw new Error('Network response was not ok');
                        const data = await response.json();
                        return data;
                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                }
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Explain how to handle errors in callback-based asynchronous functions.",
                hint: "Discuss error-first callbacks."
            },
            {
                question: "Demonstrate error handling using the `.catch()` method in promises.",
                hint: "Create a promise that rejects and handle the error."
            },
            {
                question: "Show how to use try/catch in an async function to manage errors.",
                hint: "Implement error handling for a network request."
            }
        ]
    },
    'fetchapi': {
        title: "Using Fetch API for HTTP Requests",
        description: "Learn how to use the Fetch API to make network requests and handle responses in JavaScript.",
        sections: [
            {
                title: "Making GET Requests",
                content: "The Fetch API allows you to make HTTP requests to retrieve data from servers.",
                code: `
                fetch('https://api.example.com/data')
                    .then(response => {
                        if (!response.ok) throw new Error('Network response was not ok');
                        return response.json();
                    })
                    .then(data => console.log(data))
                    .catch(error => console.error('Error:', error));
            `
            },
            {
                title: "Making POST Requests",
                content: "You can also use the Fetch API to send data to servers using POST requests.",
                code: `
                fetch('https://api.example.com/data', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name: 'Alice', age: 25 })
                })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error:', error));
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Create a GET request using the Fetch API and log the response.",
                hint: "Use `.then()` to handle the promise."
            },
            {
                question: "Write a POST request using the Fetch API to send JSON data.",
                hint: "Include headers for content type and stringify the body."
            }
        ]
    },
    'debugging': {
        title: "JavaScript Debugging and Testing",
        description: "Learn essential debugging techniques and testing methodologies to ensure your JavaScript code is reliable and efficient.",
        sections: [
            {
                title: "Debugging Techniques",
                content: "Debugging is the process of identifying and fixing errors in your code. Common techniques include using the console, breakpoints, and inspecting elements in the browser.",
                points: [
                    "Using `console.log()` to output variable values and flow control.",
                    "Utilizing browser developer tools to set breakpoints and step through code."
                ],
                code: `
                function calculateSum(a, b) {
                    console.log('Adding:', a, b); // Debugging output
                    return a + b;
                }
                calculateSum(5, 10); // Logs: Adding: 5 10
            `
            },
            {
                title: "Testing Methods",
                content: "Testing ensures that your code behaves as expected. Common types include unit tests, integration tests, and end-to-end tests.",
                points: [
                    "Unit tests verify individual functions.",
                    "Integration tests check how different parts of your application work together."
                ]
            }
        ],
        practiceQuestions: [
            {
                question: "What is the purpose of debugging, and what tools can you use?",
                hint: "Discuss methods like `console.log()` and browser tools."
            },
            {
                question: "Explain the difference between unit tests and integration tests.",
                hint: "Focus on their scope and objectives."
            }
        ]
    },
    'bestpractices': {
        title: "Best Practices in JavaScript Code",
        description: "Explore best practices for writing clean, maintainable, and efficient JavaScript code.",
        sections: [
            {
                title: "Code Organization",
                content: "Organizing your code into modules and using meaningful variable and function names enhance readability and maintainability.",
                points: [
                    "Use clear and descriptive names for variables and functions.",
                    "Group related functions and variables into modules or classes."
                ]
            },
            {
                title: "Commenting and Documentation",
                content: "Commenting your code helps others (and your future self) understand its purpose and functionality.",
                points: [
                    "Write comments explaining complex logic.",
                    "Consider using tools like JSDoc to generate documentation from comments."
                ]
            }
        ],
        practiceQuestions: [
            {
                question: "What are some effective strategies for organizing JavaScript code?",
                hint: "Discuss modularity and naming conventions."
            },
            {
                question: "Why is documentation important, and how can you implement it in your code?",
                hint: "Focus on commenting and using tools like JSDoc."
            }
        ]
    },
    'project1': {
        title: "JavaScript Project: Build a To-Do List App",
        description: "Apply your JavaScript skills by creating a simple To-Do List application that allows users to add, remove, and mark tasks as complete.",
        sections: [
            {
                title: "Project Setup",
                content: "Start by setting up your project structure with HTML, CSS, and JavaScript files. Make sure to include a basic layout for your To-Do List app.",
                code: `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>To-Do List</title>
                    <link rel="stylesheet" href="styles.css">
                </head>
                <body>
                    <h1>My To-Do List</h1>
                    <input type="text" id="taskInput" placeholder="Add a new task">
                    <button id="addButton">Add</button>
                    <ul id="taskList"></ul>
                    <script src="script.js"></script>
                </body>
                </html>
            `
            },
            {
                title: "Adding Tasks",
                content: "Implement functionality to add tasks to the list. Use JavaScript to capture user input and append it to the task list.",
                code: `
                const addButton = document.getElementById('addButton');
                const taskInput = document.getElementById('taskInput');
                const taskList = document.getElementById('taskList');

                addButton.addEventListener('click', () => {
                    const taskText = taskInput.value;
                    if (taskText) {
                        const li = document.createElement('li');
                        li.textContent = taskText;
                        taskList.appendChild(li);
                        taskInput.value = '';
                    }
                });
            `
            }
        ],
        practiceQuestions: [
            {
                question: "Describe how to structure the HTML for a To-Do List app.",
                hint: "Consider input fields, buttons, and list elements."
            },
            {
                question: "How do you handle user input in JavaScript to add tasks?",
                hint: "Discuss event listeners and DOM manipulation."
            }
        ]
    },
    'project2': {
        title: "JavaScript Project: Simple Weather App",
        description: "Create a weather application that fetches and displays weather data for a given location using an external API.",
        sections: [
            {
                title: "Setting Up the Weather API",
                content: "Choose a weather API (like OpenWeatherMap) and obtain an API key. Set up your project to make API calls and handle responses.",
                code: `
                const apiKey = 'YOUR_API_KEY';
                const fetchWeather = async (city) => {
                    const response = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${apiKey}\`);
                    const data = await response.json();
                    return data;
                };
            `
            },
            {
                title: "Displaying Weather Data",
                content: "Implement the UI to display weather information such as temperature, humidity, and conditions. Use DOM manipulation to show the fetched data.",
                code: `
                const displayWeather = (data) => {
                    const weatherDiv = document.getElementById('weather');
                    weatherDiv.innerHTML = \`<h2>Weather in \${data.name}</h2>
                    <p>Temperature: \${data.main.temp} °C</p>
                    <p>Humidity: \${data.main.humidity}%</p>\`;
                };

                document.getElementById('getWeatherButton').addEventListener('click', async () => {
                    const city = document.getElementById('cityInput').value;
                    const weatherData = await fetchWeather(city);
                    displayWeather(weatherData);
                });
            `
            }
        ],
        practiceQuestions: [
            {
                question: "What steps are involved in setting up a weather API for your app?",
                hint: "Consider API keys and request formats."
            },
            {
                question: "How can you display fetched weather data on the web page?",
                hint: "Discuss DOM manipulation and creating HTML elements."
            }
        ]
    }
}