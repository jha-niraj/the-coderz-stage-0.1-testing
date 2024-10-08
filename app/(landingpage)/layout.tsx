import type { Metadata } from "next";
import "../globals.css";
import { Chilanka, Poppins } from "next/font/google";
import { Providers } from "@/app/providers/providers";
import Footer from "@/components/footer";
import { AppProvider } from "../context/usercontext";
import { ThemeProvider } from "@/components/themeprovider";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
	title: "The Coder'z",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className} style={{ scrollBehavior: "smooth" }}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<Providers>
						<AppProvider>
							{
                                children
                            }
						</AppProvider>
					</Providers>
				</ThemeProvider>
			</body>
		</html>
	);
}