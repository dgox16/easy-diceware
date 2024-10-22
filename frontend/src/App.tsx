import { MainLayout } from "@/layouts/MainLayout.tsx";
import { PasswordAnimate } from "@/components/password/PasswordAnimate";
import { PasswordForm } from "@/components/password/PasswordForm";
import { usePassword } from "./hooks/usePassword";
import { SectionInformation } from "./components/SectionInformation";
import { useLanguageStore } from "./store/languageStore";
import { useLanguage } from "./hooks/useLanguage";
import { PasswordViewer } from "./components/password/PasswordViewer";

const App = () => {
	useLanguage();
	const { formData, handleChange, password } = usePassword({
		count: 4,
		type: "space",
	});
	const { isSpanish } = useLanguageStore();

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
				{password.password !== "" ? (
					<PasswordViewer password={password} />
				) : (
					<PasswordAnimate />
				)}
				<PasswordForm handleChange={handleChange} formData={formData} />
			</div>
			<SectionInformation />
		</MainLayout>
	);
};

export default App;
