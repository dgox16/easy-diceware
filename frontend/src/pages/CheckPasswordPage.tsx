import { MainLayout } from "@/layouts/MainLayout.tsx";
import { useLanguageStore } from "@/store/languageStore";
import { PrincipalText, SecondaryText } from "@/components/text/HeaderText";
import { Input } from "@/components/ui/input";

export const CheckPasswordPage = () => {
	const { isSpanish } = useLanguageStore();

	return (
		<MainLayout>
			<div className="flex justify-center mt-10 sm:mt-28 flex-col">
				<div className="flex justify-center text-center">
					<PrincipalText>
						{isSpanish ? "Mide tu seguridad" : "Measure your security"}
					</PrincipalText>
				</div>
				<div className="flex justify-center text-center">
					<SecondaryText>
						{isSpanish
							? "¿Quieres saber cómo de segura es tu contraseña?"
							: "Do you want to know how secure is your password?"}
					</SecondaryText>
				</div>

				<div className="flex justify-center mt-5 mx-5">
					<div className="w-[600px]">
						<Input
							type="email"
							placeholder={
								isSpanish
									? "Coloca la contraseña a analizar"
									: "Type the password to be analyzed"
							}
							className="text-center text-lg py-6 bg-zinc-200 dark:bg-zinc-800 rounded-lg px-1 font-semibold text-zinc-900 dark:text-zinc-100"
						/>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};
