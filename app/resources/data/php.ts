export const units = [
    {
        title: "Unit I: PHP Fundamentals",
        youtube: "https://youtu.be/unit1_overview",
        quizlink: "https://quizlink.com/unit1_quiz",
        lessons: [
            { name: "PHP, MySQL, and XAMPP Installation", lessonkey: "php_mysql_xampp_installation" },
            { name: "PHP Basic Syntax", lessonkey: "php_basic_syntax" },
            { name: "PHP Data Types", lessonkey: "php_data_types" },
            { name: "PHP Variables", lessonkey: "php_variables" },
            { name: "PHP Constants", lessonkey: "php_constants" },
            { name: "PHP Expressions and Operators", lessonkey: "php_expressions_operators" },
            { name: "PHP Control Structures", lessonkey: "php_control_structures" },
            { name: "PHP Loops", lessonkey: "php_loops" }
        ]
    },
    {
        title: "Unit II: PHP Arrays and Functions",
        youtube: "https://youtu.be/unit2_overview",
        quizlink: "https://quizlink.com/unit2_quiz",
        lessons: [
            { name: "PHP Enumerated Arrays", lessonkey: "php_enumerated_arrays" },
            { name: "PHP Associative Arrays", lessonkey: "php_associative_arrays" },
            { name: "PHP Multi-Dimensional Arrays", lessonkey: "php_multidimensional_arrays" },
            { name: "PHP Functions: Syntax and Arguments", lessonkey: "php_functions_syntax" },
            { name: "Pass by Value & Reference", lessonkey: "php_pass_by_value_reference" },
            { name: "PHP Variable Scope", lessonkey: "php_variable_scope" },
            { name: "Using PHP include() and require()", lessonkey: "php_include_require" }
        ]
    },
    {
        title: "Unit III: PHP Forms",
        youtube: "https://youtu.be/unit3_overview",
        quizlink: "https://quizlink.com/unit3_quiz",
        lessons: [
            { name: "PHP Form Handling", lessonkey: "php_form_handling" },
            { name: "PHP GET and POST", lessonkey: "php_get_post" },
            { name: "PHP Form Validation", lessonkey: "php_form_validation" },
            { name: "PHP Form Sanitization", lessonkey: "php_form_sanitization" }
        ]
    },
    {
        title: "Unit IV: PHP Cookies, Sessions, and String Handling",
        youtube: "https://youtu.be/unit4_overview",
        quizlink: "https://quizlink.com/unit4_quiz",
        lessons: [
            { name: "PHP Cookie Handling", lessonkey: "php_cookie_handling" },
            { name: "PHP Session Handling", lessonkey: "php_session_handling" },
            { name: "PHP Login Session", lessonkey: "php_login_session" },
            { name: "String Patterns and Matching", lessonkey: "php_string_patterns" },
            { name: "PHP Sending Emails", lessonkey: "php_sending_emails" },
            { name: "PHP File Uploading", lessonkey: "php_file_uploading" },
            { name: "PHP Filters and Error Handling", lessonkey: "php_filters_error_handling" }
        ]
    },
    {
        title: "Unit V: Object-Oriented Programming in PHP",
        youtube: "https://youtu.be/unit5_overview",
        quizlink: "https://quizlink.com/unit5_quiz",
        lessons: [
            { name: "Defining PHP Classes", lessonkey: "php_classes" },
            { name: "Creating and Using Objects", lessonkey: "php_objects" },
            { name: "Calling Member Functions", lessonkey: "php_member_functions" },
            { name: "Constructor Functions", lessonkey: "php_constructor_functions" },
            { name: "Inheritance and Function Overriding", lessonkey: "php_inheritance" },
            { name: "PHP Interfaces and Abstract Classes", lessonkey: "php_interfaces_abstract" }
        ]
    },
    {
        title: "Unit VI: Basic MySQL and SQL Queries",
        youtube: "https://youtu.be/unit6_overview",
        quizlink: "https://quizlink.com/unit6_quiz",
        lessons: [
            { name: "Database Basics", lessonkey: "mysql_database_basics" },
            { name: "Using PHPMyAdmin", lessonkey: "phpmyadmin" },
            { name: "Connecting to MySQL with PHP", lessonkey: "mysql_connect" },
            { name: "MySQL CRUD Operations", lessonkey: "mysql_crud_operations" },
            { name: "Using WHERE, Order By, and Group By", lessonkey: "mysql_where_orderby_groupby" },
            { name: "SQL Aggregate Functions", lessonkey: "sql_aggregate_functions" }
        ]
    }
];


