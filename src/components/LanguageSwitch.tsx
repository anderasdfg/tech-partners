import { useState, useEffect } from 'react';
import { useTranslation, setLocale, type Locale } from '../lib/i18n';
import { AVAILABLE_LANGUAGES } from '../utils/constants';

export default function LanguageSwitch() {
    const { locale } = useTranslation();
    const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setCurrentLocale(locale);
    }, [locale]);

    const handleLanguageChange = (newLocale: Locale) => {
        setCurrentLocale(newLocale);
        setLocale(newLocale);
        setIsOpen(false);
    };

    const currentLanguage = AVAILABLE_LANGUAGES.find(lang => lang.code === currentLocale) || AVAILABLE_LANGUAGES[0];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors border border-gray-600/30"
                aria-label="Select language"
            >
                <span className="text-xl">{currentLanguage.flag}</span>
                <span className="text-sm font-medium text-gray-300 hidden sm:block">
                    {currentLanguage.name}
                </span>
                <svg
                    className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Dropdown */}
                    <div className="absolute top-full right-0 mt-2 py-2 w-40 bg-gray-800 rounded-lg shadow-lg border border-gray-600/30 z-20">
                        {AVAILABLE_LANGUAGES.map((language) => (
                            <button
                                key={language.code}
                                onClick={() => handleLanguageChange(language.code)}
                                className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-700/50 transition-colors ${currentLocale === language.code ? 'bg-gray-700/30 text-green' : 'text-gray-300'
                                    }`}
                            >
                                <span className="text-lg">{language.flag}</span>
                                <span className="text-sm font-medium">{language.name}</span>
                                {currentLocale === language.code && (
                                    <svg
                                        className="w-4 h-4 ml-auto text-green"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
} 