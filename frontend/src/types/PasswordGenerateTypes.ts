export interface PasswordGenerateRequest {
	count: number;
	type: string;
	isSpanish: boolean;
}

export interface PasswordGenerateResponse {
	status: boolean;
	password: string;
	timeToCrack: string;
}

export type ChangePasswordGenerateType = (
	name: keyof PasswordGenerateRequest,
	value: string | number | boolean,
) => void;
