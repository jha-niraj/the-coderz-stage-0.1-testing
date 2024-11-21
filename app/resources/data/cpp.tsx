export const units = [
    {
        title: "Unit I: Concepts and Basics of C++ Programming",
        youtube: "https://www.youtube.com/watch?v=e7sAf4SbS_g&t=0s",
        quizlink: "",
        lessons: [
            { name: "Introduction to cin and cout", lessonkey: "intro_cin_cout" },
            { name: "Creating Classes and Class Objects", lessonkey: "classes_objects" },
            { name: "Structures, Unions, and Enumerations", lessonkey: "structs_unions_enums" },
            { name: "Inline and Non-inline Member Functions", lessonkey: "inline_memberfunc" },
            { name: "Procedural vs. Object-Oriented Programming", lessonkey: "oop_concepts" }
        ]
    },
    {
        title: "Unit II: Pointers, Reference Variables, Arrays, and Strings",
        youtube: "https://www.youtube.com/watch?v=e7sAf4SbS_g&t=27003s",
        quizlink: "",
        lessons: [
            { name: "Pointer Basics and Pointer Arithmetic", lessonkey: "pointer_basics" },
            { name: "Handling Dangling and Wild Pointers", lessonkey: "dangling_wild_pointers" },
            { name: "The 'this' Pointer and Array of Objects", lessonkey: "this_pointer" },
            { name: "Using Standard C++ String Class", lessonkey: "string_class" },
            { name: "Multidimensional Arrays in Classes", lessonkey: "multi_arrays" }
        ]
    },
    {
        title: "Unit III: Data File Operations and Constructors",
        youtube: "https://www.youtube.com/watch?v=e7sAf4SbS_g&t=32251s",
        quizlink: "",
        lessons: [
            { name: "File Opening, Closing, and Modes", lessonkey: "file_operations" },
            { name: "Sequential and Random File Processing", lessonkey: "file_processing" },
            { name: "Binary File Operations", lessonkey: "binary_files" },
            { name: "Constructors and Destructors", lessonkey: "constructors_destructors" },
            { name: "Copy Constructor and Initializer Lists", lessonkey: "copy_constructor" }
        ]
    },
    {
        title: "Unit IV: Operator Overloading and Inheritance",
        youtube: "https://www.youtube.com/watch?v=e7sAf4SbS_g&t=37020s",
        quizlink: "",
        lessons: [
            { name: "Unary and Binary Operator Overloading", lessonkey: "operator_overloading" },
            { name: "Type Conversions and Class Types", lessonkey: "type_conversion" },
            { name: "Inheritance Basics and Types", lessonkey: "inheritance_basics" },
            { name: "Modes of Inheritance and Overriding", lessonkey: "inheritance_modes" },
            { name: "Resolving Ambiguities in Inheritance", lessonkey: "inheritance_ambiguities" }
        ]
    },
    {
        title: "Unit V: Dynamic Memory Management and Polymorphism",
        youtube: "https://www.youtube.com/watch?v=e7sAf4SbS_g&t=39558s",
        quizlink: "",
        lessons: [
            { name: "Dynamic Memory with new and delete", lessonkey: "dynamic_memory" },
            { name: "Virtual Destructors and Abstract Classes", lessonkey: "virtual_destructors" },
            { name: "Polymorphism and Virtual Functions", lessonkey: "polymorphism" },
            { name: "Pure Virtual Functions and Late Binding", lessonkey: "virtual_functions" }
        ]
    },
    {
        title: "Unit VI: Exception Handling, Templates, and STL",
        youtube: "https://www.youtube.com/watch?v=7hcQQEHZPiQ&t=130s",
        quizlink: "",
        lessons: [
            { name: "Basics of Exception Handling", lessonkey: "exception_handling" },
            { name: "Function and Class Templates", lessonkey: "templates" },
            { name: "Introduction to Standard Template Library", lessonkey: "stl_intro" },
            { name: "Using STL Containers - Vector and List", lessonkey: "stl_containers" }
        ]
    }
];

