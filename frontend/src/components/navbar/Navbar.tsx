import { buttonVariants } from "@/components/ui/button.tsx";
import { Github } from "lucide-react";
import { ButtonToggleTheme } from "@/components/navbar/ButtonToggleTheme";
import { ButtonToggleLanguage } from "@/components/navbar/ButtonToggleLanguage";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="flex justify-center items-center h-14 mx-5 sm:mx-0">
			<div className="w-[1000px]">
				<div className="flex justify-between items-center">
					<div>
						<Link
							to={"/"}
							className="scroll-m-20 text-lg font-semibold tracking-tight"
						>
							EasyDiceware
						</Link>
						<Link
							to={"/check-password"}
							className="text-sm ml-6 text-zinc-700 dark:text-zinc-300 hover:underline hidden sm:inline"
						>
							Check my password
						</Link>
					</div>
					<div>
						<a
							className={`${buttonVariants({ variant: "outline", size: "icon" })} mr-2`}
							aria-label="Github"
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
	);
};
