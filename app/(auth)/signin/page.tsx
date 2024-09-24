"use client";

import SignInForm from "./_components/signinform";
import { Toaster } from "react-hot-toast";

export default function SignIn() {
    
    return (
        <div className="w-full">
            <Toaster />
            <SignInForm />
        </div>
    );
}