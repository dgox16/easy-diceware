import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguageStore } from "@/store/languageStore";
import { Dice3, Shell, Skull } from "lucide-react";

export const CheckPasswordInformation = () => {
	const { isSpanish } = useLanguageStore();

	return (
		<div className="grid grid-cols-2 gap-4 justify-center mt-10 sm:mt-16 mx-5 sm:mx-0">
			<Card className="col-span-2 sm:col-span-1">
				<CardHeader>
					<div className="flex items-center">
						<Skull className="size-10 sm:size-8 mr-4 sm:mr-3" />
						<CardTitle className="text-xl sm:text-xl text-pretty">
							{isSpanish
								? "Riesgos de Contraseñas Débiles"
								: "The Vulnerability of Weak Passwords"}
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
						<Skull className="size-10 sm:size-8 mr-4 sm:mr-3" />
						<CardTitle className="text-xl sm:text-xl text-pretty">
							{isSpanish
								? "Consejos para una contraseña segura"
								: "Tips for a secure password"}
						</CardTitle>
					</div>
				</CardHeader>
				<CardContent>
					<ul className="ml-6 list-disc [&>li]:mt-2 text-sm sm:text-base">
						<li>
							{isSpanish
								? "Facilidad para recordar: Las contraseñas formadas por palabras son más fáciles de recordar que cadenas aleatorias de caracteres."
								: "Easy to remember: Passwords formed by words are easier to remember than random strings of characters."}
						</li>
						<li>
							{isSpanish
								? "Seguridad: Al utilizar palabras aleatorias, el número de combinaciones posibles aumenta significativamente, haciendo que la contraseña sea más segura contra ataques de fuerza bruta."
								: "Security: By using random words, the number of possible combinations increases significantly, making the password more secure against brute-force attacks."}
						</li>
						<li>
							{isSpanish
								? "Personalización: Puedes personalizar el número de palabras que deseas usar, lo que te permite equilibrar la seguridad y la facilidad de uso."
								: "Customization: You can customize the number of words you want to use, allowing you to balance security and ease of use."}
						</li>
					</ul>
				</CardContent>
			</Card>
		</div>
	);
};
