"use client"

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <main className="flex items-center justify-center gap-2">
            {
                theme === "light" ?
                    <Button onClick={() => setTheme("dark")} variant="outline" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                    :
                    <Button onClick={() => setTheme("light")} variant="outline" size="icon">
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>
            }
        </main>
    )
}
