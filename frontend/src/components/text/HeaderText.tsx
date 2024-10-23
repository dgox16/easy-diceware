import { ReactNode } from "react";

export const PrincipalText: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	return (
		<h1 className="scroll-m-20 text-[1.88rem] sm:text-6xl -mb-1 sm:mb-1 font-black tracking-tight">
			{children}
		</h1>
	);
};

export const SecondaryText: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	return (
		<h2 className="scroll-m-20 text-base sm:text-2xl font-semibold tracking-tight">
			{children}
		</h2>
	);
};
