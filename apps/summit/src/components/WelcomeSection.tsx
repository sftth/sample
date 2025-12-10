'use client';

import { useEffect, useState } from 'react';
import { getWelcomeMessage, getContext7Status } from '@/lib/context7';

export default function WelcomeSection() {
  const [welcomeMessage, setWelcomeMessage] = useState<string>('Loading welcome message...');
  const [context7Status, setContext7Status] = useState<{ connected: boolean; message: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const message = await getWelcomeMessage();
        const status = await getContext7Status();
        
        setWelcomeMessage(message);
        setContext7Status(status);
      } catch (error) {
        console.error('Error fetching data:', error);
        setWelcomeMessage('Failed to load welcome message. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin">
          <div className="h-8 w-8 border-4 border-blue-500 border-transparent border-t-blue-500 rounded-full mx-auto"></div>
        </div>
        <p className="mt-4 text-gray-600">Loading Context7 welcome experience...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome Message */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Welcome!</h2>
        <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
          {welcomeMessage}
        </div>
      </div>

      {/* Context7 Status */}
      {context7Status && (
        <div className={`border rounded-lg p-6 ${
          context7Status.connected 
            ? 'bg-green-50 border-green-200' 
            : 'bg-yellow-50 border-yellow-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`h-3 w-3 rounded-full ${context7Status.connected ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
            <div>
              <h3 className={`font-semibold ${context7Status.connected ? 'text-green-900' : 'text-yellow-900'}`}>
                {context7Status.connected ? 'Context7 Connected' : 'Context7 Status'}
              </h3>
              <p className={context7Status.connected ? 'text-green-700' : 'text-yellow-700'}>
                {context7Status.message}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
          <div className="text-3xl mb-3">📚</div>
          <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
          <p className="text-gray-600 text-sm">Access real-time, up-to-date library documentation through Context7 MCP</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
          <div className="text-3xl mb-3">💡</div>
          <h3 className="font-semibold text-gray-900 mb-2">Code Examples</h3>
          <p className="text-gray-600 text-sm">Get contextual code snippets and implementation examples</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
          <div className="text-3xl mb-3">🔍</div>
          <h3 className="font-semibold text-gray-900 mb-2">AI Search</h3>
          <p className="text-gray-600 text-sm">Intelligent search across multiple libraries and frameworks</p>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
        <h3 className="font-semibold text-indigo-900 mb-3">Getting Started</h3>
        <ol className="space-y-2 text-indigo-800 text-sm">
          <li>1. Configure your Context7 API key in environment variables</li>
          <li>2. Use the Context7 utilities to search documentation and get code examples</li>
          <li>3. Integrate AI-powered research into your development workflow</li>
        </ol>
      </div>
    </div>
  );
}
