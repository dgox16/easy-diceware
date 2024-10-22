export interface PasswordGenerateForm {
	count: number;
	type: string;
}

export interface PasswordGenerateResponse {
	status: boolean;
	password: string;
	timeToCrack: string;
}

export interface PasswordGenerateRequest {
	formData: PasswordGenerateForm;
	isSpanish: boolean;
}

export type HandleChangePasswordGenerateType = (
	name: keyof PasswordGenerateForm,
	value: string | number,
) => void;

export interface UsePasswordGenerateReturn {
	formData: PasswordGenerateForm;
	handleChange: HandleChangePasswordGenerateType;
	password: PasswordGenerateResponse;
}

export interface PasswordGenerateFormProps {
	formData: PasswordGenerateForm;
	handleChange: HandleChangePasswordGenerateType;
}
