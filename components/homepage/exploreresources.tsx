"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { Code, Globe, Database, Cpu, Server, Terminal, Braces, Layers } from 'lucide-react'
import { useRouter } from "next/navigation";

const resources = [
    { title: 'Programming Languages', icon: Code, color: 'bg-blue-500' },
    { title: 'Full Stack Web Development', icon: Globe, color: 'bg-green-500' },
    { title: 'Database Management', icon: Database, color: 'bg-yellow-500' },
    { title: 'Artificial Intelligence', icon: Cpu, color: 'bg-purple-500' },
]

const ExploreResourcesSection = () => {
    const router = useRouter();

    return (
        <div className="container mx-auto px-4 flex flex-col gap-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-8"
            >
                <h2 className="text-3xl font-bold w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:400%] animate-gradient text-transparent bg-clip-text text-white mb-4">Explore Computer Science Resources</h2>
                <p className="text-small text-white max-w-2xl mx-auto">
                    Dive into a world of knowledge with our curated collection of computer science topics.
                    From coding basics to advanced concepts, we've got you covered.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.map((resource, index) => (
                    <motion.div
                        key={resource.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Link href="#" className="block">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                                <div className={`p-4 ${resource.color}`}>
                                    <resource.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                                    <p className="text-gray-600">Explore courses and materials to master {resource.title.toLowerCase()}.</p>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-4"
                onClick={() => router.push("/allresources")}
            >
                <button className="shadow-[0_0_0_3px_#000000_inset] text-white px-6 py-2 bg-transparent border border-white dark:border-white dark:text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                    Explore all Resources
                </button>
            </motion.div>
        </div>
    )
};

export default ExploreResourcesSection;