import { getAccessToken } from "./auth";

export const getHotelOffers = async (hotelIds: string[], checkInDate: string) => {
  const token = await getAccessToken();

  const url = `https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=${hotelIds.join(
    ","
  )}&adults=1&checkInDate=${checkInDate}&roomQuantity=1&paymentPolicy=NONE&bestRateOnly=true`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.amadeus+json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching hotel offers:", error);
    return [];
  }
};
