import Link from 'next/link';
import { notFound } from 'next/navigation';

interface InvestmentDetailsPageProps {
  params: {
    slug: string;
  };
}

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const monthData: Record<number, {
  totalInvested: number;
  currentValue: number;
  return: number;
  returnPercentage: number;
  positions: Array<{
    symbol: string;
    name: string;
    invested: number;
    current: number;
    return: number;
  }>;
}> = {
  1: {
    totalInvested: 25000,
    currentValue: 28500,
    return: 3500,
    returnPercentage: 14,
    positions: [
      { symbol: 'AAPL', name: 'Apple Inc.', invested: 5000, current: 5850, return: 850 },
      { symbol: 'MSFT', name: 'Microsoft Corp.', invested: 8000, current: 9200, return: 1200 },
      { symbol: 'GOOGL', name: 'Alphabet Inc.', invested: 12000, current: 13450, return: 1450 }
    ]
  },
  2: {
    totalInvested: 28000,
    currentValue: 31200,
    return: 3200,
    returnPercentage: 11.4,
    positions: [
      { symbol: 'AAPL', name: 'Apple Inc.', invested: 6000, current: 6750, return: 750 },
      { symbol: 'MSFT', name: 'Microsoft Corp.', invested: 8000, current: 8900, return: 900 },
      { symbol: 'TSLA', name: 'Tesla Inc.', invested: 14000, current: 15550, return: 1550 }
    ]
  },
  3: {
    totalInvested: 32000,
    currentValue: 36800,
    return: 4800,
    returnPercentage: 15,
    positions: [
      { symbol: 'AAPL', name: 'Apple Inc.', invested: 6000, current: 7200, return: 1200 },
      { symbol: 'NVDA', name: 'NVIDIA Corp.', invested: 10000, current: 12500, return: 2500 },
      { symbol: 'MSFT', name: 'Microsoft Corp.', invested: 16000, current: 17100, return: 1100 }
    ]
  },
  4: {
    totalInvested: 35000,
    currentValue: 38500,
    return: 3500,
    returnPercentage: 10,
    positions: [
      { symbol: 'AAPL', name: 'Apple Inc.', invested: 7000, current: 7500, return: 500 },
      { symbol: 'MSFT', name: 'Microsoft Corp.', invested: 15000, current: 16200, return: 1200 },
      { symbol: 'AMZN', name: 'Amazon.com Inc.', invested: 13000, current: 14800, return: 1800 }
    ]
  },
  5: {
    totalInvested: 40000,
    currentValue: 43200,
    return: 3200,
    returnPercentage: 8,
    positions: [
      { symbol: 'MSFT', name: 'Microsoft Corp.', invested: 15000, current: 16500, return: 1500 },
      { symbol: 'NVDA', name: 'NVIDIA Corp.', invested: 15000, current: 16800, return: 1800 },
      { symbol: 'AMZN', name: 'Amazon.com Inc.', invested: 10000, current: 9900, return: -100 }
    ]
  },
  6: {
    totalInvested: 42000,
    currentValue: 45600,
    return: 3600,
    returnPercentage: 8.6,
    positions: [
      { symbol: 'AAPL', name: 'Apple Inc.', invested: 8000, current: 8800, return: 800 },
      { symbol: 'MSFT', name: 'Microsoft Corp.', invested: 16000, current: 17600, return: 1600 },
      { symbol: 'GOOGL', name: 'Alphabet Inc.', invested: 18000, current: 19200, return: 1200 }
    ]
  },
  7: {
    totalInvested: 45000,
    currentValue: 49500,
    return: 4500,
    returnPercentage: 10,
    positions: [
      { symbol: 'AAPL', name: 'Apple Inc.', invested: 8000, current: 9200, return: 1200 },
      { symbol: 'MSFT', name: 'Microsoft Corp.', invested: 17000, current: 19200, return: 2200 },
      { symbol: 'AMZN', name: 'Amazon.com Inc.', invested: 20000, current: 21100, return: 1100 }
    ]
  },
  8: {
    totalInvested: 48000,
    currentValue: 51200,
    return: 3200,
    returnPercentage: 6.7,
    positions: [
      { symbol: 'AAPL', name: 'Apple Inc.', invested: 9000, current: 9500, return: 500 },
      { symbol: 'MSFT', name: 'Microsoft Corp.', invested: 18000, current: 19200, return: 1200 },
      { symbol: 'NVDA', name: 'NVIDIA Corp.', invested: 21000, current: 22500, return: 1500 }
    ]
  },
  9: {
    totalInvested: 50000,
    currentValue: 54000,
    return: 4000,
    returnPercentage: 8,
    positions: [
      { symbol: 'MSFT', name: 'Microsoft Corp.', invested: 18000, current: 19800, return: 1800 },
      { symbol: 'AAPL', name: 'Apple Inc.', invested: 9000, current: 9900, return: 900 },
      { symbol: 'GOOGL', name: 'Alphabet Inc.', invested: 23000, current: 24300, return: 1300 }
    ]
  },
  10: {
    totalInvested: 52000,
    currentValue: 56800,
    return: 4800,
    returnPercentage: 9.2,
    positions: [
      { symbol: 'AAPL', name: 'Apple Inc.', invested: 10000, current: 11200, return: 1200 },
      { symbol: 'MSFT', name: 'Microsoft Corp.', invested: 20000, current: 22000, return: 2000 },
      { symbol: 'AMZN', name: 'Amazon.com Inc.', invested: 22000, current: 23600, return: 1600 }
    ]
  },
  11: {
    totalInvested: 55000,
    currentValue: 60500,
    return: 5500,
    returnPercentage: 10,
    positions: [
      { symbol: 'AAPL', name: 'Apple Inc.', invested: 10000, current: 11500, return: 1500 },
      { symbol: 'NVDA', name: 'NVIDIA Corp.', invested: 20000, current: 23000, return: 3000 },
      { symbol: 'MSFT', name: 'Microsoft Corp.', invested: 25000, current: 26000, return: 1000 }
    ]
  },
  12: {
    totalInvested: 58000,
    currentValue: 64500,
    return: 6500,
    returnPercentage: 11.2,
    positions: [
      { symbol: 'AAPL', name: 'Apple Inc.', invested: 11000, current: 12500, return: 1500 },
      { symbol: 'MSFT', name: 'Microsoft Corp.', invested: 25000, current: 27500, return: 2500 },
      { symbol: 'GOOGL', name: 'Alphabet Inc.', invested: 22000, current: 24500, return: 2500 }
    ]
  }
};

