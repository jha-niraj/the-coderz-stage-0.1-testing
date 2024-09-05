"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/app/lib/utils";
import {
	IconBrandGithub,
	IconBrandGoogle,
	IconBrandOnlyfans,
} from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignUpForm() {
	const [ signUp, setSignUp ] = useState({
        name: "",
        email: "",
        password: ""
    })

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Form submitted");
	};
	return (
		<div className="flex flex-col bg-black text-white h-screen gap-2 pt-6 items-center justify-center">
                <h1 className="relative z-10 text-md text-3xl w-[85%] sm:w-[65%] md:w-[50%] lg:w-[30%] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Welcome, please sign up
                </h1>
                <div className="flex flex-col p-5 rounded-lg gap-5 w-[85%] sm:w-[65%] md:w-[50%] lg:w-[30%]">
                    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <label className="text-md font-medium" htmlFor="name">Full Name</label>
                            <Input type="text" id="name" placeholder="John Doe" onChange={(e: any) => setSignUp(c => ({
                                ...c,
                                name: e.target.value
                            }))} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-md font-medium">Username</label>
                            <Input type="text" placeholder="user1@gmail.com" onChange={(e: any) => setSignUp(c => ({
                                ...c,
                                email: e.target.value
                            }))} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-md font-medium">Password</label>
                            <Input type="password" placeholder="********" onChange={(e: any) => setSignUp(c => ({
                                ...c,
                                password: e.target.value
                            }))} />
                        </div>
                        <Button type="submit" className="w-full">Sign In</Button>
                    </form>

                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />

                    <div className="flex flex-col sm:flex-row gap-2">
                        <button
                            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                            type="submit"
                        >
                            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                Google
                            </span>
                            <BottomGradient />
                        </button>
                        <button
                            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                            type="submit"
                        >
                            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                GitHub
                            </span>
                            <BottomGradient />
                        </button>
                    </div>

                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />

                    <div className="text-center">
                        <div className="text-sm text-white w-full flex gap-2 items-center justify-center">
                            <h1 className="text-sm font-medium">Already have an account?</h1>
                            <Link href="/signin" className="font-medium text-sm text-sky-600 hover:text-indigo-500">
                                Sign in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
			<span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
		</>
	);
};

const LabelInputContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};
