import { useEffect, useState } from "react";
import { getHotelsByCityName } from "../api/hotels";
import { motion } from "framer-motion";
import { Star, MapPin, DollarSign } from "lucide-react";
import { debounce } from "lodash"; // ✅ Prevent unnecessary API calls

interface Hotel {
  id: string;
  name: string;
  location: string;
  price: string;
  rating: string;
  amenities: string[];
  image: string;
}

interface HotelListProps {
  cityName: string;
}

const HotelList: React.FC<HotelListProps> = ({ cityName }) => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(false);

  // ✅ Debounced API Call (Sirf jab user 500ms ke liye typing stop kare)
  const fetchHotels = debounce(async (city) => {
    if (!city) return;
    setLoading(true);
    try {
      const hotelsData = await getHotelsByCityName(city);
      setHotels(hotelsData || []);
    } catch (error) {
      console.error("Error fetching hotels:", error);
      setHotels([]);
    }
    setLoading(false);
  }, 500); // ✅ 500ms delay

  useEffect(() => {
    fetchHotels(cityName);
  }, [cityName]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
         Hotels in {cityName}
      </h2>

      {loading ? (
        <p className="text-center text-gray-600 animate-pulse">⏳ Fetching hotels...</p>
      ) : hotels?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels?.map((hotel, index) => (
            <motion.div
              key={hotel.id || index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-gray-700">{hotel.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 flex items-center mt-1">
                  <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                  {hotel.location}
                </p>
                <p className="text-lg font-bold text-green-600 flex items-center mt-3">
                  <DollarSign className="w-4 h-4 mr-1" />
                  ${hotel.price} / night
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {hotel.amenities?.map((amenity, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No hotels found.</p>
      )}
    </div>
  );
};

export default HotelList;
