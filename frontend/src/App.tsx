import {MainLayout} from "@/layouts/MainLayout.tsx";
import {useEffect, useState} from "react";
import {PasswordAnimate} from "@/components/PasswordAnimate.tsx";
import {PasswordForm} from "@/components/PasswordForm.tsx";

function App() {
    const [isSpanish, setIsSpanish] = useState(false);

    useEffect(() => {
        const userLanguage = navigator.language
        setIsSpanish(userLanguage.startsWith('es'));
    }, []);

    return (
        <MainLayout>
            <div className="flex justify-center mt-32 flex-col">
                <div className="flex justify-center">
                    <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight">
                        {isSpanish ? "La clave es la simplicidad" : "The key is the simplicity"}
                    </h1>

                </div>
                <div className="flex justify-center">
                    <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        Fácil de recordar, imposible de hackear
                    </h2>
                </div>
                <PasswordAnimate/>
                <PasswordForm/>
            </div>
        </MainLayout>
    )
}

export default App
