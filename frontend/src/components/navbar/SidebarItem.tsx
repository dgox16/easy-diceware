import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export const SidebarItem: React.FC<{
	children: ReactNode;
	to: string;
	ariaLabel: string;
	external: boolean;
}> = ({ children, to, ariaLabel, external }) => {
	return (
		<li className="mb-0 py-2  text-left">
			<Link
				to={to}
				aria-label={ariaLabel}
				target={external ? "_blank" : "_self"}
				rel={external ? "noreferrer noopener" : ""}
			>
				{children}
			</Link>
		</li>
	);
};
