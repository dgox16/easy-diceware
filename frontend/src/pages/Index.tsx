import { MainLayout } from "@/layouts/MainLayout.tsx";
import { PasswordAnimate } from "@/components/password/PasswordAnimate";
import { PasswordForm } from "@/components/password/PasswordForm";
import { useLanguageStore } from "@/store/languageStore";
import { useGeneratePassword } from "@/hooks/useGeneratePassword";
import { PasswordViewer } from "@/components/password/PasswordViewer";
import { DiceWareInformation } from "@/components/information/DicewareInformation";
import { PrincipalText, SecondaryText } from "@/components/text/HeaderText";

export const Index = () => {
	const { isSpanish } = useLanguageStore();
	const password = useGeneratePassword();

	return (
		<MainLayout>
			<div className="flex justify-center  flex-col">
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
				{password.status ? (
					<PasswordViewer password={password} />
				) : (
					<PasswordAnimate />
				)}
				<PasswordForm />
			</div>
			<DiceWareInformation />
		</MainLayout>
	);
};
