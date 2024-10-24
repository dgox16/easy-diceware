import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguageStore } from "@/store/languageStore";
import { ShieldX, Skull } from "lucide-react";

export const CheckPasswordInformation = () => {
	const { isSpanish } = useLanguageStore();

	return (
		<div className="grid grid-cols-2 gap-4 justify-center mt-5 sm:mt-8 mx-5 sm:mx-0">
			<Card className="col-span-2 sm:col-span-1">
				<CardHeader>
					<div className="flex items-center">
						<ShieldX className="size-6 sm:size-9 mr-3" />
						<CardTitle className="text-xl sm:text-2xl">
							{isSpanish ? "Contraseñas Débiles" : "Weak Passwords"}
						</CardTitle>
					</div>
				</CardHeader>
				<CardContent>
					<p className="mt-2 text-pretty text-sm sm:text-base">
						{isSpanish
							? "Una de las principales razones por las que nuestras contraseñas son inseguras es que tendemos a priorizar la facilidad de recordarlas sobre su fortaleza. Elegimos palabras o números que tienen un significado personal, como fechas de cumpleaños o nombres familiares, lo que las hace predecibles para los hackers."
							: "One of the main reasons our passwords are insecure is that we tend to prioritize ease of remembering them over their strength. We choose words or numbers that have personal significance, such as birthdays or family names, making them predictable for hackers."}
					</p>
					<p className="mt-2 text-pretty text-sm sm:text-base">
						{isSpanish
							? "Además, reutilizamos la misma contraseña en varias plataformas, lo que aumenta el riesgo: si una cuenta es hackeada, las demás quedan expuestas. Herramientas automatizadas pueden descifrar fácilmente contraseñas comunes con ataques de fuerza bruta o diccionarios, haciendo que las combinaciones previsibles sean un blanco fácil."
							: "Additionally, we reuse the same password across multiple platforms, increasing the risk: if one account is hacked, the others are exposed. Automated tools can easily crack common passwords using brute force attacks or dictionaries, making predictable combinations an easy target."}
					</p>
				</CardContent>
			</Card>
			<Card className="col-span-2 sm:col-span-1">
				<CardHeader>
					<div className="flex items-center">
						<Skull className="size-6 sm:size-9 mr-3" />
						<CardTitle className="text-xl sm:text-2xl">
							{isSpanish ? "Consejos para contraseñas" : "Password Tips"}
						</CardTitle>
					</div>
				</CardHeader>
				<CardContent>
					<ul className="ml-6 list-disc [&>li]:mt-2 text-sm sm:text-base">
						<li>
							{isSpanish
								? "Usa al menos 12 caracteres: Las contraseñas más largas son más seguras."
								: "Use at least 12 characters: Longer passwords are more secure."}
						</li>
						<li>
							{isSpanish
								? "Combina caracteres: Incluye mayúsculas, minúsculas, números y símbolos."
								: "Combine characters: Include uppercase, lowercase, numbers, and symbols."}
						</li>
						<li>
							{isSpanish
								? "Evita información personal: No uses nombres o fechas fáciles de adivinar."
								: "Avoid personal information: Don’t use easily guessable names or dates."}
						</li>
						<li>
							{isSpanish
								? "No reutilices contraseñas: Usa una diferente para cada cuenta."
								: "Don’t reuse passwords: Use a different one for each account."}
						</li>
						<li>
							{isSpanish
								? "Usa contraseñas aleatorias: Las combinaciones únicas de caracteres son más difíciles de adivinar y ofrecen mayor seguridad."
								: "Use random passwords: Unique character combinations are harder to guess and provide greater security."}
						</li>
					</ul>
				</CardContent>
			</Card>
		</div>
	);
};
