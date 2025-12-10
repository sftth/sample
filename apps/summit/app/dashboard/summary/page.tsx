export default function DashboardSummary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <main className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Portfolio Summary</h1>
          <p className="text-xl text-slate-600">Detailed overview of your entire portfolio</p>
        </div>

        {/* Key Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Total Portfolio Value</h3>
            <p className="text-3xl font-bold text-indigo-600">$161,600</p>
            <p className="text-sm text-gray-500 mt-2">+4.2% this month</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Total Gain/Loss</h3>
            <p className="text-3xl font-bold text-green-600">+$24,700</p>
            <p className="text-sm text-gray-500 mt-2">+18% overall</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Annual Return</h3>
            <p className="text-3xl font-bold text-blue-600">+12.5%</p>
            <p className="text-sm text-gray-500 mt-2">YTD performance</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Diversification Score</h3>
            <p className="text-3xl font-bold text-purple-600">8.2/10</p>
            <p className="text-sm text-gray-500 mt-2">Well diversified</p>
          </div>
        </div>

        {/* Portfolio Allocation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Asset Allocation</h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <p className="text-sm font-medium text-gray-700">Stocks</p>
                  <p className="text-sm font-semibold text-gray-900">55%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '55%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <p className="text-sm font-medium text-gray-700">Bonds</p>
                  <p className="text-sm font-semibold text-gray-900">30%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <p className="text-sm font-medium text-gray-700">ETFs</p>
                  <p className="text-sm font-semibold text-gray-900">10%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <p className="text-sm font-medium text-gray-700">Cash</p>
                  <p className="text-sm font-semibold text-gray-900">5%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '5%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Performance Metrics</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <p className="text-sm text-gray-600">1-Month Return</p>
                <p className="text-sm font-semibold text-green-600">+2.3%</p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <p className="text-sm text-gray-600">3-Month Return</p>
                <p className="text-sm font-semibold text-green-600">+5.1%</p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <p className="text-sm text-gray-600">6-Month Return</p>
                <p className="text-sm font-semibold text-green-600">+8.7%</p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <p className="text-sm text-gray-600">1-Year Return</p>
                <p className="text-sm font-semibold text-green-600">+12.5%</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Volatility</p>
                <p className="text-sm font-semibold text-gray-900">8.3%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Holdings */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Top 5 Holdings</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Symbol</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Shares</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">% of Portfolio</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Gain/Loss</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">AAPL</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Apple Inc.</td>
                  <td className="px-6 py-4 text-sm text-gray-600">25</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">$4,250</td>
                  <td className="px-6 py-4 text-sm text-gray-600">2.6%</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-semibold">+$850</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">VOO</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Vanguard S&P 500</td>
                  <td className="px-6 py-4 text-sm text-gray-600">100</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">$52,300</td>
                  <td className="px-6 py-4 text-sm text-gray-600">32.3%</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-semibold">+$8,200</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">BND</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Vanguard Bond</td>
                  <td className="px-6 py-4 text-sm text-gray-600">50</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">$51,200</td>
                  <td className="px-6 py-4 text-sm text-gray-600">31.6%</td>
                  <td className="px-6 py-4 text-sm text-red-600 font-semibold">-$400</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">MSFT</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Microsoft Corp.</td>
                  <td className="px-6 py-4 text-sm text-gray-600">15</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">$30,450</td>
                  <td className="px-6 py-4 text-sm text-gray-600">18.8%</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-semibold">+$6,120</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">VYM</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Dividend ETF</td>
                  <td className="px-6 py-4 text-sm text-gray-600">40</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">$23,400</td>
                  <td className="px-6 py-4 text-sm text-gray-600">14.5%</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-semibold">+$3,930</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
