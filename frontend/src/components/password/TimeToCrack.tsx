import { useLanguageStore } from "@/store/languageStore";

export const TimeToCrack: React.FC<{ timeToCrack: string }> = ({
	timeToCrack,
}) => {
	const { isSpanish } = useLanguageStore();
	return (
		<>
			<span className="mx-auto mt-4 text-sm sm:text-base">
				{isSpanish
					? "Una computadora tardaría aproximadamente"
					: "It would take a computer about"}{" "}
			</span>
			<span className="mx-auto my-0 sm:my-1 text-xl sm:text-3xl font-bold">
				{timeToCrack}
			</span>
			<span className="mx-auto text-sm sm:text-base">
				{isSpanish ? "en descifrar tu contraseña." : "to crack your password."}
			</span>
		</>
	);
};
