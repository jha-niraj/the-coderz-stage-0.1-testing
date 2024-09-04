import { NextAuthConfig } from "@/auth";
import nextAuth from "next-auth";
import NextAuth from "next-auth/next";

const handler = NextAuth( NextAuthConfig );

export {
    handler as GET,
    handler as POST
}