export const units = [
    {
        title: "Unit 1: Basics of C++",
        lessons: [
            { name: "Introduction to C++", href: "/resources/programminglanguages/cpp/introtocpp", youtube: "https://youtu.be/example1" },
            { name: "Setting Up Your Development Environment", href: "/resources/programminglanguages/cpp/setup", youtube: "https://youtu.be/example2" },
            { name: "Variables and Data Types", href: "/resources/programminglanguages/cpp/variables", youtube: "https://youtu.be/example3" },
            { name: "Basic Input/Output", href: "/resources/programminglanguages/cpp/io", youtube: "https://youtu.be/example4" },
            { name: "Operators in C++", href: "/resources/programminglanguages/cpp/operators", youtube: "https://youtu.be/example5" },
            { name: "Type Casting and Type Conversion", href: "/resources/programminglanguages/cpp/typecasting", youtube: "https://youtu.be/example6" }
        ]
    },
    {
        title: "Unit 2: Control Flow",
        lessons: [
            { name: "If-Else Statements", href: "/resources/programminglanguages/cpp/controlflow", youtube: "https://youtu.be/example7" },
            { name: "Switch Statements", href: "/resources/programminglanguages/cpp/controlflow", youtube: "https://youtu.be/example8" },
            { name: "For Loops", href: "/resources/programminglanguages/cpp/controlflow", youtube: "https://youtu.be/example9" },
            { name: "While and Do-While Loops", href: "/resources/programminglanguages/cpp/controlflow", youtube: "https://youtu.be/example10" },
            { name: "Break and Continue Statements", href: "/resources/programminglanguages/cpp/controlflow", youtube: "https://youtu.be/example11" },
            { name: "Nested Loops and Control Structures", href: "/resources/programminglanguages/cpp/controlflow", youtube: "https://youtu.be/example12" }
        ]
    },
    {
        title: "Unit 3: Functions and Arrays",
        lessons: [
            { name: "Introduction to Functions", href: "/resources/programminglanguages/cpp/functionsarrays", youtube: "https://youtu.be/example13" },
            { name: "Function Parameters and Return Types", href: "/resources/programminglanguages/cpp/functionsarrays", youtube: "https://youtu.be/example14" },
            { name: "Function Overloading", href: "/resources/programminglanguages/cpp/functionsarrays", youtube: "https://youtu.be/example15" },
            { name: "Recursion", href: "/resources/programminglanguages/cpp/functionsarrays", youtube: "https://youtu.be/example16" },
            { name: "Arrays and Strings", href: "/resources/programminglanguages/cpp/functionsarrays", youtube: "https://youtu.be/example17" },
            { name: "Multidimensional Arrays", href: "/resources/programminglanguages/cpp/functionsarrays", youtube: "https://youtu.be/example18" }
        ]
    },
    {
        title: "Unit 4: Object-Oriented Programming",
        lessons: [
            { name: "Introduction to Classes and Objects", href: "/resources/programminglanguages/cpp/oop", youtube: "https://youtu.be/example19" },
            { name: "Constructors and Destructors", href: "/resources/programminglanguages/cpp/oop", youtube: "https://youtu.be/example20" },
            { name: "Access Specifiers", href: "/resources/programminglanguages/cpp/oop", youtube: "https://youtu.be/example21" },
            { name: "Inheritance", href: "/resources/programminglanguages/cpp/oop", youtube: "https://youtu.be/example22" },
            { name: "Polymorphism", href: "/resources/programminglanguages/cpp/oop", youtube: "https://youtu.be/example23" },
            { name: "Abstract Classes and Interfaces", href: "/resources/programminglanguages/cpp/oop", youtube: "https://youtu.be/example24" }
        ]
    },
    {
        title: "Unit 5: Advanced C++ Concepts",
        lessons: [
            { name: "Templates", href: "/resources/programminglanguages/cpp/advanced", youtube: "https://youtu.be/example25" },
            { name: "Exception Handling", href: "/resources/programminglanguages/cpp/advanced", youtube: "https://youtu.be/example26" },
            { name: "File Handling", href: "/resources/programminglanguages/cpp/advanced", youtube: "https://youtu.be/example27" },
            { name: "Namespaces", href: "/resources/programminglanguages/cpp/advanced", youtube: "https://youtu.be/example28" },
            { name: "Smart Pointers", href: "/resources/programminglanguages/cpp/advanced", youtube: "https://youtu.be/example29" },
            { name: "Lambda Expressions", href: "/resources/programminglanguages/cpp/advanced", youtube: "https://youtu.be/example30" }
        ]
    },
    {
        title: "Unit 6: Standard Template Library (STL)",
        lessons: [
            { name: "Introduction to STL", href: "/resources/programminglanguages/cpp/stl", youtube: "https://youtu.be/example31" },
            { name: "Containers (Vector, List, Map)", href: "/resources/programminglanguages/cpp/stl", youtube: "https://youtu.be/example32" },
            { name: "Iterators", href: "/resources/programminglanguages/cpp/stl", youtube: "https://youtu.be/example33" },
            { name: "Algorithms", href: "/resources/programminglanguages/cpp/stl", youtube: "https://youtu.be/example34" },
            { name: "Functors", href: "/resources/programminglanguages/cpp/stl", youtube: "https://youtu.be/example35" },
            { name: "STL in Practice", href: "/resources/programminglanguages/cpp/stl", youtube: "https://youtu.be/example36" }
        ]
    },
    {
        title: "Unit 7: C++ Projects",
        lessons: [
            { name: "Console-based Game", href: "/resources/programminglanguages/cpp/projects", youtube: "https://youtu.be/example37" },
            { name: "Simple Database System", href: "/resources/programminglanguages/cpp/projects", youtube: "https://youtu.be/example38" },
            { name: "GUI Application with Qt", href: "/resources/programminglanguages/cpp/projects", youtube: "https://youtu.be/example39" },
            { name: "Multithreaded Application", href: "/resources/programminglanguages/cpp/projects", youtube: "https://youtu.be/example40" },
            { name: "Network Programming", href: "/resources/programminglanguages/cpp/projects", youtube: "https://youtu.be/example41" },
            { name: "Data Structures Implementation", href: "/resources/programminglanguages/cpp/projects", youtube: "https://youtu.be/example42" }
        ]
    }
];

