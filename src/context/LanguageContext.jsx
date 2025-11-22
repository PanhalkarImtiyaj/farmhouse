import React, { createContext, useContext, useState, useEffect } from 'react';
import enContent from '../data/content/en.json';
import mrContent from '../data/content/mr.json';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [content, setContent] = useState(enContent);

    useEffect(() => {
        // Load language preference from localStorage
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'mr')) {
            setLanguage(savedLanguage);
            setContent(savedLanguage === 'en' ? enContent : mrContent);
        }
    }, []);

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'mr' : 'en';
        setLanguage(newLanguage);
        setContent(newLanguage === 'en' ? enContent : mrContent);
        localStorage.setItem('language', newLanguage);
    };

    const switchLanguage = (lang) => {
        if (lang === 'en' || lang === 'mr') {
            setLanguage(lang);
            setContent(lang === 'en' ? enContent : mrContent);
            localStorage.setItem('language', lang);
        }
    };

    const value = {
        language,
        content,
        toggleLanguage,
        switchLanguage,
        isMarathi: language === 'mr',
        isEnglish: language === 'en',
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;
