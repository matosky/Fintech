// config.ts or config.js
const env = process.env;

export const Config = {
  port: env.PORT || 3000,                      // Use the environment port, default to 3000
  baseUrl: env.REACT_APP_BASE_URL || 'http://localhost:3000', // Fallback to localhost in development
  prod: env.NODE_ENV === 'production',        // Check if in production mode
};
