import React, { ReactNode } from "react";
import { useLanguageStore } from "@/store/languageStore";
import { Navbar } from "@/components/navbar/Navbar";

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const { isSpanish } = useLanguageStore();

    return (
        <>
            <Navbar />
            <main className="flex justify-center">
                <div className="w-full sm:w-[1000px]">
                    {children}
                </div>
            </main>
            <footer>
                <div className="flex justify-center mt-8">
                    <div className=" w-recommend text-center">
                        <p className="py-2 text-[12px] sm:text-[14px]">
                            © 2024 Diego Armando Gómez Martínez.
                            <span className="hidden sm:inline"> | </span>
                            <br aria-hidden={true} className="block sm:hidden" />
                            {isSpanish
                                ? "Casi todos los derechos reservados."
                                : "Almost all rights reserved."
                            }
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
};