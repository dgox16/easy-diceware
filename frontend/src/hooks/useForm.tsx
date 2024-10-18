import { FormValues, UseFormReturn } from '@/types/FormTypes';
import { useEffect, useRef, useState } from 'react';


export const useForm = (initialValues: FormValues): UseFormReturn => {
    const [formData, setFormData] = useState<FormValues>(initialValues);
    const isFirstRender = useRef(true);

    const handleChange = (name: keyof FormValues, value: string | number) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        console.log('Datos actualizados:', formData);
    }, [formData]);

    return { formData, handleChange, setFormData };
};