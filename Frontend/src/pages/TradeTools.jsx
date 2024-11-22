import React, { useState } from 'react';

const LotSizeCalculator = () => {
  const [accountBalance, setAccountBalance] = useState('');
  const [riskPercentage, setRiskPercentage] = useState('');
  const [stopLossPips, setStopLossPips] = useState('');
  const [currencyType, setCurrencyType] = useState('other');
  const [lotSize, setLotSize] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Calculate Lot Size
  const calculateLotSize = () => {
    const balance = parseFloat(accountBalance);
    const riskPercent = parseFloat(riskPercentage);
    const stopLoss = parseFloat(stopLossPips);

    if (isNaN(balance) || isNaN(riskPercent) || isNaN(stopLoss) || balance <= 0 || riskPercent <= 0 || stopLoss <= 0) {
      setErrorMessage('Please fill in all fields correctly.');
      return;
    }

    // Reset the error message if inputs are valid
    setErrorMessage('');

    // Calculate the risk amount
    const riskAmount = balance * (riskPercent / 100);

    // Determine Pip Value based on currency type
    let pipValue = 0;

    switch (currencyType) {
      case 'jpy':
        pipValue = 100; // JPY pairs (2 decimals)
        break;
      case 'gold':
        pipValue = 10; // Gold pairs (1 decimal)
        break;
      case 'other':
        pipValue = 10; // Other pairs (4 decimals)
        break;
      default:
        pipValue = 10;
    }

    // Calculate Lot Size
    const calculatedLotSize = (riskAmount / (stopLoss * pipValue)).toFixed(4);
    setLotSize(calculatedLotSize);
  };

  // Clear form fields
  const clearFields = () => {
    setAccountBalance('');
    setRiskPercentage('');
    setStopLossPips('');
    setCurrencyType('other');
    setLotSize(null);
    setErrorMessage('');
  };

  return (
    <div className="flex flex-col items-center min-h-screen text-gray-100 p-6">
      <h1 className="text-4xl sm:text-4xl lg:text-4xl font-extrabold text-center tracking-wide text-gray-300 hover:scale-105 transform transition-all duration-300 mb-7">Lot Size Calculator</h1>
      
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Account Balance */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400">Account Balance ($)</label>
          <input
            type="number"
            value={accountBalance}
            onChange={(e) => setAccountBalance(e.target.value)}
            className="mt-1 w-full p-2 bg-gray-700 text-white rounded-md focus:ring-indigo-500 focus:outline-none transform transition-all hover:scale-105"
            placeholder="e.g., 1000"
          />
        </div>

        {/* Risk Percentage */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400">Risk Percentage (%)</label>
          <input
            type="number"
            value={riskPercentage}
            onChange={(e) => setRiskPercentage(e.target.value)}
            className="mt-1 w-full p-2 bg-gray-700 text-white rounded-md focus:ring-indigo-500 focus:outline-none transform transition-all hover:scale-105"
            placeholder="e.g., 2"
          />
        </div>

        {/* Stop Loss */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400">Stop Loss (pips)</label>
          <input
            type="number"
            value={stopLossPips}
            onChange={(e) => setStopLossPips(e.target.value)}
            className="mt-1 w-full p-2 bg-gray-700 text-white rounded-md focus:ring-indigo-500 focus:outline-none transform transition-all hover:scale-105"
            placeholder="e.g., 50"
          />
        </div>

        {/* Currency Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400">Currency Type</label>
          <select
            value={currencyType}
            onChange={(e) => setCurrencyType(e.target.value)}
            className="mt-1 w-full p-2 bg-gray-700 text-white rounded-md focus:ring-indigo-500 focus:outline-none transform transition-all hover:scale-105"
          >
            <option value="other">Other (4 decimals)</option>
            <option value="jpy">JPY (2 decimals)</option>
            <option value="gold">Gold (1 decimal)</option>
          </select>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-4 text-red-500 bg-red-100 p-2 rounded-md">
            {errorMessage}
          </div>
        )}

        {/* Calculate Button */}
        <button
          onClick={calculateLotSize}
          className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transform transition-all hover:scale-105"
        >
          Calculate Lot Size
        </button>

        {/* Clear Button */}
        <button
          onClick={clearFields}
          className="w-full mt-2 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transform transition-all hover:scale-105"
        >
          Clear Fields
        </button>

        {/* Display Lot Size */}
        {lotSize && (
          <p className="mt-4 text-lg font-semibold text-white">Recommended Lot Size: {lotSize} lots</p>
        )}
      </div>
        
    </div>
  );
};

export default LotSizeCalculator;
