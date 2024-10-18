import { FormValues, HandleChangeType, UseFormReturn } from '@/types/FormTypes';
import axios from 'axios';
import { useToast } from "@/hooks/use-toast"


import { useEffect, useRef, useState } from 'react';


export const usePassword = (initialValues: FormValues): UseFormReturn => {
    const { toast } = useToast()

    const [formData, setFormData] = useState<FormValues>(initialValues);
    const [password, setPassword] = useState("")
    const isFirstRender = useRef(true);

    const handleChange: HandleChangeType = (name, value) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        const getPassword = async () => {
            const { data } = await axios.post("http://localhost:8000/es/password", formData)
            if (data.status) {
                setPassword(data.password)
                toast({
                    description: "Nueva contraseña creada.",
                })
            }
        }
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        getPassword()
    }, [formData]);

    return { formData, handleChange, password };
};