
export interface FormValues {
    count: number;
    type: string;
}

export type HandleChangeType = (name: keyof FormValues, value: string | number) => void;


export interface UseFormReturn {
    formData: FormValues;
    handleChange: HandleChangeType
    password: string
}

export interface PasswordFormProps {
    formData: FormValues;
    handleChange: HandleChangeType
    isSpanish: boolean
}