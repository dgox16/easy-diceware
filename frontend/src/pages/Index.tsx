import { MainLayout } from "@/layouts/MainLayout.tsx";
import { PasswordAnimate } from "@/components/password/PasswordAnimate";
import { PasswordForm } from "@/components/password/PasswordForm";
import { useLanguageStore } from "@/store/languageStore";
import { useGeneratePassword } from "@/hooks/useGeneratePassword";
import { PasswordViewer } from "@/components/password/PasswordViewer";
import { SectionInformation } from "@/components/SectionInformation";

export const Index = () => {
	const { isSpanish } = useLanguageStore();
	const password = useGeneratePassword();
	return (
		<MainLayout>
			<div className="flex justify-center mt-10 sm:mt-28 flex-col">
				<div className="flex justify-center text-center">
					<h1 className="scroll-m-20 text-[1.88rem] sm:text-6xl -mb-1 sm:mb-1 font-black tracking-tight">
						{isSpanish ? "La clave es la simplicidad" : "The key is simplicity"}
					</h1>
				</div>
				<div className="flex justify-center text-center">
					<h2 className="scroll-m-20 text-base sm:text-2xl font-semibold tracking-tight">
						{isSpanish
							? "Fácil de recordar, imposible de hackear"
							: "Easy to remember, impossible to hack"}
					</h2>
				</div>
				{password.status ? (
					<PasswordViewer password={password} />
				) : (
					<PasswordAnimate />
				)}
				<PasswordForm />
			</div>
			<SectionInformation />
		</MainLayout>
	);
};
