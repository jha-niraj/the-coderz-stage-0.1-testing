export const units = [
    {
        title: "Unit I: JavaScript Refresher and Introduction to React",
        youtube: "https://youtu.be/unit1_overview",
        quizlink: "https://quizlink.com/unit1_quiz",
        lessons: [
            { name: "ES6 Refresher - Classes, Arrow Functions, Variables (let, const, var)", lessonkey: "es6_refresher" },
            { name: "Array Methods - map(), Destructuring, Spread Operator", lessonkey: "array_methods" },
            { name: "Modules in JavaScript", lessonkey: "js_modules" },
            { name: "Introduction to SPA and MPA", lessonkey: "intro_spa_mpa" },
            { name: "React Framework - Overview, Features, Pros & Cons", lessonkey: "react_intro" }
        ]
    },
    {
        title: "Unit II: Setting Up React and Component Basics",
        youtube: "https://youtu.be/unit2_overview",
        quizlink: "https://quizlink.com/unit2_quiz",
        lessons: [
            { name: "Installing React with Create React App", lessonkey: "install_react" },
            { name: "React Environment and Folder Structure", lessonkey: "react_environment" },
            { name: "JSX Basics and Rendering Elements", lessonkey: "jsx_basics" },
            { name: "Component Basics - Class and Functional Components", lessonkey: "component_basics" },
            { name: "Styling in React - CSS, Inline, and CSS Modules", lessonkey: "react_styling" }
        ]
    },
    {
        title: "Unit III: Working with Hooks and Lifecycle in React",
        youtube: "https://youtu.be/unit3_overview",
        quizlink: "https://quizlink.com/unit3_quiz",
        lessons: [
            { name: "Introduction to React Hooks", lessonkey: "hooks_intro" },
            { name: "Built-in Hooks - useState, useEffect, useContext, useRef", lessonkey: "builtin_hooks" },
            { name: "Advanced Hooks - useReducer, useCallback, useMemo", lessonkey: "advanced_hooks" },
            { name: "Component Lifecycle and Event Handling", lessonkey: "lifecycle_events" },
            { name: "State Management - Pitfalls and Best Practices", lessonkey: "state_management" }
        ]
    },
    {
        title: "Unit IV: Forms and Controlled Components",
        youtube: "https://youtu.be/unit4_overview",
        quizlink: "https://quizlink.com/unit4_quiz",
        lessons: [
            { name: "Adding and Handling Forms in React", lessonkey: "forms_handling" },
            { name: "Controlled vs Uncontrolled Components", lessonkey: "controlled_uncontrolled" },
            { name: "Form Validation - Error Handling", lessonkey: "form_validation" }
        ]
    },
    {
        title: "Unit V: HTTP Requests and Routing",
        youtube: "https://youtu.be/unit5_overview",
        quizlink: "https://quizlink.com/unit5_quiz",
        lessons: [
            { name: "Fetching Data with Fetch API and Axios", lessonkey: "http_fetch_axios" },
            { name: "GET, POST, PUT, and DELETE Requests", lessonkey: "http_methods" },
            { name: "Setting up React Router for Navigation", lessonkey: "react_router_setup" },
            { name: "Passing Data Between Pages with Query Params", lessonkey: "data_passing" }
        ]
    },
    {
        title: "Unit VI: Redux and Deployment",
        youtube: "https://youtu.be/unit6_overview",
        quizlink: "https://quizlink.com/unit6_quiz",
        lessons: [
            { name: "Redux Basics and Store Setup", lessonkey: "redux_basics" },
            { name: "Understanding Redux Flow and Dispatching Actions", lessonkey: "redux_flow" },
            { name: "Connecting Components to Redux Store", lessonkey: "redux_connect" },
            { name: "Debugging and Deploying React Applications", lessonkey: "debugging_deployment" }
        ]
    }
];


