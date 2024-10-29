import { buttonVariants } from "@/components/ui/button.tsx";
import { AlignLeft, Github } from "lucide-react";
import { ButtonToggleTheme } from "@/components/navbar/ButtonToggleTheme";
import { ButtonToggleLanguage } from "@/components/navbar/ButtonToggleLanguage";
import { Link } from "react-router-dom";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguageStore } from "@/store/languageStore";
import { SidebarItem } from "./SidebarItem";

export const Navbar = () => {
	const { isSpanish } = useLanguageStore();
	return (
		<nav className="fixed top-0 z-10 flex justify-center items-center w-full mx-auto bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm bg-zinc-50 dark:bg-zinc-950">
			<div className="w-[1000px] flex flex-row items-center justify-between h-14 mx-5 lg:mx-0">
				<div className="inline sm:hidden">
					<Sheet>
						<SheetTrigger className="scroll-m-20 text-lg font-semibold tracking-tight flex flex-row items-center">
							<AlignLeft className="size-[1.17rem] mr-3" />
							EasyDiceware
						</SheetTrigger>
						<SheetContent side={"left"}>
							<SheetHeader>
								<SheetTitle className="text-left">EasyDiceware</SheetTitle>
								<SheetDescription>
									<ul className="">
										<SidebarItem
											to={"/"}
											external={false}
											ariaLabel={
												isSpanish
													? "Generador de contraseñas"
													: "Password Generator"
											}
										>
											{isSpanish
												? "Generador de contraseñas"
												: "Password Generator"}
										</SidebarItem>
										<SidebarItem
											to={"/check-password"}
											external={false}
											ariaLabel={
												isSpanish
													? "Analizador de contraseñas"
													: "Password Strength Tester"
											}
										>
											{isSpanish
												? "Verificador de contraseñas"
												: "Password Strength Tester"}
										</SidebarItem>
										<SidebarItem
											to="https://github.com/dgox16/easy-diceware"
											external={true}
											ariaLabel={"Github"}
										>
											{isSpanish ? "Ver en GitHub" : "See on GitHub"}
										</SidebarItem>
									</ul>
								</SheetDescription>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</div>
				<div className="hidden sm:inline">
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
						{isSpanish ? "Analizar mi contraseña" : "Check my password"}
					</Link>
				</div>
				<div>
					<a
						className={`${buttonVariants({ variant: "outline", size: "icon" })} mr-2 invisible sm:visible`}
						aria-label="Github"
						href="https://github.com/dgox16/easy-diceware"
						target="_blank"
						rel="noreferrer noopener"
					>
						<Github />
					</a>
					<ButtonToggleTheme />
					<ButtonToggleLanguage />
				</div>
			</div>
		</nav>
	);
};
