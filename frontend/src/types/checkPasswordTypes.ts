export interface CheckPasswordRequest {
	password: string;
	isSpanish: boolean;
}

export interface CheckPasswordResponse {
	status: boolean;
	timeToCrack: string;
}
