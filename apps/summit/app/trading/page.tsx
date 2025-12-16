'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface TradingData {
  no: number;
  buy: number;
  sell: number;
  profit: number;
  createDate: string;
  updateDate: string;
}

export default function Trading() {
  const [tradingData, setTradingData] = useState<TradingData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTradingData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch trading data for multiple entries (1-5)
        const dataPromises = Array.from({ length: 5 }, (_, i) => 
          fetch(`http://localhost:8080/api/trading/${i + 1}`)
            .then(res => res.json())
            .catch(() => null)
        );
        
        const results = await Promise.all(dataPromises);
        console.log('Trading API Results Count:', results.length);
        console.log('Trading Data Results:', results);
        const validData = results.filter(data => data !== null) as TradingData[];
        
        if (validData.length === 0) {
          setError('Failed to fetch trading data. Make sure the API is running on http://localhost:8080');
          // Set dummy data for demonstration
          setTradingData([
            {
              no: 1,
              buy: 2300000,
              sell: 2150000,
              profit: -150000,
              createDate: '2024-12-02T10:15:00',
              updateDate: '2024-12-02T10:15:00'
            },
            {
              no: 2,
              buy: 2400000,
              sell: 2280000,
              profit: -120000,
              createDate: '2024-12-02T11:30:00',
              updateDate: '2024-12-02T11:30:00'
            },
            {
              no: 3,
              buy: 2200000,
              sell: 2350000,
              profit: 150000,
              createDate: '2024-12-02T12:45:00',
              updateDate: '2024-12-02T12:45:00'
            }
          ]);
        } else {
          setTradingData(validData);
        }
      } catch (err) {
        console.error('Error fetching trading data:', err);
        setError('An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchTradingData();
  }, []);

  const totalProfit = tradingData.reduce((sum, trade) => sum + (trade.profit || 0), 0);
  const winningTrades = tradingData.filter(trade => (trade.profit || 0) > 0).length;
  const losingTrades = tradingData.filter(trade => (trade.profit || 0) < 0).length;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <main className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Trading</h1>
          <p className="text-xl text-slate-600">Monitor and manage your trading positions</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">{error}</p>
          </div>
        )}

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Total Profit/Loss</h3>
            <p className={`text-3xl font-bold ${totalProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {totalProfit >= 0 ? '+' : ''} ${totalProfit.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mt-2">{tradingData.length} active trades</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Win Rate</h3>
            <p className="text-3xl font-bold text-blue-600">
              {tradingData.length > 0 ? ((winningTrades / tradingData.length) * 100).toFixed(1) : '0'}%
            </p>
            <p className="text-sm text-gray-500 mt-2">{winningTrades}W / {losingTrades}L</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Open Positions</h3>
            <p className="text-3xl font-bold text-indigo-600">{tradingData.length}</p>
            <p className="text-sm text-gray-500 mt-2">Active trades</p>
          </div>
        </div>

        {/* Trading Positions Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Active Trading Positions</h2>
          </div>
          
          {loading ? (
            <div className="p-6 text-center">
              <p className="text-gray-600">Loading trading data...</p>
            </div>
          ) : tradingData.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-gray-600">No trading positions available</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">No</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Buy Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sell Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Profit/Loss</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Updated Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tradingData.map((trade) => {
                    const profitPercent = ((trade.sell - trade.buy) / trade.buy * 100).toFixed(2);
                    const isProfit = trade.profit >= 0;
                    
                    return (
                      <tr key={trade.no} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">#{trade.no}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">${trade.buy.toLocaleString()}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">${trade.sell.toLocaleString()}</td>
                        <td className={`px-6 py-4 text-sm font-semibold ${isProfit ? 'text-green-600' : 'text-red-600'}`}>
                          {isProfit ? '+' : ''} ${Math.abs(trade.profit).toLocaleString()} ({profitPercent}%)
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{formatDate(trade.createDate)}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{formatDate(trade.updateDate)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
