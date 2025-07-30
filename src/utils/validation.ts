/**
 * Validation utilities
 */

/**
 * Regular expression for email validation
 */
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates an email address
 * @param email - Email address to validate
 * @returns True if valid, false otherwise
 */
export const isValidEmail = (email: string): boolean => {
  return emailRegex.test(email);
};

/**
 * Validates required field (not empty or just whitespace)
 * @param value - Value to validate
 * @returns True if valid, false otherwise
 */
export const isRequiredFieldValid = (value?: string): boolean => {
  return Boolean(value?.trim());
};

/**
 * Validation result interface
 */
export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

/**
 * Validates contact form data
 * @param data - Form data to validate
 * @returns Validation result
 */
export const validateContactForm = (data: {
  name?: string;
  email?: string;
  message?: string;
}): ValidationResult => {
  if (!isRequiredFieldValid(data.name)) {
    return {
      isValid: false,
      message: 'Name is required',
    };
  }

  if (!isRequiredFieldValid(data.email)) {
    return {
      isValid: false,
      message: 'Email is required',
    };
  }

  if (!isValidEmail(data.email!)) {
    return {
      isValid: false,
      message: 'Please enter a valid email address',
    };
  }

  if (!isRequiredFieldValid(data.message)) {
    return {
      isValid: false,
      message: 'Message is required',
    };
  }

  return { isValid: true };
};
