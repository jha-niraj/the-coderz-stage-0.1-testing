'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, BookOpen, Trophy, Users, Zap, Star, CheckCircle, BarChart, Calendar, Book, Clock } from 'lucide-react'
import { useSession } from 'next-auth/react'
import SmoothScroll from '@/components/smoothscroll'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Progress } from '@radix-ui/react-progress'

const upcomingEvents = [
    { name: "Welcome Webinar for New Users", date: "2023-06-20", time: "14:00 - 15:00" },
    { name: "Introduction to Coding Basics", date: "2023-06-25", time: "10:00 - 11:30" },
    { name: "Q&A Session with Mentors", date: "2023-06-30", time: "15:00 - 16:00" },
]

const availableCourses = [
    { name: "Programming Fundamentals", description: "Learn the basics of coding", icon: <BookOpen className="h-5 w-5 text-blue-400" /> },
    { name: "Web Development 101", description: "Start your journey in web development", icon: <Zap className="h-5 w-5 text-yellow-400" /> },
    { name: "Data Science Essentials", description: "Explore the world of data", icon: <BarChart className="h-5 w-5 text-green-400" /> },
]

interface DashboardCardProps {
    title: string;
    value: string | number;
    icon: React.ReactNode;
    description: string;
}

const MotionCard = motion(Card);
const DashboardCard = ({ title, value, icon, description }: DashboardCardProps) => (
    <Card className="text-white border-2 border-white rounded-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            {icon}
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-gray-300">{description}</p>
        </CardContent>
    </Card>
)

