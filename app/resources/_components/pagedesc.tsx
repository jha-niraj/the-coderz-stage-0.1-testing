import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface PageDescriptionProps {
    title: string;
    description: string;
    onClick: () => void;
    isEnrolled: Boolean;
}
export default function PageDescription({ title, description, onClick, isEnrolled }: PageDescriptionProps) {
    return (
        <section>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-6 text-center"
            >
                {
                    title
                }
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8 text-center text-lg"
            >
                {
                    description
                }
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-lg p-6 mb-8 border border-gray-700 dark:bg-gray-900 flex flex-col gap-4"
            >
                <div className="flex justify-between items-center gap-4">
                    <h2 className="text-xl font-semibold">Key Highlights</h2>
                    {/* <Button
                        onClick={() => onClick()}
                        className={`px-2 text-md font-semibold text-white rounded-lg transition-all duration-300 ${isEnrolled
                            ? "bg-green-500 cursor-default"
                            : "bg-blue-600 hover:bg-blue-700"
                            }`}
                    >
                        {isEnrolled ? "Enrolled" : "Get Started"}
                    </Button> */}
                </div>
                <ul className="list-disc list-inside space-y-2">
                    <li>Comprehensive coverage from basics to advanced topics</li>
                    <li>Video tutorials for visual learners</li>
                    <li>Projects and quiz assessments to track your progress</li>
                </ul>
            </motion.div>
        </section>
    )
}