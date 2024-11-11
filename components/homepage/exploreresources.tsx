"use client"

import React from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import { Code, Braces, Atom, Database } from 'lucide-react';
import { useRouter } from "next/navigation";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const resources = [
    {
        name: 'Python',
        url: '/resources/programminglanguages/python',
        icon: <Code className="w-6 h-6" />,
        description: 'Learn Python programming from basics to advanced concepts. Perfect for beginners and data science enthusiasts.',
        color: 'from-blue-600 to-green-400',
        categories: ['Data Science', 'Web Dev', 'Automation', 'AI']
    },
    {
        name: 'C++',
        url: '/resources/programminglanguages/cpp',
        icon: <Braces className="w-6 h-6" />,
        description: 'Master C++ for high-performance computing, game development, system programming and to unlock efficient memeory management.',
        color: 'from-purple-600 to-blue-400',
        categories: ['Games', 'Systems', 'DSA', 'OOP']
    },
    {
        name: 'React',
        url: '/resources/frontend/react',
        icon: <Atom className="w-6 h-6" />,
        description: 'Build modern user interfaces with React. Learn components, hooks, Rendering, Virtuial DOM and state management.',
        color: 'from-cyan-600 to-blue-400',
        categories: ['Frontend', 'UI/UX', 'JavaScript', 'Components']
    },
    {
        name: 'PHP',
        url: '/resources/programminglanguages/php',
        icon: <Database className="w-6 h-6" />,
        description: 'Develop dynamic web applications with PHP. Focus on backend development and database integration.',
        color: 'from-indigo-600 to-purple-400',
        categories: ['Backend', 'WordPress', 'MySQL', 'APIs']
    }
];

const ExploreResourcesSection = () => {
    const router = useRouter();

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Explore Computer Science Resources
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Dive into our comprehensive collection of computer science topics. Whether you&apos;re a beginner or an expert,
                        discover resources tailored to your learning journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        resources.map((resource, index) => (
                            <motion.div
                                key={resource.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link href={resource.url}>
                                    <CardContainer className="w-full h-[250px] lg:h-[290px] xl:h-[230px]">
                                        <CardBody className={`bg-gradient-to-br ${resource.color} relative group/card dark:hover:shadow-2xl dark:hover:shadow-white/[0.1] dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 w-full h-full rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]`}>
                                            <div className="flex items-center mb-4">
                                                <CardItem translateZ="50" className="bg-white dark:bg-gray-800 p-2 rounded-lg">
                                                    {resource.icon}
                                                </CardItem>
                                                <CardItem translateZ="50" className="ml-4 text-xl font-bold text-white">
                                                    {resource.name}
                                                </CardItem>
                                            </div>
                                            <CardItem
                                                as="p"
                                                translateZ="60"
                                                className="text-sm text-white/90 mb-4"
                                            >
                                                {resource.description}
                                            </CardItem>
                                            <CardItem translateZ="50" className="flex flex-wrap gap-2">
                                                {resource.categories.map((category) => (
                                                    <span
                                                        key={category}
                                                        className="text-xs bg-white/20 text-white px-2 py-1 rounded-full"
                                                    >
                                                        {category}
                                                    </span>
                                                ))}
                                            </CardItem>
                                        </CardBody>
                                    </CardContainer>
                                </Link>
                            </motion.div>
                        ))
                    }
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <button
                        onClick={() => router.push("/resources")}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transform hover:-translate-y-1 transition duration-300 hover:shadow-lg"
                    >
                        Explore All Resources
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default ExploreResourcesSection;