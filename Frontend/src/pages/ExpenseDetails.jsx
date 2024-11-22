import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const ExpenseSummary = ({ totalProfit, totalLoss, netProfit }) => {
  const data = [
    { name: 'Profit', value: totalProfit },
    { name: 'Loss', value: totalLoss },
  ];
  const COLORS = ['#065F46', '#EF4444']; // Green for profit, red for loss

  return (

    <div className="mt-3 ">
      <div className="p-8 rounded-xl shadow-2xl w-full max-w-3xl border border-gray-700 transition-shadow duration-300 hover:shadow-3xl flex flex-col items-center space-y-2 mx-auto">

        <h2 className="text-4xl sm:text-4xl lg:text-4xl font-extrabold text-center tracking-wide text-gray-300 hover:scale-105 transform transition-all duration-300 mb-7 ">Trade Summary</h2>

        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 w-full">
          {/* Left Section - Text */}
          <div className="flex flex-col items-center justify-center text-gray-300 space-y-4 w-full md:w-1/2 transform transition-transform duration-300 hover:scale-105">
            <div className="space-y-1">
              <span className="text-lg font-medium">Total Profit:</span>
              <span className="text-2xl text-green-400 font-bold">₹{totalProfit}</span>
            </div>
            <div className="space-y-1">
              <span className="text-lg font-medium">Total Loss:</span>
              <span className="text-2xl text-red-400 font-bold">₹{totalLoss}</span>
            </div>
            <div className="space-y-1">
              <span className="text-lg font-medium">Net Amount:</span>
              <span className={`text-2xl font-semibold ${netProfit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                ₹{netProfit}
              </span>
            </div>
          </div>

          {/* Right Section - Pie Chart */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-4 rounded-lg shadow-lg border border-gray-600 transform transition-transform duration-300 hover:scale-105">
            <PieChart width={280} height={280}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                fill="#8884d8"
                paddingAngle={3}
                dataKey="value"
                startAngle={90}
                endAngle={450}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ExpenseSummary;
