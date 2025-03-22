import React from 'react';
import { Flight, Hotel, Train as TrainType } from '../data/mockData';
import { Star, Clock, Users } from 'lucide-react';

interface SearchResultsProps {
  type: 'flight' | 'hotel' | 'train';
  results: (Flight | Hotel | TrainType)[];
  onBook: (item: Flight | Hotel | TrainType) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ type, results, onBook }) => {
  const renderFlight = (flight: Flight) => (
    <div key={flight.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-xl font-semibold">{flight.airline}</h3>
          <p className="text-gray-600">{flight.from} → {flight.to}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-blue-600">${flight.price}</p>
          <p className="text-gray-500">per person</p>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <span>{flight.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-gray-500" />
          <span>{flight.seats} seats available</span>
        </div>
      </div>
      <button
        onClick={() => onBook(flight)}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Book Now
      </button>
    </div>
  );

  const renderHotel = (hotel: Hotel) => (
    <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold">{hotel.name}</h3>
            <p className="text-gray-600">{hotel.location}</p>
          </div>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1">{hotel.rating}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {hotel.amenities.map((amenity, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
            >
              {amenity}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-2xl font-bold text-blue-600">${hotel.price}</p>
            <p className="text-gray-500">per night</p>
          </div>
          <button
            onClick={() => onBook(hotel)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );

  const renderTrain = (train: TrainType) => (
    <div key={train.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-xl font-semibold">Train {train.trainNumber}</h3>
          <p className="text-gray-600">{train.from} → {train.to}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-blue-600">${train.price}</p>
          <p className="text-gray-500">per person</p>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <span>{train.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-gray-500" />
          <span>{train.seats} seats available</span>
        </div>
      </div>
      <button
        onClick={() => onBook(train)}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Book Now
      </button>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((item) => {
        if (type === 'flight' && 'airline' in item) return renderFlight(item as Flight);
        if (type === 'hotel' && 'rating' in item) return renderHotel(item as Hotel);
        if (type === 'train' && 'trainNumber' in item) return renderTrain(item as TrainType);
        return null;
      })}
    </div>
  );
};

export default SearchResults;