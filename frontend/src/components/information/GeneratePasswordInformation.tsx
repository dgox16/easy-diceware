import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguageStore } from "@/store/languageStore";
import { Dice3, Shell, Waves } from "lucide-react";

export const GeneratePasswordInformation = () => {
	const { isSpanish } = useLanguageStore();

	return (
			<div className="grid grid-cols-2 gap-4 justify-center mt-10 sm:mt-24 mx-5 lg:mx-0">
			<Card className="col-span-2 sm:col-span-1">
				<CardHeader>
					<div className="flex items-center">
						<Dice3 className="size-6 sm:size-9 mr-3" />
						<CardTitle className="text-xl sm:text-2xl">
							{isSpanish ? "Método Diceware" : "Diceware Method"}
						</CardTitle>
					</div>
				</CardHeader>
				<CardContent>
					<p className="mt-2 text-pretty text-sm sm:text-base">
						{isSpanish
							? "Diceware es un método para crear contraseñas fáciles de recordar y seguras mediante el uso de dados. Consiste en generar palabras al azar de una lista predefinida."
							: "Diceware is a method for creating easy-to-remember and secure passwords using dice. It involves generating random words from a predefined list."}
					</p>
					<p className="mt-2 text-pretty text-sm sm:text-base">
						{isSpanish
							? "La idea es que, en lugar de usar combinaciones de caracteres complicadas, se pueden usar varias palabras en una secuencia, formando una frase de contraseña."
							: "The idea is that instead of using complicated character combinations, you can use multiple words in a sequence, forming a passphrase."}
					</p>
				</CardContent>
			</Card>
			<Card className="col-span-2 sm:col-span-1">
				<CardHeader>
					<div className="flex items-center">
						<Shell className="size-6 sm:size-9 mr-3" />
						<CardTitle className="text-xl sm:text-2xl">
							{isSpanish ? "Ventajas de usarlo" : "Advantages of Using It"}
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
			<Card className="col-span-2">
				<CardHeader>
					<div className="flex items-center">
						<Waves className="size-6 sm:size-9 mr-3" />
						<CardTitle className="text-xl sm:text-2xl">
							{isSpanish ? "EasyDiceware" : "EasyDiceware"}
						</CardTitle>
					</div>
				</CardHeader>
				<CardContent>
					<p className="text-pretty text-sm sm:text-base">
						{isSpanish
							? "Easy Diceware es un proyecto creado con el propósito de compartir el método que utilizo para generar mis contraseñas. Para su desarrollo, combiné las tecnologías de ReactJS y Laravel con el fin de crear una interfaz amigable y sencilla, mientras gestiono la complejidad con un marco de trabajo ampliamente probado."
							: "Easy Diceware is a project created with the purpose of sharing the method I use to generate my passwords. For its development, I combined ReactJS and Laravel technologies to create a friendly and simple interface, while managing the complexity with a well-established framework."}
					</p>
					<p className="mt-2 text-pretty text-sm sm:text-base">
						{isSpanish
							? "Las listas de palabras provienen de fuentes que aseguran mejorar la entropía, lo que resulta en contraseñas más difíciles de descifrar, sin incrementar, en la medida de lo posible, la complejidad de las palabras generadas. Además, puedes organizar las palabras obtenidas de esta página según tus preferencias."
							: "The word lists come from sources that ensure improved entropy, resulting in passwords that are harder to crack, without increasing, as much as possible, the complexity of the generated words. Additionally, you can arrange the words from this page however you prefer."}
					</p>
					<p className="mt-2 text-pretty text-sm sm:text-base">
						{isSpanish
							? "El código es completamente libre para adaptaciones, y en la barra superior encontrarás un botón para acceder al repositorio del proyecto."
							: "The code is completely open for adaptations, and you can find a button in the top bar to access the project's repository."}
					</p>
				</CardContent>
			</Card>
		</div>
	);
};
