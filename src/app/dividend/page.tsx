export default function Dividend() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <main className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Dividends</h1>
        <p className="text-xl text-slate-600 mb-8">Monitor your dividend income</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Total Earned (YTD)</h3>
            <p className="text-3xl font-bold text-green-600">$3,240</p>
            <p className="text-sm text-gray-500 mt-2">From dividends</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Monthly Average</h3>
            <p className="text-3xl font-bold text-blue-600">$270</p>
            <p className="text-sm text-gray-500 mt-2">Per month</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Yield</h3>
            <p className="text-3xl font-bold text-purple-600">3.6%</p>
            <p className="text-sm text-gray-500 mt-2">Annual yield</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Dividend History</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ex-Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Apple Inc.</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Dec 02, 2024</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Dec 12, 2024</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold">$57.50</td>
                  <td className="px-6 py-4 text-sm"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">Paid</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Vanguard S&P 500</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Nov 25, 2024</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Dec 04, 2024</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold">$245.75</td>
                  <td className="px-6 py-4 text-sm"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">Paid</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Dividend ETF</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Jan 10, 2025</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Jan 20, 2025</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold">$142.60</td>
                  <td className="px-6 py-4 text-sm"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Upcoming</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
