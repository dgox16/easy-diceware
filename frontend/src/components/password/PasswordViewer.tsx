import { GeneratePasswordResponse } from "@/types/generatePasswordTypes";
import { TimeToCrack } from "./TimeToCrack";

export const PasswordViewer: React.FC<{
	password: GeneratePasswordResponse;
}> = ({ password }) => {
	return (
		<div className="flex flex-col justify-center mt-5 mx-5 sm:mx-0">
			<div className="text-center text-xs sm:text-lg w-full sm:w-[600px] mx-auto bg-zinc-200 dark:bg-zinc-800 rounded-lg py-3 px-1 font-semibold text-zinc-900 dark:text-zinc-100">
				{password.password}
			</div>
			<TimeToCrack timeToCrack={password.timeToCrack} />
		</div>
	);
};
