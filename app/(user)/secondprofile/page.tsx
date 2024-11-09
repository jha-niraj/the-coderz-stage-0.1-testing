"use client";

import { MapPin, Building2, Edit, Plus, Twitter, Instagram, MoreVertical, Github, Linkedin, Code, X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import SmoothScroll from "@/components/smoothscroll";
import Image from "next/image";
import userprofileImage from "./images/cartoon_type_user.jpeg";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import axios from "axios";
import { userData } from "@/actions/user.action";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";

const technicalSkills = [
    "JavaScript", "Python", "React", "Node.js", "TypeScript", "Angular", "Vue.js", "Java", "C++", "Ruby", "PHP", "Swift",
    "Kotlin", "Go", "Rust", "SQL", "MongoDB", "GraphQL", "Docker", "Kubernetes", "AWS", "Azure", "GCP", "TensorFlow",
    "PyTorch", "Scikit-learn", "Pandas", "NumPy", "R", "Tableau", "Power BI", "Git", "Jenkins", "Travis CI", "CircleCI"
];
const interestsSelection = [
    "Front-End Development",
    "Back-End Development",
    "Full Stack Development",
    "Mobile Development",
    "DevOps",
    "Cloud Computing",
    "Database Management",
    "UI/UX Design",
    "System Architecture",
    "API Development",
    "Cybersecurity",
    "Machine Learning",
    "Blockchain",
    "Quality Assurance"
];

export default function Home() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();
    const { data: session, status } = useSession();

    // Data Stores for all the fields
    const [publicDataOpen, setPublicDataOpen] = useState(false);
    const [publicData, setPublicData] = useState({
        tagline: '',
        college: '',
        location: '',
        github: '',
        linkedin: '',
        twitter: '',
        leetcode: '',
        website: ''
    });
    const [tempPersonalData, setTempPersonalData] = useState({ ...publicData });
    const [privateDataOpen, setPrivateDataOpen] = useState(false);
    const [privateData, setPrivateData] = useState({
        gender: 'Male',
        phone: '9503517330',
        yearOfBirth: '2002-01-14',
    });
    const [tempPrivateData, setTempPrivateData] = useState({ ...privateData });
    const [aboutMeOpen, setAboutMeOpen] = useState(false);
    const [aboutme, setAboutMe] = useState("");
    const [tempAboutMe, setTempAboutMe] = useState("");
    const [interestsOpen, setInterestsOpen] = useState(false);
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [tempSelectedInterests, setTempSelectedInterests] = useState([]);
    const [skillOpen, setSkillOpen] = useState(false);
    const [skills, setSkills] = useState([]);
    const [tempSkills, setTempSkills] = useState([]);
    const [selectedSkill, setSelectedSkill] = useState('');
    const [powOpen, setPoWOpen] = useState(false);
    const [proofOfWork, setProofOfWork] = useState([]);
    const [tempProofOfWork, setTempProofOfWork] = useState([]);

    useEffect(() => {
        const fetchedUserData = async () => {
            try {
                const response = await axios.get("/api/profile");
                const userData = response.data.data;
                setPublicData({
                    tagline: userData.tagline || '',
                    college: userData.college || '',
                    location: userData.location || '',
                    github: userData.github || '',
                    linkedin: userData.linkedin || '',
                    twitter: userData.twitter || '',
                    leetcode: userData.leetcode || '',
                    website: userData.website || ''
                })
                setAboutMe(userData.aboutme || '');
            } catch (err: any) {
                console.error('Error fetching user data:', err);
                toast({
                    title: "Error",
                    description: "Failed to fetch user information",
                    variant: "destructive",
                });
            }
        }

        fetchedUserData();
    }, [])

    const SocialButton = ({ href, icon: Icon }) => (
        href ? (
            <Link href={href} target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="outline">
                    <Icon className="h-4 w-4" />
                </Button>
            </Link>
        ) : (
            <Button size="icon" variant="outline" disabled>
                <Icon className="h-4 w-4" />
            </Button>
        )
    );

    // Input Change function for all sections:
    const handlePublicDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTempPersonalData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handlePrivateDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTempPrivateData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleAboutMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempAboutMe(e.target.value);
    };
    const handleAddSkill = (value) => {
        if (value && !tempSkills.includes(value)) {
            setTempSkills([...tempSkills, value]);
        }
        setSelectedSkill('');
    };
    const handleInterestChange = (interest) => {
        setTempSelectedInterests((current) => {
            if (current.includes(interest)) {
                return current.filter((item) => item !== interest);
            }
            return [...current, interest];
        });
    };
    const handleProofOfWorkChange = (index, field, value) => {
        const updatedPow = [...tempProofOfWork];
        updatedPow[index] = {
            ...updatedPow[index],
            [field]: value
        };
        setTempProofOfWork(updatedPow);
    };

    // Function to execute when the user click on the edit button on any section:
    const handleAboutMeEditClick = () => {
        setTempAboutMe(aboutme);
        setAboutMeOpen(true);
    };
    const handleInterestsEditClick = () => {
        setTempSelectedInterests([...selectedInterests]);
        setInterestsOpen(true);
    };
    const handleSkillEditClick = () => {
        setTempSkills([...skills]);
        setSkillOpen(true);
    };
    const handlePoWEditClick = () => {
        setTempProofOfWork([...proofOfWork]);
        setPoWOpen(true);
    };

    // Function to submit the data to the server:
    const handlePublicDataSubmit = async () => {
        setIsSubmitting(true);
        try {
            const response = await axios.post("/api/publicdata", tempPersonalData);
            if (!response) {
                console.log(response);
                return;
            }
            setPublicData({
                tagline: response.data.data.tagline,
                college: response.data.data.college,
                location: response.data.data.location,
                github: response.data.data.github,
                linkedin: response.data.data.linkedin,
                twitter: response.data.data.twitter,
                leetcode: response.data.data.leetcode,
                website: response.data.data.website
            });
            toast({
                title: "Success",
                description: response.data.msg,
            });
            setPublicDataOpen(false);
        } catch (err: any) {
            toast({
                title: "Error",
                description: "Failed to update profile",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    const handlePrivateDataSubmit = () => {
        setPrivateData({ ...tempPrivateData });
        setPrivateDataOpen(false);
    };
    const handleAboutMeSubmit = async () => {
        try {
            setIsSubmitting(true);
            const response = await axios.post("/api/aboutme", {
                tempAboutMe
            });
            if (!response) {
                console.log(response);
                return;
            }
            console.log(response);
            setAboutMe(response.data.aboutme);
            toast({
                title: "Success",
                description: response.data.msg,
            });
            setAboutMeOpen(false);
        } catch (err: any) {
            toast({
                title: "Error",
                description: "Failed to update profile",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }
    const handleInterestsSubmit = () => {
        setSelectedInterests(tempSelectedInterests);
        setInterestsOpen(false);
    };
    const handleSkillSubmit = () => {
        setSkills([...tempSkills]);
        setSkillOpen(false);
    };
    const handlePoWSubmit = () => {
        setProofOfWork([...tempProofOfWork]);
        setPoWOpen(false);
    };


    const handleRemoveSkill = (skillToRemove) => {
        setTempSkills(tempSkills.filter(skill => skill !== skillToRemove));
    };
    const handleAddPow = () => {
        setTempProofOfWork([...tempProofOfWork, {
            description: '',
            skills: [],
            link: ''
        }]);
    };
    const handleAddSkillToPow = (powIndex, skill) => {
        if (!tempProofOfWork[powIndex].skills.includes(skill)) {
            const updatedPow = [...tempProofOfWork];
            updatedPow[powIndex].skills = [...updatedPow[powIndex].skills, skill];
            setTempProofOfWork(updatedPow);
        }
    };
    const handleRemoveSkillFromPow = (powIndex, skillToRemove) => {
        const updatedPow = [...tempProofOfWork];
        updatedPow[powIndex].skills = updatedPow[powIndex].skills.filter(
            skill => skill !== skillToRemove
        );
        setTempProofOfWork(updatedPow);
    };

    return (
        <SmoothScroll>
            <main className="min-h-screen py-20">
                <div className="max-w-7xl mx-auto p-6">
                    <div className="grid md:grid-cols-[300px,1fr] gap-6">
                        <div className="space-y-6">
                            <div className="w-full flex flex-col items-center gap-4 md:items-start">
                                <div className="w-full flex justify-between">
                                    <Avatar className="h-48 w-48 rounded-full border-4 border-white shadow-lg mx-auto">
                                        <Image
                                            src={userprofileImage}
                                            alt="Profile"
                                            className="object-cover"
                                            width={192}
                                            height={192}
                                        />
                                    </Avatar>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setPublicDataOpen(true)}
                                        className=""
                                    >
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                </div>
                                <div className="flex-1 space-y-4 text-center md:text-left p-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-center dark:text-white">{session?.user?.name}</h2>
                                        <p className="text-gray-600 text-center">{publicData.tagline}</p>
                                        <div className="flex items-center">
                                            <Mail className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3" />
                                            <span className="text-gray-800 dark:text-gray-300">{session?.user?.email}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-gray-600 justify-center md:justify-start">
                                            <Building2 className="h-4 w-4" />
                                            <span>{publicData.college}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600 justify-center md:justify-start">
                                            <MapPin className="h-4 w-4" />
                                            <span>{publicData.location}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Social Links</h3>
                                        <div className="flex gap-2 justify-center md:justify-start">
                                            <SocialButton href={publicData.github} icon={Github} />
                                            <SocialButton href={publicData.linkedin} icon={Linkedin} />
                                            <SocialButton href={publicData.twitter} icon={Twitter} />
                                            <SocialButton href={publicData.leetcode} icon={Code} />
                                            <SocialButton href={publicData.website} icon={Code} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Sheet open={publicDataOpen} onOpenChange={setPublicDataOpen}>
                                <SheetContent
                                    side="right"
                                    className="w-full h-full sm:w-[80vw] md:w-[40vw] sm:max-w-[80vw] p-6 overflow-y-auto"
                                    style={{ maxWidth: '60vw' }}
                                >
                                    <SheetHeader>
                                        <SheetTitle>Edit Profile</SheetTitle>
                                    </SheetHeader>
                                    <div className="grid gap-6 py-4">
                                        <div className="">
                                            <Label htmlFor="tagline">tagline</Label>
                                            <Input
                                                id="tagline"
                                                name="tagline"
                                                value={tempPersonalData.tagline}
                                                onChange={handlePublicDataChange}
                                                placeholder="Enter your tagline"
                                            />
                                            <div className="text-xs text-gray-500 mt-1">
                                                Use this space to describe yourself in one line.
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <div>
                                                <Label htmlFor="college">College</Label>
                                                <Input
                                                    id="college"
                                                    name="college"
                                                    value={tempPersonalData.college}
                                                    onChange={handlePublicDataChange}
                                                    placeholder="Enter your headline"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="location">Location</Label>
                                                <Input
                                                    id="location"
                                                    name="location"
                                                    value={tempPersonalData.location}
                                                    onChange={handlePublicDataChange}
                                                    placeholder="Enter your headline"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid gap-2 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="github">GitHub</Label>
                                                <Input
                                                    id="github"
                                                    name="github"
                                                    value={tempPersonalData.github}
                                                    onChange={handlePublicDataChange}
                                                    placeholder="Enter your GitHub Profile"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="linkedin">LinkedIn</Label>
                                                <Input
                                                    id="linkedin"
                                                    name="linkedin"
                                                    value={tempPersonalData.linkedin}
                                                    onChange={handlePublicDataChange}
                                                    placeholder="Enter your LinkedIn Profile"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="twitter">Twitter</Label>
                                                <Input
                                                    id="twitter"
                                                    name="twitter"
                                                    value={tempPersonalData.twitter}
                                                    onChange={handlePublicDataChange}
                                                    placeholder="Enter your Twitter Profile"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="leetcode">LeetCode</Label>
                                                <Input
                                                    id="leetcode"
                                                    name="leetcode"
                                                    value={tempPersonalData.leetcode}
                                                    onChange={handlePublicDataChange}
                                                    placeholder="Enter your LeetCode Profile"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="website">Personal Website</Label>
                                                <Input
                                                    id="website"
                                                    name="website"
                                                    value={tempPersonalData.website}
                                                    onChange={handlePublicDataChange}
                                                    placeholder="Enter your personal website URL"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex justify-end gap-3 mt-6">
                                            <Button variant="outline" onClick={() => setPublicDataOpen(false)}>
                                                Cancel
                                            </Button>
                                            <Button onClick={handlePublicDataSubmit}>
                                                {
                                                    isSubmitting ? "Updating" : "Save Changes"
                                                }
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>

                            {/* Private Data Section */}
                            <Card className="bg-sky-100 p-4">
                                <Sheet open={privateDataOpen} onOpenChange={setPrivateDataOpen}>
                                    <SheetTrigger asChild>
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-semibold mb-4">Private Info</h3>
                                            <Button variant="ghost" size="icon">
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </SheetTrigger>
                                    <SheetContent
                                        side="right"
                                        className="w-full h-full sm:w-[80vw] md:w-[40vw] sm:max-w-[80vw] p-6 overflow-y-auto"
                                        style={{ maxWidth: '60vw' }}
                                    >
                                        <SheetHeader>
                                            <SheetTitle>Edit Private Info</SheetTitle>
                                        </SheetHeader>
                                        <div className="grid gap-6 py-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="gender">Gender</Label>
                                                <Input
                                                    id="gender"
                                                    name="gender"
                                                    value={privateData.gender}
                                                    onChange={handlePrivateDataChange}
                                                    placeholder="Enter your gender"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone</Label>
                                                <Input
                                                    id="phone"
                                                    name="phone"
                                                    value={privateData.phone}
                                                    onChange={handlePrivateDataChange}
                                                    placeholder="Enter your phone number"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="yearOfBirth">Year of Birth</Label>
                                                <Input
                                                    id="yearOfBirth"
                                                    name="yearOfBirth"
                                                    value={privateData.yearOfBirth}
                                                    onChange={handlePrivateDataChange}
                                                    placeholder="Enter your year of birth"
                                                />
                                            </div>
                                            <div className="flex justify-end gap-3 mt-6">
                                                <Button variant="outline" onClick={() => setPrivateDataOpen(false)}>
                                                    Cancel
                                                </Button>
                                                <Button onClick={handlePrivateDataSubmit}>
                                                    Save Changes
                                                </Button>
                                            </div>
                                        </div>
                                    </SheetContent>
                                </Sheet>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Gender</span>
                                        <span>{privateData.gender || "Add"}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Phone</span>
                                        <span>{privateData.phone}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Year of birth</span>
                                        <span>{privateData.yearOfBirth || "Add"}</span>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div className="space-y-6">
                            {/* About Me Section */}
                            <Card className="p-3 flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold">About Me</h3>
                                    <Button variant="ghost" size="icon" onClick={handleAboutMeEditClick}>
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                </div>
                                {
                                    aboutme ? (
                                        <p className="font-semibold">{aboutme}</p>
                                    ) : (
                                        <p>Please update this section</p>
                                    )
                                }
                            </Card>
                            <Sheet open={aboutMeOpen} onOpenChange={setAboutMeOpen}>
                                <SheetContent
                                    side="right"
                                    className="w-full h-full sm:w-[80vw] md:w-[40vw] sm:max-w-[80vw] p-6 overflow-y-auto"
                                    style={{ maxWidth: '60vw' }}
                                >
                                    <SheetHeader>
                                        <SheetTitle>Edit About Me</SheetTitle>
                                    </SheetHeader>
                                    <div className="grid gap-6 py-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="bio">Bio</Label>
                                            <Input
                                                id="bio"
                                                name="bio"
                                                value={tempAboutMe}
                                                onChange={handleAboutMeChange}
                                                placeholder="Enter your bio"
                                            />
                                        </div>
                                        <div className="flex justify-end gap-3 mt-6">
                                            <Button variant="outline" onClick={() => setAboutMeOpen(false)}>
                                                Cancel
                                            </Button>
                                            <Button onClick={handleAboutMeSubmit}>
                                                {
                                                    isSubmitting ? "Updating" : "Save Changes"
                                                }
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>

                            {/* Interests Section */}
                            <Card className="p-3 flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold">Technical Interests</h3>
                                    <Button variant="ghost" size="icon" onClick={handleInterestsEditClick}>
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                </div>
                                {selectedInterests.length > 0 ? (
                                    <div className="flex flex-wrap gap-2">
                                        {selectedInterests.map((interest) => (
                                            <span
                                                key={interest}
                                                className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
                                            >
                                                {interest}
                                            </span>
                                        ))}
                                    </div>
                                ) : (
                                    <p>Please select your technical interests</p>
                                )}
                            </Card>
                            <Sheet open={interestsOpen} onOpenChange={setInterestsOpen}>
                                <SheetContent
                                    side="right"
                                    className="w-full h-full sm:w-[80vw] md:w-[40vw] sm:max-w-[80vw] p-6 overflow-y-auto"
                                    style={{ maxWidth: '60vw' }}
                                >
                                    <SheetHeader>
                                        <SheetTitle>Edit Technical Interests</SheetTitle>
                                    </SheetHeader>
                                    <div className="grid gap-6 py-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {interestsSelection.map((interest) => (
                                                <div key={interest} className="flex items-center space-x-2">
                                                    <Checkbox
                                                        id={interest}
                                                        checked={tempSelectedInterests.includes(interest)}
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
                                        <div className="flex justify-end gap-3 mt-6">
                                            <Button variant="outline" onClick={() => setInterestsOpen(false)}>
                                                Cancel
                                            </Button>
                                            <Button onClick={handleInterestsSubmit}>
                                                Save Changes
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>

                            {/* Skill Choose Section */}
                            <Card className="p-3">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="font-semibold">Skills</h3>
                                    <Button variant="ghost" size="icon" onClick={handleSkillEditClick}>
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {skills.map((skill, index) => (
                                        <Badge key={index} variant="outline">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </Card>
                            <Sheet open={skillOpen} onOpenChange={setSkillOpen}>
                                <SheetContent
                                    side="right"
                                    className="w-full h-full sm:w-[80vw] md:w-[40vw] sm:max-w-[80vw] p-6 overflow-y-auto"
                                    style={{ maxWidth: '60vw' }}
                                >
                                    <SheetHeader>
                                        <SheetTitle>Edit Skills</SheetTitle>
                                    </SheetHeader>
                                    <div className="grid gap-6 py-4">
                                        <div className="space-y-4">
                                            <Label>Your Skills</Label>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {tempSkills.map((skill, index) => (
                                                    <Badge key={index} className="flex items-center gap-1">
                                                        {skill}
                                                        <button
                                                            onClick={() => handleRemoveSkill(skill)}
                                                            className="ml-1 hover:text-red-500"
                                                        >
                                                            <X className="h-3 w-3" />
                                                        </button>
                                                    </Badge>
                                                ))}
                                            </div>
                                            <Select
                                                value={selectedSkill}
                                                onValueChange={handleAddSkill}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a skill" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {technicalSkills
                                                        .filter(skill => !tempSkills.includes(skill))
                                                        .map((skill) => (
                                                            <SelectItem key={skill} value={skill}>
                                                                {skill}
                                                            </SelectItem>
                                                        ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="flex justify-end gap-3 mt-6">
                                            <Button variant="outline" onClick={() => setSkillOpen(false)}>
                                                Cancel
                                            </Button>
                                            <Button onClick={handleSkillSubmit}>
                                                Save Changes
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>

                            {/* Proof Of Work Section */}
                            <Card className="p-3">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-semibold">Proof of Work</h3>
                                    <Button onClick={handlePoWEditClick}>
                                        <Plus className="h-4 w-4 mr-2" />
                                        Add PoW
                                    </Button>
                                </div>

                                {proofOfWork.map((pow, index) => (
                                    <Card key={index} className="p-4 bg-blue-50 border-blue-100 mb-4">
                                        <div className="flex justify-between">
                                            <div className="w-full">
                                                <p className="mb-2">{pow.description}</p>
                                                <div className="flex gap-2 w-full justify-between">
                                                    <div className="flex items-center gap-2 flex-wrap">
                                                        {pow.skills.map((skill, skillIndex) => (
                                                            <Badge key={skillIndex}>{skill}</Badge>
                                                        ))}
                                                    </div>
                                                    <Link href={pow.link}>
                                                        <Button>View</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </Card>
                            <Sheet open={powOpen} onOpenChange={setPoWOpen}>
                                <SheetContent
                                    side="right"
                                    className="w-full h-full sm:w-[80vw] md:w-[40vw] sm:max-w-[80vw] p-6 overflow-y-auto"
                                    style={{ maxWidth: '60vw' }}
                                >
                                    <SheetHeader>
                                        <SheetTitle>Edit Proof of Work</SheetTitle>
                                    </SheetHeader>
                                    <div className="grid gap-6 py-4">
                                        <Button onClick={handleAddPow} className="w-full">
                                            <Plus className="h-4 w-4 mr-2" />
                                            Add New Project
                                        </Button>

                                        {tempProofOfWork.map((pow, index) => (
                                            <div key={index} className="space-y-2 flex flex-col gap-4">
                                                <div>
                                                    <Label htmlFor={`pow-description-${index}`}>Description</Label>
                                                    <Input
                                                        id={`pow-description-${index}`}
                                                        value={pow.description}
                                                        onChange={(e) => handleProofOfWorkChange(index, 'description', e.target.value)}
                                                        placeholder="Enter proof of work description"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Skills</Label>
                                                    <div className="flex flex-wrap gap-2 mb-2">
                                                        {pow.skills.map((skill, skillIndex) => (
                                                            <Badge key={skillIndex} className="flex items-center gap-1">
                                                                {skill}
                                                                <button
                                                                    onClick={() => handleRemoveSkillFromPow(index, skill)}
                                                                    className="ml-1 hover:text-red-500"
                                                                >
                                                                    <X className="h-3 w-3" />
                                                                </button>
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                    <Select
                                                        onValueChange={(value) => handleAddSkillToPow(index, value)}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select a skill" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {technicalSkills
                                                                .filter(skill => !pow.skills.includes(skill))
                                                                .map((skill) => (
                                                                    <SelectItem key={skill} value={skill}>
                                                                        {skill}
                                                                    </SelectItem>
                                                                ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div>
                                                    <Label htmlFor={`pow-link-${index}`}>Project URL</Label>
                                                    <Input
                                                        id={`pow-link-${index}`}
                                                        value={pow.link}
                                                        onChange={(e) => handleProofOfWorkChange(index, 'link', e.target.value)}
                                                        placeholder="Enter the Github or Live link"
                                                    />
                                                </div>
                                            </div>
                                        ))}

                                        <div className="flex justify-end gap-3 mt-6">
                                            <Button variant="outline" onClick={() => setPoWOpen(false)}>
                                                Cancel
                                            </Button>
                                            <Button onClick={handlePoWSubmit}>
                                                Save Changes
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </main>
        </SmoothScroll>
    );
}