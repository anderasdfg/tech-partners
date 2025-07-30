import { ui, defaultLang, type Locale } from './translations';

export type { Locale };

// Get translation for Astro components
export function useTranslations(lang: Locale) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

// Get current locale from URL path
export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Locale;
  return defaultLang;
}

// Get current locale from URL or localStorage
export function getCurrentLocale(): Locale {
  if (typeof window !== 'undefined') {
    // Check localStorage first
    const saved = localStorage.getItem('locale') as Locale;
    if (saved && (saved === 'en' || saved === 'es')) {
      return saved;
    }

    // Check URL path
    const path = window.location.pathname;
    if (path.startsWith('/es')) {
      return 'es';
    }
  }

  return defaultLang;
}

// Get translation by key and locale (for React components)
export function getTranslation(locale: Locale, key: string) {
  // Convert nested key to flat key format
  const flatKey = key.replace(
    /\./g,
    '.'
  ) as keyof (typeof ui)[typeof defaultLang];
  return ui[locale][flatKey] || ui[defaultLang][flatKey] || key;
}

// Set locale and save to localStorage (for React components)
export function setLocale(locale: Locale) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', locale);

    // Update URL if needed
    const currentPath = window.location.pathname;
    let newPath = currentPath;

    // Remove existing locale prefix
    if (currentPath.startsWith('/es')) {
      newPath = currentPath.substring(3) || '/';
    }

    // Add new locale prefix if not English
    if (locale === 'es') {
      newPath = '/es' + newPath;
    }

    if (newPath !== currentPath) {
      window.history.pushState({}, '', newPath);
      window.location.reload();
    }
  }
}

// Hook for React components
export function useTranslation(locale?: Locale) {
  const currentLocale = locale || getCurrentLocale();

  const t = (key: string) => getTranslation(currentLocale, key);

  return {
    locale: currentLocale,
    t,
    setLocale,
  };
}
