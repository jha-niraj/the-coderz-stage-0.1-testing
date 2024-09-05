"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { getPageContentFromNotion } from "./lessons/paytm/page";
import mainImage from "@/public/main-photo.avif";
import { useRouter } from "next/navigation";
import { Code, Globe, Database, Cpu, Server, Terminal, Braces, Layers } from 'lucide-react'
import Link from 'next/link';
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const resources = [
	{ title: 'Programming Languages', icon: Code, color: 'bg-blue-500' },
	{ title: 'Full Stack Web Development', icon: Globe, color: 'bg-green-500' },
	{ title: 'Database Management', icon: Database, color: 'bg-yellow-500' },
	{ title: 'Artificial Intelligence', icon: Cpu, color: 'bg-purple-500' },
	{ title: 'Cloud Computing', icon: Server, color: 'bg-indigo-500' },
	{ title: 'DevOps', icon: Terminal, color: 'bg-red-500' },
	{ title: 'Data Structures & Algorithms', icon: Braces, color: 'bg-pink-500' },
	{ title: 'Software Architecture', icon: Layers, color: 'bg-teal-500' },
]

export default function Home() {
	const session = useSession();
	const router = useRouter()

	const [pageData, setPageData] = useState({ title: '', content: '' });
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getPageContentFromNotion();
			if (data) {
				setPageData(data);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	console.log(pageData.title)

	return (
		// <AuroraBackground className="bg-black text-white">
		// 	<motion.div
		// 		initial={{ opacity: 0.0, y: 40 }}
		// 		whileInView={{ opacity: 1, y: 0 }}
		// 		transition={{
		// 			delay: 0.3,
		// 			duration: 0.8,
		// 			ease: "easeInOut",
		// 		}}
		// 		className="relative flex flex-col gap-4 items-center justify-center px-4"
		// 	>
		// 		<main className="flex flex-col md:flex-row items-center gap-16 justify-center w-full h-full sm:w-[90%]">
		// 			<div className="flex flex-col items-center md:items-start justify-center gap-2 sm:gap-5 sm:w-1/2 h-full">
		// 				<h1 className="text-4xl font-semibold text-center sm:text-left"><span className="text-orange-300">Your One-Stop Platform for Knowledge and Support</span></h1>
		// 				<p className="text-sm font-small text-center sm:text-left">Join our vibrant community of learners and gain access to a vast library of resources, expert guidance, and collaborative support. Unlock your full potential and achieve your goals with confidence.</p>
		// 				<div>
		// 					<button onClick={() => router.push("/allresources")} className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
		// 						<span className="absolute inset-0 overflow-hidden rounded-full">
		// 							<span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
		// 						</span>
		// 						<div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
		// 							<span>
		// 								View all Resources
		// 							</span>
		// 							<svg
		// 								fill="none"
		// 								height="16"
		// 								viewBox="0 0 24 24"
		// 								width="16"
		// 								xmlns="http://www.w3.org/2000/svg"
		// 							>
		// 								<path
		// 									d="M10.75 8.75L14.25 12L10.75 15.25"
		// 									stroke="currentColor"
		// 									strokeLinecap="round"
		// 									strokeLinejoin="round"
		// 									strokeWidth="1.5"
		// 								/>
		// 							</svg>
		// 						</div>
		// 						<span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
		// 					</button>
		// 				</div>
		// 			</div>
		// 			<div className="flex items-center justify-center">
		// 				<Image
		// 					src={mainImage}
		// 					alt="main Image"
		// 					height={600}
		// 					width={450}
		// 					className="rounded-lg"
		// 				/>
		// 			</div>
		// 		</main>
		// 	</motion.div>
		// 	<section className="py-16">
		// 		<div className="container mx-auto px-4">
		// 			<motion.div
		// 				initial={{ opacity: 0, y: 20 }}
		// 				whileInView={{ opacity: 1, y: 0 }}
		// 				transition={{ duration: 0.5 }}
		// 				viewport={{ once: true }}
		// 				className="text-center mb-12"
		// 			>
		// 				<h2 className="text-3xl font-bold mb-4">Explore Computer Science Resources</h2>
		// 				<p className="text-xl text-gray-600 max-w-2xl mx-auto">
		// 					Dive into a world of knowledge with our curated collection of computer science topics.
		// 					From coding basics to advanced concepts, we've got you covered.
		// 				</p>
		// 			</motion.div>

		// 			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		// 				{resources.map((resource, index) => (
		// 					<motion.div
		// 						key={resource.title}
		// 						initial={{ opacity: 0, y: 20 }}
		// 						whileInView={{ opacity: 1, y: 0 }}
		// 						transition={{ duration: 0.5, delay: index * 0.1 }}
		// 						viewport={{ once: true }}
		// 					>
		// 						<Link href="#" className="block">
		// 							<div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
		// 								<div className={`p-4 ${resource.color}`}>
		// 									<resource.icon className="w-8 h-8 text-white" />
		// 								</div>
		// 								<div className="p-4">
		// 									<h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
		// 									<p className="text-gray-600">Explore courses and materials to master {resource.title.toLowerCase()}.</p>
		// 								</div>
		// 							</div>
		// 						</Link>
		// 					</motion.div>
		// 				))}
		// 			</div>
		// 		</div>
		// 	</section>
		// </AuroraBackground>
		<div className="rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
			<motion.div
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className="relative flex flex-col gap-4 items-center justify-center px-4"
			>
				<main className="flex flex-col md:flex-row items-center gap-16 justify-center w-full h-full sm:w-[90%]">
					<div className="flex flex-col items-center md:items-start justify-center gap-2 sm:gap-5 sm:w-1/2 h-full">
						<h1 className="text-4xl font-semibold text-center sm:text-left"><span className="text-orange-300">Your One-Stop Platform for Knowledge and Support</span></h1>
						<p className="text-sm font-small text-center sm:text-left">Join our vibrant community of learners and gain access to a vast library of resources, expert guidance, and collaborative support. Unlock your full potential and achieve your goals with confidence.</p>
						<div>
							<button onClick={() => router.push("/allresources")} className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
								<span className="absolute inset-0 overflow-hidden rounded-full">
									<span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
								</span>
								<div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
									<span>
										View all Resources
									</span>
									<svg
										fill="none"
										height="16"
										viewBox="0 0 24 24"
										width="16"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.75 8.75L14.25 12L10.75 15.25"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
										/>
									</svg>
								</div>
								<span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
							</button>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<Image
							src={mainImage}
							alt="main Image"
							height={600}
							width={450}
							className="rounded-lg"
						/>
					</div>
				</main>
			</motion.div>
			<section className="py-16">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold mb-4">Explore Computer Science Resources</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
				</div>
			</section>
			<ShootingStars />
			<StarsBackground />
		</div>
	);
}
