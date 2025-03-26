import { useEffect, useState } from "react";
import { getHotelOffers } from "../api/hotelOffers";
import { motion } from "framer-motion";
import { Star, BadgePercent } from "lucide-react";

interface HotelOffer {
  hotel: { name: string };
  offers: { price: { total: string } }[];
}

const HotelOffersList = () => {
  const [offers, setOffers] = useState<HotelOffer[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOffers = async () => {
      setLoading(true);
      const hotelIds = ["HIDEL429", "MCDELAPM", "SXDELAER", "YXDELUEH", "RTDELIBS"];
      const checkInDate = "2025-03-27";
      const offersData = await getHotelOffers(hotelIds, checkInDate);
      setOffers(offersData);
      setLoading(false);
    };

    fetchOffers();
  }, []);

  return (
    <section className="relative py-20 px-6 md:px-16 bg-gradient-to-br from-blue-900 to-purple-900 text-white overflow-hidden">
      {/* ✨ Background Blur Effect */}
      <div className="absolute inset-0 bg-[url('/images/hotel-bg.jpg')] bg-cover bg-center opacity-30 blur-md"></div>

      {/* 🔥 Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-5xl font-extrabold tracking-wide text-white drop-shadow-md">
          Exclusive Hotel Offers
        </h2>
        <p className="text-lg text-gray-300 mt-3">
          Book your dream stay with special discounts & limited-time deals
        </p>
      </motion.div>

      {/* 🏨 Offers Grid with Floating Animation */}
      {loading ? (
        <p className="text-center text-white text-xl">Loading hotel offers...</p>
      ) : offers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, y: -10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg transition-all duration-500"
            >
              {/* 🌟 "Limited Offer" Badge */}
              <div className="absolute top-3 right-3 bg-yellow-500 text-black px-3 py-1 text-xs font-bold rounded-full flex items-center">
                <BadgePercent className="w-4 h-4 mr-1" /> Limited Offer
              </div>

              {/* 🏨 Hotel Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{offer.hotel.name}</h3>
                <p className="text-lg text-gray-200 mt-2">
                  Price: <span className="text-yellow-400 font-bold">${offer.offers[0]?.price.total || "N/A"}</span>
                </p>
                <div className="flex items-center mt-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-gray-600 fill-current" />
                </div>

                {/* 🔥 "Book Now" Button with Neon Glow Effect */}
                <motion.button
                  whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)" }}
                  className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300"
                >
                  View Offer →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-white text-lg">No offers available at the moment.</p>
      )}
    </section>
  );
};

export default HotelOffersList;