export const lessonData = {
    'introtocpp': {
        title: "Introduction to C++",
        description: "Dive into the world of C++, understanding its history, features, and importance in modern programming.",
        sections: [
            {
                title: "What is C++?",
                content: "C++ is a powerful general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language. It offers a combination of both high-level and low-level language features, making it versatile for various programming tasks."
            },
            {
                title: "History of C++",
                content: "C++ was developed by Bjarne Stroustrup in 1979 at Bell Labs. Initially called 'C with Classes', it was renamed C++ in 1983. The '++' in the name comes from the increment operator in C, indicating that C++ is an incremental improvement over C."
            },
            {
                title: "Features of C++",
                content: "C++ offers several key features:\n\n1. Object-Oriented Programming\n2. Platform Independence\n3. High Performance\n4. Low-level Memory Manipulation\n5. Large Standard Library\n6. Compatibility with C"
            },
            {
                title: "Applications of C++",
                content: "C++ is widely used in various domains, including:\n\n1. System Software\n2. Game Development\n3. Device Drivers\n4. Embedded Systems\n5. Banking Applications\n6. Cloud/Distributed Systems"
            },
            {
                title: "Your First C++ Program",
                content: "Let's write a simple 'Hello, World!' program in C++:",
                code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`
            }
        ],
        practiceQuestions: [
            {
                question: "Write a C++ program that prints your name, age, and favorite programming language on separate lines.",
                hint: "Use cout and endl to print on separate lines."
            },
            {
                question: "Modify the 'Hello, World!' program to ask for the user's name and then greet them personally.",
                hint: "Use cin to get input from the user and cout to display output."
            },
            {
                question: "Create a program that calculates and prints the sum and product of two numbers entered by the user.",
                hint: "Use cin to get two numbers from the user, perform calculations, and use cout to display the results."
            },
            {
                question: "Write a program that converts temperature from Fahrenheit to Celsius. (Formula: C = (F - 32) * 5/9)",
                hint: "Get the temperature in Fahrenheit from the user, apply the formula, and print the result."
            },
            {
                question: "Create a simple program that demonstrates the use of comments in C++. Include both single-line and multi-line comments.",
                hint: "Use // for single-line comments and /* */ for multi-line comments."
            }
        ],
        nextChapter: "setup"
    },
    'setup': {
        title: "Setting Up Your Development Environment",
        description: "Learn how to set up a C++ development environment on your computer, including installing a compiler and an Integrated Development Environment (IDE).",
        sections: [
            {
                title: "Choosing a Compiler",
                content: "A compiler is essential for converting your C++ code into an executable program. Popular C++ compilers include:\n\n1. GCC (GNU Compiler Collection)\n2. Clang\n3. Microsoft Visual C++ Compiler"
            },
            {
                title: "Installing GCC on Different Operating Systems",
                content: "- Windows: Install MinGW or use Windows Subsystem for Linux (WSL)\n- macOS: Install Xcode Command Line Tools\n- Linux: Most distributions come with GCC pre-installed. If not, use your package manager to install it."
            },
            {
                title: "Choosing an IDE",
                content: "An Integrated Development Environment (IDE) can make coding easier. Some popular IDEs for C++ include:\n\n1. Visual Studio Code (with C/C++ extension)\n2. CLion\n3. Code::Blocks\n4. Eclipse (with C/C++ Development Tools)"
            },
            {
                title: "Setting Up Visual Studio Code for C++",
                content: "1. Install Visual Studio Code\n2. Install the C/C++ extension\n3. Install a C++ compiler (like GCC)\n4. Configure VS Code to use your compiler\n5. Create a new C++ file and start coding!"
            },
            {
                title: "Verifying Your Setup",
                content: "To verify your setup, create a simple C++ program and compile it. Here's how to do it from the command line:",
                code: `// Save this as hello.cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++ Developer!" << endl;
    return 0;
}

// Compile with:
// g++ hello.cpp -o hello

// Run with:
// ./hello`
            }
        ],
        practiceQuestions: [
            {
                question: "Install a C++ compiler on your system and write a program to print 'Setup Complete!' Compile and run it from the command line.",
                hint: "Use g++ to compile and ./ to run the program on Unix-based systems. On Windows, use the appropriate executable name."
            },
            {
                question: "Install an IDE of your choice and create a new C++ project. Write a program that asks for your name and greets you.",
                hint: "Most IDEs have a 'New Project' option. Look for C++ project templates."
            },
            {
                question: "Write a C++ program that includes a custom header file. The header should declare a function, and your main program should implement and use this function.",
                hint: "Create a .h file for your header and include it in your main .cpp file using #include \"yourheader.h\""
            },
            {
                question: "Create a C++ program that uses a third-party library (like Boost or OpenCV). Install the library and include it in your project.",
                hint: "You may need to configure your IDE or compiler to find the library. Check the library's documentation for installation instructions."
            },
            {
                question: "Set up a version control system (like Git) for your C++ projects. Create a repository and commit your first C++ program.",
                hint: "If you're new to Git, look up basic commands like git init, git add, and git commit."
            }
        ],
        nextChapter: "variables"
    },
    'variables': {
        title: "Variables and Data Types",
        description: "Explore the fundamental building blocks of C++ programs: variables and data types. Learn how to declare, initialize, and use variables of different types.",
        sections: [
            {
                title: "What are Variables?",
                content: "Variables are named storage locations in a computer's memory that hold data. They are the basic units of storage in a C++ program."
            },
            {
                title: "Declaring Variables",
                content: "To use a variable in C++, you must first declare it. The basic syntax is:\n\ndata_type variable_name;",
                code: `int age;
double salary;
char grade;`
            },
            {
                title: "Initializing Variables",
                content: "You can give an initial value to a variable when you declare it:",
                code: `int age = 25;
double salary = 50000.50;
char grade = 'A';`
            },
            {
                title: "Basic Data Types",
                content: "C++ has several basic data types:\n\n1. int: Integer numbers\n2. float: Single-precision floating-point numbers\n3. double: Double-precision floating-point numbers\n4. char: Single characters\n5. bool: Boolean values (true or false)\n6. void: Typeless"
            },
            {
                title: "Type Modifiers",
                content: "Type modifiers can be used to alter the meaning of the base types:\n\n1. signed\n2. unsigned\n3. short\n4. long",
                code: `unsigned int positiveNumber;
long double veryPreciseNumber;`
            },
            {
                title: "Constants",
                content: "Constants are variables whose values cannot be modified after initialization:",
                code: `const double PI = 3.14159;
#define MAX_SIZE 100  // Preprocessor constant`
            }
        ],
        practiceQuestions: [
            {
                question: "Declare variables to store your age, height (in meters), and first initial. Print these values.",
                hint: "Use int for age, double for height, and char for the initial."
            },
            {
                question: "Write a program that calculates the area of a rectangle. Declare variables for length and width, initialize them with values, and print the result.",
                hint: "Area of a rectangle = length * width"
            },
            {
                question: "Create a program that converts a temperature from Celsius to Fahrenheit. Use a constant for any fixed values in the formula.",
                hint: "F = C * 9/5 + 32. Use const for the numbers in the formula."
            },
            {
                question: "Write a program that demonstrates the difference between int, float, and double in terms of precision. Perform a division operation with each type and print the results.",
                hint: "Try dividing 10 by 3 using each type and compare the outputs."
            },
            {
                question: "Create a program that uses all the basic data types (int, float, double, char, bool). Initialize variables of each type and print their values and sizes using the sizeof operator.",
                hint: "Use cout to print values and sizeof(variable) to print sizes."
            }
        ],
        nextChapter: "io"
    },
    'io': {
        title: "Basic Input/Output",
        description: "Learn how to interact with users through the console using C++'s input and output streams.",
        sections: [
            {
                title: "Introduction to I/O Streams",
                content: "C++ uses I/O streams to handle input and output operations. The iostream library provides cin for input and cout for output."
            },
            {
                title: "Output with cout",
                content: "cout is used to output data to the console:",
                code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++!" << endl;
    int age = 25;
    cout << "I am " << age << " years old." << endl;
    return 0;
}`
            },
            {
                title: "Input with cin",
                content: "cin is used to read input from the user:",
                code: `#include <iostream>
using namespace std;

int main() {
    int number;
    cout << "Enter a number: ";
    cin >> number;
    cout << "You entered: " << number << endl;
    return 0;
}`
            },
            {
                title: "Manipulators",
                content: "Manipulators are used to format I/O operations. Common manipulators include endl, setw, and setprecision.",
                code: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double pi = 3.14159265359;
    cout << fixed << setprecision(2);
    cout << "Pi: " << pi << endl;
    return 0;
}`
            },
            {
                title: "Error Handling in I/O",
                content: "It's important to check if I/O operations were successful:",
                code: `#include <iostream>
using namespace std;

int main() {
    int number;
    cout << "Enter a number: ";
    if (cin >> number) {
        cout << "You entered: " << number << endl;
    } else {
        cout << "Invalid input!" << endl;
    }
    return 0;
}`
            }
        ],
        practiceQuestions: [
            {
                question: "Write a program that asks the user for their name and age, then prints a greeting including this information.",
                hint: "Use cin to get the name and age, and cout to print the greeting."
            },
            {
                question: "Create a simple calculator program that asks the user for two numbers and an operation (+, -, *, /), then performs the operation and displays the result.",
                hint: "Use cin to get the numbers and operation. Use if-else or switch to perform the correct operation."
            },
            {
                question: "Write a program that reads a series of integers from the user until they enter -1, then prints the sum and average of the entered numbers.",
                hint: "Use a loop to continuously read numbers. Keep track of the sum and count of numbers entered."
            },
            {
                question: "Create a program that formats and prints a table of student names and scores. Use manipulators to align the output.",
                hint: "Use setw() to set column widths and left or right to align text within columns."
            },
            {
                question: "Write a program that reads a floating-point number from the user and prints it with different levels of precision (2 decimal places, 4 decimal places, and scientific notation).",
                hint: "Use setprecision() and fixed for decimal places, and scientific for scientific notation."
            }
        ],
        nextChapter: "operators"
    }
}