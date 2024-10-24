import axios from "./axios";
import {
	GeneratePasswordRequest,
	GeneratePasswordResponse,
} from "@/types/generatePasswordTypes";
import {
	CheckPasswordRequest,
	CheckPasswordResponse,
} from "@/types/checkPasswordTypes";

export const generatePasswordRequest = async (
	formData: GeneratePasswordRequest,
): Promise<GeneratePasswordResponse> => {
	const { data } = await axios.post("/password/generate", formData);
	return data;
};

export const checkPasswordRequest = async (
	formData: CheckPasswordRequest,
): Promise<CheckPasswordResponse> => {
	const { data } = await axios.post("/password/check", formData);
	return data;
};
