import { Code, Cpu, Database, Globe, Server, Shield } from "lucide-react";

export const pathwaysData = [
	{
        id: 'front-end',
        title: 'Front-End Development',
        icon: <Code className="w-6 h-6" />,
        description: 'Create engaging user interfaces and interactive web applications.',
        color: 'from-blue-500 to-cyan-500',
        niche: 'Web Development',
        domain: 'Client-Side Technologies',
        careers: [
            {
                title: 'UI Developer',
                description: 'Design and implement user interfaces for web applications.',
                skills: 'HTML, CSS, JavaScript, UI/UX principles',
                opportunities: 'Create visually appealing and user-friendly interfaces that enhance user experience.'
            },
            {
                title: 'Front-End Engineer',
                description: 'Build complex, interactive web applications using modern frameworks.',
                skills: 'React, Vue.js, or Angular, state management, performance optimization',
                opportunities: 'Develop scalable and maintainable front-end architectures for large-scale applications.'
            },
            {
                title: 'Web Designer',
                description: 'Create visual designs and prototypes for websites and web applications.',
                skills: 'Adobe Creative Suite, Sketch, Figma, responsive design',
                opportunities: 'Collaborate with developers to bring designs to life and ensure consistent brand experiences.'
            }
        ],
        challenges: [
            {
                title: 'Keeping up with rapidly evolving frameworks',
                description: 'The front-end ecosystem is constantly changing, with new frameworks and tools emerging regularly.',
                opportunity: 'Stay at the forefront of web development by continuously learning and adapting to new technologies.'
            },
            {
                title: 'Ensuring cross-browser compatibility',
                description: 'Different browsers may interpret and render web content differently, leading to inconsistencies.',
                opportunity: 'Develop expertise in cross-browser testing and polyfills to ensure consistent experiences across platforms.'
            },
            {
                title: 'Optimizing performance for various devices',
                description: 'Users access web applications from a wide range of devices with varying capabilities and network conditions.',
                opportunity: 'Master performance optimization techniques to create fast, responsive applications for all users.'
            }
        ],
        skills: [
            {
                name: 'HTML5',
                description: 'The latest version of the markup language for structuring web content.'
            },
            {
                name: 'CSS3',
                description: 'Advanced styling capabilities for creating responsive and attractive layouts.'
            },
            {
                name: 'JavaScript',
                description: 'The core programming language for creating interactive web experiences.'
            },
            {
                name: 'React',
                description: 'A popular JavaScript library for building user interfaces and single-page applications.'
            },
            {
                name: 'Vue.js',
                description: 'A progressive framework for building user interfaces with a gentle learning curve.'
            },
            {
                name: 'Angular',
                description: 'A comprehensive framework for building large-scale web applications.'
            },
            {
                name: 'TypeScript',
                description: 'A typed superset of JavaScript that compiles to plain JavaScript.'
            },
            {
                name: 'Webpack',
                description: 'A module bundler for modern JavaScript applications.'
            },
            {
                name: 'Sass/SCSS',
                description: 'A CSS preprocessor that adds features like variables, nesting, and mixins.'
            }
        ],
        trends: [
            {
                name: 'Progressive Web Apps',
                description: 'Web applications that offer native app-like experiences on mobile and desktop platforms.'
            },
            {
                name: 'JAMstack',
                description: 'A modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.'
            },
            {
                name: 'Micro Frontends',
                description: 'An architectural style where independently deliverable frontend applications are composed into a greater whole.'
            },
            {
                name: 'Web Components',
                description: 'A set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags.'
            },
            {
                name: 'Serverless Architecture',
                description: 'A cloud computing execution model where the cloud provider dynamically manages the allocation of machine resources.'
            }
        ],
        learningPath: [
            { name: 'HTML & CSS Fundamentals', duration: '2-4 weeks' },
            { name: 'JavaScript Basics', duration: '4-6 weeks' },
            { name: 'Advanced JavaScript & ES6+', duration: '3-4 weeks' },
            { name: 'React Fundamentals', duration: '4-6 weeks' },
            { name: 'State Management (e.g., Redux)', duration: '2-3 weeks' },
            { name: 'Build Real-World Projects', duration: '8-12 weeks' },
            { name: 'Advanced Topics (Performance, Testing, etc.)', duration: '4-6 weeks' }
        ]
    },
    {
        id: 'back-end',
        title: 'Back-End Development',
        icon: <Database className="w-6 h-6" />,
        description: 'Build robust server-side applications and APIs to power web services.',
        color: 'from-green-500 to-emerald-500',
    },
    {
        id: 'full-stack',
        title: 'Full Stack Development',
        icon: <Globe className="w-6 h-6" />,
        description: 'Master both front-end and back-end technologies to create complete web solutions.',
        color: 'from-purple-500 to-pink-500',
    },
    {
        id: 'data-science',
        title: 'Data Science',
        icon: <Cpu className="w-6 h-6" />,
        description: 'Analyze and interpret complex data to drive business decisions and innovations.',
        color: 'from-yellow-500 to-orange-500',
    },
    {
        id: 'cyber-security',
        title: 'Cyber Security',
        icon: <Shield className="w-6 h-6" />,
        description: 'Protect digital assets and systems from cyber threats and vulnerabilities.',
        color: 'from-red-500 to-rose-500',
    }
]