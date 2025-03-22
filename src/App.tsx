import React, { useState } from 'react';
import {
  Plane,
  Building2,
  Train as TrainIcon,
  Search,
  MapPin,
  Calendar,
  Users,
  ArrowRight,
} from 'lucide-react';
import { flights, hotels, trains } from './data/mockData';
import type { Flight, Hotel, Train as TrainType } from './data/mockData';
import SearchResults from './components/SearchResults';

type BookingType = 'flight' | 'hotel' | 'train';

function App() {
  const [activeBooking, setActiveBooking] = useState<BookingType>('flight');
  const [showResults, setShowResults] = useState(false);
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    travelers: '1 Adult',
  });

  const handleSearch = () => {
    setShowResults(true);
  };

  const handleBook = (item: Flight | Hotel | TrainType) => {
    alert('Booking successful! Thank you for choosing our service.');
    setShowResults(false);
  };

  const getSearchResults = () => {
    switch (activeBooking) {
      case 'flight':
        return flights;
      case 'hotel':
        return hotels;
      case 'train':
        return trains;
      default:
        return [];
    }
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
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              Your Journey Begins Here
            </h1>
            <p className="text-xl text-white mb-8">
              Discover the world with our seamless booking experience
            </p>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="container mx-auto px-4 -mt-24 relative z-10">
        <div className="bg-white rounded-xl shadow-2xl p-6">
          {/* Booking Type Selector */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => {
                setActiveBooking('flight');
                setShowResults(false);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                activeBooking === 'flight'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <Plane className="w-5 h-5" />
              <span className="font-medium">Flights</span>
            </button>
            <button
              onClick={() => {
                setActiveBooking('hotel');
                setShowResults(false);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                activeBooking === 'hotel'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <Building2 className="w-5 h-5" />
              <span className="font-medium">Hotels</span>
            </button>
            <button
              onClick={() => {
                setActiveBooking('train');
                setShowResults(false);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                activeBooking === 'train'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <TrainIcon className="w-5 h-5" />
              <span className="font-medium">Trains</span>
            </button>
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                From
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchParams.from}
                  onChange={(e) =>
                    setSearchParams({ ...searchParams, from: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={
                    activeBooking === 'hotel' ? 'Enter destination' : 'Enter departure'
                  }
                />
              </div>
            </div>

            {activeBooking !== 'hotel' && (
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  To
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchParams.to}
                    onChange={(e) =>
                      setSearchParams({ ...searchParams, to: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter destination"
                  />
                </div>
              </div>
            )}

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {activeBooking === 'hotel' ? 'Check-in' : 'Departure Date'}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="date"
                  value={searchParams.departureDate}
                  onChange={(e) =>
                    setSearchParams({
                      ...searchParams,
                      departureDate: e.target.value,
                    })
                  }
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {activeBooking === 'hotel' ? 'Check-out' : 'Return Date'}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="date"
                  value={searchParams.returnDate}
                  onChange={(e) =>
                    setSearchParams({ ...searchParams, returnDate: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="relative md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Travelers
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={searchParams.travelers}
                  onChange={(e) =>
                    setSearchParams({ ...searchParams, travelers: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                  <option>4 Adults</option>
                </select>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-transparent mb-1">
                Search
              </label>
              <button
                onClick={handleSearch}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span>
                  Search{' '}
                  {activeBooking === 'flight'
                    ? 'Flights'
                    : activeBooking === 'hotel'
                    ? 'Hotels'
                    : 'Trains'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Search Results */}
        {showResults && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Search Results</h2>
            <SearchResults
              type={activeBooking}
              results={getSearchResults()}
              onBook={handleBook}
            />
          </div>
        )}

        {/* Features Section */}
        {!showResults && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Deals</h3>
              <p className="text-gray-600">
                Find the most competitive prices for your travel needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our customer service team is always here to help you.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <ArrowRight className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">
                Simple and fast booking process for your convenience.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;