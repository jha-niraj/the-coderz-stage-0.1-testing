"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { Code, Globe, Database, Cpu, Server, Terminal, Braces, Layers } from 'lucide-react'
import { useRouter } from "next/navigation";

const resources = [
    {
        name: 'C',
        url: '/resources/programminglanguages/c',
        icon: 'C',
        description: 'A high-performance, compiled language that provides low-level memory management.',
        color: 'from-blue-500 to-blue-300'
    },
    {
        name: 'CPP',
        url: '/resources/programminglanguages/cpp',
        icon: 'C++',
        description: 'Widely used for system/application software, game development, and more.',
        color: 'from-blue-600 to-blue-400'
    },
    {
        name: 'Java',
        url: '/resources/programminglanguages/java',
        icon: '☕',
        description: 'A popular language for building large-scale enterprise applications and Android apps.',
        color: 'from-red-500 to-red-300'
    },
    {
        name: 'Python',
        url: '/resources/programminglanguages/python',
        icon: '🐍',
        description: 'Known for its simplicity and wide range of applications, from web dev to data science.',
        color: 'from-green-500 to-green-300'
    },
]

const ExploreResourcesSection = () => {
    const router = useRouter();

    return (
        <div className="mx-auto px-4 flex z-40 flex-col gap-4 w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-8"
            >
                <h2 className="text-3xl font-bold w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:400%] animate-gradient text-transparent bg-clip-text mb-4">Explore Computer Science Resources</h2>
                <p className="text-small max-w-2xl mx-auto">
                    Dive into a world of knowledge with our curated collection of computer science topics.
                    From coding basics to advanced concepts, we&apos;ve got you covered.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                    <motion.div
                        key={resource.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Link href={resource.url!}>
                            <div className={`bg-gradient-to-r ${resource.color} rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl`}>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-2">{resource.name}</h3>
                                    {
                                        <p className="">{ resource.description }</p>
                                    }
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
                onClick={() => router.push("/resources")}
            >
                <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-white dark:border-white dark:text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                    Explore all Resources
                </button>
            </motion.div>
        </div>
    )
};

export default ExploreResourcesSection;