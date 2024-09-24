import { motion } from "framer-motion";
import { ProjectCardProps } from "@/app/types";
import { Button } from "@/components/ui/button";

const levelColors = {
    beginner: 'bg-green-900 text-green-100',
    intermediate: 'bg-yellow-900 text-yellow-100',
    advanced: 'bg-red-900 text-red-100',
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-transparent border-2 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 cursor-pointer"
            onClick={() => onClick(project)}
        >
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.language}</p>
                <div className="flex flex-wrap gap-2 mb-4">
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
                <div className="flex justify-end">
                    <Button variant="outline" className="text-black hover:text-sky-800">
                        View Details
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}