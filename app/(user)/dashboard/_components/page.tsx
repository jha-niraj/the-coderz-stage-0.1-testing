import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { BookOpen, Code, Star, Clock, Trophy, ArrowRight } from 'lucide-react';
import SmoothScroll from '@/components/smoothscroll';

const Dashboard = () => {
    const quotes = [
        {
            text: "The beautiful thing about learning is that no one can take it away from you.",
            author: "B.B. King"
        },
        {
            text: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
            author: "Brian Herbert"
        }
    ];

    const learningPaths = [
        {
            title: "Frontend Development",
            progress: 65,
            totalModules: 12,
            completedModules: 8,
            estimatedTime: "3 months",
            skills: ["React", "TypeScript", "CSS"],
            level: "Intermediate"
        },
        {
            title: "UI/UX Design",
            progress: 45,
            totalModules: 8,
            completedModules: 4,
            estimatedTime: "2 months",
            skills: ["Figma", "Design Systems", "User Research"],
            level: "Beginner"
        },
        {
            title: "Backend Development",
            progress: 25,
            totalModules: 10,
            completedModules: 2,
            estimatedTime: "4 months",
            skills: ["Node.js", "Express", "MongoDB"],
            level: "Advanced"
        }
    ];

    const projects = [
        {
            title: "E-commerce Dashboard",
            description: "A modern dashboard for managing online store operations",
            status: "IN_PROGRESS",
            completion: 75,
            dueDate: "Nov 15, 2024",
            priority: "High",
            technologies: ["React", "TypeScript", "Tailwind"]
        },
        {
            title: "Weather App",
            description: "Real-time weather tracking application with forecasting",
            status: "COMPLETED",
            completion: 100,
            dueDate: "Oct 20, 2024",
            priority: "Medium",
            technologies: ["React", "API Integration", "CSS"]
        },
        {
            title: "Task Management System",
            description: "Collaborative project management tool",
            status: "PLANNING",
            completion: 15,
            dueDate: "Dec 1, 2024",
            priority: "Medium",
            technologies: ["React", "Node.js", "MongoDB"]
        }
    ];

    const getStatusColor = (status: any) => {
        const colors = {
            'IN_PROGRESS': 'bg-blue-100 text-blue-800',
            'COMPLETED': 'bg-green-100 text-green-800',
            'PLANNING': 'bg-purple-100 text-purple-800'
        };
        //@ts-ignore
        return colors[status] || 'bg-gray-100 text-gray-800';
    };

    const getPriorityColor = (priority: any) => {
        const colors = {
            'High': 'text-red-500',
            'Medium': 'text-yellow-500',
            'Low': 'text-green-500'
        };
        //@ts-ignore
        return colors[priority] || 'text-gray-500';
    };

    return (
        <SmoothScroll>
            <div className="min-h-screen py-24">
                <div className="max-w-7xl mx-auto p-6 space-y-8">
                    {/* Header Section */}
                    <Card className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden">
                        <CardContent className="p-8 relative">
                            <div className="relative z-10">
                                <h1 className="text-3xl font-bold mb-4">Welcome back!</h1>
                                <div className="max-w-2xl">
                                    <p className="text-xl italic opacity-90">&quot;{quotes[0].text}&quot;</p>
                                    <p className="mt-2 text-sm opacity-75">— {quotes[0].author}</p>
                                </div>
                            </div>
                            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                                <Trophy size={200} />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Stats Overview */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:place-items-center gap-6 mb-8">
                        {[
                            { icon: BookOpen, label: "Learning Paths", value: "3 Active" },
                            { icon: Code, label: "Projects", value: "4 In Progress" },
                            { icon: Trophy, label: "Achievements", value: "12 Earned" }
                        ].map((stat, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 flex items-center space-x-4">
                                    <div className="p-3 rounded-full bg-indigo-100">
                                        <stat.icon className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">{stat.label}</p>
                                        <p className="text-xl font-semibold">{stat.value}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Learning Paths Section */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold text-black dark:text-white">Learning Paths</h2>
                                <button className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2">
                                    View all <ArrowRight size={16} />
                                </button>
                            </div>
                            <div className="space-y-4">
                                {learningPaths.map((path, index) => (
                                    <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-indigo-500">
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
                                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                                        <span className="flex items-center gap-1">
                                                            <BookOpen size={16} />
                                                            {path.completedModules}/{path.totalModules} Modules
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Clock size={16} />
                                                            {path.estimatedTime}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm">
                                                    {path.level}
                                                </span>
                                            </div>
                                            <div className="mt-4">
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span>Progress</span>
                                                    <span>{path.progress}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className="bg-indigo-500 rounded-full h-2 transition-all duration-500"
                                                        style={{ width: `${path.progress}%` }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {path.skills.map((skill, i) => (
                                                    <span key={i} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Projects Section */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold text-black dark:text-white">Projects</h2>
                                <button className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2">
                                    View all <ArrowRight size={16} />
                                </button>
                            </div>
                            <div className="space-y-4">
                                {projects.map((project, index) => (
                                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="text-xl font-semibold">{project.title}</h3>
                                                        <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(project.status)}`}>
                                                            {project.status}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-600 text-sm">{project.description}</p>
                                                </div>
                                                <span className={`flex items-center gap-1 ${getPriorityColor(project.priority)}`}>
                                                    <Star size={16} />
                                                    {project.priority}
                                                </span>
                                            </div>
                                            <div className="mt-4">
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span>Completion</span>
                                                    <span>{project.completion}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className="bg-green-500 rounded-full h-2 transition-all duration-500"
                                                        style={{ width: `${project.completion}%` }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="mt-4 flex items-center justify-between">
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map((tech, i) => (
                                                        <span key={i} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                                <span className="text-sm text-gray-500 flex items-center gap-1">
                                                    <Clock size={14} />
                                                    Due {project.dueDate}
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SmoothScroll>
    );
};

export default Dashboard;