export const lessonData = {
    "es6_refresher": {
        title: "ES6 Refresher - Classes, Arrow Functions, Variables (let, const, var)",
        description: "Refresh your understanding of ES6 concepts like classes, arrow functions, and variable declarations with let, const, and var to write modern, efficient JavaScript code.",
        sections: [
            {
                title: "Classes in JavaScript",
                content: "In ES6, JavaScript introduced the 'class' keyword, allowing you to define reusable, object-oriented classes that encapsulate properties and methods. This syntactic sugar improves readability and functionality when working with objects.",
                code: `class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(\`Hello, my name is \${this.name}\`);
    }
}

const person1 = new Person("Alice", 25);
person1.greet();  // Output: Hello, my name is Alice`
            },
            {
                title: "Arrow Functions",
                content: "Arrow functions offer a concise syntax for function expressions. They also have lexical scoping for the `this` keyword, which means they inherit `this` from the enclosing scope. Arrow functions are ideal for callbacks or functional operations.",
                code: `const add = (a, b) => a + b;

console.log(add(2, 3));  // Output: 5`
            },
            {
                title: "Variables: let, const, and var",
                content: "`let` and `const` were introduced in ES6 for more robust variable scoping. `let` allows block-scoped variables, while `const` is used for constants that shouldn’t be reassigned. `var` is function-scoped and can lead to hoisting issues, which are minimized with `let` and `const`.",
                code: `let name = "John";
name = "Jane"; // Allowed with let

const age = 30;
// age = 35;  // Error: Cannot reassign a const

function example() {
    var city = "New York";
    if (true) {
        let country = "USA";
        console.log(country); // Output: USA
    }
    // console.log(country); // Error: country is not defined
}`
            }
        ],
        pitfalls: [
            "`this` in arrow functions is lexically bound, meaning it does not have its own `this` context.",
            "`const` is not immutable, it only means the variable identifier cannot be reassigned; properties of objects defined with `const` can still be modified.",
            "Avoid using `var` in modern code to reduce scoping errors and unexpected behavior from hoisting."
        ],
        summary: "Understanding ES6 features like classes, arrow functions, and improved variable declarations enhances your JavaScript code readability and reliability.",
        practiceQuestions: [
            {
                question: "Create a class `Animal` with a property `type` and a method `speak` that prints a message. Then create an instance and call the `speak` method.",
                hint: "Define a constructor to set the `type` property and a method that accesses this property."
            },
            {
                question: "Write a function using an arrow function that multiplies two numbers.",
                hint: "Arrow functions can be concise, omitting the braces when using a single expression."
            }
        ]
    },
    "array_methods": {
        title: "Array Methods - map(), Destructuring, Spread Operator",
        description: "Master the modern array methods like `.map()` for transformations, destructuring for unpacking, and the spread operator for copying and merging arrays.",
        sections: [
            {
                title: "Using .map() for Array Transformations",
                content: "The `.map()` method creates a new array populated with the results of calling a provided function on every element in the array. This is essential for transforming data.",
                code: `const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // Output: [2, 4, 6, 8]`
            },
            {
                title: "Destructuring Arrays and Objects",
                content: "Destructuring allows you to unpack values from arrays or properties from objects into distinct variables, simplifying assignments and improving code readability.",
                code: `const coordinates = [10, 20];
const [x, y] = coordinates;
console.log(x, y);  // Output: 10 20

const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name, age);  // Output: Alice 25`
            },
            {
                title: "Spread Operator",
                content: "The spread operator (`...`) is used to expand an array or object, making it easy to copy or concatenate arrays and pass arguments.",
                code: `const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);  // Output: [1, 2, 3, 4, 5, 6]`
            }
        ],
        pitfalls: [
            "Remember that `.map()` returns a new array, so if no return is provided in the callback function, `undefined` will be mapped.",
            "Destructuring syntax must match the data structure format; mismatches will result in `undefined` values.",
            "Using the spread operator with objects can lead to shallow copies; changes in nested objects will reflect in both original and copied objects."
        ],
        summary: "Mastering array transformation methods, destructuring, and the spread operator makes JavaScript data handling more powerful and concise.",
        practiceQuestions: [
            {
                question: "Use .map() to create a new array with the squares of an original array of numbers.",
                hint: "Use an arrow function in the `.map()` callback to calculate the square of each number."
            },
            {
                question: "Use destructuring to swap two variables `a` and `b` without using a third variable.",
                hint: "Use array destructuring `[a, b] = [b, a]`."
            }
        ]
    },
    "js_modules": {
        title: "Modules in JavaScript",
        description: "Explore JavaScript modules, enabling modular code structure by exporting and importing functions, objects, or variables between files.",
        sections: [
            {
                title: "Understanding Modules and Exports",
                content: "Modules are a way to structure code by splitting it into separate files. You can export variables, functions, or classes from one file and import them into another. This helps organize code and manage dependencies effectively.",
                code: `// utils.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// main.js
import { add, multiply } from './utils.js';
console.log(add(2, 3));  // Output: 5`
            },
            {
                title: "Default Exports",
                content: "JavaScript modules allow only one default export per module. Default exports are useful when you want to export a single function or class that is the main focus of the module.",
                code: `// math.js
export default function subtract(a, b) {
    return a - b;
}

// main.js
import subtract from './math.js';
console.log(subtract(5, 3));  // Output: 2`
            }
        ],
        pitfalls: [
            "Remember that only one default export is allowed per module, while multiple named exports are permitted.",
            "Use relative paths when importing modules, as absolute paths may not work in all environments.",
            "Be cautious of circular dependencies, where two modules import each other; this can lead to errors."
        ],
        summary: "JavaScript modules offer a way to organize code by exporting and importing functionalities between files, making codebases easier to maintain.",
        practiceQuestions: [
            {
                question: "Create two modules, `math.js` and `app.js`, where `math.js` exports add and multiply functions. Import these into `app.js` and use them.",
                hint: "Use named exports for each function in `math.js` and named imports in `app.js`."
            }
        ]
    },
    "intro_spa_mpa": {
        title: "Introduction to SPA and MPA",
        description: "Explore the differences between Single Page Applications (SPA) and Multi Page Applications (MPA), and understand their structures, benefits, and use cases.",
        sections: [
            {
                title: "What is a Single Page Application (SPA)?",
                content: "A Single Page Application (SPA) loads a single HTML page and dynamically updates content as the user interacts with it. It provides a smooth, app-like experience by only updating necessary parts of the page, reducing server requests and improving speed.",
                points: [
                    "Loads a single HTML file and updates content dynamically without reloading the page.",
                    "Examples of SPAs: Gmail, Facebook, and Twitter.",
                    "Built using JavaScript frameworks like React, Angular, and Vue."
                ]
            },
            {
                title: "What is a Multi Page Application (MPA)?",
                content: "A Multi Page Application (MPA) reloads the entire page for every interaction, loading separate HTML pages for each section or feature. This traditional structure is commonly used in applications requiring extensive content management and SEO support, such as e-commerce sites.",
                points: [
                    "Loads a new HTML page on each interaction or page request.",
                    "Examples of MPAs: Amazon, eBay, and government websites.",
                    "Better suited for SEO as each page has its own URL."
                ]
            },
            {
                title: "Comparing SPA and MPA",
                content: "While SPAs offer a faster, app-like experience due to reduced page loads, MPAs excel in SEO and managing extensive content. Choosing between SPA and MPA depends on factors like application size, SEO needs, and user experience priorities.",
                points: [
                    "SPAs are faster due to reduced server requests but may have limited SEO support.",
                    "MPAs are better for SEO but can be slower due to frequent page reloads.",
                    "SPAs use client-side routing, while MPAs use server-side routing."
                ]
            }
        ],
        summary: "SPAs provide a seamless user experience by updating content without reloading the page, ideal for highly interactive web applications. MPAs, however, reload pages with each user interaction, making them suitable for SEO and content-heavy applications.",
        practiceQuestions: [
            {
                question: "Explain the main difference between a SPA and an MPA.",
                hint: "Consider how each type loads content and its implications on user experience."
            },
            {
                question: "List two examples each of applications that typically use SPA and MPA structures.",
                hint: "Think of popular web apps with either seamless interaction or extensive content."
            },
            {
                question: "Why might an e-commerce website choose an MPA structure over an SPA?",
                hint: "Consider SEO benefits and content requirements."
            },
            {
                question: "Describe how a SPA improves performance compared to an MPA.",
                hint: "Focus on server requests and content updates."
            },
            {
                question: "What challenges might a developer face when making a SPA SEO-friendly?",
                hint: "Consider how SPAs handle page content and URLs."
            }
        ]
    },
    "react_intro": {
        title: "React Framework - Overview, Features, Pros & Cons",
        description: "Get a foundational understanding of React, a popular JavaScript library for building user interfaces, its core features, and its strengths and weaknesses.",
        sections: [
            {
                title: "What is React?",
                content: "React is a JavaScript library developed by Facebook for building user interfaces, particularly SPAs. It allows developers to create reusable UI components, managing the view layer of web applications.",
                points: [
                    "A JavaScript library developed by Facebook, focused on building UI components.",
                    "Used widely for SPAs due to its dynamic and interactive features.",
                    "Employs a component-based structure, making code more modular and reusable."
                ]
            },
            {
                title: "Core Features of React",
                content: "React includes features like the Virtual DOM, JSX syntax, component-based structure, and unidirectional data flow, which contribute to its high performance and ease of use.",
                points: [
                    "Virtual DOM for efficient updates and rendering.",
                    "JSX, a syntax extension for JavaScript, allows writing HTML-like code within JavaScript.",
                    "Unidirectional data flow enhances predictable data management.",
                    "Component-based architecture enables reusable code."
                ]
            },
            {
                title: "Pros and Cons of React",
                content: "React is powerful for building fast, interactive UIs but requires knowledge of JavaScript and may involve a steep learning curve for managing state and setting up additional libraries.",
                points: [
                    "Pros: Fast rendering via Virtual DOM, modular component structure, extensive ecosystem.",
                    "Cons: Steeper learning curve, relies on additional libraries for state management, and often requires configuration.",
                    "Ideal for dynamic applications but may add complexity in larger projects."
                ]
            }
        ],
        summary: "React is a powerful, flexible JavaScript library widely used for building SPAs. It offers efficient UI rendering and a component-based approach but may have a learning curve for new developers.",
        practiceQuestions: [
            {
                question: "What is the main purpose of React as a JavaScript library?",
                hint: "Think of how React manages the user interface."
            },
            {
                question: "How does the Virtual DOM in React improve performance?",
                hint: "Consider how React uses the Virtual DOM to update the UI efficiently."
            },
            {
                question: "Explain two advantages of React's component-based structure.",
                hint: "Think about modularity and reusability in code."
            },
            {
                question: "What is one drawback of using React for large-scale projects?",
                hint: "Consider the need for additional libraries and complexity."
            },
            {
                question: "Why might a developer prefer React over other JavaScript frameworks for a SPA?",
                hint: "Consider performance, flexibility, and UI management."
            }
        ]
    },
    "install_react": {
        title: "Installing React with Create React App",
        description: "Learn how to set up a new React application using Create React App (CRA), a convenient tool to scaffold a React project with a pre-configured development environment.",
        sections: [
            {
                title: "What is Create React App?",
                content: "Create React App (CRA) is an officially supported command-line tool from Facebook that simplifies the process of setting up a React project. It provides a standardized structure and essential development tools like Webpack and Babel, so you can focus on writing code instead of managing complex configurations."
            },
            {
                title: "Installing Node.js and npm",
                content: "To use CRA, you first need to have Node.js and npm installed, as they are essential for managing dependencies in a React application. You can download Node.js from its official website, which includes npm by default.",
                points: [
                    "Download Node.js from the [official website](https://nodejs.org).",
                    "Verify installation with `node -v` and `npm -v` in the terminal."
                ]
            },
            {
                title: "Creating a New React Project with CRA",
                content: "Use the following command to create a new React app in your terminal:",
                code: `npx create-react-app my-app`,
                points: [
                    "`npx` is a package runner that comes with npm 5.2+ and allows running packages without installing them globally.",
                    "Replace `my-app` with your project name.",
                    "Navigate into the created directory using `cd my-app`."
                ]
            },
            {
                title: "Running the React Application",
                content: "To start your new React app, use the following command inside your project directory:",
                code: `npm start`,
                points: [
                    "Opens a development server at `http://localhost:3000`.",
                    "Automatically reloads the page as you make changes to your code."
                ]
            }
        ],
        summary: "Installing React with CRA provides a quick, standardized way to start a new project with essential tools pre-configured.",
        practiceQuestions: [
            {
                question: "What command is used to create a new React application with Create React App?",
                hint: "The command involves `npx` and specifies a package name."
            },
            {
                question: "Explain the role of Node.js and npm in a React project.",
                hint: "Think about how they manage dependencies."
            },
            {
                question: "How does `npx` differ from `npm`?",
                hint: "Consider how `npx` runs packages without global installation."
            }
        ]
    },
    "react_environment": {
        title: "React Environment and Folder Structure",
        description: "Understand the folder structure generated by Create React App, and learn how to navigate the essential files and folders.",
        sections: [
            {
                title: "Default Folder Structure",
                content: "Create React App generates a specific folder structure to help manage assets, components, and configurations. Each folder has a purpose, making it easier to maintain and scale the application.",
                points: [
                    "`node_modules/`: Contains installed dependencies.",
                    "`public/`: Holds static assets like the HTML file and images.",
                    "`src/`: The primary directory for development, including all React components, styles, and logic."
                ]
            },
            {
                title: "Key Files in the Project",
                content: "Here’s an overview of important files in a typical React project created with CRA.",
                points: [
                    "`package.json`: Manages project dependencies and scripts.",
                    "`public/index.html`: Contains the root HTML structure.",
                    "`src/index.js`: Entry point that renders the React app.",
                    "`src/App.js`: Main application component."
                ]
            }
        ],
        summary: "The default folder structure in React helps organize components, assets, and configurations, streamlining the development process.",
        practiceQuestions: [
            {
                question: "What is the purpose of the `public` folder in a React project?",
                hint: "Think about the files that remain static and are accessible to the browser."
            },
            {
                question: "Describe the role of `src/index.js` in a React application.",
                hint: "Consider where the app is rendered in the HTML file."
            },
            {
                question: "What information is managed by the `package.json` file?",
                hint: "Think about dependencies and project scripts."
            }
        ]
    },
    "jsx_basics": {
        title: "JSX Basics and Rendering Elements",
        description: "Learn about JSX, the syntax extension for JavaScript used in React to describe UI components in a syntax similar to HTML.",
        sections: [
            {
                title: "What is JSX?",
                content: "JSX is a syntax extension for JavaScript that looks similar to HTML, making it easier to define what the UI should look like. JSX is not required to use React, but it makes the code more readable and expressive.",
                points: [
                    "JSX allows embedding JavaScript expressions using `{}`.",
                    "JSX compiles to JavaScript function calls for rendering elements."
                ]
            },
            {
                title: "Rendering Elements",
                content: "To render an element in React, use the `ReactDOM.render()` function, which takes a JSX element and a DOM node as arguments.",
                code: `ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'));`
            }
        ],
        summary: "JSX simplifies writing UI components by allowing HTML-like syntax in JavaScript, improving code readability.",
        practiceQuestions: [
            {
                question: "What does JSX stand for and why is it used in React?",
                hint: "Consider how JSX blends HTML-like syntax with JavaScript."
            },
            {
                question: "How can you embed JavaScript expressions in JSX?",
                hint: "Think about a symbol used to enclose expressions."
            },
            {
                question: "Write a JSX expression to render a `div` with the text 'Welcome to React'.",
                hint: "Consider JSX syntax with an opening and closing tag."
            }
        ]
    },
    "component_basics": {
        title: "Component Basics - Class and Functional Components",
        description: "Learn about two types of components in React: class components and functional components, each serving as building blocks for creating dynamic and reusable UI elements.",
        sections: [
            {
                title: "Functional Components",
                content: "Functional components are simple JavaScript functions that return JSX. They are commonly used for presenting static content or UI without complex logic.",
                code: `function Welcome() {
    return <h1>Hello, world!</h1>;
}`
            },
            {
                title: "Class Components",
                content: "Class components are ES6 classes that extend `React.Component` and must include a `render` method returning JSX. They support lifecycle methods and are more suitable for components requiring state and complex logic.",
                code: `class Welcome extends React.Component {
    render() {
        return <h1>Hello, world!</h1>;
    }
}`
            }
        ],
        summary: "Functional components are simple and stateless, while class components support state and lifecycle methods, providing more control for complex components.",
        practiceQuestions: [
            {
                question: "What is the main difference between a functional and class component?",
                hint: "Think about lifecycle support and syntax."
            },
            {
                question: "Write a simple functional component that returns an `h1` element with 'React Rocks!'.",
                hint: "Consider using `function` syntax with JSX."
            },
            {
                question: "Why might you choose a class component over a functional component?",
                hint: "Think about the need for state or lifecycle methods."
            }
        ]
    },
    "react_styling": {
        title: "Styling in React - CSS, Inline, and CSS Modules",
        description: "Learn about different ways to apply styles in React applications, including traditional CSS, inline styling, and CSS Modules.",
        sections: [
            {
                title: "Using CSS Stylesheets",
                content: "Importing external CSS files is a straightforward way to style React components. Styles in a CSS file apply globally unless scoped through specific selectors.",
                code: `import './App.css'; // Import in the component file`
            },
            {
                title: "Inline Styling",
                content: "Inline styling allows defining styles directly in the component as a JavaScript object, useful for dynamic styling but can become unwieldy for complex designs.",
                code: `const style = { color: 'blue', fontSize: '20px' };
<h1 style={style}>Hello, world!</h1>;`
            },
            {
                title: "CSS Modules",
                content: "CSS Modules scope styles locally, which helps prevent style conflicts. Define styles in a `.module.css` file and import them as an object in the component.",
                code: `import styles from './App.module.css';
<h1 className={styles.title}>Hello, world!</h1>;`
            }
        ],
        summary: "React offers flexible styling options. Choose CSS Modules for component-scoped styles, inline styles for dynamic styling, and global CSS files for overall theming.",
        practiceQuestions: [
            {
                question: "How can you scope styles to a specific component in React?",
                hint: "Think about CSS Modules and file naming conventions."
            },
            {
                question: "Write an inline style object to set the text color to red and font size to 24px.",
                hint: "Define properties as JavaScript key-value pairs."
            },
            {
                question: "What are the advantages of using CSS Modules over regular CSS?",
                hint: "Consider style scoping and component encapsulation."
            }
        ]
    },
    "hooks_intro": {
        title: "Introduction to React Hooks",
        description: "Understand the purpose of React Hooks, a feature that allows functional components to manage state and handle side effects, introduced in React 16.8.",
        sections: [
            {
                title: "What Are React Hooks?",
                content: "Hooks are functions that let you 'hook into' React features like state and lifecycle methods from functional components. They offer a powerful way to create dynamic, stateful components without using class components.",
                points: [
                    "Hooks enable functional components to hold and manage state.",
                    "They streamline code, making it easier to read and maintain."
                ]
            },
            {
                title: "Why Use Hooks?",
                content: "Hooks simplify component code by eliminating the need for lifecycle methods in class components. They also allow for reusability, making logic easier to share across components without complex wrapper patterns or HOCs."
            },
            {
                title: "Rules of Hooks",
                content: "To ensure reliable behavior, React enforces specific rules for Hooks usage:",
                points: [
                    "Hooks should only be called at the top level of the component.",
                    "They must only be used within functional components or custom Hooks.",
                    "Hooks should not be used conditionally to avoid unpredictable behavior."
                ]
            }
        ],
        summary: "React Hooks enable functional components to manage state and side effects, simplifying code and improving reusability.",
        practiceQuestions: [
            {
                question: "What are React Hooks and why were they introduced?",
                hint: "Consider how Hooks simplify state management in functional components."
            },
            {
                question: "Name two rules of using React Hooks and explain why they are important.",
                hint: "Think about consistency and reliability in function execution."
            },
            {
                question: "Describe a scenario where Hooks improve component reusability.",
                hint: "Consider shared logic like fetching data or form handling."
            }
        ]
    },
    "builtin_hooks": {
        title: "Built-in Hooks - useState, useEffect, useContext, useRef",
        description: "Explore the commonly used built-in React Hooks, which offer essential functionality like managing state, handling side effects, accessing context, and interacting with DOM elements.",
        sections: [
            {
                title: "useState",
                content: "The `useState` Hook allows functional components to hold and update state, providing a way to manage dynamic data in the component.",
                code: `const [count, setCount] = useState(0);`
            },
            {
                title: "useEffect",
                content: "The `useEffect` Hook manages side effects in functional components, such as data fetching or subscribing to services. It runs after every render by default, and dependencies can be specified to control when it re-runs.",
                code: `useEffect(() => {
    console.log('Component loaded');
}, []); // Only runs on mount`
            },
            {
                title: "useContext",
                content: "The `useContext` Hook accesses values provided by a Context object, simplifying state management across deeply nested components without prop drilling.",
                code: `const value = useContext(MyContext);`
            },
            {
                title: "useRef",
                content: "The `useRef` Hook provides a way to create mutable references, useful for interacting directly with DOM elements or persisting values between renders without triggering a re-render.",
                code: `const inputRef = useRef(null);`
            }
        ],
        summary: "The built-in Hooks `useState`, `useEffect`, `useContext`, and `useRef` cover common needs in managing state, side effects, context, and references within React components.",
        practiceQuestions: [
            {
                question: "How would you use `useState` to manage a boolean value in a component?",
                hint: "Think about setting up an initial value and updating it conditionally."
            },
            {
                question: "Explain a use case for `useEffect` with a dependency array.",
                hint: "Consider scenarios like data fetching or logging updates."
            },
            {
                question: "How does `useContext` improve component structure?",
                hint: "Consider avoiding prop drilling in nested components."
            }
        ]
    },
    "advanced_hooks": {
        title: "Advanced Hooks - useReducer, useCallback, useMemo",
        description: "Learn about advanced React Hooks for managing complex state, memoizing functions, and optimizing component performance.",
        sections: [
            {
                title: "useReducer",
                content: "The `useReducer` Hook is an alternative to `useState` for managing complex state logic in functional components. It works similarly to Redux, taking a reducer function and an initial state.",
                code: `const [state, dispatch] = useReducer(reducer, initialState);`
            },
            {
                title: "useCallback",
                content: "The `useCallback` Hook returns a memoized function, preventing unnecessary re-creation of functions, which can be useful in optimizing components with frequent re-renders.",
                code: `const memoizedCallback = useCallback(() => { doSomething(); }, [dependency]);`
            },
            {
                title: "useMemo",
                content: "The `useMemo` Hook memoizes a computed value, recalculating it only when dependencies change, useful for optimizing performance-heavy computations.",
                code: `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`
            }
        ],
        summary: "Advanced Hooks like `useReducer`, `useCallback`, and `useMemo` enhance state management and performance optimization in React applications.",
        practiceQuestions: [
            {
                question: "When would you prefer `useReducer` over `useState`?",
                hint: "Think about managing complex or nested state logic."
            },
            {
                question: "How does `useCallback` help with performance?",
                hint: "Consider how it reduces unnecessary re-creation of functions."
            },
            {
                question: "Provide an example of when `useMemo` would be beneficial.",
                hint: "Consider heavy computations dependent on specific variables."
            }
        ]
    },
    "lifecycle_events": {
        title: "Component Lifecycle and Event Handling",
        description: "Understand the lifecycle of React components, including mounting, updating, and unmounting phases, as well as handling user events.",
        sections: [
            {
                title: "Component Lifecycle Phases",
                content: "React components go through three main phases in their lifecycle:",
                points: [
                    "Mounting: The component is created and inserted into the DOM.",
                    "Updating: The component re-renders due to state or prop changes.",
                    "Unmounting: The component is removed from the DOM."
                ]
            },
            {
                title: "Event Handling",
                content: "React uses synthetic events to handle user interactions, offering cross-browser compatibility and making event management easier. Events are attached using camelCase syntax, like `onClick`.",
                code: `<button onClick={handleClick}>Click me</button>`
            }
        ],
        summary: "Component lifecycle phases dictate when components are created, updated, or removed, while event handling in React simplifies user interaction management.",
        practiceQuestions: [
            {
                question: "Name and describe the three main lifecycle phases of a React component.",
                hint: "Consider phases around the component's existence in the DOM."
            },
            {
                question: "Explain the purpose of synthetic events in React.",
                hint: "Think about cross-browser compatibility and event management."
            },
            {
                question: "How would you create an event handler for a button click in React?",
                hint: "Consider using a function and an event handler prop."
            }
        ]
    },
    "state_management": {
        title: "State Management - Pitfalls and Best Practices",
        description: "Learn about the common pitfalls of managing state in React and best practices for ensuring consistency and performance in component updates.",
        sections: [
            {
                title: "Common Pitfalls in State Management",
                content: "Managing state effectively in React can be challenging, especially as components grow in complexity.",
                points: [
                    "Avoid mutating state directly; always use state update functions.",
                    "Beware of stale closures when working with asynchronous updates.",
                    "Minimize state at the highest possible level to avoid unnecessary re-renders."
                ]
            },
            {
                title: "Best Practices for State Management",
                content: "To maintain efficient state management in React, consider these best practices:",
                points: [
                    "Use local component state only when necessary.",
                    "Leverage context or state libraries (like Redux) for global state.",
                    "Memoize expensive computations and functions to optimize rendering."
                ]
            }
        ],
        summary: "Effective state management requires avoiding common mistakes and following best practices to ensure efficient, maintainable components.",
        practiceQuestions: [
            {
                question: "Why is it important to avoid mutating state directly?",
                hint: "Think about how React detects changes and triggers re-renders."
            },
            {
                question: "Describe a scenario where stale closures might cause issues.",
                hint: "Consider how asynchronous operations may access outdated variables."
            },
            {
                question: "What are some best practices for managing global state?",
                hint: "Think about contexts and state management libraries."
            }
        ]
    },
    "forms_handling": {
        title: "Adding and Handling Forms in React",
        description: "Learn how to add and handle forms in React, including form elements, state management, and form submission.",
        sections: [
            {
                title: "Creating Forms in React",
                content: "Forms in React are built using JSX just like other elements. Each form element, such as `input`, `textarea`, and `select`, can have its own state and event handlers. Forms are commonly used to collect user data, making form handling a key aspect of building dynamic applications."
            },
            {
                title: "Handling Form Data",
                content: "To handle form data in React, we generally use the `useState` hook to manage the form’s state. Each input element is connected to a state variable and an event handler that updates the state whenever the input value changes.",
                code: `const [name, setName] = useState('');\n\n<input type="text" value={name} onChange={(e) => setName(e.target.value)} />`
            },
            {
                title: "Submitting Forms",
                content: "In React, form submission is handled by setting an `onSubmit` event handler for the `form` element. In the event handler, `event.preventDefault()` is used to prevent the default form submission and execute custom code, like sending data to a server.",
                code: `<form onSubmit={handleSubmit}>\n  <button type="submit">Submit</button>\n</form>\n\nfunction handleSubmit(event) {\n  event.preventDefault();\n  console.log('Form submitted');\n}`
            }
        ],
        summary: "Forms in React allow data collection through inputs, with state management and event handling enabling dynamic interactions and form submissions.",
        practiceQuestions: [
            {
                question: "What role does `useState` play in form handling in React?",
                hint: "Consider how `useState` manages input values."
            },
            {
                question: "Why is `event.preventDefault()` used in form submission?",
                hint: "Think about preventing the default form action."
            },
            {
                question: "How do you connect an input element to a state variable in React?",
                hint: "Consider both value binding and change handling."
            }
        ]
    },
    "controlled_uncontrolled": {
        title: "Controlled vs Uncontrolled Components",
        description: "Understand the differences between controlled and uncontrolled components in React and how to decide which to use.",
        sections: [
            {
                title: "Controlled Components",
                content: "In controlled components, form data is handled by React state. Each form element is connected to a state variable, and any change to the input updates the state. This approach gives us full control over the form data and makes it easy to access the current input values at any time.",
                code: `const [name, setName] = useState('');\n\n<input type="text" value={name} onChange={(e) => setName(e.target.value)} />`
            },
            {
                title: "Uncontrolled Components",
                content: "Uncontrolled components maintain their own internal state and do not rely on React state. You can access the input values using a `ref` to get the DOM element's current value. This approach is useful for simpler forms or when you don’t need real-time data binding.",
                code: `const nameRef = useRef();\n\n<input type="text" ref={nameRef} />`
            },
            {
                title: "Choosing Between Controlled and Uncontrolled Components",
                content: "Controlled components are preferred when form data needs validation or immediate feedback, as React has full control over the data. Uncontrolled components are useful for quick, basic forms without complex data handling requirements."
            }
        ],
        summary: "Controlled components use React state to manage form data, offering full control, while uncontrolled components manage their own internal state, often accessed with refs.",
        practiceQuestions: [
            {
                question: "What is the key difference between controlled and uncontrolled components?",
                hint: "Consider how each type manages form data."
            },
            {
                question: "When would you use an uncontrolled component over a controlled one?",
                hint: "Think about simplicity versus control in form handling."
            },
            {
                question: "How do you access the current value of an uncontrolled component?",
                hint: "Consider how refs work in React."
            }
        ]
    },
    "form_validation": {
        title: "Form Validation - Error Handling",
        description: "Learn how to handle form validation in React to ensure data accuracy and provide feedback to users.",
        sections: [
            {
                title: "Client-Side Validation",
                content: "In React, form validation can be implemented by checking form values before allowing submission. This might include checks for required fields, formats (e.g., email), or value limits. Validation is typically handled in `onChange` or `onSubmit` handlers."
            },
            {
                title: "Displaying Error Messages",
                content: "To display validation errors, set up error state variables and update them based on validation conditions. Show error messages conditionally based on these variables to guide users in correcting mistakes.",
                code: `const [email, setEmail] = useState('');\nconst [error, setError] = useState('');\n\nfunction handleChange(e) {\n  setEmail(e.target.value);\n  if (!validateEmail(e.target.value)) {\n    setError('Invalid email address');\n  } else {\n    setError('');\n  }\n}`
            },
            {
                title: "Error Handling on Submission",
                content: "Validate all form fields on submission to ensure data integrity before proceeding. If validation fails, prevent form submission and display appropriate error messages.",
                code: `function handleSubmit(event) {\n  event.preventDefault();\n  if (!email) {\n    setError('Email is required');\n  } else if (!validateEmail(email)) {\n    setError('Invalid email format');\n  }\n}`
            }
        ],
        summary: "Effective form validation and error handling ensure data integrity and enhance user experience, with error messages guiding users to input correct data.",
        practiceQuestions: [
            {
                question: "How can you provide real-time validation in React?",
                hint: "Consider using the `onChange` handler for each input."
            },
            {
                question: "What is a common approach for displaying validation errors to users?",
                hint: "Think about conditional rendering based on error states."
            },
            {
                question: "Why is it important to handle errors on form submission?",
                hint: "Consider data integrity and preventing invalid submissions."
            }
        ]
    },
    "http_fetch_axios": {
        title: "Fetching Data with Fetch API and Axios",
        description: "Learn how to fetch data in React using the Fetch API and Axios, including error handling and managing asynchronous operations.",
        sections: [
            {
                title: "Using the Fetch API",
                content: "The Fetch API provides a way to make network requests similar to XMLHttpRequest. It returns a promise that resolves to the response of the request. Use `.then()` to handle the response and `.catch()` for errors.",
                code: `fetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Error:', error));`
            },
            {
                title: "Using Axios for HTTP Requests",
                content: "Axios is a promise-based HTTP client for JavaScript that simplifies making HTTP requests. It automatically transforms response data into JSON and provides better error handling.",
                code: `import axios from 'axios';\n\naxios.get('https://api.example.com/data')\n  .then(response => console.log(response.data))\n  .catch(error => console.error('Error:', error));`
            },
            {
                title: "Error Handling",
                content: "Handling errors is crucial in network requests. Use `.catch()` in Fetch or the `catch` method in Axios to handle errors gracefully and provide feedback to users.",
                points: [
                    "Check for HTTP response status codes to determine success or failure.",
                    "Implement fallback mechanisms or user notifications in case of errors.",
                    "Consider retrying requests in case of temporary failures."
                ]
            }
        ],
        summary: "Both the Fetch API and Axios allow you to make HTTP requests in React applications, with Axios providing additional features like automatic JSON parsing and enhanced error handling.",
        practiceQuestions: [
            {
                question: "What is the main difference between Fetch API and Axios?",
                hint: "Think about how each handles responses and errors."
            },
            {
                question: "How can you handle errors in Fetch API?",
                hint: "Consider using `.catch()` method."
            },
            {
                question: "Write a simple function to fetch data from an API using Axios.",
                hint: "Use `axios.get()` and remember to handle the response."
            }
        ]
    },
    "http_methods": {
        title: "GET, POST, PUT, and DELETE Requests",
        description: "Understand the different HTTP methods and how to use them to manage data in your React applications.",
        sections: [
            {
                title: "GET Requests",
                content: "GET requests are used to retrieve data from a server. You can use either Fetch or Axios to make GET requests. Always ensure that the requested data is available on the server.",
                code: `axios.get('https://api.example.com/data')\n  .then(response => console.log(response.data));`
            },
            {
                title: "POST Requests",
                content: "POST requests are used to send data to a server, typically for creating new resources. When sending data, ensure to stringify the payload if using Fetch.",
                code: `axios.post('https://api.example.com/data', { name: 'New Item' })\n  .then(response => console.log(response.data));`
            },
            {
                title: "PUT Requests",
                content: "PUT requests are used to update existing resources on a server. Similar to POST, you need to send the updated data in the request body.",
                code: `axios.put('https://api.example.com/data/1', { name: 'Updated Item' })\n  .then(response => console.log(response.data));`
            },
            {
                title: "DELETE Requests",
                content: "DELETE requests are used to remove resources from a server. Always confirm the action before executing a DELETE request to prevent accidental data loss.",
                code: `axios.delete('https://api.example.com/data/1')\n  .then(response => console.log('Item deleted'));`
            }
        ],
        summary: "GET, POST, PUT, and DELETE are fundamental HTTP methods used to interact with APIs. Understanding how to use these methods effectively is key to managing data in your applications.",
        practiceQuestions: [
            {
                question: "What HTTP method would you use to create a new resource?",
                hint: "Consider how you would add new data to the server."
            },
            {
                question: "How can you retrieve a specific resource using its ID?",
                hint: "Think about how you would structure your GET request."
            },
            {
                question: "Write an Axios call to update an existing item with ID 2.",
                hint: "Use the `put` method and include the updated data."
            }
        ]
    },
    "react_router_setup": {
        title: "Setting up React Router for Navigation",
        description: "Learn how to set up and use React Router to enable navigation between different components in your React application.",
        sections: [
            {
                title: "Installing React Router",
                content: "To use React Router, install it via npm or yarn. It allows for dynamic routing and provides components to manage navigation.",
                code: `npm install react-router-dom`
            },
            {
                title: "Creating Routes",
                content: "Wrap your application in a `BrowserRouter` component and define routes using the `Route` component. Each route specifies a path and the component to render.",
                code: `<BrowserRouter>\n  <Route path="/" component={Home} />\n  <Route path="/about" component={About} />\n</BrowserRouter>`
            },
            {
                title: "Linking Between Pages",
                content: "Use the `Link` component to navigate between routes without reloading the page. This improves user experience by keeping the application state.",
                code: `<Link to="/about">Go to About</Link>`
            }
        ],
        summary: "React Router provides a powerful way to manage navigation and routing in single-page applications, allowing users to navigate without full page reloads.",
        practiceQuestions: [
            {
                question: "What is the purpose of the `BrowserRouter` component?",
                hint: "Think about how routing is managed in a React application."
            },
            {
                question: "How do you define a new route in React Router?",
                hint: "Consider the syntax of the `Route` component."
            },
            {
                question: "Explain the difference between `Link` and `a` tag in React Router.",
                hint: "Think about the effects on page load and state."
            }
        ]
    },
    "data_passing": {
        title: "Passing Data Between Pages with Query Params",
        description: "Learn how to pass data between different components using query parameters in React Router.",
        sections: [
            {
                title: "Using Query Parameters",
                content: "Query parameters can be included in the URL to pass data between routes. Use the `useLocation` hook to access these parameters in the destination component.",
                code: `import { useLocation } from 'react-router-dom';\n\nfunction Component() {\n  const { search } = useLocation();\n  const queryParams = new URLSearchParams(search);\n  const name = queryParams.get('name');\n}`
            },
            {
                title: "Constructing Links with Query Parameters",
                content: "You can construct links with query parameters using template literals or string concatenation. This allows users to navigate with specific data.",
                code: "<Link to={` / destination ? name = ${ userName }`}>Go to Destination</Link>"
            },
            {
                title: "Handling Missing Parameters",
                content: "Always check for the existence of query parameters before using them. Implement fallback values or error handling if parameters are missing.",
                points: [
                    "Use conditionals to check if the parameter exists.",
                    "Provide default values or messages when parameters are absent."
                ]
            }
        ],
        summary: "Passing data through query parameters in React Router enables you to maintain state across different pages and improve user experience.",
        practiceQuestions: [
            {
                question: "How do you access query parameters in a component?",
                hint: "Consider the hooks available in React Router."
            },
            {
                question: "What method would you use to construct a link with query parameters?",
                hint: "Think about how URLs are formatted."
            },
            {
                question: "What precautions should you take when using query parameters?",
                hint: "Consider handling cases where parameters may be missing."
            }
        ]
    },
    "redux_basics": {
        title: "Redux Basics and Store Setup",
        description: "Learn the fundamentals of Redux, including how to set up a Redux store and understand the core concepts of state management.",
        sections: [
            {
                title: "What is Redux?",
                content: "Redux is a state management library for JavaScript applications, providing a centralized store for state that can be accessed and modified throughout the application.",
                points: [
                    "Helps manage application state in a predictable way.",
                    "Enables time travel debugging and easier testing."
                ]
            },
            {
                title: "Setting Up the Redux Store",
                content: "To set up a Redux store, import `createStore` from Redux and define your reducers. The store holds the complete state tree of your app.",
                code: `import { createStore } from 'redux';\n\nconst store = createStore(rootReducer);`
            },
            {
                title: "Providing the Store",
                content: "Wrap your application in the `Provider` component from `react-redux` to make the store available to all components.",
                code: `import { Provider } from 'react-redux';\n\n<Provider store={store}>\n  <App />\n</Provider>`
            }
        ],
        summary: "Understanding the basics of Redux and how to set up the store is essential for managing state in larger React applications effectively.",
        practiceQuestions: [
            {
                question: "What is the role of the Redux store?",
                hint: "Think about how it relates to state management in the application."
            },
            {
                question: "How do you provide the Redux store to your React application?",
                hint: "Consider the components used for integration."
            },
            {
                question: "What are reducers in Redux?",
                hint: "Reflect on how they relate to state changes."
            }
        ]
    },
    "redux_flow": {
        title: "Understanding Redux Flow and Dispatching Actions",
        description: "Dive deeper into the Redux flow, including how to dispatch actions and update the store's state based on user interactions.",
        sections: [
            {
                title: "The Redux Flow",
                content: "The Redux flow consists of three main steps: dispatching an action, the reducer processes the action, and the state is updated in the store. The components re-render based on the new state.",
                points: [
                    "1. Action is dispatched by the component.",
                    "2. Reducer processes the action.",
                    "3. Store updates the state."
                ]
            },
            {
                title: "Dispatching Actions",
                content: "To update the state in the store, components can dispatch actions using the `dispatch` function. Actions are plain objects that describe what happened.",
                code: `const incrementAction = { type: 'INCREMENT' };\n\nstore.dispatch(incrementAction);`
            },
            {
                title: "Creating Action Creators",
                content: "Action creators are functions that return action objects. They help simplify the dispatching process, especially for complex actions.",
                code: `const increment = () => ({ type: 'INCREMENT' });\n\nstore.dispatch(increment());`
            }
        ],
        summary: "Understanding the flow of Redux and how to dispatch actions is crucial for managing application state and ensuring components react to changes properly.",
        practiceQuestions: [
            {
                question: "Explain the steps of the Redux flow.",
                hint: "Break it down into action, reducer, and store update."
            },
            {
                question: "What is an action in Redux?",
                hint: "Think about how it communicates changes."
            },
            {
                question: "How do you create an action creator?",
                hint: "Consider the purpose of the function."
            }
        ]
    },
    "redux_connect": {
        title: "Connecting Components to Redux Store",
        description: "Learn how to connect React components to the Redux store, enabling them to access state and dispatch actions.",
        sections: [
            {
                title: "Using `connect`",
                content: "The `connect` function from `react-redux` allows you to connect your components to the Redux store. It maps state and dispatch to component props.",
                code: `import { connect } from 'react-redux';\n\nconst mapStateToProps = (state) => ({ count: state.count });\n\nconst mapDispatchToProps = (dispatch) => ({\n  increment: () => dispatch(increment()),\n});\n\nexport default connect(mapStateToProps, mapDispatchToProps)(MyComponent);`
            },
            {
                title: "Using `useSelector` and `useDispatch` Hooks",
                content: "The `useSelector` hook allows functional components to access state from the Redux store, while `useDispatch` allows you to dispatch actions without connecting the component.",
                code: `import { useSelector, useDispatch } from 'react-redux';\n\nconst MyComponent = () => {\n  const count = useSelector((state) => state.count);\n  const dispatch = useDispatch();\n\n  return (\n    <div>\n      <button onClick={() => dispatch(increment())}>Increment</button>\n      <p>{count}</p>\n    </div>\n  );\n};`
            }
        ],
        summary: "Connecting components to the Redux store is essential for enabling your components to respond to state changes and interact with the global state.",
        practiceQuestions: [
            {
                question: "What is the purpose of the `connect` function?",
                hint: "Consider how it integrates Redux with React components."
            },
            {
                question: "How can functional components access Redux state without using `connect`?",
                hint: "Think about the hooks available."
            },
            {
                question: "What are the benefits of using `useSelector` and `useDispatch`?",
                hint: "Reflect on how they simplify component logic."
            }
        ]
    },
    "debugging_deployment": {
        title: "Debugging and Deploying React Applications",
        description: "Learn essential techniques for debugging React applications and best practices for deploying them to production.",
        sections: [
            {
                title: "Debugging React Applications",
                content: "Debugging can be done using various tools like React Developer Tools and browser console. Log statements, error boundaries, and debugging libraries can also aid in the process.",
                points: [
                    "Use React Developer Tools to inspect component hierarchy and state.",
                    "Implement error boundaries to catch and handle errors gracefully."
                ]
            },
            {
                title: "Testing Your Application",
                content: "Before deploying, ensure your application is thoroughly tested. Use libraries like Jest and React Testing Library for unit and integration testing.",
                code: `import { render, screen } from '@testing-library/react';\n\ntest('renders learn react link', () => {\n  render(<App />);\n  const linkElement = screen.getByText(/learn react/i);\n  expect(linkElement).toBeInTheDocument();\n});`
            },
            {
                title: "Deploying React Applications",
                content: "React applications can be deployed using platforms like Vercel, Netlify, or GitHub Pages. Ensure your application is optimized for production before deployment.",
                points: [
                    "Use `npm run build` to create an optimized production build.",
                    "Follow deployment platform instructions for proper setup."
                ]
            }
        ],
        summary: "Debugging and deploying your React applications effectively ensures a smooth user experience and allows for timely updates and fixes.",
        practiceQuestions: [
            {
                question: "What tools can you use for debugging React applications?",
                hint: "Consider both built-in and external tools."
            },
            {
                question: "Why is testing important before deployment?",
                hint: "Think about the implications of untested code."
            },
            {
                question: "What command do you run to prepare a React app for production?",
                hint: "Recall the script typically included in `package.json`."
            }
        ]
    }
}
