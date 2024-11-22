import Section from "./Section";
import Heading from "./Heading";
import { roadmap1, check } from "../assets";
import { brainwaveServices } from "../constants";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <div className="hover:scale-105 transform transition-all duration-300">
          <Heading
            title="Trading Bots made for Smart Traders"
            text={
              <>
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text hover:from-yellow-500 hover:to-pink-600">
                  Trader
                  <span className="text-gray-200">Ports</span>
                </span>{" "}
                unlocks the power of algorithmic trading bots to enhance your trading performance
              </>
            }
          />
        </div>

        <div className="relative flex flex-col md:flex-row items-center gap-8 p-6 border border-n-1/10 rounded-3xl overflow-hidden">
          {/* Image Container */}
          <div className="w-full md:w-1/2">
            <img
              className="w-full h-auto object-cover rounded-lg"
              src={roadmap1}
              alt="Smartest AI"
            />
          </div>

          {/* Text Container */}
          <div className="w-full md:w-1/2">
            <h4 className="h4 mb-4 hover:scale-105 transform transition-all duration-300">
              <Link to="/bot" className="text-white hover:underline">
                Trading Bot
              </Link>

            </h4>
            <p className="body-2 mb-6 text-n-3 hover:scale-105 transform transition-all duration-300">
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text hover:from-yellow-500 hover:to-pink-600">
                Trader
                <span className="text-gray-200">Ports</span>
              </span>{" "} unlocks the potential of Algo Trading Bot.
            </p>
            <ul className="body-2">
              {brainwaveServices.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start py-4 border-t border-n-6 hover:scale-105 transform transition-all duration-300"
                >
                  <img width={24} height={24} src={check} alt="Check Icon" />
                  <p className="ml-4">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
