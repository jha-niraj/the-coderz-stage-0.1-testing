"use client"

import { useState } from "react";
import { motion } from "framer-motion";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from "../ui/button";
import { Facebook, Linkedin, LinkIcon, Twitter } from "lucide-react";
import supportsectionimage from "@/public/images/support-section-image.jpg";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

const SupportSection = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleShare = (platform: string) => {
        const tweetText = encodeURIComponent("Hello guys, I have been using this platform for 1 month and I have found this very helpful. Visit this platform for all the resources related to computer science and follow their Instagram and newsletter to remain updated every day.");
        const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=https://yourwebsite.com`; // Replace with your website URL

        const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=https://yourwebsite.com&title=Support Our Mission&summary=Help us empower more developers by sharing our platform. Together, we can build a stronger coding community.`; // Replace with your website URL

        if (platform === 'Twitter') {
            window.open(tweetUrl, '_blank');
        } else if (platform === 'LinkedIn') {
            window.open(linkedInUrl, '_blank');
        } else {
            console.log(`Sharing to ${platform}`);
        }
    };

    const copyLink = () => {
        navigator.clipboard.writeText("https://yourwebsite.com");
        toast.success("Website URL copied")
    };

    return (
        <section className="text-white w-[90%] rounded-lg py-20">
            <Toaster />
            <div className="mx-auto px-4 w-full flex flex-col md:flex-row items-center justify-around">
                <div className="flex flex-col items-center justify-center md:items-start mb-8 md:mb-0">
                    <motion.h2
                        className="text-4xl font-bold mb-6 text-center md:text-left"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Support Our Mission
                    </motion.h2>
                    <motion.p
                        className="text-xl mb-8 text-center md:text-left"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Help us empower more developers by sharing our platform. Together, we can build a stronger coding community.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-auto flex justify-center w-full md:justify-start"
                    >
                        <button onClick={() => setIsDialogOpen(c => !c)} className="shadow-[0_0_0_3px_#000000_inset] text-white px-6 py-2 bg-transparent border border-white dark:border-white dark:text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                            Support Us
                        </button>
                    </motion.div>
                </div>
                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Image
                            src={supportsectionimage}
                            alt="Support Us"
                            width={600}
                            height={600}
                            className="rounded-lg"
                        />
                    </motion.div>
                </div>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Share our platform</DialogTitle>
                        <DialogDescription>
                            Help us grow by sharing our platform on your favorite social media.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-center space-x-4 my-4">
                        {[
                            { icon: Twitter, name: 'Twitter' },
                            { icon: Linkedin, name: 'LinkedIn' },
                        ].map((platform, index) => (
                            <motion.button
                                key={index}
                                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300"
                                onClick={() => handleShare(platform.name)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <platform.icon className="w-6 h-6" />
                            </motion.button>
                        ))}
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <Button onClick={copyLink} className="flex items-center space-x-2">
                            <LinkIcon className="w-4 h-4" />
                            <span>Copy Link</span>
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default SupportSection;