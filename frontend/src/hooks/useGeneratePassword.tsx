import { useEffect, useRef, useState } from "react";
import { generatePasswordRequest } from "@/services/passwordRequest";
import { useGeneratePasswordStore } from "@/store/generatePasswordStore";
import { GeneratePasswordResponse } from "@/types/generatePasswordTypes";

export const useGeneratePassword = (): GeneratePasswordResponse => {
	const { formGeneratePassword } = useGeneratePasswordStore();
	const [password, setPassword] = useState<GeneratePasswordResponse>({
		password: "",
		timeToCrack: "",
		status: false,
	});
	const isFirstRender = useRef(true);

	useEffect(() => {
		const getPassword = async () => {
			const response = await generatePasswordRequest(formGeneratePassword);
			if (response.status) {
				setPassword(response);
			}
		};
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		getPassword();
	}, [formGeneratePassword]);

	return password;
};
