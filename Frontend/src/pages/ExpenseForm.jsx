import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Importing ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Importing the styles
import journal from '../assets/journal.jpeg';

function ExpenseForm({ addTransaction }) {
    const [expenseInfo, setExpenseInfo] = useState({
        currencyPair: '',
        strategyUsed: '',
        target: '',
        stoploss: '',
        forexSession: '',
        profit: '',
        loss: '',
        buyOrSell: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpenseInfo({ ...expenseInfo, [name]: value });
    };

    const addExpenses = (e) => {
        e.preventDefault();
        const { currencyPair, strategyUsed, target, stoploss, forexSession, profit, loss, buyOrSell } = expenseInfo;

        // Show toast notifications if any required field is missing
        if (!currencyPair || !strategyUsed || !target || !stoploss || !forexSession || !buyOrSell) {
            toast.error('Please fill in all required fields', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        addTransaction(expenseInfo);

        setExpenseInfo({
            currencyPair: '',
            strategyUsed: '',
            target: '',
            stoploss: '',
            forexSession: '',
            profit: '',
            loss: '',
            buyOrSell: ''
        });
    };

    return (
        <div className="container mx-auto max-w-7xl p-6 text-white rounded-lg shadow-lg">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-center tracking-wide text-gray-300 hover:scale-105 transform transition-all duration-300 mb-7">Trading Journal</h1>

            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center group overflow-hidden rounded-lg">
                    <img 
                        src={journal} 
                        alt="Trading Illustration"
                        className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-black/30"
                    />
                </div>

                {/* Form Section */}
                <form onSubmit={addExpenses} className="w-full md:w-1/2 space-y-4">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="currencyPair" className="block text-sm font-medium mb-2">Currency Pair</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                name="currencyPair"
                                placeholder="Enter Currency Pair..."
                                value={expenseInfo.currencyPair}
                                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-green-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="buyOrSell" className="block text-sm font-medium mb-2">Buy or Sell</label>
                            <select
                                onChange={handleChange}
                                name="buyOrSell"
                                value={expenseInfo.buyOrSell}
                                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-green-400"
                            >
                                <option value="">Select Buy or Sell</option>
                                <option value="buy">Buy</option>
                                <option value="sell">Sell</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="target" className="block text-sm font-medium mb-2">Target in Pips</label>
                            <input
                                onChange={handleChange}
                                type="number"
                                name="target"
                                placeholder="Enter Target..."
                                value={expenseInfo.target}
                                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-green-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="stoploss" className="block text-sm font-medium mb-2">Stoploss in Pips</label>
                            <input
                                onChange={handleChange}
                                type="number"
                                name="stoploss"
                                placeholder="Enter Stoploss..."
                                value={expenseInfo.stoploss}
                                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-green-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="strategyUsed" className="block text-sm font-medium mb-2">Strategy Used</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                name="strategyUsed"
                                placeholder="Enter Strategy..."
                                value={expenseInfo.strategyUsed}
                                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-green-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="forexSession" className="block text-sm font-medium mb-2">Forex Session</label>
                            <select
                                onChange={handleChange}
                                name="forexSession"
                                value={expenseInfo.forexSession}
                                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-green-400"
                            >
                                <option value="">Select Session</option>
                                <option value="London">London</option>
                                <option value="New York">New York</option>
                                <option value="Tokyo">Tokyo</option>
                                <option value="Sydney">Sydney</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="profit" className="block text-sm font-medium mb-2">Profit</label>
                            <input
                                onChange={handleChange}
                                type="number"
                                name="profit"
                                placeholder="Enter Profit..."
                                value={expenseInfo.profit}
                                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-green-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="loss" className="block text-sm font-medium mb-2">Loss</label>
                            <input
                                onChange={handleChange}
                                type="number"
                                name="loss"
                                placeholder="Enter Loss..."
                                value={expenseInfo.loss}
                                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-green-400"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 p-3 bg-green-500 rounded-lg font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        Add Trade
                    </button>
                </form>
            </div>

            {/* Toast notifications */}
            <ToastContainer />
        </div>
    );
}

export default ExpenseForm;
