import CredentialsProvider from "next-auth/providers/credentials"

export const NextAuthConfig = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "email",
                    type: "email",
                },
                password: {
                    label: "password",
                    type: "password"
                }
            },
            async authorize(credentials: any) {
                return {
                    id: "user1",
                    name: "niraj",
                    userId: "12345",
                }
            }
        })
    ],
    secret: process.env.NEXT_AUTH_SECRET
}