export const lessonData = {
    php_mysql_xampp_installation: {
        "title": "PHP, MySQL, and XAMPP Installation",
        "description": "Learn to set up PHP and MySQL on your computer using XAMPP, a cross-platform server solution that includes Apache and MariaDB.",
        "sections": [
            {
                "title": "Installing XAMPP",
                "content": "Download XAMPP from https://www.apachefriends.org and follow the installation instructions. XAMPP includes Apache (for hosting web pages) and MySQL (for databases), which are essential for running PHP applications."
            },
            {
                "title": "Running XAMPP and Setting Up PHP",
                "content": "After installing XAMPP, open the Control Panel, and start the Apache and MySQL modules. This will set up a local server environment for PHP and MySQL.",
                "points": [
                    "Make sure to allow XAMPP through your firewall to avoid connection issues.",
                    "PHP files should be placed in the `htdocs` folder inside the XAMPP installation directory for them to be accessible on the local server."
                ]
            },
            {
                "title": "Testing the PHP Installation",
                "content": "Create a PHP file named `index.php` with the code below, and place it in the `htdocs` folder. Open your browser and go to `http://localhost/index.php` to see the output.",
                "code": `<?php echo "Hello, PHP!"; ?>`
            }
        ],
        "pitfalls": [
            "Ensure Apache and MySQL are running in XAMPP when testing PHP and database connections.",
            "If `localhost` doesn’t work, try accessing it by IP address (127.0.0.1)."
        ],
        "summary": "Installing XAMPP provides a full local server environment to run PHP applications and MySQL databases.",
        "practiceQuestions": [
            {
                "question": "Download XAMPP and run Apache and MySQL on your system.",
                "hint": "Go to the Control Panel and start Apache and MySQL."
            },
            {
                "question": "Create a simple PHP file to display 'Hello, PHP!' in your browser.",
                "hint": "Use the `echo` function in PHP."
            }
        ]
    },
    php_basic_syntax: {
        "title": "PHP Basic Syntax",
        "description": "Understand the basic syntax of PHP, including opening and closing tags, and using `echo` to display text.",
        "sections": [
            {
                "title": "PHP Opening and Closing Tags",
                "content": "PHP code should be written inside `<?php ... ?>` tags. This allows the server to interpret the code as PHP."
            },
            {
                "title": "Using `echo` to Display Output",
                "content": "`echo` is a PHP command used to output text to the browser. For example:",
                "code": `<?php echo "Hello, World!"; ?>`
            }
        ],
        "pitfalls": [
            "Ensure that PHP tags are properly closed to avoid syntax errors.",
            "PHP statements should end with a semicolon."
        ],
        "summary": "Basic syntax in PHP includes using PHP tags and the `echo` function to display text.",
        "practiceQuestions": [
            {
                "question": "Write a PHP script to display 'Welcome to PHP!'",
                "hint": "Use `echo` with a string inside the PHP tags."
            }
        ]
    },
    php_data_types: {
        "title": "PHP Data Types",
        "description": "Learn about different data types in PHP, including strings, integers, floats, and booleans.",
        "sections": [
            {
                "title": "Overview of PHP Data Types",
                "content": "PHP supports various data types, including strings, integers, floats, booleans, arrays, objects, and NULL."
            },
            {
                "title": "Examples of Common Data Types",
                "content": "Below are examples of commonly used data types in PHP:",
                "code": `<?php
                    $string = "Hello, World!";
                    $integer = 42;
                    $float = 3.14;
                    $boolean = true;
                ?>`
            }
        ],
        "pitfalls": [
            "Avoid using incompatible data types in expressions, which may cause errors.",
            "PHP data types are loosely typed, meaning PHP does not require explicit type declaration."
        ],
        "summary": "PHP supports multiple data types, enabling flexible data storage and manipulation.",
        "practiceQuestions": [
            {
                "question": "Create a variable to store your age as an integer and display it.",
                "hint": "Declare a variable using `$` and assign an integer value."
            }
        ]
    },
    php_variables: {
        title: "PHP Variables",
        description: "Learn how to declare and use variables in PHP, including naming rules and variable scope.",
        sections: [
            {
                title: "Declaring Variables in PHP",
                content: "Variables in PHP are declared using the `$` symbol, followed by the variable name.",
                code: `<?php
$name = "John Doe";
$age = 30;
?>`
            },
            {
                title: "Variable Scope",
                content: "PHP has three main variable scopes: local, global, and static.",
                code: `<?php
$globalVar = "Global";
function test() {
    global $globalVar;
    echo $globalVar;
}
test();
?>`
            }
        ],
        pitfalls: [
            "Variable names are case-sensitive, so `$name` and `$Name` are different.",
            "Using undeclared variables will lead to warnings.",
            "Be cautious with global variables inside functions, as they require the `global` keyword."
        ],
        practiceQuestions: [
            {
                question: "Declare a variable to store your age and print it.",
                hint: "Use `$age = 25;` then echo the variable."
            },
            {
                question: "Use a global variable inside a function.",
                hint: "Declare the variable outside, use `global` inside the function to access it."
            }
        ]
    },
    php_constants: {
        title: "PHP Constants",
        description: "Understand how to declare and use constants in PHP, which are immutable values that cannot change after being set.",
        sections: [
            {
                title: "Defining Constants",
                content: "Constants are defined using the `define()` function, and they cannot be changed once set.",
                code: `<?php
define("SITE_NAME", "My Website");
echo SITE_NAME;
?>`
            }
        ],
        pitfalls: [
            "Constants are global and can be accessed anywhere, so use unique names.",
            "Constants cannot be undefined or redefined.",
            "Unlike variables, constants do not use the `$` symbol."
        ],
        practiceQuestions: [
            {
                question: "Define a constant for the name of your website and display it.",
                hint: "Use `define()` to set and `echo` to display it."
            }
        ]
    },
    php_expressions_operators: {
        title: "PHP Expressions and Operators",
        description: "Learn about expressions and operators in PHP, including arithmetic, assignment, and comparison operators.",
        sections: [
            {
                title: "Arithmetic Operators",
                content: "Arithmetic operators are used for mathematical operations like addition, subtraction, multiplication, and division. Examples include `+`, `-`, `*`, and `/`.",
                code: `<?php
                    $a = 10;
                    $b = 5;
                    $sum = $a + $b; // 15
                ?>`
            },
            {
                title: "Assignment and Comparison Operators",
                content: "Assignment operators are used to assign values to variables (e.g., `=`). Comparison operators, like `==` and `!=`, are used to compare values.",
                points: [
                    "The `==` operator checks for equality in value, while `===` checks for equality in both value and type.",
                    "The assignment operator `+=` can be used to add and assign in one step, like `$x += 5` (equivalent to `$x = $x + 5`)."
                ]
            },
            {
                title: "Logical Operators",
                content: "Logical operators, such as `&&` (and), `||` (or), and `!` (not), are used to combine or invert expressions."
            }
        ],
        pitfalls: [
            "Be cautious with operator precedence; use parentheses to clarify complex expressions.",
            "Avoid using `==` for type comparisons where `===` is more accurate."
        ],
        summary: "Operators in PHP allow you to perform calculations, assign values, compare variables, and create complex expressions.",
        practiceQuestions: [
            {
                question: "Create an expression to add two numbers and compare if the result is greater than a third number.",
                hint: "Use both arithmetic and comparison operators."
            }
        ]
    },
    php_control_structures: {
        "title": "PHP Control Structures",
        "description": "Explore control structures in PHP, including conditional statements and the switch statement.",
        "sections": [
            {
                "title": "If, Elseif, and Else Statements",
                "content": "Conditional statements help control the flow of a program. The `if` statement runs code if a condition is true; `elseif` and `else` handle additional conditions or defaults.",
                "code": `<?php
                    $age = 20;
                    if ($age >= 18) {
                        echo "You are an adult.";
                    } else {
                        echo "You are a minor.";
                    }
                ?>`
            },
            {
                "title": "Switch Statement",
                "content": "The `switch` statement is used when comparing a variable to multiple values. It’s more concise than using multiple `if` statements for simple equality checks.",
                "code": `<?php
                    $day = "Monday";
                    switch ($day) {
                        case "Monday":
                            echo "Start of the work week.";
                            break;
                        case "Friday":
                            echo "Almost weekend!";
                            break;
                        default:
                            echo "Another day.";
                    }
                ?>`
            }
        ],
        "pitfalls": [
            "Remember to include `break` statements in switch cases to avoid fall-through errors.",
            "Check conditions carefully, especially for complex nested statements."
        ],
        "summary": "Control structures in PHP allow you to make decisions within your code, based on specified conditions.",
        "practiceQuestions": [
            {
                "question": "Write an if-else statement to check if a number is positive, negative, or zero.",
                "hint": "Use relational operators to compare the variable to zero."
            }
        ]
    },
    php_loops: {
        "title": "PHP Loops",
        "description": "Learn about loops in PHP, including `for`, `while`, `do-while`, and `foreach` loops.",
        "sections": [
            {
                "title": "For and While Loops",
                "content": "The `for` loop runs a set number of times, while the `while` loop runs as long as a condition is true.",
                "code": `<?php
                    for ($i = 0; $i < 5; $i++) {
                        echo "Count: $i ";
                    }
                    
                    $j = 0;
                    while ($j < 5) {
                        echo "Count: $j ";
                        $j++;
                    }
                ?>`
            },
            {
                "title": "Do-While Loop",
                "content": "The `do-while` loop runs at least once, regardless of the condition, because the condition is checked after each iteration."
            },
            {
                "title": "Foreach Loop",
                "content": "`foreach` is specifically used for iterating over arrays, making it easy to access each element.",
                "code": `<?php
                    $colors = ["Red", "Green", "Blue"];
                    foreach ($colors as $color) {
                        echo "Color: $color ";
                    }
                ?>`
            }
        ],
        "pitfalls": [
            "Ensure conditions in `while` and `for` loops eventually become false to avoid infinite loops.",
            "Avoid modifying the array inside a `foreach` loop as it can lead to unexpected results."
        ],
        "summary": "Loops in PHP allow you to execute a block of code multiple times, useful for working with arrays and repetitive tasks.",
        "practiceQuestions": [
            {
                "question": "Create a `for` loop to print numbers from 1 to 10.",
                "hint": "Set the initial value to 1, and increment until you reach 10."
            }
        ]
    },
    php_enumerated_arrays: {
        title: "PHP Enumerated Arrays",
        description: "Learn about enumerated arrays in PHP, where elements are stored with numeric indices.",
        sections: [
            {
                title: "Creating Enumerated Arrays",
                content: "Enumerated arrays in PHP store values in a sequence starting from index 0. They are defined using either the `array()` function or the shorthand `[]` syntax.",
                code: `<?php
                    $fruits = array("Apple", "Banana", "Cherry");
                    $colors = ["Red", "Green", "Blue"];
                ?>`
            },
            {
                title: "Accessing Elements in Enumerated Arrays",
                content: "Array elements are accessed using their index values. The first element is at index 0, the second at index 1, and so on.",
                code: `<?php
                    echo $fruits[1]; // Outputs: Banana
                ?>`
            }
        ],
        pitfalls: [
            "Ensure you use zero-based indexing when accessing elements.",
            "Trying to access an index that does not exist will trigger a PHP notice."
        ],
        summary: "Enumerated arrays in PHP use numeric keys, starting at 0, to organize elements sequentially.",
        practiceQuestions: [
            {
                question: "Create an enumerated array with the names of four cities and display the second city.",
                hint: "Use the `echo` statement to access the array element at index 1."
            },
            {
                question: "How can you change the value of the first element in your enumerated array?",
                hint: "Assign a new value using the index 0."
            },
            {
                question: "What will happen if you try to access an index that does not exist?",
                hint: "Consider the consequences of out-of-bounds access."
            }
        ]
    },
    php_associative_arrays: {
        title: "PHP Associative Arrays",
        description: "Learn about associative arrays in PHP, where elements are stored with named keys.",
        sections: [
            {
                title: "Creating Associative Arrays",
                content: "Associative arrays store values using string keys rather than numeric indices. This allows for more meaningful key-value pairs.",
                code: `<?php
                    $person = array("name" => "John", "age" => 25, "city" => "New York");
                ?>`
            },
            {
                title: "Accessing Elements in Associative Arrays",
                content: "Elements in associative arrays are accessed using their named keys rather than numeric indices.",
                code: `<?php
                    echo $person["name"]; // Outputs: John
                ?>`
            }
        ],
        pitfalls: [
            "Be careful with spelling and capitalization when using keys.",
            "Using undefined keys will trigger a notice in PHP."
        ],
        summary: "Associative arrays in PHP let you use meaningful keys to access elements, enhancing readability.",
        practiceQuestions: [
            {
                question: "Create an associative array with details of a car (e.g., make, model, year) and access the model.",
                hint: "Define each property with a string key in the array, then access it using its key."
            },
            {
                question: "How would you add a new key-value pair to your associative array?",
                hint: "Use the format `array[key] = value`."
            },
            {
                question: "What error will occur if you try to access a key that doesn’t exist?",
                hint: "Think about the difference between accessing a key and its value."
            }
        ]
    },
    php_multidimensional_arrays: {
        title: "PHP Multi-Dimensional Arrays",
        description: "Explore multi-dimensional arrays in PHP, which allow arrays within arrays for more complex data structures.",
        sections: [
            {
                title: "Creating Multi-Dimensional Arrays",
                content: "Multi-dimensional arrays store arrays within arrays, enabling complex data storage such as rows and columns.",
                code: `<?php
                    $students = [
                        ["name" => "Alice", "age" => 20],
                        ["name" => "Bob", "age" => 22]
                    ];
                ?>`
            },
            {
                title: "Accessing Elements in Multi-Dimensional Arrays",
                content: "Access elements using multiple indices: the first index for the main array and additional indices for inner arrays.",
                code: `<?php
                    echo $students[0]["name"]; // Outputs: Alice
                ?>`
            }
        ],
        pitfalls: [
            "Double-check index numbers to avoid errors in accessing multi-dimensional arrays.",
            "Accessing an element with an incorrect number of indices will cause an error."
        ],
        summary: "Multi-dimensional arrays in PHP support more complex data relationships by storing arrays within arrays.",
        practiceQuestions: [
            {
                question: "Create a multi-dimensional array to store names and ages of three people, and display the age of the second person.",
                hint: "Define each person's details as an associative array within the main array."
            },
            {
                question: "How can you add another student to your multi-dimensional array?",
                hint: "Use the `[]` syntax to add a new associative array."
            },
            {
                question: "What will be the output if you access an index that is out of bounds in a multi-dimensional array?",
                hint: "Consider the behavior of PHP when trying to access invalid indices."
            }
        ]
    },
    php_functions_syntax: {
        title: "PHP Functions: Syntax and Arguments",
        description: "Learn how to create and use functions in PHP, including syntax, arguments, and return values.",
        sections: [
            {
                title: "Defining Functions",
                content: "Functions in PHP are defined using the `function` keyword, followed by the function name and a set of parentheses.",
                code: `<?php
                    function greet() {
                        echo "Hello, World!";
                    }
                ?>`
            },
            {
                title: "Using Function Arguments",
                content: "Arguments are variables passed into functions, allowing for more flexible and dynamic functions.",
                code: `<?php
                    function greet($name) {
                        echo "Hello, $name!";
                    }
                    greet("Alice"); // Outputs: Hello, Alice!
                ?>`
            }
        ],
        pitfalls: [
            "Ensure function names are unique within the same scope.",
            "If no value is returned, the function returns `NULL` by default."
        ],
        summary: "PHP functions encapsulate code for reuse and can accept arguments for greater flexibility.",
        practiceQuestions: [
            {
                question: "Create a function to add two numbers and return the result.",
                hint: "Define a function that accepts two parameters, adds them, and returns the sum."
            },
            {
                question: "What happens if you call a function without providing the expected arguments?",
                hint: "Consider how PHP handles missing arguments."
            },
            {
                question: "Can you define a function with default argument values? Give an example.",
                hint: "Use the `=` syntax in the function declaration."
            }
        ]
    },
    php_pass_by_value_reference: {
        title: "Pass by Value & Reference",
        description: "Understand the difference between passing by value and by reference in PHP functions.",
        sections: [
            {
                title: "Pass by Value",
                content: "When passing by value, a copy of the variable is passed to the function, leaving the original variable unchanged.",
                code: `<?php
                    function increment($num) {
                        $num++;
                    }
                    $a = 5;
                    increment($a); // $a remains 5
                ?>`
            },
            {
                title: "Pass by Reference",
                content: "Passing by reference uses the `&` symbol before the parameter, allowing the function to modify the original variable.",
                code: `<?php
                    function increment(&$num) {
                        $num++;
                    }
                    $a = 5;
                    increment($a); // $a becomes 6
                ?>`
            }
        ],
        pitfalls: [
            "Be cautious with reference parameters as they modify the original variables.",
            "Using references can lead to unintended changes if not handled carefully."
        ],
        summary: "PHP allows passing by value (default) or by reference, depending on whether the function should modify the original variable.",
        practiceQuestions: [
            {
                question: "Write a function that doubles a number by reference.",
                hint: "Define the function parameter with `&` to modify the original variable."
            },
            {
                question: "What would happen if you use pass by value with an array? Would changes inside the function reflect outside?",
                hint: "Think about how arrays are handled in PHP."
            },
            {
                question: "Explain the impact of using pass by reference on variable state outside the function.",
                hint: "Consider how functions can alter the original variable's value."
            }
        ]
    },
    php_variable_scope: {
        title: "PHP Variable Scope",
        description: "Learn about variable scope in PHP, including global, local, and static scopes.",
        sections: [
            {
                title: "Global and Local Scope",
                content: "Variables declared within a function have local scope and cannot be accessed outside. Variables outside functions are global.",
                code: `<?php
                    $globalVar = "I am global!";
                    function test() {
                        $localVar = "I am local!";
                    }
                ?>`
            },
            {
                title: "Static Variables",
                content: "Static variables retain their value even after the function exits, unlike regular local variables.",
                code: `<?php
                    function countCalls() {
                        static $count = 0;
                        $count++;
                        echo $count;
                    }
                    countCalls(); // Outputs: 1
                    countCalls(); // Outputs: 2
                ?>`
            }
        ],
        pitfalls: [
            "Global variables can be accessed with the `global` keyword inside functions.",
            "Static variables do not lose their value between function calls."
        ],
        summary: "Variable scope determines the visibility and lifetime of variables in PHP, with options for global, local, and static scopes.",
        practiceQuestions: [
            {
                question: "Create a function that counts the number of times it has been called using a static variable.",
                hint: "Define a static variable within the function and increment it each call."
            },
            {
                question: "How would you access a global variable inside a function?",
                hint: "Use the `global` keyword before the variable name."
            },
            {
                question: "What happens if you try to access a local variable outside its function?",
                hint: "Consider the implications of scope."
            }
        ]
    },
    php_include_require: {
        title: "Using PHP include() and require()",
        description: "Discover how to include and require files in PHP, allowing for code reusability and modular development.",
        sections: [
            {
                title: "The include() Function",
                content: "The `include()` function allows you to include a file in your script. If the file is not found, a warning is issued, but the script continues execution.",
                code: `<?php
                    include('header.php');
                ?>`
            },
            {
                title: "The require() Function",
                content: "The `require()` function includes a file, but if the file is not found, it results in a fatal error, halting the script.",
                code: `<?php
                    require('config.php');
                ?>`
            }
        ],
        pitfalls: [
            "Be mindful of file paths when using include and require.",
            "Consider the impact of including files with errors on script execution."
        ],
        summary: "PHP `include` and `require` enable code reusability, with `require` halting execution if the file is missing, while `include` issues a warning but continues.",
        practiceQuestions: [
            {
                question: "Add a PHP header file using `include` and a configuration file using `require`.",
                hint: "Ensure both files exist in the correct paths."
            },
            {
                question: "What is the difference in behavior between `include` and `require` when the file is missing?",
                hint: "Think about the consequences of each function."
            },
            {
                question: "How can you check if a file exists before including it?",
                hint: "Use the `file_exists()` function for validation."
            }
        ]
    },
    php_form_handling: {
        title: "PHP Form Handling",
        description: "Learn how to handle form submissions in PHP, including retrieving and processing user input.",
        sections: [
            {
                title: "Creating a Basic HTML Form",
                content: "To handle form data, first create an HTML form using the `form` tag. Specify the method (`GET` or `POST`) for submitting data.",
                code: `<!DOCTYPE html>
                <html>
                <body>
                    <form action="process.php" method="POST">
                        Name: <input type="text" name="name"><br>
                        <input type="submit" value="Submit">
                    </form>
                </body>
                </html>`
            },
            {
                title: "Processing Form Data in PHP",
                content: "Use the global `$_POST` or `$_GET` arrays to access submitted form data in your PHP script.",
                code: `<?php
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        $name = $_POST["name"];
                        echo "Hello, $name!";
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Make sure the `action` attribute points to the correct PHP file for processing.",
            "Be aware of the method (`GET` or `POST`) used to submit the form, as it affects how data is accessed."
        ],
        summary: "PHP form handling involves creating HTML forms, submitting them, and processing the data using global arrays like `$_POST` and `$_GET`.",
        practiceQuestions: [
            {
                question: "Create a form that collects a user's email and processes it in PHP.",
                hint: "Ensure to use the appropriate `input` type for email."
            },
            {
                question: "How can you display an error message if the name field is left empty?",
                hint: "Check if the name variable is empty after submission."
            },
            {
                question: "Explain the difference between the `GET` and `POST` methods in form handling.",
                hint: "Consider aspects like data visibility and limits on data size."
            }
        ]
    },
    php_get_post: {
        title: "PHP GET and POST",
        description: "Understand the differences between the GET and POST methods for sending data to a server.",
        sections: [
            {
                title: "Using the GET Method",
                content: "The `GET` method appends data to the URL, allowing users to bookmark the page. It's suitable for non-sensitive data.",
                code: `<?php
                    // Accessing data sent via GET
                    if ($_SERVER["REQUEST_METHOD"] == "GET") {
                        $name = $_GET["name"];
                        echo "Hello, $name!";
                    }
                ?>`
            },
            {
                title: "Using the POST Method",
                content: "The `POST` method sends data in the request body, which is more secure for sensitive data like passwords.",
                code: `<?php
                    // Accessing data sent via POST
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        $password = $_POST["password"];
                        echo "Password received.";
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Be cautious with sensitive information; avoid using GET for passwords.",
            "GET requests have limitations on data size, while POST can handle larger amounts."
        ],
        summary: "GET and POST are two methods for sending data in PHP, with GET being suitable for non-sensitive data and POST for sensitive or large data.",
        practiceQuestions: [
            {
                question: "Create a form that sends user data using both GET and POST methods and display the data received.",
                hint: "Create two separate forms for demonstration."
            },
            {
                question: "What security risks are associated with using GET for sending sensitive data?",
                hint: "Consider data visibility in the URL."
            },
            {
                question: "Explain when you would choose to use POST over GET in a web application.",
                hint: "Think about scenarios involving user privacy."
            }
        ]
    },
    php_form_validation: {
        title: "PHP Form Validation",
        description: "Learn how to validate user input from forms to ensure data integrity and security.",
        sections: [
            {
                title: "Validating Input Data",
                content: "Input validation checks if the data submitted via a form meets certain criteria before processing it.",
                code: `<?php
                    $name = "";
                    $error = "";

                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        if (empty($_POST["name"])) {
                            $error = "Name is required";
                        } else {
                            $name = htmlspecialchars($_POST["name"]);
                        }
                    }
                ?>`
            },
            {
                title: "Using Regular Expressions for Validation",
                content: "Regular expressions can be used to validate data formats, such as email addresses or phone numbers.",
                code: `<?php
                    if (!preg_match("/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/", $_POST["email"])) {
                        $error = "Invalid email format";
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Always sanitize user input to prevent XSS attacks.",
            "Be specific about validation criteria to ensure user data is correct."
        ],
        summary: "Form validation in PHP ensures that user input is correct and secure, using methods like checking for empty fields and employing regular expressions.",
        practiceQuestions: [
            {
                question: "Create a form that validates a user's age to ensure they are at least 18 years old.",
                hint: "Use a numeric input type and check the value in PHP."
            },
            {
                question: "How can you enhance security by validating user input?",
                hint: "Consider potential vulnerabilities like SQL injection."
            },
            {
                question: "Explain the purpose of the `htmlspecialchars()` function in input validation.",
                hint: "Think about how it protects against XSS."
            }
        ]
    },
    php_form_sanitization: {
        title: "PHP Form Sanitization",
        description: "Understand the importance of sanitizing user input to prevent security vulnerabilities.",
        sections: [
            {
                title: "What is Sanitization?",
                content: "Sanitization involves cleaning user input to remove unwanted characters or scripts, enhancing security.",
                code: `<?php
                    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
                ?>`
            },
            {
                title: "Sanitizing with Built-in Functions",
                content: "PHP provides various built-in functions for sanitizing data, including `filter_var()` for specific types.",
                code: `<?php
                    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
                ?>`
            }
        ],
        pitfalls: [
            "Sanitization should not be confused with validation; both are crucial for security.",
            "Always sanitize data before using it in SQL queries to prevent SQL injection."
        ],
        summary: "Sanitization in PHP cleans user input to eliminate threats like XSS and SQL injection, utilizing functions like `filter_var()`.",
        practiceQuestions: [
            {
                question: "Demonstrate how to sanitize user input from a contact form before processing it.",
                hint: "Use appropriate filter functions based on input type."
            },
            {
                question: "What is the difference between sanitization and validation in PHP?",
                hint: "Think about their roles in data integrity and security."
            },
            {
                question: "Explain why it is important to sanitize data before storing it in a database.",
                hint: "Consider the implications for data security."
            }
        ]
    },
    php_cookie_handling: {
        title: "PHP Cookie Handling",
        description: "Learn how to set, retrieve, and manage cookies in PHP to store user preferences.",
        sections: [
            {
                title: "Setting Cookies",
                content: "Cookies are set using the `setcookie()` function in PHP. Specify the cookie name, value, expiration time, and path.",
                code: `<?php
                    setcookie("username", "JohnDoe", time() + (86400 * 30), "/");
                    echo "Cookie 'username' is set!";
                ?>`
            },
            {
                title: "Retrieving Cookies",
                content: "Access cookies through the `$_COOKIE` superglobal array.",
                code: `<?php
                    if(isset($_COOKIE["username"])) {
                        echo "Username: " . $_COOKIE["username"];
                    } else {
                        echo "Cookie not found.";
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Cookies must be set before any output is sent to the browser.",
            "Be mindful of the size limit for cookies (typically 4 KB)."
        ],
        summary: "Cookie handling in PHP involves setting and retrieving cookies to maintain state across user sessions.",
        practiceQuestions: [
            {
                question: "Create a cookie that stores a user's favorite color and retrieve it on another page.",
                hint: "Set the cookie with a suitable expiration time."
            },
            {
                question: "What are some security concerns related to using cookies?",
                hint: "Consider aspects like data privacy and cookie theft."
            },
            {
                question: "How can you delete a cookie in PHP?",
                hint: "Set the expiration time to a past date."
            }
        ]
    },
    php_session_handling: {
        title: "PHP Session Handling",
        description: "Understand how to manage user sessions in PHP to track user activity across different pages.",
        sections: [
            {
                title: "Starting a Session",
                content: "Start a session with `session_start()`, which must be called before any output.",
                code: `<?php
                    session_start();
                    $_SESSION["username"] = "JohnDoe";
                    echo "Session started and username set!";
                ?>`
            },
            {
                title: "Accessing Session Variables",
                content: "Session variables can be accessed using the `$_SESSION` superglobal array.",
                code: `<?php
                    session_start();
                    if(isset($_SESSION["username"])) {
                        echo "Welcome, " . $_SESSION["username"];
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Always start the session before any HTML output.",
            "Be cautious of session hijacking; consider using HTTPS."
        ],
        summary: "Session handling in PHP allows you to store user data across multiple pages, enhancing the user experience.",
        practiceQuestions: [
            {
                question: "Create a login system using sessions to track user login status.",
                hint: "Use session variables to store user information after logging in."
            },
            {
                question: "Explain the difference between cookies and sessions in PHP.",
                hint: "Consider their storage locations and data persistence."
            },
            {
                question: "What are some best practices for securing sessions in PHP?",
                hint: "Think about session regeneration and secure cookie settings."
            }
        ]
    },
    php_login_session: {
        title: "PHP Login Session",
        description: "Implement a login system using sessions to maintain user state after authentication.",
        sections: [
            {
                title: "Creating a Login Form",
                content: "Build a simple HTML form for user login, specifying the method as POST.",
                code: `<!DOCTYPE html>
                <html>
                <body>
                    <form action="login.php" method="POST">
                        Username: <input type="text" name="username"><br>
                        Password: <input type="password" name="password"><br>
                        <input type="submit" value="Login">
                    </form>
                </body>
                </html>`
            },
            {
                title: "Processing Login Credentials",
                content: "Validate user credentials and start a session upon successful login.",
                code: `<?php
                    session_start();
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        $username = $_POST["username"];
                        $password = $_POST["password"];
                        // Assume a function check_credentials() exists
                        if (check_credentials($username, $password)) {
                            $_SESSION["username"] = $username;
                            echo "Login successful!";
                        } else {
                            echo "Invalid username or password.";
                        }
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Never store passwords in plain text; always hash them.",
            "Validate and sanitize user inputs to prevent SQL injection."
        ],
        summary: "Login sessions in PHP allow you to authenticate users and track their session state across the application.",
        practiceQuestions: [
            {
                question: "Enhance the login system to log out users by destroying the session.",
                hint: "Use `session_destroy()` to log out the user."
            },
            {
                question: "What measures can be taken to secure user passwords in your login system?",
                hint: "Consider password hashing techniques."
            },
            {
                question: "How would you implement user roles (e.g., admin, user) in your session management?",
                hint: "Think about using additional session variables."
            }
        ]
    },
    php_string_patterns: {
        title: "String Patterns and Matching",
        description: "Learn how to use string patterns and regular expressions to validate and manipulate strings in PHP.",
        sections: [
            {
                title: "Using Regular Expressions",
                content: "Regular expressions allow you to perform pattern matching on strings. Use `preg_match()` to validate formats.",
                code: `<?php
                    $pattern = "/^[a-zA-Z]+$/"; // Only letters
                    if (preg_match($pattern, "Hello")) {
                        echo "String matches the pattern.";
                    } else {
                        echo "String does not match.";
                    }
                ?>`
            },
            {
                title: "Replacing Strings with preg_replace()",
                content: "You can replace parts of strings using `preg_replace()`.",
                code: `<?php
                    $string = "Hello World!";
                    $newString = preg_replace("/World/", "PHP", $string);
                    echo $newString; // Outputs: Hello PHP!
                ?>`
            }
        ],
        pitfalls: [
            "Regular expressions can be complex; test your patterns thoroughly.",
            "Consider performance implications with large data sets."
        ],
        summary: "String patterns and matching in PHP utilize regular expressions for validating and manipulating string data.",
        practiceQuestions: [
            {
                question: "Write a regular expression to validate an email address format.",
                hint: "Consider various components like username, domain, and extension."
            },
            {
                question: "Demonstrate how to use preg_split() to split a string by a specific delimiter.",
                hint: "Think about using a comma or space as a delimiter."
            },
            {
                question: "How can you use regular expressions to check if a string contains only digits?",
                hint: "Use a suitable pattern for numeric validation."
            }
        ]
    },
    php_sending_emails: {
        title: "PHP Sending Emails",
        description: "Understand how to send emails using PHP's mail function and external libraries.",
        sections: [
            {
                title: "Using the mail() Function",
                content: "The simplest way to send emails in PHP is using the `mail()` function. Specify the recipient, subject, and message.",
                code: `<?php
                    $to = "recipient@example.com";
                    $subject = "Test Email";
                    $message = "This is a test email.";
                    mail($to, $subject, $message);
                    echo "Email sent!";
                ?>`
            },
            {
                title: "Using PHPMailer for Enhanced Functionality",
                content: "PHPMailer is a popular library that provides more features for sending emails, including SMTP support.",
                code: `<?php
                    use PHPMailer\PHPMailer\PHPMailer;
                    require 'vendor/autoload.php';

                    $mail = new PHPMailer();
                    $mail->isSMTP();
                    $mail->Host = 'smtp.example.com';
                    $mail->Username = 'username@example.com';
                    $mail->Password = 'yourpassword';
                    $mail->setFrom('from@example.com', 'Mailer');
                    $mail->addAddress('recipient@example.com');
                    $mail->Subject = 'Test Email';
                    $mail->Body = 'This is a test email using PHPMailer.';
                    $mail->send();
                ?>`
            }
        ],
        pitfalls: [
            "Ensure that your server is configured to send emails; local servers may not support it.",
            "Consider using SMTP for reliable email delivery."
        ],
        summary: "Sending emails in PHP can be done using the built-in mail() function or libraries like PHPMailer for more complex requirements.",
        practiceQuestions: [
            {
                question: "Write a script to send a confirmation email after user registration.",
                hint: "Include relevant user information in the email."
            },
            {
                question: "What are the advantages of using PHPMailer over the mail() function?",
                hint: "Consider aspects like security and functionality."
            },
            {
                question: "How can you handle email delivery failures in your application?",
                hint: "Think about logging failed attempts and user notifications."
            }
        ]
    },
    php_file_uploading: {
        title: "PHP File Uploading",
        description: "Learn how to handle file uploads securely in PHP, including validation and storage.",
        sections: [
            {
                title: "Creating a File Upload Form",
                content: "Create an HTML form with `enctype='multipart/form-data'` to allow file uploads.",
                code: `<!DOCTYPE html>
                <html>
                <body>
                    <form action="upload.php" method="POST" enctype="multipart/form-data">
                        Select file: <input type="file" name="fileToUpload"><br>
                        <input type="submit" value="Upload">
                    </form>
                </body>
                </html>`
            },
            {
                title: "Handling File Uploads",
                content: "Use the `$_FILES` superglobal to process uploaded files and move them to a designated directory.",
                code: `<?php
                    $target_dir = "uploads/";
                    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
                    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                        echo "File uploaded successfully.";
                    } else {
                        echo "Error uploading file.";
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Validate file types and sizes to prevent malicious uploads.",
            "Set appropriate permissions on the upload directory."
        ],
        summary: "File uploading in PHP involves creating a form, processing the uploaded file, and ensuring security during the upload process.",
        practiceQuestions: [
            {
                question: "Enhance the file upload process to validate the file type and size.",
                hint: "Consider using `mime_content_type()` for type checking."
            },
            {
                question: "Explain how to create a thumbnail for uploaded images using PHP.",
                hint: "Think about using GD library functions."
            },
            {
                question: "What steps would you take to secure your file upload system?",
                hint: "Consider user permissions and file validation techniques."
            }
        ]
    },
    php_filters_error_handling: {
        title: "PHP Filters and Error Handling",
        description: "Explore how to use filters for data validation and implement error handling in PHP applications.",
        sections: [
            {
                title: "Using PHP Filters",
                content: "PHP provides built-in filters for validating and sanitizing data. Use `filter_var()` to apply filters.",
                code: `<?php
                    $email = "test@example.com";
                    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                        echo "Valid email.";
                    } else {
                        echo "Invalid email.";
                    }
                ?>`
            },
            {
                title: "Implementing Error Handling",
                content: "Use try-catch blocks for exception handling and set custom error handlers.",
                code: `<?php
                    set_error_handler("customError");
                    function customError($errno, $errstr) {
                        echo "Error: [$errno] $errstr";
                    }

                    // Trigger error
                    echo($test);
                ?>`
            }
        ],
        pitfalls: [
            "Always validate and sanitize user input to avoid security risks.",
            "Handle exceptions properly to improve user experience."
        ],
        summary: "PHP filters help validate and sanitize data, while error handling ensures your application can manage unexpected situations gracefully.",
        practiceQuestions: [
            {
                question: "Create a filter for validating URLs and test various inputs.",
                hint: "Use `FILTER_VALIDATE_URL` to validate URLs."
            },
            {
                question: "How can you log errors to a file instead of displaying them?",
                hint: "Consider using the `error_log()` function."
            },
            {
                question: "What is the difference between warnings and exceptions in PHP?",
                hint: "Consider how each is handled by the interpreter."
            }
        ]
    },
    php_classes: {
        title: "Defining PHP Classes",
        description: "Learn how to define classes in PHP, encapsulating properties and methods.",
        sections: [
            {
                title: "Basic Class Definition",
                content: "Classes in PHP are defined using the `class` keyword. You can create properties and methods within the class.",
                code: `<?php
                    class Car {
                        public $color;
                        public $model;

                        function __construct($color, $model) {
                            $this->color = $color;
                            $this->model = $model;
                        }
                    }
                ?>`
            },
            {
                title: "Access Modifiers",
                content: "PHP supports three access modifiers: public, private, and protected, controlling the visibility of properties and methods.",
                code: `<?php
                    class Car {
                        private $engine;

                        public function setEngine($engine) {
                            $this->engine = $engine;
                        }

                        public function getEngine() {
                            return $this->engine;
                        }
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Avoid using global variables inside classes to maintain encapsulation.",
            "Be careful with access modifiers to prevent unintended access to sensitive data."
        ],
        summary: "Defining classes in PHP allows for object-oriented programming, promoting better organization and reuse of code.",
        practiceQuestions: [
            {
                question: "Define a class called `Book` with properties for title and author.",
                hint: "Include methods to set and get these properties."
            },
            {
                question: "Explain the difference between public, private, and protected properties in a class.",
                hint: "Consider how they affect access from outside the class."
            },
            {
                question: "Create a class `User` with a private property for email and a method to return the email.",
                hint: "Ensure the property cannot be accessed directly from outside."
            }
        ]
    },
    php_objects: {
        title: "Creating and Using Objects",
        description: "Discover how to create instances of classes and use them in your PHP applications.",
        sections: [
            {
                title: "Instantiating Objects",
                content: "To create an object, use the `new` keyword followed by the class name.",
                code: `<?php
                    $myCar = new Car("red", "Toyota");
                    echo $myCar->color; // Outputs: red
                ?>`
            },
            {
                title: "Using Object Methods",
                content: "You can call methods on objects using the arrow operator (`->`).",
                code: `<?php
                    class Car {
                        public function start() {
                            return "Car started";
                        }
                    }

                    $myCar = new Car();
                    echo $myCar->start(); // Outputs: Car started
                ?>`
            }
        ],
        pitfalls: [
            "Ensure you are instantiating the correct class to avoid errors.",
            "Be aware of scope when accessing object properties and methods."
        ],
        summary: "Creating and using objects in PHP allows for structured and reusable code, encapsulating related data and behavior.",
        practiceQuestions: [
            {
                question: "Create an object from the `Car` class and call a method to display its color.",
                hint: "Use the constructor to set the color."
            },
            {
                question: "What happens if you try to access a private property from outside the class?",
                hint: "Think about the access restrictions of private properties."
            },
            {
                question: "Demonstrate how to create multiple objects from the same class.",
                hint: "Instantiate the class multiple times with different values."
            }
        ]
    },
    php_member_functions: {
        title: "Calling Member Functions",
        description: "Learn how to define and call member functions in PHP classes.",
        sections: [
            {
                title: "Defining Member Functions",
                content: "Member functions are defined within a class and can be called on instances of the class.",
                code: `<?php
                    class Car {
                        public function drive() {
                            return "Driving the car!";
                        }
                    }

                    $myCar = new Car();
                    echo $myCar->drive(); // Outputs: Driving the car!
                ?>`
            },
            {
                title: "Function Parameters",
                content: "Member functions can accept parameters to perform operations based on input.",
                code: `<?php
                    class Car {
                        public function drive($speed) {
                            return "Driving at $speed km/h.";
                        }
                    }

                    $myCar = new Car();
                    echo $myCar->drive(100); // Outputs: Driving at 100 km/h.
                ?>`
            }
        ],
        pitfalls: [
            "Ensure you are calling the correct method on the right object.",
            "Be cautious with parameters; validate them if necessary."
        ],
        summary: "Calling member functions in PHP allows you to define behavior associated with an object, enhancing code reusability.",
        practiceQuestions: [
            {
                question: "Create a member function in the `Car` class that calculates fuel efficiency based on distance and fuel used.",
                hint: "Use parameters to pass distance and fuel."
            },
            {
                question: "Explain how you would use default parameter values in a member function.",
                hint: "Consider the use of optional parameters."
            },
            {
                question: "Demonstrate method overloading in PHP.",
                hint: "Think about how to handle different parameter types."
            }
        ]
    },
    php_constructor_functions: {
        title: "Constructor Functions",
        description: "Understand the role of constructor functions in initializing object properties.",
        sections: [
            {
                title: "Creating a Constructor",
                content: "A constructor is a special method that is automatically called when an object is instantiated.",
                code: `<?php
                    class Car {
                        public $color;
                        public $model;

                        function __construct($color, $model) {
                            $this->color = $color;
                            $this->model = $model;
                        }
                    }

                    $myCar = new Car("blue", "Honda");
                    echo $myCar->color; // Outputs: blue
                ?>`
            },
            {
                title: "Constructor Overloading",
                content: "PHP does not support constructor overloading directly, but you can use default parameters.",
                code: `<?php
                    class Car {
                        public $color;

                        function __construct($color = "red") {
                            $this->color = $color;
                        }
                    }

                    $myCar = new Car();
                    echo $myCar->color; // Outputs: red
                ?>`
            }
        ],
        pitfalls: [
            "Ensure constructors are used to initialize necessary properties.",
            "Be cautious with circular dependencies in constructors."
        ],
        summary: "Constructor functions are essential for setting initial state in objects, allowing for flexibility in object creation.",
        practiceQuestions: [
            {
                question: "Create a constructor that initializes properties for a `Person` class, including name and age.",
                hint: "Use the constructor to set these properties upon instantiation."
            },
            {
                question: "What happens if a class does not have a constructor?",
                hint: "Consider the default behavior of PHP constructors."
            },
            {
                question: "Demonstrate how to use constructor chaining in PHP.",
                hint: "Think about calling another constructor from within a constructor."
            }
        ]
    },
    php_inheritance: {
        title: "Inheritance and Function Overriding",
        description: "Explore how inheritance allows classes to extend functionality and override methods.",
        sections: [
            {
                title: "Understanding Inheritance",
                content: "Inheritance allows a class to inherit properties and methods from another class using the `extends` keyword.",
                code: `<?php
                    class Vehicle {
                        public function start() {
                            return "Vehicle started";
                        }
                    }

                    class Car extends Vehicle {
                        public function honk() {
                            return "Honk! Honk!";
                        }
                    }

                    $myCar = new Car();
                    echo $myCar->start(); // Outputs: Vehicle started
                ?>`
            },
            {
                title: "Overriding Methods",
                content: "A subclass can override methods from the parent class to provide specific functionality.",
                code: `<?php
                    class Vehicle {
                        public function start() {
                            return "Vehicle started";
                        }
                    }

                    class Car extends Vehicle {
                        public function start() {
                            return "Car started with a roar!";
                        }
                    }

                    $myCar = new Car();
                    echo $myCar->start(); // Outputs: Car started with a roar!
                ?>`
            }
        ],
        pitfalls: [
            "Be careful with method visibility when overriding; ensure correct access levels.",
            "Avoid deep inheritance hierarchies to maintain code clarity."
        ],
        summary: "Inheritance allows for code reuse and extension, while method overriding enables customization of inherited behavior.",
        practiceQuestions: [
            {
                question: "Create a `Truck` class that extends `Vehicle` and overrides the start method.",
                hint: "Make sure the `Truck` class provides its own implementation."
            },
            {
                question: "What is the purpose of the `parent` keyword in method overriding?",
                hint: "Consider how it can be used to call parent class methods."
            },
            {
                question: "Explain the advantages and disadvantages of inheritance.",
                hint: "Think about code reuse versus potential complexity."
            }
        ]
    },
    php_interfaces_abstract: {
        title: "PHP Interfaces and Abstract Classes",
        description: "Learn how to define interfaces and abstract classes to enforce contracts in your PHP applications.",
        sections: [
            {
                title: "Understanding Interfaces",
                content: "An interface defines a contract that implementing classes must follow, using the `interface` keyword.",
                code: `<?php
                    interface Drivable {
                        public function drive();
                    }

                    class Car implements Drivable {
                        public function drive() {
                            return "Driving the car.";
                        }
                    }
                ?>`
            },
            {
                title: "Using Abstract Classes",
                content: "An abstract class can provide partial implementation and cannot be instantiated directly.",
                code: `<?php
                    abstract class Animal {
                        abstract protected function sound();
                    }

                    class Dog extends Animal {
                        protected function sound() {
                            return "Bark!";
                        }
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Interfaces can only contain method signatures; avoid defining properties.",
            "Remember that abstract classes can have both abstract and concrete methods."
        ],
        summary: "Interfaces and abstract classes provide powerful ways to enforce structure and behavior in your PHP applications.",
        practiceQuestions: [
            {
                question: "Define an interface `Shape` with methods for calculating area and perimeter.",
                hint: "Implement this interface in classes like `Circle` and `Square`."
            },
            {
                question: "What is the difference between an abstract class and an interface?",
                hint: "Consider the implications of implementation and instantiation."
            },
            {
                question: "Demonstrate how to implement multiple interfaces in a single class.",
                hint: "Think about how a class can fulfill multiple contracts."
            }
        ]
    },
    mysql_database_basics: {
        title: "Database Basics",
        description: "Understand the fundamentals of databases, including structure, relationships, and basic terminology.",
        sections: [
            {
                title: "What is a Database?",
                content: "A database is an organized collection of data, generally stored and accessed electronically. It allows for efficient storage and retrieval.",
                code: `-- Example of a simple database creation
                CREATE DATABASE school;`
            },
            {
                title: "Database Structure",
                content: "Databases consist of tables, which hold records. Each table is made up of rows and columns.",
                code: `-- Creating a table
                CREATE TABLE students (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(100),
                    age INT
                );`
            }
        ],
        pitfalls: [
            "Don't forget to define primary keys in your tables.",
            "Be cautious about data types to ensure efficient storage."
        ],
        summary: "A solid understanding of database basics is crucial for managing data effectively, laying the foundation for more advanced database operations.",
        practiceQuestions: [
            {
                question: "What are the main components of a database?",
                hint: "Consider the structure and elements that make up a database."
            },
            {
                question: "Explain the difference between a primary key and a foreign key.",
                hint: "Think about how they relate tables in a database."
            },
            {
                question: "Create a simple table for a library system.",
                hint: "Include fields like book title, author, and publication year."
            }
        ]
    },
    phpmyadmin: {
        title: "Using PHPMyAdmin",
        description: "Learn how to manage MySQL databases through PHPMyAdmin, a web-based database management tool.",
        sections: [
            {
                title: "Introduction to PHPMyAdmin",
                content: "PHPMyAdmin is a free software tool written in PHP, intended to handle the administration of MySQL over the Web.",
                code: `-- Access PHPMyAdmin in your web browser at localhost/phpmyadmin`
            },
            {
                title: "Creating a Database",
                content: "To create a database, navigate to the PHPMyAdmin interface and click on the 'Databases' tab.",
                code: `-- In PHPMyAdmin, simply enter the database name and click 'Create'.`
            }
        ],
        pitfalls: [
            "Be careful when performing operations; always back up your database.",
            "Check user permissions if you encounter access issues."
        ],
        summary: "PHPMyAdmin simplifies database management, making it easier to create and manipulate databases without SQL commands.",
        practiceQuestions: [
            {
                question: "How do you create a new database using PHPMyAdmin?",
                hint: "Refer to the user interface and available options."
            },
            {
                question: "What are some common tasks you can perform in PHPMyAdmin?",
                hint: "Think about operations like creating tables or running queries."
            },
            {
                question: "Explain how to export a database from PHPMyAdmin.",
                hint: "Consider the format options available for export."
            }
        ]
    },
    mysql_connect: {
        title: "Connecting to MySQL with PHP",
        description: "Learn how to establish a connection to a MySQL database using PHP.",
        sections: [
            {
                title: "Using MySQLi to Connect",
                content: "MySQLi (MySQL Improved) provides an easy way to connect to a MySQL database.",
                code: `<?php
                    $servername = "localhost";
                    $username = "username";
                    $password = "password";
                    $dbname = "school";

                    // Create connection
                    $conn = new mysqli($servername, $username, $password, $dbname);

                    // Check connection
                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    }
                    echo "Connected successfully";
                ?>`
            },
            {
                title: "Using PDO to Connect",
                content: "PHP Data Objects (PDO) is another way to connect to a database that offers a more flexible and secure approach.",
                code: `<?php
                    try {
                        $conn = new PDO("mysql:host=localhost;dbname=school", $username, $password);
                        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                        echo "Connected successfully";
                    } catch (PDOException $e) {
                        echo "Connection failed: " . $e->getMessage();
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Always handle connection errors gracefully to avoid revealing sensitive information.",
            "Use prepared statements to prevent SQL injection attacks."
        ],
        summary: "Connecting to a MySQL database with PHP is essential for data manipulation and retrieval in web applications.",
        practiceQuestions: [
            {
                question: "Write a PHP script to connect to a MySQL database using MySQLi.",
                hint: "Use the `new mysqli` constructor with proper parameters."
            },
            {
                question: "What are the advantages of using PDO over MySQLi?",
                hint: "Consider aspects like flexibility and error handling."
            },
            {
                question: "Explain how to handle connection errors in PHP.",
                hint: "Think about using try-catch blocks."
            }
        ]
    },
    mysql_crud_operations: {
        title: "MySQL CRUD Operations",
        description: "Understand the basics of CRUD operations: Create, Read, Update, and Delete in MySQL.",
        sections: [
            {
                title: "Creating Records",
                content: "To create a new record, use the `INSERT INTO` statement.",
                code: `<?php
                    $sql = "INSERT INTO students (name, age) VALUES ('John Doe', 20)";
                    if ($conn->query($sql) === TRUE) {
                        echo "New record created successfully";
                    } else {
                        echo "Error: " . $sql . "<br>" . $conn->error;
                    }
                ?>`
            },
            {
                title: "Reading Records",
                content: "To read records, use the `SELECT` statement.",
                code: `<?php
                    $sql = "SELECT * FROM students";
                    $result = $conn->query($sql);

                    if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Age: " . $row["age"]. "<br>";
                        }
                    } else {
                        echo "0 results";
                    }
                ?>`
            },
            {
                title: "Updating Records",
                content: "To update a record, use the `UPDATE` statement.",
                code: `<?php
                    $sql = "UPDATE students SET age=21 WHERE name='John Doe'";
                    if ($conn->query($sql) === TRUE) {
                        echo "Record updated successfully";
                    } else {
                        echo "Error updating record: " . $conn->error;
                    }
                ?>`
            },
            {
                title: "Deleting Records",
                content: "To delete a record, use the `DELETE FROM` statement.",
                code: `<?php
                    $sql = "DELETE FROM students WHERE name='John Doe'";
                    if ($conn->query($sql) === TRUE) {
                        echo "Record deleted successfully";
                    } else {
                        echo "Error deleting record: " . $conn->error;
                    }
                ?>`
            }
        ],
        pitfalls: [
            "Always validate user input to avoid SQL injection.",
            "Be cautious with DELETE operations; consider using WHERE clauses carefully."
        ],
        summary: "CRUD operations form the backbone of database interactions, enabling the full cycle of data management in applications.",
        practiceQuestions: [
            {
                question: "Write SQL commands to insert, select, update, and delete records in a `products` table.",
                hint: "Consider a structure for the `products` table with at least three fields."
            },
            {
                question: "How can you prevent SQL injection when performing CRUD operations?",
                hint: "Think about using prepared statements."
            },
            {
                question: "What are the consequences of running a DELETE statement without a WHERE clause?",
                hint: "Consider the impact on data integrity."
            }
        ]
    },
    mysql_where_orderby_groupby: {
        title: "Using WHERE, Order By, and Group By",
        description: "Learn how to filter, sort, and group records in MySQL queries for better data management.",
        sections: [
            {
                title: "Using WHERE Clause",
                content: "The `WHERE` clause is used to filter records based on specific conditions.",
                code: `<?php
                    $sql = "SELECT * FROM students WHERE age > 18";
                    $result = $conn->query($sql);
                ?>`
            },
            {
                title: "Using ORDER BY",
                content: "The `ORDER BY` clause is used to sort the result set by one or more columns.",
                code: `<?php
                    $sql = "SELECT * FROM students ORDER BY age ASC";
                    $result = $conn->query($sql);
                ?>`
            },
            {
                title: "Using GROUP BY",
                content: "The `GROUP BY` clause groups rows that have the same values in specified columns into summary rows.",
                code: `<?php
                    $sql = "SELECT age, COUNT(*) as count FROM students GROUP BY age";
                    $result = $conn->query($sql);
                ?>`
            }
        ],
        pitfalls: [
            "Be mindful of using GROUP BY without aggregate functions.",
            "Remember that ORDER BY can affect performance; use it wisely."
        ],
        summary: "Understanding how to use WHERE, ORDER BY, and GROUP BY effectively allows for more powerful and meaningful data retrieval in SQL.",
        practiceQuestions: [
            {
                question: "Write a SQL query to select students with ages between 18 and 25, ordered by name.",
                hint: "Utilize both WHERE and ORDER BY clauses."
            },
            {
                question: "Explain how GROUP BY works with aggregate functions.",
                hint: "Consider the implications of counting or summing grouped data."
            },
            {
                question: "What happens if you use GROUP BY without an aggregate function?",
                hint: "Think about the output you would receive."
            }
        ]
    },
    sql_aggregate_functions: {
        title: "SQL Aggregate Functions",
        description: "Learn about SQL aggregate functions such as COUNT, SUM, AVG, MIN, and MAX for data analysis.",
        sections: [
            {
                title: "Using COUNT",
                content: "The `COUNT` function returns the number of rows that match a specified condition.",
                code: `<?php
                    $sql = "SELECT COUNT(*) as total_students FROM students";
                    $result = $conn->query($sql);
                ?>`
            },
            {
                title: "Using SUM",
                content: "The `SUM` function returns the total sum of a numeric column.",
                code: `<?php
                    $sql = "SELECT SUM(age) as total_age FROM students";
                    $result = $conn->query($sql);
                ?>`
            },
            {
                title: "Using AVG",
                content: "The `AVG` function returns the average value of a numeric column.",
                code: `<?php
                    $sql = "SELECT AVG(age) as average_age FROM students";
                    $result = $conn->query($sql);
                ?>`
            },
            {
                title: "Using MIN and MAX",
                content: "The `MIN` and `MAX` functions return the minimum and maximum values in a set.",
                code: `<?php
                    $sql = "SELECT MIN(age) as youngest, MAX(age) as oldest FROM students";
                    $result = $conn->query($sql);
                ?>`
            }
        ],
        pitfalls: [
            "Always check for NULL values when using aggregate functions.",
            "Understand the difference between aggregate functions and regular queries."
        ],
        summary: "SQL aggregate functions are essential for analyzing data, allowing for insightful summaries and reports.",
        practiceQuestions: [
            {
                question: "Write a query to find the total number of students and their average age.",
                hint: "Combine COUNT and AVG in a single query."
            },
            {
                question: "How would you find the youngest and oldest student in the database?",
                hint: "Utilize the MIN and MAX functions."
            },
            {
                question: "What happens if you use aggregate functions without a GROUP BY clause?",
                hint: "Consider the result set that is returned."
            }
        ]
    }
};
