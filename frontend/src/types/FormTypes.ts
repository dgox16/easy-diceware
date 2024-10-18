
export interface FormValues {
    count: number;
    type: string;
}

export interface UseFormReturn {
    formData: FormValues;
    handleChange: (name: keyof FormValues, value: string | number) => void;
    setFormData: React.Dispatch<React.SetStateAction<FormValues>>;
}

export interface PasswordFormProps {
    formData: FormValues;
    handleChange: (name: keyof FormValues, value: string | number) => void;
}