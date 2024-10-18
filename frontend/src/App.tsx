import { MainLayout } from "@/layouts/MainLayout.tsx";
import { PasswordAnimate } from "@/components/PasswordAnimate.tsx";
import { PasswordForm } from "@/components/PasswordForm.tsx";
import { useForm } from "./hooks/useForm";
import { userLanguage } from "./hooks/useLanguage";

function App() {
	const { formData, handleChange } = useForm({ count: 4, type: "space" })
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
				<PasswordAnimate />
				<PasswordForm handleChange={handleChange} formData={formData} />
			</div>
		</MainLayout>
	);
}

export default App;
