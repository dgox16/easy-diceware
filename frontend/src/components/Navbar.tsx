import { buttonVariants } from "@/components/ui/button.tsx";
import { Github } from "lucide-react";
import { ButtonToggleTheme } from "@/components/ButtonToggleTheme.tsx";
import { ButtonToggleLanguage } from "@/components/ButtonToggleLanguage";

export const Navbar = () => {
    return (
        <nav className="flex justify-center items-center h-14 mx-5 sm:mx-0">
            <div className="w-[1000px]">
                <div className="flex justify-between items-center">
                    <h1 className="scroll-m-20 text-lg font-semibold tracking-tight">
                        EasyDiceware
                    </h1>
                    <div>
                        <a
                            className={`${buttonVariants({ variant: "outline", size: "icon" })} mr-2`}
                            href="https://github.com/dgox16/easy-diceware"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <Github className="size-4" />
                        </a>
                        <ButtonToggleTheme />
                        <ButtonToggleLanguage />
                    </div>
                </div>
            </div>
        </nav>
    )
}
