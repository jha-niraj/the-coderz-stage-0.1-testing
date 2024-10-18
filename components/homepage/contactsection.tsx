'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { RainbowButton } from '../ui/rainbow-button'

export default function ContactSection() {
	const [formData, setFormData] = useState({
		name: '',
		service: '',
		budget: '',
		email: '',
		details: ''
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Handle form submission here
		console.log(formData)
	}

	return (
		<section className="max-w-6xl mx-auto px-4 py-20">
			<h1 className="text-4xl md:text-6xl font-bold mb-12">
				Hey! Are <span className="text-gray-400">ready</span><br />
				to <span className="text-blue-400">contribute</span> <span className="text-purple-400">or Join Us?</span>
			</h1>
			<form onSubmit={handleSubmit} className="space-y-8">
				<div>
					<label htmlFor="name" className="text-2xl md:text-3xl font-bold">
						My name is 
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="border-b-2 border-gray-300 focus:border-black outline-none px-2 w-64 md:w-96"
							placeholder="first and last name"
							required
						/> and I'm interested in 
						<input
							type="text"
							id="service"
							name="service"
							value={formData.service}
							onChange={handleChange}
							className="border-b-2 border-gray-300 focus:border-black outline-none px-2 w-64 md:w-96"
							placeholder="service name"
							required
						/>.
					</label>
				</div>
				{/* <div>
					<label htmlFor="budget" className="text-2xl md:text-4xl font-bold">
						My project budget
					</label>
					<div className="flex flex-wrap gap-4 mt-4">
						{['$1-5K', '$5-10K', '$10-20K', '$20-50K', '>50K'].map((option) => (
							<label key={option} className="inline-flex items-center cursor-pointer">
								<input
									type="radio"
									name="budget"
									value={option}
									checked={formData.budget === option}
									onChange={handleChange}
									className="sr-only"
								/>
								<span className={`px-4 py-2 rounded-full border ${formData.budget === option ? 'bg-green-500 text-white' : 'bg-white text-black'}`}>
									{option}
								</span>
							</label>
						))}
					</div>
				</div> */}
				<div>
					<label htmlFor="email" className="text-2xl md:text-4xl font-bold">
						Please, contact me at <input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="border-b-2 border-gray-300 focus:border-black outline-none px-2 w-64 md:w-96"
							placeholder="name@example.com"
							required
						/>.
					</label>
				</div>
				<div>
					<label htmlFor="details" className="text-2xl md:text-4xl font-bold">
						You can share more:
					</label>
					<textarea
						id="details"
						name="details"
						value={formData.details}
						onChange={handleChange}
						className="mt-4 w-full border-2 focus:border-black rounded-xl bg-background outline-none p-2 h-32"
						placeholder="Tell us something more about yourself..."
					/>
				</div>
				<RainbowButton type="submit">Send Request</RainbowButton>
			</form>
		</section>
	)
}

// "use client"

// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "../ui/button";

// const ContactSection = () => {
// 	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		// Handle form submission logic here
// 		console.log('Form submitted');
// 	};

// 	return (
// 		<section className="py-12">
// 			<div className="container mx-auto px-4">
// 				<h2 className="text-3xl font-bold text-center mb-8">Wanna talk about Freelance?</h2>
// 				<form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
// 					<div>
// 						<label htmlFor="fullname" className="block text-sm font-medium mb-1">Full Name</label>
// 						<Input id="fullname" placeholder="John Doe" required />
// 					</div>
// 					<div>
// 						<label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
// 						<Input id="email" type="email" placeholder="john@example.com" required />
// 					</div>
// 					<div>
// 						<label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
// 						<Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
// 					</div>
// 					<div>
// 						<label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
// 						<Textarea id="message" placeholder="Your message here..." className="min-h-[100px]" required />
// 					</div>
// 					<Button type="submit" className="w-full text-lg font-semibold">
// 						Send Message
// 					</Button>
// 				</form>
// 			</div>
// 		</section>
// 	);
// };

// export default ContactSection;