import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, BookOpen, Briefcase, ExternalLink, Lightbulb, TrendingUp } from "lucide-react";
import { PathwayDetailsProps } from "@/app/types";

export default function PathwayDetails({ pathway, onBack }: PathwayDetailsProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 rounded-lg shadow-xl overflow-hidden"
        >
            <div className={`bg-gradient-to-r ${pathway.color} p-8`}>
                <Button
                    onClick={onBack}
                    variant="ghost"
                    className="mb-4 text-white hover:text-gray-200"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Pathways
                </Button>
                <h2 className="text-4xl font-bold mb-2">{pathway.title}</h2>
                <p className="text-xl mb-4">{pathway.description}</p>
                <div className="flex flex-wrap gap-2">
                    <span className="bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm">
                        {pathway.niche}
                    </span>
                    <span className="bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm">
                        {pathway.domain}
                    </span>
                </div>
            </div>

            <div className="p-8">
                <section className="mb-12">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <BookOpen className="mr-2" /> Pathway Overview
                    </h3>
                    <p className="text-gray-300 mb-4">
                        The {pathway.title} pathway is a dynamic and evolving field within computer science that focuses on {pathway.domain}. This career path is ideal for individuals who are passionate about {pathway.niche} and want to make a significant impact in the tech industry.
                    </p>
                    <p className="text-gray-300 mb-4">
                        As a {pathway.title} professional, you&apos;ll be at the forefront of technological innovation, working on cutting-edge projects that shape the future of digital experiences. This role requires a blend of technical expertise, creative problem-solving, and continuous learning to keep up with the rapidly changing landscape of technology.
                    </p>
                    <p className="text-gray-300">
                        Whether you&apos;re just starting your journey or looking to specialize further, the {pathway.title} pathway offers numerous opportunities for growth and specialization. From entry-level positions to senior roles, there&apos;s a wide range of career possibilities to explore.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <Briefcase className="mr-2" /> Career Opportunities
                    </h3>
                    <p className="text-gray-300 mb-4">
                        The {pathway.title} field offers a diverse range of career opportunities, catering to various interests and specializations within {pathway.domain}. Here are some of the most sought-after roles:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                            pathway.careers.map((career, index) => (
                                <div key={index} className="bg-gray-800 rounded-lg p-4">
                                    <h4 className="text-lg font-semibold mb-2">{career.title}</h4>
                                    <p className="text-gray-400 mb-2">{career.description}</p>
                                    <p className="text-gray-400 mb-2"><strong>Key Skills:</strong> {career.skills}</p>
                                    <p className="text-gray-400"><strong>Opportunities:</strong> {career.opportunities}</p>
                                </div>
                            ))
                        }
                    </div>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <Lightbulb className="mr-2" /> Challenges and Growth Opportunities
                    </h3>
                    <p className="text-gray-300 mb-4">
                        The {pathway.title} pathway, while rewarding, comes with its own set of challenges. These challenges, however, present unique opportunities for professional growth and innovation:
                    </p>
                    <div className="space-y-4">
                        {
                            pathway.challenges.map((challenge, index) => (
                                <div key={index} className="bg-gray-800 rounded-lg p-4">
                                    <h4 className="text-lg font-semibold mb-2">{challenge.title}</h4>
                                    <p className="text-gray-400 mb-2">{challenge.description}</p>
                                    <p className="text-gray-400">
                                        <strong>Growth Opportunity:</strong> {challenge.opportunity}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <TrendingUp className="mr-2" /> Industry Trends
                    </h3>
                    <p className="text-gray-300 mb-4">
                        Staying ahead of industry trends is crucial for success in the {pathway.title} field. Here are some of the most significant trends shaping the future of this pathway:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                            pathway.trends.map((trend, index) => (
                                <div key={index} className="bg-gray-800 rounded-lg p-4">
                                    <h4 className="text-lg font-semibold mb-2">{trend.name}</h4>
                                    <p className="text-gray-400">{trend.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <Award className="mr-2" /> Key Skills
                    </h3>
                    <p className="text-gray-300 mb-4">
                        To excel in the {pathway.title} pathway, you&apos;ll need to develop and maintain a diverse set of skills. Here are the key skills that are in high demand:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {
                            pathway.skills.map((skill, index) => (
                                <div key={index} className="bg-gray-800 rounded-lg p-4">
                                    <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
                                    <p className="text-gray-400">{skill.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <ExternalLink className="mr-2" /> Learning Resources
                    </h3>
                    <p className="text-gray-300 mb-4">
                        Ready to start your journey in {pathway.title} or looking to enhance your skills? Check out our curated list of learning resources to help you excel in this pathway.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Explore Learning Resources
                    </Button>
                </section>
            </div>
        </motion.div>
    )
}