const availableCourses2 = [
    { id: 1, name: "Advanced JavaScript Techniques", category: "Web Development", duration: "8 weeks", rating: 4.8 },
    { id: 2, name: "Introduction to TensorFlow", category: "Machine Learning", duration: "10 weeks", rating: 4.6 },
]
export default function DashboardPage() {
    const { data: session } = useSession();
    const router = useRouter();

    return (
        <SmoothScroll>
            <div className="min-h-screen py-8 bg-inherit text-white p-8 pt-20 md:pt-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center mb-8 space-y-4 md:space-y-0 md:space-x-8">
                        <Image 
                            src={session?.user?.image!}
                            alt="Profile Picture"
                            height={100}
                            width={100}
                            className="rounded-full"
                        />
                        <div className="text-center md:text-left">
                            <motion.h1
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                            >
                                Welcome, {session?.user?.name}
                            </motion.h1>
                            <div className="flex flex-col space-y-1 text-gray-400">
                                <div className="flex items-center">
                                    <Mail className="mr-2 h-4 w-4" />
                                    {session?.user?.email}
                                </div>
                                <div className="flex items-center">
                                    <Trophy className="mr-2 h-4 w-4" />
                                    New Learner
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8 text-white">
                        <DashboardCard
                            title="Days Active"
                            value="3 days"
                            icon={<Zap className="h-4 w-4 text-yellow-400" />}
                            description="Keep the momentum going!"
                        />
                        <DashboardCard
                            title="Available Courses"
                            value="10+"
                            icon={<BookOpen className="h-4 w-4 text-blue-400" />}
                            description="Start your learning journey"
                        />
                        <DashboardCard
                            title="Community Members"
                            value="1,000+"
                            icon={<Users className="h-4 w-4 text-green-400" />}
                            description="Connect and learn together"
                        />
                        <DashboardCard
                            title="Next Event"
                            value="In 2 days"
                            icon={<Calendar className="h-4 w-4 text-purple-400" />}
                            description="Join our welcome webinar"
                        />
                    </div>

                    <Tabs defaultValue="events" className="mb-8">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
                            <TabsTrigger value="courses">Available Courses</TabsTrigger>
                        </TabsList>
                        <TabsContent value="events">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-white">Upcoming Events</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4">
                                        {upcomingEvents.map((event, index) => (
                                            <li key={index} className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
                                                <div className="flex flex-col gap-2">
                                                    <p className="font-semibold text-white">{event.name}</p>
                                                    <p className="text-sm text-white">{event.date} | {event.time}</p>
                                                </div>
                                                <Button size="sm">RSVP</Button>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="outline" className="w-full mt-4">View All Events</Button>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="courses">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-white">Available Courses</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4">
                                        {availableCourses.map((course, index) => (
                                            <li key={index} className="flex items-center bg-gray-800 p-3 rounded-lg">
                                                {course.icon}
                                                <div className="ml-3 border-l-2 flex flex-col gap-2 pl-4">
                                                    <p className="font-semibold text-white">{course.name}</p>
                                                    <p className="text-sm text-white">{course.description}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="outline" onClick={() => router.push("/resources")} className="w-full mt-4">Explore All Courses</Button>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    <div className="grid gap-4 lg:grid-cols-2 mb-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-white">Getting Started</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex items-center bg-gray-800 p-3 rounded-lg">
                                        <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                                        <span className="text-white">Complete your profile</span>
                                    </li>
                                    <li className="flex items-center bg-gray-800 p-3 rounded-lg">
                                        <BookOpen className="mr-3 h-5 w-5 text-blue-400" />
                                        <span className="text-white">Enroll in your first course</span>
                                    </li>
                                    <li className="flex items-center bg-gray-800 p-3 rounded-lg">
                                        <Users className="mr-3 h-5 w-5 text-yellow-400" />
                                        <span className="text-white">Join the community forum</span>
                                    </li>
                                </ul>
                                <Button className="w-full mt-4">View Onboarding Guide</Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-white">Learning Resources</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex items-center bg-gray-800 p-3 rounded-lg">
                                        <Star className="mr-3 h-5 w-5 text-purple-400" />
                                        <span className="text-white">Beginner&apos;s Guide to Online Learning</span>
                                    </li>
                                    <li className="flex items-center bg-gray-800 p-3 rounded-lg">
                                        <BarChart className="mr-3 h-5 w-5 text-green-400" />
                                        <span className="text-white">How to Set Achievable Learning Goals</span>
                                    </li>
                                    <li className="flex items-center bg-gray-800 p-3 rounded-lg">
                                        <Zap className="mr-3 h-5 w-5 text-yellow-400" />
                                        <span className="text-white">Tips for Effective Time Management</span>
                                    </li>
                                </ul>
                                <Button variant="secondary" className="w-full mt-4 hover:bg-black hover:text-white">Access Resource Center</Button>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <MotionCard
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="lg:col-span-2 shadow-lg dark:bg-gray-800"
                        >
                            <CardHeader>
                                <CardTitle className="text-white dark:text-white">Available Courses</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    {availableCourses2.map((course, index) => (
                                        <motion.li
                                            key={course.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                            className="p-4 rounded-lg shadow flex flex-col sm:flex-row items-start sm:items-center bg-gray-50 dark:bg-gray-700"
                                        >
                                            <Book className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mb-2 sm:mb-0" />
                                            <div className="flex-grow">
                                                <span className="font-medium text-gray-800 dark:text-white">{course.name}</span>
                                                <Badge variant="secondary" className="ml-2 text-xs">{course.category}</Badge>
                                                <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                                                    <Clock className="h-4 w-4 mr-1" />
                                                    <span className="mr-3">{course.duration}</span>
                                                    <Star className="h-4 w-4 mr-1 text-yellow-400" />
                                                    <span>{course.rating}</span>
                                                </div>
                                            </div>
                                            <Button variant="outline" className="mt-2 sm:mt-0 sm:ml-4">Enroll</Button>
                                        </motion.li>
                                    ))}
                                </ul>
                                <Button variant="outline" className="w-full mt-4">View All Courses</Button>
                            </CardContent>
                        </MotionCard>

                        <MotionCard
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                            className="lg:col-span-1 shadow-lg dark:bg-gray-800"
                        >
                            <CardHeader>
                                <CardTitle className="text-white dark:text-white">Skills Progress</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {[
                                        { skill: "JavaScript", progress: 75 },
                                        { skill: "Python", progress: 60 },
                                        { skill: "React", progress: 80 },
                                        { skill: "Machine Learning", progress: 40 },
                                    ].map((item, index) => (
                                        <motion.div
                                            key={item.skill}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                                        >
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm font-medium text-white dark:text-gray-300">{item.skill}</span>
                                                <span className="text-sm font-medium text-white dark:text-gray-300">{item.progress}%</span>
                                            </div>
                                            <Progress value={item.progress} className="w-full" />
                                        </motion.div>
                                    ))}
                                </div>
                                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                                    <Zap className="h-4 w-4 mr-2" />
                                    Improve Skills
                                </Button>
                            </CardContent>
                        </MotionCard>
                    </div>
                </div>
            </div>
        </SmoothScroll>
    )
}