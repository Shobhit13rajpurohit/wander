import { useEffect, useState } from "react";
import { getHotelsByCity } from "../api/hotels";

interface Hotel {
  name: string;
  iataCode: string;
}

const HotelList = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    getHotelsByCity("DEL").then((res) => {
      setHotels(res.data || []);
    });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Hotels in Delhi</h2>
      <ul>
        {hotels.map((hotel, index) => (
          <li key={index} className="mb-2 border-b pb-2">
            {hotel.name} - {hotel.iataCode}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;