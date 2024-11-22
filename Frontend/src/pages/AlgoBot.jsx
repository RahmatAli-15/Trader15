import React from "react";
import rbot from '../assets/roadmap/img3.png';

const AlgoBot = () => {
  return (
    <div id="home" className="flex flex-col items-center mt-6 lg:mt-10">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-center tracking-wide text-white hover:scale-105 transform transition-all duration-300">
        Trade Smarter with
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text hover:from-yellow-500 hover:to-pink-600 transition duration-300 ease-in-out">
          {" "}Automated Precision
        </span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 text-white gap-6">
        {/* Left: Image Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-center ease-in-out transition-all duration-300">
          <img
            src={rbot}
            alt="Placeholder"
            className="w-3/4 md:w-full rounded-lg shadow-lg mb-4 hover:scale-105 transform transition-all duration-300"
          />
          {/* Button Below Image */}
          <a
            href="https://t.me/TraderPorts" 
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Right: Text Section */}
        <div className="w-full md:w-1/2 space-y-8 ">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white ease-in-out hover:scale-105 transform transition-all duration-300">
              Save Time and Maximize Efficiency
            </h2>
            <p className="mt-2 text-gray-300 leading-relaxed border border-gray-700 p-4 rounded-lg bg-gray-800">
              Experience the power of algorithmic trading to streamline your trading process. Let automation handle the complexities, saving you valuable time while maintaining accuracy.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white ease-in-out hover:scale-105 transform transition-all duration-300">
              Eliminate Emotional Bias
            </h2>
            <p className="mt-2 text-gray-300 leading-relaxed border border-gray-700 p-4 rounded-lg bg-gray-900">
              Remove psychology-driven mistakes from your trades. Algorithms operate on data and logic, ensuring disciplined and unbiased decision-making for consistent results.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white ease-in-out hover:scale-105 transform transition-all duration-300">
              Achieve Better Market Analysis
            </h2>
            <p className="mt-2 text-gray-300 leading-relaxed border border-gray-700 p-4 rounded-lg bg-gray-800">
              Stay ahead with advanced analytical tools that provide real-time insights into market trends. Identify opportunities and execute trades with precision, maximizing your profitability.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white ease-in-out hover:scale-105 transform transition-all duration-300">
              Empower Everyone to Trade Smarter
            </h2>
            <p className="mt-2 text-gray-300 leading-relaxed border border-gray-700 p-4 rounded-lg bg-gray-900">
              Level the playing field for traders of all experience levels. With algorithmic trading, anyone can trade in a structured and efficient manner, unlocking their full trading potential.
            </p>
          </div>
        </div>

      </div>
      <div className="w-full px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-white ase-in-out hover:scale-105 transform transition-all duration-300 mb-5">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {/* FAQ 1 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-xl font-bold text-white ease-in-out hover:scale-105 transform transition-all duration-300">
              1. How does a trading bot work?
            </h3>
            <p className="mt-2 text-gray-300">
              A trading bot automates the trading process by using predefined strategies and algorithms to execute buy and sell orders. It eliminates emotional trading and executes trades at optimal times based on market analysis.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-xl font-bold text-white ease-in-out hover:scale-105 transform transition-all duration-300">
              2. Can I customize the trading strategies?
            </h3>
            <p className="mt-2 text-gray-300">
              Yes, most trading bots allow you to customize the trading strategies by adjusting the risk tolerance, selecting different indicators (RSI, MACD, etc.), and defining the rules for opening and closing trades.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-xl font-bold text-white ease-in-out hover:scale-105 transform transition-all duration-300">
              3. Do I need to be a professional to use a trading bot?
            </h3>
            <p className="mt-2 text-gray-300">
              No, you don’t need to be a professional. Trading bots are designed to simplify the trading process. However, it's important to understand the basics of trading strategies and market analysis to make the most of the bot.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-xl font-bold text-white ease-in-out hover:scale-105 transform transition-all duration-300">
              4. How much money should I invest when using a trading bot?
            </h3>
            <p className="mt-2 text-gray-300">
              It's recommended to start with an amount you're comfortable with and can afford to lose. Begin with small amounts and gradually increase your investment as you get more familiar with the bot's performance and your strategies.
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-xl font-bold text-white ease-in-out hover:scale-105 transform transition-all duration-300">
              5. Are trading bots safe to use?
            </h3>
            <p className="mt-2 text-gray-300">
              Trading bots are safe as long as you use them from reputable sources. Ensure the bot has a secure connection to your exchange and that you are aware of the bot's risk levels. Always do your research before using any trading bot.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AlgoBot;
