'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Code, BookOpen, Rocket, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Typewriter } from 'react-simple-typewriter'
import Image, { StaticImageData } from 'next/image'
import SmoothScroll from '@/components/smoothscroll';
import whatsappIcon from "@/public/images/whatsapp-icon.png";
import discordIcon from "@/public/images/discord-icon.png";
import Link from 'next/link'

interface CommunityPlatformProps {
	logo: StaticImageData;
	title: string;
	description: string;
	color: string;
	buttonText: string;
	buttonLink: string
}
const CommunityPlatform = ({ logo, title, description, color, buttonText, buttonLink }: CommunityPlatformProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className={`bg-white rounded-lg shadow-lg overflow-hidden border-2 ${color}`}
		>
			<div className="p-6">
				<div className="flex items-center mb-4">
					<Image src={logo} alt={title} width={32} height={32} className="mr-4" />
					<h3 className="text-2xl font-bold text-gray-800">{title}</h3>
				</div>
				<p className="text-gray-600 mb-6">{description}</p>
				<Button
					className={`${color.replace('border', 'bg')} hover:bg-opacity-80 text-white hover:text-white dark:hover:text-black w-full`}
					onClick={() => window.open(buttonLink, '_blank')}
				>
					{buttonText} <ExternalLink className="w-4 h-4 ml-2" />
				</Button>
			</div>
		</motion.div>
	)
}

interface FeatureCardProps {
	icon: any;
	title: string;
	description: string;
}
const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
	<motion.div
		whileHover={{ scale: 1.05 }}
		className="bg-white rounded-lg p-6 shadow-lg"
	>
		<Icon className="w-12 h-12 mb-4 text-indigo-600" />
		<h4 className="text-xl font-semibold mb-2 text-gray-800">{title}</h4>
		<p className="text-gray-600">{description}</p>
	</motion.div>
)

export default function CommunityPage() {
	return (
		<SmoothScroll>
			<div className="min-h-screen text-black dark:text-white">
				<main className="max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="text-center mb-16"
					>
						<h2 className="text-5xl font-extrabold mb-4">
							<Typewriter
								words={['Join Our Coding Collective', 'Connect with Developers', 'Learn and Grow Together']}
								loop={0}
								cursor
								cursorStyle='_'
								typeSpeed={70}
								deleteSpeed={50}
								delaySpeed={1000}
							/>
						</h2>
						<p className="text-xl">Connect, learn, and grow with fellow developers in our vibrant community.</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.5 }}
					>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
							<CommunityPlatform
								logo={whatsappIcon}
								title="WhatsApp Hub"
								description="Join our WhatsApp group for instant communication, daily coding challenges, and quick problem-solving assistance."
								color="border-green-500"
								buttonText="Join WhatsApp Group"
								buttonLink="https://chat.whatsapp.com/F6nuXaHjvER8uTnvaqjUp4"
							/>
							<CommunityPlatform
								logo={discordIcon}
								title="Discord Realm"
								description="Dive into our Discord server for in-depth discussions, collaborative projects, and regular tech workshops."
								color="border-indigo-500"
								buttonText="Join Discord Server"
								buttonLink="https://discord.gg/2tMK3FFt"
							/>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.7 }}
						className="mb-16"
					>
						<h3 className="text-3xl font-bold mb-8 text-center">Why Join The Coder&apos;z?</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<FeatureCard
								icon={Zap}
								title="Accelerated Learning"
								description="Boost your skills through peer-to-peer learning and expert guidance from industry professionals."
							/>
							<FeatureCard
								icon={Code}
								title="Collaborative Coding"
								description="Work on real-world projects, participate in hackathons, and build a strong portfolio to showcase your skills."
							/>
							<FeatureCard
								icon={BookOpen}
								title="Resource Library"
								description="Access our curated collection of tutorials, articles, courses, and exclusive learning materials."
							/>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.9 }}
						className="text-center bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 shadow-lg"
					>
						<h3 className="text-3xl font-bold mb-4 text-white">Ready to Level Up Your Coding Journey?</h3>
						<p className="text-xl text-white text-opacity-90 mb-8">Join The Coder&apos;z today and unlock a world of opportunities!</p>
						<Link href="/resources">
						<Button
							className="bg-white text-indigo-600 hover:bg-indigo-100 text-lg px-8 py-3"
						>
							<Rocket className="w-5 h-5 mr-2" />
							Launch Your Journey
						</Button>
						</Link>
					</motion.div>
				</main>
			</div>
		</SmoothScroll>
	)
}