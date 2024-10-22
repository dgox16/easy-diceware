import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGeneratePasswordStore } from "@/store/generatePasswordStore";
import { useLanguageStore } from "@/store/languageStore";
import { Languages } from "lucide-react";

export function ButtonToggleLanguage() {
	const { isSpanish, changeLanguage } = useLanguageStore();
	const { changeFormGeneratePassword } = useGeneratePasswordStore();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon" className="ml-2">
					<Languages className="size-5 " />
					<span className="sr-only">
						{isSpanish ? "Cambia el lenguaje" : "Toggle language"}{" "}
					</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem
					onClick={() => {
						changeLanguage(true);
						changeFormGeneratePassword("isSpanish", true);
					}}
				>
					{isSpanish ? "Español" : "Spanish"}
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => {
						changeLanguage(false);
						changeFormGeneratePassword("isSpanish", false);
					}}
				>
					{isSpanish ? "Inglés" : "English"}
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => {
						const userLanguage = navigator.language;
						changeLanguage(userLanguage.startsWith("es"));
						changeFormGeneratePassword(
							"isSpanish",
							userLanguage.startsWith("es"),
						);
					}}
				>
					{isSpanish ? "Sistema" : "System"}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
