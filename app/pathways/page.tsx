"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Code, Server, Globe, Database, ShieldCheck, Brain, Cpu, Cloud, ArrowLeft, Briefcase, TrendingUp, Lightbulb, Award, BookOpen, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import SmoothScroll from '@/components/smoothscroll'
import { pathways } from './pathwaysdata'
import { Pathway } from '../types'
import PathwayDetails from './_components/pathwaydetails'

export default function PathwaysPage() {
    const [selectedPathway, setSelectedPathway] = useState<Pathway | null>(null)

    return (
        <SmoothScroll>
            <div className="min-h-screen text-white pt-4">
                <header className="">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold">Computer Science Career Pathways</h1>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {selectedPathway && (
                        <PathwayDetails pathway={selectedPathway} onBack={() => setSelectedPathway(null)} />
                    )}
                    {
                        !selectedPathway && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {
                                    pathways.map((pathway) => (
                                        <motion.div
                                            key={pathway.id}
                                            className={`bg-gradient-to-br ${pathway.color} rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105`}
                                            whileHover={{ y: -5 }}
                                            onClick={() => setSelectedPathway(pathway)}
                                        >
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="bg-white bg-opacity-20 rounded-full p-3">
                                                        {pathway.icon}
                                                    </div>
                                                    <ChevronRight className="w-6 h-6 text-white opacity-75" />
                                                </div>
                                                <h2 className="text-2xl font-semibold mb-2">{pathway.title}</h2>
                                                <p className="text-white text-opacity-80">{pathway.description}</p>
                                            </div>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        )}
                </main>
            </div>
        </SmoothScroll>
    )
}