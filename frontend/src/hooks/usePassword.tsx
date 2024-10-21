import {
	PasswordRequest,
	HandleChangeType,
	UsePasswordReturn,
	PasswordResponse,
} from "@/types/FormTypes";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

import { useEffect, useRef, useState } from "react";
import { useLanguageStore } from "@/store/languageStore";

export const usePassword = (
	initialValues: PasswordRequest,
): UsePasswordReturn => {
	const { toast } = useToast();
	const { isSpanish } = useLanguageStore();
	const [formData, setFormData] = useState<PasswordRequest>(initialValues);
	const [password, setPassword] = useState<PasswordResponse>({
		password: "",
		timeToCrack: "",
	});
	const isFirstRender = useRef(true);

	const handleChange: HandleChangeType = (name, value) => {
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	useEffect(() => {
		const getPassword = async () => {
			const { data } = await axios.post(
				`${import.meta.env.VITE_API_URL}/${isSpanish ? "es" : "en"}/password`,
				formData,
			);
			console.log(data);
			if (data.status) {
				setPassword({
					password: data.password,
					timeToCrack: data.timeToCrack,
				});
				toast({
					description: isSpanish
						? "Nueva contraseña creada."
						: "New password created.",
				});
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
