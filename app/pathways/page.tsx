'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Code, Database, Globe, Shield, Cpu, Lightbulb, Rocket, Target, Zap } from 'lucide-react';
import { pathwaysData } from './pathwaysdata';

const benefits = [
    { title: 'Structured Learning', description: 'Follow a curated path designed by industry experts', icon: <Target className="w-6 h-6" /> },
    { title: 'Hands-on Experience', description: 'Build real-world projects to apply your skills', icon: <Cpu className="w-6 h-6" /> },
    { title: 'Career Guidance', description: 'Get insights into various tech career opportunities', icon: <Lightbulb className="w-6 h-6" /> },
    { title: 'Community Support', description: 'Connect with peers and mentors in your chosen field', icon: <Globe className="w-6 h-6" /> },
    { title: 'Flexible Learning', description: 'Learn at your own pace with on-demand resources', icon: <Rocket className="w-6 h-6" /> },
    { title: 'Industry-Aligned', description: 'Stay updated with the latest trends and technologies', icon: <Zap className="w-6 h-6" /> },
]

export default function Component() {
    const [selectedPathway, setSelectedPathway] = useState(null)

    return (
        <div className="max-w-7xl mx-auto min-h-screen pt-32">
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-[450px] flex items-center justify-center rounded-2xl shadow-lg p-6 md:p-12">
                <div className="container mx-auto px-4 flex flex-col items-center text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white leading-tight tracking-tight">
                        Discover Your Tech Career Pathway
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed mb-6">
                        Explore curated learning paths crafted to guide you through the thrilling world of technology.
                        Whether you're starting fresh or looking to specialize, find the perfect pathway to accelerate your career.
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Pathways?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <div className="mr-4 p-2 bg-blue-100 rounded-full text-blue-600">
                                            {benefit.icon}
                                        </div>
                                        {benefit.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{benefit.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pathways Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Explore Our Pathways</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            pathwaysData.map((pathway) => (
                                <Sheet key={pathway.id}>
                                    <SheetTrigger asChild>
                                        <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
                                            <CardHeader>
                                                <CardTitle className="flex items-center">
                                                    <div className={`mr-4 p-2 rounded-full bg-gradient-to-r ${pathway.color} text-white`}>
                                                        {pathway.icon}
                                                    </div>
                                                    {pathway.title}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription>{pathway.description}</CardDescription>
                                            </CardContent>
                                        </Card>
                                    </SheetTrigger>
                                    <SheetContent side="right" className="w-full sm:w-[70%] lg:w-[50%] overflow-y-auto">
                                        <SheetHeader>
                                            <SheetTitle>{pathway.title}</SheetTitle>
                                            <SheetDescription>{pathway.description}</SheetDescription>
                                        </SheetHeader>
                                        <div className="mt-6">
                                            <h3 className="text-lg font-semibold mb-2">Niche</h3>
                                            <p>{pathway.niche}</p>
                                            <h3 className="text-lg font-semibold mt-4 mb-2">Domain</h3>
                                            <p>{pathway.domain}</p>
                                            <h3 className="text-lg font-semibold mt-4 mb-2">Careers</h3>
                                            {pathway.careers && pathway.careers.map((career, index) => (
                                                <div key={index} className="mb-4">
                                                    <h4 className="font-medium">{career.title}</h4>
                                                    <p className="text-sm text-gray-600">{career.description}</p>
                                                    <p className="text-sm mt-1"><strong>Skills:</strong> {career.skills}</p>
                                                    <p className="text-sm mt-1"><strong>Opportunities:</strong> {career.opportunities}</p>
                                                </div>
                                            ))}
                                            <h3 className="text-lg font-semibold mt-4 mb-2">Challenges</h3>
                                            {pathway.challenges && pathway.challenges.map((challenge, index) => (
                                                <div key={index} className="mb-4">
                                                    <h4 className="font-medium">{challenge.title}</h4>
                                                    <p className="text-sm text-gray-600">{challenge.description}</p>
                                                    <p className="text-sm mt-1"><strong>Opportunity:</strong> {challenge.opportunity}</p>
                                                </div>
                                            ))}
                                            <h3 className="text-lg font-semibold mt-4 mb-2">Key Skills</h3>
                                            {pathway.skills && pathway.skills.map((skill, index) => (
                                                <div key={index} className="mb-2">
                                                    <h4 className="font-medium">{skill.name}</h4>
                                                    <p className="text-sm text-gray-600">{skill.description}</p>
                                                </div>
                                            ))}
                                            <h3 className="text-lg font-semibold mt-4 mb-2">Industry Trends</h3>
                                            {pathway.trends && pathway.trends.map((trend, index) => (
                                                <div key={index} className="mb-2">
                                                    <h4 className="font-medium">{trend.name}</h4>
                                                    <p className="text-sm text-gray-600">{trend.description}</p>
                                                </div>
                                            ))}
                                            {pathway.learningPath && (
                                                <>
                                                    <h3 className="text-lg font-semibold mt-4 mb-2">Learning Path</h3>
                                                    <ol className="list-decimal list-inside">
                                                        {pathway.learningPath.map((step, index) => (
                                                            <li key={index} className="mb-2">
                                                                <span className="font-medium">{step.name}</span> - {step.duration}
                                                            </li>
                                                        ))}
                                                    </ol>
                                                </>
                                            )}
                                            <div className="mt-8">
                                                <Button className="w-full" onClick={() => window.location.href = `/resources/${pathway.id}`}>
                                                    Explore {pathway.title} Resources
                                                </Button>
                                            </div>
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}