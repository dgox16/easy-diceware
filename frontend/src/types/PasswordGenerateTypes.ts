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
