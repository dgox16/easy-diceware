import { MainLayout } from "@/layouts/MainLayout.tsx";
import { useLanguageStore } from "@/store/languageStore";
import { PrincipalText, SecondaryText } from "@/components/text/HeaderText";

export const CheckPasswordPage = () => {
	const { isSpanish } = useLanguageStore();

	return (
		<MainLayout>
			<div className="flex justify-center mt-10 sm:mt-28 flex-col">
				<div className="flex justify-center text-center">
					<PrincipalText>
						{isSpanish ? "La clave es la simplicidad" : "The key is simplicity"}
					</PrincipalText>
				</div>
				<div className="flex justify-center text-center">
					<SecondaryText>
						{isSpanish
							? "Fácil de recordar, imposible de hackear"
							: "Easy to remember, impossible to hack"}
					</SecondaryText>
				</div>
			</div>
		</MainLayout>
	);
};
