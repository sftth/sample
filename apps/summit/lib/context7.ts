// Context7 MCP Integration
// This file provides utilities to interact with the Context7 MCP server

export interface Context7Config {
  apiKey: string;
}

/**
 * Get welcome message from Context7 MCP
 */
export async function getWelcomeMessage(): Promise<string> {
  try {
    // In a real application, you would make an API call to your Context7 MCP server
    // For now, we'll return a welcome message with Context7 information
    const message = `
      Welcome to Context7-Powered Next.js Application!
      
      This application is connected to the Context7 MCP (Model Context Protocol) server,
      which provides AI-powered documentation and code reference capabilities.
      
      Context7 helps you:
      - Search and retrieve up-to-date library documentation
      - Get contextual code examples and implementations
      - Integrate AI-powered research into your development workflow
      
      Start exploring with the welcome features above!
    `;
    return message;
  } catch (error) {
    console.error('Error fetching welcome message:', error);
    return 'Welcome to your Context7-powered Next.js application!';
  }
}

/**
 * Get Context7 status information
 */
export async function getContext7Status(): Promise<{ connected: boolean; message: string }> {
  try {
    // Check if Context7 is configured and available
    const apiKey = process.env.NEXT_PUBLIC_CONTEXT7_API_KEY || process.env.CONTEXT7_API_KEY;
    
    if (apiKey) {
      return {
        connected: true,
        message: 'Context7 MCP is configured and ready to use'
      };
    } else {
      return {
        connected: false,
        message: 'Context7 MCP configuration not found. Add CONTEXT7_API_KEY to environment variables.'
      };
    }
  } catch (error) {
    return {
      connected: false,
      message: `Error checking Context7 status: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
}
