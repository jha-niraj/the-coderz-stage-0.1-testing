"use client";

import SignUpForm from "./_components/registerform";
import { Toaster } from "react-hot-toast";

export default function SignUp() {
    

    return (
        <div>
            <Toaster />
            <SignUpForm />
        </div>
    );
}
