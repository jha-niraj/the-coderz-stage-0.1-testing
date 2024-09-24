import { motion } from "framer-motion";
import { ProjectModalProps } from "@/app/types";
import { X } from "lucide-react";
import Image from "next/image";

const levelColors = {
    beginner: 'bg-green-900 text-green-100',
    intermediate: 'bg-yellow-900 text-yellow-100',
    advanced: 'bg-red-900 text-red-100',
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    if (!project) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-white">{project.name}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Desktop View</h3>
                        <Image 
                            src={project.desktopImage} 
                            alt="Desktop view" 
                            className="w-full h-auto rounded-lg" 
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Mobile View</h3>
                        <Image 
                            src={project.mobileImage} 
                            alt="Mobile view" 
                            className="w-full h-auto rounded-lg" 
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Features</h3>
                    <ul className="list-disc list-inside text-gray-300">
                        {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Learning Outcomes</h3>
                    <ul className="list-disc list-inside text-gray-300">
                        {
                            project.learningOutcomes.map((outcome, index) => (
                                <li key={index}>{outcome}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${levelColors[project.level]}`}>
                        {project.level}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-900 text-blue-100">
                        {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-900 text-purple-100">
                        {project.group}
                    </span>
                </div>
                <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                    <p className="text-white text-center">
                        We&apos;re currently working on integrating project submission functionality.
                        Stay tuned for updates!
                    </p>
                </div>
            </motion.div>
        </motion.div>
    )
}