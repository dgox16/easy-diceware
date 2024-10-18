import { PasswordRequest, HandleChangeType, UsePasswordReturn } from '@/types/FormTypes';
import axios from 'axios';
import { useToast } from "@/hooks/use-toast"


import { useEffect, useRef, useState } from 'react';
import { useLanguageStore } from '@/store/languageStore';


export const usePassword = (initialValues: PasswordRequest): UsePasswordReturn => {
    const { toast } = useToast()
    const { isSpanish } = useLanguageStore();
    const [formData, setFormData] = useState<PasswordRequest>(initialValues);
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
                    description: isSpanish ? "Nueva contraseña creada." : "New password created.",
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