import { Code, Server } from "lucide-react";

export const pathways = [
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
			}
		],
	},
	{
		id: 'back-end',
		title: 'Back-End Development',
		icon: <Server className="w-6 h-6" />,
		description: 'Build robust server-side applications and APIs to power web services.',
		color: 'from-green-500 to-emerald-500',
		niche: 'Web Development',
		domain: 'Server-Side Technologies',
		careers: [
			{
				title: 'Back-End Engineer',
				description: 'Develop server-side logic, databases, and APIs for web applications.',
				skills: 'Node.js, Python, or Java, database design, API development',
				opportunities: 'Build scalable and efficient back-end systems that power modern web applications.'
			},
			{
				title: 'API Developer',
				description: 'Design and implement APIs for internal and external consumption.',
				skills: 'RESTful API design, GraphQL, authentication and authorization',
				opportunities: 'Create robust and well-documented APIs that enable seamless integration between different systems.'
			},
			{
				title: 'Database Administrator',
				description: 'Manage and optimize database systems for performance and reliability.',
				skills: 'SQL, NoSQL databases, data modeling, performance tuning',
				opportunities: 'Ensure data integrity, security, and availability for critical business applications.'
			}
		],
		challenges: [
			{
				title: 'Scaling applications for high traffic',
				description: 'As user bases grow, back-end systems must handle increasing loads without compromising performance.',
				opportunity: 'Develop expertise in distributed systems and cloud technologies to build highly scalable applications.'
			},
			{
				title: 'Ensuring data security',
				description: 'Protecting sensitive user data from breaches and unauthorized access is crucial in modern applications.',
				opportunity: 'Become proficient in cybersecurity best practices and implement robust security measures in back-end systems.'
			},
			{
				title: 'Optimizing database performance',
				description: 'Large-scale applications often deal with complex data structures and high query volumes.',
				opportunity: 'Master database optimization techniques and explore advanced data storage solutions to improve application performance.'
			}
		],
		skills: [
			{
				name: 'Node.js',
				description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine for building scalable network applications.'
			},
			{
				name: 'Python',
				description: 'A versatile programming language often used for web development, data analysis, and machine learning.'
			},
			{
				name: 'Java',
				description: 'A popular object-oriented programming language known for its "write once, run anywhere" philosophy.'
			},
			{
				name: 'SQL',
				description: 'A standard language for managing and querying relational databases.'
			},
			{
				name: 'NoSQL',
				description: 'A class of database management systems that differ from traditional relational database systems.'
			},
			{
				name: 'RESTful APIs',
				description: 'An architectural style for designing networked applications, emphasizing scalability and simplicity.'
			}
		],
		trends: [
			{
				name: 'Microservices Architecture',
				description: 'An architectural style that structures an application as a collection of loosely coupled services.'
			},
			{
				name: 'Serverless Computing',
				description: 'A cloud computing execution model where the cloud provider manages the server infrastructure.'
			},
			{
				name: 'GraphQL',
				description: 'A query language and runtime for APIs, allowing clients to request exactly the data they need.'
			}
		],
	},
]