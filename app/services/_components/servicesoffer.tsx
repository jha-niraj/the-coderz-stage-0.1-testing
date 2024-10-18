"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Image, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Video Editing',
        description: 'Professional video editing to make your content stand out.',
        icon: Video,
    },
    {
        title: 'Thumbnail Creation',
        description: 'Eye-catching thumbnails for YouTube and Instagram to boost engagement.',
        icon: Image,
    },
    {
        title: 'Web Development',
        description: 'Custom web development and design to elevate your online presence.',
        icon: Code,
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-secondary/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-3xl font-extrabold text-center text-foreground mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Our Services
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="bg-card hover:shadow-lg transition-shadow duration-300 h-full">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                        <service.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{service.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;