export const units = [
    {
        title: "Unit 1: Exposure To HTML",
        youtube: "https://youtu.be/unit1_overview",
        quizlink: "https://quizlink.com/unit1_quiz",
        lessons: [
            { name: "HTML Document Structure", lessonkey: "html_doc_structure" },
            { name: "HTML Basic Elements", lessonkey: "html_basic_elements" },
            { name: "Root and Metadata", lessonkey: "root_metadata" },
            { name: "Script and NonScript", lessonkey: "script_nonscript" },
            { name: "Horizontal Rules, Line Breaks, Paragraphs", lessonkey: "hr_linebreaks_paragraph" },
            { name: "Citation, Quotation, Definitions, Comments", lessonkey: "citation_quotation" },
            { name: "Types of Tags in HTML", lessonkey: "html_tags_types" }
        ]
    },
    {
        title: "Unit 2: Working with Text, Links, Images, Multimedia, and Interactive Elements",
        youtube: "https://youtu.be/unit2_overview",
        quizlink: "https://quizlink.com/unit2_quiz",
        lessons: [
            { name: "Multimedia - Audio and Video Tags", lessonkey: "multimedia_tags" },
            { name: "Working with Images", lessonkey: "working_images" },
            { name: "Formatting Text with Physical Style Elements", lessonkey: "text_physical_style" },
            { name: "Formatting Text with Logical Style Elements", lessonkey: "text_logical_style" },
            { name: "Creating Links with Anchor Tag", lessonkey: "anchor_tag_links" }
        ]
    },
    {
        title: "Unit 3: Cascading Style Sheets (CSS)",
        youtube: "https://youtu.be/unit3_overview",
        quizlink: "https://quizlink.com/unit3_quiz",
        lessons: [
            { name: "Introduction to CSS and Types", lessonkey: "css_intro" },
            { name: "CSS Selectors: Type, ID, Class", lessonkey: "css_selectors" },
            { name: "CSS Properties: Text Control and Formatting", lessonkey: "css_text_properties" },
            { name: "CSS Box Model: Padding, Margin, Border", lessonkey: "css_box_model" },
            { name: "Div and Span in CSS", lessonkey: "div_span_css" },
            { name: "Working with Background Images", lessonkey: "background_images" }
        ]
    },
    {
        title: "Unit 4: Working with Tables and Forms",
        youtube: "https://youtu.be/unit4_overview",
        quizlink: "https://quizlink.com/unit4_quiz",
        lessons: [
            { name: "Working with Tables: Colspan and Rowspan", lessonkey: "tables_colspan_rowspan" },
            { name: "Applying CSS on Tables", lessonkey: "css_tables" },
            { name: "Creating Hoverable Tables", lessonkey: "hoverable_tables" },
            { name: "Working with Forms: Action Attribute, Get and Post", lessonkey: "forms_action_method" },
            { name: "Form Elements: Inputs, TextArea, Buttons", lessonkey: "form_elements" },
            { name: "Applying CSS on Form Controls", lessonkey: "css_form_controls" }
        ]
    },
    {
        title: "Unit 5: CSS Grids and Webpage Layouts",
        youtube: "https://youtu.be/unit5_overview",
        quizlink: "https://quizlink.com/unit5_quiz",
        lessons: [
            { name: "Introduction to CSS Grid", lessonkey: "css_grid_intro" },
            { name: "Grid Container and Grid Items", lessonkey: "grid_container_items" },
            { name: "Creating Different Webpage Layouts", lessonkey: "webpage_layouts" }
        ]
    }
];


