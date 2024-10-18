export const units = [
    {
        title: "Unit 1: Basics of C",
        lessons: [
            { name: "Introduction to C", href: "/resources/programminglanguages/c/introtoc", youtube: "https://youtu.be/example1" },
            { name: "Setting Up Your C Development Environment", href: "/resources/programminglanguages/c/setup", youtube: "https://youtu.be/example2" },
            { name: "Variables and Data Types in C", href: "/resources/programminglanguages/c/variables", youtube: "https://youtu.be/example3" },
            { name: "Basic Input/Output in C", href: "/resources/programminglanguages/c/io", youtube: "https://youtu.be/example4" },
            { name: "Operators in C", href: "/resources/programminglanguages/c/operators", youtube: "https://youtu.be/example5" },
            { name: "Type Casting in C", href: "/resources/programminglanguages/c/typecasting", youtube: "https://youtu.be/example6" }
        ]
    },
    {
        title: "Unit 2: Control Flow in C",
        lessons: [
            { name: "If-Else Statements", href: "/resources/programminglanguages/c/controlflow", youtube: "https://youtu.be/example7" },
            { name: "Switch Statements", href: "/resources/programminglanguages/c/controlflow", youtube: "https://youtu.be/example8" },
            { name: "For Loops", href: "/resources/programminglanguages/c/controlflow", youtube: "https://youtu.be/example9" },
            { name: "While and Do-While Loops", href: "/resources/programminglanguages/c/controlflow", youtube: "https://youtu.be/example10" },
            { name: "Break and Continue Statements", href: "/resources/programminglanguages/c/controlflow", youtube: "https://youtu.be/example11" },
            { name: "Nested Loops and Control Structures", href: "/resources/programminglanguages/c/controlflow", youtube: "https://youtu.be/example12" }
        ]
    },
    {
        title: "Unit 3: Functions and Arrays in C",
        lessons: [
            { name: "Introduction to Functions in C", href: "/resources/programminglanguages/c/functionsarrays", youtube: "https://youtu.be/example13" },
            { name: "Function Parameters and Return Types", href: "/resources/programminglanguages/c/functionsarrays", youtube: "https://youtu.be/example14" },
            { name: "Recursion in C", href: "/resources/programminglanguages/c/functionsarrays", youtube: "https://youtu.be/example15" },
            { name: "Arrays in C", href: "/resources/programminglanguages/c/functionsarrays", youtube: "https://youtu.be/example16" },
            { name: "Strings in C", href: "/resources/programminglanguages/c/functionsarrays", youtube: "https://youtu.be/example17" },
            { name: "Multidimensional Arrays", href: "/resources/programminglanguages/c/functionsarrays", youtube: "https://youtu.be/example18" }
        ]
    },
    {
        title: "Unit 4: Pointers and Memory Management",
        lessons: [
            { name: "Introduction to Pointers", href: "/resources/programminglanguages/c/pointers", youtube: "https://youtu.be/example19" },
            { name: "Pointer Arithmetic", href: "/resources/programminglanguages/c/pointers", youtube: "https://youtu.be/example20" },
            { name: "Dynamic Memory Allocation", href: "/resources/programminglanguages/c/pointers", youtube: "https://youtu.be/example21" },
            { name: "Pointers and Arrays", href: "/resources/programminglanguages/c/pointers", youtube: "https://youtu.be/example22" },
            { name: "Pointers to Functions", href: "/resources/programminglanguages/c/pointers", youtube: "https://youtu.be/example23" },
            { name: "Common Pointer Pitfalls", href: "/resources/programminglanguages/c/pointers", youtube: "https://youtu.be/example24" }
        ]
    },
    {
        title: "Unit 5: Structures and Unions",
        lessons: [
            { name: "Introduction to Structures", href: "/resources/programminglanguages/c/structures", youtube: "https://youtu.be/example25" },
            { name: "Nested Structures", href: "/resources/programminglanguages/c/structures", youtube: "https://youtu.be/example26" },
            { name: "Arrays of Structures", href: "/resources/programminglanguages/c/structures", youtube: "https://youtu.be/example27" },
            { name: "Unions in C", href: "/resources/programminglanguages/c/structures", youtube: "https://youtu.be/example28" },
            { name: "Typedef in C", href: "/resources/programminglanguages/c/structures", youtube: "https://youtu.be/example29" },
            { name: "Bit Fields", href: "/resources/programminglanguages/c/structures", youtube: "https://youtu.be/example30" }
        ]
    },
    {
        title: "Unit 6: File Handling and Preprocessor",
        lessons: [
            { name: "File I/O Basics", href: "/resources/programminglanguages/c/filehandling", youtube: "https://youtu.be/example31" },
            { name: "Reading and Writing Text Files", href: "/resources/programminglanguages/c/filehandling", youtube: "https://youtu.be/example32" },
            { name: "Binary File Operations", href: "/resources/programminglanguages/c/filehandling", youtube: "https://youtu.be/example33" },
            { name: "Preprocessor Directives", href: "/resources/programminglanguages/c/preprocessor", youtube: "https://youtu.be/example34" },
            { name: "Macros in C", href: "/resources/programminglanguages/c/preprocessor", youtube: "https://youtu.be/example35" },
            { name: "Conditional Compilation", href: "/resources/programminglanguages/c/preprocessor", youtube: "https://youtu.be/example36" }
        ]
    },
    {
        title: "Unit 7: Advanced C and Projects",
        lessons: [
            { name: "Command Line Arguments", href: "/resources/programminglanguages/c/advanced", youtube: "https://youtu.be/example37" },
            { name: "Error Handling in C", href: "/resources/programminglanguages/c/advanced", youtube: "https://youtu.be/example38" },
            { name: "Creating Libraries in C", href: "/resources/programminglanguages/c/advanced", youtube: "https://youtu.be/example39" },
            { name: "Multi-file Projects", href: "/resources/programminglanguages/c/projects", youtube: "https://youtu.be/example40" },
            { name: "Data Structures Implementation", href: "/resources/programminglanguages/c/projects", youtube: "https://youtu.be/example41" },
            { name: "Building a Simple Database System", href: "/resources/programminglanguages/c/projects", youtube: "https://youtu.be/example42" }
        ]
    }
];

