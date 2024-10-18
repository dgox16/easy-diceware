import { Slider } from "@/components/ui/slider";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const PasswordForm = () => {
	const [numberWords, setNumberWords] = useState<number[]>([4]);

	return (
		<div className="flex justify-center mt-10">
			<div className="grid grid-cols-2 gap-8 w-[600px]">
				<div className="flex-col flex text-center">
					<Label htmlFor="numberWords" className="mb-5">
						Tu contraseña tendra {numberWords} palabras
					</Label>
					<Slider
						id="numberWords"
						className="mt-4"
						defaultValue={[4]}
						min={3}
						max={7}
						step={1}
						onValueChange={(value) => setNumberWords(value)}
					/>
				</div>
				<div className="flex-col flex text-center justify-center">
					<Label htmlFor="numberWords" className="mb-5">
						Elige como se va a separar tu contraseña
					</Label>
					<Select onValueChange={(value) => console.info(value)}>
						<SelectTrigger className="">
							<SelectValue placeholder="Elige tu delimitador" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="space">Espacio</SelectItem>
							<SelectItem value="comma">Coma</SelectItem>
							<SelectItem value="dash">Diagonal</SelectItem>
							<SelectItem value="underscore">Guion Bajo</SelectItem>
							<SelectItem value="period">Punto</SelectItem>
							<SelectItem value="slash">Slash</SelectItem>
							<SelectItem value="pipe">Pipe</SelectItem>
							<SelectItem value="PascalCase">PascalCase</SelectItem>
							<SelectItem value="camelCase">camelCase</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
		</div>
	);
};