'use client'

import { useState } from 'react';
import { RainbowButton } from '../ui/rainbow-button';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';

interface FormStatus {
	message: String;
	type: "success" | "error" | ""
}
export default function ContactSection() {
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		name: '',
		skill: '',
		yearofstudy: '',
		email: '',
		details: ''
	})
	const [status, setStatus] = useState<FormStatus>({
		message: '',
		type: ''
	})
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setStatus({ message: '', type: '' });

		try {
			const response = await axios.post('/api/contact', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response.status === 200 || response.status === 201) {
				setStatus({
					message: 'Thank you for your interest! We\'ll get back to you soon.',
					type: 'success'
				});
				setFormData({
					name: '',
					skill: '',
					yearofstudy: '',
					email: '',
					details: ''
				});

				toast({
					title: "Form Submitted Successfully",
					description: "Thank you for reaching out! We will contact you soon.",
				});
			} else {
				setStatus({
					message: response.data.error || 'Something went wrong. Please try again.',
					type: 'error'
				});
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				setStatus({
					message: error.response?.data?.error || 'Failed to submit form. Please try again.',
					type: 'error'
				});
			} else {
				setStatus({
					message: 'Failed to submit form. Please try again.',
					type: 'error'
				});
			}
		} finally {
			setIsSubmitting(false);
		}
	};

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
						/> and I&apos;m proficient in
						<input
							type="text"
							id="skill"
							name="skill"
							value={formData.skill}
							onChange={handleChange}
							className="border-b-2 border-gray-300 focus:border-black outline-none px-2"
							placeholder="Full Stack Development, Video Editing"
							required
						/>.
					</label>
				</div>
				<div>
					<label htmlFor="yearofstudy" className="text-2xl md:text-4xl font-bold">
						I am studying in <input
							type="text"
							id="yearofstudy"
							name="yearofstudy"
							value={formData.yearofstudy}
							onChange={handleChange}
							className="border-b-2 border-gray-300 focus:border-black outline-none px-2 w-64 md:w-96"
							placeholder="1st Year"
							required
						/>.
					</label>
				</div>
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
				<RainbowButton type="submit">
					{
						isSubmitting ? "Submitting, Please wait..." : "Submit"
					}
				</RainbowButton>
			</form>
		</section>
	)
}