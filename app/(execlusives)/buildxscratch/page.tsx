"use client"

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import SmoothScroll from '@/components/smoothscroll';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ShinyButton from '@/components/ui/shiny-button';

type Project = {
    slug: string;
    title: string;
    description: string;
    difficulty: 'Beginner' | 'Intermediate';
    languages: string[];
    estimatedTime: string;
    image: string;
}

const projects: Project[] = [
    { slug: "calculator", title: "Calculator", description: "Create a functional calculator", difficulty: "Beginner", languages: ["JavaScript", "React"], estimatedTime: "4-5 hours", image: "https://imgs.search.brave.com/zLhTiKZjXoRBya6j7IUmJqpCKTBKG15diL_7NdqeTVo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MTA0MzUxL3Bob3Rv/L2lyb24tZ29sZi1j/bHViLndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz1RUWVLakVRTmFl/dXBwNlRwSUR6TVVZ/bWk4X1NkODVaa1JG/OWlNVXVlc2dNPQ" },
    { slug: "todolistapp", title: "Todo List App", description: "Build a simple todo list with CRUD operations", difficulty: "Beginner", languages: ["JavaScript", "HTML", "CSS"], estimatedTime: "2-3 hours", image: "https://imgs.search.brave.com/zLhTiKZjXoRBya6j7IUmJqpCKTBKG15diL_7NdqeTVo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MTA0MzUxL3Bob3Rv/L2lyb24tZ29sZi1j/bHViLndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz1RUWVLakVRTmFl/dXBwNlRwSUR6TVVZ/bWk4X1NkODVaa1JG/OWlNVXVlc2dNPQ" },
    { slug: "todolistapp", title: "Weather App", description: "Create an app that fetches and displays weather data", difficulty: "Beginner", languages: ["JavaScript", "React"], estimatedTime: "3-4 hours", image: "https://imgs.search.brave.com/zLhTiKZjXoRBya6j7IUmJqpCKTBKG15diL_7NdqeTVo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MTA0MzUxL3Bob3Rv/L2lyb24tZ29sZi1j/bHViLndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz1RUWVLakVRTmFl/dXBwNlRwSUR6TVVZ/bWk4X1NkODVaa1JG/OWlNVXVlc2dNPQ" },
    { slug: "todolistapp", title: "Markdown Previewer", description: "Build a live markdown previewer", difficulty: "Beginner", languages: ["JavaScript", "React"], estimatedTime: "2-3 hours", image: "https://imgs.search.brave.com/zLhTiKZjXoRBya6j7IUmJqpCKTBKG15diL_7NdqeTVo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MTA0MzUxL3Bob3Rv/L2lyb24tZ29sZi1j/bHViLndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz1RUWVLakVRTmFl/dXBwNlRwSUR6TVVZ/bWk4X1NkODVaa1JG/OWlNVXVlc2dNPQ" },
    { slug: "todolistapp", title: "Pomodoro Clock", description: "Develop a timer for the Pomodoro Technique", difficulty: "Beginner", languages: ["JavaScript", "React"], estimatedTime: "3-4 hours", image: "https://imgs.search.brave.com/zLhTiKZjXoRBya6j7IUmJqpCKTBKG15diL_7NdqeTVo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MTA0MzUxL3Bob3Rv/L2lyb24tZ29sZi1j/bHViLndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz1RUWVLakVRTmFl/dXBwNlRwSUR6TVVZ/bWk4X1NkODVaa1JG/OWlNVXVlc2dNPQ" },
    { slug: "todolistapp", title: "Random Quote Machine", description: "Build an app that displays random quotes", difficulty: "Beginner", languages: ["JavaScript", "React"], estimatedTime: "2-3 hours", image: "https://imgs.search.brave.com/zLhTiKZjXoRBya6j7IUmJqpCKTBKG15diL_7NdqeTVo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MTA0MzUxL3Bob3Rv/L2lyb24tZ29sZi1j/bHViLndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz1RUWVLakVRTmFl/dXBwNlRwSUR6TVVZ/bWk4X1NkODVaa1JG/OWlNVXVlc2dNPQ" },
    { slug: "todolistapp", title: "Tic Tac Toe Game", description: "Implement the classic Tic Tac Toe game", difficulty: "Beginner", languages: ["JavaScript", "React"], estimatedTime: "4-5 hours", image: "https://imgs.search.brave.com/zLhTiKZjXoRBya6j7IUmJqpCKTBKG15diL_7NdqeTVo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MTA0MzUxL3Bob3Rv/L2lyb24tZ29sZi1j/bHViLndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz1RUWVLakVRTmFl/dXBwNlRwSUR6TVVZ/bWk4X1NkODVaa1JG/OWlNVXVlc2dNPQ" },
    { slug: "todolistapp", title: "Memory Game", description: "Create a card-matching memory game", difficulty: "Intermediate", languages: ["JavaScript", "React"], estimatedTime: "5-6 hours", image: "https://imgs.search.brave.com/zLhTiKZjXoRBya6j7IUmJqpCKTBKG15diL_7NdqeTVo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MTA0MzUxL3Bob3Rv/L2lyb24tZ29sZi1j/bHViLndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz1RUWVLakVRTmFl/dXBwNlRwSUR6TVVZ/bWk4X1NkODVaa1JG/OWlNVXVlc2dNPQ" },
    { slug: "todolistapp", title: "Drum Machine", description: "Build an interactive drum machine", difficulty: "Intermediate", languages: ["JavaScript", "React"], estimatedTime: "4-5 hours", image: "https://imgs.search.brave.com/zLhTiKZjXoRBya6j7IUmJqpCKTBKG15diL_7NdqeTVo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MTA0MzUxL3Bob3Rv/L2lyb24tZ29sZi1j/bHViLndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz1RUWVLakVRTmFl/dXBwNlRwSUR6TVVZ/bWk4X1NkODVaa1JG/OWlNVXVlc2dNPQ" },
    { slug: "todolistapp", title: "Sudoku Solver", description: "Develop a program to solve Sudoku puzzles", difficulty: "Intermediate", languages: ["Python"], estimatedTime: "6-8 hours", image: "https://imgs.search.brave.com/zLhTiKZjXoRBya6j7IUmJqpCKTBKG15diL_7NdqeTVo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MTA0MzUxL3Bob3Rv/L2lyb24tZ29sZi1j/bHViLndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz1RUWVLakVRTmFl/dXBwNlRwSUR6TVVZ/bWk4X1NkODVaa1JG/OWlNVXVlc2dNPQ" },
    { slug: "todolistapp", title: "URL Shortener", description: "Create a service to shorten long URLs", difficulty: "Intermediate", languages: ["Python", "Flask"], estimatedTime: "5-6 hours", image: "https://imgs.search.brave.com/zLhTiKZjXoRBya6j7IUmJqpCKTBKG15diL_7NdqeTVo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MTA0MzUxL3Bob3Rv/L2lyb24tZ29sZi1j/bHViLndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz1RUWVLakVRTmFl/dXBwNlRwSUR6TVVZ/bWk4X1NkODVaa1JG/OWlNVXVlc2dNPQ" },
    { slug: "todolistapp", title: "Chat Application", description: "Build a real-time chat application", difficulty: "Intermediate", languages: ["JavaScript", "Node.js", "Socket.io"], estimatedTime: "8-10 hours", image: "https://imgs.search.brave.com/zLhTiKZjXoRBya6j7IUmJqpCKTBKG15diL_7NdqeTVo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MTA0MzUxL3Bob3Rv/L2lyb24tZ29sZi1j/bHViLndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz1RUWVLakVRTmFl/dXBwNlRwSUR6TVVZ/bWk4X1NkODVaa1JG/OWlNVXVlc2dNPQ" },
    { slug: "todolistapp", title: "Blog Platform", description: "Develop a simple blogging platform", difficulty: "Intermediate", languages: ["JavaScript", "Node.js", "Express", "MongoDB"], estimatedTime: "10-12 hours", image: "https://imgs.search.brave.com/zLhTiKZjXoRBya6j7IUmJqpCKTBKG15diL_7NdqeTVo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MTA0MzUxL3Bob3Rv/L2lyb24tZ29sZi1j/bHViLndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz1RUWVLakVRTmFl/dXBwNlRwSUR6TVVZ/bWk4X1NkODVaa1JG/OWlNVXVlc2dNPQ" },
    { slug: "todolistapp", title: "File Encryption Tool", description: "Create a tool to encrypt and decrypt files", difficulty: "Intermediate", languages: ["Python"], estimatedTime: "6-8 hours", image: "https://imgs.search.brave.com/zLhTiKZjXoRBya6j7IUmJqpCKTBKG15diL_7NdqeTVo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MTA0MzUxL3Bob3Rv/L2lyb24tZ29sZi1j/bHViLndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz1RUWVLakVRTmFl/dXBwNlRwSUR6TVVZ/bWk4X1NkODVaa1JG/OWlNVXVlc2dNPQ" },
    { slug: "todolistapp", title: "Expense Tracker", description: "Build an app to track personal expenses", difficulty: "Intermediate", languages: ["JavaScript", "React", "Node.js", "MongoDB"], estimatedTime: "10-12 hours", image: "https://imgs.search.brave.com/zLhTiKZjXoRBya6j7IUmJqpCKTBKG15diL_7NdqeTVo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MTA0MzUxL3Bob3Rv/L2lyb24tZ29sZi1j/bHViLndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz1RUWVLakVRTmFl/dXBwNlRwSUR6TVVZ/bWk4X1NkODVaa1JG/OWlNVXVlc2dNPQ" }
]

