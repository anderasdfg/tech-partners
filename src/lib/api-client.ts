import type { ContactFormData } from '../types/contact-formdata';
import { CONTACT_CONFIG } from './config';

export interface ApiResponse {
  success: boolean;
  message?: string;
}

export class ContactApiError extends Error {
  constructor(message: string, public status?: number, public code?: string) {
    super(message);
    this.name = 'ContactApiError';
  }
}

export async function sendContactLead(
  data: ContactFormData
): Promise<ApiResponse> {
  try {
    const response = await fetch(CONTACT_CONFIG.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = `Failed to send contact form (${response.status})`;

      try {
        const errorData = JSON.parse(errorText);
        errorMessage = errorData.message || errorMessage;
      } catch {
        // If response is not JSON, use default message
      }

      throw new ContactApiError(
        errorMessage,
        response.status,
        response.status >= 500 ? 'SERVER_ERROR' : 'CLIENT_ERROR'
      );
    }

    const result = await response.json();
    return {
      success: true,
      message: result.message || 'Contact form sent successfully',
    };
  } catch (error) {
    if (error instanceof ContactApiError) {
      throw error;
    }

    // Network or other errors
    throw new ContactApiError(
      'Network error: Unable to send contact form',
      0,
      'NETWORK_ERROR'
    );
  }
}
