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
		<nav className="flex justify-center items-center h-14 mx-5 sm:mx-0">
			<div className="w-[1000px]">
				<div className="flex justify-between items-center">
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
										<ul className="text-left text-base">
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
														? "Verificador de contraseñas"
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
							Check my password
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
			</div>
		</nav>
	);
};
