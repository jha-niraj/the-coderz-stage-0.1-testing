"use client"

import React, { useEffect, useState } from 'react';
import { units, htmlCssResources } from '../../data/html';
import Image from 'next/image';
const HTMLCSSResourcesPage = () => {

    const [activeUnit, setActiveUnit] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const unitElements = document.querySelectorAll('.unit-section');

            unitElements.forEach((element) => {
                const top = element.offsetTop - 100;
                const bottom = top + element.offsetHeight;

                if (scrollPosition >= top && scrollPosition < bottom) {
                    setActiveUnit(element.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const smoothScroll = (e: any, targetId: any) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen text-black">
            <nav className="sticky top-0 bg-white shadow-md p-4 z-10">
                <div className="container mx-auto">
                    <h1 className="text-2xl font-bold mb-4">HTML and CSS Resources</h1>
                    <ul className="flex flex-wrap -mx-2">
                        {Object.entries(units).map(([key, value]) => (
                            <li key={key} className="px-2 mb-2">
                                <a
                                    href={`#${key}`}
                                    onClick={(e) => smoothScroll(e, key)}
                                    className={`nav-link px-3 py-2 rounded-md text-sm font-medium ${activeUnit === key
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                        } transition-colors duration-300`}
                                >
                                    {value.split(':')[1].trim()}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <main className="container mx-auto px-4 py-8">
                {htmlCssResources.map((unit, unitIndex) => (
                    <section key={unitIndex} id={`unit${unitIndex + 1}`} className="unit-section mb-16">
                        <h2 className="text-3xl font-semibold mb-8 text-blue-400">{unit.unit}</h2>
                        {unit.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="mb-12">
                                <h3 className="text-2xl font-medium mb-6 text-green-400">{topic.name}</h3>
                                {topic.lessons.map((lesson, lessonIndex) => (
                                    <div key={lessonIndex} className="mb-8 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                                        <div className="p-6">
                                            <h4 className="text-xl font-medium mb-4 text-yellow-400">{lesson.title}</h4>
                                            <p className="text-gray-300 mb-6">{lesson.content}</p>
                                            {(lesson.code || lesson.image) && (
                                                <div className="flex flex-col lg:flex-row gap-6">
                                                    {lesson.code && (
                                                        <div className="flex-1">
                                                            <h5 className="text-lg font-medium mb-2 text-purple-400">Code Example:</h5>
                                                            <div className="bg-gray-900 p-4 rounded-md">
                                                                <pre className="text-sm overflow-x-auto text-gray-300">
                                                                    <code>{lesson.code}</code>
                                                                </pre>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {lesson.image && (
                                                        <div className="flex-1">
                                                            <h5 className="text-lg font-medium mb-2 text-purple-400">Visual Example:</h5>
                                                            <div className="bg-gray-700 p-4 rounded-md flex items-center justify-center">
                                                                <Image
                                                                    src={lesson.image}
                                                                    alt={`Visual representation for ${lesson.title}`}
                                                                    className="max-w-full h-auto rounded"
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </section>
                ))}
            </main>
        </div>
    );
};

export default HTMLCSSResourcesPage;

