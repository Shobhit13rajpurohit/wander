import React from "react";
import { Flight, Hotel } from "../data/mockData";
import { Star, Clock, Users } from "lucide-react";
import HotelList from "./HotelList";

interface SearchResultsProps {
  type: "flight" | "hotel";
  results: (Flight | Hotel)[];
  cityName: string; // ✅ Now we are getting cityName from parent (App.tsx)
  onBook: (item: Flight | Hotel) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ type, results, onBook, cityName }) => {
  return (
    <div >
      {type === "hotel" ? (
        <HotelList cityName={cityName} /> // ✅ Now passing cityName
      ) : (
        results.map((item) => {
          if (type === "flight" && "airline" in item)
            return (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
                <h3 className="text-xl font-semibold">{item.airline}</h3>
                <p className="text-gray-600">{item.from} → {item.to}</p>
                <p className="text-2xl font-bold text-blue-600">${item.price}</p>
                <button onClick={() => onBook(item)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </div>
            );
          return null;
        })
      )}
    </div>
  );
};

export default SearchResults;
