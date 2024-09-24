"use client";
import { cn } from "@/app/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { useState, createContext, useContext, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

interface Links {
	label: string;
	href: string;
	icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
	undefined
);

export const useSidebar = () => {
	const context = useContext(SidebarContext);
	if (!context) {
		throw new Error("useSidebar must be used within a SidebarProvider");
	}
	return context;
};

export const SidebarProvider = ({
	children,
	open: openProp,
	setOpen: setOpenProp,
	animate = true,
}: {
	children: React.ReactNode;
	open?: boolean;
	setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
	animate?: boolean;
}) => {
	const [openState, setOpenState] = useState(false);

	const open = openProp !== undefined ? openProp : openState;
	const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

	return (
		<SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
			{children}
		</SidebarContext.Provider>
	);
};

export const Sidebar = ({
	children,
	open,
	setOpen,
	animate,
}: {
	children: React.ReactNode;
	open?: boolean;
	setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
	animate?: boolean;
}) => {
	return (
		<SidebarProvider open={open} setOpen={setOpen} animate={true}>
			{children}
		</SidebarProvider>
	);
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
	return (
		<>
			<DesktopSidebar {...props} />
			<MobileSidebar {...(props as React.ComponentProps<"div">)} />
		</>
	);
};

export const DesktopSidebar = ({
	className,
	children,
	...props
}: React.ComponentProps<typeof motion.div>) => {
	const { open, setOpen, animate } = useSidebar();
	return (
		<>
			<motion.div
				className={cn(
					"h-screen fixed px-4 py-8 hidden border-r-2 border-gray-700 md:flex md:flex-col bg-black dark:bg-black z-50 flex-shrink-0",
					className
				)}
				animate={{
					width: animate ? (open ? "200px" : "60px") : "200px",
				}}
				onMouseEnter={() => setOpen(true)}
				onMouseLeave={() => setOpen(false)}
				{...props}
			>
				{children}
			</motion.div>
		</>
	);
};

export const MobileSidebar = ({
	className,
	children,
	...props
}: React.ComponentProps<"div">) => {
	const { open, setOpen } = useSidebar();
	const handleSetOpen = () => {
		setTimeout(() => {
			setOpen(!open);
		}, 2000)
	}
	return (
		<>
			<div
				className={cn(
					"fixed h-10 px-4 py-8 flex flex-row md:hidden items-center z-50 justify-between bg-neutral-900 dark:bg-neutral-800 w-full", 	
				)}
				{...props}
			>
				<div className="flex items-center justify-between z-20 w-full">
					<Link
						href="/"
						className="font-bold flex space-x-2 items-center text-lg text-black py-1 relative z-20"
					>
						<motion.span
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="font-semibold text-2xl text-white dark:text-white whitespace-pre"
							onClick={handleSetOpen}
						>
							The Coder&apos;z
						</motion.span>
					</Link>
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="font-bold text-white dark:text-white whitespace-pre"
					>
						<IconMenu2
							className="text-white cursor-pointer"
							onClick={() => setOpen(!open)}
							size={32}
						/>
					</motion.span>
				</div>
				<AnimatePresence>
					{open && (
						<motion.div
							initial={{ x: "-100%", opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: "-100%", opacity: 0 }}
							transition={{
								duration: 0.3,
								ease: "easeInOut",
							}}
							className={cn(
								"fixed h-full w-full inset-0 bg-neutral-900 dark:bg-neutral-900 p-10 z-[50] flex flex-col justify-between",
								className
							)}
							onClick={handleSetOpen}
						>
							<div
								className="absolute cursor-pointer right-8 top-12 z-50 text-white dark:text-neutral-200"
								onClick={() => setOpen(!open)}
							>
								<IconX size={32} />
							</div>
							{children}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export const SidebarLink = ({
	link,
	className,
	...props
}: {
	link: Links;
	className?: string;
	props?: LinkProps;
}) => {
	const { open, animate } = useSidebar();
	return (
		<Link
			href={link.href}
			className={cn(
				"flex items-center justify-start gap-5  group/sidebar py-2",
				className
			)}
			{...props}
		>
			{link.icon}
			<motion.span
				animate={{
					display: animate ? (open ? "inline-block" : "none") : "inline-block",
					opacity: animate ? (open ? 1 : 0) : 1,
				}}
				className="text-white dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
			>
				{link.label}
			</motion.span>
		</Link>
	);
};
