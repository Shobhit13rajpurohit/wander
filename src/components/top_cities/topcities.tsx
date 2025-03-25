import React from "react";
import { motion } from "framer-motion";

const TopCities = () => {
  const cities = [
    { name: "Paris", country: "France", image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "New York", country: "USA", image: "https://images.unsplash.com/flagged/photo-1575597255483-55f2afb6f42c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Tokyo", country: "Japan", image: "https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Rome", country: "Italy", image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];


  return (
    <section className=" mt-15 relative bg-gray-900 text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* 🌊 Animated Background Wave Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/wave-bg.svg')] bg-cover opacity-20 animate-moveBackground"></div>

      {/* ✨ Section Heading */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-5xl font-extrabold text-white tracking-wide">
          Explore Top Destinations
        </h2>
        <p className="text-lg text-gray-400 mt-3">
          Find your next dream getaway! 🌍🏝️✈️
        </p>
      </motion.div>

      {/* 🏙️ Cities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 relative z-10">
        {cities.map((city, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.1, rotate: 1 }} 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative bg-gradient-to-br from-blue-600 to-purple-600 p-1 rounded-3xl hover:shadow-2xl transition-all duration-500"
          >
            {/* 🌆 City Image with Blur Effect */}
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src={city.image} 
                alt={city.name} 
                className="object-cover w-full h-64 rounded-3xl transition-all duration-700 transform group-hover:scale-110"
              />
              {/* ✨ Glassy Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-500"></div>
            </div>

            {/* 📍 City Details */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-semibold">{city.name}</h3>
              <p className="text-lg opacity-80">{city.country}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 View More Button */}
      <div className="text-center mt-16">
        <motion.a 
          whileHover={{ scale: 1.1 }} 
          className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full shadow-md hover:shadow-xl transition"
          href="#"
        >
          View All Destinations →
        </motion.a>
      </div>
    </section>
  );
};

export default TopCities;
