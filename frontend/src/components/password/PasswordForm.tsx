import { Slider } from "@/components/ui/slider";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useLanguageStore } from "@/store/languageStore";
import { useGeneratePasswordStore } from "@/store/generatePasswordStore";

export const PasswordForm = () => {
	const { formGeneratePassword, changeFormGeneratePassword } =
		useGeneratePasswordStore();
	const { isSpanish } = useLanguageStore();

	return (
		<div className="flex justify-center mt-7 sm:mt-10 mx-5">
			<div className="grid grid-cols-3 gap-6 sm:gap-16 w-[700px]">
				<div className="flex-col col-span-3 sm:col-span-1 flex text-center">
					<Label
						htmlFor="numberWords"
						className="mb-2 sm:mb-5 font-semibold text-xs sm:text-base"
					>
						{isSpanish
							? `Tu contraseña tendra ${formGeneratePassword.count} palabras:`
							: `Your password will have ${formGeneratePassword.count} words:`}
					</Label>
					<Slider
						id="numberWords"
						className="mt-2 sm:mt-4 w-3/4 mx-auto sm:mx-0 sm:w-full"
						aria-label="Choose a value"
						name="numberWords"
						defaultValue={[4]}
						min={2}
						max={6}
						step={1}
						onValueCommit={(value) =>
							changeFormGeneratePassword("count", value[0])
						}
					/>
				</div>
				<div className="flex-col col-span-3 sm:col-span-1 sm:flex text-center justify-center">
					<Label
						htmlFor="numbersPassword"
						className="mb-5 font-semibold text-xs sm:text-base"
					>
						{isSpanish
							? "¿Quieres incluir números?"
							: "Want to include numbers?"}
					</Label>
					<Select
						onValueChange={(value) =>
							changeFormGeneratePassword("withNumbers", value === "true")
						}
					>
						<SelectTrigger
							className="text-sm sm:text-base mt-3 sm:mt-0 w-3/4 mx-auto sm:mx-0 sm:w-full"
							aria-label="numbersPassword"
						>
							<SelectValue
								placeholder={isSpanish ? "Selecciona..." : "Select..."}
							/>
						</SelectTrigger>
						<SelectContent>
							<SelectItem className="text-xs sm:text-base" value="true">
								{isSpanish ? "Si" : "Yes"}
							</SelectItem>
							<SelectItem className="text-xs sm:text-base" value="false">
								No
							</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="flex-col col-span-3 sm:col-span-1 sm:flex text-center justify-center">
					<Label
						htmlFor="typePassword"
						className="mb-5 font-semibold text-xs sm:text-base"
					>
						{isSpanish
							? "Elige el separador de tu contraseña:"
							: "Choose your password separator:"}
					</Label>
					<Select
						onValueChange={(value) => changeFormGeneratePassword("type", value)}
					>
						<SelectTrigger
							className="text-sm sm:text-base mt-3 sm:mt-0 w-3/4 mx-auto sm:mx-0 sm:w-full"
							aria-label="typePassword"
						>
							<SelectValue
								placeholder={isSpanish ? "Selecciona..." : "Select..."}
							/>
						</SelectTrigger>
						<SelectContent>
							<SelectItem className="text-xs sm:text-base" value="space">
								{isSpanish ? "Espacio" : "Space"}
							</SelectItem>
							<SelectItem className="text-xs sm:text-base" value="comma">
								{isSpanish ? "Coma" : "Comma"}
							</SelectItem>
							<SelectItem className="text-xs sm:text-base" value="dash">
								{isSpanish ? "Guion" : "Dash"}
							</SelectItem>
							<SelectItem className="text-xs sm:text-base" value="underscore">
								{isSpanish ? "Guion Bajo" : "Underscore"}
							</SelectItem>
							<SelectItem className="text-xs sm:text-base" value="period">
								{isSpanish ? "Punto" : "Period"}
							</SelectItem>
							<SelectItem className="text-xs sm:text-base" value="slash">
								{isSpanish ? "Diagonal" : "Slash"}
							</SelectItem>
							<SelectItem className="text-xs sm:text-base" value="pipe">
								{isSpanish ? "Pipe" : "Pipe"}
							</SelectItem>
							<SelectItem className="text-xs sm:text-base" value="PascalCase">
								PascalCase
							</SelectItem>
							<SelectItem className="text-xs sm:text-base" value="camelCase">
								camelCase
							</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
		</div>
	);
};
