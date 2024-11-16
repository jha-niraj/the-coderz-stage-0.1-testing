export const units = [
    {
        title: "Unit I: Basics and Introduction to C",
        youtube: "https://www.youtube.com/watch?v=xDHSP_hyWJA&t=0s",
        quizlink: "",
        lessons: [
            { name: "Program Development in C", lessonkey: "progdevc" },
            { name: "Structured Programming with Algorithms and Flowcharts", lessonkey: "structuredprog" },
            { name: "C Character Set, Identifiers, and Keywords", lessonkey: "charidentkeywords" },
            { name: "Data Types, Constants, and Variables", lessonkey: "datatypes" },
            { name: "Operators in C", lessonkey: "operatorsc" }
        ]
    },
    {
        title: "Unit II: Control Structures and Input/Output",
        youtube: "https://www.youtube.com/watch?v=xDHSP_hyWJA&t=98592s",
        quizlink: "",
        lessons: [
            { name: "If and If-Else Statements", lessonkey: "ifelse" },
            { name: "Switch Case Statements", lessonkey: "switch" },
            { name: "Loops (For, While, Do-While)", lessonkey: "loops" },
            { name: "Break and Continue Statements", lessonkey: "breakcontinue" },
            { name: "Formatted and Unformatted I/O", lessonkey: "io" }
        ]
    },
    {
        title: "Unit III: Functions and Storage Classes",
        youtube: "https://www.youtube.com/watch?v=xDHSP_hyWJA&t=139841s",
        quizlink: "",
        lessons: [
            { name: "Function Prototypes and Definitions", lessonkey: "funcproto" },
            { name: "Passing Arguments (By Value and Reference)", lessonkey: "arguments" },
            { name: "Recursive Functions", lessonkey: "recursion" },
            { name: "Scope Rules and Storage Classes", lessonkey: "storageclass" }
        ]
    },
    {
        title: "Unit IV: Arrays in C",
        youtube: "https://www.youtube.com/watch?v=xDHSP_hyWJA&t=123803s",
        quizlink: "",
        lessons: [
            { name: "Declaring and Initializing Arrays", lessonkey: "arrays" },
            { name: "One-Dimensional and Two-Dimensional Arrays", lessonkey: "arrays2d" },
            { name: "Searching in Arrays (Linear and Binary)", lessonkey: "searching" },
            { name: "Sorting Arrays (Bubble Sort)", lessonkey: "sorting" }
        ]
    },
    {
        title: "Unit V: Pointers and Dynamic Memory Allocation",
        youtube: "https://www.youtube.com/watch?v=xDHSP_hyWJA&t=115719s",
        quizlink: "",
        lessons: [
            { name: "Pointer Basics and Types", lessonkey: "pointers" },
            { name: "Pointer Arithmetic and Expressions", lessonkey: "pointerarithmetic" },
            { name: "Dynamic Memory Management (malloc, calloc, realloc)", lessonkey: "dynamicmem" },
            { name: "Pointers and Arrays", lessonkey: "pointerarrays" }
        ]
    },
    {
        title: "Unit VI: Strings and User-Defined Types",
        youtube: "https://www.youtube.com/watch?v=xDHSP_hyWJA&t=131238s",
        quizlink: "",
        lessons: [
            { name: "Working with Strings", lessonkey: "strings" },
            { name: "String Manipulation Functions", lessonkey: "stringfuncs" },
            { name: "Structures in C", lessonkey: "structures" },
            { name: "Unions and Nested Structures", lessonkey: "unions" }
        ]
    }
];