export const lessonData = {
    'intro_cin_cout': {
    title: "Introduction to cin and cout",
    description: "Learn the basics of input and output in C++ using cin and cout, which are fundamental for user interaction in console-based applications.",
    sections: [
        {
            "title": "What is cout?",
            "content": "cout (short for 'console output') is an object of the ostream class that is part of the iostream library in C++. It is used to output data to the standard output (usually the console). The insertion operator << is used to send data to cout. You can output various data types, including strings, integers, floating-point numbers, and more. Additionally, you can chain multiple << operators to output multiple values in a single statement.",
            "code": `#include <iostream>
        using namespace std;
    
        int main() {
            cout << "Hello, World!" << endl;
            cout << "C++ is fun!" << endl;
            return 0;
        }`
        },
        {
            "title": "What is cin?",
            "content": "cin (short for 'console input') is an object of the istream class that is used to read input from the standard input (usually the keyboard). It works with the extraction operator >> to retrieve data. Similar to cout, cin supports various data types. However, it is important to note that cin reads input until it encounters whitespace, making it less suitable for strings with spaces unless combined with getline.",
            "code": `#include <iostream>
        using namespace std;
    
        int main() {
            int age;
            cout << "Enter your age: ";
            cin >> age;
            cout << "You are " << age << " years old." << endl;
            return 0;
        }`
        },
        {
            "title": "Using cin and cout Together",
            "content": "cin and cout can be combined in a program to enable user interaction. For instance, you can prompt the user for input using cout, capture the input using cin, and then display the processed result back to the user using cout.",
            "code": `#include <iostream>
        using namespace std;
    
        int main() {
            string name;
            cout << "Enter your name: ";
            cin >> name;
            cout << "Hello, " << name << "!" << endl;
            return 0;
        }`
        },
        {
            "title": "Tips for Using cin and cout",
            "content": "1. Always include <iostream> and use the 'std' namespace or prefix cin and cout with 'std::'.\n2. Use endl or '\\n' to add a newline after output for better formatting.\n3. For strings with spaces, use getline(cin, variable) instead of cin >> variable.\n4. Handle input errors using cin.fail() to improve robustness.",
            "code": `#include <iostream>
        using namespace std;
    
        int main() {
            string fullName;
            cout << "Enter your full name: ";
            cin.ignore(); // Clear any leftover characters in the input buffer
            getline(cin, fullName); // Read the entire line
            cout << "Hello, " << fullName << "!" << endl;
            return 0;
        }`
        }
    ],
    practiceQuestions: [
        {
            question: "Write a program that takes two integers as input and displays their sum.",
            hint: "Use cin to read the integers and cout to display the result.",
            solution: `#include <iostream>
        using namespace std;
    
        int main() {
            int num1, num2;
            cout << "Enter two integers: ";
            cin >> num1 >> num2;
            cout << "The sum is: " << num1 + num2 << endl;
            return 0;
        }`
        },
        {
            question: "Create a program that asks the user for their favorite color and prints a personalized message.",
            hint: "Use a string variable to store the user's input.",
            solution: `#include <iostream>
        using namespace std;
    
        int main() {
            string color;
            cout << "What is your favorite color? ";
            cin >> color;
            cout << "Wow, " << color << " is a great choice!" << endl;
            return 0;
        }`
        },
        {
            question: "Implement a program that reads a floating-point number from the user and displays it.",
            hint: "Ensure to include the proper data type for the variable.",
            solution: `#include <iostream>
        using namespace std;
    
        int main() {
            float number;
            cout << "Enter a floating-point number: ";
            cin >> number;
            cout << "You entered: " << number << endl;
            return 0;
        }`
        },
        {
            question: "Write a program that asks the user for their first and last name and prints them together.",
            hint: "Use two string variables to store the first and last names.",
            solution: `#include <iostream>
        using namespace std;
    
        int main() {
            string firstName, lastName;
            cout << "Enter your first name: ";
            cin >> firstName;
            cout << "Enter your last name: ";
            cin >> lastName;
            cout << "Hello, " << firstName << " " << lastName << "!" << endl;
            return 0;
        }`
        },
        {
            question: "Enhance the name program to handle full names with spaces.",
            hint: "Use getline to read the input instead of cin >>.",
            solution: `#include <iostream>
        using namespace std;
    
        int main() {
            string fullName;
            cout << "Enter your full name: ";
            cin.ignore(); // Clear input buffer
            getline(cin, fullName);
            cout << "Nice to meet you, " << fullName << "!" << endl;
            return 0;
        }`
        }
    ]
},

    'classes_objects': {
    title: "Creating Classes and Class Objects",
    description: "Understand how to define classes and create objects in C++.",
    sections: [
        {
            title: "What is a Class?",
            content: "A class is a blueprint for creating objects. It defines a data type by bundling data and methods that work on the data into one single unit."
        },
        {
            title: "Defining a Class",
            content: "You define a class using the class keyword, followed by the class name and the body of the class enclosed in curly braces.",
            code: `#include <iostream>
        using namespace std;
    
        class Dog {
        public:
            void bark() {
                cout << "Woof!" << endl;
            }
        };
    
        int main() {
            Dog myDog;
            myDog.bark();
            return 0;
        }`
        },
        {
            title: "Creating Objects",
            content: "You create an object by declaring a variable of the class type. This allocates memory for the object.",
            code: `#include <iostream>
        using namespace std;
    
        class Car {
        public:
            string model;
            void display() {
                cout << "Car model: " << model << endl;
            }
        };
    
        int main() {
            Car myCar;
            myCar.model = "Toyota";
            myCar.display();
            return 0;
        }`
        },
        {
            title: "Simple Classes",
            content: "These are basic classes with attributes and methods.",
            code: `class Simple {
    public:
        void display() {
            cout << "Simple Class" << endl;
        }
};`
        },
        {
            title: "Static Classes",
            content: "Static classes contain only static members and methods.",
            code: `class StaticClass {
    public:
        static int count;
        static void display() {
            cout << "Count: " << count << endl;
        }
};
int StaticClass::count = 0;`
        },
        {
            title: "Parameterized Classes",
            content: "These classes use parameters in methods or constructors.",
            code: `class Parameterized {
    public:
        int value;
        Parameterized(int v) {
            value = v;
        }
};`
        },
        {
            title: "Friend Classes and Functions",
            content: "A friend function or class can access private and protected members of another class.",
            code: `#include <iostream>
        using namespace std;
    
        class Test {
        private:
            int value = 42;
            friend void showValue(Test t); // Friend function
        };
    
        void showValue(Test t) {
            cout << "Value: " << t.value << endl;
        }
    
        int main() {
            Test obj;
            showValue(obj);
            return 0;
        }`
        },
        {
            title: "Inheritance",
            content: "Inheritance allows a class (child) to inherit attributes and methods from another class (parent).",
            code: `#include <iostream>
        using namespace std;
    
        class Parent {
        public:
            void display() {
                cout << "This is the parent class." << endl;
            }
        };
    
        class Child : public Parent {
        public:
            void show() {
                cout << "This is the child class." << endl;
            }
        };
    
        int main() {
            Child c;
            c.display();
            c.show();
            return 0;
        }`
        }
    ],
    practiceQuestions: [
        {
            question: "Create a class named Student with attributes for name and age, and a method to display the details.",
            hint: "Define the class and create an object to test the method."
        },
        {
            question: "Implement a class named Rectangle that has methods to calculate the area and perimeter.",
            hint: "Include methods that take width and height as parameters."
        },
        {
            question: "Write a program that creates two objects of a class representing Books and displays their titles.",
            hint: "Use separate objects to hold different book details."
        },
        {
            question: "Design a class for a simple Calculator with methods for addition, subtraction, multiplication, and division.",
            hint: "Each method should accept two parameters and return the result."
        }
    ]
},
'structs_unions_enums': {
    title: "Structures, Unions, and Enumerations",
    description: "Learn about structures, unions, and enumerations in C++. These are powerful user-defined data types that help organize, optimize, and make data handling easier. Structures allow grouping related variables of different types, unions optimize memory usage by sharing the same memory for different members, and enumerations define a set of named integral constants for better code readability and maintainability.",
    sections: [
        {
            title: "What is a Structure?",
            content: "A structure is a user-defined data type in C++ that allows you to combine data items of different types into a single logical unit. Structures are particularly useful for representing real-world entities where attributes can have different data types. For example, a `Person` might have a name (string), age (integer), and height (float).",
            code: `#include <iostream>
        using namespace std;
    
        struct Person {
            string name;
            int age;
            float height;
        };
    
        int main() {
            Person person;
            person.name = "Alice";
            person.age = 30;
            person.height = 5.5;
            cout << person.name << " is " << person.age << " years old and " << person.height << " feet tall." << endl;
            return 0;
        }`
        },
        {
            title: "What is a Union?",
            content: "A union is a user-defined data type similar to a structure but with a key difference: it can store only one of its non-static data members at a time. All members share the same memory location, making unions memory-efficient. They are particularly useful when only one of the members will be used at a given time, such as storing a value that could be either an integer, a float, or a character.",
            code: `#include <iostream>
        using namespace std;
    
        union Data {
            int intVal;
            float floatVal;
            char charVal;
        };
    
        int main() {
            Data data;
            data.intVal = 10;
            cout << "Integer: " << data.intVal << endl;
            data.floatVal = 220.5;
            cout << "Float: " << data.floatVal << endl; // Note: this overwrites intVal
            data.charVal = 'A';
            cout << "Character: " << data.charVal << endl; // Note: this overwrites floatVal
            return 0;
        }`
        },
        {
            title: "What is an Enumeration?",
            content: "An enumeration (enum) is a user-defined data type that consists of a set of named integral constants. Enumerations improve code readability by allowing you to use meaningful names instead of numbers. For example, days of the week can be represented as `Sunday`, `Monday`, etc., instead of `0`, `1`, and so on. Enumerations are also type-safe, ensuring you don't accidentally assign invalid values.",
            code: `#include <iostream>
        using namespace std;
    
        enum Days { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
    
        int main() {
            Days today = Wednesday;
            cout << "Day number: " << today << endl; // Outputs 3
            if (today == Wednesday) {
                cout << "It's midweek!" << endl;
            }
            return 0;
        }`
        },
        {
            title: "Structures vs Unions",
            content: "While both structures and unions allow grouping of different data types, their primary difference lies in memory allocation. In structures, each member has its own memory, and all members can be accessed simultaneously. In unions, all members share the same memory, so only one member can hold a value at a time, which makes unions more memory-efficient in specific scenarios.",
            code: `#include <iostream>
        using namespace std;
    
        struct StructureExample {
            int intVal;
            float floatVal;
        };
    
        union UnionExample {
            int intVal;
            float floatVal;
        };
    
        int main() {
            StructureExample s;
            s.intVal = 10;
            s.floatVal = 220.5;
            cout << "Structure - Integer: " << s.intVal << ", Float: " << s.floatVal << endl;

            UnionExample u;
            u.intVal = 10;
            cout << "Union - Integer: " << u.intVal << endl;
            u.floatVal = 220.5; // Overwrites intVal
            cout << "Union - Float: " << u.floatVal << endl;
            return 0;
        }`
        },
        {
            title: "Advanced Enumerations in C++",
            content: "Modern C++ (C++11 and above) introduces scoped enumerations using the `enum class` keyword. Scoped enums provide better type safety and prevent name conflicts since the enumerators are scoped within the enum.",
            code: `#include <iostream>
        using namespace std;
    
        enum class Color { Red, Green, Blue };
    
        int main() {
            Color myColor = Color::Green;
            if (myColor == Color::Green) {
                cout << "The color is Green!" << endl;
            }
            return 0;
        }`
        }
    ],
    practiceQuestions: [
        {
            question: "Create a structure to represent a Book with title, author, and price attributes, and print the details.",
            hint: "Define the structure and use an object to store data."
        },
        {
            question: "Implement a union to represent a value that can either be an integer or a float, and demonstrate its use.",
            hint: "Use the union and assign values to test its functionality."
        },
        {
            question: "Write a program that uses an enumeration to represent the days of the week and display them.",
            hint: "Use a loop to iterate through the enumeration values."
        },
        {
            question: "Design a structure that contains a person's name, age, and height, and write a function to display this information.",
            hint: "Define the structure and implement a function that takes a structure object as a parameter."
        },
        {
            question: "Create a scoped enumeration (enum class) to represent different traffic light states and demonstrate switching between them.",
            hint: "Use an `enum class` and a switch statement to handle states like Red, Yellow, and Green."
        }
    ]
},

    'inline_memberfunc': {
    title: "Inline and Non-inline Member Functions",
    description: "Learn about inline and non-inline member functions in C++, their advantages, use cases, and performance implications. Inline functions are expanded directly at the call site, while non-inline functions are invoked at runtime.",
    sections: [
        {
            title: "What are Inline Functions?",
            content: "An inline function is a function defined inside the class declaration, suggesting the compiler to insert the complete function body directly at the call site. This reduces the overhead of a function call, such as saving registers, pushing arguments to the stack, and jumping to the function code.",
            code: `#include <iostream> // Include the iostream library for input and output
        using namespace std; // Use the standard namespace to avoid prefixing with std::

        class Math {
        public:
            inline int square(int x) { // Define an inline function for calculating the square of a number
                return x * x; // Return the square of the input number
            }
        };

        int main() {
            Math math; // Create an object of the Math class
            cout << "Square of 5: " << math.square(5) << endl; // Call the inline function and display the result
            return 0; // Indicate that the program ran successfully
        }`
        },
        {
            title: "Non-inline Functions",
            content: "Non-inline functions are member functions defined outside the class and are invoked when called. They do not provide the performance benefits of inline functions but are better for large or complex functions.",
            code: `#include <iostream> // Include the iostream library for input and output
        using namespace std; // Use the standard namespace to avoid prefixing with std::

        class Math {
        public:
            int cube(int x); // Declare a non-inline function to calculate the cube of a number
        };

        int Math::cube(int x) { // Define the function outside the class using the scope resolution operator ::
            return x * x * x; // Return the cube of the input number
        }

        int main() {
            Math math; // Create an object of the Math class
            cout << "Cube of 3: " << math.cube(3) << endl; // Call the non-inline function and display the result
            return 0; // Indicate that the program ran successfully
        }`
        },
        {
            title: "Inline Functions Outside the Class",
            content: "Inline functions can also be defined outside the class using the `inline` keyword. This approach allows cleaner class definitions while retaining inline behavior.",
            code: `#include <iostream> // Include the iostream library for input and output
        using namespace std; // Use the standard namespace to avoid prefixing with std::

        class Math {
        public:
            inline int add(int x, int y); // Declare an inline function for addition
        };

        inline int Math::add(int x, int y) { // Define the inline function outside the class
            return x + y; // Return the sum of two numbers
        }

        int main() {
            Math math; // Create an object of the Math class
            cout << "Addition of 5 and 7: " << math.add(5, 7) << endl; // Call the inline function and display the result
            return 0; // Indicate that the program ran successfully
        }`
        },
        {
            title: "Compiler Behavior with Inline Functions",
            content: "The `inline` keyword is a suggestion to the compiler. The compiler decides whether to inline a function based on factors such as size and complexity. Modern compilers can automatically optimize small functions without requiring the `inline` keyword."
        }
    ],
    practiceQuestions: [
        {
            question: "Create an inline function to calculate the area of a rectangle and use it in your main function.",
            hint: "Define the function in the class."
        },
        {
            question: "Implement a non-inline function to calculate the factorial of a number.",
            hint: "Define the function outside of the class and ensure it can be called in main."
        },
        {
            question: "Write a program that has both inline and non-inline functions and measures their performance.",
            hint: "Use the same calculation in both styles and print results."
        },
        {
            question: "Design a class with an inline function for finding the maximum of two numbers.",
            hint: "Make sure to call this inline function from the main method."
        },
        {
            question: "Create a class that contains an inline function for multiplication and a non-inline function for division. Demonstrate their usage.",
            hint: "Define one function inline inside the class and the other outside the class."
        },
        {
            question: "Explore compiler behavior by defining a large inline function and testing if it is treated as inline by the compiler.",
            hint: "Check the compiler's behavior for inlining large functions with complex logic."
        }
    ]
},

    'oop_concepts': {
        title: "Procedural vs. Object-Oriented Programming",
        description: "Learn the key differences between procedural programming and object-oriented programming (OOP).",
        sections: [
            {
                title: "What is Procedural Programming?",
                content: "Procedural programming is a programming paradigm based on the concept of procedure calls, where programs are structured as a sequence of procedures or functions.",
                code: `#include <iostream>
        using namespace std;
    
        void printMessage() {
            cout << "Hello from Procedural Programming!" << endl;
        }
    
        int main() {
            printMessage();
            return 0;
        }`
            },
            {
                title: "What is Object-Oriented Programming?",
                content: "Object-oriented programming (OOP) is based on the concept of 'objects', which can contain data and code: data in the form of fields, and code in the form of procedures.",
                code: `#include <iostream>
        using namespace std;
    
        class Greeting {
        public:
            void printMessage() {
                cout << "Hello from Object-Oriented Programming!" << endl;
            }
        };
    
        int main() {
            Greeting greet;
            greet.printMessage();
            return 0;
        }`
            },
            {
                title: "Key Differences",
                content: "1. **Structure**: Procedural programming is linear, whereas OOP is based on objects.\n2. **Data Handling**: In procedural programming, data is often separate from functions, while in OOP, data is bundled with functions.\n3. **Reusability**: OOP promotes code reusability through inheritance and polymorphism, which are not available in procedural programming."
            }
        ],
        practiceQuestions: [
            {
                question: "Write a program using procedural programming to calculate the sum of the first n natural numbers.",
                hint: "Use a loop and a function to achieve this."
            },
            {
                question: "Create a class that encapsulates the behavior of a bank account and demonstrates depositing and withdrawing money.",
                hint: "Include methods for the operations and a way to display the balance."
            },
            {
                question: "Implement both procedural and object-oriented versions of a simple program that manages a list of students.",
                hint: "Compare the two implementations."
            },
            {
                question: "Design a simple program in OOP to model a library system where books can be added and borrowed.",
                hint: "Use classes to represent Books and Library."
            }
        ]
    },
    'pointer_basics': {
        title: "Pointer Basics and Pointer Arithmetic",
        description: "Learn the fundamentals of pointers in C++ and how pointer arithmetic is used to access memory.",
        sections: [
            {
                title: "Introduction to Pointers",
                content: "Pointers are variables that store the memory address of another variable. They are declared using the asterisk (*) symbol. Pointers are essential for dynamic memory allocation and efficient array manipulation.",
                code: `int a = 10;
    int *ptr = &a;  // ptr now points to the memory address of a`
            },
            {
                title: "Dereferencing a Pointer",
                content: "Dereferencing a pointer means accessing the value at the memory location pointed to by the pointer. We use the `*` operator to dereference.",
                code: `int a = 20;
    int *ptr = &a;
    cout << *ptr;  // Output: 20`
            },
            {
                title: "Pointer Arithmetic",
                content: "Pointer arithmetic allows you to navigate through arrays. Adding or subtracting values to a pointer shifts its position in memory by a multiple of the pointed type's size.",
                code: `int arr[] = {10, 20, 30};
    int *ptr = arr;
    cout << *(ptr + 1);  // Output: 20`
            }
        ],
        practiceQuestions: [
            {
                question: "Write a program to declare a pointer, assign it to an integer variable, and print the variable’s address and value through the pointer.",
                hint: "Use `&` for address and `*` for dereferencing."
            },
            {
                question: "Create an array of integers and use a pointer to print each element in the array.",
                hint: "Use pointer arithmetic to traverse the array."
            },
            {
                question: "Write a function that takes an integer pointer as an argument and doubles the value it points to.",
                hint: "Use dereferencing within the function to modify the value."
            },
            {
                question: "Demonstrate how to use a pointer to swap the values of two variables.",
                hint: "Use a temporary variable to hold one value during the swap."
            },
            {
                question: "Write a program that declares two pointers pointing to different variables. Print their addresses and check if they are different.",
                hint: "Use `&` to get the addresses of each variable."
            }
        ]
    },
    'dangling_wild_pointers': {
        title: "Handling Dangling and Wild Pointers",
        description: "Understand the risks of dangling and wild pointers and how to avoid them.",
        sections: [
            {
                title: "What is a Dangling Pointer?",
                content: "A dangling pointer points to memory that has already been freed. Accessing it can lead to unpredictable behavior or crashes. Avoid this by setting pointers to `nullptr` after deletion.",
                code: `int *ptr = new int(10);
    delete ptr;
    ptr = nullptr;  // prevents dangling`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a program that demonstrates a dangling pointer. Use `nullptr` to avoid it after deallocation.",
                hint: "Use `delete` to deallocate and `nullptr` to reset."
            },
            {
                question: "Write a program with an uninitialized pointer and show how it could lead to a crash.",
                hint: "Declare a pointer without assignment, and try to access it."
            },
            {
                question: "Create a function that accepts a pointer to dynamically allocated memory, deletes the memory, and sets the pointer to `nullptr`.",
                hint: "Use `delete` inside the function and set the pointer to `nullptr`."
            },
            {
                question: "Write a program with a dynamically allocated array and a pointer to traverse it. Free the memory at the end and avoid dangling by resetting the pointer.",
                hint: "Use `new` to allocate the array, and `delete[]` for deallocation."
            },
            {
                question: "Demonstrate how to avoid wild pointers by initializing a pointer to `nullptr` and checking before accessing it.",
                hint: "Use `nullptr` assignment during pointer declaration."
            }
        ]
    },
    'this_pointer': {
        title: "The 'this' Pointer and Array of Objects",
        description: "Learn about the 'this' pointer in C++ and how arrays of objects are managed.",
        sections: [
            {
                title: "The 'this' Pointer",
                content: "In C++, the `this` pointer is an implicit parameter to all non-static member functions. It points to the object that invokes the function, enabling access to the object’s members within the class.",
                code: `class Sample {
        int x;
    public:
        Sample(int x) {
            this->x = x;
        }
    };`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a class with a member function that uses the `this` pointer to initialize a member variable.",
                hint: "Inside the constructor, use `this->` to refer to the member variable."
            },
            {
                question: "Write a program that demonstrates how the `this` pointer can resolve naming conflicts between member variables and parameters.",
                hint: "Use parameters with the same name as member variables."
            },
            {
                question: "Implement a method that returns the current object using the `this` pointer.",
                hint: "Return `*this` at the end of the function."
            },
            {
                question: "Create an array of objects of a class and initialize each object's member variable with a unique value.",
                hint: "Use a loop to initialize each object in the array."
            },
            {
                question: "Write a program where the `this` pointer is used to return an object from a member function that modifies the object's data.",
                hint: "Return `*this` after making changes to member variables."
            }
        ]
    },
    'string_class': {
        title: "Using Standard C++ String Class",
        description: "Explore the features of the C++ string class for handling text more efficiently than using C-style strings.",
        sections: [
            {
                title: "Creating a String",
                content: "The `std::string` class provides a flexible way to work with text. You can declare a string and use common string operations easily.",
                code: `#include <iostream>
    #include <string>
    using namespace std;
    
    int main() {
        string name = "Alice";
        cout << "Hello, " << name << endl;
        return 0;
    }`
            }
        ],
        practiceQuestions: [
            {
                question: "Write a program that takes a user’s name as input, stores it in a string, and then greets the user by name.",
                hint: "Use `cin` for input and `cout` for output."
            },
            {
                question: "Create a program that concatenates two strings using the `+` operator.",
                hint: "Use `+` between two strings and print the result."
            },
            {
                question: "Write a program that takes a sentence from the user and outputs its length.",
                hint: "Use the `.length()` method."
            },
            {
                question: "Ask the user to enter a word and check if it contains the letter 'a'.",
                hint: "Use `.find('a')` to locate 'a' in the string."
            },
            {
                question: "Write a program that replaces all spaces in a sentence with hyphens (`-`).",
                hint: "Use a loop or `.replace()` to modify the string."
            }
        ]
    },
    'multi_arrays': {
        title: "Multidimensional Arrays in Classes",
        description: "Understand how to use multidimensional arrays within classes to store complex data structures.",
        sections: [
            {
                title: "Defining Multidimensional Arrays",
                content: "Multidimensional arrays are arrays of arrays, often used to represent matrices or tables. In C++, they are defined by specifying multiple sizes in square brackets.",
                code: `int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };`
            }
        ],
        practiceQuestions: [
            {
                question: "Write a class `Matrix` with a 3x3 integer array. Add a method to initialize all elements to zero.",
                hint: "Use a nested loop in the method to set each element to zero."
            },
            {
                question: "Add a method to `Matrix` class that allows setting a specific element at a given row and column.",
                hint: "Use array indexing to set the value at the specified row and column."
            },
            {
                question: "Create a `Matrix` class with a method to print all elements in the matrix in a grid format.",
                hint: "Use a nested loop to print each row and column element."
            },
            {
                question: "Add a method to the `Matrix` class to transpose the matrix (swap rows and columns).",
                hint: "Use a loop to swap elements along the diagonal."
            },
            {
                question: "Write a program that creates a 2D array and fills it with the product of its indices (i.e., arr[i][j] = i * j).",
                hint: "Use nested loops and set each element as `i * j`."
            }
        ]
    },
    'file_operations': {
        title: "File Opening, Closing, and Modes",
        description: "Learn how to work with files in C++, including opening, closing, and different file modes for various operations.",
        sections: [
            {
                title: "Opening Files",
                content: "To open a file in C++, you use the `fstream`, `ifstream`, or `ofstream` classes from the `<fstream>` library. Each class allows different file access modes like reading, writing, or both.",
                code: `#include <fstream>
    using namespace std;
    
    int main() {
        ofstream file("example.txt");  // Opens file in write mode
        if (file.is_open()) {
            file << "Hello, world!";
            file.close();
        }
        return 0;
    }`
            },
            {
                title: "File Modes",
                content: "File modes like `ios::in` (read), `ios::out` (write), `ios::app` (append), etc., specify how files are accessed. Multiple modes can be combined using the `|` operator.",
                code: `ofstream file("example.txt", ios::out | ios::app);  // Opens in write and append mode`
            }
        ],
        practiceQuestions: [
            {
                question: "Write a program to open a file and write your name in it, then close the file.",
                hint: "Use `ofstream` to open and write to the file."
            },
            {
                question: "Modify the program to check if the file opened successfully before writing to it.",
                hint: "Use `is_open()` to check if the file is opened."
            },
            {
                question: "Write a program that opens a file in append mode and adds a new line of text to it.",
                hint: "Use `ios::app` mode in `ofstream`."
            },
            {
                question: "Create a program that reads from a file and prints its content to the console.",
                hint: "Use `ifstream` to read from the file."
            }
        ]
    },
    'file_processing': {
        title: "Sequential and Random File Processing",
        description: "Understand how to process files sequentially or randomly to access or modify specific data.",
        sections: [
            {
                title: "Sequential Processing",
                content: "In sequential processing, data is accessed linearly from the start of the file to the end. Useful for reading through files like logs.",
                code: `ifstream file("example.txt");
    string line;
    while (getline(file, line)) {
        cout << line << endl;
    }`
            },
            {
                title: "Random Processing",
                content: "Random access allows jumping to specific file locations. Use `seekg` (for reading) and `seekp` (for writing) to move the file pointer.",
                code: `file.seekg(10);  // Move read pointer to the 10th byte`
            }
        ],
        practiceQuestions: [
            {
                question: "Write a program to read a file sequentially and count the number of lines.",
                hint: "Use `getline()` in a loop to read lines."
            },
            {
                question: "Write a program to access the middle line in a file using random access.",
                hint: "Use `seekg()` to move the file pointer."
            },
            {
                question: "Create a program that modifies a specific line in a file using random access.",
                hint: "Use `seekp()` to jump to the desired location in the file."
            }
        ]
    },
    'binary_files': {
        title: "Binary File Operations",
        description: "Learn how to work with binary files for efficient storage and retrieval of data in a non-human-readable format.",
        sections: [
            {
                title: "Reading and Writing Binary Files",
                content: "Binary files store data in a compact format. Use `write()` to save data in binary format and `read()` to retrieve it.",
                code: `#include <fstream>
    using namespace std;
    
    int main() {
        ofstream file("binary.dat", ios::binary);
        int num = 1234;
        file.write((char*)&num, sizeof(num));
        file.close();
        return 0;
    }`
            },
            {
                title: "Reading from Binary Files",
                content: "To read binary data, open the file in binary mode and use `read()` to retrieve it.",
                code: `ifstream file("binary.dat", ios::binary);
    int num;
    file.read((char*)&num, sizeof(num));
    file.close();
    cout << num;`
            }
        ],
        practiceQuestions: [
            {
                question: "Write a program that writes an array of integers to a binary file.",
                hint: "Use `write()` in a loop to write each integer."
            },
            {
                question: "Create a program to read the integers from a binary file and display them.",
                hint: "Use `read()` in a loop to retrieve each integer."
            },
            {
                question: "Write a program that stores a struct in a binary file and retrieves it.",
                hint: "Convert the struct to a `char*` for `write()` and `read()`."
            }
        ]
    },
    'constructors_destructors': {
        title: "Constructors and Destructors",
        description: "Learn about constructors and destructors in C++, how they are used for object initialization and cleanup.",
        sections: [
            {
                title: "Constructors",
                content: "A constructor is a special member function called when an object is created. It can initialize members to default or specified values.",
                code: `class Sample {
        int x;
    public:
        Sample(int val) : x(val) {}
    };`
            },
            {
                title: "Destructors",
                content: "A destructor is called when an object goes out of scope or is deleted. It’s used for cleanup and releasing resources.",
                code: `class Sample {
    public:
        ~Sample() {
            cout << "Destructor called";
        }
    };`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a class with a constructor that initializes a member variable and a destructor that displays a message.",
                hint: "Use `~ClassName()` for the destructor."
            },
            {
                question: "Write a program that dynamically allocates an object and deletes it. Observe when the destructor is called.",
                hint: "Use `new` to create and `delete` to remove the object."
            },
            {
                question: "Add a parameterized constructor to initialize different objects with unique values.",
                hint: "Pass values to the constructor during object creation."
            }
        ]
    },
    'copy_constructor': {
        title: "Copy Constructor and Initializer Lists",
        description: "Explore copy constructors and initializer lists for efficient object initialization and handling object copying.",
        sections: [
            {
                title: "Copy Constructor",
                content: "A copy constructor is a special constructor that initializes an object using another object of the same class. It's used when passing or returning objects by value.",
                code: `class Sample {
        int x;
    public:
        Sample(int val) : x(val) {}
        Sample(const Sample &obj) : x(obj.x) {}  // Copy constructor
    };`
            },
            {
                title: "Initializer Lists",
                content: "Initializer lists provide a way to initialize class members before the constructor body executes, improving performance especially for const and reference members.",
                code: `class Sample {
        const int x;
    public:
        Sample(int val) : x(val) {}
    };`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a class with a copy constructor that allows copying of objects.",
                hint: "Use `ClassName(const ClassName &obj)` to define the copy constructor."
            },
            {
                question: "Write a program that demonstrates the use of an initializer list to initialize a `const` member.",
                hint: "Use `ClassName() : constMember(value) {}` format."
            },
            {
                question: "Write a function that takes an object by value and prints its contents using the copy constructor.",
                hint: "Observe how the copy constructor is called when passing by value."
            },
            {
                question: "Demonstrate the difference between shallow and deep copies using the copy constructor.",
                hint: "If using pointers, ensure each object has a separate copy of dynamically allocated data."
            }
        ]
    },
    'operator_overloading': {
        title: "Unary and Binary Operator Overloading",
        description: "Understand how to overload unary and binary operators in C++ to allow custom behavior for built-in operations on user-defined types.",
        sections: [
            {
                title: "Unary Operator Overloading",
                content: "Unary operators operate on a single operand. To overload a unary operator, define a member function with the operator keyword followed by the operator you want to overload.",
                code: `class Counter {
        int count;
    public:
        Counter() : count(0) {}
        void operator++() { ++count; }  // Overloading ++
        int getCount() { return count; }
    };`
            },
            {
                title: "Binary Operator Overloading",
                content: "Binary operators operate on two operands. To overload them, define a member function or a friend function.",
                code: `class Complex {
        float real, imag;
    public:
        Complex(float r = 0, float i = 0) : real(r), imag(i) {}
        Complex operator+(const Complex &obj) {
            return Complex(real + obj.real, imag + obj.imag);
        }
    };`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a class that overloads the `++` operator to increment a private integer.",
                hint: "Define a member function to implement the operator."
            },
            {
                question: "Implement a class that overloads the `+` operator for adding two complex numbers.",
                hint: "Return a new object with the summed real and imaginary parts."
            },
            {
                question: "Write a program that overloads the `<<` operator to print the contents of a class.",
                hint: "Define a friend function to access private members."
            }
        ]
    },
    'type_conversion': {
        title: "Type Conversions and Class Types",
        description: "Learn about type conversions in C++ and how to define conversion operators and constructors to facilitate conversions between types.",
        sections: [
            {
                title: "Implicit Conversion",
                content: "Implicit conversion occurs automatically when you assign a value of one type to a variable of another type. C++ provides built-in support for certain conversions.",
                code: `class Fraction {
        int numerator, denominator;
    public:
        Fraction(int num, int denom) : numerator(num), denominator(denom) {}
    };`
            },
            {
                title: "Explicit Conversion",
                content: "To define a conversion operator, use the `operator` keyword followed by the target type. This allows explicit conversions from one type to another.",
                code: `class Fraction {
    public:
        operator float() {
            return (float)numerator / denominator;  // Convert to float
        }
    };`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a class that can be implicitly converted from an integer to a fraction.",
                hint: "Define a constructor that accepts an integer."
            },
            {
                question: "Implement a conversion operator that converts a fraction to a float.",
                hint: "Use the `operator float()` syntax."
            },
            {
                question: "Write a program that demonstrates both implicit and explicit conversions.",
                hint: "Show cases of both conversions in action."
            }
        ]
    },
    'inheritance_basics': {
        title: "Inheritance Basics and Types",
        description: "Explore the fundamentals of inheritance in C++, including base and derived classes and the different types of inheritance.",
        sections: [
            {
                title: "What is Inheritance?",
                content: "Inheritance allows a class (derived class) to inherit properties and behaviors (methods) from another class (base class). This promotes code reusability.",
                code: `class Base {
    public:
        void display() { cout << "Base class"; }
    };
    
    class Derived : public Base {
    public:
        void show() { cout << "Derived class"; }
    };`
            },
            {
                title: "Types of Inheritance",
                content: "C++ supports several types of inheritance: single, multiple, multilevel, hierarchical, and hybrid. Each type defines how classes relate to each other.",
                code: `class A {};
    class B : public A {}; // Single Inheritance
    class C : public A {}; // Hierarchical Inheritance
    class D : public B, public C {}; // Multiple Inheritance`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a base class and a derived class to demonstrate single inheritance.",
                hint: "Define methods in both classes to show the relationship."
            },
            {
                question: "Implement multiple inheritance using two base classes.",
                hint: "Show how the derived class can access methods from both base classes."
            },
            {
                question: "Write a program to demonstrate multilevel inheritance.",
                hint: "Create a chain of inheritance with three classes."
            }
        ]
    },
    'inheritance_modes': {
        title: "Modes of Inheritance and Overriding",
        description: "Understand different modes of inheritance (public, protected, private) and how method overriding works in derived classes.",
        sections: [
            {
                title: "Modes of Inheritance",
                content: "Inheritance can be public, protected, or private, affecting the accessibility of base class members in derived classes.",
                code: `class Base {
    protected:
        int x;
    };
    
    class Derived : protected Base {};  // Protected inheritance`
            },
            {
                title: "Method Overriding",
                content: "Method overriding allows a derived class to provide a specific implementation of a method already defined in its base class.",
                code: `class Base {
    public:
        virtual void display() { cout << "Base display"; }
    };
    
    class Derived : public Base {
    public:
        void display() override { cout << "Derived display"; }
    };`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a base class with a method, then derive a class that overrides that method.",
                hint: "Use the `virtual` keyword in the base class."
            },
            {
                question: "Write a program demonstrating public, protected, and private inheritance.",
                hint: "Show how members are accessed in derived classes."
            },
            {
                question: "Implement a scenario where method overriding is used effectively.",
                hint: "Show polymorphic behavior with base and derived classes."
            }
        ]
    },
    'inheritance_ambiguities': {
        title: "Resolving Ambiguities in Inheritance",
        description: "Learn how to resolve ambiguities that can arise from multiple inheritance and how to use virtual inheritance.",
        sections: [
            {
                title: "Ambiguities in Multiple Inheritance",
                content: "Ambiguities can occur when a derived class inherits from multiple base classes that have members with the same name. Use scope resolution to resolve these.",
                code: `class A {
    public:
        void display() { cout << "A"; }
    };
    
    class B {
    public:
        void display() { cout << "B"; }
    };
    
    class C : public A, public B {
    public:
        void display() {
            A::display();  // Resolving ambiguity
        }
    };`
            },
            {
                title: "Virtual Inheritance",
                content: "Virtual inheritance ensures that only one instance of a base class is shared among derived classes, resolving diamond problem ambiguities.",
                code: `class A {
    public:
        void display() { cout << "A"; }
    };
    
    class B : virtual public A {};
    class C : virtual public A {};
    
    class D : public B, public C {};  // D has only one A`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a scenario where an ambiguity arises due to multiple inheritance.",
                hint: "Use two base classes with the same method name."
            },
            {
                question: "Demonstrate the use of scope resolution to resolve ambiguities.",
                hint: "Show how to call the correct method from the base class."
            },
            {
                question: "Implement a program that uses virtual inheritance to prevent the diamond problem.",
                hint: "Create a diamond shape inheritance structure."
            }
        ]
    },
    'dynamic_memory': {
        title: "Dynamic Memory with new and delete",
        description: "Learn about dynamic memory allocation in C++ using the `new` and `delete` operators. Understand how to manage memory efficiently and avoid memory leaks.",
        sections: [
            {
                title: "Using new for Dynamic Allocation",
                content: "The `new` operator allocates memory on the heap for a variable and returns a pointer to it. Always ensure to match every `new` with a corresponding `delete` to prevent memory leaks.",
                code: `int* ptr = new int;  // Allocating memory
    *ptr = 10;               // Assigning a value
    delete ptr;             // Deallocating memory`
            },
            {
                title: "Using delete for Memory Deallocation",
                content: "The `delete` operator deallocates memory that was previously allocated with `new`. For arrays, use `delete[]` to ensure proper cleanup.",
                code: `int* arr = new int[5];  // Allocating array
    delete[] arr;                // Deallocating array memory`
            }
        ],
        practiceQuestions: [
            {
                question: "Write a program that dynamically allocates an array of integers and initializes it with values.",
                hint: "Use `new` to allocate the array and a loop to assign values."
            },
            {
                question: "Implement a function that takes a dynamically allocated integer, modifies its value, and frees the memory.",
                hint: "Ensure to use `delete` after modifying the value."
            },
            {
                question: "Create a program that demonstrates memory leaks by failing to deallocate memory.",
                hint: "Allocate memory without calling `delete`."
            }
        ]
    },
    'virtual_destructors': {
        title: "Virtual Destructors and Abstract Classes",
        description: "Understand the importance of virtual destructors in C++ to ensure proper cleanup of derived classes. Explore abstract classes and their role in polymorphism.",
        sections: [
            {
                title: "Importance of Virtual Destructors",
                content: "A destructor in a base class should be declared as virtual to ensure that the derived class destructor is called when an object is deleted through a base class pointer.",
                code: `class Base {
    public:
        virtual ~Base() { /* cleanup code */ }
    };
    
    class Derived : public Base {
    public:
        ~Derived() { /* specific cleanup code */ }
    };`
            },
            {
                title: "Abstract Classes",
                content: "An abstract class is a class that cannot be instantiated and typically contains at least one pure virtual function. This serves as a base for derived classes.",
                code: `class Abstract {
    public:
        virtual void pureVirtualFunc() = 0;  // Pure virtual function
    };`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a base class with a virtual destructor and a derived class. Demonstrate proper destruction.",
                hint: "Use base class pointers to delete derived class objects."
            },
            {
                question: "Implement an abstract class and derive multiple classes from it, ensuring each derived class implements the pure virtual function.",
                hint: "Create different behaviors in the derived classes."
            },
            {
                question: "Write a program that demonstrates the need for virtual destructors when using base class pointers.",
                hint: "Show memory cleanup with and without virtual destructors."
            }
        ]
    },
    'polymorphism': {
        title: "Polymorphism and Virtual Functions",
        description: "Explore the concept of polymorphism in C++ and how virtual functions enable runtime polymorphism, allowing derived classes to be treated as their base class.",
        sections: [
            {
                title: "Understanding Polymorphism",
                content: "Polymorphism allows methods to do different things based on the object that it is acting upon, even when the method calls are made through base class pointers.",
                code: `class Base {
    public:
        virtual void display() { cout << "Base Display"; }
    };
    
    class Derived : public Base {
    public:
        void display() override { cout << "Derived Display"; }
    };`
            },
            {
                title: "Using Virtual Functions",
                content: "Virtual functions enable polymorphism in C++. They allow a derived class to provide a specific implementation of a method that is already defined in its base class.",
                code: `Base* b = new Derived();
    b->display();  // Calls Derived's display method
    delete b;`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a base class with a virtual function and derive multiple classes from it, each implementing the virtual function differently.",
                hint: "Demonstrate polymorphic behavior with an array of base class pointers."
            },
            {
                question: "Implement a program that shows how virtual functions facilitate runtime polymorphism.",
                hint: "Use base class pointers to call derived class methods."
            },
            {
                question: "Write a program that illustrates the difference between static and dynamic binding.",
                hint: "Show how method calls differ when using base and derived class pointers."
            }
        ]
    },
    'virtual_functions': {
        title: "Pure Virtual Functions and Late Binding",
        description: "Learn about pure virtual functions in C++ and how they contribute to late binding in object-oriented programming, facilitating abstraction and design.",
        sections: [
            {
                title: "Understanding Pure Virtual Functions",
                content: "A pure virtual function is a function declared in a base class that has no definition. It forces derived classes to implement the function, creating an interface.",
                code: `class Abstract {
    public:
        virtual void doWork() = 0;  // Pure virtual function
    };`
            },
            {
                title: "Late Binding",
                content: "Late binding refers to the method resolution that occurs at runtime. Virtual functions use late binding to determine which method to call based on the object's type.",
                code: `Abstract* obj = new Derived();
    obj->doWork();  // Calls the implementation in Derived at runtime
    delete obj;`
            }
        ],
        practiceQuestions: [
            {
                question: "Define an abstract class with a pure virtual function and create derived classes implementing that function.",
                hint: "Show how each derived class provides its unique behavior."
            },
            {
                question: "Write a program demonstrating late binding with virtual functions.",
                hint: "Use an array of base class pointers pointing to derived class objects."
            },
            {
                question: "Implement a scenario where pure virtual functions enforce implementation in derived classes.",
                hint: "Try to instantiate an abstract class to demonstrate the error."
            }
        ]
    },
    'exception_handling': {
        title: "Basics of Exception Handling",
        description: "Learn the fundamentals of exception handling in C++. Understand how to catch and throw exceptions to create robust programs.",
        sections: [
            {
                title: "What is Exception Handling?",
                content: "Exception handling is a mechanism to handle runtime errors in a controlled way, ensuring the program can continue executing or terminate gracefully.",
                code: `try {
        // Code that may throw an exception
    } catch (const std::exception& e) {
        // Code to handle the exception
    }`
            },
            {
                title: "Throwing Exceptions",
                content: "You can throw exceptions using the `throw` keyword followed by an instance of an exception class. This will interrupt normal flow and transfer control to the nearest catch block.",
                code: `if (condition) {
        throw std::runtime_error("Error message");
    }`
            },
            {
                title: "Catching Exceptions",
                content: "Catch blocks allow you to define how to respond to specific exceptions. You can have multiple catch blocks to handle different types of exceptions.",
                code: `try {
        // Code that may throw an exception
    } catch (const std::runtime_error& e) {
        // Handle runtime error
    } catch (const std::exception& e) {
        // Handle any other exception
    }`
            }
        ],
        practiceQuestions: [
            {
                question: "Write a program that throws an exception for a division by zero error.",
                hint: "Use the `throw` statement to handle the division operation."
            },
            {
                question: "Implement a function that catches different exceptions and displays a message based on the exception type.",
                hint: "Use multiple catch blocks for different exception types."
            },
            {
                question: "Create a class that handles file operations and throws exceptions for file not found or permission errors.",
                hint: "Define custom exceptions for your file handling."
            }
        ]
    },
    'templates': {
        title: "Function and Class Templates",
        description: "Explore the use of templates in C++ to create generic functions and classes that can operate on different data types.",
        sections: [
            {
                title: "Understanding Function Templates",
                content: "Function templates allow you to define a function without specifying the exact data type. The compiler generates the appropriate function when it is called with a specific type.",
                code: `template <typename T>
    T add(T a, T b) {
        return a + b;
    }`
            },
            {
                title: "Creating Class Templates",
                content: "Class templates enable you to define a class that can handle different data types. The type is specified when creating an object of the template class.",
                code: `template <typename T>
    class Box {
    public:
        T value;
        Box(T v) : value(v) {}
    };`
            },
            {
                title: "Specializing Templates",
                content: "You can provide a specific implementation for a template for a particular data type using template specialization.",
                code: `template <>
    class Box<int> {
    public:
        int value;
        Box(int v) : value(v) {}
    };`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a function template that swaps two variables of any type.",
                hint: "Use a template parameter for the function."
            },
            {
                question: "Define a class template for a simple stack that can hold any data type.",
                hint: "Implement push and pop functions."
            },
            {
                question: "Implement a function template that finds the maximum of three values of any type.",
                hint: "Use conditional statements to compare the values."
            }
        ]
    },
    'stl_intro': {
        title: "Introduction to Standard Template Library",
        description: "Get introduced to the Standard Template Library (STL) in C++. Understand the components of STL and its advantages in programming.",
        sections: [
            {
                title: "What is STL?",
                content: "The Standard Template Library is a powerful set of C++ template classes that provides general-purpose classes and functions with templates for data structures and algorithms.",
                code: `#include <vector>
    #include <algorithm>`
            },
            {
                title: "Components of STL",
                content: "STL consists of algorithms, containers, and iterators. Containers are data structures, algorithms are operations on containers, and iterators allow traversal of container elements.",
                code: `std::vector<int> vec;  // Container example`
            },
            {
                title: "Advantages of Using STL",
                content: "STL provides ready-to-use classes and functions that save development time, increase code reliability, and offer efficient performance for common tasks.",
                code: `std::sort(vec.begin(), vec.end());  // Algorithm example`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a simple program that demonstrates the use of the vector container to store and display integers.",
                hint: "Use vector methods like push_back() and size()."
            },
            {
                question: "Implement a program that sorts an array of integers using STL algorithms.",
                hint: "Use std::sort() to sort the array."
            },
            {
                question: "Write a program that uses STL iterators to traverse and print elements of a list.",
                hint: "Use list::iterator for traversal."
            }
        ]
    },
    'stl_containers': {
        title: "Using STL Containers - Vector and List",
        description: "Dive deeper into the STL by learning how to use vector and list containers for efficient data management.",
        sections: [
            {
                title: "Working with Vectors",
                content: "Vectors are dynamic arrays that can resize automatically. They provide random access to elements and efficient insertion and deletion at the end.",
                code: `std::vector<int> vec = {1, 2, 3};
    vec.push_back(4);  // Add element at the end`
            },
            {
                title: "Working with Lists",
                content: "Lists are doubly linked lists that allow efficient insertion and deletion of elements at any position. They do not provide direct access like vectors.",
                code: `std::list<int> lst = {1, 2, 3};
    lst.push_front(0);  // Add element at the front`
            },
            {
                title: "Choosing Between Vector and List",
                content: "Use vectors when you need random access and performance for large amounts of data, and lists when you frequently add or remove elements.",
                code: `if (useVector) {
        // use vector operations
    } else {
        // use list operations
    }`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a program that demonstrates adding and removing elements from a vector.",
                hint: "Use push_back() and pop_back() methods."
            },
            {
                question: "Implement a program that shows the differences in performance between vector and list when inserting elements.",
                hint: "Measure time taken for various operations."
            },
            {
                question: "Write a program that initializes a list with values and removes duplicates.",
                hint: "Use unique() in combination with list::erase()."
            }
        ]
    }
};