export const lessonData = {
    'html_doc_structure': {
        title: "HTML Document Structure",
        description: "Understand the basic structure of an HTML document and its essential components.",
        sections: [
            {
                title: "Basic Structure",
                content: "An HTML document typically starts with a `<!DOCTYPE html>` declaration, followed by the `<html>` element. Within the `<html>` element, you'll find the `<head>` and `<body>` sections.",
                points: [
                    "The `<!DOCTYPE html>` declaration defines the document type.",
                    "The `<html>` element is the root of the document.",
                    "The `<head>` section contains metadata and links to resources.",
                    "The `<body>` section contains the content displayed in the browser."
                ],
                code: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document Title</title>
                </head>
                <body>
                    <h1>Hello, World!</h1>
                </body>
                </html>
            `
            }
        ],
        practiceQuestions: [
            {
                question: "What is the purpose of the `<!DOCTYPE html>` declaration?",
                hint: "Discuss how it impacts browser rendering."
            },
            {
                question: "Identify the main sections of an HTML document.",
                hint: "Focus on `<head>` and `<body>`."
            }
        ]
    },
    'html_basic_elements': {
        title: "HTML Basic Elements",
        description: "Explore fundamental HTML elements and their uses in creating web pages.",
        sections: [
            {
                title: "Common Elements",
                content: "HTML provides a variety of elements for structuring content, including headings, paragraphs, links, images, and lists.",
                points: [
                    "Headings (`<h1>` to `<h6>`) define the hierarchy of content.",
                    "Paragraphs are created using the `<p>` element.",
                    "Links are created with the `<a>` element.",
                    "Images are embedded using the `<img>` element.",
                    "Lists can be ordered (`<ol>`) or unordered (`<ul>`)."
                ],
                code: `
                <h1>Main Heading</h1>
                <p>This is a paragraph.</p>
                <a href="https://www.example.com">Visit Example</a>
                <img src="image.jpg" alt="Description">
                <ul>
                    <li>List Item 1</li>
                    <li>List Item 2</li>
                </ul>
            `
            }
        ],
        practiceQuestions: [
            {
                question: "List three basic HTML elements and their purposes.",
                hint: "Think about headings, paragraphs, and links."
            },
            {
                question: "How do you create an image element in HTML?",
                hint: "Discuss the `<img>` tag and its attributes."
            }
        ]
    },
    'root_metadata': {
        title: "Root and Metadata",
        description: "Learn about the root of an HTML document and how to include metadata for search engines and browsers.",
        sections: [
            {
                title: "Root Element",
                content: "The root element of an HTML document is the `<html>` tag. It contains all other elements. Metadata within the `<head>` provides information about the document.",
                points: [
                    "The `<head>` section is where metadata is placed.",
                    "Common metadata includes character set, viewport settings, and links to stylesheets."
                ],
                code: `
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta name="description" content="This is a sample webpage.">
                </head>
                <body>
                    <h1>Welcome!</h1>
                </body>
                </html>
            `
            }
        ],
        practiceQuestions: [
            {
                question: "What information can be included in the metadata of an HTML document?",
                hint: "Consider settings for character encoding and viewport."
            },
            {
                question: "Explain the significance of the `<html>` tag.",
                hint: "Discuss its role as the root element."
            }
        ]
    },
    'script_nonscript': {
        title: "Script and Non-Script",
        description: "Understand how to include JavaScript in HTML and the distinction between script and non-script elements.",
        sections: [
            {
                title: "Including Scripts",
                content: "JavaScript can be included in an HTML document using the `<script>` tag. It's essential to manage the placement of script tags for performance.",
                points: [
                    "Scripts can be included in the `<head>` or at the end of the `<body>`.",
                    "Using `async` and `defer` attributes can improve loading times."
                ],
                code: `
                <script src="script.js" defer></script>
            `
            },
            {
                title: "Non-Script Elements",
                content: "Non-script elements are those that do not execute JavaScript. These include tags for content structure and presentation.",
                points: [
                    "Tags like `<div>`, `<span>`, and `<p>` are non-script elements.",
                    "They can be styled and manipulated with CSS and JavaScript."
                ]
            }
        ],
        practiceQuestions: [
            {
                question: "What is the purpose of the `<script>` tag in HTML?",
                hint: "Discuss how it integrates JavaScript into web pages."
            },
            {
                question: "Where is the recommended location for including scripts in an HTML document?",
                hint: "Consider performance implications."
            }
        ],
    },
    'hr_linebreaks_paragraph': {
        title: "Horizontal Rules, Line Breaks, Paragraphs",
        description: "Learn how to create horizontal rules, line breaks, and paragraphs in HTML for better content organization.",
        sections: [
            {
                title: "Creating Paragraphs",
                content: "Paragraphs are defined using the `<p>` tag. They are block-level elements that separate content.",
                points: [
                    "Use `<p>` tags for each paragraph.",
                    "Browsers typically add margin above and below paragraphs."
                ],
                code: `
                <p>This is the first paragraph.</p>
                <p>This is the second paragraph.</p>
            `
            },
            {
                title: "Horizontal Rules and Line Breaks",
                content: "Use `<hr>` for horizontal rules and `<br>` for line breaks within content.",
                points: [
                    "The `<hr>` tag creates a thematic break.",
                    "The `<br>` tag inserts a line break without starting a new paragraph."
                ],
                code: `
                <p>First line.<br>Second line.</p>
                <hr>
                <p>Content above the horizontal rule.</p>
            `
            }
        ],
        practiceQuestions: [
            {
                question: "How do you create a new paragraph in HTML?",
                hint: "Focus on the `<p>` tag."
            },
            {
                question: "What is the difference between `<hr>` and `<br>`?",
                hint: "Discuss their purposes in content layout."
            }
        ]
    },
    'citation_quotation': {
        title: "Citation, Quotation, Definitions, Comments",
        description: "Understand how to use citation, quotation, definition, and comment elements in HTML.",
        sections: [
            {
                title: "Citation and Quotation",
                content: "HTML provides specific tags for citations and quotations to properly format sourced content.",
                points: [
                    "Use `<blockquote>` for longer quotes.",
                    "Use `<cite>` to reference the title of a work.",
                    "Use `<q>` for inline quotations."
                ],
                code: `
                <blockquote>
                    <p>To be or not to be, that is the question.</p>
                    <cite>— William Shakespeare</cite>
                </blockquote>
                <p>As noted in <q>The Great Gatsby</q>,...</p>
            `
            },
            {
                title: "Definitions and Comments",
                content: "Use `<dfn>` for defining terms and `<!-- Comment -->` for comments in your code.",
                points: [
                    "The `<dfn>` tag indicates the term being defined.",
                    "Comments help developers understand the code without affecting rendering."
                ],
                code: `
                <p><dfn>HTML</dfn> stands for Hypertext Markup Language.</p>
                <!-- This is a comment -->
            `
            }
        ],
        practiceQuestions: [
            {
                question: "How do you format a quote in HTML?",
                hint: "Discuss `<blockquote>` and `<cite>`."
            },
            {
                question: "What is the purpose of comments in HTML?",
                hint: "Focus on documentation and code readability."
            }
        ]
    },
    'html_tags_types': {
        title: "Types of Tags in HTML",
        description: "Explore different types of HTML tags and their classifications.",
        sections: [
            {
                title: "Block-level vs. Inline Elements",
                content: "Tags in HTML are classified as block-level or inline. Block-level elements start on a new line, while inline elements do not.",
                points: [
                    "Block-level examples: `<div>`, `<p>`, `<h1>` to `<h6>`.",
                    "Inline examples: `<span>`, `<a>`, `<img>`."
                ],
                code: `
                <div>This is a block-level element.</div>
                <span>This is an inline element.</span>
            `
            },
            {
                title: "Semantic Elements",
                content: "Semantic elements clearly describe their meaning to both the browser and the developer.",
                points: [
                    "Examples include `<header>`, `<footer>`, `<article>`, `<section>`.",
                    "Using semantic tags improves accessibility and SEO."
                ],
                code: `
                <article>
                    <header>
                        <h1>Article Title</h1>
                    </header>
                    <p>Article content goes here.</p>
                </article>
            `
            }
        ],
        practiceQuestions: [
            {
                question: "What is the difference between block-level and inline elements?",
                hint: "Discuss their display behavior in the layout."
            },
            {
                question: "Name two semantic elements in HTML.",
                hint: "Consider elements that provide meaning beyond structure."
            }
        ]
    },
    'multimedia_tags': {
        title: "Multimedia - Audio and Video Tags",
        description: "Learn how to embed audio and video content in your web pages using HTML tags.",
        sections: [
            {
                title: "Embedding Audio",
                content: "Use the `<audio>` tag to include audio files in your HTML document. You can specify controls for playback, such as play, pause, and volume.",
                points: [
                    "The `<audio>` tag can include attributes like `controls`, `autoplay`, and `loop`.",
                    "Use the `<source>` tag to specify multiple audio formats for better compatibility."
                ],
                code: `
                <audio controls>
                    <source src="audiofile.mp3" type="audio/mpeg">
                    <source src="audiofile.ogg" type="audio/ogg">
                    Your browser does not support the audio element.
                </audio>
            `
            },
            {
                title: "Embedding Video",
                content: "Use the `<video>` tag to add video files. Similar to audio, you can include controls for playback.",
                points: [
                    "The `<video>` tag supports attributes like `controls`, `autoplay`, and `muted`.",
                    "Include multiple formats for better browser support."
                ],
                code: `
                <video controls width="600">
                    <source src="videofile.mp4" type="video/mp4">
                    <source src="videofile.webm" type="video/webm">
                    Your browser does not support the video tag.
                </video>
            `
            }
        ],
        practiceQuestions: [
            {
                question: "What attributes can you add to the `<audio>` tag?",
                hint: "Think about playback controls and behavior."
            },
            {
                question: "How can you provide multiple formats for audio or video files?",
                hint: "Consider the `<source>` tag."
            }
        ]
    },
    'working_images': {
        title: "Working with Images",
        description: "Learn how to include images in your web pages using the `<img>` tag and understand its attributes.",
        sections: [
            {
                title: "Embedding Images",
                content: "The `<img>` tag is used to embed images in HTML. It is a self-closing tag that requires the `src` and `alt` attributes.",
                points: [
                    "The `src` attribute specifies the image source.",
                    "The `alt` attribute provides alternative text for accessibility."
                ],
                code: `
                <img src="image.jpg" alt="Description of the image" width="500" height="300">
            `
            },
            {
                title: "Image Attributes",
                content: "Explore additional attributes of the `<img>` tag that enhance image presentation.",
                points: [
                    "The `width` and `height` attributes control image dimensions.",
                    "The `title` attribute can provide additional information on hover."
                ],
                code: `
                <img src="image.jpg" alt="Description" width="500" height="300" title="This is an image">
            `
            }
        ],
        practiceQuestions: [
            {
                question: "What are the required attributes for the `<img>` tag?",
                hint: "Think about image source and alternative text."
            },
            {
                question: "How do you adjust the size of an image in HTML?",
                hint: "Discuss `width` and `height` attributes."
            }
        ]
    },
    'text_physical_style': {
        title: "Formatting Text with Physical Style Elements",
        description: "Understand how to use physical style elements to format text in HTML.",
        sections: [
            {
                title: "Physical Style Elements",
                content: "Physical style elements are used to visually change the appearance of text. While their use is discouraged in favor of CSS, they are still available.",
                points: [
                    "Common physical style elements include `<b>`, `<i>`, `<u>`, and `<s>`.",
                    "These elements can change text to bold, italic, underline, and strikethrough, respectively."
                ],
                code: `
                <p>This is <b>bold</b> text, <i>italic</i> text, <u>underlined</u> text, and <s>strikethrough</s> text.</p>
            `
            }
        ],
        practiceQuestions: [
            {
                question: "What are some examples of physical style elements?",
                hint: "Consider how these elements modify text appearance."
            },
            {
                question: "Why is it recommended to use CSS for styling instead of physical elements?",
                hint: "Think about separation of content and presentation."
            }
        ]
    },
    'text_logical_style': {
        title: "Formatting Text with Logical Style Elements",
        description: "Learn how to use logical style elements to convey meaning and structure in your HTML content.",
        sections: [
            {
                title: "Logical Style Elements",
                content: "Logical style elements provide semantic meaning to text without necessarily altering its appearance. They are preferred for accessibility and SEO.",
                points: [
                    "Use `<strong>` for strong emphasis (bold) and `<em>` for emphasized text (italic).",
                    "The `<code>` tag is used to display code snippets."
                ],
                code: `
                <p>This is a <strong>strongly emphasized</strong> word and this is <em>emphasized</em> text. Here is some code: <code>console.log('Hello World');</code></p>
            `
            }
        ],
        practiceQuestions: [
            {
                question: "What is the difference between `<strong>` and `<b>`?",
                hint: "Consider semantic meaning versus visual appearance."
            },
            {
                question: "When should you use the `<em>` tag?",
                hint: "Discuss how it conveys meaning."
            }
        ]
    },
    'anchor_tag_links': {
        title: "Creating Links with Anchor Tag",
        description: "Understand how to create hyperlinks using the `<a>` tag and its attributes.",
        sections: [
            {
                title: "Creating Links",
                content: "The `<a>` tag is used to create hyperlinks to other web pages or resources. The `href` attribute specifies the destination URL.",
                points: [
                    "Links can point to external sites, internal pages, or anchors within the same page.",
                    "Use the `target` attribute to specify how the link opens (e.g., in a new tab)."
                ],
                code: `
                <a href="https://www.example.com" target="_blank">Visit Example</a>
                <a href="#section1">Go to Section 1</a>
            `
            },
            {
                title: "Link Attributes",
                content: "Explore additional attributes of the `<a>` tag that enhance link functionality.",
                points: [
                    "The `title` attribute provides additional information when hovered.",
                    "The `rel` attribute defines the relationship between the current document and the linked resource."
                ],
                code: `
                <a href="https://www.example.com" title="Visit Example" rel="noopener noreferrer">Example</a>
            `
            }
        ],
        practiceQuestions: [
            {
                question: "How do you create a hyperlink in HTML?",
                hint: "Discuss the `<a>` tag and `href` attribute."
            },
            {
                question: "What does the target='_blank' attribute do?",
                hint: "Think about link behavior."
            }
        ]
    },
    'css_intro_types': {
        title: "Introduction to CSS and Types",
        description: "Discover the fundamentals of CSS, including how it styles HTML elements and the different types of CSS.",
        sections: [
            {
                title: "What is CSS?",
                content: "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML.",
                points: [
                    "CSS controls layout, colors, fonts, and overall visual presentation.",
                    "It helps separate content from design."
                ]
            },
            {
                title: "Types of CSS",
                content: "There are three main types of CSS: inline, internal, and external.",
                points: [
                    "Inline CSS is applied directly within an HTML element's `style` attribute.",
                    "Internal CSS is defined within a `<style>` tag in the `<head>` section.",
                    "External CSS is linked to an HTML document via a `<link>` tag, allowing multiple pages to share the same stylesheet."
                ],
                code: `
                <!-- Inline CSS -->
                <h1 style="color: red;">Hello World</h1>

                <!-- Internal CSS -->
                <style>
                    h1 {
                        color: blue;
                    }
                </style>

                <!-- External CSS -->
                <link rel="stylesheet" href="styles.css">
            `
            }
        ],
        practiceQuestions: [
            {
                question: "What are the advantages of using external CSS?",
                hint: "Consider maintenance and reusability."
            },
            {
                question: "How can you include CSS directly in an HTML element?",
                hint: "Think about the `style` attribute."
            }
        ]
    },
    'css_selectors': {
        title: "CSS Selectors: Type, ID, Class",
        description: "Learn about different types of CSS selectors to target HTML elements effectively.",
        sections: [
            {
                title: "Type Selectors",
                content: "Type selectors target elements by their HTML tag name. For example, `p` targets all paragraph elements.",
                points: [
                    "Type selectors are simple and efficient for styling all instances of a particular element.",
                    "Example: `p { color: blue; }` styles all paragraphs."
                ],
                code: `
                p {
                    color: blue;
                }
            `
            },
            {
                title: "ID Selectors",
                content: "ID selectors target a specific element with a unique identifier using the `#` symbol.",
                points: [
                    "Each ID must be unique within a page.",
                    "Example: `#header { background-color: gray; }` styles the element with id='header'."
                ],
                code: `
                #header {
                    background-color: gray;
                }
            `
            },
            {
                title: "Class Selectors",
                content: "Class selectors target elements with a shared class name using the `.` symbol.",
                points: [
                    "Multiple elements can share the same class.",
                    "Example: `.btn { padding: 10px; }` styles all elements with class='btn'."
                ],
                code: `
                .btn {
                    padding: 10px;
                }
            `
            }
        ],
        practiceQuestions: [
            {
                question: "What is the difference between ID and class selectors?",
                hint: "Consider uniqueness and how many elements can be targeted."
            },
            {
                question: "How do you apply styles to all `<h1>` elements using CSS?",
                hint: "Think about using a type selector."
            }
        ]
    },
    'css_text_properties': {
        title: "CSS Properties: Text Control and Formatting",
        description: "Explore various CSS properties used for controlling and formatting text in web pages.",
        sections: [
            {
                title: "Text Color and Background Color",
                content: "You can change the color of text and its background using the `color` and `background-color` properties.",
                points: [
                    "Example: `color: white;` sets the text color to white.",
                    "Example: `background-color: black;` sets the background color to black."
                ],
                code: `
                p {
                    color: white;
                    background-color: black;
                }
            `
            },
            {
                title: "Font Properties",
                content: "Control font appearance using properties such as `font-size`, `font-family`, and `font-weight`.",
                points: [
                    "Example: `font-size: 16px;` changes the font size.",
                    "Example: `font-family: Arial, sans-serif;` sets the font type."
                ],
                code: `
                h1 {
                    font-size: 24px;
                    font-family: Arial, sans-serif;
                    font-weight: bold;
                }
            `
            },
            {
                title: "Text Alignment and Decoration",
                content: "Control text alignment with `text-align` and apply decorations like `text-decoration`.",
                points: [
                    "Example: `text-align: center;` centers the text.",
                    "Example: `text-decoration: underline;` underlines the text."
                ],
                code: `
                p {
                    text-align: center;
                    text-decoration: underline;
                }
            `
            }
        ],
        practiceQuestions: [
            {
                question: "How do you change the font size of an element using CSS?",
                hint: "Consider the `font-size` property."
            },
            {
                question: "What property would you use to center text within a block?",
                hint: "Think about text alignment."
            }
        ]
    },
    'css_box_model': {
        title: "CSS Box Model: Padding, Margin, Border",
        description: "Understand the CSS box model, which defines how elements are structured in a web layout.",
        sections: [
            {
                title: "What is the Box Model?",
                content: "The CSS box model describes the rectangular boxes generated for elements, including margins, borders, padding, and the content area.",
                points: [
                    "Every element is considered a box with content, padding, border, and margin.",
                    "Example: `margin`, `border`, and `padding` determine the spacing and boundaries of the box."
                ]
            },
            {
                title: "Margin",
                content: "The `margin` property creates space outside an element's border. It can be set individually for each side or all at once.",
                points: [
                    "Example: `margin: 20px;` applies 20 pixels of margin on all sides.",
                    "Example: `margin: 10px 5px;` applies 10 pixels vertically and 5 pixels horizontally."
                ],
                code: `
                div {
                    margin: 20px;
                }
            `
            },
            {
                title: "Padding and Border",
                content: "The `padding` property creates space inside an element's border, while the `border` property defines the element's boundary.",
                points: [
                    "Example: `padding: 15px;` adds 15 pixels of space inside the element.",
                    "Example: `border: 1px solid black;` creates a solid black border around the element."
                ],
                code: `
                div {
                    padding: 15px;
                    border: 1px solid black;
                }
            `
            }
        ],
        practiceQuestions: [
            {
                question: "What is the difference between margin and padding?",
                hint: "Consider where each property applies in relation to the element."
            },
            {
                question: "How can you apply different margins to each side of an element?",
                hint: "Think about the margin shorthand syntax."
            }
        ]
    },
    'div_span_css': {
        title: "Div and Span in CSS",
        description: "Learn the differences between `<div>` and `<span>` elements and how to use them for styling.",
        sections: [
            {
                title: "Using `<div>`",
                content: "`<div>` is a block-level element used to group content for styling and layout purposes.",
                points: [
                    "Block-level elements start on a new line and take up the full width available.",
                    "Use `<div>` for larger sections of content."
                ],
                code: `
                <div class="container">
                    <h2>Section Title</h2>
                    <p>This is a paragraph inside a div.</p>
                </div>
            `
            },
            {
                title: "Using `<span>`",
                content: "`<span>` is an inline element used to apply styles to a small portion of text or other inline elements.",
                points: [
                    "Inline elements do not start on a new line and only take up as much width as necessary.",
                    "Use `<span>` for smaller sections of content."
                ],
                code: `
                <p>This is a <span class="highlight">highlighted</span> word in a paragraph.</p>
            `
            }
        ],
        practiceQuestions: [
            {
                question: "When would you use a `<div>` instead of a `<span>`?",
                hint: "Consider the layout and content structure."
            },
            {
                question: "How do you apply CSS styles to a `<span>` element?",
                hint: "Think about how you can target elements by their class or tag."
            }
        ]
    },
    'background_images': {
        title: "Working with Background Images",
        description: "Learn how to add and manipulate background images in CSS for a visually appealing design.",
        sections: [
            {
                title: "Adding a Background Image",
                content: "Use the `background-image` property to add an image as the background of an element.",
                points: [
                    "Example: `background-image: url('image.jpg');` sets the specified image as the background.",
                    "Multiple background images can be added by separating them with commas."
                ],
                code: `
                .banner {
                    background-image: url('banner.jpg');
                }
            `
            },
            {
                title: "Background Properties",
                content: "Control how the background image is displayed using properties like `background-size`, `background-repeat`, and `background-position`.",
                points: [
                    "Example: `background-size: cover;` scales the image to cover the entire element.",
                    "Example: `background-repeat: no-repeat;` prevents the image from repeating."
                ],
                code: `
                .banner {
                    background-image: url('banner.jpg');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }
            `
            }
        ],
        practiceQuestions: [
            {
                question: "How do you ensure a background image covers the entire element?",
                hint: "Think about using the `background-size` property."
            },
            {
                question: "What property would you use to center a background image?",
                hint: "Consider the `background-position` property."
            }
        ]
    },
    'css_positioning': {
        title: "CSS Positioning",
        description: "Learn how to control the layout of elements on a webpage using CSS positioning.",
        sections: [
            {
                title: "What is CSS Positioning?",
                content: "CSS positioning allows you to define how elements are placed on a webpage. The `position` property can take several values, including `static`, `relative`, `absolute`, `fixed`, and `sticky`."
            },
            {
                title: "Static Positioning",
                content: "This is the default positioning for all HTML elements. Elements are positioned according to the normal document flow."
            },
            {
                title: "Relative Positioning",
                content: "Relative positioning allows you to move an element relative to its normal position in the document flow. The `top`, `right`, `bottom`, and `left` properties are used to adjust its position."
            },
            {
                title: "Absolute Positioning",
                content: "An absolutely positioned element is removed from the normal document flow and positioned relative to its closest positioned ancestor (or the document if none exists)."
            },
            {
                title: "Fixed Positioning",
                content: "A fixed element is positioned relative to the browser window. It stays in the same position even when the page is scrolled."
            },
            {
                title: "Sticky Positioning",
                content: "Sticky positioning is a hybrid between relative and fixed positioning. The element toggles between relative and fixed based on the user's scroll position."
            },
            {
                title: "CSS Positioning Example",
                content: "Here's an example of relative and absolute positioning:",
                code: `div.relative {
    position: relative;
    top: 20px;
    left: 30px;
}

div.absolute {
    position: absolute;
    top: 50px;
    left: 100px;
}`
            }
        ],
        practiceQuestions: [
            {
                question: "Create an HTML document with a relatively positioned div element that moves 20px from the top and 30px from the left.",
                hint: "Use the `position: relative` property in your CSS."
            },
            {
                question: "Create a layout where an absolutely positioned element is placed inside a container, 50px from the top and 100px from the left.",
                hint: "Use `position: absolute` for the child element and set `position: relative` for the parent container."
            },
            {
                question: "Create a fixed navigation bar that stays at the top of the page even when the user scrolls.",
                hint: "Use `position: fixed` for the nav element."
            }
        ],
        nextChapter: "css_flexbox"
    },
    'css_flexbox': {
        title: "CSS Flexbox",
        description: "Learn about CSS Flexbox, a layout model that allows you to align elements dynamically and responsively.",
        sections: [
            {
                title: "What is Flexbox?",
                content: "The Flexbox Layout (Flexible Box) is a one-dimensional layout model that allows you to distribute space and align items in a container."
            },
            {
                title: "Flex Container and Flex Items",
                content: "A Flexbox layout is created by defining a flex container using `display: flex`. All child elements inside the container become flex items, and they can be arranged horizontally or vertically."
            },
            {
                title: "Main Axis and Cross Axis",
                content: "Flexbox uses a main axis and a cross axis. The main axis defines how items are placed (row or column), and the cross axis is perpendicular to the main axis."
            },
            {
                title: "Justifying and Aligning Items",
                content: "Flexbox allows you to control the alignment and spacing of flex items using properties like `justify-content`, `align-items`, and `align-self`.",
                points: [
                    "`justify-content`: Aligns items along the main axis (e.g., start, center, space-between).",
                    "`align-items`: Aligns items along the cross axis (e.g., stretch, center).",
                    "`align-self`: Aligns a specific flex item along the cross axis."
                ]
            },
            {
                title: "Flexbox Example",
                content: "Here's an example of a basic flex container with items aligned in a row:",
                code: `div.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

div.item {
    background-color: lightblue;
    padding: 10px;
    margin: 5px;
}`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a flex container that displays three items in a row with equal space between them.",
                hint: "Use `display: flex` and `justify-content: space-between`."
            },
            {
                question: "Create a flex container where the items are centered both horizontally and vertically.",
                hint: "Use `justify-content: center` and `align-items: center`."
            },
            {
                question: "Make one of the items in the flex container stretch to fill the available space along the cross axis.",
                hint: "Use `align-self: stretch` for that specific flex item."
            }
        ],
        nextChapter: "css_grid"
    },
    'css_grid': {
        title: "CSS Grid",
        description: "Learn how to create complex, two-dimensional layouts with CSS Grid.",
        sections: [
            {
                title: "What is CSS Grid?",
                content: "CSS Grid is a two-dimensional layout system that allows you to control both columns and rows in a grid container."
            },
            {
                title: "Creating a Grid Container",
                content: "To create a grid, you define a grid container using `display: grid`. Then, you can specify the number of rows and columns using properties like `grid-template-columns` and `grid-template-rows`."
            },
            {
                title: "Placing Grid Items",
                content: "You can place grid items into specific rows and columns using the `grid-column` and `grid-row` properties."
            },
            {
                title: "Grid Example",
                content: "Here’s a basic example of a 3-column grid layout:",
                code: `div.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
}

div.grid-item {
    background-color: lightgreen;
    padding: 20px;
}`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a grid layout with three columns of equal width and a gap of 10px between the items.",
                hint: "Use `display: grid` and `grid-template-columns: 1fr 1fr 1fr`."
            },
            {
                question: "Place a grid item to span across two columns in a grid layout.",
                hint: "Use the `grid-column` property for that specific item."
            },
            {
                question: "Create a grid with two rows and three columns, and place an item in the second row and first column.",
                hint: "Use `grid-row` and `grid-column` properties to specify the item's placement."
            }
        ],
        nextChapter: "css_media_queries"
    },
    'css_media_queries': {
        title: "CSS Media Queries",
        description: "Learn how to make your webpages responsive using CSS media queries.",
        sections: [
            {
                title: "What are Media Queries?",
                content: "Media queries allow you to apply CSS rules based on the characteristics of the device or screen size, making your website responsive."
            },
            {
                title: "How Media Queries Work",
                content: "Media queries use the `@media` rule to apply different styles based on screen width, height, resolution, orientation, etc.",
                code: `@media (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}`
            },
            {
                title: "Common Media Query Breakpoints",
                content: "Breakpoints are specific screen widths where the layout changes. Common breakpoints include:",
                points: [
                    "Small devices (phones): max-width: 600px",
                    "Medium devices (tablets): max-width: 768px",
                    "Large devices (desktops): max-width: 992px"
                ]
            },
            {
                title: "Responsive Design Example",
                content: "Here’s an example of a responsive layout that changes background color based on screen size:",
                code: `<style>
@media (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}

@media (min-width: 601px) {
    body {
        background-color: lightgreen;
    }
}
</style>`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a media query that changes the font size to 14px for screens smaller than 600px.",
                hint: "Use `@media (max-width: 600px)` and change the font size property."
            },
            {
                question: "Design a responsive layout that switches from a 2-column layout to a 1-column layout on screens smaller than 768px.",
                hint: "Use `grid-template-columns` and `@media` to change the column layout."
            },
            {
                question: "Apply different background colors to the body for screens wider and smaller than 600px using media queries.",
                hint: "Use the `@media` rule to define styles based on `max-width` and `min-width`."
            }
        ],
        nextChapter: "css_animations"
    },
    'css_animations': {
        title: "CSS Animations",
        description: "Learn how to bring life to your web pages by adding animations using CSS.",
        sections: [
            {
                title: "What are CSS Animations?",
                content: "CSS animations allow you to animate transitions between different states of an element. You can change an element's properties gradually over time using keyframes."
            },
            {
                title: "Keyframes in CSS",
                content: "The `@keyframes` rule specifies the changes that will occur during the animation. You define the changes in styles at different points of the animation, usually from `0%` to `100%`.",
                code: `@keyframes example {
    from {background-color: red;}
    to {background-color: yellow;}
}`
            },
            {
                title: "Applying Animations",
                content: "To apply an animation, use the `animation` property. This property takes several values, such as the name of the animation, duration, timing function, delay, and more.",
                code: `div {
    animation: example 3s ease-in-out;
}`
            },
            {
                title: "Animation Properties",
                content: "Here are the main properties used for animations:",
                points: [
                    "`animation-name`: The name of the `@keyframes` animation.",
                    "`animation-duration`: Defines how long the animation lasts (e.g., 2s, 500ms).",
                    "`animation-timing-function`: Controls the pace of the animation (e.g., `ease`, `linear`, `ease-in`, `ease-out`).",
                    "`animation-delay`: Specifies a delay before the animation starts.",
                    "`animation-iteration-count`: Number of times the animation repeats (e.g., `infinite`, `2`).",
                    "`animation-direction`: Whether the animation should run in reverse (e.g., `normal`, `reverse`, `alternate`)."
                ]
            },
            {
                title: "CSS Animation Example",
                content: "Here’s a complete example of a bouncing ball animation:",
                code: `@keyframes bounce {
    0% {transform: translateY(0);}
    50% {transform: translateY(-100px);}
    100% {transform: translateY(0);}
}

.ball {
    width: 50px;
    height: 50px;
    background-color: blue;
    border-radius: 50%;
    animation: bounce 2s infinite ease-in-out;
}`
            }
        ],
        practiceQuestions: [
            {
                question: "Create an animation that changes the background color of a div from blue to green over 3 seconds.",
                hint: "Use `@keyframes` and the `animation` property with `background-color`."
            },
            {
                question: "Create a bouncing ball animation where the ball moves up and down continuously.",
                hint: "Use the `transform: translateY()` property in the `@keyframes` rule and loop it with `animation-iteration-count: infinite`."
            },
            {
                question: "Animate the width of a div from 100px to 200px over 5 seconds when the page loads.",
                hint: "Use `@keyframes` with `width` and set `animation-duration` to 5s."
            },
            {
                question: "Create an animation that starts after 2 seconds and fades an element in (changes opacity from 0 to 1).",
                hint: "Use `animation-delay` to start after 2 seconds and change the `opacity` in your `@keyframes`."
            }
        ],
        nextChapter: "css_transitions"
    },
    'css_transitions': {
        title: "CSS Transitions",
        description: "Learn how to smoothly change property values over time with CSS transitions.",
        sections: [
            {
                title: "What are CSS Transitions?",
                content: "CSS transitions enable you to change property values over a given duration, making property changes smooth and gradual instead of instantaneous."
            },
            {
                title: "Defining a Transition",
                content: "To create a transition, you use the `transition` property along with the CSS property you want to animate. You can specify the duration, timing function, and delay.",
                code: `div {
    width: 100px;
    transition: width 2s ease-in-out;
}

div:hover {
    width: 200px;
}`
            },
            {
                title: "Transition Properties",
                content: "Here are the key transition properties:",
                points: [
                    "`transition-property`: The CSS property you want to animate (e.g., `width`, `height`, `opacity`).",
                    "`transition-duration`: How long the transition takes (e.g., 1s, 500ms).",
                    "`transition-timing-function`: The pace of the transition (e.g., `linear`, `ease`, `ease-in-out`).",
                    "`transition-delay`: The amount of time to wait before starting the transition."
                ]
            },
            {
                title: "CSS Transition Example",
                content: "Here’s an example of changing the background color of a button when it's hovered:",
                code: `button {
    background-color: lightblue;
    transition: background-color 1s;
}

button:hover {
    background-color: lightgreen;
}`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a transition that changes the opacity of a div from 0 to 1 over 3 seconds when hovered.",
                hint: "Use the `transition` property with `opacity`."
            },
            {
                question: "Create a button that changes its background color from red to green over 1.5 seconds when hovered.",
                hint: "Use `transition: background-color 1.5s` on the button."
            },
            {
                question: "Create a box that expands its width from 100px to 300px over 2 seconds when clicked.",
                hint: "Use `transition` with the `width` property and adjust it on a `:hover` or `:active` state."
            }
        ],
        nextChapter: "css_transforms"
    },
    'css_transforms': {
        title: "CSS Transforms",
        description: "Learn how to change the appearance of elements by scaling, rotating, skewing, and translating them using CSS transforms.",
        sections: [
            {
                title: "What are CSS Transforms?",
                content: "CSS transforms allow you to apply geometric transformations to elements, such as moving, rotating, scaling, or skewing."
            },
            {
                title: "Basic Transform Functions",
                content: "Here are the most common CSS transform functions:",
                points: [
                    "`translate(x, y)`: Moves an element along the X and Y axes.",
                    "`rotate(angle)`: Rotates an element by a given degree.",
                    "`scale(x, y)`: Scales an element horizontally and vertically.",
                    "`skew(x-angle, y-angle)`: Skews an element along the X and Y axes."
                ],
                code: `div {
    transform: translate(50px, 100px) rotate(45deg) scale(1.5);
}`
            },
            {
                title: "Transform Origin",
                content: "The `transform-origin` property defines the point of transformation. By default, the origin is at the center of the element, but you can adjust it.",
                code: `div {
    transform: rotate(45deg);
    transform-origin: top left;
}`
            },
            {
                title: "CSS Transform Example",
                content: "Here’s an example where an element rotates and scales when hovered:",
                code: `div {
    width: 100px;
    height: 100px;
    background-color: lightcoral;
    transition: transform 0.5s ease;
}

div:hover {
    transform: rotate(45deg) scale(1.2);
}`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a square that moves 100px to the right and 50px down when hovered.",
                hint: "Use `translate()` with `transform` and `hover`."
            },
            {
                question: "Create a div that rotates 90 degrees when hovered.",
                hint: "Use the `rotate()` function with `transform`."
            },
            {
                question: "Create a button that scales up by 1.5x when clicked.",
                hint: "Use the `scale()` function with `transform`."
            },
            {
                question: "Create a div that skews by 20 degrees along the X-axis when hovered.",
                hint: "Use the `skew()` function with `transform`."
            }
        ],
        nextChapter: "css_flexbox"
    },
    'responsive_design': {
        title: "Responsive Design",
        description: "Learn how to make your web pages look good on all devices by implementing responsive design techniques.",
        sections: [
            {
                title: "What is Responsive Design?",
                content: "Responsive design ensures that your web pages adapt to different screen sizes and devices, providing an optimal viewing experience on both desktops and mobile devices."
            },
            {
                title: "Media Queries",
                content: "Media queries allow you to apply CSS rules based on the size of the viewport or device. You can use breakpoints to apply different styles for different screen widths.",
                code: `@media (max-width: 600px) {
    .container {
        flex-direction: column;
    }
}`
            },
            {
                title: "Fluid Layouts",
                content: "Fluid layouts use percentages instead of fixed units like pixels, allowing elements to scale relative to the size of the viewport. This makes your layout more adaptable to different screen sizes.",
                code: `.container {
    width: 100%;
    padding: 10%;
}`
            },
            {
                title: "Responsive Images",
                content: "Responsive images adjust their size based on the screen size. You can use the `max-width` property to make images responsive, or use the `srcset` attribute for more control.",
                code: `img {
    max-width: 100%;
    height: auto;
}`
            },
            {
                title: "CSS Grid and Flexbox for Responsive Design",
                content: "Both CSS Grid and Flexbox are powerful tools for creating responsive layouts. You can combine them with media queries to change the layout based on screen size.",
                code: `.container {
    display: flex;
    flex-wrap: wrap;
}

@media (max-width: 600px) {
    .container {
        display: grid;
        grid-template-columns: 1fr;
    }
}`
            }
        ],
        practiceQuestions: [
            {
                question: "Create a responsive layout where the navigation menu becomes a vertical column on screens smaller than 600px.",
                hint: "Use `flex-direction` in a media query to change the layout."
            },
            {
                question: "Create a responsive grid layout where the number of columns changes based on the screen size.",
                hint: "Use `grid-template-columns` in media queries."
            },
            {
                question: "Make an image responsive so that it scales down as the screen size decreases.",
                hint: "Use `max-width` and `height: auto` on the image."
            },
            {
                question: "Create a fluid layout where the container takes up 80% of the viewport width on small screens and 60% on large screens.",
                hint: "Use percentages for width and media queries to adjust the layout."
            }
        ]
    }
};

