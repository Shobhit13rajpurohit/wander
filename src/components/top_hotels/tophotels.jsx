import React from "react";
import { motion } from "framer-motion";

const TopHotels = () => {
  const hotels = [
    { name: "The Ritz Paris", location: "Paris, France", image: "https://images.unsplash.com/photo-1564501049412-61c2a308379a?w=500&q=80" },
    { name: "The Plaza Hotel", location: "New York, USA", image: "https://images.unsplash.com/photo-1584132967334-10e028bd69cf?w=500&q=80" },
    { name: "Park Hyatt Tokyo", location: "Tokyo, Japan", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80" },
    { name: "Hotel de Russie", location: "Rome, Italy", image: "https://images.unsplash.com/photo-1591047139829-eca7e77b0088?w=500&q=80" },
    { name: "Burj Al Arab", location: "Dubai, UAE", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80" },
    { name: "Marina Bay Sands", location: "Singapore", image: "https://images.unsplash.com/photo-1561736778-92e52a7769cd?w=500&q=80" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 text-gray-900 py-20 px-6 md:px-16 overflow-hidden">
      {/* 🏨 Section Heading */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-5xl font-extrabold text-gray-900 tracking-wide">
          World’s Best Luxury Hotels
        </h2>
        <p className="text-lg text-gray-600 mt-3">
          Stay at the most prestigious hotels across the globe! 
        </p>
      </motion.div>

      {/* 🌟 Horizontal Scroll Section */}
      <div className="relative flex items-center overflow-x-scroll no-scrollbar space-x-6 px-6 py-6">
        {hotels.map((hotel, index) => (
          <motion.div
            key={index}
            className="relative w-[250px] h-[350px] flex-shrink-0 rounded-xl overflow-hidden shadow-xl bg-white bg-opacity-80 backdrop-blur-lg border border-gray-200"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={hotel.image} alt={hotel.name} className="w-full h-[200px] object-cover rounded-t-xl" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900">{hotel.name}</h3>
              <p className="text-sm text-gray-600">{hotel.location}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🚀 View All Hotels Button */}
      <div className="text-center mt-12">
        <motion.a 
          whileHover={{ scale: 1.1 }} 
          className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold rounded-full shadow-md hover:shadow-xl transition"
          href="#"
        >
          Discover More Hotels →
        </motion.a>
      </div>
    </section>
  );
};

export default TopHotels;