export default function ProjectCatalogUpdated() {
    const [searchTerm, setSearchTerm] = useState('')
    const [difficulty, setDifficulty] = useState('all')

    const filteredProjects = projects.filter(project =>
        (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.languages.some(lang => lang.toLowerCase().includes(searchTerm.toLowerCase()))) &&
        (difficulty === 'all' || project.difficulty.toLowerCase() === difficulty.toLowerCase())
    )

    return (
        <SmoothScroll>
            <div className="min-h-screen pt-32 mx-auto w-full sm:w-[85%]">
                <div className="container mx-auto flex flex-col gap-6">
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <h1 className="text-3xl font-bold">Project Catalog</h1>
                            <Select value={difficulty} onValueChange={setDifficulty}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select Difficulty" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Projects</SelectItem>
                                    <SelectItem value="beginner">Beginner</SelectItem>
                                    <SelectItem value="intermediate">Intermediate</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="mb-8">
                            <Input
                                type="text"
                                placeholder="Search projects or languages..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="max-w-sm text-black dark:text-white"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                            <h1 className="text-2xl font-semibold text-center">Setup instructions</h1>                            
                            <div className="grid grid-cols-2 sm:grid-cols-1 place-items-center gap-2">
                                <Link href="https://tailwindcss.com/docs/guides/vite">
                                    <ShinyButton>React setup with Vite + Tailwind CSS</ShinyButton>
                                </Link>
                                <Link href="https://nextjs.org/docs/getting-started/installation">
                                    <ShinyButton>Next JS setup</ShinyButton>
                                </Link>
                            </div>
                        </div>
                        <AnimatePresence>
                            {filteredProjects.length > 0 ? (
                                <motion.div
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {filteredProjects.map((project, index) => (
                                        <motion.div
                                            key={project.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.2, delay: index * 0.05 }}
                                        >
                                            <Card className="flex flex-col overflow-hidden border-2 border-gray-700 dark:border-gray-300">
                                                <div
                                                    className="bg-cover bg-center"
                                                // style={{ backgroundImage: `url(${project.image})` }}
                                                />
                                                <CardHeader>
                                                    <CardTitle className="flex justify-between items-center">
                                                        <span>{project.title}</span>
                                                        <Badge className='' variant={project.difficulty === 'Beginner' ? 'secondary' : 'default'}>
                                                            {project.difficulty}
                                                        </Badge>
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="w-[90%] mx-auto">
                                                    <p className="text-muted-foreground mb-4">{project.description}</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.languages.map((lang, i) => (
                                                            <Badge key={i} variant="outline">{lang}</Badge>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                                <CardFooter className="flex justify-between items-center mt-auto">
                                                    <span className="text-sm text-muted-foreground">{project.estimatedTime}</span>
                                                    <Link href={`/buildxscratch/${project.slug}`}>
                                                        <Button variant="ghost" size="sm" className="text-primary">
                                                            Start Project <ChevronRight className="ml-2 h-4 w-4" />
                                                        </Button>
                                                    </Link>
                                                </CardFooter>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    className="text-center text-xl font-bold h-96 flex items-center justify-center text-black dark:text-white mt-12"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                >
                                    No projects found with this title or languages.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </SmoothScroll>
    )
}