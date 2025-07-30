/**
 * Application constants
 */

import type { Locale } from '../lib/i18n';

/**
 * Available languages for the application
 */
export const AVAILABLE_LANGUAGES = [
  {
    code: 'en' as Locale,
    name: 'English',
    flag: '🇺🇸',
  },
  {
    code: 'es' as Locale,
    name: 'Español',
    flag: '🇪🇸',
  },
] as const;
