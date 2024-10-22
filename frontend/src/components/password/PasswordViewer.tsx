import { useLanguageStore } from "@/store/languageStore";
import { PasswordResponse } from "@/types/FormTypes";

export const PasswordViewer: React.FC<{ password: PasswordResponse }> = ({
	password,
}) => {
	const { isSpanish } = useLanguageStore();

	return (
		<div className="flex flex-col justify-center mt-5 mx-5 sm:mx-0">
			<div className="text-center text-xs sm:text-lg w-full sm:w-[600px] mx-auto bg-zinc-200 dark:bg-zinc-800 rounded-lg py-3 px-1 font-semibold text-zinc-900 dark:text-zinc-100">
				{password.password}
			</div>
			<span className="mx-auto mt-4 text-sm sm:text-base">
				{isSpanish
					? "Una computadora tardaría aproximadamente"
					: "It would take a computer about"}{" "}
			</span>
			<span className="mx-auto my-1 text-xl sm:text-3xl font-bold">
				{password.timeToCrack}
			</span>
			<span className="mx-auto text-sm sm:text-base">
				{isSpanish ? "en descifrar tu contraseña." : "to crack your password."}
			</span>
		</div>
	);
};
