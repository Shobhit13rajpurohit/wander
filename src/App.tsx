import React, { useState } from "react";
import {
  Plane,
  Building2,
  Search,
  MapPin,
  Calendar,
  Users,
  ArrowRight,
} from "lucide-react";
import { flights, hotels } from "./data/mockData";
import type { Flight, Hotel } from "./data/mockData";
import SearchResults from "./components/SearchResults";
import { motion } from "framer-motion";
import Topcities from "./components/top_cities/topcities";

import TopHotels from "./components/top_hotels/tophotels";
import HotelOffersList from "./components/HotelOffersList";
import Footer from "./components/footer/page";
import FaqSection from "./components/faq/page (1)";
import PaymentOptions from "./components/Payment_option/page";
import CryptoSection from "./components/crypto/page";
type BookingType = "flight" | "hotel";

function App() {
  const [activeBooking, setActiveBooking] = useState<BookingType>("flight");
  const [showResults, setShowResults] = useState(false);
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    travelers: "1 Adult",
  });

  const handleSearch = () => {
    setShowResults(true);
  };

  const handleBook = (item: Flight | Hotel) => {
    alert("Booking successful! Thank you for choosing our service.");
    setShowResults(false);
  };

  const getFilteredResults = () => {
    if (
      !searchParams.from?.trim() &&
      !searchParams.to?.trim() &&
      !searchParams.departureDate?.trim() &&
      !searchParams.returnDate?.trim()
    ) {
      return []; // No filters applied, return empty
    }

    const results =
      activeBooking === "flight"
        ? flights
        : activeBooking === "hotel"
        ? hotels
        : [];

    return results.filter((item) => {
      if (
        activeBooking === "flight" &&
        searchParams.departureDate?.trim() &&
        searchParams.departureDate !== (item as Flight).departureDate
      ) {
        return false;
      }

      if (
        activeBooking === "flight" &&
        searchParams.returnDate?.trim() &&
        searchParams.returnDate !== (item as Flight).returnDate
      ) {
        return false;
      }

      if (searchParams.from?.trim()) {
        const locationCheck =
          activeBooking === "hotel"
            ? (item as Hotel).location
                .toLowerCase()
                .includes(searchParams.from.toLowerCase())
            : (item as Flight).from
                .toLowerCase()
                .includes(searchParams.from.toLowerCase());

        if (!locationCheck) return false;
      }

      if (
        activeBooking === "flight" &&
        searchParams.to?.trim() &&
        !(item as Flight).to
          .toLowerCase()
          .includes(searchParams.to.toLowerCase())
      ) {
        return false;
      }

      if (searchParams.travelers?.trim()) {
        const numTravelers = parseInt(searchParams.travelers.split(" ")[0], 10);
        if (isNaN(numTravelers)) return false;

        if (activeBooking === "flight") {
          if (numTravelers > (item as Flight).seats) return false;
        } else if (activeBooking === "hotel") {
          if (numTravelers > (item as Hotel).rooms * 2) return false;
        }
      }

      return true;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div
        className="h-[60vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-5xl font-bold text-white mb-4"
            >
              Your Journey Begins Here
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
              className="text-xl text-white mb-8"
            >
              Discover the world with our seamless booking experience
            </motion.p>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="container mx-auto px-4 -mt-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="bg-white bg-opacity-60 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-6 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
        >
          {/* Booking Type Selector */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => {
                setActiveBooking("flight");
                setShowResults(false);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:scale-110 bg-white bg-opacity-70 backdrop-blur-lg border border-gray-300 shadow-md hover:shadow-lg ${
                activeBooking === "flight"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                  : "text-gray-700"
              }`}
            >
              <Plane className="w-5 h-5" />
              <span className="font-medium">Flights</span>
            </button>

            <button
              onClick={() => {
                setActiveBooking("hotel");
                setShowResults(false);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:scale-110 bg-white bg-opacity-70 backdrop-blur-lg border border-gray-300 shadow-md hover:shadow-lg ${
                activeBooking === "hotel"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                  : "text-gray-700"
              }`}
            >
              <Building2 className="w-5 h-5" />
              <span className="font-medium">Hotels</span>
            </button>
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 bg-gray-100 rounded-xl shadow-2xl">
            {/* From */}
            <div className="relative">
              <input
                type="text"
                value={searchParams.from}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, from: e.target.value })
                }
                className="peer w-full px-4 pt-5 pb-2 border-none rounded-lg shadow-inner bg-white text-gray-900 focus:ring-4 focus:ring-blue-300 transition-all"
                placeholder=" "
              />
              <label className="absolute top-2 left-4 text-gray-500 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
                {activeBooking === "hotel"
                  ? "Enter destination"
                  : "Enter departure"}
              </label>
              <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            {/* To (Only for Flights) */}
            {activeBooking !== "hotel" && (
              <div className="relative">
                <input
                  type="text"
                  value={searchParams.to}
                  onChange={(e) =>
                    setSearchParams({ ...searchParams, to: e.target.value })
                  }
                  className="peer w-full px-4 pt-5 pb-2 border-none rounded-lg shadow-inner bg-white text-gray-900 focus:ring-4 focus:ring-blue-300 transition-all"
                  placeholder=" "
                />
                <label className="absolute top-2 left-4 text-gray-500 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
                  Enter destination
                </label>
                <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            )}

            {/* Date Pickers */}
            <div className="relative">
              <input
                type="date"
                value={searchParams.departureDate}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    departureDate: e.target.value,
                  })
                }
                className="peer w-full px-4 pt-5 pb-2 border-none rounded-lg shadow-inner bg-white text-gray-900 focus:ring-4 focus:ring-blue-300 transition-all"
                placeholder=" "
              />
              <label className="absolute top-2 left-4 text-gray-500 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
                {activeBooking === "hotel" ? "Check-in" : "Departure Date"}
              </label>
              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            <div className="relative">
              <input
                type="date"
                value={searchParams.returnDate}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    returnDate: e.target.value,
                  })
                }
                className="peer w-full px-4 pt-5 pb-2 border-none rounded-lg shadow-inner bg-white text-gray-900 focus:ring-4 focus:ring-blue-300 transition-all"
                placeholder=" "
              />
              <label className="absolute top-2 left-4 text-gray-500 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
                {activeBooking === "hotel" ? "Check-out" : "Return Date"}
              </label>
              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            {/* Travelers Selection */}
            <div className="relative md:col-span-2">
              <select
                value={searchParams.travelers}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    travelers: e.target.value,
                  })
                }
                className="w-full px-4 py-3 border-none rounded-lg shadow-inner bg-white text-gray-900 focus:ring-4 focus:ring-blue-300 transition-all"
              >
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>3 Adults</option>
                <option>4 Adults</option>
              </select>
              <Users className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            {/* Search Button */}
            <div className="md:col-span-2 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                onClick={handleSearch}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-lg font-semibold"
              >
                <Search className="w-5 h-5 inline-block mr-2" />
                Search{" "}
                {activeBooking === "flight"
                  ? "Flights"
                  : activeBooking === "hotel"
                  ? "Hotels"
                  : "Trains"}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Search Results */}
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="mt-8"
          >
            <h2 className="text-2xl font-bold mb-6">Search Results</h2>
            <SearchResults
              type={activeBooking}
              results={getFilteredResults()}
              cityName={searchParams.from} // ✅ Pass the city name from searchParams
              onBook={handleBook}
            />
          </motion.div>
        )}

        {/* Features Section */}
        {!showResults && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Deals</h3>
              <p className="text-gray-600">
                Find the most competitive prices for your travel needs.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our customer service team is always here to help you.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <ArrowRight className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">
                Simple and fast booking process for your convenience.
              </p>
            </motion.div>
          </div>
        )}
      </div>
      <Topcities />

      <TopHotels />
      <HotelOffersList />
      <PaymentOptions />
      <CryptoSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
