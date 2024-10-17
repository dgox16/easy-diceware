import {MainLayout} from "@/layouts/MainLayout.tsx";
import {useEffect, useState} from "react";

const dicewarePasswords = [
    "volcano monkey whisker sunset",
    "moon river dragon shadow",
    "cactus eagle thunder paper",
    "night crystal ocean ripple"
];

function App() {
    const [isSpanish, setIsSpanish] = useState(false);

    useEffect(() => {
        const userLanguage = navigator.language
        setIsSpanish(userLanguage.startsWith('es'));
    }, []);
    const [displayedText, setDisplayedText] = useState("");
    const [currentPassword, setCurrentPassword] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const password = dicewarePasswords[currentPassword];
        if (charIndex < password.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + password[charIndex]);
                setCharIndex(charIndex + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            const resetTimeout = setTimeout(() => {
                setDisplayedText("");
                setCharIndex(0);
                setCurrentPassword((currentPassword + 1) % dicewarePasswords.length);
            }, 2000);
            return () => clearTimeout(resetTimeout);
        }
    }, [charIndex, currentPassword]);

    return (
        <MainLayout>
            <div className="flex justify-center mt-32 flex-col">
                <div className="flex justify-center">
                    <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight">
                        {isSpanish ? "La clave es la simplicidad" : " The key is the simplicity"}
                    </h1>

                </div>
                <div className="flex justify-center">
                    <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        Fácil de recordar, imposible de hackear
                    </h2>
                </div>
                <div className="flex justify-center mt-5">
                    <div
                        className="text-center text-lg w-[600px] bg-zinc-200 dark:bg-zinc-800 rounded-lg py-3 italic font-semibold text-zinc-800 dark:text-zinc-200">
                        {displayedText || <span>&nbsp;</span>}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default App
