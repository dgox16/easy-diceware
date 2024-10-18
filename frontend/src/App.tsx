import { MainLayout } from "@/layouts/MainLayout.tsx";
import { PasswordAnimate } from "@/components/PasswordAnimate.tsx";
import { PasswordForm } from "@/components/PasswordForm.tsx";
import { usePassword } from "./hooks/usePassword";
import { userLanguage } from "./hooks/useLanguage";
import { PasswordSpace } from "./components/PasswordSpace";
import { Toaster } from "@/components/ui/toaster"
import { SectionInformation } from "./components/SectionInformation";

function App() {
	const { formData, handleChange, password } = usePassword({ count: 4, type: "space" })
	const { isSpanish } = userLanguage()

	return (
		<MainLayout>
			<div className="flex justify-center mt-32 flex-col">
				<div className="flex justify-center">
					<h1 className="scroll-m-20 text-6xl font-black tracking-tight">
						{isSpanish
							? "La clave es la simplicidad"
							: "The key is the simplicity"}
					</h1>
				</div>
				<div className="flex justify-center">
					<h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
						Fácil de recordar, imposible de hackear
					</h2>
				</div>
				{password ? (
					<PasswordSpace password={password} />
				) : (
					<PasswordAnimate />
				)}
				<PasswordForm handleChange={handleChange} formData={formData} />
			</div>
			<SectionInformation />
			<Toaster />
		</MainLayout >
	);
}

export default App;
