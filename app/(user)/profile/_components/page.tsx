"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Edit, Book, Github, Twitter, Code, Award, Clock, Star, Globe, Brain, Smartphone, BarChart3, Zap, Linkedin, X } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import SmoothScroll from '@/components/smoothscroll'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from '@/components/ui/checkbox'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { RainbowButton } from '@/components/ui/rainbow-button'

const MotionCard = motion(Card)

const technicalSkills = [
    "JavaScript", "Python", "React", "Node.js", "TypeScript", "Angular", "Vue.js", "Java", "C++", "Ruby", "PHP", "Swift",
    "Kotlin", "Go", "Rust", "SQL", "MongoDB", "GraphQL", "Docker", "Kubernetes", "AWS", "Azure", "GCP", "TensorFlow",
    "PyTorch", "Scikit-learn", "Pandas", "NumPy", "R", "Tableau", "Power BI", "Git", "Jenkins", "Travis CI", "CircleCI"
];
const interestsSelection = [
    "Full Stack Development",
    "Front-End Development",
    "Back-End Development",
    "Data Science",
    "Cyber Security",
    "Machine Learning"
];

export default function StudentProfile() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [initialState, setInitialState] = useState({
        socialHandles: {
            github: "",
            linkedin: "",
            twitter: "",
            leetcode: "",
            website: ""
        },
        selectedSkills: [""],
        selectedInterests: [""],
        aboutme: ""
    });

    const [socialHandles, setSocialHandles] = useState(initialState.socialHandles);
    const [selectedSkills, setSelectedSkills] = useState(initialState.selectedSkills);
    const [selectedInterests, setSelectedInterests] = useState(initialState.selectedInterests);
    const [aboutme, setAboutMe] = useState(initialState.aboutme);
    const [ dialogOpen, setDialogOpen ] = useState(false);

    useEffect(() => {
        const fetchedUserData = async () => {
            try {
                const response = await axios.get("/api/profile");
                const userData = response.data.data;
                setInitialState({
                    aboutme: userData.aboutme || '',
                    socialHandles: {
                        github: userData.github || '',
                        linkedin: userData.linkedin || '',
                        twitter: userData.twitter || '',
                        leetcode: userData.leetcode || '',
                        website: userData.website || '',
                    },
                    selectedSkills: userData.skills || [],
                    selectedInterests: userData.interests || [],
                });
                setAboutMe(userData.aboutme || '');
                setSocialHandles({
                    github: userData.github || '',
                    linkedin: userData.linkedin || '',
                    twitter: userData.twitter || '',
                    leetcode: userData.leetcode || '',
                    website: userData.website || '',
                });
                setSelectedSkills(userData.skills || []);
                setSelectedInterests(userData.interests || []);
            } catch (err: any) {
                console.error('Error fetching user data:', err);
                toast.error("Error while fetching user details");
            }
        }

        fetchedUserData();
    }, [])

    const handleSocialChange = (platform: keyof typeof socialHandles, value: string) => {
        setSocialHandles(prev => ({ ...prev, [platform]: value }))
    }

    const hasChanges = (current: any, initial: any): boolean => {
        if (typeof current !== typeof initial) return true;
        if (typeof current !== 'object') return current !== initial;
        if (Array.isArray(current)) {
            if (current.length !== initial.length) return true;
            return current.some((item, index) => hasChanges(item, initial[index]));
        }
        for (const key in current) {
            if (hasChanges(current[key], initial[key])) return true;
        }
        return false;
    };

    const handleSaveChanges = async () => {
        const changedData: Partial<typeof initialState> = {};

        if (hasChanges(socialHandles, initialState.socialHandles)) {
            changedData.socialHandles = socialHandles;
        }
        if (hasChanges(selectedSkills, initialState.selectedSkills)) {
            changedData.selectedSkills = selectedSkills;
        }
        if (hasChanges(selectedInterests, initialState.selectedInterests)) {
            changedData.selectedInterests = selectedInterests;
        }
        if (hasChanges(aboutme, initialState.aboutme)) {
            changedData.aboutme = aboutme;
        }
        console.log(changedData);

        if (Object.keys(changedData).length > 0) {
            try {
                const response = await axios.put('/api/update-profile', changedData);
                toast.success("Profile updated successfully");
                setDialogOpen(c => !c);
                setInitialState(prev => ({ ...prev, ...changedData }));
            } catch (error) {
                console.error('Error updating profile:', error);
            }
        } else {
            toast.error("Please update something!!!")
        }
    }

    const handleSkillChange = (skill: string) => {
        setSelectedSkills(prev =>
            prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
        )
    }

    const handleInterestChange = (interest: string) => {
        setSelectedInterests(prev =>
            prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
        )
    }

    const renderSocialIcon = (platform: string) => {
        switch (platform) {
            case 'github':
                return <Github className="h-6 w-6 text-white" />
            case 'linkedin':
                return <Linkedin className="h-6 w-6 text-blue-200" />
            case 'twitter':
                return <X className="h-6 w-6 text-blue-100" />
            case 'leetcode':
                return <Code className="h-6 w-6 text-yellow-500" />
            case 'website':
                return <Award className="h-6 w-6 text-green-500" />
            default:
                return null
        }
    }

    const handleSave = () => {
        console.log("Settings saved")
    }

    const handleAccountDelete = async () => {

    }

    if (status === "loading") {
        return <div className="flex justify-center items-center h-screen bg-black text-white">Loading...</div>
    }

    if (status === "unauthenticated") {
        router.push("/signin")
        return null;
    }

    return (
        <SmoothScroll>
            <Toaster />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 text-black dark:text-white p-4 sm:p-6 lg:p-8 py-8 w-[90%] mx-auto"
            >
                <div className="flex justify-between items-start sm:items-center mb-6">
                    <h1 className="text-3xl font-bold mb-4 sm:mb-0">
                        Your Profile
                    </h1>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                className="flex items-center bg-white hover:bg-black text-black hover:text-white"
                            >
                                <Edit className="h-4 w-4 mr-2" />
                                Edit Profile
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="w-[80vw] h-[80vh] max-w-none max-h-none bg-black dark:bg-white text-white dark:text-black overflow-hidden flex flex-col">
                            <DialogHeader className="flex justify-between w-full">
                                <DialogTitle className="text-2xl font-bold">Edit Profile</DialogTitle>
                            </DialogHeader>
                            <div className="flex-grow overflow-y-auto px-6 w-full">
                                <div className="flex flex-col lg:flex-row gap-6 py-4 w-full">
                                    <div className="w-full lg:w-1/2">
                                        <h3 className="text-xl font-semibold mb-4">About me</h3>
                                        <div className="grid gap-4">
                                            <textarea
                                                rows={10}
                                                cols={30}
                                                className="border-2 border-black text-black dark:text-white rounded-lg p-4"
                                                onChange={(e) => setAboutMe(e.target.value)}
                                                value={aboutme}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2">
                                        <h3 className="text-xl font-semibold mb-4">Social Media Handles</h3>
                                        <div className="flex flex-col gap-4">
                                            {
                                                Object.entries(socialHandles).map(([platform, handle]) => (
                                                    <div key={platform} className="flex flex-col w-full items-center justify-center lg:flex-row gap-2">
                                                        <Label htmlFor={platform} className="text-left text-black w-20">
                                                            {platform.charAt(0).toUpperCase() + platform.slice(1)}
                                                        </Label>
                                                        <Input
                                                            id={platform}
                                                            value={handle}
                                                            onChange={(e) => handleSocialChange(platform as keyof typeof socialHandles, e.target.value)}
                                                            className="bg-gray-800 text-white w-[99%]"
                                                        />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between w-full lg:w-1/2">
                                        <div className="w-full flex flex-col gap-2">
                                            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                                            <div className="flex justify-between gap-4">
                                                <div className="w-full">
                                                    <Select onValueChange={handleSkillChange}>
                                                        <SelectTrigger className="col-span-3 bg-gray-800 text-white">
                                                            <SelectValue placeholder="Select a skill" />
                                                        </SelectTrigger>
                                                        <SelectContent className="bg-gray-800 text-white">
                                                            {technicalSkills.map((skill) => (
                                                                <SelectItem key={skill} value={skill} className="cursor-pointer">
                                                                    {skill}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="flex flex-col flex-wrap gap-2 w-[50%]">
                                                    {selectedSkills.map((skill) => (
                                                        <Badge key={skill} variant="secondary" className="flex justify-between hover:bg-black bg-sky-600 text-white">
                                                            {skill}
                                                            <button
                                                                onClick={() => handleSkillChange(skill)}
                                                                className="ml-2 text-xs"
                                                                aria-label={`Remove ${skill} skill`}
                                                            >
                                                                ×
                                                            </button>
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="text-xl font-semibold mb-4">Interests</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {interestsSelection.map((interest) => (
                                                    <div key={interest} className="flex items-center space-x-2">
                                                        <Checkbox
                                                            id={interest}
                                                            checked={selectedInterests.includes(interest)}
                                                            onCheckedChange={() => handleInterestChange(interest)}
                                                            className="ring-2"
                                                        />
                                                        <label
                                                            htmlFor={interest}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {interest}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end px-6 py-4 bg-black border-t border-gray-700">
                                <RainbowButton onClick={handleSaveChanges}>Save all changes</RainbowButton>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="space-y-6">
                    <MotionCard
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-full shadow-lg text-black dark:text-white"
                    >
                        <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="flex flex-col items-center justify-center md:w-[30%]"
                                >
                                    <Avatar className="h-32 w-32 mb-4 hover:scale-110 transition-all">
                                        <AvatarImage src={session?.user?.image!} alt="Student" />
                                        <AvatarFallback className="font-bold text-white text-4xl">{session?.user?.name?.slice(0, 1)}</AvatarFallback>
                                    </Avatar>
                                    <h2 className="text-2xl font-bold text-center dark:text-white">{session?.user?.name}</h2>
                                    <p className="text-gray-600 dark:text-gray-400 text-center mb-4">Computer Science Student</p>
                                    <div className="flex items-center">
                                        <Mail className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3" />
                                        <span className="text-gray-800 dark:text-gray-300">{session?.user?.email}</span>
                                    </div>
                                    <div className="flex mt-4 space-x-4">
                                        {Object.entries(socialHandles).map(([platform, handle]) => (
                                            <a
                                                key={platform}
                                                href={`${handle}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`p-2 rounded-full ${handle ? "bg-black hover:bg-gray-500 rounded-lg p-2" : "bg-gray-700 cursor-not-allowed"} transition-colors duration-200`}
                                                aria-label={`${platform} profile`}
                                            >
                                                {renderSocialIcon(platform)}
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>
                                <Separator orientation="vertical" className="hidden md:block" />
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="md:w-[40%]"
                                >
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">About Me</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                                            {
                                                aboutme || "Please update about yourself"
                                            }
                                        </p>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-4">Interests</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {
                                            selectedInterests ?
                                                    selectedInterests.map((interest, index) => (
                                                        <motion.div
                                                            key={interest}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                                            className="group relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 hover:shadow-xl"
                                                        >
                                                            <div className="absolute inset-0 bg-blue-500 dark:bg-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                                                            <div className="relative p-4 flex items-center justify-start">
                                                                <h4 className="text-sm font-semibold">{interest}</h4>
                                                            </div>
                                                            <div className="absolute bottom-0 left-0 h-1 w-full bg-blue-500 dark:bg-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                                                        </motion.div>
                                                    ))
                                                :
                                                    <div>
                                                        <p>Please update this section</p>
                                                    </div>
                                        }
                                    </div>
                                </motion.div>
                                <Separator orientation="vertical" className="hidden md:block" />
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="md:w-[30%] flex flex-col gap-12"
                                >
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="flex flex-wrap gap-2"
                                        >
                                            {
                                                selectedSkills ? 
                                                        selectedSkills.map((skill) => (
                                                            <Badge key={skill} variant="secondary" className="bg-white w-[45%] flex items-center justify-center text-black hover:bg-sky-500 hover:text-white cursor-pointer">
                                                                {skill || "Please update the skill section"}
                                                            </Badge>
                                                        ))
                                                    :
                                                        <div>
                                                            <p>Please update the technical section</p>
                                                        </div>
                                            }

                                        </motion.div>
                                    </div>
                                    <div className="">
                                        <h3 className="text-xl font-semibold mb-4">Your Resume</h3>
                                        <p className="bg-yellow-400 dark:text-black p-4 rounded-lg">
                                            We are working on integrating this, so that anyone can look up your resume and you can showcase your resume to others...
                                        </p>
                                    </div>

                                </motion.div>
                            </div>
                        </CardContent>
                    </MotionCard>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="">Security Settings</CardTitle>
                                <CardDescription className="text-gray-800 dark:text-gray-300">Manage your account security</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="current-password" className="">Current Password</Label>
                                    <Input id="current-password" placeholder='Current Password' type="password" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="new-password" className="">New Password</Label>
                                    <Input id="new-password" placeholder='New Password' type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button onClick={handleSave} className="ml-auto">Save All Changes</Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="">Danger Zone</CardTitle>
                                <CardDescription className="text-gray-800 dark:text-gray-300">Irreversible account actions</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2">
                                    <Label>Delete Account</Label>
                                    <p className="text-sm text-gray-800 dark:text-gray-300">Once you delete your account, there is no going back. Please be certain.</p>                                    <Dialog>
                                        <DialogTrigger>
                                            <Button variant="destructive">Delete My Account</Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <h1>Are you sure you want to delete this account?</h1>
                                            <div className="flex gap-2 justify-end items-end">
                                                <Button variant="destructive" onClick={handleAccountDelete}>Delete</Button>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </motion.div>
        </SmoothScroll>
    )
}