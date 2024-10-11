"use client"

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";

const ContactSection = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log('Form submitted');
	};

	return (
		<section className="py-12">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-8">Wanna talk about Freelance?</h2>
				<form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
					<div>
						<label htmlFor="fullname" className="block text-sm font-medium mb-1">Full Name</label>
						<Input id="fullname" placeholder="John Doe" required />
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
						<Input id="email" type="email" placeholder="john@example.com" required />
					</div>
					<div>
						<label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
						<Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
					</div>
					<div>
						<label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
						<Textarea id="message" placeholder="Your message here..." className="min-h-[100px]" required />
					</div>
					<Button type="submit" className="w-full text-lg font-semibold">
						Send Message
					</Button>
				</form>
			</div>
		</section>
	);
};

export default ContactSection;