export default async function InvestmentDetailsPage({ params }: InvestmentDetailsPageProps) {
  const { slug } = await params;
  const monthNumber = parseInt(slug);

  // Validate month number (1-12)
  if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
    notFound();
  }

  const data = monthData[monthNumber];
  const monthName = monthNames[monthNumber - 1];

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <main className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/investment"
            className="text-indigo-600 hover:text-indigo-700 font-medium mb-4 inline-block"
          >
            ← Back to Investments
          </Link>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            {monthName} 2024 Investment Details
          </h1>
          <p className="text-xl text-slate-600">Detailed breakdown of your monthly investments</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Total Invested</h3>
            <p className="text-3xl font-bold text-indigo-600">${data.totalInvested.toLocaleString()}</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Current Value</h3>
            <p className="text-3xl font-bold text-blue-600">${data.currentValue.toLocaleString()}</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Gain/Loss</h3>
            <p className="text-3xl font-bold text-green-600">
              +${Math.abs(data.return).toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Return %</h3>
            <p className="text-3xl font-bold text-purple-600">+{data.returnPercentage}%</p>
          </div>
        </div>

        {/* Investment Positions */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Investment Positions</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Symbol</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount Invested</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Current Value</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Gain/Loss</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Return %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.positions.map((position) => {
                  const returnPercent = ((position.return / position.invested) * 100).toFixed(2);
                  return (
                    <tr key={position.symbol} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{position.symbol}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{position.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">${position.invested.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">${position.current.toLocaleString()}</td>
                      <td className={`px-6 py-4 text-sm font-semibold ${position.return >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {position.return >= 0 ? '+' : ''} ${position.return.toLocaleString()}
                      </td>
                      <td className={`px-6 py-4 text-sm font-semibold ${parseFloat(returnPercent) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {parseFloat(returnPercent) >= 0 ? '+' : ''}{returnPercent}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Month Navigation */}
        <div className="mt-8 flex justify-between items-center">
          <div>
            {monthNumber > 1 && (
              <Link
                href={`/investment/${monthNumber - 1}/details`}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                ← Previous Month
              </Link>
            )}
          </div>

          <div className="text-sm text-gray-600">
            Month {monthNumber} of 12
          </div>

          <div>
            {monthNumber < 12 && (
              <Link
                href={`/investment/${monthNumber + 1}/details`}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Next Month →
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
