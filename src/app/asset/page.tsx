export default function Asset() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <main className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Assets</h1>
        <p className="text-xl text-slate-600 mb-8">Manage your portfolio assets</p>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Asset Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Apple Inc.</td>
                <td className="px-6 py-4 text-sm text-gray-600">Stock</td>
                <td className="px-6 py-4 text-sm text-gray-600">25</td>
                <td className="px-6 py-4 text-sm text-gray-900 font-semibold">$4,250</td>
                <td className="px-6 py-4 text-sm text-green-600 font-semibold">+3.2%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Vanguard S&P 500 ETF</td>
                <td className="px-6 py-4 text-sm text-gray-600">ETF</td>
                <td className="px-6 py-4 text-sm text-gray-600">100</td>
                <td className="px-6 py-4 text-sm text-gray-900 font-semibold">$52,300</td>
                <td className="px-6 py-4 text-sm text-green-600 font-semibold">+2.1%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Treasury Bonds</td>
                <td className="px-6 py-4 text-sm text-gray-600">Bond</td>
                <td className="px-6 py-4 text-sm text-gray-600">50</td>
                <td className="px-6 py-4 text-sm text-gray-900 font-semibold">$51,200</td>
                <td className="px-6 py-4 text-sm text-red-600 font-semibold">-0.8%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
