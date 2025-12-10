// Examples for using Context7 MCP in your application

// Example 1: Fetching welcome message in a component
import { getWelcomeMessage } from '@/lib/context7';

export async function Example1() {
  const message = await getWelcomeMessage();
  return <div>{message}</div>;
}

// Example 2: Checking Context7 connection status
import { getContext7Status } from '@/lib/context7';

export async function Example2() {
  const status = await getContext7Status();
  return (
    <div>
      <p>Connected: {status.connected ? 'Yes' : 'No'}</p>
      <p>Status: {status.message}</p>
    </div>
  );
}

// Example 3: Using configuration in API routes
import { context7Config } from '@/config/context7.config';

export async function handler() {
  if (!context7Config.enabled) {
    return { error: 'Context7 is disabled' };
  }

  const apiKey = context7Config.apiKey;
  const baseUrl = context7Config.server.baseUrl;
  
  // Use apiKey and baseUrl for Context7 API calls
  return { message: 'Context7 configured and ready' };
}

// Example 4: Custom hook for Context7 data
'use client';

import { useEffect, useState } from 'react';
import { getContext7Status } from '@/lib/context7';

export function useContext7() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      const data = await getContext7Status();
      setStatus(data);
      setLoading(false);
    };
    
    fetchStatus();
  }, []);

  return { status, loading };
}

// Example 5: Using the custom hook in a component
export function MyComponent() {
  const { status, loading } = useContext7();
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      Status: {status?.connected ? 'Connected' : 'Disconnected'}
    </div>
  );
}

// Example 6: Server-side Context7 integration
import { context7Config } from '@/config/context7.config';

export async function getContext7Data() {
  if (!context7Config.enabled) {
    throw new Error('Context7 is disabled');
  }

  // This runs on the server, so you have access to the API key
  const response = await fetch(
    `${context7Config.server.baseUrl}/api/documentation`,
    {
      headers: {
        'Authorization': `Bearer ${context7Config.apiKey}`,
      },
    }
  );

  return response.json();
}
