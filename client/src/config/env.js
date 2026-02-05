/**
 * Centralized environment configuration
 * All environment variables are defined here with type-safe access
 * This eliminates repetition and ensures consistent usage across the app
 */

export const ENV = {
  // API Configuration
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',

  // Contact Information
  CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL || 'contact@example.com',

  // Social Media URLs
  SOCIAL: {
    LINKEDIN: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com',
    GITHUB: import.meta.env.VITE_GITHUB_URL || 'https://github.com',
    TWITTER: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com',
    FACEBOOK: import.meta.env.VITE_FACEBOOK_URL || 'https://facebook.com',
  },

  // Development flag
  isDevelopment: import.meta.env.MODE === 'development',
};

// Export individual constants for convenience
export const {
  API_URL,
  CONTACT_EMAIL,
  SOCIAL,
  isDevelopment,
} = ENV;
