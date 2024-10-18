import { useEffect, useState } from "react";

export const userLanguage = () => {
    const [isSpanish, setIsSpanish] = useState(false);

    useEffect(() => {
        const userLanguage = navigator.language;
        setIsSpanish(!userLanguage.startsWith("es"));
    }, []);

    return { isSpanish }

}