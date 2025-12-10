import Link from 'next/link';

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export default function Investment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <main className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Investments</h1>
        <p className="text-xl text-slate-600 mb-8">Track and manage your investments</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Total Invested</h3>
            <p className="text-3xl font-bold text-indigo-600">$89,300</p>
            <p className="text-sm text-gray-500 mt-2">Across 5 positions</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Current Return</h3>
            <p className="text-3xl font-bold text-green-600">+$12,450</p>
            <p className="text-sm text-gray-500 mt-2">+13.9% YTD</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Avg. Growth</h3>
            <p className="text-3xl font-bold text-blue-600">+7.2%</p>
            <p className="text-sm text-gray-500 mt-2">Per position</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Investment Positions</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Investment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Entry Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Current Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Gain/Loss</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Return %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Tech Growth Fund</td>
                  <td className="px-6 py-4 text-sm text-gray-600">$45.00</td>
                  <td className="px-6 py-4 text-sm text-gray-600">$48.50</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-semibold">+$3.50</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-semibold">+7.8%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Dividend ETF</td>
                  <td className="px-6 py-4 text-sm text-gray-600">$32.00</td>
                  <td className="px-6 py-4 text-sm text-gray-600">$35.20</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-semibold">+$3.20</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-semibold">+10.0%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Monthly Investment Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {monthNames.map((month, index) => (
              <Link
                key={index + 1}
                href={`/investment/${index + 1}/details`}
                className="bg-white rounded-lg shadow hover:shadow-lg p-4 transition-shadow hover:bg-indigo-50"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{month}</h3>
                    <p className="text-sm text-gray-600">Month {index + 1}</p>
                  </div>
                  <span className="inline-block text-indigo-600 font-semibold">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
