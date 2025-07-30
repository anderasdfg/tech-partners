import type { ContactFormData } from '../types/contact-formdata';
import {
  sendContactLead,
  type ApiResponse,
  ContactApiError,
} from '../lib/api-client';
import { validateContactForm } from '../utils/validation';
export interface ContactSubmissionResult {
  success: boolean;
  message: string;
  error?: {
    code?: string;
    status?: number;
  };
}

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactSubmissionResult> {
  // Validate form data using utility function
  const validation = validateContactForm(data);
  if (!validation.isValid) {
    return {
      success: false,
      message: validation.message!,
      error: { code: 'VALIDATION_ERROR' },
    };
  }

  try {
    const response = await sendContactLead(data);
    return {
      success: response.success,
      message: response.message || 'Your message has been sent successfully!',
    };
  } catch (error) {
    if (error instanceof ContactApiError) {
      return {
        success: false,
        message: error.message,
        error: {
          code: error.code,
          status: error.status,
        },
      };
    }

    // Fallback for unexpected errors
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      error: { code: 'UNKNOWN_ERROR' },
    };
  }
}
