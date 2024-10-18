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
	const [numberWords, setNumberWords] = useState<number[]>([3]);
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
						defaultValue={[3]}
						min={3}
						max={7}
						step={1}
						onValueChange={(value) => setNumberWords(value)}
					/>
				</div>
				<div className="flex-col flex text-center justify-center">
					<Label htmlFor="numberWords" className="mb-5">
						Elige tu delimitador
					</Label>
					<Select>
						<SelectTrigger className="">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="light">Light</SelectItem>
							<SelectItem value="dark">Dark</SelectItem>
							<SelectItem value="system">System</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
		</div>
	);
};
