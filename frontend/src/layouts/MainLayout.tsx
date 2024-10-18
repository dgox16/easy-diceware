import { Button, buttonVariants } from "@/components/ui/button.tsx";
import { Github } from "lucide-react";
import { ButtonToggleTheme } from "@/components/ButtonToggleTheme.tsx";
import React, { ReactNode } from "react";

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <nav className="flex justify-center items-center h-14">
                <div className="w-[1000px]">
                    <div className="flex justify-between items-center">
                        <h1 className="scroll-m-20 text-lg font-semibold tracking-tight">
                            EasyDiceware
                        </h1>
                        <div>
                            <a
                                className={`${buttonVariants({ variant: "outline", size: "icon" })} mr-3`}
                                href="https://github.com/dgox16/easy-diceware"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <Github className="size-4" />
                            </a>
                            <ButtonToggleTheme />
                        </div>
                    </div>
                </div>
            </nav>
            <main className="flex justify-center">
                <div className="w-[1000px]">
                    {children}
                </div>
            </main>
        </>
    )
};