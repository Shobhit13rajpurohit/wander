import React from 'react';
import { FaBitcoin } from 'react-icons/fa'; // React icon for Bitcoin
import { IoMdArrowForward } from 'react-icons/io'; // For a "learn more" arrow

const CryptoSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white ">
      <div>
        <div className="grid md:grid-cols-2 gap-10 items-center p-16 ">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Travel with Crypto</h2>
            <p className="text-white/80 mb-6">
              We now accept cryptocurrency payments for all your travel bookings. Enjoy faster transactions, lower
              fees, and enhanced security.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <FaBitcoin className="h-5 w-5 mr-2" />
                <span>Bitcoin</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <img
                  src=""
                  alt="Ethereum"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <span>Ethereum</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <img
                  src=""
                  alt="USDT"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <span>USDT</span>
              </div>
            </div>
            <button className="bg-white text-blue-600 hover:bg-white/90 px-6 py-2 rounded-full flex items-center gap-2">
              Learn More <IoMdArrowForward className="h-4 w-4" />
            </button>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1640833906651-6bd1af7aeea3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Crypto Travel"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoSection;
