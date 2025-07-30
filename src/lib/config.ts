export const API_CONFIG = {
  baseUrl: import.meta.env.PUBLIC_TP_API_BASE_URL || 'http://localhost:3000',
  timeout: 10000,
};

export const CONTACT_CONFIG = {
  endpoint:
    `${import.meta.env.PUBLIC_TP_API_BASE_URL}/api/leads` ||
    'https://api.example.com/contact',
  timeout: 10000,
};
