import { Slider } from "@/components/ui/slider";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { PasswordFormProps } from "@/types/FormTypes";
import { useLanguageStore } from "@/store/languageStore";

export const PasswordForm: React.FC<PasswordFormProps> = ({
	formData,
	handleChange,
}) => {
	const { isSpanish } = useLanguageStore();

	return (
		<div className="flex justify-center mt-7 sm:mt-10 mx-5">
			<div className="grid grid-cols-2 gap-8 w-[600px]">
				<div className="flex-col col-span-2 sm:col-span-1 flex text-center">
					<Label
						htmlFor="numberWords"
						className="mb-2 sm:mb-5 font-semibold text-xs sm:text-base"
					>
						{isSpanish
							? `Tu contraseña tendra ${formData.count} palabras:`
							: `Your password will have ${formData.count} words:`}
					</Label>
					<Slider
						id="numberWords"
						className="mt-2 sm:mt-4 w-3/4 mx-auto sm:mx-0 sm:w-full"
						defaultValue={[4]}
						min={3}
						max={6}
						step={1}
						onValueChange={(value) => handleChange("count", value[0])}
					/>
				</div>
				<div className="flex-col col-span-2 sm:col-span-1 sm:flex text-center justify-center">
					<Label
						htmlFor="numberWords"
						className="mb-5 font-semibold text-xs sm:text-base"
					>
						{isSpanish
							? "Elige el separador de tu contraseña:"
							: "Choose your password separator:"}
					</Label>
					<Select onValueChange={(value) => handleChange("type", value)}>
						<SelectTrigger className="text-sm sm:text-base mt-3 sm:mt-0 w-3/4 mx-auto sm:mx-0 sm:w-full">
							<SelectValue
								placeholder={
									isSpanish
										? "Selecciona tu delimitador"
										: "Select your delimiter"
								}
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