export const lessonData = {
    'introtoc': {
        title: "Introduction to C",
        description: "Explore the fundamentals of C programming, its history, features, and importance in modern computing.",
        sections: [
            {
                title: "What is C?",
                content: "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. It was developed by Dennis Ritchie between 1969 and 1973 at Bell Labs."
            },
            {
                title: "History of C",
                content: "C was originally developed by Dennis Ritchie between 1969 and 1973 at Bell Labs, and used to re-implement the Unix operating system. It has since become one of the most widely used programming languages of all time."
            },
            {
                title: "Features of C",
                content: "C offers several key features:\n\n1. Efficiency\n2. Portability\n3. Power and Flexibility\n4. Modularity\n5. Statically-typed\n6. Mid-level language features"
            },
            {
                title: "Applications of C",
                content: "C is widely used in various domains, including:\n\n1. Operating Systems\n2. Embedded Systems\n3. System Programming\n4. Device Drivers\n5. Application Software\n6. Games"
            },
            {
                title: "Your First C Program",
                content: "Let's write a simple 'Hello, World!' program in C:",
                code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`
            }
        ],
        practiceQuestions: [
            {
                question: "Write a C program that prints your name, age, and favorite programming language on separate lines.",
                hint: "Use printf() and \\n for new lines."
            },
            {
                question: "Modify the 'Hello, World!' program to ask for the user's name and then greet them personally.",
                hint: "Use scanf() to get input from the user and printf() to display output."
            },
            {
                question: "Create a program that calculates and prints the sum and product of two numbers entered by the user.",
                hint: "Use scanf() to get two numbers from the user, perform calculations, and use printf() to display the results."
            },
            {
                question: "Write a program that converts temperature from Fahrenheit to Celsius. (Formula: C = (F - 32) * 5/9)",
                hint: "Get the temperature in Fahrenheit from the user, apply the formula, and print the result."
            },
            {
                question: "Create a simple program that demonstrates the use of comments in C. Include both single-line and multi-line comments.",
                hint: "Use // for single-line comments and /* */ for multi-line comments."
            }
        ],
        nextChapter: "setup"
    },
    'setup': {
        title: "Setting Up Your C Development Environment",
        description: "Learn how to set up a C development environment on your computer, including installing a compiler and choosing an Integrated Development Environment (IDE).",
        sections: [
            {
                title: "Choosing a C Compiler",
                content: "A compiler is essential for converting your C code into an executable program. Popular C compilers include:\n\n1. GCC (GNU Compiler Collection)\n2. Clang\n3. Microsoft Visual C Compiler"
            },
            {
                title: "Installing GCC on Different Operating Systems",
                content: "- Windows: Install MinGW or use Windows Subsystem for Linux (WSL)\n- macOS: Install Xcode Command Line Tools\n- Linux: Most distributions come with GCC pre-installed. If not, use your package manager to install it."
            },
            {
                title: "Choosing an IDE for C Development",
                content: "An Integrated Development Environment (IDE) can make coding easier. Some popular IDEs for C include:\n\n1. Visual Studio Code (with C/C++ extension)\n2. Code::Blocks\n3. Eclipse (with C/C++ Development Tools)\n4. CLion"
            },
            {
                title: "Setting Up Visual Studio Code for C",
                content: "1. Install Visual Studio Code\n2. Install the C/C++ extension\n3. Install a C compiler (like GCC)\n4. Configure VS Code to use your compiler\n5. Create a new C file and start coding!"
            },
            {
                title: "Verifying Your Setup",
                content: "To verify your setup, create a simple C program and compile it. Here's how to do it from the command line:",
                code: `// Save this as hello.c
#include <stdio.h>

int main() {
    printf("Hello, C Developer!\\n");
    return 0;
}

// Compile with:
// gcc hello.c -o hello

// Run with:
// ./hello`
            }
        ],
        practiceQuestions: [
            {
                question: "Install a C compiler on your system and write a program to print 'Setup Complete!' Compile and run it from the command line.",
                hint: "Use gcc to compile and ./ to run the program on Unix-based systems. On Windows, use the appropriate executable name."
            },
            {
                question: "Install an IDE of your choice and create a new C project. Write a program that asks for your name and greets you.",
                hint: "Most IDEs have a 'New Project' option. Look for C project templates."
            },
            {
                question: "Write a C program that includes a custom header file. The header should declare a function, and your main program should implement and use this function.",
                hint: "Create a .h file for your header and include it in your main .c file using #include \"yourheader.h\""
            },
            {
                question: "Create a C program that uses a third-party library (like SQLite or cURL). Install the library and include it in your project.",
                hint: "You may need to configure your IDE or compiler to find the library. Check the library's documentation for installation instructions."
            },
            {
                question: "Set up a version control system (like Git) for your C projects. Create a repository and commit your first C program.",
                hint: "If you're new to Git, look up basic commands like git init, git add, and git commit."
            }
        ],
        nextChapter: "variables"
    },
}