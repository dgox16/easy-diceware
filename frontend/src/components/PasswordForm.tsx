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

export const PasswordForm: React.FC<PasswordFormProps> = ({ formData, handleChange }) => {
	const { isSpanish } = useLanguageStore();

	return (
		<div className="flex justify-center mt-7 sm:mt-10 mx-5">
			<div className="grid grid-cols-2 gap-8 w-[600px]">
				<div className="flex-col col-span-2 sm:col-span-1 flex text-center">
					<Label htmlFor="numberWords" className="mb-2 sm:mb-5 font-semibold text-xs sm:text-base">
						{isSpanish
							? `Tu contraseña tendra ${formData.count} palabras:`
							: `Your password will have ${formData.count} words:`
						}
					</Label>
					<Slider
						id="numberWords"
						className="mt-4"
						defaultValue={[4]}
						min={3}
						max={6}
						step={1}
						onValueChange={(value) => handleChange("count", value[0])}
					/>
				</div>
				<div className="flex-col col-span-2 sm:col-span-1 sm:flex text-center justify-center">
					<Label htmlFor="numberWords" className="mb-5 font-semibold text-xs sm:text-base">
						{isSpanish
							? "Elige el separador de tu contraseña:"
							: "Choose your password separator:"
						}
					</Label>
					<Select onValueChange={(value) => handleChange("type", value)}>
						<SelectTrigger className="mt-3 sm:mt-0">
							<SelectValue placeholder={isSpanish ? "Selecciona tu delimitador" : "Select your delimiter"} />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="space">{isSpanish ? "Espacio" : "Space"}</SelectItem>
							<SelectItem value="comma">{isSpanish ? "Coma" : "Comma"}</SelectItem>
							<SelectItem value="dash">{isSpanish ? "Guion" : "Dash"}</SelectItem>
							<SelectItem value="underscore">{isSpanish ? "Guion Bajo" : "Underscore"}</SelectItem>
							<SelectItem value="period">{isSpanish ? "Punto" : "Period"}</SelectItem>
							<SelectItem value="slash">{isSpanish ? "Diagonal" : "Slash"}</SelectItem>
							<SelectItem value="pipe">{isSpanish ? "Pipe" : "Pipe"}</SelectItem>
							<SelectItem value="PascalCase">PascalCase</SelectItem>
							<SelectItem value="camelCase">camelCase</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
		</div>
	);
};
