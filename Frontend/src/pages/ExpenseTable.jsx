import React from 'react';

const ExpenseTable = ({ expenses, deleteExpens }) => {
    const totalProfit = expenses.reduce((sum, expense) => sum + (expense.profit || 0), 0);
    const totalLoss = expenses.reduce((sum, expense) => sum + (expense.loss || 0), 0);
    const netProfit = totalProfit - totalLoss;

    // Reverse the expenses array to show the most recent at the top
    const recentExpenses = [...expenses].reverse();

    return (
        <div className="space-y-6">
            {/* Recent Trades Heading */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-center tracking-wide text-gray-300 hover:scale-105 transform transition-all duration-300 mb-7 mt-7">
                Recent Trades
            </h2>

            {/* Check if there are no trades */}
            {recentExpenses.length === 0 ? (
                <div className="text-center text-2xl text-red-500">
                    <p>No trades found. Please add a trade to see the full functionality</p>
                </div>
            ) : (
                recentExpenses.map((expense, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col p-5 rounded-lg shadow-lg space-y-3 ${
                            index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'
                        }`}
                    >
                        {/* Delete Button */}
                        <button
                            className="absolute top-3 right-3 text-sm text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-full"
                            onClick={() => deleteExpens(expense._id)}
                        >
                            Delete
                        </button>

                        {/* Currency Pair and Date */}
                        <div className="text-white font-semibold text-xl">{expense.currencyPair}</div>
                        <div className="text-sm text-gray-400">
                            Date: {new Date(expense.createdAt).toLocaleDateString()}
                        </div>

                        {/* Details Section */}
                        <div className="flex flex-wrap justify-between gap-3 text-base text-gray-300">
                            <div>Forex Session: {expense.forexSession}</div>
                            <div>Strategy: {expense.strategyUsed}</div>
                            <div>Target (Pips): {expense.target}</div>
                            <div>Stoploss (Pips): {expense.stoploss}</div>
                            <div>Buy/Sell: {expense.buyOrSell}</div>
                            <div className={"font-bold text-green-400"}>
                                Profit: ₹{expense.profit || 0}
                            </div>
                            <div className={"font-bold text-red-400"}>
                                Loss: ₹{expense.loss || 0}
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ExpenseTable;
