/**
 * Utility functions barrel export
 * This file provides a convenient way to import all utility functions
 */

// Device utilities
export { getDeviceType } from './device';

// Validation utilities
export {
  emailRegex,
  isValidEmail,
  isRequiredFieldValid,
  validateContactForm,
  type ValidationResult,
} from './validation';

// Constants
export { AVAILABLE_LANGUAGES } from './constants';
