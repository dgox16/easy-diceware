import React, { ReactNode } from "react";
import { useLanguageStore } from "@/store/languageStore";
import { Navbar } from "@/components/navbar/Navbar";

export const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
	const { isSpanish } = useLanguageStore();

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex flex-grow justify-center">
				<div className="w-full lg:w-[1000px] mt-24 sm:mt-[10.5rem]">
					{children}
				</div>
			</main>
			<footer className="flex justify-center mt-8">
				<div className=" w-recommend text-center">
					<p className="py-2 text-[12px] sm:text-[14px]">
						© {new Date().getFullYear()} Diego Armando Gómez Martínez.
						<span className="hidden sm:inline"> | </span>
						<br aria-hidden={true} className="block sm:hidden" />
						{isSpanish
							? "Casi todos los derechos reservados."
							: "Almost all rights reserved."}
					</p>
				</div>
			</footer>
		</div>
	);
};
