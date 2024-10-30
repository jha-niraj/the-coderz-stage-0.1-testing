"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { categories, projects } from './projectsdata/project'
import { Project } from '@/app/types'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectSeparator, SelectTrigger, SelectValue } from '@/components/ui/select'
import Image from 'next/image'
import { ChevronRight, Monitor, Smartphone, Zap } from 'lucide-react';
import { realProjects } from './projectsdata/project'

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [levelFilter, setLevelFilter] = useState('all')
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    const availableCategories = new Set(['All', ...projects.map(p => p.category)])

    const filteredProjects = realProjects.filter((project) =>
        (activeCategory === 'All' || project.tags === activeCategory) &&
        (levelFilter === 'all' || project.difficulty === levelFilter)
    );

    return (
        <section>
            <div className="min-h-screen text-black dark:text-white pt-28">
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <h1 className="text-3xl font-medium text-center">Explore projects on different tech stacks</h1>
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:items-center sm:justify-between gap-4 mb-8 py-8">
                        <motion.div layout className="flex flex-wrap items-center justify-center gap-2">
                            {
                                categories.map((category, index) => (
                                    <button
                                        key={index}
                                        className={`text-black text-sm font-small dark:text-black p-1 pl-2 pr-2 rounded-lg
                                        ${activeCategory === category.name ? "bg-black text-white" : "bg-white text-black"}
                                        ${availableCategories.has(category.name) ? "hover:bg-sky-100 hover:text-black" : "opacity-50 cursor-not-allowed"}
                                    `}
                                        onClick={() => availableCategories.has(category.name) && setActiveCategory(category.name)}
                                        disabled={!availableCategories.has(category.name)}
                                    >
                                        {category.name}
                                    </button>
                                ))
                            }
                        </motion.div>
                        <Select value={levelFilter} onValueChange={setLevelFilter}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select Level" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Levels</SelectItem>
                                <SelectItem value="Beginner">Beginner</SelectItem>
                                <SelectItem value="Intermediate">Intermediate</SelectItem>
                                <SelectItem value="Advanced">Advanced</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="">
                        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-full lg:grid-cols-3 gap-6 min-h-[300px]">
                            {
                                filteredProjects.length === 0 ? (
                                    <div className="col-span-full flex flex-col items-center justify-center pt-28 text-center">
                                        <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
                                            <Zap className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Available</h3>
                                            <p className="text-gray-500">There are no projects available with the selected filters. Please try different criteria.</p>
                                        </div>
                                    </div>
                                ) : (
                                    realProjects.map((project) => (
                                        <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-2xl dark:border dark:border-gray-500 transition-shadow">
                                            <div className="p-6">
                                                <div className="flex items-start justify-between mb-4">
                                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                                    <Badge variant={
                                                        project.difficulty === "Beginner" ? "secondary" :
                                                            project.difficulty === "Intermediate" ? "default" : "destructive"
                                                    }>
                                                        {project.difficulty}
                                                    </Badge>
                                                </div>
                                                <p className="text-black dark:text-white mb-4">{project.description}</p>
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {
                                                        project.tags.map((tag) => (
                                                            <Badge key={tag} variant="outline">{tag}</Badge>
                                                        ))
                                                    }
                                                </div>
                                                <div className="flex gap-3">
                                                    <Button variant="outline" className="flex-1">
                                                        Build from Scratch
                                                    </Button>
                                                    <Button
                                                        variant="default"
                                                        className="flex-1"
                                                        onClick={() => setSelectedProject(project)}
                                                    >
                                                        Start Project
                                                    </Button>
                                                </div>
                                            </div>
                                        </Card>
                                    ))
                                )}
                        </div>
                    </div>
                </main>
                <Sheet open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                    <SheetContent className="w-full md:max-w-[640px] overflow-y-auto">
                        {
                            selectedProject && (
                                <div className="space-y-8">
                                    <SheetHeader>
                                        <SheetTitle>{ selectedProject.title }</SheetTitle>
                                        <p className="text-gray-500">{selectedProject.guide.description}</p>
                                    </SheetHeader>

                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                                                    <Monitor className="w-4 h-4" />
                                                    <span>Desktop Preview</span>
                                                </div>
                                                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                                                    <Image
                                                        src={selectedProject.guide.desktopImage!}
                                                        alt="Desktop preview"
                                                        className="w-full h-full object-cover"
                                                        height={200}
                                                        width={200}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                                                    <Smartphone className="w-4 h-4" />
                                                    <span>Mobile Preview</span>
                                                </div>
                                                <div className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden max-w-[240px] mx-auto">
                                                    <Image
                                                        src={selectedProject.guide.mobileImage!}
                                                        alt="Mobile preview"
                                                        className="w-full h-full object-cover"
                                                        height={200}
                                                        width={200}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tags.map((tag) => (
                                                    <Badge key={tag} variant="secondary">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold mb-3">Learning Outcomes</h3>
                                            <div className="grid gap-3">
                                                {selectedProject.guide.steps.map((step, index) => (
                                                    <div key={index} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                                                        <Badge variant="outline" className="mt-0.5">
                                                            {index + 1}
                                                        </Badge>
                                                        <div>
                                                            <p className="font-medium text-gray-900">{step}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <Separator />

                                        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                                            <Button className="sm:w-auto">
                                                Start Project <ChevronRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </SheetContent>
                </Sheet>
            </div>
        </section>
    )
}
