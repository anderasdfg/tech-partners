import type { ContactFormData } from '../types/contact-formdata';
import { sendContactLead } from '../lib/api-client';

export async function submitContactForm(data: ContactFormData): Promise<void> {
  await sendContactLead(data);
} 