export const lessonData = {
    'progdevc': {
        title: "Program Development in C",
        description: "Understand the steps of developing programs in C, from planning to coding and testing.",
        sections: [
            {
                title: "Introduction to Program Development",
                content: "Program development is a process that involves planning, writing, and testing code. In C, this process includes understanding the problem, designing a solution, coding, and debugging."
            },
            {
                title: "Steps of Program Development",
                content: "The key steps in developing a C program are:",
                points: [
                    "Defining the Problem: Identify what you need the program to do.",
                    "Planning the Solution: Design the solution using algorithms and flowcharts.",
                    "Coding: Write the program using C syntax and constructs.",
                    "Testing and Debugging: Run the program and fix any errors.",
                    "Documentation and Maintenance: Keep records of the program and update it as necessary."
                ]
            },
            {
                title: "Example of a Simple C Program",
                content: "Let's start with a simple program to display a message.",
                code: `#include <stdio.h>
    int main() {
        printf("Welcome to C Programming!");
        return 0;
    }`
            }
        ],
        practiceQuestions: [
            {
                question: "Write a C program that displays 'Learning C is fun!' on the screen.",
                hint: "Use the printf function to output text."
            },
            {
                question: "List the key steps in program development and describe each step briefly.",
                hint: "Refer to the steps mentioned in the lesson."
            },
            {
                question: "Write a short paragraph explaining why testing is important in program development.",
                hint: "Think about how testing ensures that the program meets the requirements."
            }
        ]
    },
    'structuredprog': {
        title: "Structured Programming with Algorithms and Flowcharts",
        description: "Learn the basics of structured programming and how to use algorithms and flowcharts to plan your programs.",
        sections: [
            {
                title: "What is Structured Programming?",
                content: "Structured programming is a method of organizing code in a clear, logical sequence. It focuses on breaking down tasks into manageable sections, making code easier to understand and debug."
            },
            {
                title: "Understanding Algorithms",
                content: "An algorithm is a step-by-step method for solving a problem. It acts as a recipe for creating a program and is essential in structured programming.",
                code: `// Example of an algorithm to add two numbers:
    // Step 1: Start
    // Step 2: Input two numbers, a and b
    // Step 3: Calculate sum = a + b
    // Step 4: Output the sum
    // Step 5: End`
            },
            {
                title: "Creating Flowcharts",
                content: "A flowchart is a visual representation of an algorithm using symbols. It's helpful for planning before coding.",
                points: [
                    "Start/End symbols indicate the beginning and end of the process.",
                    "Arrows show the flow of the process.",
                    "Process symbols (rectangles) represent actions.",
                    "Decision symbols (diamonds) represent choices."
                ]
            }
        ],
        practiceQuestions: [
            {
                question: "Create an algorithm to calculate the area of a rectangle.",
                hint: "The formula is area = length * width."
            },
            {
                question: "Draw a flowchart to find the largest of three numbers.",
                hint: "Use decision symbols to compare numbers."
            },
            {
                question: "Explain in your words why structured programming makes debugging easier.",
                hint: "Think about how structured code is organized in a clear way."
            }
        ]
    },
    'charidentkeywords': {
        title: "C Character Set, Identifiers, and Keywords",
        description: "Explore the basics of characters, identifiers, and reserved keywords in C programming.",
        sections: [
            {
                title: "C Character Set",
                content: "The C character set includes all characters that the C language understands, including letters, digits, and symbols used in code."
            },
            {
                title: "Identifiers",
                content: "Identifiers are names given to variables, functions, and other user-defined items. They can include letters, digits, and underscores, but must start with a letter or an underscore."
            },
            {
                title: "Keywords in C",
                content: "Keywords are reserved words in C that have special meanings. You cannot use these as identifiers. Some common keywords are:",
                points: [
                    "int - used for integer data type",
                    "return - exits a function and returns a value",
                    "if - used for conditional statements",
                    "while - starts a loop"
                ]
            }
        ],
        practiceQuestions: [
            {
                question: "Write a list of 5 keywords you cannot use as variable names in C.",
                hint: "Look for words like 'if' or 'int'."
            },
            {
                question: "Create identifiers for a student's name, age, and grade, following C naming conventions.",
                hint: "Identifiers should be descriptive and use lowercase letters."
            },
            {
                question: "What will happen if you try to use a keyword as an identifier?",
                hint: "Think about why keywords have special meanings."
            }
        ]
    },
    'datatypes': {
        title: "Data Types, Constants, and Variables",
        description: "Learn about the different types of data in C, and how to declare constants and variables.",
        sections: [
            {
                title: "Introduction to Data Types",
                content: "Data types define the kind of data a variable can store. In C, data types help the program know how much memory to allocate for a variable."
            },
            {
                title: "Basic Data Types in C",
                content: "Some basic data types in C include:",
                points: [
                    "int - used for integers (whole numbers)",
                    "float - used for floating-point (decimal) numbers",
                    "char - used for single characters",
                    "double - used for larger floating-point numbers"
                ]
            },
            {
                title: "Constants",
                content: "Constants are values that do not change during the program's execution. They are defined using the 'const' keyword or #define."
            },
            {
                title: "Declaring Variables",
                content: "Variables store data values. You must declare a variable by specifying its data type and name.",
                code: `int age = 21;
    float price = 10.99;`
            }
        ],
        practiceQuestions: [
            {
                question: "Declare a constant for the value of Pi (3.14) and use it to calculate the area of a circle.",
                hint: "Use const float PI = 3.14;"
            },
            {
                question: "What data type would you use to store a person's age and why?",
                hint: "Consider if a person's age can be a decimal."
            },
            {
                question: "Write a C program to declare variables for a student's name, age, and grade, and print them.",
                hint: "Use the printf function to display each variable."
            }
        ]
    },
    'operatorsc': {
        title: "Operators in C",
        description: "Understand the operators in C, from arithmetic to logical and bitwise operations.",
        sections: [
            {
                title: "Arithmetic Operators",
                content: "Arithmetic operators perform basic math operations. Common operators include + (add), - (subtract), * (multiply), and / (divide)."
            },
            {
                title: "Relational Operators",
                content: "Relational operators compare values. Examples are: == (equal to), != (not equal to), > (greater than), < (less than)."
            },
            {
                title: "Logical Operators",
                content: "Logical operators combine conditional statements. Examples are: && (AND), || (OR), and ! (NOT)."
            },
            {
                title: "Assignment Operators",
                content: "Assignment operators assign values to variables, such as =, +=, and -=."
            }
        ],
        practiceQuestions: [
            {
                question: "Write a program to calculate the remainder when dividing two numbers entered by the user.",
                hint: "Use the % operator for modulus."
            },
            {
                question: "Write a program to check if two numbers are equal.",
                hint: "Use the == operator to compare the values."
            },
            {
                question: "Write a C program that demonstrates the use of logical operators.",
                hint: "Try creating a program that uses && or || in an if statement."
            }
        ]
    },
    'ifelse': {
        title: "If and If-Else Statements",
        description: "Learn about conditional statements in C and how to control the flow of a program using `if` and `if-else`.",
        sections: [
            {
                title: "What is an If Statement?",
                content: "The `if` statement lets you execute code only if a certain condition is true. If the condition is false, the code inside the `if` block is skipped.",
                code: `int age = 18;
    if (age >= 18) {
        printf("You are eligible to vote.");
    }`
            },
            {
                title: "The If-Else Statement",
                content: "The `if-else` statement provides an alternative action if the `if` condition is false.",
                code: `int age = 16;
    if (age >= 18) {
        printf("You are eligible to vote.");
    } else {
        printf("You are not eligible to vote yet.");
    }`
            },
            {
                title: "Nested If-Else Statements",
                content: "You can place one `if-else` statement inside another. This is useful for checking multiple conditions.",
                code: `int marks = 85;
    if (marks >= 90) {
        printf("Grade: A");
    } else if (marks >= 75) {
        printf("Grade: B");
    } else {
        printf("Grade: C");
    }`
            }
        ],
        practiceQuestions: [
            {
                question: "Write an `if-else` program that checks if a number is even or odd.",
                hint: "Use the modulus operator % to check divisibility."
            },
            {
                question: "Modify the example to display 'Excellent' if marks are 90 or above, 'Good' if 75 or above, and 'Needs Improvement' otherwise.",
                hint: "Use nested `if-else` statements for this."
            },
            {
                question: "Explain in your own words how `if-else` statements help in decision-making in a program.",
                hint: "Think about how they allow different actions based on conditions."
            }
        ]
    },
    'switch': {
        title: "Switch Case Statements",
        description: "Understand the `switch` statement in C, useful for handling multiple conditions in a simpler way than multiple `if-else` statements.",
        sections: [
            {
                title: "What is a Switch Statement?",
                content: "The `switch` statement allows you to choose one of many options based on the value of a variable.",
                code: `int day = 3;
    switch (day) {
        case 1:
            printf("Monday");
            break;
        case 2:
            printf("Tuesday");
            break;
        case 3:
            printf("Wednesday");
            break;
        default:
            printf("Unknown day");
    }`
            },
            {
                title: "The Break Statement in Switch",
                content: "Each case ends with a `break` statement to prevent 'fall through', meaning stopping once the matching case is executed.",
                code: `switch (grade) {
        case 'A':
            printf("Excellent!");
            break;
        case 'B':
            printf("Good job!");
            break;
        default:
            printf("Keep trying!");
    }`
            },
            {
                title: "Using Default in Switch",
                content: "The `default` case runs if no other case matches, making it a catch-all for unmatched cases."
            }
        ],
        practiceQuestions: [
            {
                question: "Write a program using `switch` to display the day of the week based on a number (1 for Monday, 2 for Tuesday, etc.).",
                hint: "Use `switch` with cases from 1 to 7."
            },
            {
                question: "Create a `switch` program that outputs a grade message based on the grade letter entered (A, B, C, etc.).",
                hint: "Remember to add a `default` case for unrecognized grades."
            },
            {
                question: "Why is the `break` statement important in a `switch` case?",
                hint: "Think about what would happen if you didn't stop after the matched case."
            }
        ]
    },
    'loops': {
        title: "Loops (For, While, Do-While)",
        description: "Learn how to repeat actions with `for`, `while`, and `do-while` loops in C programming.",
        sections: [
            {
                title: "The For Loop",
                content: "The `for` loop is used when you know how many times you want to repeat a block of code.",
                code: `for (int i = 1; i <= 5; i++) {
        printf("Hello %d\\n", i);
    }`
            },
            {
                title: "The While Loop",
                content: "The `while` loop repeats as long as a specified condition is true.",
                code: `int count = 1;
    while (count <= 5) {
        printf("Hello %d\\n", count);
        count++;
    }`
            },
            {
                title: "The Do-While Loop",
                content: "The `do-while` loop runs at least once and continues as long as the condition is true.",
                code: `int count = 1;
    do {
        printf("Hello %d\\n", count);
        count++;
    } while (count <= 5);`
            }
        ],
        practiceQuestions: [
            {
                question: "Write a `for` loop to print numbers 1 to 10.",
                hint: "Use `for` loop with starting and ending values."
            },
            {
                question: "Create a `while` loop that keeps doubling a number until it reaches 100.",
                hint: "Set a starting value and keep doubling it."
            },
            {
                question: "Explain the main difference between `while` and `do-while` loops.",
                hint: "Consider when the condition is checked in each."
            }
        ]
    },
    'breakcontinue': {
        title: "Break and Continue Statements",
        description: "Learn how `break` and `continue` statements control the flow in loops.",
        sections: [
            {
                title: "Using Break in Loops",
                content: "The `break` statement exits a loop immediately, regardless of the condition.",
                code: `for (int i = 1; i <= 10; i++) {
        if (i == 5) {
            break;
        }
        printf("%d ", i);
    }` // Output: 1 2 3 4
            },
            {
                title: "Using Continue in Loops",
                content: "The `continue` statement skips the rest of the code in the loop and moves to the next iteration.",
                code: `for (int i = 1; i <= 10; i++) {
        if (i == 5) {
            continue;
        }
        printf("%d ", i);
    }` // Output: 1 2 3 4 6 7 8 9 10
            }
        ],
        practiceQuestions: [
            {
                question: "Write a loop that prints numbers from 1 to 10 but skips 5 using `continue`.",
                hint: "Use `if` condition to skip 5."
            },
            {
                question: "Modify the loop to stop entirely when it reaches 5 using `break`.",
                hint: "Place `break` when `i == 5`."
            },
            {
                question: "Explain when you might prefer `continue` over `break` in a loop.",
                hint: "Consider if you want to skip or stop the loop."
            }
        ]
    },
    'io': {
        title: "Formatted and Unformatted I/O",
        description: "Discover how to input and output data in C using formatted and unformatted methods.",
        sections: [
            {
                title: "Formatted Input and Output",
                content: "`printf` and `scanf` are formatted I/O functions, meaning you can specify the data type for input/output.",
                code: `int age;
    printf("Enter your age: ");
    scanf("%d", &age);
    printf("You entered: %d", age);`
            },
            {
                title: "Unformatted Input and Output",
                content: "Unformatted I/O functions, like `getchar`, `putchar`, `gets`, and `puts`, handle characters and strings without specific data formatting.",
                code: `char ch;
    printf("Enter a character: ");
    ch = getchar();
    putchar(ch);`
            }
        ],
        practiceQuestions: [
            {
                question: "Write a program to take a string as input and display it using `gets` and `puts`.",
                hint: "Use `gets` to read the string and `puts` to print it."
            },
            {
                question: "Create a program that takes two integers as input and displays their sum.",
                hint: "Use `scanf` for input and `printf` for output."
            },
            {
                question: "What is the difference between `printf` and `puts`?",
                hint: "Consider the data types they handle."
            }
        ]
    },
    'funcproto': {
        title: "Function Prototypes and Definitions",
        description: "Understand the importance of function prototypes and definitions in C programming for better organization and modularity.",
        sections: [
            {
                title: "What is a Function Prototype?",
                content: "A function prototype is a declaration of a function that specifies the function's name, return type, and parameters without providing the body.",
                code: `int add(int, int); // Function prototype`
            },
            {
                title: "Defining a Function",
                content: "A function definition includes the function body, where the actual logic of the function is written.",
                code: `int add(int a, int b) {
    return a + b;
}`
            },
            {
                title: "Using Function Prototypes",
                content: "Prototypes allow functions to be called before their definitions, promoting better organization of code.",
                code: `int main() {
    int result = add(5, 10);
    printf("Result: %d", result);
}`
            }
        ],
        practiceQuestions: [
            {
                question: "Write a function prototype for a function that multiplies two floating-point numbers.",
                hint: "Specify the return type as `float`."
            },
            {
                question: "Create a function definition that computes the square of an integer.",
                hint: "The function should return the square value."
            },
            {
                question: "Explain why function prototypes are useful in large programs.",
                hint: "Consider code organization and readability."
            }
        ]
    },
    'arguments': {
        title: "Passing Arguments (By Value and Reference)",
        description: "Learn how to pass arguments to functions in C, differentiating between passing by value and passing by reference.",
        sections: [
            {
                title: "Passing by Value",
                content: "In pass by value, a copy of the variable is passed to the function. Changes made inside the function do not affect the original variable.",
                code: `void updateValue(int a) {
    a = 20; // Only modifies the copy
}`
            },
            {
                title: "Passing by Reference",
                content: "In pass by reference, a pointer to the variable is passed, allowing the function to modify the original variable.",
                code: `void updateValue(int *a) {
    *a = 20; // Modifies the original variable
}`
            },
            {
                title: "Understanding the Differences",
                content: "Using pointers allows functions to modify the actual values of variables, while pass by value is safer as it protects the original variable."
            }
        ],
        practiceQuestions: [
            {
                question: "Write a function that swaps two integers using pass by value.",
                hint: "Use two separate copies of the variables."
            },
            {
                question: "Create a function that swaps two integers using pass by reference.",
                hint: "Use pointers to achieve the swap."
            },
            {
                question: "Discuss the advantages and disadvantages of passing arguments by value and by reference.",
                hint: "Consider memory usage and safety."
            }
        ]
    },
    'recursion': {
        title: "Recursive Functions",
        description: "Explore recursive functions in C, understanding their structure and use cases, along with how they work.",
        sections: [
            {
                title: "What is Recursion?",
                content: "Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem.",
                code: `int factorial(int n) {
    if (n == 0) return 1; // Base case
    return n * factorial(n - 1); // Recursive call
}`
            },
            {
                title: "Base Case and Recursive Case",
                content: "Every recursive function must have a base case to terminate the recursion and a recursive case to continue the calls.",
                code: `int fibonacci(int n) {
    if (n <= 1) return n; // Base case
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}`
            },
            {
                title: "Advantages and Disadvantages",
                content: "Recursion can simplify code but may lead to higher memory usage and stack overflow if not managed properly."
            }
        ],
        practiceQuestions: [
            {
                question: "Write a recursive function to compute the Fibonacci sequence.",
                hint: "Use the formula F(n) = F(n-1) + F(n-2)."
            },
            {
                question: "Create a recursive function to find the greatest common divisor (GCD) of two numbers.",
                hint: "Use the Euclidean algorithm."
            },
            {
                question: "Explain when to use recursion over iteration.",
                hint: "Think about problem complexity and readability."
            }
        ]
    },
    'storageclass': {
        title: "Scope Rules and Storage Classes",
        description: "Learn about variable scope, lifetime, and the different storage classes available in C.",
        sections: [
            {
                title: "Variable Scope",
                content: "The scope of a variable determines where it can be accessed within the code, with local and global scopes being the most common.",
                code: `int globalVar; // Global variable
void function() {
    int localVar; // Local variable
}`
            },
            {
                title: "Storage Classes",
                content: "Storage classes define the lifetime and visibility of variables. Key classes include `auto`, `register`, `static`, and `extern`.",
                code: `void function() {
    static int count = 0; // Retains value between function calls
    count++;
}`
            },
            {
                title: "Understanding Storage Class Examples",
                content: "Different storage classes affect memory allocation and variable lifetime, which are crucial for memory management."
            }
        ],
        practiceQuestions: [
            {
                question: "Explain the difference between local and global variables with examples.",
                hint: "Consider where each can be accessed."
            },
            {
                question: "Write a function demonstrating the use of a static variable.",
                hint: "Use a static variable to keep count across multiple calls."
            },
            {
                question: "Discuss the purpose of the `extern` storage class.",
                hint: "Think about variable visibility across different files."
            }
        ]
    },
    'arrays': {
        title: "Declaring and Initializing Arrays",
        description: "Learn how to declare and initialize arrays in C, understanding their structure and usage.",
        sections: [
            {
                title: "Declaring Arrays",
                content: "An array is a collection of variables of the same type. To declare an array, specify the type and the number of elements.",
                code: `int numbers[5]; // Declaration of an array of integers`
            },
            {
                title: "Initializing Arrays",
                content: "Arrays can be initialized at the time of declaration using curly braces.",
                code: `int numbers[5] = {1, 2, 3, 4, 5}; // Initialization of an array`
            },
            {
                title: "Accessing Array Elements",
                content: "Array elements can be accessed using their index, starting from 0.",
                code: `printf("%d", numbers[0]); // Accesses the first element`
            }
        ],
        practiceQuestions: [
            {
                question: "Declare and initialize an array of 10 floating-point numbers.",
                hint: "Use `float` as the data type."
            },
            {
                question: "Explain how to access the last element of an array of size 5.",
                hint: "Think about the index to use."
            },
            {
                question: "Create an array of characters to store a string and initialize it.",
                hint: "Use double quotes for the string."
            }
        ]
    },
    'arrays2d': {
        title: "One-Dimensional and Two-Dimensional Arrays",
        description: "Understand one-dimensional and two-dimensional arrays, their declarations, and how to access their elements.",
        sections: [
            {
                title: "One-Dimensional Arrays",
                content: "A one-dimensional array is a list of elements that can be accessed using a single index.",
                code: `int arr[5] = {10, 20, 30, 40, 50}; // One-dimensional array`
            },
            {
                title: "Two-Dimensional Arrays",
                content: "A two-dimensional array is essentially an array of arrays, allowing for the representation of matrices.",
                code: `int matrix[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}; // Two-dimensional array`
            },
            {
                title: "Accessing Elements",
                content: "Elements in two-dimensional arrays can be accessed using two indices: one for the row and one for the column.",
                code: `printf("%d", matrix[1][2]); // Accesses the element in the second row, third column`
            }
        ],
        practiceQuestions: [
            {
                question: "Declare a two-dimensional array of size 2x3 and initialize it.",
                hint: "Use nested curly braces for initialization."
            },
            {
                question: "How would you access the first element of a two-dimensional array?",
                hint: "Consider the indices to use."
            },
            {
                question: "Write a program to print all elements of a one-dimensional array.",
                hint: "Use a loop to iterate through the array."
            }
        ]
    },
    'searching': {
        title: "Searching in Arrays (Linear and Binary)",
        description: "Learn about searching algorithms for arrays, focusing on linear and binary search methods.",
        sections: [
            {
                title: "Linear Search",
                content: "Linear search checks each element in the array sequentially until the target element is found or the array ends.",
                code: `int linearSearch(int arr[], int size, int target) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == target) return i; // Returns the index
    }
    return -1; // Not found
}`
            },
            {
                title: "Binary Search",
                content: "Binary search is more efficient than linear search but requires a sorted array. It divides the search interval in half.",
                code: `int binarySearch(int arr[], int size, int target) {
    int low = 0, high = size - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1; // Not found
}`
            }
        ],
        practiceQuestions: [
            {
                question: "Write a function to implement linear search on an array of integers.",
                hint: "Use a loop to traverse the array."
            },
            {
                question: "Explain how binary search works and its requirements.",
                hint: "Consider the need for a sorted array."
            },
            {
                question: "Create a program that searches for a number in a sorted array using binary search.",
                hint: "Utilize the binary search function."
            }
        ]
    },
    'sorting': {
        title: "Sorting Arrays (Bubble Sort)",
        description: "Explore the bubble sort algorithm to sort arrays in ascending order.",
        sections: [
            {
                title: "Understanding Bubble Sort",
                content: "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
                code: `void bubbleSort(int arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp; // Swap
            }
        }
    }
}`
            },
            {
                title: "Time Complexity",
                content: "The average and worst-case time complexity of bubble sort is O(n²), making it inefficient on large lists.",
                code: `// Time complexity: O(n^2)`
            },
            {
                title: "When to Use Bubble Sort",
                content: "Bubble sort is primarily used for educational purposes due to its simplicity and ease of implementation."
            }
        ],
        practiceQuestions: [
            {
                question: "Implement the bubble sort algorithm for an array of integers.",
                hint: "Use nested loops for the comparisons."
            },
            {
                question: "Discuss the efficiency of bubble sort compared to other sorting algorithms.",
                hint: "Consider time complexity and practicality."
            },
            {
                question: "Create a program that sorts an array of integers and prints the sorted array.",
                hint: "Use the bubble sort function."
            }
        ]
    },
    'pointers': {
        title: "Pointer Basics and Types",
        description: "Understand the concept of pointers in C, including their types and how they work.",
        sections: [
            {
                title: "What is a Pointer?",
                content: "A pointer is a variable that stores the address of another variable. It allows direct access to memory locations.",
                code: `int a = 10;
    int *p = &a; // p points to the address of a`
            },
            {
                title: "Pointer Types",
                content: "Pointers can point to different data types. The type of pointer determines the type of data it can point to.",
                code: `float *f; // Pointer to a float
    char *c; // Pointer to a character`
            },
            {
                title: "Using Pointers",
                content: "You can access or modify the value of the variable being pointed to using the dereference operator (*).",
                code: `*p = 20; // Changes the value of a to 20`
            }
        ],
        practiceQuestions: [
            {
                question: "Declare a pointer to an integer and assign it the address of a variable.",
                hint: "Use the & operator."
            },
            {
                question: "Explain how to access the value stored in the variable using a pointer.",
                hint: "Consider the dereference operator."
            },
            {
                question: "Write a program to swap two numbers using pointers.",
                hint: "You'll need a function that takes two pointers as parameters."
            }
        ]
    },
    'pointerarithmetic': {
        title: "Pointer Arithmetic and Expressions",
        description: "Learn how to perform arithmetic operations on pointers and understand pointer expressions.",
        sections: [
            {
                title: "Pointer Arithmetic Basics",
                content: "You can perform arithmetic operations on pointers. Incrementing a pointer moves it to the next memory location based on its type.",
                code: `int arr[] = {1, 2, 3};
    int *p = arr; // p points to the first element
    p++; // p now points to the second element`
            },
            {
                title: "Pointer Expressions",
                content: "You can use pointers in expressions, such as adding an integer to a pointer to access array elements.",
                code: `int value = *(p + 1); // Accesses the second element of the array`
            },
            {
                title: "Subtraction with Pointers",
                content: "You can subtract one pointer from another to find the number of elements between them.",
                code: `int diff = p2 - p1; // Number of elements between p1 and p2`
            }
        ],
        practiceQuestions: [
            {
                question: "Explain how incrementing a pointer affects its address.",
                hint: "Consider the size of the data type it points to."
            },
            {
                question: "Write a program that demonstrates pointer arithmetic with an array.",
                hint: "Use a loop to print array elements using pointer arithmetic."
            },
            {
                question: "Discuss the implications of pointer subtraction.",
                hint: "Think about the types of pointers being used."
            }
        ]
    },
    'dynamicmem': {
        title: "Dynamic Memory Management (malloc, calloc, realloc)",
        description: "Explore dynamic memory allocation in C, including the use of malloc, calloc, and realloc.",
        sections: [
            {
                title: "Using malloc",
                content: "malloc allocates a specified number of bytes and returns a pointer to the allocated memory.",
                code: `int *arr = (int *)malloc(5 * sizeof(int)); // Allocates memory for an array of 5 integers`
            },
            {
                title: "Using calloc",
                content: "calloc allocates memory for an array and initializes all elements to zero.",
                code: `int *arr = (int *)calloc(5, sizeof(int)); // Allocates memory for 5 integers and initializes them to 0`
            },
            {
                title: "Using realloc",
                content: "realloc changes the size of previously allocated memory, potentially moving it to a new location.",
                code: `arr = (int *)realloc(arr, 10 * sizeof(int)); // Resizes the array to hold 10 integers`
            }
        ],
        practiceQuestions: [
            {
                question: "Demonstrate the use of malloc to allocate memory for an array.",
                hint: "Don't forget to check if the allocation was successful."
            },
            {
                question: "Write a program that uses calloc to initialize an array.",
                hint: "Use calloc to ensure all elements start at zero."
            },
            {
                question: "Explain how realloc works and when it should be used.",
                hint: "Consider memory resizing scenarios."
            }
        ]
    },
    'pointerarrays': {
        title: "Pointers and Arrays",
        description: "Understand the relationship between pointers and arrays, and how to use pointers to manipulate arrays.",
        sections: [
            {
                title: "Arrays and Pointers",
                content: "The name of an array acts as a pointer to its first element, allowing pointer arithmetic to access its elements.",
                code: `int arr[] = {1, 2, 3};
    int *p = arr; // p points to the first element`
            },
            {
                title: "Accessing Array Elements with Pointers",
                content: "You can access array elements using pointers by adding an offset.",
                code: `printf("%d", *(p + 1)); // Accesses the second element`
            },
            {
                title: "Passing Arrays to Functions",
                content: "When passing an array to a function, you actually pass a pointer to its first element.",
                code: `void printArray(int *arr, int size) {
        for (int i = 0; i < size; i++) {
            printf("%d ", *(arr + i)); // Prints each element
        }
    }`
            }
        ],
        practiceQuestions: [
            {
                question: "Write a function that takes an array as a pointer and prints its elements.",
                hint: "Use a loop to iterate through the array."
            },
            {
                question: "Explain how pointers can be used to modify array elements.",
                hint: "Consider the dereference operator."
            },
            {
                question: "Create a program that uses pointers to reverse the elements of an array.",
                hint: "Think about swapping elements using pointers."
            }
        ]
    },
    'strings': {
        title: "Working with Strings",
        description: "Learn how to work with strings in C, including declaration, initialization, and basic operations.",
        sections: [
            {
                title: "Declaring and Initializing Strings",
                content: "Strings in C are arrays of characters terminated by a null character ('\\0'). You can declare strings using character arrays.",
                code: `char str1[] = "Hello"; // Implicitly adds null character
char str2[6] = "World"; // Explicitly declared with size 6`
            },
            {
                title: "Accessing String Elements",
                content: "You can access individual characters in a string using array indexing.",
                code: `char c = str1[1]; // c is 'e'`
            },
            {
                title: "String Length",
                content: "Use the strlen function to determine the length of a string, excluding the null character.",
                code: `int len = strlen(str1); // len is 5`
            }
        ],
        practiceQuestions: [
            {
                question: "Declare a string and initialize it with a message.",
                hint: "Use double quotes to create a string."
            },
            {
                question: "Write a program to print each character of a string using a loop.",
                hint: "Use array indexing to access characters."
            },
            {
                question: "Demonstrate how to find the length of a string.",
                hint: "Use the strlen function from the string.h library."
            }
        ]
    },
    'stringfuncs': {
        title: "String Manipulation Functions",
        description: "Explore various string manipulation functions available in the string.h library.",
        sections: [
            {
                title: "Copying Strings",
                content: "Use strcpy to copy one string to another.",
                code: `char src[] = "Source";
char dest[20];
strcpy(dest, src); // dest now contains "Source"`
            },
            {
                title: "Concatenating Strings",
                content: "Use strcat to concatenate two strings.",
                code: `char str1[20] = "Hello, ";
char str2[] = "World!";
strcat(str1, str2); // str1 now contains "Hello, World!"`
            },
            {
                title: "Comparing Strings",
                content: "Use strcmp to compare two strings lexicographically.",
                code: `if (strcmp(str1, str2) == 0) {
    printf("Strings are equal");
}`
            }
        ],
        practiceQuestions: [
            {
                question: "Write a program that copies one string to another using strcpy.",
                hint: "Ensure the destination string is large enough."
            },
            {
                question: "Demonstrate string concatenation using strcat.",
                hint: "Concatenate multiple strings into one."
            },
            {
                question: "Compare two strings and print whether they are equal or not.",
                hint: "Use strcmp for comparison."
            }
        ]
    },
    'structures': {
        title: "Structures in C",
        description: "Understand how to define and use structures in C for grouping related data.",
        sections: [
            {
                title: "Defining a Structure",
                content: "Structures allow you to group variables of different types under a single name.",
                code: `struct Student {
    char name[50];
    int age;
    float gpa;
};`
            },
            {
                title: "Declaring Structure Variables",
                content: "You can declare variables of a structure type after defining the structure.",
                code: `struct Student s1; // s1 is a variable of type Student`
            },
            {
                title: "Accessing Structure Members",
                content: "Use the dot operator (.) to access members of a structure.",
                code: `strcpy(s1.name, "John Doe");
s1.age = 20;
s1.gpa = 3.5;`
            }
        ],
        practiceQuestions: [
            {
                question: "Define a structure for a book with title, author, and price.",
                hint: "Use appropriate data types for each member."
            },
            {
                question: "Create an instance of the book structure and assign values to its members.",
                hint: "Use the dot operator for assignment."
            },
            {
                question: "Write a program that prints the details of a student structure.",
                hint: "Access each member using the dot operator."
            }
        ]
    },
    'unions': {
        title: "Unions and Nested Structures",
        description: "Learn about unions and how they differ from structures, along with nested structures.",
        sections: [
            {
                title: "Understanding Unions",
                content: "Unions allow storing different data types in the same memory location. Only one member can contain a value at a time.",
                code: `union Data {
    int i;
    float f;
    char c;
};`
            },
            {
                title: "Declaring Union Variables",
                content: "You can declare union variables similarly to structures.",
                code: `union Data data; // Declare a union variable`
            },
            {
                title: "Accessing Union Members",
                content: "Use the dot operator (.) to access members of a union. The size of the union is determined by its largest member.",
                code: `data.i = 10;
data.f = 220.5; // Now data.f is valid, data.i may be overwritten`
            }
        ],
        practiceQuestions: [
            {
                question: "Define a union to store different types of a vehicle (car, bike, truck).",
                hint: "Include the relevant data types for each vehicle type."
            },
            {
                question: "Demonstrate how to access members of a union and discuss the implications.",
                hint: "Consider the memory usage of unions."
            },
            {
                question: "Write a program that shows how nested structures work.",
                hint: "Create a structure that contains another structure as a member."
            }
        ]
    }
};
