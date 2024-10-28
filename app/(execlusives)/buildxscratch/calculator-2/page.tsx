import SmoothScroll from '@/components/smoothscroll';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { motion } from "framer-motion";

const tutorialData = {
    title: "Building a React Calculator: Step-by-Step Guide",
    description: "Learn how to create a calculator application using React and Tailwind CSS",
    steps: [
        {
            title: "Project Setup",
            content: "First, let's create our project structure. We'll need to create a new folder and file for our calculator component.",
            code: {
                language: "bash",
                content: `mkdir components
cd components
touch Calculator.jsx`
            }
        },
        {
            title: "Creating the Calculator Component",
            content: "Start by creating a basic React component structure with necessary imports and state management.",
            code: {
                language: "jsx",
                content: `import React, { useState } from 'react';

const Calculator = () => {
const [display, setDisplay] = useState('0');

return (
<div className="calculator">
  {/* Calculator UI will go here */}
</div>
);
};

export default Calculator;`
            }
        },
        {
            title: "Adding Basic Styles",
            content: "Let's add some Tailwind CSS classes to create a clean and modern look for our calculator.",
            code: {
                language: "jsx",
                content: `<div className="min-h-screen bg-gray-100 flex items-center justify-center">
<div className="bg-white rounded-xl shadow-2xl overflow-hidden w-80">
{/* Calculator content */}
</div>
</div>`
            }
        }
    ]
};

const TutorialPage = () => {

    return (
        <SmoothScroll>
            <div className="min-h-screen pt-28">
                <motion.div
                    className="shadow-sm"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                >
                    <div className="max-w-3xl mx-auto py-3 px-4">
                        <h1 className="text-3xl font-bold text-black dark:text-white">
                            {tutorialData.title}
                        </h1>
                        <p className="mt-2 text-lg text-gray-700 dark:text-white">
                            {tutorialData.description}
                        </p>
                    </div>
                </motion.div>

                <main className="max-w-3xl mx-auto py-4 px-4">
                    <div className="space-y-8">
                        {
                            tutorialData.steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                                    className="bg-white rounded-lg shadow-lg p-6"
                                >
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                        {`${index + 1}. ${step.title}`}
                                    </h2>

                                    <p className="text-gray-600 mb-4">
                                        {step.content}
                                    </p>

                                    {step.code && (
                                        <div className="relative">
                                            <SyntaxHighlighter
                                                language={step.code.language}
                                                style={nightOwl}
                                                className="rounded-lg !mt-4"
                                                showLineNumbers
                                            >
                                                {step.code.content}
                                            </SyntaxHighlighter>
                                        </div>
                                    )}
                                </motion.div>
                            ))
                        }
                    </div>
                </main>
            </div>
        </SmoothScroll>
    );
};

export default TutorialPage;