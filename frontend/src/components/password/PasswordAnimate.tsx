import { TypeAnimation } from "react-type-animation";

const sequenceWords = [
	"carbon savings quarterly retrial",
	500,
	"nivel bruja garrido maximizar",
	500,
	"synthetic auction blinked breath",
	500,
	"reporte elevar colocado prensa",
	500,
	"viewable appendage retouch clumsy",
	500,
	"reja proveedor taller pasaje",
	500,
	"retrieval stainable nintendo shrimp",
	500,
	"bala motor regular autopista",
	500,
];

export const PasswordAnimate = () => {
	return (
		<div className="flex justify-center mt-5 mx-5 sm:mx-0">
			<div className="text-center text-sm sm:text-lg w-full  sm:w-[600px] bg-zinc-200 dark:bg-zinc-800 rounded-lg py-3 italic font-semibold text-zinc-600 dark:text-zinc-400">
				<TypeAnimation sequence={sequenceWords} speed={40} repeat={Infinity} />
			</div>
		</div>
	);
};
