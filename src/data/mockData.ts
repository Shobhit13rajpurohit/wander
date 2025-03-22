export interface Flight {
  id: string;
  from: string;
  to: string;
  departureDate: string;
  returnDate: string;
  price: number;
  airline: string;
  duration: string;
  seats: number;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  amenities: string[];
  image: string;
  rooms: number;
}

export interface Train {
  id: string;
  from: string;
  to: string;
  departureDate: string;
  returnDate: string;
  price: number;
  trainNumber: string;
  duration: string;
  seats: number;
}

export const flights: Flight[] = [
  {
    id: "f1",
    from: "New York",
    to: "London",
    departureDate: "2024-03-20",
    returnDate: "2024-03-27",
    price: 549,
    airline: "Delta Airlines",
    duration: "7h 30m",
    seats: 42
  },
  {
    id: "f2",
    from: "Los Angeles",
    to: "Tokyo",
    departureDate: "2024-03-22",
    returnDate: "2024-03-29",
    price: 899,
    airline: "Japan Airlines",
    duration: "11h 45m",
    seats: 28
  },
  {
    id: "f3",
    from: "Chicago",
    to: "Paris",
    departureDate: "2024-04-05",
    returnDate: "2024-04-12",
    price: 679,
    airline: "Air France",
    duration: "8h 10m",
    seats: 35
  },
  {
    id: "f4",
    from: "San Francisco",
    to: "Sydney",
    departureDate: "2024-04-10",
    returnDate: "2024-04-25",
    price: 1250,
    airline: "Qantas",
    duration: "15h 30m",
    seats: 19
  },
  {
    id: "f5",
    from: "Miami",
    to: "Madrid",
    departureDate: "2024-05-01",
    returnDate: "2024-05-10",
    price: 720,
    airline: "Iberia",
    duration: "9h 15m",
    seats: 30
  },
  {
    id: "f6",
    from: "Dallas",
    to: "Toronto",
    departureDate: "2024-05-15",
    returnDate: "2024-05-22",
    price: 320,
    airline: "American Airlines",
    duration: "3h 40m",
    seats: 50
  },
  {
    id: "f7",
    from: "Boston",
    to: "Berlin",
    departureDate: "2024-06-01",
    returnDate: "2024-06-08",
    price: 760,
    airline: "Lufthansa",
    duration: "8h 50m",
    seats: 27
  },
  {
    id: "f8",
    from: "Seattle",
    to: "Dubai",
    departureDate: "2024-06-10",
    returnDate: "2024-06-20",
    price: 1100,
    airline: "Emirates",
    duration: "14h 20m",
    seats: 22
  },
  {
    id: "f9",
    from: "Houston",
    to: "Buenos Aires",
    departureDate: "2024-07-05",
    returnDate: "2024-07-15",
    price: 980,
    airline: "LATAM Airlines",
    duration: "10h 35m",
    seats: 18
  },
  {
    id: "f10",
    from: "Denver",
    to: "Honolulu",
    departureDate: "2024-07-20",
    returnDate: "2024-07-30",
    price: 550,
    airline: "Hawaiian Airlines",
    duration: "7h 15m",
    seats: 40
  },
  {
    id: "f11",
    from: "Atlanta",
    to: "Amsterdam",
    departureDate: "2024-08-05",
    returnDate: "2024-08-12",
    price: 690,
    airline: "KLM",
    duration: "9h 5m",
    seats: 25
  },
  {
    id: "f12",
    from: "San Diego",
    to: "Beijing",
    departureDate: "2024-08-15",
    returnDate: "2024-08-25",
    price: 890,
    airline: "Air China",
    duration: "13h 50m",
    seats: 20
  },
  {
    id: "f13",
    from: "Phoenix",
    to: "Rome",
    departureDate: "2024-09-01",
    returnDate: "2024-09-10",
    price: 740,
    airline: "Alitalia",
    duration: "11h 20m",
    seats: 33
  },
  {
    id: "f14",
    from: "Philadelphia",
    to: "Rio de Janeiro",
    departureDate: "2024-09-12",
    returnDate: "2024-09-22",
    price: 820,
    airline: "Azul Airlines",
    duration: "10h 40m",
    seats: 29
  },
  {
    id: "f15",
    from: "Las Vegas",
    to: "Bangkok",
    departureDate: "2024-10-05",
    returnDate: "2024-10-20",
    price: 1150,
    airline: "Thai Airways",
    duration: "17h 30m",
    seats: 15
  }
];


