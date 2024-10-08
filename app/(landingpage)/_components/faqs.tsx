"use client"

import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordion";

const FaqsAccrodian = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full mx-auto mt-20 mb-16"
        >
            <h2 className="text-2xl mb-2 font-bold text-center underline">FAQ&apos;s - You have the questions?</h2>
            <p className="text-md font-small mb-6 text-center">We have got the answer</p>
            <Accordion type="single" collapsible className="rounded-lg flex flex-col gap-1">
                <AccordionItem value="item-1" style={{ backgroundColor: "#07353D" }} className="rounded-lg">
                    <AccordionTrigger className="text-left px-6">
                        How do I get started with TechEd?
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                        Getting started is easy! Simply sign up for an account, browse our course catalog, and enroll in any course that interests you. You can begin learning immediately after enrollment.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" style={{ backgroundColor: "#1C7B8C" }}  className="bg-gray-600 rounded-lg">
                    <AccordionTrigger className="text-left px-6">
                        What types of courses does TechEd offer?
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                        TechEd offers a wide range of tech-focused courses, including web development, mobile app development, data science, machine learning, cybersecurity, and more. Our courses cater to beginners, intermediate learners, and advanced professionals.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" style={{ backgroundColor: "#07353D" }} className="bg-gray-600 rounded-lg">
                    <AccordionTrigger className="text-left px-6">
                        Are the certifications recognized in the industry?
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                        Yes, our certifications are widely recognized in the tech industry. We partner with leading companies and organizations to ensure our certifications meet industry standards and are valued by employers.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" style={{ backgroundColor: "#1C7B8C" }} className="bg-gray-600 rounded-lg">
                    <AccordionTrigger className="text-left px-6">
                        How does the mentorship program work?
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                        Our mentorship program connects you with experienced professionals in your field of interest. You can schedule one-on-one sessions, get personalized advice, and receive guidance on your projects and career path. Mentorship is available as part of our premium subscription plans.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" style={{ backgroundColor: "#07353D" }} className="bg-gray-600 rounded-lg">
                    <AccordionTrigger className="text-left px-6">
                        Can I access course materials offline?
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                        Yes, many of our courses offer downloadable materials that you can access offline. This includes lecture notes, exercises, and some video content. However, interactive elements and assessments typically require an internet connection.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </motion.div>
    )
}

export default FaqsAccrodian;