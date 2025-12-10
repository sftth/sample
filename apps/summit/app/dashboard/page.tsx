import Link from 'next/link';
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <main className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Dashboard</h1>
            <p className="text-xl text-slate-600">Your portfolio overview</p>
          </div>
          <Link
            href="/dashboard/summary"
            className="inline-flex items-center justify-center p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
            title="View Portfolio Summary"
          >
            <Image
              src="/window.svg"
              alt="Summary"
              width={24}
              height={24}
              className="invert"
            />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Total Assets</h3>
            <p className="text-3xl font-bold text-indigo-600">$125,450</p>
            <p className="text-sm text-gray-500 mt-2">+2.5% this month</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Total Investments</h3>
            <p className="text-3xl font-bold text-green-600">$89,300</p>
            <p className="text-sm text-gray-500 mt-2">+5.2% this quarter</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Dividends Earned</h3>
            <p className="text-3xl font-bold text-blue-600">$3,240</p>
            <p className="text-sm text-gray-500 mt-2">This year</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Available Cash</h3>
            <p className="text-3xl font-bold text-purple-600">$36,150</p>
            <p className="text-sm text-gray-500 mt-2">Ready to invest</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Summary</h2>
          <p className="text-gray-600">Dashboard content coming soon. Manage your complete portfolio here.</p>
        </div>
      </main>
    </div>
  );
}
