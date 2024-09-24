'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Share2, Instagram, Twitter, ArrowRight } from 'lucide-react'
import SupportSection from '@/components/homepage/supportsection'
import SmoothScroll from '@/components/smoothscroll'

const topics = [
    {
        title: 'Foundations',
        description: 'Master the core technologies of web development',
        color: 'from-blue-500 to-blue-300',
        subtopics: [
            { name: 'HTML', description: 'Structure and semantics of web content', link: '/foundations/html' },
            { name: 'CSS', description: 'Styling and layout of web pages', link: '/foundations/css' },
            { name: 'JavaScript', description: 'Dynamic behavior and interactivity', link: '/foundations/javascript' }
        ]
    },
    {
        title: 'Front-End Development',
        description: 'Build interactive and responsive user interfaces',
        color: 'from-green-500 to-green-300',
        subtopics: [
            { name: 'React', description: 'Component-based UI library', link: '/frontend/react' },
            { name: 'Tailwind CSS', description: 'Utility-first CSS framework', link: '/frontend/tailwind' },
            { name: 'Next.js', description: 'React framework for production', link: '/frontend/nextjs' }
        ]
    },
    {
        title: 'Back-End Development',
        description: 'Create server-side logic and APIs',
        color: 'from-purple-500 to-purple-300',
        subtopics: [
            { name: 'Node.js', description: 'JavaScript runtime for server-side development', link: '/backend/nodejs' },
            { name: 'Express.js', description: 'Web application framework for Node.js', link: '/backend/expressjs' },
            { name: 'Databases', description: 'Data storage and management', link: '/backend/databases' }
        ]
    }
]

export default function FullStackDevelopment() {
    const [expandedTopic, setExpandedTopic] = useState<string | null>(null)
    const controls = useAnimation()
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        controls.start({
            opacity: [0, 1, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
            },
        })
    }, [controls])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setExpandedTopic(null)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleExpand = (title: string) => {
        setExpandedTopic(expandedTopic === title ? null : title)
    }

    return (
        <SmoothScroll>
            <div className="min-h-screen bg-black text-white py-8 flex items-center justify-center w-full flex-col">
                <main className="container mx-auto px-4 py-16" ref={containerRef}>
                    <div className="relative mb-8">
                        <motion.h1
                            className="text-5xl font-bold text-center mb-2 relative z-20"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Full Stack Web Development
                        </motion.h1>
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center z-10"
                            animate={controls}
                        >
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-1 h-1 rounded-full bg-white absolute"
                                    initial={{
                                        x: Math.random() * 200 - 100,
                                        y: Math.random() * 200 - 100,
                                    }}
                                    animate={{
                                        scale: [0, 1, 0],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: Math.random() * 2,
                                    }}
                                />
                            ))}
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topics.map((topic, index) => (
                            <motion.div
                                key={topic.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            >
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-white mb-2">{topic.title}</h2>
                                    <p className="text-gray-300 text-sm mb-4">{topic.description}</p>
                                    <motion.button
                                        className={`w-full bg-gradient-to-r ${topic.color} text-black px-4 py-2 rounded-full text-center font-bold hover:opacity-90 transition-opacity flex items-center justify-center`}
                                        onClick={() => handleExpand(topic.title)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {expandedTopic === topic.title ? 'Collapse' : 'Explore'}
                                        {expandedTopic === topic.title ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <AnimatePresence>
                        {expandedTopic && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
                                onClick={() => setExpandedTopic(null)}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-2xl mx-4 relative overflow-hidden"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-purple-500/20 opacity-0"
                                        animate={{ opacity: [0, 0.5, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                                    />
                                    <h3 className="text-3xl font-bold mb-6 text-center relative">{expandedTopic}</h3>
                                    <div className="space-y-4 relative flex flex-col">
                                        {topics.find(t => t.title === expandedTopic)?.subtopics.map((subtopic, subIndex) => (
                                            <Link href={subtopic.link} key={subtopic.name}>
                                                <motion.div
                                                    className="p-4 rounded-xl bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors cursor-pointer group"
                                                    whileHover={{ scale: 1.03, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    <h4 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors flex items-center justify-between">
                                                        {subtopic.name}
                                                        <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                                                    </h4>
                                                    <p className="text-gray-300 text-sm mt-2 group-hover:text-gray-100 transition-colors">{subtopic.description}</p>
                                                </motion.div>
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </main>
                <section className="flex w-full items-center justify-center">
                    <SupportSection />
                </section>
            </div>
        </SmoothScroll>
    )
}