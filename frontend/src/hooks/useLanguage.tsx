import { useLanguageStore } from "@/store/languageStore";
import { useEffect } from "react";

export const useLanguage = () => {
    const { changeLanguage } = useLanguageStore();

    useEffect(() => {
        const userLanguage = navigator.language;
        changeLanguage(userLanguage.startsWith("es"));
    }, []);
}