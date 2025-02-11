export interface GeneratePasswordRequest {
	count: number;
	type: string;
	isSpanish: boolean;
	withNumbers: boolean;
}

export interface GeneratePasswordResponse {
	status: boolean;
	password: string;
	timeToCrack: string;
}

type ChangeGeneratePasswordType = (
	name: keyof GeneratePasswordRequest,
	value: string | number | boolean,
) => void;

export interface GeneratePasswordState {
	formGeneratePassword: GeneratePasswordRequest;
	changeFormGeneratePassword: ChangeGeneratePasswordType;
}
