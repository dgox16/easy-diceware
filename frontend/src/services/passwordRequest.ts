import {
	PasswordGenerateRequest,
	PasswordGenerateResponse,
} from "@/types/PasswordGenerateTypes";
import axios from "./axios";

export const generatePasswordRequest = async ({
	formData,
	isSpanish,
}: PasswordGenerateRequest): Promise<PasswordGenerateResponse> => {
	const { data } = await axios.post(
		`${isSpanish ? "es" : "en"}/password/generate`,
		formData,
	);
	return data;
};
