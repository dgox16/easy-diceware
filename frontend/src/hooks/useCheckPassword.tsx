import { checkPasswordRequest } from "@/services/passwordRequest";
import { useLanguageStore } from "@/store/languageStore";
import {
	CheckPasswordRequest,
	CheckPasswordResponse,
} from "@/types/checkPasswordTypes";
import { useEffect, useState } from "react";

export const useCheckPassword = () => {
	const { isSpanish } = useLanguageStore();
	const [passwordInput, setPasswordInput] = useState("");
	const [password, setPassword] = useState<CheckPasswordResponse>({
		timeToCrack: "",
		status: false,
	});

	const handleChange = (input: string) => {
		setPasswordInput(input);
	};

	useEffect(() => {
		const handler = setTimeout(async () => {
			if (passwordInput) {
				const formData: CheckPasswordRequest = {
					password: passwordInput,
					isSpanish,
				};
				const res = await checkPasswordRequest(formData);
				if (res.status) {
					setPassword(res);
				}
			}
		}, 200);

		return () => {
			clearTimeout(handler);
		};
	}, [passwordInput]);

	return { password, handleChange };
};
