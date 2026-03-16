import { createContext, useContext, useState } from "react";
import id from "../locales/id.json";
import en from "../locales/en.json";

const translations = { id, en };
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(
        () => localStorage.getItem("lang") || "id"
    );

    const translation = (key) => {
        const data = translations[lang] || translations[lang?.toLocaleLowerCase()];
        if (!data) return key;

        return key.split(".").reduce((obj, k) => obj?.[k], data) ?? key;
    };

    const changeLang = (code) => {
        setLang(code);
        localStorage.setItem("lang", code);
    };

    return (
        <LanguageContext.Provider value={{ lang, changeLang, translation }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);