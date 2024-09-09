"use client"

import { motion } from "framer-motion";

interface FeedbackItemProps {
	name: string;
	role: string;
	feedback: string;
}
const FeedbackItem = ({ name, role, feedback }: FeedbackItemProps) => (
	<motion.div
		className="bg-white p-6 rounded-lg shadow-lg"
		initial={{ opacity: 0, y: 50 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
	>
		<p className="text-gray-600 italic mb-4">"{feedback}"</p>
		<div className="flex items-center">
			<div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
				{name[0]}
			</div>
			<div className="ml-4">
				<h3 className="font-semibold">{name}</h3>
				<p className="text-sm text-gray-500">{role}</p>
			</div>
		</div>
	</motion.div>
);

const FeedbackSection = () => {
	const feedbacks = [
		{ name: "John Doe", role: "Software Developer", feedback: "This platform has been invaluable in my coding journey. The resources are top-notch!" },
		{ name: "Jane Smith", role: "UX Designer", feedback: "I love how the community here is so supportive. It's a great place to learn and grow." },
		{ name: "Mike Johnson", role: "Student", feedback: "As a beginner, I found the tutorials here extremely helpful and easy to follow." },
	];

	return (
		<section className="w-full sm:w-[90%]">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center text-white mb-12">What Our Coder'z Say</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{feedbacks.map((item, index) => (
						<FeedbackItem key={index} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default FeedbackSection;