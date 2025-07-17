import type { ContactFormData } from '../types/contact-formdata';
import { API_CONFIG } from './config';

export async function sendContactLead(data: ContactFormData): Promise<void> {
  const response = await fetch(`${API_CONFIG.baseUrl}/api/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to send contact info');
  }
}