export const hotels: Hotel[] = [
  {
    id: "h1",
    name: "Grand Plaza Hotel",
    location: "Paris, France",
    price: 299,
    rating: 4.5,
    amenities: ["WiFi", "Pool", "Spa", "Restaurant"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
    rooms: 15
  },
  {
    id: "h2",
    name: "Sunset Beach Resort",
    location: "Bali, Indonesia",
    price: 399,
    rating: 4.8,
    amenities: ["Beach Access", "Pool", "Spa", "Restaurant", "Bar"],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000",
    rooms: 20
  },
  {
    id: "h3",
    name: "Skyline Tower Hotel",
    location: "New York, USA",
    price: 350,
    rating: 4.6,
    amenities: ["WiFi", "Gym", "Restaurant", "Bar"],
    image: "https://images.unsplash.com/photo-1578683010232-9803221725d8?auto=format&fit=crop&q=80&w=1000",
    rooms: 25
  },
  {
    id: "h4",
    name: "Mountain Retreat Lodge",
    location: "Zermatt, Switzerland",
    price: 420,
    rating: 4.9,
    amenities: ["Spa", "Mountain View", "WiFi", "Restaurant"],
    image: "https://images.unsplash.com/photo-1600679462008-3b7d42b3eb60?auto=format&fit=crop&q=80&w=1000",
    rooms: 10
  },
  {
    id: "h5",
    name: "Royal Heritage Hotel",
    location: "London, UK",
    price: 310,
    rating: 4.7,
    amenities: ["WiFi", "Afternoon Tea", "Restaurant", "Gym"],
    image: "https://images.unsplash.com/photo-1590073242679-bc631f7e270b?auto=format&fit=crop&q=80&w=1000",
    rooms: 18
  },
  {
    id: "h6",
    name: "Oceanview Paradise",
    location: "Maldives",
    price: 750,
    rating: 5.0,
    amenities: ["Private Beach", "Overwater Bungalows", "Spa", "Restaurant"],
    image: "https://images.unsplash.com/photo-1597754745689-22f31411d82a?auto=format&fit=crop&q=80&w=1000",
    rooms: 12
  },
  {
    id: "h7",
    name: "Desert Oasis Resort",
    location: "Dubai, UAE",
    price: 480,
    rating: 4.8,
    amenities: ["Pool", "Desert Safari", "Spa", "Fine Dining"],
    image: "https://images.unsplash.com/photo-1620085721161-49c8b2e6e5f2?auto=format&fit=crop&q=80&w=1000",
    rooms: 22
  },
  {
    id: "h8",
    name: "Harbor Lights Inn",
    location: "Sydney, Australia",
    price: 370,
    rating: 4.6,
    amenities: ["WiFi", "Harbor View", "Restaurant", "Gym"],
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000",
    rooms: 14
  },
  {
    id: "h9",
    name: "Tokyo Central Hotel",
    location: "Tokyo, Japan",
    price: 280,
    rating: 4.4,
    amenities: ["WiFi", "Onsen", "Restaurant", "Gym"],
    image: "https://images.unsplash.com/photo-1592888815753-37e15ee8fd61?auto=format&fit=crop&q=80&w=1000",
    rooms: 30
  },
  {
    id: "h10",
    name: "Venetian Grand Palace",
    location: "Venice, Italy",
    price: 430,
    rating: 4.9,
    amenities: ["Canal View", "Fine Dining", "WiFi", "Spa"],
    image: "https://images.unsplash.com/photo-1598785761340-171bb6797c94?auto=format&fit=crop&q=80&w=1000",
    rooms: 16
  },
  {
    id: "h11",
    name: "Jungle Escape Lodge",
    location: "Costa Rica",
    price: 260,
    rating: 4.3,
    amenities: ["WiFi", "Nature Trails", "Restaurant", "Spa"],
    image: "https://images.unsplash.com/photo-1618783507256-384e8dc5e00c?auto=format&fit=crop&q=80&w=1000",
    rooms: 20
  },
  {
    id: "h12",
    name: "Aurora View Resort",
    location: "Reykjavik, Iceland",
    price: 500,
    rating: 4.9,
    amenities: ["WiFi", "Northern Lights View", "Hot Springs", "Restaurant"],
    image: "https://images.unsplash.com/photo-1570125909239-e0b5f5e48f41?auto=format&fit=crop&q=80&w=1000",
    rooms: 8
  },
  {
    id: "h13",
    name: "The Savannah Lodge",
    location: "Nairobi, Kenya",
    price: 350,
    rating: 4.7,
    amenities: ["Safari Tours", "WiFi", "Restaurant", "Pool"],
    image: "https://images.unsplash.com/photo-1502904550040-7534597429b7?auto=format&fit=crop&q=80&w=1000",
    rooms: 25
  },
  {
    id: "h14",
    name: "Historic Vienna Hotel",
    location: "Vienna, Austria",
    price: 320,
    rating: 4.6,
    amenities: ["WiFi", "Fine Dining", "Museum Access", "Restaurant"],
    image: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?auto=format&fit=crop&q=80&w=1000",
    rooms: 15
  },
  {
    id: "h15",
    name: "Santorini Cliffside Retreat",
    location: "Santorini, Greece",
    price: 580,
    rating: 5.0,
    amenities: ["Ocean View", "Infinity Pool", "WiFi", "Restaurant"],
    image: "https://images.unsplash.com/photo-1596624115319-e17e4890a201?auto=format&fit=crop&q=80&w=1000",
    rooms: 10
  }
];

export const trains: Train[] = [
  {
    id: "t1",
    from: "Paris",
    to: "Amsterdam",
    departureDate: "2024-03-21",
    returnDate: "2024-03-28",
    price: 129,
    trainNumber: "EUR-123",
    duration: "3h 15m",
    seats: 56
  },
  {
    id: "t2",
    from: "London",
    to: "Edinburgh",
    departureDate: "2024-03-23",
    returnDate: "2024-03-30",
    price: 89,
    trainNumber: "UK-456",
    duration: "4h 30m",
    seats: 48
  },
  {
    id: "t3",
    from: "Berlin",
    to: "Prague",
    departureDate: "2024-04-05",
    returnDate: "2024-04-12",
    price: 75,
    trainNumber: "DE-CZ-789",
    duration: "4h 10m",
    seats: 60
  },
  {
    id: "t4",
    from: "Rome",
    to: "Venice",
    departureDate: "2024-04-10",
    returnDate: "2024-04-17",
    price: 55,
    trainNumber: "IT-101",
    duration: "3h 45m",
    seats: 70
  },
  {
    id: "t5",
    from: "Madrid",
    to: "Barcelona",
    departureDate: "2024-04-15",
    returnDate: "2024-04-22",
    price: 49,
    trainNumber: "ES-234",
    duration: "2h 50m",
    seats: 80
  },
  {
    id: "t6",
    from: "Brussels",
    to: "Cologne",
    departureDate: "2024-05-01",
    returnDate: "2024-05-08",
    price: 65,
    trainNumber: "BE-DE-678",
    duration: "2h 20m",
    seats: 45
  },
  {
    id: "t7",
    from: "Vienna",
    to: "Budapest",
    departureDate: "2024-05-10",
    returnDate: "2024-05-17",
    price: 55,
    trainNumber: "AT-HU-890",
    duration: "2h 40m",
    seats: 55
  },
  {
    id: "t8",
    from: "Zurich",
    to: "Milan",
    departureDate: "2024-06-05",
    returnDate: "2024-06-12",
    price: 85,
    trainNumber: "CH-IT-112",
    duration: "3h 55m",
    seats: 50
  },
  {
    id: "t9",
    from: "Stockholm",
    to: "Copenhagen",
    departureDate: "2024-06-15",
    returnDate: "2024-06-22",
    price: 95,
    trainNumber: "SE-DK-223",
    duration: "5h 10m",
    seats: 40
  },
  {
    id: "t10",
    from: "Warsaw",
    to: "Krakow",
    departureDate: "2024-07-01",
    returnDate: "2024-07-08",
    price: 39,
    trainNumber: "PL-345",
    duration: "2h 30m",
    seats: 75
  },
  {
    id: "t11",
    from: "Oslo",
    to: "Bergen",
    departureDate: "2024-07-12",
    returnDate: "2024-07-19",
    price: 120,
    trainNumber: "NO-678",
    duration: "6h 50m",
    seats: 35
  },
  {
    id: "t12",
    from: "Lisbon",
    to: "Porto",
    departureDate: "2024-08-01",
    returnDate: "2024-08-08",
    price: 45,
    trainNumber: "PT-901",
    duration: "3h 20m",
    seats: 65
  },
  {
    id: "t13",
    from: "Helsinki",
    to: "St. Petersburg",
    departureDate: "2024-08-15",
    returnDate: "2024-08-22",
    price: 130,
    trainNumber: "FI-RU-345",
    duration: "4h 45m",
    seats: 30
  },
  {
    id: "t14",
    from: "Munich",
    to: "Vienna",
    departureDate: "2024-09-01",
    returnDate: "2024-09-08",
    price: 70,
    trainNumber: "DE-AT-567",
    duration: "4h 00m",
    seats: 60
  },
  {
    id: "t15",
    from: "Moscow",
    to: "Berlin",
    departureDate: "2024-09-15",
    returnDate: "2024-09-25",
    price: 180,
    trainNumber: "RU-DE-789",
    duration: "20h 30m",
    seats: 25
  }
];
