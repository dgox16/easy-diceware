import {
	PasswordGenerateResponse,
	PasswordGenerateForm,
	HandleChangePasswordGenerateType,
	UsePasswordGenerateReturn,
} from "@/types/PasswordGenerateTypes";
import { useEffect, useRef, useState } from "react";
import { useLanguageStore } from "@/store/languageStore";
import { generatePasswordRequest } from "@/services/passwordRequest";

export const useGeneratePassword = (
	initialValues: PasswordGenerateForm,
): UsePasswordGenerateReturn => {
	const { isSpanish } = useLanguageStore();
	const [formData, setFormData] = useState<PasswordGenerateForm>(initialValues);
	const [password, setPassword] = useState<PasswordGenerateResponse>({
		password: "",
		timeToCrack: "",
		status: false,
	});
	const isFirstRender = useRef(true);

	const handleChange: HandleChangePasswordGenerateType = (name, value) => {
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	useEffect(() => {
		const getPassword = async () => {
			const response = await generatePasswordRequest({ formData, isSpanish });
			if (response.status) {
				setPassword(response);
			}
		};
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		getPassword();
	}, [formData]);

	return { formData, handleChange, password };
};
