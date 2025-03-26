import { getAccessToken } from "./auth";
import { getCityCodeFromName } from "./cityapi";

export const getHotelsByCityName = async (cityName: string) => {
  const token = await getAccessToken();
  const cityCode = await getCityCodeFromName(cityName);
  
  if (!cityCode) {
    console.error("City code not found!");
    return [];
  }

  // ✅ Step 1: Fetch Hotels by City
  const hotelResponse = await fetch(
    `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${cityCode}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const hotelData = await hotelResponse.json();
  const hotels = hotelData.data || [];

  if (hotels.length === 0) {
    console.warn("No hotels found for this city.");
    return [];
  }

  // ✅ Step 2: Extract Hotel IDs for Pricing API
  const hotelIds = hotels.map(hotel => hotel.hotelId).join(",");
  if (!hotelIds) return hotels;

  // ✅ Step 3: Fetch Live Prices & Ratings
  const priceResponse = await fetch(
    `https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=${hotelIds}&adults=1&checkInDate=2025-03-27&roomQuantity=1&paymentPolicy=NONE&bestRateOnly=true`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const priceData = await priceResponse.json();

  // ✅ Step 4: Merge Pricing Data with Hotels List
  const finalHotels = hotels.map((hotel) => {
    const offer = priceData.data?.find((offer) => offer.hotel.hotelId === hotel.hotelId);
    return {
      id: hotel.hotelId,
      name: hotel.name,
      location: hotel.address?.lines?.join(", ") || "",
      image: hotel.media?.[0]?.uri || "https://via.placeholder.com/300",
      rating: offer?.hotel?.rating || "N/A",
      price: offer?.offers?.[0]?.price?.total || "N/A",
      amenities: hotel.amenities || [],
    };
  });

  return finalHotels;
};
