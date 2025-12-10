export default function Cash() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <main className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Cash Management</h1>
        <p className="text-xl text-slate-600 mb-8">Monitor your available cash and transactions</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Available Cash</h3>
            <p className="text-3xl font-bold text-green-600">$36,150.00</p>
            <p className="text-sm text-gray-500 mt-2">Ready to invest</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Reserved</h3>
            <p className="text-3xl font-bold text-orange-600">$5,200.00</p>
            <p className="text-sm text-gray-500 mt-2">For pending orders</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Total Cash</h3>
            <p className="text-3xl font-bold text-blue-600">$41,350.00</p>
            <p className="text-sm text-gray-500 mt-2">In account</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Transactions</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <div>
                  <p className="text-sm font-medium text-gray-900">Dividend Payment - Apple</p>
                  <p className="text-sm text-gray-500">Dec 12, 2024</p>
                </div>
                <p className="text-sm font-semibold text-green-600">+$57.50</p>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <div>
                  <p className="text-sm font-medium text-gray-900">Stock Purchase - MSFT</p>
                  <p className="text-sm text-gray-500">Dec 10, 2024</p>
                </div>
                <p className="text-sm font-semibold text-red-600">-$3,200.00</p>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <div>
                  <p className="text-sm font-medium text-gray-900">Dividend Payment - Vanguard</p>
                  <p className="text-sm text-gray-500">Dec 04, 2024</p>
                </div>
                <p className="text-sm font-semibold text-green-600">+$245.75</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-900">Wire Transfer In</p>
                  <p className="text-sm text-gray-500">Nov 28, 2024</p>
                </div>
                <p className="text-sm font-semibold text-green-600">+$5,000.00</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Cash Flow Summary</h2>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded">
                <p className="text-sm text-gray-600 mb-1">Monthly Income</p>
                <p className="text-2xl font-bold text-green-600">$5,345.25</p>
              </div>
              <div className="p-4 bg-red-50 border border-red-200 rounded">
                <p className="text-sm text-gray-600 mb-1">Monthly Outflow</p>
                <p className="text-2xl font-bold text-red-600">$3,200.00</p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                <p className="text-sm text-gray-600 mb-1">Net Monthly</p>
                <p className="text-2xl font-bold text-blue-600">+$2,145.25</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Bank Accounts</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <div>
                <p className="text-sm font-medium text-gray-900">Primary Checking</p>
                <p className="text-sm text-gray-500">****1234</p>
              </div>
              <p className="text-sm font-semibold text-gray-900">$36,150.00</p>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <div>
                <p className="text-sm font-medium text-gray-900">Money Market Fund</p>
                <p className="text-sm text-gray-500">Yield: 4.5%</p>
              </div>
              <p className="text-sm font-semibold text-gray-900">$5,200.00</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
