"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import SmoothScroll from '@/components/smoothscroll'
import { categories, projects } from './projectsdata/project'
import { Project } from '@/app/types'
import ProjectCard from './_components/projectcard'
import ProjectModal from './_components/projectmodel'

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [searchTerm, setSearchTerm] = useState('')
    const [levelFilter, setLevelFilter] = useState('all')
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    const filteredProjects = projects.filter((project) =>
        (activeCategory === 'All' || project.category === activeCategory) &&
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (levelFilter === 'all' || project.level === levelFilter)
    )

    console.log(filteredProjects);

    return (
        // <SmoothScroll>
            <div className="min-h-screen text-white pt-28">
                <header className="z-10 text-black dark:text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex flex-col sm:flex-row gap-4 justify-between">
                            <h1 className="text-3xl font-bold">Projects</h1>
                            <div className="flex flex-col gap-2 sm:flex-row items-end space-x-4">
                                <div className="relative">
                                    <Input
                                        type="text"
                                        placeholder="Search projects..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-64 bg-gray-800 text-white placeholder-white placeholder:text-white border-gray-700 focus:border-silver focus:ring-silver"
                                    />
                                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
                                </div>
                                <select
                                    value={levelFilter}
                                    onChange={(e) => setLevelFilter(e.target.value)}
                                    className="bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-silver"
                                >
                                    <option value="all">All Levels</option>
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="advanced">Advanced</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <motion.div layout className="flex flex-wrap items-center justify-center gap-4 mb-8">
                        {
                            categories.map((category) => (
                                <Button
                                    key={category.name}
                                    onClick={() => setActiveCategory(category.name)}
                                    className={`flex items-center space-x-2 ${activeCategory === category.name
                                        ? 'bg-gray-700 text-white'
                                        : 'bg-gray-800 text-white'
                                        }`}
                                >
                                    {typeof category.icon === 'string' ? (
                                        <span className="font-bold">{category.icon}</span>
                                    ) : (
                                        category.icon
                                    )}
                                    <span>{category.name}</span>
                                </Button>
                            ))
                        }
                    </motion.div>

                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {
                                filteredProjects.map((project, index) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={{
                                            id: project.id,
                                            name: project.name,
                                            category: project.category,
                                            group: project.group,
                                            level: project.level === 'beginner' ? 'beginner' : project.level === 'intermediate' ? 'intermediate' : 'advanced',
                                            language: project.language,
                                            description: project.description,
                                            features: project.features,
                                            learningOutcomes: project.learningOutcomes,
                                            desktopImage: project.desktopImage,
                                            mobileImage: project.mobileImage
                                        }}
                                        index={index}
                                        onClick={setSelectedProject}
                                    />
                                ))
                            }
                        </AnimatePresence>
                    </motion.div>
                    {
                        filteredProjects.length === 0 && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center text-gray-400 mt-8"
                            >
                                No projects found. Try adjusting your search or filter.
                            </motion.p>
                        )
                    }
                </main>

                <AnimatePresence>
                    {selectedProject && (
                        <ProjectModal
                            project={selectedProject}
                            onClose={() => setSelectedProject(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        // {/* </SmoothScroll> */}
    )
}