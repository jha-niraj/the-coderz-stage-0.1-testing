"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Code, CircleIcon, BrainCircuitIcon, DatabaseIcon, CloudIcon, LayoutDashboardIcon, LucideShield, Network, LineChart } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { pathways } from '@/app/pathways/pathwaysdata';

const PathwaysPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPathway, setSelectedPathway] = useState(null);

    const handlePathwayClick = (pathway) => {
        setSelectedPathway(pathway);
        setIsOpen(true);
    };

    return (
        <div className="min-h-screen bg-background">
            <section className="relative py-24 px-4 md:px-6 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-3xl"></div>

                <div className="max-w-6xl mx-auto relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                                Choose Your Perfect
                                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                                    Learning Pathway
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Structured learning paths designed by industry experts to take you from beginner to professional. Select your path and start your tech career journey today.
                            </p>
                            <Button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white px-8 py-6 text-lg">
                                Explore Pathways
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="rounded-lg p-6 border shadow-2xl bg-card text-card-foreground">
                                <div className="flex gap-2 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">1</div>
                                        <div className="flex-1 bg-muted rounded p-3">Choose your pathway</div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-500">2</div>
                                        <div className="flex-1 bg-muted rounded p-3">Complete structured modules</div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">3</div>
                                        <div className="flex-1 bg-muted rounded p-3">Earn certification</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pathways Grid */}
            <section className="py-20 px-4 md:px-6" >
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pathways.map((pathway) => (
                            <Card
                                key={pathway.id}
                                className="transition-all duration-300 hover:shadow-lg cursor-pointer group"
                                onClick={() => handlePathwayClick(pathway)}
                            >
                                <CardHeader>
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${pathway.color} flex items-center justify-center text-white mb-4`}>
                                        {pathway.icon}
                                    </div>
                                    <CardTitle className="text-2xl group-hover:text-blue-500 transition-colors">
                                        {pathway.title}
                                    </CardTitle>
                                    <CardDescription className="text-lg">
                                        {pathway.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex gap-2">
                                        <Badge variant="secondary">{pathway.niche}</Badge>
                                        <Badge variant="outline">{pathway.domain}</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pathway Details Sheet */}
            <Sheet open={isOpen} onOpenChange={setIsOpen} >
                <SheetContent
                    side="right"
                    className="w-full h-full sm:w-[80vw] md:w-[50vw] sm:max-w-[70vw] p-6 overflow-y-auto"
                >
                    {selectedPathway && (
                        <>
                            <SheetHeader className="space-y-4">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${selectedPathway.color} flex items-center justify-center text-white`}>
                                    {selectedPathway.icon}
                                </div>
                                <SheetTitle className="text-3xl">
                                    {selectedPathway.title}
                                </SheetTitle>
                                <SheetDescription className="text-lg">
                                    {selectedPathway.description}
                                </SheetDescription>
                                <div className="flex gap-2">
                                    <Badge variant="secondary">{selectedPathway.niche}</Badge>
                                    <Badge variant="outline">{selectedPathway.domain}</Badge>
                                </div>
                            </SheetHeader>

                            <div className="mt-8 space-y-8">
                                {/* Career Paths */}
                                <div>
                                    <h3 className="text-2xl font-semibold mb-4">Career Paths</h3>
                                    <div className="space-y-4">
                                        {selectedPathway.careers.map((career, index) => (
                                            <Card key={index}>
                                                <CardHeader>
                                                    <CardTitle>{career.title}</CardTitle>
                                                    <CardDescription>{career.description}</CardDescription>
                                                </CardHeader>
                                                <CardContent className="space-y-2">
                                                    <p className="text-sm"><strong>Skills:</strong> {career.skills}</p>
                                                    <p className="text-sm"><strong>Opportunities:</strong> {career.opportunities}</p>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>

                                {/* Skills */}
                                <div>
                                    <h3 className="text-2xl font-semibold mb-4">Core Skills</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {selectedPathway.skills.map((skill, index) => (
                                            <div key={index} className="p-4 rounded-lg bg-muted">
                                                <h4 className="font-semibold mb-2">{skill.name}</h4>
                                                <p className="text-sm text-muted-foreground">{skill.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Challenges */}
                                <div>
                                    <h3 className="text-2xl font-semibold mb-4">Industry Challenges</h3>
                                    <div className="space-y-4">
                                        {selectedPathway.challenges.map((challenge, index) => (
                                            <Card key={index}>
                                                <CardHeader>
                                                    <CardTitle className="text-lg">{challenge.title}</CardTitle>
                                                    <CardDescription>{challenge.description}</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-sm text-muted-foreground">
                                                        <strong>Opportunity:</strong> {challenge.opportunity}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>

                                {/* Trends */}
                                <div>
                                    <h3 className="text-2xl font-semibold mb-4">Industry Trends</h3>
                                    <div className="grid grid-cols-1 gap-4">
                                        {selectedPathway.trends.map((trend, index) => (
                                            <div key={index} className="p-4 rounded-lg bg-muted">
                                                <h4 className="font-semibold mb-2">{trend.name}</h4>
                                                <p className="text-sm text-muted-foreground">{trend.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </SheetContent>
            </Sheet>
        </div >
    );
};

export default PathwaysPage;