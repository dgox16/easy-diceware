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
											<li className="mb-2">
												<Link to={"/"}>
													{isSpanish
														? "Generador de contraseñas"
														: "Password Generator"}
												</Link>
											</li>
											<li className="mb-2">
												<Link to={"/check-password"}>
													{isSpanish
														? "Verificador de contraseñas"
														: "Password Strength Tester"}
												</Link>
											</li>
											<li>
												<a
													aria-label="Github"
													href="https://github.com/dgox16/easy-diceware"
													target="_blank"
													rel="noreferrer noopener"
												>
													{isSpanish ? "Ver en GitHub" : "See on GitHub"}
												</a>
											</li>
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
