import { ReactNode } from 'react';

interface SummaryLayoutProps {
  children: ReactNode;
}

export default function SummaryLayout({ children }: SummaryLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="border-b border-indigo-200 bg-white/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"></div>
            <p className="text-sm font-semibold text-indigo-900">Portfolio Summary Dashboard</p>
          </div>
        </div>
      </div>
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10"></div>
        {children}
      </div>
    </div>
  );
}
