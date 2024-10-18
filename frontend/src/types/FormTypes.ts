
export interface PasswordRequest {
    count: number;
    type: string;
}

export type HandleChangeType = (name: keyof PasswordRequest, value: string | number) => void;


export interface UsePasswordReturn {
    formData: PasswordRequest;
    handleChange: HandleChangeType
    password: string
}

export interface PasswordFormProps {
    formData: PasswordRequest;
    handleChange: HandleChangeType
}