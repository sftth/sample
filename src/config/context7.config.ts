// Configuration for Context7 MCP Integration
// This file demonstrates how to configure and use Context7 in your Next.js application

export const context7Config = {
  // Enable or disable Context7 integration
  enabled: process.env.NEXT_PUBLIC_CONTEXT7_ENABLED === 'true',
  
  // API key for authentication (stored as environment variable)
  apiKey: process.env.CONTEXT7_API_KEY || '',
  
  // Server configuration
  server: {
    // If you're running a local Context7 MCP server, configure it here
    baseUrl: process.env.CONTEXT7_SERVER_URL || 'http://localhost:8000',
    timeout: 30000, // 30 seconds
  },
  
  // Features
  features: {
    documentation: true,
    codeExamples: true,
    search: true,
  },
  
  // Logging
  debug: process.env.NODE_ENV === 'development',
};

export default context7Config;
