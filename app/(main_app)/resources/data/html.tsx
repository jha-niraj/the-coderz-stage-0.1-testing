export const units = {
    unit1: "Unit I: Exposure To HTML",
    unit2: "Unit II: Working with Text, Links, Images, URLs, Multimedia and Interactive in HTML",
    unit3: "Unit III: Cascading Style Sheets (CSS)",
    unit4: "Unit IV: Working with Tables and Forms",
    unit5: "Unit V: CSS Grids and Webpage Layouts"
};

export const htmlCssResources = [
    {
        unit: units.unit1,
        topics: [
            {
                name: "HTML Document Structure",
                lessons: [
                    {
                        title: "What is HTML?",
                        content: "HTML (HyperText Markup Language) is the standard language for creating web pages. It's like the skeleton of a webpage, telling the browser how to structure and display the content."
                    },
                    {
                        title: "Basic Structure of an HTML Document",
                        content: "Every HTML document has a basic structure that includes <!DOCTYPE html>, <html>, <head>, and <body> tags. This structure is like the blueprint of a house!",
                        code: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My First Webpage</title>
  </head>
  <body>
      <h1>Hello, World!</h1>
      <p>This is my first webpage.</p>
  </body>
  </html>
              `,
                        image: ""
                    }
                ]
            },
            {
                name: "HTML Elements and Tags",
                lessons: [
                    {
                        title: "Understanding HTML Tags",
                        content: "HTML tags are like containers that wrap around content to give it meaning and structure. Most tags come in pairs: an opening tag and a closing tag."
                    },
                    {
                        title: "Headings and Paragraphs",
                        content: "Headings (<h1> to <h6>) are used to create titles and subtitles. Paragraphs (<p>) are for blocks of text.",
                        code: `
  <h1>This is the main title</h1>
  <h2>This is a subtitle</h2>
  <p>This is a paragraph of text.</p>
              `,
                        image: ""
                    },
                    {
                        title: "Lists in HTML",
                        content: "HTML supports ordered (<ol>), unordered (<ul>), and description (<dl>) lists. Each list item is wrapped in <li> tags.",
                        code: `
  <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Oranges</li>
  </ul>
              `,
                        image: ""
                    }
                ]
            },
            {
                name: "HTML Attributes",
                lessons: [
                    {
                        title: "What are HTML Attributes?",
                        content: "Attributes provide additional information about HTML elements. They're like adjectives for your HTML tags!",
                        code: `
  <a href="https://www.example.com" target="_blank">Visit Example.com</a>
              `,
                        image: "/images/html-attributes.png"
                    },
                    {
                        title: "Global Attributes",
                        content: "Some attributes can be used on all HTML elements. These include 'class', 'id', 'style', and 'title'."
                    }
                ]
            },
            {
                name: "Comments in HTML",
                lessons: [
                    {
                        title: "Adding Comments",
                        content: "Comments in HTML are not displayed in the browser. They're like secret notes for developers!",
                        code: `
  <!-- This is a comment in HTML -->
  <p>This text will be visible in the browser.</p>
              `,
                        image: ""
                    }
                ]
            }
        ]
    },
    {
        unit: units.unit2,
        topics: [
            {
                name: "Working with Text",
                lessons: [
                    {
                        title: "Text Formatting Tags",
                        content: "HTML provides various tags for text formatting, such as <strong>, <em>, <mark>, <small>, <del>, <ins>, <sub>, and <sup>.",
                        code: `
  <p>This is <strong>bold</strong> and this is <em>italic</em>.</p>
  <p>This is <mark>highlighted</mark> and this is <small>small</small>.</p>
  <p>This is <del>deleted</del> and this is <ins>inserted</ins>.</p>
  <p>This is <sub>subscript</sub> and this is <sup>superscript</sup>.</p>
              `,
                        image: ""
                    },
                    {
                        title: "Quotations and Citations",
                        content: "Use <blockquote> for long quotations, <q> for short inline quotations, and  for citing works.",
                        code: `
  <blockquote>
      <p>The greatest glory in living lies not in never falling, but in rising every time we fall.</p>
      Nelson Mandela
  </blockquote>
              `,
                        image: ""
                    }
                ]
            },
            {
                name: "Working with Links",
                lessons: [
                    {
                        title: "Creating Hyperlinks",
                        content: "Use the <a> tag to create links to other web pages, files, or specific locations within a page.",
                        code: `
  <a href="https://www.example.com">Visit Example.com</a>
  <a href="#section2">Jump to Section 2</a>
              `,
                        image: ""
                    },
                    {
                        title: "Email and Phone Links",
                        content: "You can create links that open the user's email client or dial a phone number.",
                        code: `
  <a href="mailto:example@example.com">Send an email</a>
  <a href="tel:+1234567890">Call us</a>
              `,
                        image: ""
                    }
                ]
            },
            {
                name: "Working with Images",
                lessons: [
                    {
                        title: "Adding Images",
                        content: "Use the <img> tag to add images to your webpage. Don't forget the 'alt' attribute for accessibility!",
                        code: `
  <img src="cute-cat.jpg" alt="A cute cat playing with yarn" width="300" height="200">
              `,
                        image: ""
                    },
                    {
                        title: "Image Maps",
                        content: "Image maps allow you to create clickable areas on an image.",
                        code: `
  <img src="world-map.jpg" alt="World Map" usemap="#worldmap">
  <map name="worldmap">
      <area shape="rect" coords="0,0,100,100" href="north-america.html" alt="North America">
      <area shape="circle" coords="200,200,50" href="europe.html" alt="Europe">
  </map>
              `,
                        image: ""
                    }
                ]
            },
            {
                name: "Multimedia",
                lessons: [
                    {
                        title: "Adding Audio",
                        content: "Use the <audio> tag to embed sound content in your web pages.",
                        code: `
  <audio controls>
      <source src="audio-file.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
  </audio>
              `,
                        image: ""
                    },
                    {
                        title: "Adding Video",
                        content: "The <video> tag is used to embed video content.",
                        code: `
  <video width="320" height="240" controls>
      <source src="movie.mp4" type="video/mp4">
      Your browser does not support the video tag.
  </video>
              `,
                        image: ""
                    },
                    {
                        title: "iframes",
                        content: "Use <iframe> to embed another document within the current HTML document.",
                        code: `
  <iframe src="https://www.example.com" width="500" height="300"></iframe>
              `,
                        image: ""
                    }
                ]
            }
        ]
    },
    {
        unit: units.unit3,
        topics: [
            {
                name: "Introduction to CSS",
                lessons: [
                    {
                        title: "What is CSS?",
                        content: "CSS (Cascading Style Sheets) is used to style and layout web pages. It's like the paint and decorations for your HTML house!"
                    },
                    {
                        title: "CSS Syntax",
                        content: "CSS consists of selectors and declarations. Selectors target HTML elements, and declarations specify the styles.",
                        code: `
  selector {
      property: value;
  }
              `,
                        image: "/images/css-syntax.png"
                    }
                ]
            },
            {
                name: "CSS Selectors",
                lessons: [
                    {
                        title: "Element Selectors",
                        content: "Target all elements of a specific type.",
                        code: `
  p {
      color: blue;
  }
              `,
                        image: "/images/element-selector.png"
                    },
                    {
                        title: "Class Selectors",
                        content: "Target elements with a specific class attribute.",
                        code: `
  .highlight {
      background-color: yellow;
  }
              `,
                        image: "/images/class-selector.png"
                    },
                    {
                        title: "ID Selectors",
                        content: "Target a specific element with a unique ID.",
                        code: `
  #header {
      font-size: 24px;
  }
              `,
                        image: "/images/id-selector.png"
                    },
                    {
                        title: "Attribute Selectors",
                        content: "Target elements based on their attributes or attribute values.",
                        code: `
  input[type="text"] {
      border: 1px solid gray;
  }
              `,
                        image: "/images/attribute-selector.png"
                    }
                ]
            },
            {
                name: "CSS Properties",
                lessons: [
                    {
                        title: "Color and Background",
                        content: "Control text color and element backgrounds.",
                        code: `
  body {
      color: #333;
      background-color: #f0f0f0;
  }
              `,
                        image: "/images/color-background.png"
                    },
                    {
                        title: "Font and Text Properties",
                        content: "Style your text with various font properties.",
                        code: `
  p {
      font-family: Arial, sans-serif;
      font-size: 16px;
      line-height: 1.5;
      text-align: justify;
  }
              `,
                        image: "/images/font-properties.png"
                    },
                    {
                        title: "Box Model Properties",
                        content: "Control the sizing and spacing of elements.",
                        code: `
  div {
      width: 300px;
      padding: 20px;
      border: 1px solid black;
      margin: 10px;
  }
              `,
                        image: "/images/box-model.png"
                    }
                ]
            },
            {
                name: "CSS Layout",
                lessons: [
                    {
                        title: "Display Property",
                        content: "Control how an element is displayed.",
                        code: `
  span {
      display: inline-block;
  }
              `,
                        image: "/images/display-property.png"
                    },
                    {
                        title: "Position Property",
                        content: "Control the positioning of elements.",
                        code: `
  .relative {
      position: relative;
      top: 20px;
      left: 30px;
  }
              `,
                        image: "/images/position-property.png"
                    },
                    {
                        title: "Flexbox",
                        content: "Create flexible container layouts.",
                        code: `
  .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
              `,
                        image: "/images/flexbox.png"
                    }
                ]
            }
        ]
    },
    {
        unit: units.unit4,
        topics: [
            {
                name: "Working with Forms",
                lessons: [
                    {
                        title: "Form Basics",
                        content: "Create forms using the <form> element and various input types.",
                        code: `
    <form action="/submit-form" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <input type="submit" value="Submit">
    </form>
                `,
                        image: ""
                    },
                    {
                        title: "Form Controls",
                        content: "Use various form controls to collect different types of user input.",
                        code: `
    <form action="/submit-form" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required>
    
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
    
        <label for="gender">Gender:</label>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>
    
        <label for="newsletter">Subscribe to newsletter:</label>
        <input type="checkbox" id="newsletter" name="newsletter" value="yes">
    
        <label for="country">Country:</label>
        <select id="country" name="country">
            <option value="usa">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="canada">Canada</option>
        </select>
    
        <label for="comments">Comments:</label>
        <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
    
        <input type="submit" value="Submit">
        <input type="reset" value="Reset">
    </form>
                `,
                        image: ""
                    },
                    {
                        title: "Form Validation",
                        content: "Use HTML5 form validation attributes to ensure user input is correct before submission.",
                        code: `
    <form action="/submit-form" method="post">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    
        <label for="website">Website:</label>
        <input type="url" id="website" name="website">
    
        <label for="age">Age (18-99):</label>
        <input type="number" id="age" name="age" min="18" max="99" required>
    
        <label for="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday" required>
    
        <input type="submit" value="Submit">
    </form>
                `,
                        image: ""
                    },
                    {
                        title: "Styling Forms with CSS",
                        content: "Use CSS to enhance the appearance and layout of your forms.",
                        code: `
    form {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f4f4f4;
        border-radius: 5px;
    }
    
    label {
        display: block;
        margin-bottom: 5px;
    }
    
    input[type="text"],
    input[type="email"],
    input[type="password"],
    select,
    textarea {
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    
    input[type="submit"] {
        background-color: #4CAF50;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    
    input[type="submit"]:hover {
        background-color: #45a049;
    }
                `,
                        image: ""
                    }
                ]
            }
        ]
    },
    {
        unit: units.unit5,
        topics: [
            {
                name: "CSS Grid Layout",
                lessons: [
                    {
                        title: "Introduction to CSS Grid",
                        content: "CSS Grid is a powerful layout system for creating complex, responsive web designs.",
                        code: `
    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
    }
                `,
                        image: ""
                    },
                    {
                        title: "Grid Container Properties",
                        content: "Learn about properties that are applied to the grid container.",
                        code: `
    .container {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: auto;
        grid-gap: 10px;
        justify-content: center;
        align-items: center;
    }
                `,
                        image: ""
                    },
                    {
                        title: "Grid Item Properties",
                        content: "Explore properties that are applied to the grid items.",
                        code: `
    .item {
        grid-column: 1 / 3;
        grid-row: 2 / 4;
        justify-self: center;
        align-self: start;
    }
                `,
                        image: ""
                    }
                ]
            },
            {
                name: "Responsive Web Design",
                lessons: [
                    {
                        title: "Media Queries",
                        content: "Use media queries to apply different styles for different screen sizes.",
                        code: `
    @media screen and (max-width: 600px) {
        .container {
            grid-template-columns: 1fr;
        }
    }
                `,
                        image: "/images/media-queries.png"
                    },
                    {
                        title: "Flexible Images",
                        content: "Make images responsive to fit different screen sizes.",
                        code: `
    img {
        max-width: 100%;
        height: auto;
    }
                `,
                        image: ""
                    }
                ]
            }
        ]
    }
]