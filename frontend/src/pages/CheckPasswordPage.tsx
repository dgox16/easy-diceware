import { MainLayout } from "@/layouts/MainLayout.tsx";
import { useLanguageStore } from "@/store/languageStore";
import { PrincipalText, SecondaryText } from "@/components/text/HeaderText";
import { Input } from "@/components/ui/input";
import { TimeToCrack } from "@/components/password/TimeToCrack";
import { useCheckPassword } from "@/hooks/useCheckPassword";

export const CheckPasswordPage = () => {
	const { isSpanish } = useLanguageStore();
	const { password, handleChange } = useCheckPassword();

	return (
		<MainLayout>
			<div className="flex justify-center mt-10 sm:mt-28 flex-col">
				<div className="flex justify-center text-center">
					<PrincipalText>
						{isSpanish ? "Revisa y Refuerza" : "Review and Reinforce"}
					</PrincipalText>
				</div>
				<div className="flex justify-center text-center">
					<SecondaryText>
						{isSpanish
							? "¿Qué tan segura es tu contraseña?"
							: "How secure is your password?"}
					</SecondaryText>
				</div>

				<div className="flex justify-center mt-5 mx-5">
					<div className="w-[600px]">
						<Input
							type="email"
							onChange={(e) => handleChange(e.target.value)}
							placeholder={
								isSpanish
									? "Coloca la contraseña a analizar"
									: "Type the password to be analyzed"
							}
							className="text-center text-base sm:text-lg py-5 sm:py-6 bg-zinc-200 dark:bg-zinc-800 rounded-lg px-1 font-semibold text-zinc-900 dark:text-zinc-100"
						/>
					</div>
				</div>
				{password.status && <TimeToCrack timeToCrack={password.timeToCrack} />}
			</div>
		</MainLayout>
	);
};
