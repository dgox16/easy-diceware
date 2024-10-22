import {
	PasswordGenerateRequest,
	PasswordGenerateResponse,
} from "@/types/PasswordGenerateTypes";
import axios from "./axios";

export const generatePasswordRequest = async (
	formData: PasswordGenerateRequest,
): Promise<PasswordGenerateResponse> => {
	const { data } = await axios.post("/password/generate", formData);
	return data;
};
