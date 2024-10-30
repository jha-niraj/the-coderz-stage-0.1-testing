import { Code, Cpu, Database, Globe, Server } from "lucide-react"

export const categories = [
    { name: 'All', icon: <Globe className="w-5 h-5" /> },
    { name: 'Front-End', icon: <Code className="w-5 h-5" /> },
    { name: 'Back-End', icon: <Server className="w-5 h-5" /> },
    { name: 'Full Stack', icon: <Database className="w-5 h-5" /> },
    { name: 'Foundation', icon: <Cpu className="w-5 h-5" /> },
    { name: 'C', icon: 'C' },
    { name: 'C++', icon: 'C++' },
    { name: 'Java', icon: 'Java' },
    { name: 'Python', icon: 'Py' }
]

export const projects = [
    {
        id: 1,
        title: "E-commerce Dashboard",
        description: "Build a modern e-commerce admin dashboard with real-time analytics and inventory management.",
        difficulty: "Intermediate",
        category: "Front-End",
        tags: ["React", "TypeScript", "Tailwind"],
        guide: {
            description: "This project will teach you modern React patterns, state management, and real-time data handling.",
            learningOutcomes: ['Understanding of responsive design principles', 'Proficiency in CSS layout techniques', 'Basic SEO optimization'],
            mobileImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            desktopImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            steps: [
                "Set up a new React project with Vite",
                "Implement authentication flow",
                "Create dashboard layout",
                "Add real-time charts and analytics"
            ]
        }
    },
    {
        id: 2,
        title: "E-commerce Dashboard",
        description: "Build a modern e-commerce admin dashboard with real-time analytics and inventory management.",
        difficulty: "Intermediate",
        category: "Back-End",
        tags: ["React", "TypeScript", "Tailwind"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        guide: {
            description: "This project will teach you modern React patterns, state management, and real-time data handling.",
            learningOutcomes: ['Understanding of responsive design principles', 'Proficiency in CSS layout techniques', 'Basic SEO optimization'],
            mobileImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            desktopImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            steps: [
                "Set up a new React project with Vite",
                "Implement authentication flow",
                "Create dashboard layout",
                "Add real-time charts and analytics"
            ]
        }
    }
];

export const realProjects = [
    {
        id: "html-1",
        title: "Personal Blog Structure",
        description: "Create a multi-page blog structure focusing on semantic HTML elements",
        difficulty: "Beginner",
        tags: ["HTML"],
        guide: {
            description: "Learn proper HTML structure and semantic markup without styling",
            learningOutcomes: [
                "Understanding semantic HTML5 elements",
                "Proper document structure",
                "Accessibility best practices"
            ],
            keyFeatures: [
                "Blog posts list",
                "Individual post pages",
                "About page",
                "Contact form structure"
            ],
            prerequisites: ["Basic understanding of web concepts"],
            skillsGained: [
                "Semantic markup",
                "HTML5 form elements",
                "Document structuring",
                "SEO basics"
            ],
            steps: [
                "Plan website structure",
                "Create homepage with article previews",
                "Build individual blog post template",
                "Add contact form structure"
            ],
            resources: {
                documentation: ["MDN HTML Guide", "W3C HTML Specification"],
                tools: ["VS Code", "HTML Validator"]
            }
        }
    },
    {
        id: "html-2",
        title: "Restaurant Menu System",
        description: "Build a structured menu system for a restaurant with multiple sections",
        difficulty: "Beginner",
        tags: ["HTML"],
        guide: {
            description: "Create a well-structured menu system using proper HTML elements and attributes",
            learningOutcomes: [
                "Table structure usage",
                "List implementation",
                "Content organization"
            ],
            keyFeatures: [
                "Multiple menu categories",
                "Special items highlighting",
                "Nutritional information table",
                "Allergen information"
            ],
            prerequisites: ["HTML basics"],
            skillsGained: [
                "Table structures",
                "List types usage",
                "Content hierarchy",
                "HTML entities"
            ],
            steps: [
                "Create menu sections",
                "Build item lists",
                "Add nutritional tables",
                "Implement allergen information"
            ]
        }
    },
    {
        id: "html-3",
        title: "Educational Course Catalog",
        description: "Develop a course catalog structure with detailed course information",
        difficulty: "Intermediate",
        tags: ["HTML"],
        guide: {
            description: "Build a comprehensive course catalog focusing on content organization",
            learningOutcomes: [
                "Complex content structuring",
                "Description lists usage",
                "Table layouts"
            ],
            keyFeatures: [
                "Course listings",
                "Detailed descriptions",
                "Prerequisites display",
                "Schedule tables"
            ],
            prerequisites: ["Basic HTML knowledge"],
            skillsGained: [
                "Advanced HTML elements",
                "Content organization",
                "Data presentation",
                "Accessibility features"
            ]
        }
    },
    {
        id: "htmlcss-1",
        title: "Portfolio Gallery",
        description: "Create a responsive image gallery with hover effects",
        difficulty: "Beginner",
        tags: ["HTML", "CSS"],
        guide: {
            description: "Build a beautiful gallery with modern CSS features",
            learningOutcomes: [
                "CSS Grid mastery",
                "Responsive design",
                "Animation effects"
            ],
            keyFeatures: [
                "Responsive grid layout",
                "Image hover effects",
                "Lightbox functionality",
                "Filter categories"
            ],
            prerequisites: ["Basic HTML", "CSS fundamentals"],
            skillsGained: [
                "CSS Grid",
                "Flexbox",
                "Transitions",
                "Media Queries"
            ],
            steps: [
                "Design grid layout",
                "Implement responsive design",
                "Add hover effects",
                "Create lightbox feature"
            ],
            resources: {
                documentation: ["MDN CSS Guide", "CSS-Tricks Grid Guide"],
                tools: ["VS Code", "Chrome DevTools"]
            }
        }
    },
    {
        id: "htmlcss-2",
        title: "Product Landing Page",
        description: "Design a modern product showcase page with animations",
        difficulty: "Intermediate",
        tags: ["HTML", "CSS"],
        guide: {
            description: "Create a professional product page with advanced CSS features",
            learningOutcomes: [
                "Advanced layouts",
                "Custom animations",
                "Responsive design patterns"
            ],
            keyFeatures: [
                "Hero section",
                "Feature showcase",
                "Animated elements",
                "Contact form styling"
            ],
            skillsGained: [
                "CSS animations",
                "Layout techniques",
                "Typography",
                "Color theory"
            ]
        }
    },
    {
        id: "js-1",
        title: "Interactive Form Validator",
        description: "Build a real-time form validation system",
        difficulty: "Beginner",
        tags: ["JavaScript"],
        guide: {
            description: "Create a comprehensive form validation system with immediate feedback",
            learningOutcomes: [
                "DOM manipulation",
                "Regular expressions",
                "Event handling"
            ],
            keyFeatures: [
                "Real-time validation",
                "Custom error messages",
                "Password strength meter",
                "Form submission handling"
            ],
            prerequisites: ["Basic JavaScript knowledge"],
            skillsGained: [
                "Form handling",
                "Validation logic",
                "RegEx usage",
                "Event delegation"
            ]
        }
    },
    {
        id: "js-2",
        title: "Kanban Board",
        description: "Create a drag-and-drop task management system",
        difficulty: "Intermediate",
        tags: ["JavaScript"],
        guide: {
            description: "Build a Trello-like task management system with drag-and-drop",
            learningOutcomes: [
                "Drag and Drop API",
                "State management",
                "Local storage"
            ],
            keyFeatures: [
                "Task creation",
                "Drag-drop functionality",
                "Data persistence",
                "Task categories"
            ],
            skillsGained: [
                "Advanced DOM manipulation",
                "State handling",
                "Event handling",
                "Data persistence"
            ]
        }
    },
    {
        id: "react-1",
        title: "Weather Dashboard",
        description: "Build a weather application with location-based forecasts",
        difficulty: "Intermediate",
        tags: ["React"],
        guide: {
            description: "Create a weather dashboard using React hooks and external APIs",
            learningOutcomes: [
                "React hooks usage",
                "API integration",
                "State management"
            ],
            keyFeatures: [
                "Current weather",
                "5-day forecast",
                "Location search",
                "Weather maps"
            ],
            prerequisites: ["JavaScript", "Basic React"],
            skillsGained: [
                "React hooks",
                "API handling",
                "Component design",
                "Props management"
            ]
        }
    },
    {
        id: "react-2",
        title: "E-commerce Product Page",
        description: "Create a dynamic product page with cart functionality",
        difficulty: "Intermediate",
        tags: ["React"],
        guide: {
            description: "Build a full-featured product page with shopping cart",
            learningOutcomes: [
                "Complex state management",
                "Cart functionality",
                "Image galleries"
            ],
            keyFeatures: [
                "Product variants",
                "Shopping cart",
                "Image zoom",
                "Size selector"
            ],
            skillsGained: [
                "Context API",
                "Custom hooks",
                "Effect handling",
                "Component composition"
            ]
        }
    },
    {
        id: "php-1",
        title: "Content Management System",
        description: "Build a basic CMS with user authentication",
        difficulty: "Intermediate",
        tags: ["PHP", "MySQL"],
        guide: {
            description: "Create a CMS with user roles and content management",
            learningOutcomes: [
                "Database design",
                "Authentication",
                "CRUD operations"
            ],
            keyFeatures: [
                "User authentication",
                "Content creation",
                "Role management",
                "Media uploads"
            ],
            prerequisites: ["Basic PHP", "MySQL basics"],
            skillsGained: [
                "PHP security",
                "Database management",
                "Session handling",
                "File operations"
            ]
        }
    },
    {
        id: "php-2",
        title: "Event Booking System",
        description: "Develop an event registration and management system",
        difficulty: "Advanced",
        tags: ["PHP", "MySQL"],
        guide: {
            description: "Build a complete event management system with booking functionality",
            learningOutcomes: [
                "Complex database relations",
                "Payment integration",
                "Email handling"
            ],
            keyFeatures: [
                "Event creation",
                "Ticket booking",
                "Payment processing",
                "Email notifications"
            ],
            skillsGained: [
                "Transaction handling",
                "API integration",
                "Email systems",
                "Security practices"
            ]
        }
    },
    {
        id: "fullstack-1",
        title: "Social Media Dashboard",
        description: "Create a comprehensive social media management platform",
        difficulty: "Advanced",
        tags: ["React", "PHP", "MySQL", "Redis"],
        guide: {
            description: "Build a full-featured social media management tool",
            learningOutcomes: [
                "Full-stack architecture",
                "Real-time updates",
                "Performance optimization"
            ],
            keyFeatures: [
                "Post scheduling",
                "Analytics dashboard",
                "Content calendar",
                "Team collaboration"
            ],
            prerequisites: [
                "React fundamentals",
                "PHP backend development",
                "Database design"
            ],
            skillsGained: [
                "System architecture",
                "API design",
                "Caching strategies",
                "Real-time features"
            ]
        }
    },
    {
        id: "fullstack-2",
        title: "E-learning Platform",
        description: "Build a comprehensive learning management system",
        difficulty: "Advanced",
        tags: ["React", "PHP", "MySQL", "Redux"],
        guide: {
            description: "Create a feature-rich e-learning platform",
            learningOutcomes: [
                "Complex state management",
                "Video streaming",
                "User progress tracking"
            ],
            keyFeatures: [
                "Course management",
                "Video lessons",
                "Progress tracking",
                "Quiz system"
            ],
            skillsGained: [
                "Redux architecture",
                "Media handling",
                "Progress tracking",
                "Assessment systems"
            ]
        }
    },
    {
        id: "fullstack-1",
        title: "Social Media Dashboard",
        description: "Create a comprehensive social media management platform",
        difficulty: "Advanced",
        tags: ["React", "PHP", "MySQL", "Redis"],
        guide: {
            description: "Build a full-featured social media management tool",
            learningOutcomes: [
                "Full-stack architecture",
                "Real-time updates",
                "Performance optimization"
            ],
            keyFeatures: [
                "Post scheduling",
                "Analytics dashboard",
                "Content calendar",
                "Team collaboration"
            ],
            prerequisites: [
                "React fundamentals",
                "PHP backend development",
                "Database design"
            ],
            skillsGained: [
                "System architecture",
                "API design",
                "Caching strategies",
                "Real-time features"
            ]
        }
    },
    {
        id: "fullstack-2",
        title: "E-learning Platform",
        description: "Build a comprehensive learning management system",
        difficulty: "Advanced",
        tags: ["React", "PHP", "MySQL", "Redux"],
        guide: {
            description: "Create a feature-rich e-learning platform",
            learningOutcomes: [
                "Complex state management",
                "Video streaming",
                "User progress tracking"
            ],
            keyFeatures: [
                "Course management",
                "Video lessons",
                "Progress tracking",
                "Quiz system"
            ],
            skillsGained: [
                "Redux architecture",
                "Media handling",
                "Progress tracking",
                "Assessment systems"
            ]
        }
    }
];